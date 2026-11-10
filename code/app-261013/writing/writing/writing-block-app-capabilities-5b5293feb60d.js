const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./template-picker-5ceb20202957.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $2 as t,
  $4 as n,
  $It as r,
  $X as i,
  AO as a,
  Ak as o,
  Bl as s,
  CO as c,
  COt as l,
  CS as u,
  Cot as d,
  DDt as f,
  Dm as p,
  EPt as m,
  Ext as h,
  FD as g,
  Fat as _,
  GK as v,
  IDt as y,
  Ik as b,
  Irt as x,
  Ixt as S,
  JR as C,
  LT as w,
  Lk as T,
  Ll as E,
  Mz as D,
  ND as O,
  NV as k,
  Nz as A,
  Om as j,
  Pat as M,
  Pxt as N,
  QX as P,
  RT as F,
  Rl as I,
  SY as L,
  TJ as R,
  TLt as z,
  TO as B,
  TOt as V,
  USt as H,
  VDt as U,
  Vxt as ee,
  Xh as te,
  Xot as ne,
  YR as re,
  Yh as ie,
  Yot as ae,
  ZX as oe,
  _Mt as se,
  _wt as W,
  _xt as G,
  aL as ce,
  b0 as le,
  bz as K,
  cz as ue,
  d4 as q,
  dL as de,
  du as fe,
  e4 as pe,
  eV as me,
  eZ as he,
  f4 as ge,
  fL as _e,
  fPt as ve,
  fu as ye,
  gMt as be,
  gwt as xe,
  hE as Se,
  hot as Ce,
  i3 as we,
  iB as Te,
  jDt as Ee,
  jk as De,
  lM as Oe,
  lot as ke,
  nE as Ae,
  oL as je,
  pLt as Me,
  pM as Ne,
  pPt as Pe,
  qz as J,
  r3 as Fe,
  sz as Ie,
  t3 as Le,
  uM as Re,
  vzt as ze,
  wOt as Be,
  wot as Ve,
  xMt as He,
  xOt as Ue,
  xY as We,
  xz as Ge,
  y0 as Ke,
  yMt as qe,
  yzt as Je,
  zSt as Ye,
  zl as Xe,
  zxt as Ze,
} from "./app-shared-bbfeca5e5737.js";
import {
  A8 as Qe,
  AQn as $e,
  AT as et,
  B8 as tt,
  Bcr as nt,
  D8 as rt,
  DPn as it,
  DQn as at,
  EPn as ot,
  EQn as st,
  F8 as ct,
  Fm as lt,
  G8 as ut,
  GGn as dt,
  GMr as ft,
  H8 as pt,
  I8 as mt,
  Icr as ht,
  Idn as gt,
  JPn as _t,
  Jlr as vt,
  KF as yt,
  KNn as bt,
  L8 as xt,
  Ldn as St,
  M8 as Ct,
  N8 as wt,
  O8 as Tt,
  OPr as Et,
  P8 as Dt,
  Pm as Ot,
  Q8 as kt,
  QDr as At,
  Qur as jt,
  R8 as Mt,
  SQn as Nt,
  Txn as Pt,
  U8 as Ft,
  Vh as It,
  W8 as Lt,
  XDr as Rt,
  XMr as zt,
  XNn as Bt,
  Ymr as Vt,
  Z8 as Ht,
  ZPn as Ut,
  _Qn as Wt,
  _Vn as Gt,
  _xn as Kt,
  aVn as qt,
  bQn as Jt,
  dAn as Yt,
  dxt as Xt,
  eDr as Zt,
  ean as Qt,
  ehr as $t,
  fAn as en,
  fUn as tn,
  gVn as nn,
  hVn as rn,
  iNr as an,
  iVn as on,
  idr as sn,
  j8 as cn,
  jQn as ln,
  k8 as un,
  kPr as dn,
  kT as fn,
  lxt as pn,
  m8 as mn,
  mVn as hn,
  nDr as gn,
  oDr as _n,
  oVn as vn,
  ocr as yn,
  p6 as bn,
  p8 as xn,
  q8 as Sn,
  qF as Cn,
  qlr as wn,
  rDn as Tn,
  rNr as En,
  sv as Dn,
  tDn as On,
  tNr as kn,
  tan as An,
  uDn as jn,
  uUn as Mn,
  uv as Nn,
  yVn as Pn,
  z8 as Fn,
  zh as In,
} from "./app-initial-5851df3f6cb1.js";
import { Sp as Ln, xp as Rn } from "./app-primary-fe8a450b3b04.js";
import { i as zn, r as Bn } from "./writing-block-editor-5c2b4ee54b30.js";
import { a as Vn, n as Hn, o as Un, t as Wn } from "./chatgpt-writing-block-ai-tools-49a17c07b981.js";
import { r as Gn, t as Kn } from "./menu-53a4f4c3463d.js";
function qn(e) {
  let t = (0, Jn.c)(17),
    {
      accounts: n,
      chevronIcon: r,
      displayMode: i,
      isDisabled: a,
      isSelectable: o,
      onChange: s,
      onOpenChange: c,
      renderMenu: l,
      selectedAccount: u,
      selectorAriaLabel: d,
      senderLabel: f,
    } = e,
    p = i === `tokenized` && o,
    m;
  t[0] !== n ||
  t[1] !== r ||
  t[2] !== a ||
  t[3] !== s ||
  t[4] !== c ||
  t[5] !== l ||
  t[6] !== u ||
  t[7] !== d ||
  t[8] !== p
    ? ((m = p
        ? l({
            accounts: n,
            isDisabled: a,
            onChange: s,
            onOpenChange: c,
            selectedAccount: u,
            trigger: (0, Yn.jsxs)(`button`, {
              "aria-label": d,
              className: `inline-flex min-w-0 items-baseline gap-1 bg-transparent px-0 py-0 text-start leading-8 disabled:cursor-default`,
              disabled: a,
              type: `button`,
              children: [
                (0, Yn.jsx)(`span`, {
                  className: `truncate text-base leading-8 [color:var(--oai-wb-text-primary)]`,
                  children: u.label,
                }),
                r,
              ],
            }),
          })
        : (0, Yn.jsx)(`div`, {
            className: `leading-8 break-words [color:var(--oai-wb-text-primary)]`,
            children: u.label,
          })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let h = m,
    g;
  t[10] === f
    ? (g = t[11])
    : ((g = (0, Yn.jsx)(`div`, { className: `font-medium`, children: f })), (t[10] = f), (t[11] = g));
  let _;
  t[12] === h
    ? (_ = t[13])
    : ((_ = (0, Yn.jsx)(`div`, { className: `min-w-0 flex-1`, children: h })), (t[12] = h), (t[13] = _));
  let v;
  return (
    t[14] !== g || t[15] !== _
      ? ((v = (0, Yn.jsxs)(`div`, { className: `flex items-center gap-2`, children: [g, _] })),
        (t[14] = g),
        (t[15] = _),
        (t[16] = v))
      : (v = t[16]),
    v
  );
}
var Jn, Yn;
function Xn() {
  return (Xn = e(() => {
    ((Jn = ze()), (Yn = He()));
  }))();
}
function Zn(e) {
  "use no forget";
  let t = (0, er.useRef)(e);
  t.current = e;
  let [n, r] = (0, er.useState)({ kind: `idle` }),
    i = (0, er.useRef)(n);
  (0, er.useEffect)(() => {
    i.current = n;
  }, [n]);
  let a = (0, er.useCallback)((e, n = {}) => {
      t.current.onEvent?.({ name: e, metadata: n });
    }, []),
    o = (0, er.useCallback)((e) => {
      t.current.onFailure?.(e);
    }, []),
    s = (0, er.useCallback)((e, n) => {
      t.current.onSendIdChange?.(e, n);
    }, []);
  (0, er.useEffect)(() => {
    e.isAvailable &&
      !e.emailVersionSent &&
      e.initialSendId != null &&
      r((t) =>
        t.kind === `idle`
          ? { kind: `polling_final`, sendId: e.initialSendId, pollSource: `initial_send_id` }
          : t,
      );
  }, [e.emailVersionSent, e.initialSendId, e.isAvailable]);
  let c = (0, er.useCallback)((e) => {
      let n = t.current,
        a = n.selectedSenderAccount;
      !n.isAvailable ||
        a == null ||
        n.emailVersionSent ||
        xt(i.current) ||
        r((t) =>
          xt(t)
            ? t
            : {
                kind: `sending_in_progress`,
                clientSendId: e,
                sendId: e,
                undoRequested: !1,
                undoAvailable: !1,
                undoRequestInFlight: !1,
                unsendExpiresAtMs: null,
                selectedSenderAccount: a,
                recipient: n.recipient,
                cc: n.cc,
                bcc: n.bcc,
                subject: n.subject,
                body: n.body,
                sourceId: n.sourceId,
                sourceType: n.sourceType,
                emailAction: n.emailAction,
              },
        );
    }, []),
    l = (0, er.useCallback)(
      (e) => {
        let n = t.current;
        if (!n.isAvailable) return;
        let s = i.current,
          c = (n.now ?? Date.now)();
        if (
          (a(`undo_clicked`, {
            send_id: e,
            client_now_ms: String(c),
            document_visibility_state: n.getVisibilityState?.() ?? `unknown`,
            undo_available: s.kind === `sending_in_progress` ? String(s.undoAvailable) : `false`,
            unsend_expires_at_ms:
              s.kind === `sending_in_progress` && s.unsendExpiresAtMs != null
                ? String(Math.round(s.unsendExpiresAtMs))
                : `unknown`,
            undo_remaining_ms:
              s.kind === `sending_in_progress` && s.unsendExpiresAtMs != null
                ? String(Math.round(s.unsendExpiresAtMs - c))
                : `unknown`,
          }),
          s.kind === `polling_final`)
        ) {
          (a(`undo_failed`, { send_id: e, reason_code: `undo_not_allowed_in_polling_final` }),
            o({ kind: `undo_failed` }));
          return;
        }
        if (s.kind !== `sending_in_progress`) {
          (a(`undo_failed`, { send_id: e, reason_code: `undo_not_in_progress_state` }),
            o({ kind: `undo_failed` }));
          return;
        }
        if (s.sendId !== e) {
          (a(`undo_failed`, { send_id: s.sendId, reason_code: `undo_send_id_mismatch` }),
            o({ kind: `undo_failed` }));
          return;
        }
        s.undoRequestInFlight ||
          r((t) =>
            t.kind !== `sending_in_progress` || t.sendId !== e || t.undoRequestInFlight
              ? t
              : { ...t, undoRequested: !0, undoRequestInFlight: t.undoAvailable },
          );
      },
      [a, o],
    ),
    u = n.kind === `sending_in_progress` ? n.clientSendId : null;
  (0, er.useEffect)(() => {
    let e = i.current;
    if (
      u == null ||
      e.kind !== `sending_in_progress` ||
      e.clientSendId !== u ||
      e.undoAvailable ||
      e.unsendExpiresAtMs != null
    )
      return;
    s(e.sendId, e.selectedSenderAccount.id);
    let n = !1,
      c = (t, n) => {
        i.current.kind === `sending_in_progress` &&
          i.current.clientSendId === u &&
          (r({ kind: `idle` }),
          s(null),
          a(`send_failed`, {
            send_id: e.sendId,
            sender_provider: e.selectedSenderAccount.provider,
            sender_link_id: e.selectedSenderAccount.id,
            reason_code: t,
            ...(n == null ? {} : { error_message: n }),
          }),
          o({ kind: `send_failed`, detail: t, ...(n == null ? {} : { errorMessage: n }) }));
      };
    return (
      (async () => {
        let l = tt({
          sendId: e.sendId,
          selectedSenderAccount: e.selectedSenderAccount,
          recipient: e.recipient,
          cc: e.cc,
          bcc: e.bcc,
          subject: e.subject,
          body: e.body,
          sourceId: e.sourceId,
          sourceType: e.sourceType,
          emailAction: e.emailAction,
        });
        if (l.status === `error`) {
          c(l.error, l.errorMessage);
          return;
        }
        let d = t.current,
          f = d.monotonicNow ?? (() => (typeof performance > `u` ? Date.now() : performance.now())),
          p = f(),
          m = await d.transport.sendEmail(l.request);
        if (n) return;
        if (m.status === `error`) {
          c(`send_request_error`, m.errorMessage);
          return;
        }
        let h = (t.current.now ?? Date.now)(),
          g = m.data.sendId,
          _ = Date.parse(m.data.unsendExpiresAt);
        (a(`send_response_received`, {
          send_id: g,
          send_request_elapsed_ms: String(Math.round(f() - p)),
          unsend_expires_at: m.data.unsendExpiresAt,
          unsend_expires_at_ms: String(Math.round(_)),
          undo_remaining_ms: String(Math.round(_ - h)),
          client_now_ms: String(h),
        }),
          g !== e.clientSendId &&
            a(`send_id_mismatch`, {
              send_id: e.sendId,
              reason_code: `send_id_mismatch_client_vs_server`,
              client_send_id: e.clientSendId,
              server_send_id: g,
            }));
        let v = !Number.isFinite(_) || _ <= h;
        v &&
          i.current.kind === `sending_in_progress` &&
          i.current.clientSendId === u &&
          i.current.undoRequested &&
          o({ kind: `undo_failed` });
        let y = i.current;
        y.kind === `sending_in_progress` &&
          y.clientSendId === u &&
          (v
            ? r({ kind: `polling_final`, sendId: g, pollSource: `active_send` })
            : (r({
                ...y,
                sendId: g,
                undoAvailable: !0,
                undoRequestInFlight: y.undoRequested || y.undoRequestInFlight,
                unsendExpiresAtMs: _,
              }),
              s(g, e.selectedSenderAccount.id)));
      })(),
      () => {
        n = !0;
      }
    );
  }, [u, a, o, s]);
  let d =
    n.kind === `sending_in_progress` && n.undoRequested && n.undoAvailable && n.undoRequestInFlight
      ? n.sendId
      : null;
  (0, er.useEffect)(() => {
    if (d == null) return;
    let e = !1;
    return (
      (async () => {
        let n = await t.current.transport.unsendEmail({ send_id: d });
        e ||
          i.current.kind !== `sending_in_progress` ||
          i.current.sendId !== d ||
          (n.status === `success`
            ? (a(`undo_success`, { send_id: d }), r({ kind: `success_unsent` }), s(null))
            : (a(`undo_failed`, {
                send_id: d,
                reason_code: `undo_request_error`,
                ...(n.errorMessage == null ? {} : { error_message: n.errorMessage }),
              }),
              r({ kind: `polling_final`, sendId: d, pollSource: `active_send` }),
              o({ kind: `undo_failed` })));
      })(),
      () => {
        e = !0;
      }
    );
  }, [a, o, s, d]);
  let f =
      n.kind === `sending_in_progress` &&
      n.undoAvailable &&
      !n.undoRequestInFlight &&
      n.unsendExpiresAtMs != null
        ? n.sendId
        : null,
    p =
      n.kind === `sending_in_progress` && n.undoAvailable && !n.undoRequestInFlight
        ? n.unsendExpiresAtMs
        : null;
  (0, er.useEffect)(() => {
    if (f != null && p != null)
      return Qn(p, t.current.now ?? Date.now, () => {
        r((e) =>
          e.kind !== `sending_in_progress` || e.sendId !== f || e.undoRequestInFlight
            ? e
            : { kind: `polling_final`, sendId: f, pollSource: `active_send` },
        );
      });
  }, [f, p]);
  let m = n.kind === `polling_final` ? n.sendId : null,
    h = n.kind === `polling_final` ? n.pollSource : null;
  return (
    (0, er.useEffect)(() => {
      if (m == null) return;
      let e = t.current.pollingTiming ?? tr,
        n = !1,
        c = async () => {
          for (let r = 0; r < e.pollMaxAttempts; r++) {
            if (n) return { outcome: `cancelled` };
            let i = await t.current.transport.getEmailStatus({ send_id: m });
            if (
              (a(`poll_attempt`, {
                send_id: m,
                attempt_number: String(r + 1),
                poll_source: h ?? `null`,
                request_status: i.requestStatus,
                ...(i.requestStatus === `success` ? { email_status: i.emailStatus } : {}),
                ...(i.errorMessage == null ? {} : { error_message: i.errorMessage }),
              }),
              i.requestStatus === `success`)
            ) {
              if (i.emailStatus === `sent`)
                return {
                  outcome: `send_success`,
                  ...(i.sentEmail == null ? {} : { sentEmail: i.sentEmail }),
                };
              if (i.emailStatus === `send_failed`)
                return {
                  outcome: `send_failed`,
                  reasonCode: `poll_status_send_failed`,
                  errorMessage: i.errorMessage,
                };
              if (i.emailStatus === `unsent`) return { outcome: `undo_success` };
            }
            await $n(e.pollIntervalMs);
          }
          return { outcome: `send_failed`, reasonCode: `poll_exhausted` };
        };
      return (
        (async () => {
          let e = await c();
          e.outcome !== `cancelled` &&
            i.current.kind === `polling_final` &&
            i.current.sendId === m &&
            (e.outcome === `send_success`
              ? (a(`send_success`, { send_id: m }),
                r({ kind: `idle` }),
                s(null),
                t.current.markEmailVersionSent?.(e.sentEmail))
              : e.outcome === `send_failed`
                ? (a(`send_failed`, {
                    send_id: m,
                    reason_code: e.reasonCode,
                    ...(e.errorMessage == null ? {} : { error_message: e.errorMessage }),
                  }),
                  r({ kind: `idle` }),
                  s(null),
                  o({
                    kind: `send_failed`,
                    ...(e.errorMessage == null ? {} : { errorMessage: e.errorMessage }),
                  }))
                : (a(`undo_success`, { send_id: m }), r({ kind: `success_unsent` }), s(null)));
        })(),
        () => {
          n = !0;
        }
      );
    }, [a, h, o, s, m]),
    e.isAvailable
      ? { sendEmail: c, undoEmailSend: l, state: e.emailVersionSent ? { kind: `success_sent` } : n }
      : { sendEmail: () => void 0, undoEmailSend: () => void 0, state: { kind: `idle` } }
  );
}
function Qn(e, t, n) {
  let r = setTimeout(n, Math.max(e - t(), 0));
  return () => clearTimeout(r);
}
function $n(e) {
  return new Promise((t) => setTimeout(t, e));
}
var er, tr;
function nr() {
  return (nr = e(() => {
    ((er = Je()), mt(), (tr = { pollIntervalMs: 1500, pollMaxAttempts: 5 }));
  }))();
}
function rr(e) {
  e.preventDefault();
}
var ir, ar, or, sr;
function cr() {
  return (cr = e(() => {
    ((ir = ze()),
      se(),
      (ar = Je()),
      (or = He()),
      (sr = (0, ar.forwardRef)(function (e, t) {
        let n = (0, ir.c)(31),
          r,
          i,
          a,
          o,
          s,
          c,
          l,
          u;
        n[0] === e
          ? ((r = n[1]), (i = n[2]), (a = n[3]), (o = n[4]), (s = n[5]), (c = n[6]), (l = n[7]), (u = n[8]))
          : (({
              "aria-disabled": r,
              className: i,
              icon: a,
              label: o,
              onClick: s,
              status: l,
              type: u,
              ...c
            } = e),
            (n[0] = e),
            (n[1] = r),
            (n[2] = i),
            (n[3] = a),
            (n[4] = o),
            (n[5] = s),
            (n[6] = c),
            (n[7] = l),
            (n[8] = u));
        let d = l === void 0 ? `ready` : l,
          f = u === void 0 ? `button` : u,
          p = d === `sent`,
          m = (0, ar.useRef)(null),
          h,
          g;
        (n[9] === p
          ? ((h = n[10]), (g = n[11]))
          : ((h = () => {
              let e = m.current;
              p && e != null && e.ownerDocument.activeElement === e && e.blur();
            }),
            (g = [p]),
            (n[9] = p),
            (n[10] = h),
            (n[11] = g)),
          (0, ar.useEffect)(h, g));
        let _ = p ? !0 : r,
          v = p
            ? `ms-1 flex size-9 cursor-default items-center justify-center rounded-full`
            : `ms-1 flex h-9 items-center rounded-[24px] pe-3 text-sm font-medium hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40`,
          y;
        n[12] !== i || n[13] !== v ? ((y = be(v, i)), (n[12] = i), (n[13] = v), (n[14] = y)) : (y = n[14]);
        let b = p ? rr : s,
          x;
        n[15] === t
          ? (x = n[16])
          : ((x = (e) => {
              ((m.current = e), typeof t == `function` ? t(e) : t != null && (t.current = e));
            }),
            (n[15] = t),
            (n[16] = x));
        let S = p ? -1 : c.tabIndex,
          C;
        n[17] !== a || n[18] !== p || n[19] !== o
          ? ((C = p
              ? a
              : (0, or.jsxs)(or.Fragment, {
                  children: [
                    (0, or.jsx)(`span`, {
                      className: `flex size-8 shrink-0 items-center justify-center ps-1`,
                      children: a,
                    }),
                    (0, or.jsx)(`span`, { children: o }),
                  ],
                })),
            (n[17] = a),
            (n[18] = p),
            (n[19] = o),
            (n[20] = C))
          : (C = n[20]);
        let w;
        return (
          n[21] !== c ||
          n[22] !== d ||
          n[23] !== S ||
          n[24] !== C ||
          n[25] !== _ ||
          n[26] !== y ||
          n[27] !== b ||
          n[28] !== x ||
          n[29] !== f
            ? ((w = (0, or.jsx)(`button`, {
                ...c,
                "aria-disabled": _,
                className: y,
                "data-writing-block-email-send-status": d,
                onClick: b,
                ref: x,
                tabIndex: S,
                type: f,
                children: C,
              })),
              (n[21] = c),
              (n[22] = d),
              (n[23] = S),
              (n[24] = C),
              (n[25] = _),
              (n[26] = y),
              (n[27] = b),
              (n[28] = x),
              (n[29] = f),
              (n[30] = w))
            : (w = n[30]),
          w
        );
      })));
  }))();
}
var lr, ur, dr, fr;
function pr() {
  return (pr = e(() => {
    ((lr = `_reveal_1xm50_1`),
      (ur = `_title_1xm50_10`),
      (dr = `_chevron_1xm50_28`),
      (fr = { reveal: lr, title: ur, chevron: dr }));
  }))();
}
function mr(e) {
  let t = (0, _r.c)(38),
    {
      children: r,
      disabled: i,
      downloadMenu: a,
      libraryFileId: o,
      onLibraryClick: s,
      onOpenVersionHistory: l,
      onSave: u,
      isSaving: d,
      saveConfirmation: f,
      saveToPage: m,
    } = e,
    g = Bt(),
    _ = g ? `/space/files` : `/library`,
    b = U(),
    x = h(),
    S;
  if (m) {
    let e;
    (t[0] !== b || t[1] !== d
      ? ((e = d
          ? b.formatMessage({
              id: `codex.writingBlock.page.saving`,
              defaultMessage: `Creating Page`,
              description: `Accessible label on the writing block save control while its editable Page is being created. Keep this progress label short.`,
            })
          : b.formatMessage({
              id: `codex.writingBlock.page.save`,
              defaultMessage: `Save`,
              description: `Label, accessible label, and tooltip for a writing block's save control. Saves the document as a Page in the existing writing block so it remains editable inline. Keep this action short.`,
            })),
        (t[0] = b),
        (t[1] = d),
        (t[2] = e))
      : (e = t[2]),
      (S = e));
  } else if (d && g) {
    let e;
    (t[3] === b
      ? (e = t[4])
      : ((e = b.formatMessage({
          id: `codex.writingBlock.inlineLibrary.addingToLibrary.space`,
          defaultMessage: `Adding to Space`,
          description: `Accessible label and hover tooltip for the writing block header's Space save control while the document is being saved. Describes an operation in progress, not an action to start. Keep this status label short. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (t[3] = b),
        (t[4] = e)),
      (S = e));
  } else if (d) {
    let e;
    (t[5] === b
      ? (e = t[6])
      : ((e = b.formatMessage({
          id: `codex.writingBlock.inlineLibrary.addingToLibrary`,
          defaultMessage: `Adding to Library`,
          description: `Accessible label and hover tooltip for the writing block header's Library save control while the document is being saved. Describes an operation in progress, not an action to start. Keep this status label short.`,
        })),
        (t[5] = b),
        (t[6] = e)),
      (S = e));
  } else if (g) {
    let e;
    (t[7] === b
      ? (e = t[8])
      : ((e = b.formatMessage({
          id: `codex.writingBlock.inlineLibrary.save.space`,
          defaultMessage: `Add to Space`,
          description: `Tooltip and accessible label for the inline document title control. Saves the document to the user's Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (t[7] = b),
        (t[8] = e)),
      (S = e));
  } else {
    let e;
    (t[9] === b
      ? (e = t[10])
      : ((e = b.formatMessage({
          id: `codex.writingBlock.inlineLibrary.save`,
          defaultMessage: `Add to Library`,
          description: `Tooltip and accessible label for the inline document title control. Saves the document to the user's Library.`,
        })),
        (t[9] = b),
        (t[10] = e)),
      (S = e));
  }
  let C;
  t[11] !== r ||
  t[12] !== i ||
  t[13] !== a ||
  t[14] !== g ||
  t[15] !== _ ||
  t[16] !== o ||
  t[17] !== x ||
  t[18] !== s ||
  t[19] !== l ||
  t[20] !== f
    ? ((C = o
        ? (0, Y.jsxs)(c, {
            align: `start`,
            contentWidth: `menuBounded`,
            triggerButton: (0, Y.jsxs)(n, {
              ref: (e) => {
                f === `keyboard` &&
                  e != null &&
                  e.ownerDocument.activeElement === e.ownerDocument.body &&
                  e.focus({ preventScroll: !0 });
              },
              className: be(fr.title, `min-w-0`),
              color: `ghostOutline`,
              radius: `full`,
              size: `dialogGhost`,
              children: [
                (0, Y.jsx)(D, { asset: L }),
                (0, Y.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-0.5`,
                  children: [
                    (0, Y.jsx)(`span`, { className: `min-w-0 truncate`, children: r }),
                    (0, Y.jsx)(D, { className: fr.chevron, asset: ie }),
                  ],
                }),
              ],
            }),
            children: [
              (0, Y.jsx)(hr, { libraryFileId: o, onLibraryClick: s, children: r }),
              (0, Y.jsx)(B.Separator, {}),
              s == null
                ? null
                : (0, Y.jsxs)(B.Item, {
                    onSelect: () => {
                      (s(), x(_));
                    },
                    children: [
                      (0, Y.jsx)(B.ItemIcon, {
                        size: `md`,
                        children: g ? (0, Y.jsx)(v, {}) : (0, Y.jsx)(me, {}),
                      }),
                      g
                        ? (0, Y.jsx)(y, {
                            id: `codex.writingBlock.inlineLibrary.openLibrary.space`,
                            defaultMessage: `Open in Space`,
                            description: `Menu action that opens the Space containing the saved note. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                          })
                        : (0, Y.jsx)(y, {
                            id: `codex.writingBlock.inlineLibrary.openLibrary`,
                            defaultMessage: `Open in Library`,
                            description: `Menu action that opens the Library containing the saved note.`,
                          }),
                    ],
                  }),
              a,
              l == null
                ? null
                : (0, Y.jsx)(B.Item, {
                    disabled: i,
                    onSelect: l,
                    leftIconAsset: p,
                    children: (0, Y.jsx)(y, {
                      id: `codex.writingBlock.inlineLibrary.versionHistory`,
                      defaultMessage: `Version history`,
                      description: `Menu action that shows the saved note's previous versions.`,
                    }),
                  }),
            ],
          })
        : null),
      (t[11] = r),
      (t[12] = i),
      (t[13] = a),
      (t[14] = g),
      (t[15] = _),
      (t[16] = o),
      (t[17] = x),
      (t[18] = s),
      (t[19] = l),
      (t[20] = f),
      (t[21] = C))
    : (C = t[21]);
  let w;
  t[22] !== r || t[23] !== i || t[24] !== d || t[25] !== g || t[26] !== o || t[27] !== u || t[28] !== S
    ? ((w =
        !o && u != null
          ? (0, Y.jsx)(Ie, {
              tooltipContent: (0, Y.jsxs)(`span`, {
                className: `flex items-center gap-1`,
                children: [g ? (0, Y.jsx)(v, {}) : (0, Y.jsx)(me, {}), S],
              }),
              children: (0, Y.jsxs)(n, {
                className: be(fr.title, `min-w-0`),
                "aria-label": S,
                "aria-busy": d || void 0,
                color: `ghost`,
                disabled: i || d,
                radius: `full`,
                size: `imageToolbar`,
                onClick: (e) => u(e.detail === 0),
                children: [
                  (0, Y.jsx)(`span`, {
                    className: fr.reveal,
                    children: (0, Y.jsx)(`span`, {
                      className: `min-w-0 overflow-hidden`,
                      children: (0, Y.jsx)(`span`, {
                        className: `flex w-5 items-center justify-center`,
                        children: d
                          ? (0, Y.jsx)(Fe, { as: `span`, className: `size-5` })
                          : (0, Y.jsx)(D, { asset: P }),
                      }),
                    }),
                  }),
                  (0, Y.jsx)(`span`, { className: `min-w-0 truncate`, children: r }),
                ],
              }),
            })
          : null),
      (t[22] = r),
      (t[23] = i),
      (t[24] = d),
      (t[25] = g),
      (t[26] = o),
      (t[27] = u),
      (t[28] = S),
      (t[29] = w))
    : (w = t[29]);
  let T;
  t[30] !== r || t[31] !== o || t[32] !== u
    ? ((T =
        !o && u == null
          ? (0, Y.jsx)(`span`, { className: `min-w-0 truncate px-3 py-2 text-tertiary`, children: r })
          : null),
      (t[30] = r),
      (t[31] = o),
      (t[32] = u),
      (t[33] = T))
    : (T = t[33]);
  let E;
  return (
    t[34] !== C || t[35] !== w || t[36] !== T
      ? ((E = (0, Y.jsxs)(`div`, {
          className: `ms-2 flex min-w-0 grow items-center text-sm font-normal select-none`,
          children: [C, w, T],
        })),
        (t[34] = C),
        (t[35] = w),
        (t[36] = T),
        (t[37] = E))
      : (E = t[37]),
    E
  );
}
function hr(e) {
  let t = (0, _r.c)(29),
    { children: n, libraryFileId: r, onLibraryClick: i } = e,
    a = ee(ft),
    o = ee(zt),
    s = Bt(),
    c = s ? `/space/files` : `/library`,
    l = h(),
    u;
  t[0] !== a || t[1] !== r || t[2] !== o
    ? ((u = [`library-api`, a, o, `note-location`, r]), (t[0] = a), (t[1] = r), (t[2] = o), (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] !== a || t[5] !== r
    ? ((d =
        a == null
          ? H
          : async (e) => {
              let { signal: t } = e,
                n = {
                  additionalHeaders: { "ChatGPT-Account-ID": a },
                  expectedErrorStatuses: [403, 404],
                  signal: t,
                },
                i = await Vt.safeGet(`/files/library/files/{library_file_id}`, {
                  ...n,
                  parameters: { path: { library_file_id: r } },
                });
              return i.directory_id == null
                ? []
                : (
                    await Vt.safeGet(`/files/library/directories/path`, {
                      ...n,
                      parameters: { query: { directory_id: i.directory_id } },
                    })
                  ).items.filter(gr);
            }),
      (t[4] = a),
      (t[5] = r),
      (t[6] = d))
    : (d = t[6]);
  let f = a != null && i != null,
    p;
  t[7] !== u || t[8] !== d || t[9] !== f
    ? ((p = { queryKey: u, queryFn: d, enabled: f, staleTime: 0, retry: !1 }),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let { data: m } = ne(p),
    g;
  t[11] === s
    ? (g = t[12])
    : ((g = {
        id: null,
        name: s
          ? (0, Y.jsx)(y, {
              id: `codex.writingBlock.inlineLibrary.location.space`,
              defaultMessage: `Space`,
              description: `Location shown below the saved note title in its actions menu. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : (0, Y.jsx)(y, {
              id: `codex.writingBlock.inlineLibrary.location`,
              defaultMessage: `Library`,
              description: `Location shown below the saved note title in its actions menu.`,
            }),
      }),
      (t[11] = s),
      (t[12] = g));
  let _;
  t[13] === m ? (_ = t[14]) : ((_ = m ?? []), (t[13] = m), (t[14] = _));
  let v;
  t[15] !== g || t[16] !== _ ? ((v = [g, ..._]), (t[15] = g), (t[16] = _), (t[17] = v)) : (v = t[17]);
  let b = v,
    x;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Y.jsx)(`span`, {
        className: `flex h-lh items-center`,
        children: (0, Y.jsx)(D, { asset: T }),
      })),
      (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] === n
    ? (S = t[20])
    : ((S = (0, Y.jsx)(`span`, { className: `truncate text-default`, children: n })),
      (t[19] = n),
      (t[20] = S));
  let C;
  t[21] !== b || t[22] !== c || t[23] !== l || t[24] !== i
    ? ((C = (0, Y.jsx)(`div`, {
        className: `flex flex-wrap items-center gap-1 text-xs leading-dense text-tertiary`,
        children: b.map((e, t) =>
          (0, Y.jsxs)(
            `span`,
            {
              className: `flex max-w-full min-w-0 items-start gap-1`,
              children: [
                t > 0 ? (0, Y.jsx)(`span`, { "aria-hidden": `true`, children: `/` }) : null,
                (0, Y.jsx)(B.Item, {
                  className: `outline-hidden`,
                  variant: `unstyled`,
                  allowWrap: !0,
                  disabled: i == null,
                  onSelect: () => {
                    (i?.(), l(e.id == null ? c : `${c}/d/${encodeURIComponent(e.id)}`));
                  },
                  children: (0, Y.jsx)(`span`, {
                    className: `wrap-anywhere text-tertiary group-hover:text-default group-focus:text-default`,
                    children: e.name,
                  }),
                }),
              ],
            },
            e.id ?? `root`,
          ),
        ),
      })),
      (t[21] = b),
      (t[22] = c),
      (t[23] = l),
      (t[24] = i),
      (t[25] = C))
    : (C = t[25]);
  let w;
  return (
    t[26] !== C || t[27] !== S
      ? ((w = (0, Y.jsxs)(`div`, {
          className: `flex min-w-0 gap-2 px-row-x py-row-y`,
          children: [x, (0, Y.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col`, children: [S, C] })],
        })),
        (t[26] = C),
        (t[27] = S),
        (t[28] = w))
      : (w = t[28]),
    w
  );
}
function gr(e) {
  return !e.is_root;
}
var _r, Y;
function vr() {
  return (vr = e(() => {
    ((_r = ze()),
      te(),
      j(),
      oe(),
      b(),
      We(),
      Ye(),
      ae(),
      se(),
      N(),
      Ee(),
      G(),
      kn(),
      $t(),
      Le(),
      a(),
      A(),
      R(),
      we(),
      ue(),
      bt(),
      pr(),
      (Y = He()));
  }))();
}
var X, yr;
function br() {
  return (br = e(() => {
    (Je(),
      (X = He()),
      (yr = (e) =>
        (0, X.jsxs)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, X.jsx)(`path`, {
              d: `M13.0039 2.59375C13.2705 2.59375 13.5415 2.66842 13.8164 2.81836C14.0914 2.96836 14.3995 3.21061 14.7412 3.54395L19.6914 8.44336C20.2331 8.98503 20.5039 9.53542 20.5039 10.0938V17.5439C20.5039 18.2689 20.3251 18.94 19.9668 19.5566C19.6085 20.1649 19.1205 20.6476 18.5039 21.0059C17.8956 21.3642 17.2289 21.5439 16.5039 21.5439H7.50391C6.77891 21.5439 6.10788 21.3642 5.49121 21.0059C4.88307 20.6476 4.39928 20.1648 4.04102 19.5566C3.68271 18.94 3.50394 18.2689 3.50391 17.5439V6.59375C3.50391 5.86882 3.68275 5.20204 4.04102 4.59375C4.39935 3.97708 4.88288 3.48919 5.49121 3.13086C6.10787 2.77254 6.77892 2.59375 7.50391 2.59375H13.0039Z`,
              fill: `url(#paint0_linear_4603_166847)`,
            }),
            (0, X.jsx)(`path`, {
              d: `M14.6758 8.59375H9.33203C8.32239 8.59375 7.50391 9.41223 7.50391 10.4219V15.7656C7.50391 16.7753 8.32239 17.5938 9.33203 17.5938H14.6758C15.6854 17.5938 16.5039 16.7753 16.5039 15.7656V10.4219C16.5039 9.41223 15.6854 8.59375 14.6758 8.59375Z`,
              fill: `url(#paint1_radial_4603_166847)`,
            }),
            (0, X.jsx)(`path`, {
              d: `M14.6758 8.59375H9.33203C8.32239 8.59375 7.50391 9.41223 7.50391 10.4219V15.7656C7.50391 16.7753 8.32239 17.5938 9.33203 17.5938H14.6758C15.6854 17.5938 16.5039 16.7753 16.5039 15.7656V10.4219C16.5039 9.41223 15.6854 8.59375 14.6758 8.59375Z`,
              fill: `url(#paint2_radial_4603_166847)`,
              fillOpacity: 0.3,
            }),
            (0, X.jsx)(`path`, {
              d: `M11.566 13.9895V15.6643H10.4082V10.5215H12.1969C12.8374 10.5215 13.3249 10.6613 13.6595 10.9411C13.9965 11.2208 14.165 11.6356 14.165 12.1855C14.165 12.7522 13.9762 13.1945 13.5986 13.5125C13.2234 13.8305 12.7191 13.9895 12.0858 13.9895H11.566ZM11.566 11.4109V13.1H12.05C12.3368 13.1 12.5578 13.0248 12.7131 12.8741C12.8685 12.7235 12.9462 12.5071 12.9462 12.225C12.9462 11.9644 12.8697 11.7635 12.7167 11.6225C12.5662 11.4814 12.3499 11.4109 12.0679 11.4109H11.566Z`,
              fill: `white`,
            }),
            (0, X.jsx)(`path`, {
              d: `M13.0039 2.59375C13.2706 2.59375 13.5414 2.66875 13.8164 2.81875C14.0914 2.96875 14.3997 3.21042 14.7414 3.54375L19.6914 8.44375C20.2331 8.98542 20.5039 9.53542 20.5039 10.0938H15.7164C14.8831 10.0938 14.2206 9.85208 13.7289 9.36875C13.2456 8.87708 13.0039 8.21458 13.0039 7.38125V2.59375Z`,
              fill: `url(#paint3_linear_4603_166847)`,
            }),
            (0, X.jsxs)(`defs`, {
              children: [
                (0, X.jsxs)(`linearGradient`, {
                  id: `paint0_linear_4603_166847`,
                  x1: 4.50391,
                  y1: 20.5938,
                  x2: 16.0039,
                  y2: 7.09375,
                  gradientUnits: `userSpaceOnUse`,
                  children: [
                    (0, X.jsx)(`stop`, { offset: 0.0240385, stopColor: `#F35AAA` }),
                    (0, X.jsx)(`stop`, { offset: 0.528846, stopColor: `#E1473D` }),
                    (0, X.jsx)(`stop`, { offset: 1, stopColor: `#B0212C` }),
                  ],
                }),
                (0, X.jsxs)(`radialGradient`, {
                  id: `paint1_radial_4603_166847`,
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: `userSpaceOnUse`,
                  gradientTransform: `translate(7.50281 8.59375) rotate(45) scale(12.7279)`,
                  children: [
                    (0, X.jsx)(`stop`, { stopColor: `#F8193E` }),
                    (0, X.jsx)(`stop`, { offset: 0.939062, stopColor: `#920616` }),
                  ],
                }),
                (0, X.jsxs)(`radialGradient`, {
                  id: `paint2_radial_4603_166847`,
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: `userSpaceOnUse`,
                  gradientTransform: `translate(12.0028 13.9937) rotate(90) scale(6.3 7.17187)`,
                  children: [
                    (0, X.jsx)(`stop`, { offset: 0.575893, stopColor: `#FFB055`, stopOpacity: 0 }),
                    (0, X.jsx)(`stop`, { offset: 0.973806, stopColor: `#FFF2BE` }),
                  ],
                }),
                (0, X.jsxs)(`linearGradient`, {
                  id: `paint3_linear_4603_166847`,
                  x1: 16.5039,
                  y1: 6.09375,
                  x2: 13.5039,
                  y2: 9.59375,
                  gradientUnits: `userSpaceOnUse`,
                  children: [
                    (0, X.jsx)(`stop`, { stopColor: `#FF8F29` }),
                    (0, X.jsx)(`stop`, { offset: 0.850962, stopColor: `#FE80AD` }),
                  ],
                }),
              ],
            }),
          ],
        })));
  }))();
}
function xr(e) {
  let t = (0, Cr.c)(73),
    {
      content: n,
      conversationId: r,
      disabled: i,
      onSubmittingChange: a,
      selectedTemplate: o,
      writingBlockId: s,
    } = e,
    l = S(d),
    u = U(),
    f = ee(Tn),
    p = ee(jn),
    m = ee(Er),
    h;
  t[0] === p ? (h = t[1]) : ((h = { hostId: p }), (t[0] = p), (t[1] = h));
  let g = vt(h),
    _;
  t[2] === f ? (_ = t[3]) : ((_ = f == null ? void 0 : [f]), (t[2] = f), (t[3] = _));
  let v;
  t[4] !== p || t[5] !== g || t[6] !== _
    ? ((v = { enabled: g, hostId: p, resolveActiveRoots: !0, roots: _ }),
      (t[4] = p),
      (t[5] = g),
      (t[6] = _),
      (t[7] = v))
    : (v = t[7]);
  let { data: b, isLoading: x } = nt(v),
    C;
  t[8] !== b || t[9] !== g
    ? ((C = g ? b?.find(Sr) : void 0), (t[8] = b), (t[9] = g), (t[10] = C))
    : (C = t[10]);
  let w = C,
    T;
  t[11] === f ? (T = t[12]) : ((T = f ?? []), (t[11] = f), (t[12] = T));
  let E = o != null,
    D;
  t[13] === E ? (D = t[14]) : ((D = { enabled: E }), (t[13] = E), (t[14] = D));
  let { skills: O } = en(T, p, D),
    { data: A } = lt(O, p),
    j;
  t[15] !== A || t[16] !== o || t[17] !== O
    ? ((j =
        o == null || A == null
          ? null
          : (Dn(O, `presentation`, A).find((e) => e.name === o.name && e.path === o.path) ?? null)),
      (t[15] = A),
      (t[16] = o),
      (t[17] = O),
      (t[18] = j))
    : (j = t[18]);
  let M = j,
    [N, P] = (0, wr.useState)(!1),
    F;
  t[19] !== M ||
  t[20] !== r ||
  t[21] !== u ||
  t[22] !== a ||
  t[23] !== m ||
  t[24] !== w ||
  t[25] !== l ||
  t[26] !== o ||
  t[27] !== s
    ? ((F = () => {
        if (o != null && M == null) return;
        (P(!0), a(!0));
        let e = M == null ? null : Oe({ displayLabel: Re(M), name: M.name, path: M.path }),
          t;
        t =
          m === `google-slides`
            ? e == null
              ? u.formatMessage({
                  id: `codex.writingBlock.slides.create.googleSlidesPromptWithOutlineAbove`,
                  defaultMessage: `make a Google Slides presentation with the outline above`,
                  description: `User message following a Presentations plugin mention that asks Codex to create a Google Slides presentation from the selected presentation outline above`,
                })
              : u.formatMessage(
                  {
                    id: `codex.writingBlock.slides.create.googleSlidesPromptWithOutlineAboveAndTemplate`,
                    defaultMessage: `make a Google Slides presentation with the outline above using {template}`,
                    description: `User message following a Presentations plugin mention that asks Codex to create a Google Slides presentation from the selected outline above; template is the selected installed presentation template skill mention`,
                  },
                  { template: e },
                )
            : e == null
              ? u.formatMessage({
                  id: `codex.writingBlock.slides.create.promptWithOutlineAbove`,
                  defaultMessage: `make a presentation with the outline above`,
                  description: `User message following a Presentations plugin mention that asks Codex to create a presentation from the selected presentation outline above`,
                })
              : u.formatMessage(
                  {
                    id: `codex.writingBlock.slides.create.promptWithOutlineAboveAndTemplate`,
                    defaultMessage: `make a presentation with the outline above using {template}`,
                    description: `User message following a Presentations plugin mention that asks Codex to create a presentation from the selected outline above; template is the selected installed presentation template skill mention`,
                  },
                  { template: e },
                );
        let n = w == null ? t : pn({ defaultPrompt: t, pluginDisplayName: gt(w), pluginId: w.plugin.id });
        et({
          scope: l,
          additionalContext: {
            codex_apps_artifact_outline: {
              kind: `untrusted`,
              value: `Use the presentation outline in writing block "${s}".`,
            },
            codex_apps_artifact_platform: {
              kind: `untrusted`,
              value:
                m === `google-slides`
                  ? `Create the presentation in Google Slides.`
                  : `Create the presentation in Microsoft PowerPoint.`,
            },
          },
          turnTrigger: `slides_outline`,
          model: void 0,
          prompt: n,
          threadId: r,
          thinking: void 0,
        })
          .catch(() => {
            l.get(Ce).danger(
              u.formatMessage({
                id: `codex.writingBlock.slides.create.error`,
                defaultMessage: `Couldn’t create slides from the presentation outline`,
                description: `Error toast shown when a presentation outline cannot be sent to the current Codex task`,
              }),
              { errorAnalytics: { toastId: `codex.writingBlock.slides.create.error` } },
            );
          })
          .finally(() => {
            (P(!1), a(!1));
          });
      }),
      (t[19] = M),
      (t[20] = r),
      (t[21] = u),
      (t[22] = a),
      (t[23] = m),
      (t[24] = w),
      (t[25] = l),
      (t[26] = o),
      (t[27] = s),
      (t[28] = F))
    : (F = t[28]);
  let I = F,
    L;
  t[29] !== M || t[30] !== n || t[31] !== i || t[32] !== x || t[33] !== N || t[34] !== o
    ? ((L = i || N || x || n.trim().length === 0 || (o != null && M == null)),
      (t[29] = M),
      (t[30] = n),
      (t[31] = i),
      (t[32] = x),
      (t[33] = N),
      (t[34] = o),
      (t[35] = L))
    : (L = t[35]);
  let R = L,
    z = m === `google-slides` ? de : yr,
    V;
  t[36] !== z || t[37] !== N
    ? ((V = N
        ? (0, Tr.jsx)(Fe, { className: `icon-xs` })
        : (0, Tr.jsx)(z, { "aria-hidden": !0, className: `icon-sm` })),
      (t[36] = z),
      (t[37] = N),
      (t[38] = V))
    : (V = t[38]);
  let H;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Tr.jsx)(y, {
        id: `codex.writingBlock.slides.create.button`,
        defaultMessage: `Create presentation`,
        description: `Primary button in a completed presentation outline writing block that asks Codex to create the outlined presentation`,
      })),
      (t[39] = H))
    : (H = t[39]);
  let te;
  t[40] !== I || t[41] !== R || t[42] !== V
    ? ((te = (0, Tr.jsx)(sr, {
        className: `cursor-interaction rounded-e-none border border-transparent bg-primary-solid text-primary-solid no-drag focus:outline-none enabled:hover:bg-text/80`,
        disabled: R,
        icon: V,
        label: H,
        onClick: I,
      })),
      (t[40] = I),
      (t[41] = R),
      (t[42] = V),
      (t[43] = te))
    : (te = t[43]);
  let ne;
  t[44] === u
    ? (ne = t[45])
    : ((ne = u.formatMessage({
        id: `codex.writingBlock.slides.create.chooseFormat`,
        defaultMessage: `Choose presentation format`,
        description: `Accessible label for the dropdown button that selects whether a completed presentation outline is created in Microsoft PowerPoint or Google Slides`,
      })),
      (t[44] = u),
      (t[45] = ne));
  let re;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, Tr.jsx)(k, {})), (t[46] = re))
    : (re = t[46]);
  let ie;
  t[47] !== R || t[48] !== ne
    ? ((ie = (0, Tr.jsx)(`button`, {
        "aria-label": ne,
        className: `flex h-9 w-8 shrink-0 cursor-interaction items-center justify-center bg-primary-solid text-primary-solid no-drag enabled:hover:bg-text/80 enabled:hover:opacity-90 disabled:cursor-default disabled:opacity-40 data-[state=open]:bg-text/80`,
        disabled: R,
        type: `button`,
        children: re,
      })),
      (t[47] = R),
      (t[48] = ne),
      (t[49] = ie))
    : (ie = t[49]);
  let ae;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Tr.jsx)(yr, { "aria-hidden": !0, className: `icon-sm` })), (t[50] = ae))
    : (ae = t[50]);
  let oe;
  t[51] === l ? (oe = t[52]) : ((oe = () => l.set(Er, `powerpoint`)), (t[51] = l), (t[52] = oe));
  let se;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Tr.jsx)(y, {
        id: `codex.writingBlock.slides.create.powerPointOption`,
        defaultMessage: `PowerPoint`,
        description: `Presentation format dropdown option for creating a Microsoft PowerPoint presentation from a completed presentation outline`,
      })),
      (t[53] = se))
    : (se = t[53]);
  let W;
  t[54] === oe
    ? (W = t[55])
    : ((W = (0, Tr.jsx)(B.RadioItem, { icon: ae, onSelect: oe, value: `powerpoint`, children: se })),
      (t[54] = oe),
      (t[55] = W));
  let G;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Tr.jsx)(de, { "aria-hidden": !0, className: `icon-sm` })), (t[56] = G))
    : (G = t[56]);
  let ce;
  t[57] === l ? (ce = t[58]) : ((ce = () => l.set(Er, `google-slides`)), (t[57] = l), (t[58] = ce));
  let le;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, Tr.jsx)(y, {
        id: `codex.writingBlock.slides.create.googleSlidesOption`,
        defaultMessage: `Google Slides`,
        description: `Presentation format dropdown option for creating a Google Slides presentation from a completed presentation outline`,
      })),
      (t[59] = le))
    : (le = t[59]);
  let K;
  t[60] === ce
    ? (K = t[61])
    : ((K = (0, Tr.jsx)(B.RadioItem, { icon: G, onSelect: ce, value: `google-slides`, children: le })),
      (t[60] = ce),
      (t[61] = K));
  let ue;
  t[62] !== m || t[63] !== W || t[64] !== K
    ? ((ue = (0, Tr.jsxs)(B.RadioGroup, { value: m, children: [W, K] })),
      (t[62] = m),
      (t[63] = W),
      (t[64] = K),
      (t[65] = ue))
    : (ue = t[65]);
  let q;
  t[66] !== R || t[67] !== ie || t[68] !== ue
    ? ((q = (0, Tr.jsx)(c, {
        align: `end`,
        contentWidth: `menuBounded`,
        disabled: R,
        triggerButton: ie,
        children: ue,
      })),
      (t[66] = R),
      (t[67] = ie),
      (t[68] = ue),
      (t[69] = q))
    : (q = t[69]);
  let fe;
  return (
    t[70] !== te || t[71] !== q
      ? ((fe = (0, Tr.jsxs)(`div`, {
          className: `inline-flex min-w-0 overflow-hidden rounded-full`,
          children: [te, q],
        })),
        (t[70] = te),
        (t[71] = q),
        (t[72] = fe))
      : (fe = t[72]),
    fe
  );
}
function Sr(e) {
  return e.plugin.enabled && e.plugin.availability !== `DISABLED_BY_ADMIN` && It(e);
}
var Cr, wr, Tr, Er;
function Dr() {
  return (Dr = e(() => {
    ((Cr = ze()),
      cr(),
      N(),
      St(),
      (wr = Je()),
      Ee(),
      fn(),
      Nn(),
      Ot(),
      a(),
      R(),
      we(),
      ke(),
      wn(),
      br(),
      _e(),
      In(),
      Xt(),
      ht(),
      Ve(),
      On(),
      Ne(),
      Yt(),
      En(),
      (Tr = He()),
      (Er = an(`writing-block-presentation-format`, `powerpoint`)));
  }))();
}
function Or(e) {
  let t = e.replace(
      /^[ \t]{0,3}((`|~)\2{2,})[^\n]*(?:\n[\s\S]*?(?:^[ \t]{0,3}\1\2*[ \t]*$|(?![\s\S]))|$)/gmu,
      ``,
    ),
    n = t.match(/^[ \t]{0,3}(?:#{1,6}\s+)?(?:\*\*)?slide\s+#?\d+\b/gimu);
  if (n != null) return n.length;
  let r = (e) => {
      let t = e.map((e) => e[1].replace(/\t/gu, `    `).length),
        n = Math.min(...t);
      return t.filter((e) => e === n).length;
    },
    i = Array.from(t.matchAll(/^([ \t]*)\d+[.)]\s+\*\*/gmu));
  if (i.length > 0) return r(i);
  let a = new Map();
  for (let e of t.matchAll(/^[ \t]{0,3}(#{1,6})\s+.+$/gmu)) {
    let t = e[1].length;
    a.set(t, (a.get(t) ?? 0) + 1);
  }
  for (let e = 1; e <= 6; e += 1) {
    let t = a.get(e) ?? 0;
    if (t > 1) return t;
  }
  if (a.size > 0) return 1;
  let o = Array.from(t.matchAll(/^([ \t]*)(?:\d+[.)]|[-+*])\s+/gmu));
  return o.length > 0 ? r(o) : Number(t.trim().length > 0);
}
var kr, Ar;
function jr() {
  return (jr = e(() => {
    (Je(),
      (kr = He()),
      (Ar = (e) =>
        (0, kr.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, kr.jsx)(`path`, {
            d: `M16.835 9.83338C16.835 9.12235 16.8341 8.62901 16.8027 8.24549C16.772 7.86976 16.7153 7.65839 16.6348 7.50038C16.4588 7.15512 16.1783 6.87455 15.833 6.69862C15.675 6.61811 15.4636 6.56135 15.0879 6.53065C14.7044 6.49932 14.211 6.49842 13.5 6.49842H6.5C5.78896 6.49842 5.29563 6.49932 4.91211 6.53065C4.53641 6.56135 4.325 6.61811 4.16699 6.69862C3.82175 6.87455 3.54115 7.15512 3.36524 7.50038C3.28472 7.65839 3.22797 7.86976 3.19727 8.24549C3.16593 8.62901 3.16504 9.12235 3.16504 9.83338V12.3334C3.16504 13.0444 3.16593 13.5378 3.19727 13.9213C3.22797 14.2969 3.28473 14.5084 3.36524 14.6664C3.54116 15.0116 3.82175 15.2922 4.16699 15.4682C4.325 15.5487 4.5364 15.6054 4.91211 15.6361C5.29563 15.6675 5.78896 15.6683 6.5 15.6683H13.5C14.211 15.6683 14.7044 15.6675 15.0879 15.6361C15.4636 15.6054 15.675 15.5487 15.833 15.4682C16.1782 15.2922 16.4588 15.0116 16.6348 14.6664C16.7153 14.5084 16.772 14.2969 16.8027 13.9213C16.8341 13.5378 16.835 13.0444 16.835 12.3334V9.83338ZM12.2686 2.64491L15.0068 2.66835L15.1406 2.68299C15.443 2.74804 15.6683 3.01889 15.665 3.34022C15.6617 3.6613 15.4313 3.92657 15.1279 3.98573L14.9932 3.99842L12.2627 3.97499C9.84398 3.95938 8.12856 3.96721 5.00684 3.99842C4.63965 4.0021 4.33874 3.70738 4.33496 3.34022C4.33129 2.97303 4.626 2.67212 4.99316 2.66835C8.12132 2.63707 9.84357 2.62927 12.2686 2.64491ZM18.165 12.3334C18.165 13.0224 18.1657 13.5794 18.1289 14.0297C18.0915 14.4875 18.0121 14.8933 17.8203 15.2699C17.5169 15.8654 17.0321 16.3503 16.4365 16.6537C16.0599 16.8455 15.6541 16.9249 15.1963 16.9623C14.746 16.9991 14.1891 16.9984 13.5 16.9984H6.5C5.81091 16.9984 5.25395 16.9991 4.80371 16.9623C4.34593 16.9249 3.94009 16.8455 3.56348 16.6537C2.96794 16.3503 2.48313 15.8654 2.17969 15.2699C1.98787 14.8933 1.90851 14.4875 1.87109 14.0297C1.83431 13.5794 1.83496 13.0224 1.83496 12.3334V9.83338C1.83496 9.14429 1.83431 8.58734 1.87109 8.1371C1.9085 7.6793 1.98789 7.27348 2.17969 6.89686C2.48313 6.30133 2.96794 5.81651 3.56348 5.51307C3.9401 5.32126 4.34591 5.24189 4.80371 5.20448C5.25395 5.16769 5.81091 5.16835 6.5 5.16835H13.5C14.1891 5.16835 14.746 5.16769 15.1963 5.20448C15.6541 5.24189 16.0599 5.32126 16.4365 5.51307C17.0321 5.81651 17.5169 6.30133 17.8203 6.89686C18.0121 7.27348 18.0915 7.6793 18.1289 8.1371C18.1657 8.58734 18.165 9.14429 18.165 9.83338V12.3334Z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
function Mr(e) {
  let r = (0, Pr.c)(41),
    { disabled: i, isOpen: a, onOpenChange: o, onSlideCountChange: s, slideCount: c } = e,
    u = U(),
    d = (0, Fr.useRef)(null),
    p = (0, Fr.useRef)(null),
    m = Math.max(1, c),
    h = Math.max(20, m + 10),
    [g, _] = (0, Fr.useState)(!1),
    [v, b] = (0, Fr.useState)(m),
    x = !i && (a ?? g),
    S;
  r[0] !== m || r[1] !== a || r[2] !== o
    ? ((S = (e) => {
        (b(m), a ?? _(e), o?.(e));
      }),
      (r[0] = m),
      (r[1] = a),
      (r[2] = o),
      (r[3] = S))
    : (S = r[3]);
  let C = S,
    w;
  r[4] === C
    ? (w = r[5])
    : ((w = (e) => {
        d.current != null && !e.composedPath().includes(d.current) && C(!1);
      }),
      (r[4] = C),
      (r[5] = w));
  let T = (0, Fr.useEffectEvent)(w),
    E;
  r[6] !== T || r[7] !== x
    ? ((E = () => {
        if (!x) return;
        let e = d.current?.ownerDocument;
        if (e != null)
          return (
            e.addEventListener(`pointerdown`, T, !0),
            () => {
              e.removeEventListener(`pointerdown`, T, !0);
            }
          );
      }),
      (r[6] = T),
      (r[7] = x),
      (r[8] = E))
    : (E = r[8]);
  let O;
  (r[9] === x ? (O = r[10]) : ((O = [x]), (r[9] = x), (r[10] = O)), (0, Fr.useEffect)(E, O));
  let k = x ? `w-64 sm:w-72` : `w-fit`,
    A;
  r[11] === k
    ? (A = r[12])
    : ((A = be(
        `relative flex h-9 max-w-full min-w-0 items-start overflow-hidden rounded-full border border-default bg-surface select-none`,
        k,
      )),
      (r[11] = k),
      (r[12] = A));
  let j = x && `pointer-events-none invisible`,
    M;
  r[13] === j
    ? (M = r[14])
    : ((M = be(
        `flex h-full min-w-0 shrink-0 cursor-interaction items-center gap-1.5 rounded-full px-3 text-sm font-medium text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring enabled:hover:bg-primary-ghost-hover disabled:cursor-default disabled:opacity-40`,
        j,
      )),
      (r[13] = j),
      (r[14] = M));
  let N = x || void 0,
    P;
  r[15] === C ? (P = r[16]) : ((P = () => C(!0)), (r[15] = C), (r[16] = P));
  let F = x ? -1 : void 0,
    I;
  r[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Lr.jsx)(Ar, { "aria-hidden": !0, className: `icon-sm shrink-0` })), (r[17] = I))
    : (I = r[17]);
  let L;
  r[18] === c
    ? (L = r[19])
    : ((L = (0, Lr.jsx)(`span`, {
        className: `truncate`,
        children: (0, Lr.jsx)(y, {
          id: `codex.writingBlock.slides.slideCount.button`,
          defaultMessage: `{count, plural, one {# slide} other {# slides}}`,
          description: `Button showing the current number of slides in an editable Codex presentation outline; selecting the button opens the slide-count adjustment slider`,
          values: { count: c },
        }),
      })),
      (r[18] = c),
      (r[19] = L));
  let R;
  r[20] !== i || r[21] !== x || r[22] !== P || r[23] !== F || r[24] !== L || r[25] !== M || r[26] !== N
    ? ((R = (0, Lr.jsxs)(`button`, {
        ref: p,
        className: M,
        "aria-expanded": x,
        "aria-hidden": N,
        disabled: i,
        onClick: P,
        type: `button`,
        tabIndex: F,
        children: [I, L],
      })),
      (r[20] = i),
      (r[21] = x),
      (r[22] = P),
      (r[23] = F),
      (r[24] = L),
      (r[25] = M),
      (r[26] = N),
      (r[27] = R))
    : (R = r[27]);
  let z;
  r[28] !== i ||
  r[29] !== v ||
  r[30] !== u ||
  r[31] !== h ||
  r[32] !== s ||
  r[33] !== x ||
  r[34] !== C ||
  r[35] !== c
    ? ((z = x
        ? (0, Lr.jsxs)(`div`, {
            className: `absolute inset-y-0 start-0 flex w-full min-w-0 items-center gap-2 ps-2 pe-1`,
            onKeyDownCapture: (e) => {
              e.key === `Escape` &&
                (e.preventDefault(), e.stopPropagation(), (0, Ir.flushSync)(() => C(!1)), p.current?.focus());
            },
            children: [
              (0, Lr.jsxs)(Ue, {
                className: `relative flex h-6 min-w-0 flex-1 touch-none items-center`,
                disabled: i,
                max: h,
                min: 1,
                onValueChange: (e) => {
                  let [t] = e;
                  t != null && b(t);
                },
                step: 1,
                value: [v],
                children: [
                  (0, Lr.jsx)(Be, {
                    className: `relative h-4 grow overflow-hidden rounded-full bg-text/5`,
                    children: (0, Lr.jsx)(`span`, {
                      className: `pointer-events-none absolute inset-x-2 inset-y-0 flex items-center justify-between`,
                      children: Array.from({ length: Math.min(h, 20) }, Nr),
                    }),
                  }),
                  (0, Lr.jsx)(l, {
                    "aria-label": u.formatMessage({
                      id: `codex.writingBlock.slides.slideCount.slider`,
                      defaultMessage: `Number of presentation slides`,
                      description: `Accessible name for the keyboard-operable slider that adjusts the number of slides in a Codex presentation outline`,
                    }),
                    "aria-valuetext": u.formatMessage(
                      {
                        id: `codex.writingBlock.slides.slideCount.value`,
                        defaultMessage: `{count, plural, one {# slide} other {# slides}}`,
                        description: `Current presentation slide count announced to screen-reader users while adjusting an outline; count is the positive number of slides`,
                      },
                      { count: v },
                    ),
                    autoFocus: !0,
                    className: `block h-6 w-2 rounded-full border border-default bg-surface shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring`,
                  }),
                ],
              }),
              (0, Lr.jsx)(`output`, {
                "aria-live": `polite`,
                className: `min-w-5 text-center text-sm font-medium tabular-nums`,
                children: (0, Lr.jsx)(f, { value: v }),
              }),
              (0, Lr.jsx)(n, {
                "aria-label": u.formatMessage({
                  id: `codex.writingBlock.slides.slideCount.confirm`,
                  defaultMessage: `Confirm slide count`,
                  description: `Accessible name for the button that applies a new slide count to an editable Codex presentation outline using Magic Edit`,
                }),
                color: `primary`,
                disabled: i || v === c,
                onClick: () => {
                  (C(!1), s(v));
                },
                size: `composerSm`,
                uniform: !0,
                children: (0, Lr.jsx)(D, { asset: t }),
              }),
            ],
          })
        : null),
      (r[28] = i),
      (r[29] = v),
      (r[30] = u),
      (r[31] = h),
      (r[32] = s),
      (r[33] = x),
      (r[34] = C),
      (r[35] = c),
      (r[36] = z))
    : (z = r[36]);
  let B;
  return (
    r[37] !== R || r[38] !== z || r[39] !== A
      ? ((B = (0, Lr.jsxs)(`div`, { ref: d, className: A, children: [R, z] })),
        (r[37] = R),
        (r[38] = z),
        (r[39] = A),
        (r[40] = B))
      : (B = r[40]),
    B
  );
}
function Nr(e, t) {
  return (0, Lr.jsx)(`span`, { "aria-hidden": !0, className: `size-1 shrink-0 rounded-full bg-text/20` }, t);
}
var Pr, Fr, Ir, Lr;
function Rr() {
  return (Rr = e(() => {
    ((Pr = ze()), pe(), V(), se(), (Fr = Je()), (Ir = qe()), Ee(), Le(), A(), jr(), (Lr = He()));
  }))();
}
var zr, Br;
function Vr() {
  return (Vr = e(() => {
    (Je(),
      (zr = He()),
      (Br = (e) =>
        (0, zr.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, zr.jsx)(`path`, {
            d: `M16.0012 9.04175V7.33667C16.0012 6.62563 16.0013 6.1323 15.97 5.74878C15.9469 5.46683 15.9091 5.27732 15.8577 5.13355L15.802 5.00366C15.6481 4.70155 15.4137 4.44853 15.1262 4.27222L14.9993 4.20191C14.8413 4.12145 14.6297 4.06462 14.2542 4.03394C13.8707 4.00262 13.3771 4.00171 12.6663 4.00171H7.33325C6.62222 4.00171 6.12888 4.0026 5.74536 4.03394C5.46351 4.05697 5.27388 4.09383 5.13013 4.14526L5.00024 4.20191C4.69799 4.35592 4.44511 4.59005 4.2688 4.87769L4.19849 5.00366C4.11798 5.16167 4.06122 5.37307 4.03052 5.74878C3.99918 6.1323 3.99829 6.62563 3.99829 7.33667V12.6667C3.99829 13.3777 3.99918 13.8711 4.03052 14.2546C4.06122 14.6303 4.11798 14.8418 4.19849 14.9998L4.2688 15.1257C4.44512 15.4134 4.69799 15.6475 5.00024 15.8015L5.13013 15.8572C5.27391 15.9087 5.46332 15.9464 5.74536 15.9695C6.12888 16.0008 6.62221 16.0017 7.33325 16.0017H10.595C11.1459 16.0017 11.4691 15.9943 11.6956 15.9724C11.5803 15.7786 11.487 15.6063 11.4172 15.4392L11.3635 15.2986C10.9573 14.1144 11.2873 12.8022 12.2053 11.9509L12.3186 11.8523C12.5958 11.6268 12.9622 11.4246 13.4709 11.1384L15.9241 9.75855L15.9583 9.82007C15.965 9.78841 15.9747 9.75735 15.9797 9.72534L15.9915 9.62183C16.0006 9.50892 16.0012 9.35336 16.0012 9.04175ZM14.1233 12.2976C13.636 12.5717 13.3907 12.7131 13.2375 12.823L13.1096 12.9255C12.5774 13.419 12.3859 14.1804 12.6213 14.8669L12.6858 15.0183C12.7265 15.1013 12.7848 15.2005 12.8674 15.3367C13.0089 15.1523 13.1785 14.8669 13.4905 14.321L14.8948 11.863L14.1233 12.2976ZM10.0002 9.33472C10.3673 9.33489 10.6652 9.63271 10.6653 9.99976C10.6653 10.3669 10.3674 10.6646 10.0002 10.6648H6.66626C6.29914 10.6646 6.00122 10.3669 6.00122 9.99976C6.00136 9.63271 6.29922 9.33489 6.66626 9.33472H10.0002ZM7.79614 6.00171L7.92993 6.01538C8.23318 6.07722 8.46118 6.34524 8.46118 6.66675C8.46115 6.98824 8.23317 7.25629 7.92993 7.31812L7.79614 7.33179H6.66626C6.29917 7.33161 6.00126 7.03387 6.00122 6.66675C6.00122 6.29959 6.29914 6.00189 6.66626 6.00171H7.79614ZM13.3333 6.00171L13.467 6.01538C13.7702 6.07732 13.9983 6.34532 13.9983 6.66675C13.9983 6.98815 13.7702 7.25619 13.467 7.31812L13.3333 7.33179H10.2961C9.92902 7.33165 9.63115 7.0339 9.6311 6.66675C9.6311 6.29956 9.92899 6.00185 10.2961 6.00171H13.3333ZM17.3313 9.04175C17.3313 9.32336 17.3331 9.53907 17.3167 9.73706L17.2932 9.9314C17.2677 10.0937 17.2293 10.2536 17.179 10.4099L17.1252 10.5652C17.0792 10.6862 17.0235 10.8026 16.9563 10.9294L16.717 11.3562L14.6458 14.9812C14.2984 15.5891 14.0513 16.0335 13.7327 16.3728L13.5911 16.5125C13.3022 16.7742 12.9676 16.9799 12.6047 17.1199L12.4475 17.1755C11.9451 17.3394 11.3951 17.3318 10.595 17.3318H7.33325C6.64416 17.3318 6.0872 17.3324 5.63696 17.2957C5.23632 17.2629 4.87559 17.1977 4.53931 17.0535L4.39673 16.9871C3.87547 16.7215 3.43912 16.3171 3.13501 15.821L3.01294 15.6033C2.82112 15.2267 2.74176 14.8208 2.70435 14.363C2.66756 13.9128 2.66821 13.3558 2.66821 12.6667V7.33667C2.66821 6.64758 2.66756 6.09062 2.70435 5.64038C2.74176 5.18259 2.82113 4.77676 3.01294 4.40015L3.13501 4.1814C3.4391 3.68568 3.87569 3.28184 4.39673 3.01636L4.53931 2.94995C4.8756 2.80571 5.23632 2.74051 5.63696 2.70776C6.0872 2.67098 6.64416 2.67163 7.33325 2.67163H12.6663C13.3553 2.67163 13.9123 2.67099 14.3625 2.70776C14.8206 2.74518 15.227 2.82439 15.6038 3.01636L15.8215 3.13843C16.3174 3.44253 16.7211 3.87903 16.9866 4.40015L17.053 4.54273C17.1973 4.87904 17.2624 5.2397 17.2952 5.64038C17.332 6.09062 17.3313 6.64758 17.3313 7.33667V9.04175Z`,
          }),
        })));
  }))();
}
function Hr(e) {
  let t = (0, Ur.c)(17),
    { disabled: n, onMetadataChange: r, selectedTemplate: i } = e,
    [a, o] = (0, Wr.useState)(!1),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = () => o(!0)), (t[0] = s)) : (s = t[0]);
  let c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Gr.jsx)(Br, { "aria-hidden": !0, className: `icon-sm shrink-0` })), (t[1] = c))
    : (c = t[1]);
  let l;
  t[2] === i
    ? (l = t[3])
    : ((l =
        i == null
          ? (0, Gr.jsx)(y, {
              id: `codex.writingBlock.slides.templates.button`,
              defaultMessage: `Templates`,
              description: `Presentation outline header button that opens the installed presentation-template gallery`,
            })
          : i.displayName),
      (t[2] = i),
      (t[3] = l));
  let u;
  t[4] === l
    ? (u = t[5])
    : ((u = (0, Gr.jsx)(`span`, { className: `truncate`, children: l })), (t[4] = l), (t[5] = u));
  let d;
  t[6] !== n || t[7] !== a || t[8] !== u
    ? ((d = (0, Gr.jsxs)(`button`, {
        className: `flex h-9 min-w-0 cursor-interaction items-center gap-1.5 rounded-full border border-default bg-surface px-3 text-sm font-medium text-default select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring enabled:hover:bg-primary-ghost-hover disabled:cursor-default disabled:opacity-40`,
        "aria-expanded": a,
        disabled: n,
        onClick: s,
        type: `button`,
        children: [c, u],
      })),
      (t[6] = n),
      (t[7] = a),
      (t[8] = u),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] !== a || t[11] !== r || t[12] !== i?.path
    ? ((f = a
        ? (0, Gr.jsx)(Wr.Suspense, {
            fallback: null,
            children: (0, Gr.jsx)(Kr, {
              onOpenChange: o,
              onSelect: (e) => {
                if (e == null) {
                  r?.({ presentation_source: null });
                  return;
                }
                r?.({
                  presentation_source: {
                    kind: `template`,
                    template: { displayName: Re(e), name: e.name, path: e.path },
                  },
                });
              },
              open: a,
              selectedTemplatePath: i?.path ?? null,
            }),
          })
        : null),
      (t[10] = a),
      (t[11] = r),
      (t[12] = i?.path),
      (t[13] = f))
    : (f = t[13]);
  let p;
  return (
    t[14] !== d || t[15] !== f
      ? ((p = (0, Gr.jsxs)(Gr.Fragment, { children: [d, f] })), (t[14] = d), (t[15] = f), (t[16] = p))
      : (p = t[16]),
    p
  );
}
var Ur, Wr, Gr, Kr;
function qr() {
  return (qr = e(() => {
    ((Ur = ze()),
      (Wr = Je()),
      Ee(),
      Vr(),
      Ne(),
      (Gr = He()),
      Pe(),
      (Kr = (0, Wr.lazy)(async () => ({
        default: (
          await ve(
            async () => {
              let { SlidesOutlineTemplatePicker: e } = await import(`./template-picker-5ceb20202957.js`);
              return { SlidesOutlineTemplatePicker: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5]),
            import.meta.url,
          )
        ).SlidesOutlineTemplatePicker,
      }))));
  }))();
}
function Jr(e) {
  let t = Xr.safeParse(e?.presentation_source);
  return t.success ? t.data.template : null;
}
var Yr, Xr;
function Zr() {
  return (Zr = e(() => {
    (m(),
      (Yr = Me({ displayName: z(), name: z(), path: z() })),
      (Xr = Me({ kind: r(`template`), template: Yr })));
  }))();
}
function Qr(e) {
  let t = (0, ei.c)(48),
    {
      appearance: r,
      content: i,
      isDisabled: a,
      messageId: s,
      onBeforeExport: l,
      renderAsSubmenu: u,
      serverConversationId: f,
      title: p,
      writingBlockIndex: m,
    } = e,
    h = r === void 0 ? `inline` : r,
    g = u !== void 0 && u,
    _ = S(d),
    v = U(),
    [b, x] = (0, ti.useState)(!1),
    C;
  t[0] === v
    ? (C = t[1])
    : ((C = v.formatMessage({
        id: `codex.writingBlock.download.label`,
        defaultMessage: `Download`,
        description: `Tooltip and accessible name for the download menu in a Codex Apps document writing block. The menu offers Markdown, PDF, and Microsoft Word formats when available.`,
      })),
      (t[0] = v),
      (t[1] = C));
  let w = C,
    T = f != null && s != null && m != null,
    E;
  t[2] !== i || t[3] !== p
    ? ((E = () => {
        let e = (p ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
          t = /\.md$/i.test(e) ? e : `${e || `writing-block`}.md`;
        dt(new Blob([typeof i == `function` ? i() : i], { type: `text/markdown;charset=utf-8` }), t);
      }),
      (t[2] = i),
      (t[3] = p),
      (t[4] = E))
    : (E = t[4]);
  let D = E,
    O;
  t[5] !== v || t[6] !== s || t[7] !== l || t[8] !== _ || t[9] !== f || t[10] !== m
    ? ((O = (e) => {
        f != null &&
          s != null &&
          m != null &&
          (x(!0),
          Promise.resolve(l?.())
            .then(() =>
              Vt.safePost(`/export_doc/writing_block/file`, {
                requestBody: { conversation_id: f, export_type: e, index: m, message_id: s },
              }),
            )
            .then($r)
            .catch(() => {
              _.get(Ce).danger(
                v.formatMessage({
                  id: `codex.writingBlock.download.error`,
                  defaultMessage: `Download failed`,
                  description: `Error toast shown when downloading a Codex Apps document writing block as a PDF or Microsoft Word file fails.`,
                }),
                { errorAnalytics: { toastId: `codex.writingBlock.download.error` } },
              );
            })
            .finally(() => x(!1)));
      }),
      (t[5] = v),
      (t[6] = s),
      (t[7] = l),
      (t[8] = _),
      (t[9] = f),
      (t[10] = m),
      (t[11] = O))
    : (O = t[11]);
  let k = O,
    A = a || b,
    j;
  t[12] !== D || t[13] !== g
    ? ((j = (e) => {
        (g && e.preventDefault(), D());
      }),
      (t[12] = D),
      (t[13] = g),
      (t[14] = j))
    : (j = t[14]);
  let M, N;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Z.jsx)(B.ItemIcon, {
        size: `md`,
        children: (0, Z.jsx)(o, {
          className: `size-5`,
          "aria-hidden": !0,
          fileName: void 0,
          mimeType: `text/markdown`,
        }),
      })),
      (N = (0, Z.jsx)(y, {
        id: `codex.writingBlock.download.markdown`,
        defaultMessage: `Markdown document`,
        description: `Menu item that downloads a Codex Apps document writing block as a Markdown file with the .md extension.`,
      })),
      (t[15] = M),
      (t[16] = N))
    : ((M = t[15]), (N = t[16]));
  let P;
  t[17] !== A || t[18] !== j
    ? ((P = (0, Z.jsxs)(B.Item, { disabled: A, onSelect: j, children: [M, N] })),
      (t[17] = A),
      (t[18] = j),
      (t[19] = P))
    : (P = t[19]);
  let F;
  t[20] !== T || t[21] !== k || t[22] !== a || t[23] !== b || t[24] !== g
    ? ((F = T
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsxs)(B.Item, {
                disabled: a || b,
                onSelect: (e) => {
                  (g && e.preventDefault(), k(`pdf`));
                },
                children: [
                  (0, Z.jsx)(B.ItemIcon, {
                    size: `md`,
                    children: (0, Z.jsx)(o, {
                      className: `size-5`,
                      "aria-hidden": !0,
                      fileName: void 0,
                      mimeType: `application/pdf`,
                    }),
                  }),
                  (0, Z.jsx)(y, {
                    id: `codex.writingBlock.download.pdf`,
                    defaultMessage: `PDF document`,
                    description: `Menu item that downloads a Codex Apps document writing block as a PDF file with the .pdf extension.`,
                  }),
                ],
              }),
              (0, Z.jsxs)(B.Item, {
                disabled: a || b,
                onSelect: (e) => {
                  (g && e.preventDefault(), k(`docx`));
                },
                children: [
                  (0, Z.jsx)(B.ItemIcon, {
                    size: `md`,
                    children: (0, Z.jsx)(o, {
                      className: `size-5`,
                      "aria-hidden": !0,
                      fileName: void 0,
                      mimeType: `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
                    }),
                  }),
                  (0, Z.jsx)(y, {
                    id: `codex.writingBlock.download.word`,
                    defaultMessage: `Microsoft Word`,
                    description: `Menu item that downloads a Codex Apps document writing block as a Microsoft Word file with the .docx extension.`,
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[20] = T),
      (t[21] = k),
      (t[22] = a),
      (t[23] = b),
      (t[24] = g),
      (t[25] = F))
    : (F = t[25]);
  let I;
  t[26] !== P || t[27] !== F
    ? ((I = (0, Z.jsxs)(Z.Fragment, { children: [P, F] })), (t[26] = P), (t[27] = F), (t[28] = I))
    : (I = t[28]);
  let L = I;
  if (g) {
    let e = a || b,
      n = b ? void 0 : q,
      r = b ? `size-5` : void 0,
      i;
    return (
      t[29] !== w || t[30] !== L || t[31] !== e || t[32] !== n || t[33] !== r
        ? ((i = (0, Z.jsx)(B.FlyoutSubmenuItem, {
            ariaLabel: w,
            contentWidth: `menuBounded`,
            disabled: e,
            label: w,
            leftIconAsset: n,
            leftIconClassName: r,
            LeftIcon: Fe,
            children: L,
          })),
          (t[29] = w),
          (t[30] = L),
          (t[31] = e),
          (t[32] = n),
          (t[33] = r),
          (t[34] = i))
        : (i = t[34]),
      i
    );
  }
  let R = h === `viewer` ? Se : c,
    z = a || b,
    V;
  t[35] !== h || t[36] !== w || t[37] !== a || t[38] !== b
    ? ((V =
        h === `viewer`
          ? (0, Z.jsx)(Ae, {
              "aria-label": w,
              disabled: a || b,
              uniform: !0,
              children: b ? (0, Z.jsx)(Fe, { className: `size-5` }) : (0, Z.jsx)(Te, {}),
            })
          : (0, Z.jsx)(n, {
              "aria-label": w,
              color: `ghostActive`,
              disabled: a || b,
              size: `imageToolbar`,
              uniform: !0,
              children: b ? (0, Z.jsx)(Fe, { className: `size-5` }) : (0, Z.jsx)(Te, {}),
            })),
      (t[35] = h),
      (t[36] = w),
      (t[37] = a),
      (t[38] = b),
      (t[39] = V))
    : (V = t[39]);
  let H;
  t[40] !== w || t[41] !== V
    ? ((H = (0, Z.jsx)(Ie, { sideOffset: 0, tooltipContent: w, children: V })),
      (t[40] = w),
      (t[41] = V),
      (t[42] = H))
    : (H = t[42]);
  let ee;
  return (
    t[43] !== R || t[44] !== L || t[45] !== z || t[46] !== H
      ? ((ee = (0, Z.jsx)(R, {
          align: `end`,
          contentWidth: `menuBounded`,
          disabled: z,
          triggerButton: H,
          children: L,
        })),
        (t[43] = R),
        (t[44] = L),
        (t[45] = z),
        (t[46] = H),
        (t[47] = ee))
      : (ee = t[47]),
    ee
  );
}
function $r(e) {
  Ut({ href: e.download_url, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
}
var ei, ti, Z;
function ni() {
  return (ni = e(() => {
    ((ei = ze()),
      ge(),
      N(),
      (ti = Je()),
      Ee(),
      $t(),
      Le(),
      a(),
      _t(),
      R(),
      we(),
      ke(),
      ue(),
      De(),
      Ve(),
      u(),
      (Z = He()));
  }))();
}
function ri(e) {
  let t = (0, ii.c)(57),
    { disabled: r, onOpen: i } = e,
    a = r !== void 0 && r,
    o = U(),
    l;
  t[0] === o
    ? (l = t[1])
    : ((l = o.formatMessage({
        id: `chatgptConversations.writingBlock.email.open.tooltip`,
        defaultMessage: `Open in email`,
        description: `Tooltip for an action in a Codex Apps Quick Chat email writing block. The action opens the draft in the user's email provider with its fields prefilled.`,
      })),
      (t[0] = o),
      (t[1] = l));
  let u = l,
    d;
  t[2] === o
    ? (d = t[3])
    : ((d = o.formatMessage({
        id: `chatgptConversations.writingBlock.email.open.dropdown.ariaLabel`,
        defaultMessage: `Open email in app`,
        description: `Accessible label for a dropdown in a Codex Apps Quick Chat email writing block. Users choose Gmail, Outlook, or their default email app; this label is not visible text.`,
      })),
      (t[2] = o),
      (t[3] = d));
  let f = d,
    p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(D, { "aria-hidden": !1, asset: s })), (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] !== a || t[6] !== f
    ? ((m = (0, Q.jsx)(n, {
        "aria-label": f,
        color: `ghostActive`,
        disabled: a,
        size: `imageToolbar`,
        uniform: !0,
        children: p,
      })),
      (t[5] = a),
      (t[6] = f),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== u || t[9] !== m
    ? ((h = (0, Q.jsx)(Ie, { sideOffset: 0, tooltipContent: u, children: m })),
      (t[8] = u),
      (t[9] = m),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === o
    ? (g = t[12])
    : ((g = o.formatMessage({
        id: `chatgptConversations.writingBlock.email.open.option.gmail.ariaLabel`,
        defaultMessage: `Open email using Gmail`,
        description: `Accessible label for the Gmail option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.`,
      })),
      (t[11] = o),
      (t[12] = g));
  let _;
  t[13] === i ? (_ = t[14]) : ((_ = () => i(`gmail`)), (t[13] = i), (t[14] = _));
  let v, b;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(B.ItemIcon, { size: `md`, children: (0, Q.jsx)(ce, { className: `icon-sm` }) })),
      (v = (0, Q.jsx)(y, {
        id: `chatgptConversations.writingBlock.email.open.option.gmail.label`,
        defaultMessage: `Gmail`,
        description: `Short provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.`,
      })),
      (t[15] = v),
      (t[16] = b))
    : ((v = t[15]), (b = t[16]));
  let x;
  t[17] !== g || t[18] !== _
    ? ((x = (0, Q.jsxs)(B.Item, { "aria-label": g, onSelect: _, children: [b, v] })),
      (t[17] = g),
      (t[18] = _),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] === o
    ? (S = t[21])
    : ((S = o.formatMessage({
        id: `chatgptConversations.writingBlock.email.open.option.outlook.ariaLabel`,
        defaultMessage: `Open email using Outlook`,
        description: `Accessible label for the Outlook option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.`,
      })),
      (t[20] = o),
      (t[21] = S));
  let C;
  t[22] === i ? (C = t[23]) : ((C = () => i(`outlook`)), (t[22] = i), (t[23] = C));
  let w, T;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(B.ItemIcon, { size: `md`, children: (0, Q.jsx)(Rn, { className: `icon-sm` }) })),
      (T = (0, Q.jsx)(y, {
        id: `chatgptConversations.writingBlock.email.open.option.outlook.label`,
        defaultMessage: `Outlook`,
        description: `Short provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.`,
      })),
      (t[24] = w),
      (t[25] = T))
    : ((w = t[24]), (T = t[25]));
  let E;
  t[26] !== S || t[27] !== C
    ? ((E = (0, Q.jsxs)(B.Item, { "aria-label": S, onSelect: C, children: [w, T] })),
      (t[26] = S),
      (t[27] = C),
      (t[28] = E))
    : (E = t[28]);
  let O;
  t[29] === o
    ? (O = t[30])
    : ((O = o.formatMessage({
        id: `chatgptConversations.writingBlock.email.open.option.default.ariaLabel`,
        defaultMessage: `Open email using default email app`,
        description: `Accessible label for the default-app option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.`,
      })),
      (t[29] = o),
      (t[30] = O));
  let k;
  t[31] === i ? (k = t[32]) : ((k = () => i(`default`)), (t[31] = i), (t[32] = k));
  let A, j;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(B.ItemIcon, { size: `md`, children: (0, Q.jsx)(yt, { className: `icon-sm` }) })),
      (j = (0, Q.jsx)(y, {
        id: `chatgptConversations.writingBlock.email.open.option.default.label`,
        defaultMessage: `Default email app`,
        description: `Provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block. It launches the operating system's configured mail app.`,
      })),
      (t[33] = A),
      (t[34] = j))
    : ((A = t[33]), (j = t[34]));
  let M;
  t[35] !== O || t[36] !== k
    ? ((M = (0, Q.jsxs)(B.Item, { "aria-label": O, onSelect: k, children: [A, j] })),
      (t[35] = O),
      (t[36] = k),
      (t[37] = M))
    : (M = t[37]);
  let N;
  t[38] !== a || t[39] !== x || t[40] !== E || t[41] !== M || t[42] !== h
    ? ((N = (0, Q.jsx)(`div`, {
        className: `hidden md:block`,
        children: (0, Q.jsxs)(c, {
          align: `end`,
          contentWidth: `menuBounded`,
          disabled: a,
          triggerButton: h,
          children: [x, E, M],
        }),
      })),
      (t[38] = a),
      (t[39] = x),
      (t[40] = E),
      (t[41] = M),
      (t[42] = h),
      (t[43] = N))
    : (N = t[43]);
  let P;
  t[44] === i ? (P = t[45]) : ((P = () => i(`default`)), (t[44] = i), (t[45] = P));
  let F;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Q.jsx)(D, { "aria-hidden": !1, asset: s })), (t[46] = F))
    : (F = t[46]);
  let I;
  t[47] !== a || t[48] !== u || t[49] !== P
    ? ((I = (0, Q.jsx)(n, {
        "aria-label": u,
        color: `ghostActive`,
        disabled: a,
        onClick: P,
        size: `imageToolbar`,
        uniform: !0,
        children: F,
      })),
      (t[47] = a),
      (t[48] = u),
      (t[49] = P),
      (t[50] = I))
    : (I = t[50]);
  let L;
  t[51] !== u || t[52] !== I
    ? ((L = (0, Q.jsx)(`div`, {
        className: `md:hidden`,
        children: (0, Q.jsx)(Ie, { sideOffset: 0, tooltipContent: u, children: I }),
      })),
      (t[51] = u),
      (t[52] = I),
      (t[53] = L))
    : (L = t[53]);
  let R;
  return (
    t[54] !== N || t[55] !== L
      ? ((R = (0, Q.jsxs)(Q.Fragment, { children: [N, L] })), (t[54] = N), (t[55] = L), (t[56] = R))
      : (R = t[56]),
    R
  );
}
var ii, Q;
function ai() {
  return (ai = e(() => {
    ((ii = ze()), Xe(), Ee(), Le(), a(), A(), ue(), je(), Cn(), Ln(), (Q = He()));
  }))();
}
function oi() {
  return {
    async sendEmail(e) {
      try {
        let t = await Vt.safePost(`/aip/connectors/email/send_email`, {
          surface: `writing_blocks`,
          requestBody: e,
        });
        return { status: `success`, data: { sendId: t.send_id, unsendExpiresAt: t.unsend_expires_at } };
      } catch (e) {
        return { status: `error`, errorMessage: li(e) };
      }
    },
    async unsendEmail(e) {
      try {
        return (
          await Vt.safePost(`/aip/connectors/email/unsend_email`, {
            surface: `writing_blocks`,
            requestBody: e,
          }),
          { status: `success` }
        );
      } catch (e) {
        return { status: `error`, errorMessage: li(e) };
      }
    },
    async getEmailStatus(e) {
      try {
        let t = await Vt.safePost(`/aip/connectors/email/send_email_status`, {
          surface: `writing_blocks`,
          requestBody: e,
        });
        return { requestStatus: `success`, emailStatus: t.status, errorMessage: t.error_message ?? void 0 };
      } catch (e) {
        return { requestStatus: `error`, errorMessage: li(e) };
      }
    },
  };
}
function si(e) {
  return Qe(
    e.flatMap(({ link: e, provider: t }) =>
      e == null || !e.scopes.some((e) => e.trim().toLowerCase() === mi[t])
        ? []
        : [
            {
              link: {
                id: e.id,
                name: e.name,
                ownerEmail: e.owner_profile?.email,
                ownerName: e.owner_profile?.name,
              },
              needsReconnect: e.auth_status === `REAUTH_REQUIRED`,
              provider: t,
            },
          ],
    ),
  );
}
function ci(e) {
  return ui(xn({ shouldStripDirectives: !0 }).parse(e), e).trim();
}
function li(e) {
  return e instanceof Error ? e.message : void 0;
}
function ui(e, t) {
  let n = [];
  return (
    e.forEach((e) => {
      n.push(di(e, t));
    }),
    n.join(`

`)
  );
}
function di(e, t) {
  return e.type.name === `list` || e.type.name === `ordered_list`
    ? fi(e, t)
    : e.isTextblock
      ? pi(e, t)
      : ui(e, t);
}
function fi(e, t) {
  let n = [],
    r = typeof e.attrs.startingNumber == `number` ? e.attrs.startingNumber : 1;
  return (
    e.forEach((i, a, o) => {
      let s = e.type.name === `ordered_list` ? `${r + o}. ` : `- `,
        c = i.type.name === `task_list_item` ? `[${i.attrs.checked === !0 ? `x` : ` `}] ` : ``,
        l = ` `.repeat(s.length + c.length),
        u = ``;
      (i.forEach((e, n, r) => {
        let i = di(e, t).replaceAll(
          `
`,
          `\n${l}`,
        );
        if (r === 0) {
          u = i;
          return;
        }
        let a =
          e.type.name === `list` || e.type.name === `ordered_list`
            ? `
`
            : `

`;
        u += `${a}${l}${i}`;
      }),
        n.push(`${s}${c}${u}`));
    }),
    n.join(`
`)
  );
}
function pi(e, t) {
  let n = ``,
    r,
    i = ``,
    a = !1,
    o,
    s,
    c = (e) => {
      let t = o,
        r = s;
      (t != null &&
        r != null &&
        (t === 0 || /\s/.test(n[t - 1] ?? ``)) &&
        (e == null || /^\s/.test(e)) &&
        (n = n.slice(0, t) + n.slice(t + 1, r) + n.slice(r + 1)),
        (o = void 0),
        (s = void 0));
    },
    l = () => {
      if (r == null) return;
      let e = i === r || r === `mailto:${i}` || r === `http://${i}`;
      (e && n.endsWith(`<`) && (o = n.length - 1),
        (n += e ? (a ? `<${i}>` : i) : `${i} (${r})`),
        (r = void 0),
        (i = ``),
        (a = !1));
    };
  return (
    e.descendants((e) => {
      if (e.type.name === `hard_break`) {
        (l(),
          c(`
`),
          (n += `
`));
        return;
      }
      if (!e.isText) return;
      let u = e.text ?? ``;
      s != null && c(u);
      let d = e.marks.find((e) => e.type.name === `link`)?.attrs.href,
        f = typeof d == `string` ? d : void 0;
      if (f !== r) {
        (l(), (r = f));
        let n = e.marks.find((e) => e.type.name === `startend`)?.attrs,
          i = typeof n?.start == `number` ? n.start : void 0,
          o = typeof n?.end == `number` ? n.end : void 0;
        a =
          i != null &&
          o != null &&
          t[i - 1] === `<` &&
          t[o] === `>` &&
          ((i > 1 && !/\s/.test(t[i - 2] ?? ``)) || (o + 1 < t.length && !/\s/.test(t[o + 1] ?? ``)));
      }
      r == null
        ? o != null && u.startsWith(`>`)
          ? ((s = n.length), (n += u), u.length > 1 && c(u.slice(1)))
          : ((n += u), (o = void 0))
        : (i += u);
    }),
    l(),
    c(),
    n
  );
}
var mi;
function hi() {
  return (hi = e(() => {
    (mn(),
      mt(),
      $t(),
      (mi = { gmail: `https://www.googleapis.com/auth/gmail.modify`, outlook: `mail.send` }));
  }))();
}
function gi(e) {
  let t = (0, _i.c)(57),
    {
      bcc: r,
      cc: i,
      emailSendState: a,
      isPersistedSent: o,
      isLoadingSenderAccounts: s,
      onConnect: c,
      onSend: l,
      onUndoSend: u,
      recipient: d,
      selectedSenderAccount: f,
    } = e,
    p = U(),
    m = o || a.kind === `success_sent`,
    h = xt(a),
    g = a.kind === `sending_in_progress` && a.undoAvailable;
  if (m) {
    let e;
    t[0] === p
      ? (e = t[1])
      : ((e = p.formatMessage({
          id: `chatgptConversations.writingBlock.emailSent`,
          defaultMessage: `Sent`,
          description: `Label shown after a writing block email was sent in Codex Apps.`,
        })),
        (t[0] = p),
        (t[1] = e));
    let n = e,
      r;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, vi.jsx)(D, { "aria-hidden": !1, asset: Ke })), (t[2] = r))
      : (r = t[2]);
    let i;
    t[3] === n
      ? (i = t[4])
      : ((i = (0, vi.jsx)(sr, {
          "aria-label": n,
          className: `border border-transparent bg-text/5 text-default no-drag focus:outline-none`,
          icon: r,
          status: `sent`,
        })),
        (t[3] = n),
        (t[4] = i));
    let a;
    return (
      t[5] !== n || t[6] !== i
        ? ((a = (0, vi.jsx)(Ie, { tooltipContent: n, children: i })), (t[5] = n), (t[6] = i), (t[7] = a))
        : (a = t[7]),
      a
    );
  }
  if (h) {
    if (g) {
      let e;
      t[8] === p
        ? (e = t[9])
        : ((e = p.formatMessage({
            id: `chatgptConversations.writingBlock.emailUndoSend`,
            defaultMessage: `Undo send`,
            description: `Button label for undoing a writing block email send in Codex Apps.`,
          })),
          (t[8] = p),
          (t[9] = e));
      let r = e,
        i;
      t[10] !== a.sendId || t[11] !== u
        ? ((i = () => u(a.sendId)), (t[10] = a.sendId), (t[11] = u), (t[12] = i))
        : (i = t[12]);
      let o;
      return (
        t[13] !== i || t[14] !== r
          ? ((o = (0, vi.jsx)(n, { color: `secondary`, onClick: i, size: `composer`, children: r })),
            (t[13] = i),
            (t[14] = r),
            (t[15] = o))
          : (o = t[15]),
        o
      );
    }
    let e;
    t[16] === p
      ? (e = t[17])
      : ((e = p.formatMessage({
          id: `chatgptConversations.writingBlock.emailSending`,
          defaultMessage: `Sending`,
          description: `Button label shown while a writing block email is sending in Codex Apps.`,
        })),
        (t[16] = p),
        (t[17] = e));
    let r;
    return (
      t[18] === e
        ? (r = t[19])
        : ((r = (0, vi.jsx)(n, { color: `secondary`, loading: !0, size: `composer`, children: e })),
          (t[18] = e),
          (t[19] = r)),
      r
    );
  }
  if (s) {
    let e;
    t[20] === p
      ? (e = t[21])
      : ((e = p.formatMessage({
          id: `chatgptConversations.writingBlock.emailAccountsLoading`,
          defaultMessage: `Loading email accounts`,
          description: `Accessible label shown while connected email accounts load for a writing block in Codex Apps.`,
        })),
        (t[20] = p),
        (t[21] = e));
    let r = e,
      i;
    return (
      t[22] === r
        ? (i = t[23])
        : ((i = (0, vi.jsx)(n, { "aria-label": r, color: `secondary`, loading: !0, size: `toolbar` })),
          (t[22] = r),
          (t[23] = i)),
      i
    );
  }
  if (f == null) {
    let e;
    t[24] === p
      ? (e = t[25])
      : ((e = p.formatMessage({
          id: `chatgptConversations.writingBlock.emailConnect`,
          defaultMessage: `Connect email`,
          description: `Button in a Codex Apps email writing block shown when no Gmail or Outlook account is connected. Selecting it opens the provider connection flow so the user can send the draft.`,
        })),
        (t[24] = p),
        (t[25] = e));
    let r;
    return (
      t[26] !== c || t[27] !== e
        ? ((r = (0, vi.jsx)(n, { color: `secondary`, onClick: c, size: `composer`, children: e })),
          (t[26] = c),
          (t[27] = e),
          (t[28] = r))
        : (r = t[28]),
      r
    );
  }
  if (f.needsReconnect) {
    let e;
    t[29] === p
      ? (e = t[30])
      : ((e = p.formatMessage({
          id: `chatgptConversations.writingBlock.emailReconnect`,
          defaultMessage: `Reconnect email`,
          description: `Button in a Codex Apps email writing block shown when the selected Gmail or Outlook account needs authentication again. Selecting it opens the provider connection flow.`,
        })),
        (t[29] = p),
        (t[30] = e));
    let r;
    return (
      t[31] !== c || t[32] !== e
        ? ((r = (0, vi.jsx)(n, { color: `secondary`, onClick: c, size: `composer`, children: e })),
          (t[31] = c),
          (t[32] = e),
          (t[33] = r))
        : (r = t[33]),
      r
    );
  }
  let _;
  t[34] !== r || t[35] !== i || t[36] !== d
    ? ((_ = ct({ to: Fn(d), cc: Fn(i), bcc: Fn(r) })), (t[34] = r), (t[35] = i), (t[36] = d), (t[37] = _))
    : (_ = t[37]);
  let v = _,
    b;
  t[38] !== p || t[39] !== f.label
    ? ((b = p.formatMessage(
        {
          id: `chatgptConversations.writingBlock.emailSendAs`,
          defaultMessage: `Send as {email}`,
          description: `Accessible label for sending a writing block email from a connected account in Codex Apps.`,
        },
        { email: f.label },
      )),
      (t[38] = p),
      (t[39] = f.label),
      (t[40] = b))
    : (b = t[40]);
  let x = b,
    S;
  t[41] === p
    ? (S = t[42])
    : ((S = p.formatMessage({
        id: `chatgptConversations.writingBlock.emailSend`,
        defaultMessage: `Send`,
        description: `Button label for sending an email from a writing block in Codex Apps.`,
      })),
      (t[41] = p),
      (t[42] = S));
  let C = S,
    w;
  t[43] !== v || t[44] !== x
    ? ((w = v
        ? x
        : (0, vi.jsx)(y, {
            id: `chatgptConversations.writingBlock.emailSendMissingRecipients`,
            defaultMessage: `Add at least one valid email recipient before sending.`,
            description: `Tooltip on the disabled Send button in a Codex Apps email writing block when the To, Cc, and Bcc fields contain no valid email address. Tells the email author how to enable sending and matches ChatGPT's missing-recipient toast.`,
          })),
      (t[43] = v),
      (t[44] = x),
      (t[45] = w))
    : (w = t[45]);
  let T = !v,
    E;
  t[46] === l ? (E = t[47]) : ((E = () => l(crypto.randomUUID())), (t[46] = l), (t[47] = E));
  let O;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, vi.jsx)(D, { "aria-hidden": !1, asset: I })), (t[48] = O))
    : (O = t[48]);
  let k;
  t[49] !== x || t[50] !== T || t[51] !== E || t[52] !== C
    ? ((k = (0, vi.jsxs)(n, {
        "aria-label": x,
        color: `composerPrimary`,
        disabled: T,
        onClick: E,
        size: `toolbar`,
        children: [O, C],
      })),
      (t[49] = x),
      (t[50] = T),
      (t[51] = E),
      (t[52] = C),
      (t[53] = k))
    : (k = t[53]);
  let A;
  return (
    t[54] !== w || t[55] !== k
      ? ((A = (0, vi.jsx)(Ie, { tooltipContent: w, children: k })), (t[54] = w), (t[55] = k), (t[56] = A))
      : (A = t[56]),
    A
  );
}
var _i, vi;
function yi() {
  return (yi = e(() => {
    ((_i = ze()), le(), E(), mt(), cr(), Ee(), Le(), A(), ue(), (vi = He()));
  }))();
}
function bi(e) {
  let t = (0, Si.c)(13),
    { accounts: n, displayMode: r, isDisabled: i, onChange: a, onOpenChange: o, selectedAccount: s } = e,
    c = U(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `chatgptConversations.writingBlock.email.sender.selector.ariaLabel`,
        defaultMessage: `Select the email account to send from`,
        description: `Accessible label for the sender-account selector in an email writing block shown in Codex Apps Quick Chat. Users choose which connected Gmail or Outlook account sends the message; this label is not visible text.`,
      })),
      (t[0] = c),
      (t[1] = l));
  let u = l,
    d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Ci.jsx)(y, {
        id: `chatgptConversations.writingBlock.email.sender.field.label`,
        defaultMessage: `From`,
        description: `Short field label identifying the sender account in an email writing block shown in Codex Apps Quick Chat. It appears to the left of the account without punctuation.`,
      })),
      (t[2] = d))
    : (d = t[2]);
  let f = d,
    p;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Ci.jsx)(D, { className: `shrink-0 self-center text-default`, "aria-hidden": !1, asset: fe })),
      (t[3] = p))
    : (p = t[3]);
  let m = n.length > 1,
    h;
  return (
    t[4] !== n ||
    t[5] !== r ||
    t[6] !== i ||
    t[7] !== a ||
    t[8] !== o ||
    t[9] !== s ||
    t[10] !== u ||
    t[11] !== m
      ? ((h = (0, Ci.jsx)(qn, {
          accounts: n,
          chevronIcon: p,
          displayMode: r,
          isDisabled: i,
          isSelectable: m,
          onChange: a,
          onOpenChange: o,
          renderMenu: xi,
          selectedAccount: s,
          selectorAriaLabel: u,
          senderLabel: f,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a),
        (t[8] = o),
        (t[9] = s),
        (t[10] = u),
        (t[11] = m),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
function xi(e) {
  let { accounts: t, isDisabled: n, onChange: r, onOpenChange: i, selectedAccount: a, trigger: o } = e;
  return (0, Ci.jsx)(c, {
    align: `start`,
    contentWidth: `menuBounded`,
    disabled: n,
    onOpenChange: i,
    triggerButton: o,
    children: t.map((e) =>
      (0, Ci.jsxs)(
        B.Item,
        {
          onSelect: () => r(e.id),
          rightIcon: e.id === a.id ? (0, Ci.jsx)(D, { "aria-hidden": !1, asset: Ke }) : null,
          children: [
            (0, Ci.jsx)(B.ItemIcon, {
              size: `md`,
              children:
                e.provider === `gmail`
                  ? (0, Ci.jsx)(ce, { className: `icon-sm` })
                  : (0, Ci.jsx)(Rn, { className: `icon-sm` }),
            }),
            e.label,
          ],
        },
        e.id,
      ),
    ),
  });
}
var Si, Ci;
function wi() {
  return (wi = e(() => {
    ((Si = ze()), le(), ye(), Xn(), Ee(), a(), A(), je(), Ln(), (Ci = He()));
  }))();
}
async function Ti(e, t) {
  let n = await Vt.safePost(`/aip/connectors/google_contacts/search_contacts`, {
    surface: `writing_blocks`,
    requestBody: { limit: Ei, link_id: e, query: t },
  });
  return Ft(n.contacts);
}
var Ei;
function Di() {
  return (Di = e(() => {
    (Ht(), $t(), (Ei = 10));
  }))();
}
function Oi(e) {
  let t = (0, ki.c)(23),
    { contactsLinkId: n, enabled: r } = e,
    [i, a] = (0, Ai.useState)(``),
    o;
  t[0] === i ? (o = t[1]) : ((o = i.trim()), (t[0] = i), (t[1] = o));
  let s = o,
    c = An(s, ji),
    l;
  t[2] !== n || t[3] !== c || t[4] !== r
    ? ((l = r && n != null && c.length > 0 && !kt(c)), (t[2] = n), (t[3] = c), (t[4] = r), (t[5] = l))
    : (l = t[5]);
  let u = l,
    d;
  t[6] !== n || t[7] !== c
    ? ((d = n == null ? H : () => Ti(n, c)), (t[6] = n), (t[7] = c), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== n || t[10] !== c
    ? ((f = [`chatgpt`, `writing-block-email-contacts`, n, c]), (t[9] = n), (t[10] = c), (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] !== u || t[13] !== d || t[14] !== f
    ? ((p = { enabled: u, queryFn: d, queryKey: f, retry: !1, staleTime: M.FIVE_MINUTES }),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f),
      (t[15] = p))
    : (p = t[15]);
  let { data: m } = ne(p),
    h;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (e) => {
        a(e);
      }),
      (t[16] = h))
    : (h = t[16]);
  let g = h,
    _;
  return (
    t[17] !== m || t[18] !== n || t[19] !== c || t[20] !== r || t[21] !== s
      ? ((_ = {
          getContactsForQuery: (e) => {
            let t = e.trim();
            return r && n != null && t.length > 0 && t === s && c === s && !kt(t) ? (m ?? Mi) : Mi;
          },
          searchContacts: g,
        }),
        (t[17] = m),
        (t[18] = n),
        (t[19] = c),
        (t[20] = r),
        (t[21] = s),
        (t[22] = _))
      : (_ = t[22]),
    _
  );
}
var ki, Ai, ji, Mi;
function Ni() {
  return (Ni = e(() => {
    ((ki = ze()), Ht(), Ye(), ae(), (Ai = Je()), _(), Qt(), Di(), (ji = 200), (Mi = []));
  }))();
}
function Pi({
  bcc: e,
  bodyMarkdown: t,
  cc: n,
  enabled: r,
  metadata: i,
  onMetadataChange: a,
  recipient: o,
  subject: s,
  writingBlockId: c,
}) {
  "use no forget";
  let l = U(),
    u = S(d),
    f = r,
    p = oi(),
    { data: m, isLoading: h } = ne({
      queryKey: [`chatgpt`, `writing-block-email-accounts`],
      queryFn: async () => {
        let [e, t, n] = await Promise.all([
            Vt.safePost(`/aip/connectors/links/list_accessible`, {
              surface: `writing_blocks`,
              requestBody: { principals: [], link_refresh_strategy: `BLOCKING` },
            }),
            Fi(Ii).catch(() => !1),
            Fi(Ri).catch(() => !1),
          ]),
          r = t
            ? e.links.filter((e) => e.connector_id === Ii).map((e) => ({ link: e, provider: `gmail` }))
            : [],
          i = n
            ? e.links.filter((e) => e.connector_id === Ri).map((e) => ({ link: e, provider: `outlook` }))
            : [];
        return {
          contactsLinks: e.links.filter((e) => e.connector_id === Li),
          emailAccounts: si([...r, ...i]),
        };
      },
      enabled: f,
      retry: !1,
      staleTime: M.FIVE_MINUTES,
    }),
    g = m?.emailAccounts,
    _ = Ct(i),
    v = wt(i),
    y = Dt(i),
    b = cn(i),
    x = g?.find((e) => e.id === y) ?? g?.find((e) => e.provider === b?.provider) ?? g?.[0],
    C = Ge((e) => {
      a?.(e);
    }),
    w = Ge((e) => {
      C({ [Tt]: e });
    }),
    { getContactsForQuery: T, searchContacts: E } = Oi({
      contactsLinkId: Lt(
        (m?.contactsLinks ?? []).map((e) => ({ id: e.id, ownerEmail: e.owner_profile?.email })),
        x,
      ),
      enabled: f,
    }),
    D = Ge((e) => {
      u.get(Ce).danger(
        e.kind === `undo_failed`
          ? l.formatMessage({
              id: `chatgptConversations.writingBlock.emailUndoFailed`,
              defaultMessage: `Couldn't undo sending this email`,
              description: `Error toast shown when undoing a writing block email send fails in Codex Apps.`,
            })
          : l.formatMessage({
              id: `chatgptConversations.writingBlock.emailSendFailed`,
              defaultMessage: `Couldn't send this email`,
              description: `Error toast shown when sending a writing block email fails in Codex Apps.`,
            }),
        {
          errorAnalytics: {
            toastId:
              e.kind === `undo_failed` ||
              e.detail === `invalid_recipients` ||
              e.detail === `missing_recipients`
                ? `useChatgptWritingBlockEmailSend.handleFailure`
                : `writing_blocks_email_send_failure`,
          },
        },
      );
    }),
    {
      sendEmail: O,
      state: k,
      undoEmailSend: A,
    } = Zn({
      isAvailable: f && (x != null || _ != null),
      selectedSenderAccount: x,
      recipient: o,
      cc: n,
      bcc: e,
      subject: s,
      body: f ? ci(t) : ``,
      emailVersionSent: v,
      initialSendId: _,
      transport: p,
      sourceId: c,
      sourceType: c == null ? void 0 : `email_writing_block`,
      emailAction: b,
      markEmailVersionSent: () => {
        C({ [un]: !0, [rt]: null });
      },
      onSendIdChange: (e, t) => {
        C({ [rt]: e, ...(t == null ? {} : { [Tt]: t }) });
      },
      onFailure: D,
      getVisibilityState: () => document.visibilityState,
    });
  return {
    emailAccounts: g,
    emailSendState: k,
    getContactsForQuery: T,
    isLoadingSenderAccounts: h,
    searchContacts: E,
    selectedSenderAccount: x,
    selectSenderAccount: w,
    sendEmail: O,
    undoEmailSend: A,
  };
}
async function Fi(e) {
  return (
    await Vt.safeGet(`/aip/connectors/{connector_id}`, {
      surface: `writing_blocks`,
      additionalHeaders: { "OAI-Product-Sku": `CODEX` },
      parameters: { path: { connector_id: e }, query: { include_actions: !0 } },
    })
  ).actions.some((e) => e.name.trim().toLowerCase() === `send_email` && e.is_enabled !== !1);
}
var Ii, Li, Ri;
function zi() {
  return (zi = e(() => {
    (Ht(),
      mt(),
      nr(),
      ae(),
      N(),
      Ee(),
      $t(),
      ke(),
      Ve(),
      _(),
      K(),
      hi(),
      Ni(),
      (Ii = `connector_2128aebfecb84f64a069897515042a44`),
      (Li = `connector_c0f748249d6a42aea4b00fd375570ded`),
      (Ri = `connector_4aaab2856305417b993eca9a216aaf6e`));
  }))();
}
function Bi(e) {
  let t = (0, Vi.c)(60),
    {
      bodyMarkdown: n,
      emailMetadata: r,
      isPersistedAndComplete: i,
      onEmailMetadataChange: a,
      onOpenEmail: o,
      variant: s,
      writingBlockId: c,
    } = e,
    l = s === `email`,
    u = r?.bcc ?? ``,
    d = r?.cc ?? ``,
    f = l && i,
    p = r?.writingBlockMetadata,
    m = r?.recipient ?? ``,
    h = r?.subject ?? ``,
    g = l ? c : void 0,
    _;
  t[0] !== n ||
  t[1] !== a ||
  t[2] !== u ||
  t[3] !== d ||
  t[4] !== f ||
  t[5] !== p ||
  t[6] !== m ||
  t[7] !== h ||
  t[8] !== g
    ? ((_ = {
        bcc: u,
        bodyMarkdown: n,
        cc: d,
        enabled: f,
        metadata: p,
        onMetadataChange: a,
        recipient: m,
        subject: h,
        writingBlockId: g,
      }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = u),
      (t[3] = d),
      (t[4] = f),
      (t[5] = p),
      (t[6] = m),
      (t[7] = h),
      (t[8] = g),
      (t[9] = _))
    : (_ = t[9]);
  let {
      emailAccounts: v,
      emailSendState: y,
      getContactsForQuery: b,
      isLoadingSenderAccounts: x,
      searchContacts: S,
      selectedSenderAccount: C,
      selectSenderAccount: w,
      sendEmail: T,
      undoEmailSend: E,
    } = Pi(_),
    D = r?.writingBlockMetadata,
    O;
  t[10] === D ? (O = t[11]) : ((O = wt(D)), (t[10] = D), (t[11] = O));
  let k = O,
    A;
  t[12] !== k || t[13] !== y || t[14] !== l
    ? ((A = l && (k || Mt(y))), (t[12] = k), (t[13] = y), (t[14] = l), (t[15] = A))
    : (A = t[15]);
  let j = A,
    M = i && !j,
    N = r?.writingBlockMetadata,
    P;
  t[16] === N ? (P = t[17]) : ((P = ut(N)), (t[16] = N), (t[17] = P));
  let F = P,
    I;
  t[18] !== a || t[19] !== F
    ? ((I = (e, t, n, r) => {
        r &&
          a?.({
            contacts: Sn({
              recipient: e === `recipient` ? n : (F.recipient ?? []),
              cc: e === `cc` ? n : (F.cc ?? []),
              bcc: e === `bcc` ? n : (F.bcc ?? []),
            }),
          });
      }),
      (t[18] = a),
      (t[19] = F),
      (t[20] = I))
    : (I = t[20]);
  let L = I,
    R;
  t[21] !== n ||
  t[22] !== k ||
  t[23] !== r?.bcc ||
  t[24] !== r?.cc ||
  t[25] !== r?.recipient ||
  t[26] !== r?.subject ||
  t[27] !== o
    ? ((R = (e) => {
        (k || o(e),
          Ut({
            href: pt({
              bcc: r?.bcc ?? ``,
              body: ci(n),
              cc: r?.cc ?? ``,
              includeCcAndBcc: !0,
              provider: e,
              recipient: r?.recipient ?? ``,
              subject: r?.subject ?? ``,
            }),
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          }));
      }),
      (t[21] = n),
      (t[22] = k),
      (t[23] = r?.bcc),
      (t[24] = r?.cc),
      (t[25] = r?.recipient),
      (t[26] = r?.subject),
      (t[27] = o),
      (t[28] = R))
    : (R = t[28]);
  let z = R,
    B;
  t[29] !== r?.writingBlockMetadata || t[30] !== C?.provider
    ? ((B = () => {
        let e = C?.provider ?? cn(r?.writingBlockMetadata)?.provider ?? `gmail`;
        Ut({
          href: jt({
            id: e === `outlook` ? Ri : Ii,
            installUrl: null,
            name: e === `outlook` ? `Outlook` : `Gmail`,
          }),
          initiator: `open_in_browser_bridge`,
          openTarget: `external-browser`,
        });
      }),
      (t[29] = r?.writingBlockMetadata),
      (t[30] = C?.provider),
      (t[31] = B))
    : (B = t[31]);
  let V = B,
    H;
  t[32] !== k ||
  t[33] !== r?.bcc ||
  t[34] !== r?.cc ||
  t[35] !== r?.recipient ||
  t[36] !== y ||
  t[37] !== V ||
  t[38] !== z ||
  t[39] !== l ||
  t[40] !== x ||
  t[41] !== i ||
  t[42] !== C ||
  t[43] !== T ||
  t[44] !== E
    ? ((H = l
        ? (0, Hi.jsxs)(Hi.Fragment, {
            children: [
              (0, Hi.jsx)(ri, { disabled: !i, onOpen: z }),
              (0, Hi.jsx)(gi, {
                bcc: r?.bcc ?? ``,
                cc: r?.cc ?? ``,
                emailSendState: y,
                isPersistedSent: k,
                isLoadingSenderAccounts: x,
                onConnect: V,
                onSend: T,
                onUndoSend: E,
                recipient: r?.recipient ?? ``,
                selectedSenderAccount: C,
              }),
            ],
          })
        : null),
      (t[32] = k),
      (t[33] = r?.bcc),
      (t[34] = r?.cc),
      (t[35] = r?.recipient),
      (t[36] = y),
      (t[37] = V),
      (t[38] = z),
      (t[39] = l),
      (t[40] = x),
      (t[41] = i),
      (t[42] = C),
      (t[43] = T),
      (t[44] = E),
      (t[45] = H))
    : (H = t[45]);
  let U;
  t[46] !== v ||
  t[47] !== b ||
  t[48] !== L ||
  t[49] !== M ||
  t[50] !== l ||
  t[51] !== F ||
  t[52] !== S ||
  t[53] !== w ||
  t[54] !== C
    ? ((U = l
        ? {
            contacts: F,
            getContactsForQuery: b,
            onRecipientMetadataChange: L,
            onSearch: S,
            renderSender: (e) => {
              let { displayMode: t, isCollapsed: n, onOpenChange: r } = e;
              return C != null && v != null && (v.length > 1 || !n)
                ? (0, Hi.jsx)(bi, {
                    accounts: v,
                    displayMode: t,
                    isDisabled: !M,
                    onChange: w,
                    onOpenChange: r,
                    selectedAccount: C,
                  })
                : null;
            },
          }
        : void 0),
      (t[46] = v),
      (t[47] = b),
      (t[48] = L),
      (t[49] = M),
      (t[50] = l),
      (t[51] = F),
      (t[52] = S),
      (t[53] = w),
      (t[54] = C),
      (t[55] = U))
    : (U = t[55]);
  let ee;
  return (
    t[56] !== j || t[57] !== H || t[58] !== U
      ? ((ee = { actions: H, emailRowsCapabilities: U, isLocked: j }),
        (t[56] = j),
        (t[57] = H),
        (t[58] = U),
        (t[59] = ee))
      : (ee = t[59]),
    ee
  );
}
var Vi, Hi;
function Ui() {
  return (Ui = e(() => {
    ((Vi = ze()), Ht(), mt(), sn(), _t(), ai(), hi(), yi(), wi(), zi(), (Hi = He()));
  }))();
}
function Wi(e) {
  let t = (0, qi.c)(42),
    {
      initialFeedbackText: r,
      initialOpen: i,
      messageId: a,
      serverConversationId: o,
      userEditedWritingBlock: s,
      writingBlockId: l,
    } = e,
    u = r === void 0 ? `` : r,
    f = i !== void 0 && i,
    p = S(d),
    m = U(),
    h = Ze(dn, `1594900112`),
    g = ee(Zi),
    [_] = (0, Ji.useState)(Ki),
    [v, b] = (0, Ji.useState)(u),
    [x, C] = (0, Ji.useState)(f),
    T = (0, Ji.useRef)(null),
    E,
    O;
  if (
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((E = () => () => {
          T.current != null && clearTimeout(T.current);
        }),
        (O = []),
        (t[0] = E),
        (t[1] = O))
      : ((E = t[0]), (O = t[1])),
    (0, Ji.useEffect)(E, O),
    !h || (g != null && g > _))
  )
    return null;
  let k;
  t[2] === m
    ? (k = t[3])
    : ((k = m.formatMessage({
        id: `codex.writingBlock.feedback.trigger`,
        defaultMessage: `What is this?`,
        description: `Accessible name for the feedback button below a ChatGPT writing block in Codex Apps. Activating it opens a short explanation and a form to share feedback about writing blocks.`,
      })),
      (t[2] = m),
      (t[3] = k));
  let A, j, M, N;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => {
        T.current = setTimeout(() => C(!0), 500);
      }),
      (j = () => {
        T.current != null && (clearTimeout(T.current), (T.current = null));
      }),
      (M = (0, Yi.jsx)(y, {
        id: `codex.writingBlock.feedback.visibleTrigger`,
        defaultMessage: `What is this?`,
        description: `Visible label for the feedback button shown below a ChatGPT writing block in Codex Apps. The button opens a short feature explanation and feedback form.`,
      })),
      (N = (0, Yi.jsx)(D, { asset: w })),
      (t[4] = A),
      (t[5] = j),
      (t[6] = M),
      (t[7] = N))
    : ((A = t[4]), (j = t[5]), (M = t[6]), (N = t[7]));
  let P;
  t[8] === k
    ? (P = t[9])
    : ((P = (0, Yi.jsxs)(n, {
        "aria-label": k,
        color: `ghost`,
        size: `compact`,
        onMouseEnter: A,
        onMouseLeave: j,
        children: [M, N],
      })),
      (t[8] = k),
      (t[9] = P));
  let F;
  t[10] !== v || t[11] !== m || t[12] !== a || t[13] !== p || t[14] !== o || t[15] !== s || t[16] !== l
    ? ((F = (e) => {
        e.preventDefault();
        let t = v.trim();
        t &&
          (Vt.safePost(`/conversation/message/writing-blocks/feedback`, {
            requestBody: {
              conversation_id: o,
              feedback: t,
              message_id: a,
              user_edited_writing_block: s,
              writing_block_id: l,
            },
          }).catch(Gi),
          p
            .get(Ce)
            .success(
              m.formatMessage({
                id: `codex.writingBlock.feedback.submitted`,
                defaultMessage: `Your feedback has been submitted`,
                description: `Short confirmation toast shown after a Codex Apps user submits feedback about a ChatGPT writing block.`,
              }),
            ),
          p.set(Zi, Date.now() + Xi),
          b(``),
          C(!1));
      }),
      (t[10] = v),
      (t[11] = m),
      (t[12] = a),
      (t[13] = p),
      (t[14] = o),
      (t[15] = s),
      (t[16] = l),
      (t[17] = F))
    : (F = t[17]);
  let I;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Yi.jsx)(`div`, {
        className: `text-sm font-semibold text-default`,
        children: (0, Yi.jsx)(y, {
          id: `codex.writingBlock.feedback.title`,
          defaultMessage: `This is a writing block, a new feature we’re testing`,
          description: `Heading above the feedback form opened from a ChatGPT writing block in Codex Apps. It explains that writing blocks are a new feature and encourages the user to share feedback.`,
        }),
      })),
      (t[18] = I))
    : (I = t[18]);
  let L;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Yi.jsx)(`div`, {
        className: `text-xs text-secondary`,
        children: (0, Yi.jsx)(y, {
          id: `codex.writingBlock.feedback.description`,
          defaultMessage: `Tell us what’s working and what’s not. The more specific the feedback, the better`,
          description: `Helper text above the writing-block feedback input in Codex Apps. It asks the user to describe what works and what does not, and encourages concrete feedback.`,
        }),
      })),
      (t[19] = L))
    : (L = t[19]);
  let R;
  t[20] === m
    ? (R = t[21])
    : ((R = m.formatMessage({
        id: `codex.writingBlock.feedback.inputLabel`,
        defaultMessage: `Additional feedback`,
        description: `Accessible name for the writing-block feedback text area in Codex Apps. Users enter what they liked or disliked about the writing-block editor.`,
      })),
      (t[20] = m),
      (t[21] = R));
  let z;
  t[22] === m
    ? (z = t[23])
    : ((z = m.formatMessage({
        id: `codex.writingBlock.feedback.placeholder`,
        defaultMessage: `What did you like or dislike?`,
        description: `Placeholder in the writing-block feedback text area in Codex Apps. It asks the user to explain what they liked or disliked about the editor.`,
      })),
      (t[22] = m),
      (t[23] = z));
  let B;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => b(e.target.value)), (t[24] = B))
    : (B = t[24]);
  let V;
  t[25] !== v || t[26] !== R || t[27] !== z
    ? ((V = (0, Yi.jsx)(ot, {
        "aria-label": R,
        autoFocus: !0,
        name: `writing-block-feedback`,
        placeholder: z,
        rows: 3,
        value: v,
        onChange: B,
      })),
      (t[25] = v),
      (t[26] = R),
      (t[27] = z),
      (t[28] = V))
    : (V = t[28]);
  let H;
  t[29] === v ? (H = t[30]) : ((H = v.trim()), (t[29] = v), (t[30] = H));
  let te = H.length === 0,
    ne;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, Yi.jsx)(y, {
        id: `codex.writingBlock.feedback.submit`,
        defaultMessage: `Share feedback`,
        description: `Label for the submit button in the writing-block feedback form in Codex Apps. It sends the user’s written feedback about the writing-block editor.`,
      })),
      (t[31] = ne))
    : (ne = t[31]);
  let re;
  t[32] === te
    ? (re = t[33])
    : ((re = (0, Yi.jsx)(n, { disabled: te, size: `compact`, type: `submit`, children: ne })),
      (t[32] = te),
      (t[33] = re));
  let ie;
  t[34] !== F || t[35] !== V || t[36] !== re
    ? ((ie = (0, Yi.jsxs)(`form`, {
        className: `flex flex-col gap-3 p-2`,
        onSubmit: F,
        children: [I, L, V, re],
      })),
      (t[34] = F),
      (t[35] = V),
      (t[36] = re),
      (t[37] = ie))
    : (ie = t[37]);
  let ae;
  return (
    t[38] !== x || t[39] !== P || t[40] !== ie
      ? ((ae = (0, Yi.jsx)(`div`, {
          className: `flex justify-end px-3`,
          children: (0, Yi.jsx)(c, {
            align: `end`,
            contentWidth: `menuBounded`,
            onOpenChange: C,
            open: x,
            side: `top`,
            triggerButton: P,
            children: ie,
          }),
        })),
        (t[38] = x),
        (t[39] = P),
        (t[40] = ie),
        (t[41] = ae))
      : (ae = t[41]),
    ae
  );
}
function Gi() {}
function Ki() {
  return Date.now();
}
var qi, Ji, Yi, Xi, Zi;
function Qi() {
  return (Qi = e(() => {
    ((qi = ze()),
      F(),
      N(),
      (Ji = Je()),
      Ee(),
      $t(),
      Le(),
      a(),
      A(),
      it(),
      ke(),
      Ve(),
      Et(),
      En(),
      (Yi = He()),
      (Xi = 6048e5),
      (Zi = an(`1594900112-hidden-until`, null)));
  }))();
}
function $i(e) {
  let t = (0, na.c)(46),
    { ineligibilityReason: n, isDisabled: r, metadata: i, onFollowupClick: a, onSelect: o } = e,
    [s, c] = (0, ra.useState)(!1),
    [l, u] = (0, ra.useState)(!1),
    [d, f] = (0, ra.useState)(null),
    p = (0, ra.useRef)(null),
    m = (0, ra.useRef)(null),
    h = re(),
    _;
  t[0] === i ? (_ = t[1]) : ((_ = bn(i)), (t[0] = i), (t[1] = _));
  let v = _,
    y = r || s,
    b;
  t[2] === v
    ? (b = t[3])
    : ((b = () => {
        let e = p.current,
          t = m.current;
        if (e == null || t == null) return;
        if (getComputedStyle(e).flexDirection === `column`) {
          f(v.length);
          return;
        }
        let n = e.getBoundingClientRect().width,
          r = 1 / 0,
          i = -1 / 0,
          a = 0;
        for (let e of t.children) {
          let t = e.getBoundingClientRect();
          if (((r = Math.min(r, t.left)), (i = Math.max(i, t.right)), a > 0 && i - r > n + 0.5)) break;
          a += 1;
        }
        f(a);
      }),
      (t[2] = v),
      (t[3] = b));
  let x = b,
    S = g(x),
    C = g(x);
  if (n != null || l || v.length === 0 || st(i)) return null;
  let w;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { height: `auto`, opacity: 1, y: 0 }), (t[4] = w))
    : (w = t[4]);
  let T;
  t[5] === h ? (T = t[6]) : ((T = !h && { height: 0, opacity: 0, y: -8 }), (t[5] = h), (t[6] = T));
  let E = h ? 0 : 0.2,
    D;
  t[7] === E ? (D = t[8]) : ((D = { duration: E, ease: `easeOut` }), (t[7] = E), (t[8] = D));
  let O;
  t[9] !== S || t[10] !== x
    ? ((O = (e) => {
        ((p.current = e), S(e), x());
      }),
      (t[9] = S),
      (t[10] = x),
      (t[11] = O))
    : (O = t[11]);
  let k;
  if (t[12] !== y || t[13] !== a || t[14] !== o || t[15] !== h || t[16] !== v || t[17] !== d) {
    let e;
    (t[19] !== y || t[20] !== a || t[21] !== o || t[22] !== h || t[23] !== v.length
      ? ((e = (e, t) => {
          let { prompt: n, sourceIndex: r, title: i } = e;
          return (0, ia.jsxs)(
            W.button,
            {
              className: be(
                `relative flex min-h-11 w-full min-w-0 items-center gap-1 rounded-xs border-0 bg-transparent p-0 text-start select-none after:absolute after:inset-x-0 after:top-1/2 after:h-full after:min-h-8 after:-translate-y-1/2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text sm:min-h-0 sm:w-auto sm:max-w-full sm:shrink-0 sm:gap-1.5 pointer-coarse:after:min-h-11`,
                y ? `cursor-default` : `group/suggested-followup cursor-interaction hover:text-info`,
              ),
              animate: { opacity: 1, y: 0 },
              "aria-disabled": y,
              initial: !h && { opacity: 0, y: -4 },
              layout: !h,
              transition: { duration: h ? 0 : 0.18, ease: `easeOut` },
              type: `button`,
              onClick: () => {
                y ||
                  (a?.(t + 1, v.length),
                  c(!0),
                  o(n).then((e) => {
                    (c(!1), e && u(!0));
                  }));
              },
              children: [
                (0, ia.jsx)(J, {
                  className: `transition-transform duration-basic ease-out motion-safe:group-hover/suggested-followup:translate-x-0.5`,
                }),
                (0, ia.jsx)(`span`, {
                  className: `min-w-0 wrap-anywhere whitespace-normal sm:truncate`,
                  children: i,
                }),
              ],
            },
            r,
          );
        }),
        (t[19] = y),
        (t[20] = a),
        (t[21] = o),
        (t[22] = h),
        (t[23] = v.length),
        (t[24] = e))
      : (e = t[24]),
      (k = v.slice(0, d ?? v.length).map(e)),
      (t[12] = y),
      (t[13] = a),
      (t[14] = o),
      (t[15] = h),
      (t[16] = v),
      (t[17] = d),
      (t[18] = k));
  } else k = t[18];
  let A;
  t[25] !== O || t[26] !== k
    ? ((A = (0, ia.jsx)(`div`, {
        ref: O,
        className: `flex min-w-0 flex-col items-start sm:flex-row sm:items-center sm:gap-3`,
        children: k,
      })),
      (t[25] = O),
      (t[26] = k),
      (t[27] = A))
    : (A = t[27]);
  let j;
  t[28] === v ? (j = t[29]) : ((j = JSON.stringify(v.map(ta))), (t[28] = v), (t[29] = j));
  let M;
  t[30] !== C || t[31] !== x
    ? ((M = (e) => {
        ((m.current = e), C(e), x());
      }),
      (t[30] = C),
      (t[31] = x),
      (t[32] = M))
    : (M = t[32]);
  let N;
  t[33] === v ? (N = t[34]) : ((N = v.map(ea)), (t[33] = v), (t[34] = N));
  let P;
  t[35] !== j || t[36] !== M || t[37] !== N
    ? ((P = (0, ia.jsx)(
        `div`,
        {
          ref: M,
          className: `pointer-events-none invisible absolute start-0 top-0 hidden w-max items-center gap-3 sm:flex`,
          "aria-hidden": `true`,
          children: N,
        },
        j,
      )),
      (t[35] = j),
      (t[36] = M),
      (t[37] = N),
      (t[38] = P))
    : (P = t[38]);
  let F;
  t[39] !== P || t[40] !== A
    ? ((F = (0, ia.jsxs)(`div`, {
        className: `relative min-w-0 px-3 text-base leading-relaxed text-default sm:rounded-b-3xl sm:bg-secondary-soft-alpha sm:py-2.5`,
        children: [A, P],
      })),
      (t[39] = P),
      (t[40] = A),
      (t[41] = F))
    : (F = t[41]);
  let I;
  return (
    t[42] !== F || t[43] !== T || t[44] !== D
      ? ((I = (0, ia.jsx)(W.div, {
          className: `relative mb-4 min-w-0 overflow-visible px-3 sm:-mt-4 sm:overflow-hidden`,
          animate: w,
          initial: T,
          transition: D,
          children: F,
        })),
        (t[42] = F),
        (t[43] = T),
        (t[44] = D),
        (t[45] = I))
      : (I = t[45]),
    I
  );
}
function ea(e) {
  let { sourceIndex: t, title: n } = e;
  return (0, ia.jsxs)(
    `div`,
    {
      className: `flex shrink-0 items-center gap-1.5`,
      children: [(0, ia.jsx)(J, {}), (0, ia.jsx)(`span`, { className: `whitespace-nowrap`, children: n })],
    },
    t,
  );
}
function ta(e) {
  let { title: t } = e;
  return t;
}
var na, ra, ia;
function aa() {
  return (aa = e(() => {
    ((na = ze()), at(), se(), xe(), (ra = Je()), R(), C(), O(), (ia = He()));
  }))();
}
function oa(e) {
  let t = (0, da.c)(268),
    {
      conversationId: r,
      context: i,
      editorKey: a,
      emailMetadata: o,
      serverConversationId: s,
      enableAiTools: c,
      isExpanded: l,
      isReadOnly: u,
      librarySaveControls: f,
      isStreaming: p,
      messageId: m,
      copyTurnToClipboardMessageId: h,
      onBeforeDocumentExport: g,
      onAskForChanges: _,
      onEmailMetadataChange: v,
      onOpenVersionHistory: b,
      onSuggestedFollowup: C,
      renderFrame: w,
      showMagicEditAction: T,
      suppressCopyTurnToClipboardAnalytics: E,
      suggestedFollowupIneligibilityReason: O,
      title: k,
      userEditedWritingBlock: A,
      variant: j,
      writingBlockId: M,
      writingBlockIndex: N,
    } = e,
    P = l !== void 0 && l,
    F = u !== void 0 && u,
    I = h === void 0 ? m : h,
    L = T !== void 0 && T,
    R = A !== void 0 && A,
    z = S(d),
    B = Bt(),
    V = _n(`3737772469`),
    H = gn(`3220935388`) || V.get(`inline_header_library_enabled`, !1),
    U = ee(tn),
    te = (0, fa.useRef)(!1),
    ne = (0, fa.useRef)(void 0),
    re,
    ie;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = () => () => ne.current?.()), (ie = []), (t[0] = re), (t[1] = ie))
    : ((re = t[0]), (ie = t[1])),
    (0, fa.useEffect)(re, ie));
  let [ae, oe] = (0, fa.useState)(!1),
    { renderView: se, state: W } = i,
    G = a != null && !p && !F,
    ce;
  t[2] !== m || t[3] !== z || t[4] !== s
    ? ((ce = (e) => {
        s != null && m != null && At(z, vn, { conversationId: s, messageId: m, provider: e });
      }),
      (t[2] = m),
      (t[3] = z),
      (t[4] = s),
      (t[5] = ce))
    : (ce = t[5]);
  let le;
  t[6] !== o ||
  t[7] !== G ||
  t[8] !== v ||
  t[9] !== W.displayedContent ||
  t[10] !== ce ||
  t[11] !== j ||
  t[12] !== M
    ? ((le = {
        bodyMarkdown: W.displayedContent,
        emailMetadata: o,
        isPersistedAndComplete: G,
        onEmailMetadataChange: v,
        onOpenEmail: ce,
        variant: j,
        writingBlockId: M,
      }),
      (t[6] = o),
      (t[7] = G),
      (t[8] = v),
      (t[9] = W.displayedContent),
      (t[10] = ce),
      (t[11] = j),
      (t[12] = M),
      (t[13] = le))
    : (le = t[13]);
  let K = Bi(le),
    ue = j === `slides` && (ae || o?.writingBlockMetadata?.artifact_generation_completed === !0),
    q = G && !K.isLocked && !ue && !f?.isSaving,
    de;
  t[14] !== o?.writingBlockMetadata || t[15] !== j
    ? ((de = j === `slides` ? Jr(o?.writingBlockMetadata) : null),
      (t[14] = o?.writingBlockMetadata),
      (t[15] = j),
      (t[16] = de))
    : (de = t[16]);
  let fe = de,
    pe = o?.writingBlockMetadata,
    me;
  t[17] === pe ? (me = t[18]) : ((me = bn(pe)), (t[17] = pe), (t[18] = me));
  let ge = me.length,
    _e = o?.writingBlockMetadata,
    ve;
  t[19] === _e ? (ve = t[20]) : ((ve = st(_e)), (t[19] = _e), (t[20] = ve));
  let ye = ve,
    be,
    xe;
  (t[21] !== K.isLocked ||
  t[22] !== ge ||
  t[23] !== ye ||
  t[24] !== P ||
  t[25] !== p ||
  t[26] !== m ||
  t[27] !== z ||
  t[28] !== s ||
  t[29] !== O ||
  t[30] !== j ||
  t[31] !== M
    ? ((be = () => {
        if (
          te.current ||
          P ||
          ge === 0 ||
          p ||
          m == null ||
          s == null ||
          O === `conversation_unavailable` ||
          O === `message_not_found`
        )
          return;
        te.current = !0;
        let e = O == null && !ye && !K.isLocked,
          t = K.isLocked
            ? rn.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_EMAIL_SEND_LOCKED
            : ua(O);
        At(z, nn, {
          conversationId: s,
          followupCount: x(ge),
          messageId: m,
          notShownReason: e ? void 0 : t,
          outcome: e
            ? Gt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_RENDER_OUTCOME_TYPE_SHOWN
            : Gt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_RENDER_OUTCOME_TYPE_NOT_SHOWN,
          variant: j,
          writingBlockId: M,
        });
      }),
      (xe = [K.isLocked, ge, ye, P, p, m, z, s, O, j, M]),
      (t[21] = K.isLocked),
      (t[22] = ge),
      (t[23] = ye),
      (t[24] = P),
      (t[25] = p),
      (t[26] = m),
      (t[27] = z),
      (t[28] = s),
      (t[29] = O),
      (t[30] = j),
      (t[31] = M),
      (t[32] = be),
      (t[33] = xe))
    : ((be = t[32]), (xe = t[33])),
    (0, fa.useEffect)(be, xe));
  let Se = c ?? s != null,
    Ce;
  t[34] !== m || t[35] !== z || t[36] !== s || t[37] !== j || t[38] !== M
    ? ((Ce = (e) => {
        let { checked: t } = e;
        s != null &&
          m != null &&
          At(z, on, {
            checked: String(t),
            messageId: m,
            metricValue: x(+!!t),
            threadId: s,
            variant: j,
            writingBlockId: M,
          });
      }),
      (t[34] = m),
      (t[35] = z),
      (t[36] = s),
      (t[37] = j),
      (t[38] = M),
      (t[39] = Ce))
    : (Ce = t[39]);
  let we;
  t[40] !== o || t[41] !== v || t[42] !== W || t[43] !== j
    ? ((we = (e, t, n) => {
        if (v == null) return !1;
        let r = j === `email` && o?.subject != null ? { type: `email`, subject: o.subject } : void 0,
          i = $e(o?.writingBlockMetadata, e, t);
        if (i == null && n != null) {
          let a = Nt(o?.writingBlockMetadata),
            s = n.primaryOption ? [{ ...n.primaryOption, variant: r ?? n.primaryOption.variant }, ...a] : a;
          if (e.index !== s.length || e.index < 1 || s.some((t) => t.id === e.id)) return !1;
          i = { options: [...s, { id: e.id, label: e.id, content: t }] };
        }
        return (
          i != null && r != null && (i = ln(i, e, r.subject)),
          i != null && (v({ ...i, [Wt]: e.id, [Jt]: !0 }), W.selectToneSection(e.id), !0)
        );
      }),
      (t[40] = o),
      (t[41] = v),
      (t[42] = W),
      (t[43] = j),
      (t[44] = we))
    : (we = t[44]);
  let Te;
  t[45] !== q ||
  t[46] !== m ||
  t[47] !== s ||
  t[48] !== L ||
  t[49] !== W.editorView ||
  t[50] !== W.generatePluginState ||
  t[51] !== Se ||
  t[52] !== Ce ||
  t[53] !== we ||
  t[54] !== j ||
  t[55] !== M ||
  t[56] !== N
    ? ((Te = {
        editorView: W.editorView,
        enableAiTools: Se,
        generatePluginState: W.generatePluginState,
        isEditable: q,
        messageId: m,
        onTaskCheckboxToggled: Ce,
        onWriteLikeMeResult: we,
        serverConversationId: s,
        showMagicEditAction: L,
        variant: j,
        writingBlockId: M,
        writingBlockIndex: N,
      }),
      (t[45] = q),
      (t[46] = m),
      (t[47] = s),
      (t[48] = L),
      (t[49] = W.editorView),
      (t[50] = W.generatePluginState),
      (t[51] = Se),
      (t[52] = Ce),
      (t[53] = we),
      (t[54] = j),
      (t[55] = M),
      (t[56] = N),
      (t[57] = Te))
    : (Te = t[57]);
  let {
      cancelPendingAiRequests: Ee,
      createEditor: De,
      editorOverlays: Oe,
      editorRootRef: ke,
      hasPendingAiEdits: je,
      headerMagicEditAction: Me,
      isGenerateInputOpen: Ne,
      isHeaderComposerOpen: Pe,
      isHeaderInteractionDisabled: J,
      isHistoryInteractionDisabled: Fe,
      isEditorInteractionDisabled: Ie,
      isWriteLikeMeSubmitting: Le,
      magicEdit: Re,
      onEditSelection: ze,
      onEditorKeyDownCapture: Be,
      onEditorPointerDownCapture: Ve,
      onWriteLikeMeAction: He,
      previewEngine: Ue,
      resetAiTools: We,
      resetGeneratePrompt: Ke,
      submitHeaderMagicEdit: qe,
    } = Hn(Te),
    Je = Re.isLoading && Re.magicEditSubmissionSource === Vn.TOOLBAR,
    Ye;
  t[58] !== _ || t[59] !== Ue
    ? ((Ye = (e) => {
        let t = _?.(e, () => {
          e.isDestroyed || Ue.unpinMagicEditSelection(e);
        });
        t != null && ((ne.current = t), Ue.pinMagicEditSelection(e));
      }),
      (t[58] = _),
      (t[59] = Ue),
      (t[60] = Ye))
    : (Ye = t[60]);
  let Xe = Ge(Ye),
    Ze = Me;
  if (j === `slides` && r != null) {
    let e;
    t[61] !== q ||
    t[62] !== Pe ||
    t[63] !== Fe ||
    t[64] !== Re.isLoading ||
    t[65] !== Re.magicEditSubmissionSource ||
    t[66] !== v ||
    t[67] !== We ||
    t[68] !== fe ||
    t[69] !== W.displayedContent ||
    t[70] !== qe
      ? ((e = Pe
          ? null
          : (0, $.jsxs)($.Fragment, {
              children: [
                Re.isLoading && Re.magicEditSubmissionSource === Vn.HEADER_COMPOSER
                  ? (0, $.jsx)(n, {
                      color: `ghost`,
                      onClick: We,
                      size: `composer`,
                      children: (0, $.jsx)(y, {
                        id: `codex.writingBlock.slides.slideCount.stop`,
                        defaultMessage: `Stop`,
                        description: `Button that cancels an in-progress AI rewrite of a presentation outline after changing its slide count`,
                      }),
                    })
                  : (0, $.jsx)(Mr, {
                      disabled: !q || Fe || W.displayedContent.trim().length === 0,
                      onSlideCountChange: (e) => {
                        qe(
                          `Revise this presentation outline to exactly ${e} slides total. Preserve its presentation title, cover-slide choice, topic, key facts, and logical flow. Number slides consecutively using "## Slide N: <slide title>" headings. If a title slide is present, label it "## Slide 1 (Title): <presentation title>", keep it to the title and optional subtitle, and include it in the total. Give each content slide one clear focus and concise dash bullets. Combine closely related ideas when reducing slides; split complex ideas or add meaningful sections when expanding. Do not add filler or invent facts.`,
                        ).catch(la);
                      },
                      slideCount: Or(W.displayedContent),
                    }),
                (0, $.jsx)(Hr, { disabled: !q || Fe, onMetadataChange: v, selectedTemplate: fe }),
              ],
            })),
        (t[61] = q),
        (t[62] = Pe),
        (t[63] = Fe),
        (t[64] = Re.isLoading),
        (t[65] = Re.magicEditSubmissionSource),
        (t[66] = v),
        (t[67] = We),
        (t[68] = fe),
        (t[69] = W.displayedContent),
        (t[70] = qe),
        (t[71] = e))
      : (e = t[71]);
    let r;
    (t[72] === e
      ? (r = t[73])
      : ((r = (0, $.jsx)(`div`, {
          className: `flex min-h-9 min-w-0 grow items-center gap-3 px-2`,
          children: e,
        })),
        (t[72] = e),
        (t[73] = r)),
      (Ze = r));
  } else if (!P && j !== `email` && !ye && (H || (f?.saveToPage && f.onSave != null))) {
    let e = !G || J || Fe,
      n;
    t[74] !== J ||
    t[75] !== G ||
    t[76] !== m ||
    t[77] !== g ||
    t[78] !== s ||
    t[79] !== W.displayedContent ||
    t[80] !== k ||
    t[81] !== j ||
    t[82] !== N
      ? ((n =
          j === `document`
            ? (0, $.jsx)(Qr, {
                content: W.displayedContent,
                isDisabled: !G || J,
                messageId: m,
                onBeforeExport: g,
                renderAsSubmenu: !0,
                serverConversationId: s,
                title: k,
                writingBlockIndex: N,
              })
            : void 0),
        (t[74] = J),
        (t[75] = G),
        (t[76] = m),
        (t[77] = g),
        (t[78] = s),
        (t[79] = W.displayedContent),
        (t[80] = k),
        (t[81] = j),
        (t[82] = N),
        (t[83] = n))
      : (n = t[83]);
    let r = j === `document` ? b : void 0,
      i = f?.libraryFileId,
      a = f?.isSaving,
      o = f?.saveConfirmation,
      c = f?.saveToPage,
      l;
    t[84] !== U || t[85] !== g
      ? ((l = U
          ? () => {
              g?.().catch(ca);
            }
          : void 0),
        (t[84] = U),
        (t[85] = g),
        (t[86] = l))
      : (l = t[86]);
    let u;
    t[87] !== U || t[88] !== f || t[89] !== W.displayedContent || t[90] !== W.editorView
      ? ((u =
          (U || f?.saveToPage) && W.displayedContent.trim() !== `` && f?.onSave != null
            ? (e) => {
                let t = W.editorView;
                f.onSave?.(t == null || t.isDestroyed ? W.displayedContent : xn().serialize(t.state.doc), e);
              }
            : void 0),
        (t[87] = U),
        (t[88] = f),
        (t[89] = W.displayedContent),
        (t[90] = W.editorView),
        (t[91] = u))
      : (u = t[91]);
    let d;
    t[92] === k
      ? (d = t[93])
      : ((d =
          k ??
          (0, $.jsx)(y, {
            id: `codex.writingBlock.header.title.fallback`,
            defaultMessage: `Writing`,
            description: `Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.`,
          })),
        (t[92] = k),
        (t[93] = d));
    let p;
    (t[94] !== e ||
    t[95] !== n ||
    t[96] !== r ||
    t[97] !== i ||
    t[98] !== a ||
    t[99] !== o ||
    t[100] !== c ||
    t[101] !== l ||
    t[102] !== u ||
    t[103] !== d
      ? ((p = (0, $.jsx)(mr, {
          disabled: e,
          downloadMenu: n,
          onOpenVersionHistory: r,
          libraryFileId: i,
          isSaving: a,
          saveConfirmation: o,
          saveToPage: c,
          onLibraryClick: l,
          onSave: u,
          children: d,
        })),
        (t[94] = e),
        (t[95] = n),
        (t[96] = r),
        (t[97] = i),
        (t[98] = a),
        (t[99] = o),
        (t[100] = c),
        (t[101] = l),
        (t[102] = u),
        (t[103] = d),
        (t[104] = p))
      : (p = t[104]),
      (Ze = p));
  }
  let Qe;
  if (
    t[105] !== Ee ||
    t[106] !== r ||
    t[107] !== I ||
    t[108] !== De ||
    t[109] !== Oe ||
    t[110] !== ke ||
    t[111] !== K.actions ||
    t[112] !== K.emailRowsCapabilities ||
    t[113] !== o?.writingBlockMetadata ||
    t[114] !== Xe ||
    t[115] !== ye ||
    t[116] !== je ||
    t[117] !== Ze ||
    t[118] !== H ||
    t[119] !== ae ||
    t[120] !== Je ||
    t[121] !== q ||
    t[122] !== Ie ||
    t[123] !== P ||
    t[124] !== Ne ||
    t[125] !== Pe ||
    t[126] !== J ||
    t[127] !== Fe ||
    t[128] !== G ||
    t[129] !== ue ||
    t[130] !== B ||
    t[131] !== p ||
    t[132] !== Le ||
    t[133] !== U ||
    t[134] !== f ||
    t[135] !== Re ||
    t[136] !== m ||
    t[137] !== _ ||
    t[138] !== g ||
    t[139] !== ze ||
    t[140] !== Be ||
    t[141] !== Ve ||
    t[142] !== b ||
    t[143] !== He ||
    t[144] !== Ue ||
    t[145] !== w ||
    t[146] !== se ||
    t[147] !== We ||
    t[148] !== Ke ||
    t[149] !== z ||
    t[150] !== fe ||
    t[151] !== s ||
    t[152] !== W ||
    t[153] !== E ||
    t[154] !== k ||
    t[155] !== j ||
    t[156] !== M ||
    t[157] !== N
  ) {
    let e;
    if (P && (U || f?.saveToPage) && !f?.libraryFileId && f?.onSave != null) {
      let n;
      if (f.saveToPage) {
        let e;
        (t[159] === f.isSaving
          ? (e = t[160])
          : ((e = f.isSaving
              ? (0, $.jsx)(y, {
                  id: `codex.writingBlock.page.saving`,
                  defaultMessage: `Creating Page`,
                  description: `Accessible label on the writing block save control while its editable Page is being created. Keep this progress label short.`,
                })
              : (0, $.jsx)(y, {
                  id: `codex.writingBlock.page.save`,
                  defaultMessage: `Save`,
                  description: `Label, accessible label, and tooltip for a writing block's save control. Saves the document as a Page in the existing writing block so it remains editable inline. Keep this action short.`,
                })),
            (t[159] = f.isSaving),
            (t[160] = e)),
          (n = e));
      } else if (f.isSaving && B) {
        let e;
        (t[161] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(y, {
              id: `codex.writingBlock.viewer.savingToLibrary.space`,
              defaultMessage: `Adding to Space`,
              description: `Label on the expanded writing block's save button while its Space save is in progress. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })),
            (t[161] = e))
          : (e = t[161]),
          (n = e));
      } else if (f.isSaving) {
        let e;
        (t[162] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(y, {
              id: `codex.writingBlock.viewer.savingToLibrary`,
              defaultMessage: `Adding to Library`,
              description: `Label on the expanded writing block's save button while its Library save is in progress.`,
            })),
            (t[162] = e))
          : (e = t[162]),
          (n = e));
      } else if (B) {
        let e;
        (t[163] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(y, {
              id: `codex.writingBlock.viewer.saveToLibrary.space`,
              defaultMessage: `Add to Space`,
              description: `Button in the expanded writing block header that saves the writing block to Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })),
            (t[163] = e))
          : (e = t[163]),
          (n = e));
      } else {
        let e;
        (t[164] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(y, {
              id: `codex.writingBlock.viewer.saveToLibrary`,
              defaultMessage: `Add to Library`,
              description: `Button in the expanded writing block header that saves the writing block to Library.`,
            })),
            (t[164] = e))
          : (e = t[164]),
          (n = e));
      }
      let r;
      t[165] !== q || t[166] !== J || t[167] !== W.displayedContent
        ? ((r = !q || J || W.displayedContent.trim() === ``),
          (t[165] = q),
          (t[166] = J),
          (t[167] = W.displayedContent),
          (t[168] = r))
        : (r = t[168]);
      let i;
      t[169] !== f || t[170] !== W.displayedContent || t[171] !== W.editorView
        ? ((i = (e) => {
            let t = W.editorView;
            f.onSave?.(
              t == null || t.isDestroyed ? W.displayedContent : xn().serialize(t.state.doc),
              e.detail === 0,
            );
          }),
          (t[169] = f),
          (t[170] = W.displayedContent),
          (t[171] = W.editorView),
          (t[172] = i))
        : (i = t[172]);
      let a;
      t[173] === f.isSaving
        ? (a = t[174])
        : ((a = f.isSaving ? null : (0, $.jsx)(D, { asset: he })), (t[173] = f.isSaving), (t[174] = a));
      let o;
      (t[175] === n
        ? (o = t[176])
        : ((o = (0, $.jsx)(`span`, { className: `text-tertiary`, children: n })), (t[175] = n), (t[176] = o)),
        (e = (0, $.jsxs)(Ae, {
          "aria-busy": f.isSaving || void 0,
          loading: f.isSaving,
          disabled: r,
          onClick: i,
          children: [a, o],
        })));
    }
    let n;
    t[177] !== P ||
    t[178] !== J ||
    t[179] !== G ||
    t[180] !== m ||
    t[181] !== g ||
    t[182] !== s ||
    t[183] !== W.displayedContent ||
    t[184] !== k ||
    t[185] !== j ||
    t[186] !== N
      ? ((n =
          P && j === `document`
            ? (0, $.jsx)(Qr, {
                appearance: `viewer`,
                content: W.displayedContent,
                isDisabled: !G || J,
                messageId: m,
                onBeforeExport: g,
                serverConversationId: s,
                title: k,
                writingBlockIndex: N,
              })
            : null),
        (t[177] = P),
        (t[178] = J),
        (t[179] = G),
        (t[180] = m),
        (t[181] = g),
        (t[182] = s),
        (t[183] = W.displayedContent),
        (t[184] = k),
        (t[185] = j),
        (t[186] = N),
        (t[187] = n))
      : (n = t[187]);
    let i;
    t[188] !== P || t[189] !== Fe || t[190] !== G || t[191] !== b || t[192] !== j
      ? ((i =
          P && j === `document` && b != null ? (0, $.jsx)(Kn, { disabled: !G || Fe, onSelect: b }) : null),
        (t[188] = P),
        (t[189] = Fe),
        (t[190] = G),
        (t[191] = b),
        (t[192] = j),
        (t[193] = i))
      : (i = t[193]);
    let a;
    t[194] !== ye ||
    t[195] !== H ||
    t[196] !== P ||
    t[197] !== J ||
    t[198] !== G ||
    t[199] !== U ||
    t[200] !== f?.libraryFileId ||
    t[201] !== m ||
    t[202] !== g ||
    t[203] !== s ||
    t[204] !== W.displayedContent ||
    t[205] !== k ||
    t[206] !== j ||
    t[207] !== N
      ? ((a =
          j === `document` && !P && f?.libraryFileId != null && (!H || !U || ye)
            ? (0, $.jsx)(Qr, {
                content: W.displayedContent,
                isDisabled: !G || J,
                messageId: m,
                onBeforeExport: g,
                serverConversationId: s,
                title: k,
                writingBlockIndex: N,
              })
            : null),
        (t[194] = ye),
        (t[195] = H),
        (t[196] = P),
        (t[197] = J),
        (t[198] = G),
        (t[199] = U),
        (t[200] = f?.libraryFileId),
        (t[201] = m),
        (t[202] = g),
        (t[203] = s),
        (t[204] = W.displayedContent),
        (t[205] = k),
        (t[206] = j),
        (t[207] = N),
        (t[208] = a))
      : (a = t[208]);
    let c;
    t[209] !== r ||
    t[210] !== Fe ||
    t[211] !== G ||
    t[212] !== ue ||
    t[213] !== fe ||
    t[214] !== W.displayedContent ||
    t[215] !== j ||
    t[216] !== M
      ? ((c =
          j === `slides` && r != null && M != null
            ? (0, $.jsx)(xr, {
                content: W.displayedContent,
                conversationId: r,
                disabled: !G || ue || Fe,
                onSubmittingChange: oe,
                selectedTemplate: fe,
                writingBlockId: M,
              })
            : null),
        (t[209] = r),
        (t[210] = Fe),
        (t[211] = G),
        (t[212] = ue),
        (t[213] = fe),
        (t[214] = W.displayedContent),
        (t[215] = j),
        (t[216] = M),
        (t[217] = c))
      : (c = t[217]);
    let l;
    t[218] !== K.actions || t[219] !== a || t[220] !== c
      ? ((l = (0, $.jsxs)($.Fragment, { children: [a, K.actions, c] })),
        (t[218] = K.actions),
        (t[219] = a),
        (t[220] = c),
        (t[221] = l))
      : (l = t[221]);
    let u;
    t[222] === Re
      ? (u = t[223])
      : ((u = () => {
          Re.magicEditSubmissionSource === Vn.TOOLBAR && Re.cancelMagicEdit();
        }),
        (t[222] = Re),
        (t[223] = u));
    let d;
    t[224] !== Ue || t[225] !== W.editorView
      ? ((d = (e) => {
          let t = W.editorView;
          t == null || t.isDestroyed || (e ? Ue.pinMagicEditSelection(t) : Ue.unpinMagicEditSelection(t));
        }),
        (t[224] = Ue),
        (t[225] = W.editorView),
        (t[226] = d))
      : (d = t[226]);
    let h;
    t[227] !== m || t[228] !== z || t[229] !== s || t[230] !== j || t[231] !== M || t[232] !== N
      ? ((h = (e) => {
          s != null &&
            m != null &&
            (At(z, qt, {
              conversationId: s,
              messageId: m,
              variant: j,
              writingBlockId: M,
              writingBlockIndex: N == null ? void 0 : String(N),
            }),
            Vt.safePost(`/conversation/implicit_message_feedback`, {
              requestBody: {
                conversation_id: s,
                message_id: m,
                source: `mouse`,
                location: `writing-block`,
                feedback: { feedback_type: `copy`, selected_text_length: e.length },
              },
            }).catch(sa));
        }),
        (t[227] = m),
        (t[228] = z),
        (t[229] = s),
        (t[230] = j),
        (t[231] = M),
        (t[232] = N),
        (t[233] = h))
      : (h = t[233]);
    let v;
    t[234] !== I || t[235] !== z || t[236] !== s || t[237] !== E
      ? ((v = () => {}), (t[234] = I), (t[235] = z), (t[236] = s), (t[237] = E), (t[238] = v))
      : (v = t[238]);
    let x;
    t[239] === Ke
      ? (x = t[240])
      : ((x = (e) => {
          Bn(e, Ke);
        }),
        (t[239] = Ke),
        (t[240] = x));
    let S;
    (t[241] !== We || t[242] !== W
      ? ((S = (e) => {
          e !== W.activeToneSectionId && (We(), W.selectToneSection(e));
        }),
        (t[241] = We),
        (t[242] = W),
        (t[243] = S))
      : (S = t[243]),
      (Qe = se({
        actionsPresentation: P ? `viewer` : `inline`,
        viewerDownloadControl: n,
        ...(J ? { copyInteractionDisabled: !0 } : {}),
        viewerVersionHistoryMenuItem: i,
        actionsAfterCopy: l,
        createEditor: De,
        editorOverlays: Oe,
        editorRootRef: ke,
        editorInteractionDisabled: Ie,
        onBeforeExternalContentUpdate: We,
        emailRowsCapabilities: K.emailRowsCapabilities,
        hideFormatToolbar: Pe || Ne || (Ie && !Je),
        hideSlashMenu: Ne,
        headerLeadingContent: Ze,
        historyInteractionDisabled: Fe || ue,
        isEditable: q,
        isEditSelectionLoading: Je,
        isHeaderComposerOpen: Pe,
        isMagicEditSubmitting: Re.isLoading,
        isWriteLikeMeSubmitting: Le,
        metadataInteractionDisabled: Fe,
        onCancelEditSelection: u,
        onAskForChanges: _ == null ? void 0 : Xe,
        onEditSelection: ze,
        onEditSelectionOpenChange: d,
        onCopy: h,
        onEditorEscape: P && !p && !je ? Kt : void 0,
        onCopyContentPrepared: v,
        onEditorKeyDownCapture: Be,
        onEditorPointerDownCapture: Ve,
        onWriteLikeMeAction: He,
        onSlashMenuExecute: x,
        onToneSectionSelect: S,
        renderFrame: w == null ? void 0 : (t) => w({ ...t, viewerTitleControl: e }, je || ae, Ee),
        writingBlockMetadata: o?.writingBlockMetadata,
      })),
      (t[105] = Ee),
      (t[106] = r),
      (t[107] = I),
      (t[108] = De),
      (t[109] = Oe),
      (t[110] = ke),
      (t[111] = K.actions),
      (t[112] = K.emailRowsCapabilities),
      (t[113] = o?.writingBlockMetadata),
      (t[114] = Xe),
      (t[115] = ye),
      (t[116] = je),
      (t[117] = Ze),
      (t[118] = H),
      (t[119] = ae),
      (t[120] = Je),
      (t[121] = q),
      (t[122] = Ie),
      (t[123] = P),
      (t[124] = Ne),
      (t[125] = Pe),
      (t[126] = J),
      (t[127] = Fe),
      (t[128] = G),
      (t[129] = ue),
      (t[130] = B),
      (t[131] = p),
      (t[132] = Le),
      (t[133] = U),
      (t[134] = f),
      (t[135] = Re),
      (t[136] = m),
      (t[137] = _),
      (t[138] = g),
      (t[139] = ze),
      (t[140] = Be),
      (t[141] = Ve),
      (t[142] = b),
      (t[143] = He),
      (t[144] = Ue),
      (t[145] = w),
      (t[146] = se),
      (t[147] = We),
      (t[148] = Ke),
      (t[149] = z),
      (t[150] = fe),
      (t[151] = s),
      (t[152] = W),
      (t[153] = E),
      (t[154] = k),
      (t[155] = j),
      (t[156] = M),
      (t[157] = N),
      (t[158] = Qe));
  } else Qe = t[158];
  let et = Qe,
    tt;
  t[244] !== o?.writingBlockMetadata ||
  t[245] !== ye ||
  t[246] !== q ||
  t[247] !== P ||
  t[248] !== J ||
  t[249] !== m ||
  t[250] !== C ||
  t[251] !== z ||
  t[252] !== s ||
  t[253] !== O ||
  t[254] !== j ||
  t[255] !== M ||
  t[256] !== N
    ? ((tt =
        !P && !ye && C != null && N === 0
          ? (0, $.jsx)($i, {
              ineligibilityReason: O,
              isDisabled: !q || J,
              metadata: o?.writingBlockMetadata,
              onFollowupClick: (e, t) => {
                s != null &&
                  m != null &&
                  At(z, hn, {
                    conversationId: s,
                    followupCount: x(t),
                    followupPosition: x(e),
                    messageId: m,
                    variant: j,
                    writingBlockId: M,
                  });
              },
              onSelect: C,
            })
          : null),
      (t[244] = o?.writingBlockMetadata),
      (t[245] = ye),
      (t[246] = q),
      (t[247] = P),
      (t[248] = J),
      (t[249] = m),
      (t[250] = C),
      (t[251] = z),
      (t[252] = s),
      (t[253] = O),
      (t[254] = j),
      (t[255] = M),
      (t[256] = N),
      (t[257] = tt))
    : (tt = t[257]);
  let nt;
  t[258] !== P || t[259] !== m || t[260] !== s || t[261] !== R || t[262] !== M
    ? ((nt =
        !P && s != null && m != null && M != null
          ? (0, $.jsx)(Wi, {
              messageId: m,
              serverConversationId: s,
              userEditedWritingBlock: R,
              writingBlockId: M,
            })
          : null),
      (t[258] = P),
      (t[259] = m),
      (t[260] = s),
      (t[261] = R),
      (t[262] = M),
      (t[263] = nt))
    : (nt = t[263]);
  let rt;
  return (
    t[264] !== tt || t[265] !== nt || t[266] !== et
      ? ((rt = (0, $.jsxs)($.Fragment, { children: [et, tt, nt] })),
        (t[264] = tt),
        (t[265] = nt),
        (t[266] = et),
        (t[267] = rt))
      : (rt = t[267]),
    rt
  );
}
function sa() {}
function ca() {}
function la() {
  return !1;
}
function ua(e) {
  switch (e) {
    case `missing_message_id`:
      return rn.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_MISSING_MESSAGE_ID;
    case `not_primary_writing_block`:
      return rn.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_NOT_PRIMARY_WRITING_BLOCK;
    case `not_last_node_in_message`:
      return rn.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_NOT_LAST_NODE_IN_MESSAGE;
    case `invalid_source_message`:
      return rn.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_INVALID_SOURCE_MESSAGE;
    case `superseded_by_later_turn`:
      return rn.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_SUPERSEDED_BY_LATER_TURN;
    case `conversation_unavailable`:
    case `message_not_found`:
    case null:
    case void 0:
      return rn.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_UNKNOWN;
  }
}
var da, fa, $;
function pa() {
  return (pa = e(() => {
    ((da = ze()),
      yn(),
      Pn(),
      i(),
      mn(),
      at(),
      Un(),
      N(),
      (fa = Je()),
      Ee(),
      $t(),
      Gn(),
      Pt(),
      Le(),
      A(),
      bt(),
      Mn(),
      Rt(),
      Ve(),
      Zt(),
      K(),
      u(),
      zn(),
      Wn(),
      vr(),
      Dr(),
      Rr(),
      qr(),
      Zr(),
      ni(),
      Ui(),
      Qi(),
      aa(),
      ($ = He()));
  }))();
}
export { pa as n, oa as t };
//# sourceMappingURL=writing-block-app-capabilities-5b5293feb60d.js.map
