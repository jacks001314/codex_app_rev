const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./template-picker-ef0cc3c41f1b.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $B as n,
  $M as r,
  $St as i,
  $Z as a,
  $st as o,
  Bkt as s,
  Bst as c,
  Cu as l,
  DB as u,
  Dg as d,
  FBt as f,
  FNt as p,
  FTt as m,
  Gq as h,
  HB as g,
  HFt as _,
  Hd as v,
  Hkt as y,
  ITt as b,
  JL as x,
  KOt as S,
  LNt as C,
  MNt as w,
  Mst as T,
  NNt as E,
  NSt as D,
  OB as O,
  OFt as k,
  Og as A,
  PBt as j,
  Q4 as M,
  QM as N,
  Qit as P,
  Qst as F,
  SX as I,
  Su as L,
  TE as R,
  TY as z,
  USt as B,
  Ukt as V,
  Uz as H,
  VRt as U,
  Vd as ee,
  Vrt as te,
  Wkt as ne,
  Wz as re,
  XOt as ie,
  XS as ae,
  XV as W,
  Y3 as oe,
  YL as G,
  Z3 as se,
  Z4 as ce,
  ZSt as K,
  ah as le,
  b2 as ue,
  cA as de,
  ck as fe,
  cwt as pe,
  dO as me,
  e6 as he,
  eQ as ge,
  eR as _e,
  gB as ve,
  hA as ye,
  hB as be,
  hRt as xe,
  iCt as Se,
  iwt as Ce,
  jst as we,
  kFt as Te,
  kH as Ee,
  kRt as De,
  l3 as Oe,
  lA as ke,
  lO as Ae,
  mA as je,
  nB as Me,
  nCt as Ne,
  nN as Pe,
  nQ as Fe,
  oh as Ie,
  okt as q,
  qrt as Le,
  rB as Re,
  rk as J,
  tQ as ze,
  tR as Be,
  tk as Ve,
  tkt as Y,
  u3 as He,
  vT as Ue,
  wu as We,
  xX as Ge,
  xu as Ke,
  y2 as qe,
  yT as Je,
  zE as Ye,
  zst as Xe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $0n as Ze,
  $5 as Qe,
  $Ln as $e,
  AI as et,
  ALr as tt,
  BRr as nt,
  CRn as rt,
  CWn as it,
  Cjr as at,
  DKn as ot,
  Djr as st,
  EAn as ct,
  Enn as lt,
  Hcn as ut,
  I5 as dt,
  I8 as ft,
  IWn as pt,
  Ipr as mt,
  Iwn as ht,
  L5 as gt,
  Lpr as _t,
  Lv as vt,
  MWn as yt,
  NAn as bt,
  NNn as xt,
  NWn as St,
  Own as Ct,
  PNn as wt,
  PWn as Tt,
  Pv as Et,
  Q5 as Dt,
  QLn as Ot,
  SLn as kt,
  SSt as At,
  SWn as jt,
  Tfr as Mt,
  Tnn as Nt,
  Ucn as Pt,
  W0n as Ft,
  Wmr as It,
  X5 as Lt,
  Xmr as Rt,
  Y0n as zt,
  Ydr as Bt,
  Z5 as Vt,
  a7 as Ht,
  ag as Ut,
  b7 as Wt,
  bRn as Gt,
  c7 as Kt,
  d7 as qt,
  e2n as Jt,
  e7 as Yt,
  eh as Xt,
  f7 as Zt,
  g7 as Qt,
  i2n as $t,
  i7 as en,
  iRr as tn,
  jWn as nn,
  kI as rn,
  kKn as an,
  kLr as on,
  kfr as sn,
  l7 as cn,
  lBr as ln,
  lE as un,
  m7 as dn,
  mYn as fn,
  n7 as pn,
  o7 as mn,
  p7 as hn,
  q0n as gn,
  r2n as _n,
  r7 as vn,
  s7 as yn,
  sg as bn,
  t7 as xn,
  th as Sn,
  tyr as Cn,
  uBr as wn,
  uE as Tn,
  vLn as En,
  wAn as Dn,
  wLr as On,
  wSt as kn,
  x7 as An,
  xMr as jn,
  xWn as Mn,
  xjr as Nn,
  yMr as Pn,
  zRr as Fn,
} from "./app-initial-ad16eaadf81f.js";
import { Fp as In, Pp as Ln } from "./app-primary-3e00728c2a4c.js";
import { i as Rn, r as zn } from "./writing-block-editor-dbbb9cb704f0.js";
import { a as Bn, n as Vn, o as Hn, t as Un } from "./chatgpt-writing-block-ai-tools-548b856a3cd1.js";
import { r as Wn, t as Gn } from "./menu-1e62df6de238.js";
function Kn(e) {
  let t = (0, qn.c)(17),
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
            trigger: (0, Jn.jsxs)(`button`, {
              "aria-label": d,
              className: `inline-flex min-w-0 items-baseline gap-1 bg-transparent px-0 py-0 text-start leading-8 disabled:cursor-default`,
              disabled: a,
              type: `button`,
              children: [
                (0, Jn.jsx)(`span`, {
                  className: `truncate text-base leading-8 [color:var(--oai-wb-text-primary)]`,
                  children: u.label,
                }),
                r,
              ],
            }),
          })
        : (0, Jn.jsx)(`div`, {
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
    : ((g = (0, Jn.jsx)(`div`, { className: `font-medium`, children: f })), (t[10] = f), (t[11] = g));
  let _;
  t[12] === h
    ? (_ = t[13])
    : ((_ = (0, Jn.jsx)(`div`, { className: `min-w-0 flex-1`, children: h })), (t[12] = h), (t[13] = _));
  let v;
  return (
    t[14] !== g || t[15] !== _
      ? ((v = (0, Jn.jsxs)(`div`, { className: `flex items-center gap-2`, children: [g, _] })),
        (t[14] = g),
        (t[15] = _),
        (t[16] = v))
      : (v = t[16]),
    v
  );
}
var qn, Jn;
function Yn() {
  return (Yn = e(() => {
    ((qn = j()), (Jn = C()));
  }))();
}
function Xn(e) {
  "use no forget";
  let t = (0, $n.useRef)(e);
  t.current = e;
  let [n, r] = (0, $n.useState)({ kind: `idle` }),
    i = (0, $n.useRef)(n);
  (0, $n.useEffect)(() => {
    i.current = n;
  }, [n]);
  let a = (0, $n.useCallback)((e, n = {}) => {
      t.current.onEvent?.({ name: e, metadata: n });
    }, []),
    o = (0, $n.useCallback)((e) => {
      t.current.onFailure?.(e);
    }, []),
    s = (0, $n.useCallback)((e, n) => {
      t.current.onSendIdChange?.(e, n);
    }, []);
  (0, $n.useEffect)(() => {
    e.isAvailable &&
      !e.emailVersionSent &&
      e.initialSendId != null &&
      r((t) =>
        t.kind === `idle`
          ? { kind: `polling_final`, sendId: e.initialSendId, pollSource: `initial_send_id` }
          : t,
      );
  }, [e.emailVersionSent, e.initialSendId, e.isAvailable]);
  let c = (0, $n.useCallback)((e) => {
      let n = t.current,
        a = n.selectedSenderAccount;
      !n.isAvailable ||
        a == null ||
        n.emailVersionSent ||
        mn(i.current) ||
        r((t) =>
          mn(t)
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
    l = (0, $n.useCallback)(
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
  (0, $n.useEffect)(() => {
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
        let l = cn({
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
  (0, $n.useEffect)(() => {
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
  (0, $n.useEffect)(() => {
    if (f != null && p != null)
      return Zn(p, t.current.now ?? Date.now, () => {
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
    (0, $n.useEffect)(() => {
      if (m == null) return;
      let e = t.current.pollingTiming ?? er,
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
            await Qn(e.pollIntervalMs);
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
function Zn(e, t, n) {
  let r = setTimeout(n, Math.max(e - t(), 0));
  return () => clearTimeout(r);
}
function Qn(e) {
  return new Promise((t) => setTimeout(t, e));
}
var $n, er;
function tr() {
  return (tr = e(() => {
    (($n = f()), Ht(), (er = { pollIntervalMs: 1500, pollMaxAttempts: 5 }));
  }))();
}
function nr(e) {
  e.preventDefault();
}
var rr, ir, ar, or;
function sr() {
  return (sr = e(() => {
    ((rr = j()),
      E(),
      (ir = f()),
      (ar = C()),
      (or = (0, ir.forwardRef)(function (e, t) {
        let n = (0, rr.c)(31),
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
          m = (0, ir.useRef)(null),
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
          (0, ir.useEffect)(h, g));
        let _ = p ? !0 : r,
          v = p
            ? `ms-1 flex size-9 cursor-default items-center justify-center rounded-full`
            : `ms-1 flex h-9 items-center rounded-[24px] pe-3 text-sm font-medium hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40`,
          y;
        n[12] !== i || n[13] !== v ? ((y = w(v, i)), (n[12] = i), (n[13] = v), (n[14] = y)) : (y = n[14]);
        let b = p ? nr : s,
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
              : (0, ar.jsxs)(ar.Fragment, {
                  children: [
                    (0, ar.jsx)(`span`, {
                      className: `flex size-8 shrink-0 items-center justify-center ps-1`,
                      children: a,
                    }),
                    (0, ar.jsx)(`span`, { children: o }),
                  ],
                })),
            (n[17] = a),
            (n[18] = p),
            (n[19] = o),
            (n[20] = C))
          : (C = n[20]);
        let T;
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
            ? ((T = (0, ar.jsx)(`button`, {
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
              (n[30] = T))
            : (T = n[30]),
          T
        );
      })));
  }))();
}
var cr, lr, ur, dr;
function fr() {
  return (fr = e(() => {
    ((cr = `_reveal_1xm50_1`),
      (lr = `_title_1xm50_10`),
      (ur = `_chevron_1xm50_28`),
      (dr = { reveal: cr, title: lr, chevron: ur }));
  }))();
}
function pr(e) {
  let n = (0, gr.c)(38),
    {
      children: r,
      disabled: i,
      downloadMenu: a,
      libraryFileId: o,
      onLibraryClick: s,
      onOpenVersionHistory: c,
      onSave: l,
      isSaving: f,
      saveConfirmation: p,
      saveToPage: m,
    } = e,
    g = kt(),
    _ = g ? `/space/files` : `/library`,
    v = q(),
    y = B(),
    b;
  if (m) {
    let e;
    (n[0] !== v || n[1] !== f
      ? ((e = f
          ? v.formatMessage({
              id: `codex.writingBlock.page.saving`,
              defaultMessage: `Creating Page`,
              description: `Accessible label on the writing block save control while its editable Page is being created. Keep this progress label short.`,
            })
          : v.formatMessage({
              id: `codex.writingBlock.page.save`,
              defaultMessage: `Save`,
              description: `Label, accessible label, and tooltip for a writing block's save control. Saves the document as a Page in the existing writing block so it remains editable inline. Keep this action short.`,
            })),
        (n[0] = v),
        (n[1] = f),
        (n[2] = e))
      : (e = n[2]),
      (b = e));
  } else if (f && g) {
    let e;
    (n[3] === v
      ? (e = n[4])
      : ((e = v.formatMessage({
          id: `codex.writingBlock.inlineLibrary.addingToLibrary.space`,
          defaultMessage: `Adding to Space`,
          description: `Accessible label and hover tooltip for the writing block header's Space save control while the document is being saved. Describes an operation in progress, not an action to start. Keep this status label short. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (n[3] = v),
        (n[4] = e)),
      (b = e));
  } else if (f) {
    let e;
    (n[5] === v
      ? (e = n[6])
      : ((e = v.formatMessage({
          id: `codex.writingBlock.inlineLibrary.addingToLibrary`,
          defaultMessage: `Adding to Library`,
          description: `Accessible label and hover tooltip for the writing block header's Library save control while the document is being saved. Describes an operation in progress, not an action to start. Keep this status label short.`,
        })),
        (n[5] = v),
        (n[6] = e)),
      (b = e));
  } else if (g) {
    let e;
    (n[7] === v
      ? (e = n[8])
      : ((e = v.formatMessage({
          id: `codex.writingBlock.inlineLibrary.save.space`,
          defaultMessage: `Add to Space`,
          description: `Tooltip and accessible label for the inline document title control. Saves the document to the user's Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (n[7] = v),
        (n[8] = e)),
      (b = e));
  } else {
    let e;
    (n[9] === v
      ? (e = n[10])
      : ((e = v.formatMessage({
          id: `codex.writingBlock.inlineLibrary.save`,
          defaultMessage: `Add to Library`,
          description: `Tooltip and accessible label for the inline document title control. Saves the document to the user's Library.`,
        })),
        (n[9] = v),
        (n[10] = e)),
      (b = e));
  }
  let x;
  n[11] !== r ||
  n[12] !== i ||
  n[13] !== a ||
  n[14] !== g ||
  n[15] !== _ ||
  n[16] !== o ||
  n[17] !== y ||
  n[18] !== s ||
  n[19] !== c ||
  n[20] !== p
    ? ((x = o
        ? (0, X.jsxs)(Ve, {
            align: `start`,
            contentWidth: `menuBounded`,
            triggerButton: (0, X.jsxs)(oe, {
              ref: (e) => {
                p === `keyboard` &&
                  e != null &&
                  e.ownerDocument.activeElement === e.ownerDocument.body &&
                  e.focus({ preventScroll: !0 });
              },
              className: w(dr.title, `min-w-0`),
              color: `ghostOutline`,
              radius: `full`,
              size: `dialogGhost`,
              children: [
                (0, X.jsx)(u, { asset: I }),
                (0, X.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-0.5`,
                  children: [
                    (0, X.jsx)(`span`, { className: `min-w-0 truncate`, children: r }),
                    (0, X.jsx)(u, { className: dr.chevron, asset: d }),
                  ],
                }),
              ],
            }),
            children: [
              (0, X.jsx)(mr, { libraryFileId: o, onLibraryClick: s, children: r }),
              (0, X.jsx)(J.Separator, {}),
              s == null
                ? null
                : (0, X.jsxs)(J.Item, {
                    onSelect: () => {
                      (s(), y(_));
                    },
                    children: [
                      (0, X.jsx)(J.ItemIcon, {
                        size: `md`,
                        children: g ? (0, X.jsx)(h, {}) : (0, X.jsx)(W, {}),
                      }),
                      g
                        ? (0, X.jsx)(Y, {
                            id: `codex.writingBlock.inlineLibrary.openLibrary.space`,
                            defaultMessage: `Open in Space`,
                            description: `Menu action that opens the Space containing the saved note. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                          })
                        : (0, X.jsx)(Y, {
                            id: `codex.writingBlock.inlineLibrary.openLibrary`,
                            defaultMessage: `Open in Library`,
                            description: `Menu action that opens the Library containing the saved note.`,
                          }),
                    ],
                  }),
              a,
              c == null
                ? null
                : (0, X.jsx)(J.Item, {
                    disabled: i,
                    onSelect: c,
                    leftIconAsset: le,
                    children: (0, X.jsx)(Y, {
                      id: `codex.writingBlock.inlineLibrary.versionHistory`,
                      defaultMessage: `Version history`,
                      description: `Menu action that shows the saved note's previous versions.`,
                    }),
                  }),
            ],
          })
        : null),
      (n[11] = r),
      (n[12] = i),
      (n[13] = a),
      (n[14] = g),
      (n[15] = _),
      (n[16] = o),
      (n[17] = y),
      (n[18] = s),
      (n[19] = c),
      (n[20] = p),
      (n[21] = x))
    : (x = n[21]);
  let S;
  n[22] !== r || n[23] !== i || n[24] !== f || n[25] !== g || n[26] !== o || n[27] !== l || n[28] !== b
    ? ((S =
        !o && l != null
          ? (0, X.jsx)(Me, {
              tooltipContent: (0, X.jsxs)(`span`, {
                className: `flex items-center gap-1`,
                children: [g ? (0, X.jsx)(h, {}) : (0, X.jsx)(W, {}), b],
              }),
              children: (0, X.jsxs)(oe, {
                className: w(dr.title, `min-w-0`),
                "aria-label": b,
                "aria-busy": f || void 0,
                color: `ghost`,
                disabled: i || f,
                radius: `full`,
                size: `imageToolbar`,
                onClick: (e) => l(e.detail === 0),
                children: [
                  (0, X.jsx)(`span`, {
                    className: dr.reveal,
                    children: (0, X.jsx)(`span`, {
                      className: `min-w-0 overflow-hidden`,
                      children: (0, X.jsx)(`span`, {
                        className: `flex w-5 items-center justify-center`,
                        children: f
                          ? (0, X.jsx)(t, { as: `span`, className: `size-5` })
                          : (0, X.jsx)(u, { asset: ge }),
                      }),
                    }),
                  }),
                  (0, X.jsx)(`span`, { className: `min-w-0 truncate`, children: r }),
                ],
              }),
            })
          : null),
      (n[22] = r),
      (n[23] = i),
      (n[24] = f),
      (n[25] = g),
      (n[26] = o),
      (n[27] = l),
      (n[28] = b),
      (n[29] = S))
    : (S = n[29]);
  let C;
  n[30] !== r || n[31] !== o || n[32] !== l
    ? ((C =
        !o && l == null
          ? (0, X.jsx)(`span`, { className: `min-w-0 truncate px-3 py-2 text-tertiary`, children: r })
          : null),
      (n[30] = r),
      (n[31] = o),
      (n[32] = l),
      (n[33] = C))
    : (C = n[33]);
  let T;
  return (
    n[34] !== x || n[35] !== S || n[36] !== C
      ? ((T = (0, X.jsxs)(`div`, {
          className: `ms-2 flex min-w-0 grow items-center text-sm font-normal select-none`,
          children: [x, S, C],
        })),
        (n[34] = x),
        (n[35] = S),
        (n[36] = C),
        (n[37] = T))
      : (T = n[37]),
    T
  );
}
function mr(e) {
  let t = (0, gr.c)(29),
    { children: n, libraryFileId: r, onLibraryClick: i } = e,
    a = Se(Fn),
    o = Se(nt),
    s = kt(),
    c = s ? `/space/files` : `/library`,
    l = B(),
    d;
  t[0] !== a || t[1] !== r || t[2] !== o
    ? ((d = [`library-api`, a, o, `note-location`, r]), (t[0] = a), (t[1] = r), (t[2] = o), (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] !== a || t[5] !== r
    ? ((f =
        a == null
          ? pe
          : async (e) => {
              let { signal: t } = e,
                n = {
                  additionalHeaders: { "ChatGPT-Account-ID": a },
                  expectedErrorStatuses: [403, 404],
                  signal: t,
                },
                i = await tn.safeGet(`/files/library/files/{library_file_id}`, {
                  ...n,
                  parameters: { path: { library_file_id: r } },
                });
              return i.directory_id == null
                ? []
                : (
                    await tn.safeGet(`/files/library/directories/path`, {
                      ...n,
                      parameters: { query: { directory_id: i.directory_id } },
                    })
                  ).items.filter(hr);
            }),
      (t[4] = a),
      (t[5] = r),
      (t[6] = f))
    : (f = t[6]);
  let p = a != null && i != null,
    m;
  t[7] !== d || t[8] !== f || t[9] !== p
    ? ((m = { queryKey: d, queryFn: f, enabled: p, staleTime: 0, retry: !1 }),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m))
    : (m = t[10]);
  let { data: h } = T(m),
    g;
  t[11] === s
    ? (g = t[12])
    : ((g = {
        id: null,
        name: s
          ? (0, X.jsx)(Y, {
              id: `codex.writingBlock.inlineLibrary.location.space`,
              defaultMessage: `Space`,
              description: `Location shown below the saved note title in its actions menu. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : (0, X.jsx)(Y, {
              id: `codex.writingBlock.inlineLibrary.location`,
              defaultMessage: `Library`,
              description: `Location shown below the saved note title in its actions menu.`,
            }),
      }),
      (t[11] = s),
      (t[12] = g));
  let _;
  t[13] === h ? (_ = t[14]) : ((_ = h ?? []), (t[13] = h), (t[14] = _));
  let v;
  t[15] !== g || t[16] !== _ ? ((v = [g, ..._]), (t[15] = g), (t[16] = _), (t[17] = v)) : (v = t[17]);
  let y = v,
    b;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(`span`, {
        className: `flex h-lh items-center`,
        children: (0, X.jsx)(u, { asset: ye }),
      })),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] === n
    ? (x = t[20])
    : ((x = (0, X.jsx)(`span`, { className: `truncate text-default`, children: n })),
      (t[19] = n),
      (t[20] = x));
  let S;
  t[21] !== y || t[22] !== c || t[23] !== l || t[24] !== i
    ? ((S = (0, X.jsx)(`div`, {
        className: `flex flex-wrap items-center gap-1 text-xs leading-dense text-tertiary`,
        children: y.map((e, t) =>
          (0, X.jsxs)(
            `span`,
            {
              className: `flex max-w-full min-w-0 items-start gap-1`,
              children: [
                t > 0 ? (0, X.jsx)(`span`, { "aria-hidden": `true`, children: `/` }) : null,
                (0, X.jsx)(J.Item, {
                  className: `outline-hidden`,
                  variant: `unstyled`,
                  allowWrap: !0,
                  disabled: i == null,
                  onSelect: () => {
                    (i?.(), l(e.id == null ? c : `${c}/d/${encodeURIComponent(e.id)}`));
                  },
                  children: (0, X.jsx)(`span`, {
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
      (t[21] = y),
      (t[22] = c),
      (t[23] = l),
      (t[24] = i),
      (t[25] = S))
    : (S = t[25]);
  let C;
  return (
    t[26] !== S || t[27] !== x
      ? ((C = (0, X.jsxs)(`div`, {
          className: `flex min-w-0 gap-2 px-row-x py-row-y`,
          children: [b, (0, X.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col`, children: [x, S] })],
        })),
        (t[26] = S),
        (t[27] = x),
        (t[28] = C))
      : (C = t[28]),
    C
  );
}
function hr(e) {
  return !e.is_root;
}
var gr, X;
function _r() {
  return (_r = e(() => {
    ((gr = j()),
      A(),
      Ie(),
      a(),
      je(),
      Ge(),
      Ce(),
      we(),
      E(),
      K(),
      ie(),
      D(),
      On(),
      Cn(),
      se(),
      fe(),
      O(),
      z(),
      he(),
      Re(),
      En(),
      fr(),
      (X = C()));
  }))();
}
var vr, yr;
function br() {
  return (br = e(() => {
    (f(),
      (vr = C()),
      (yr = (e) =>
        (0, vr.jsxs)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, vr.jsx)(`path`, {
              d: `M13.0039 2.59375C13.2705 2.59375 13.5415 2.66842 13.8164 2.81836C14.0914 2.96836 14.3995 3.21061 14.7412 3.54395L19.6914 8.44336C20.2331 8.98503 20.5039 9.53542 20.5039 10.0938V17.5439C20.5039 18.2689 20.3251 18.94 19.9668 19.5566C19.6085 20.1649 19.1205 20.6476 18.5039 21.0059C17.8956 21.3642 17.2289 21.5439 16.5039 21.5439H7.50391C6.77891 21.5439 6.10788 21.3642 5.49121 21.0059C4.88307 20.6476 4.39928 20.1648 4.04102 19.5566C3.68271 18.94 3.50394 18.2689 3.50391 17.5439V6.59375C3.50391 5.86882 3.68275 5.20204 4.04102 4.59375C4.39935 3.97708 4.88288 3.48919 5.49121 3.13086C6.10787 2.77254 6.77892 2.59375 7.50391 2.59375H13.0039Z`,
              fill: `url(#paint0_linear_4603_166847)`,
            }),
            (0, vr.jsx)(`path`, {
              d: `M14.6758 8.59375H9.33203C8.32239 8.59375 7.50391 9.41223 7.50391 10.4219V15.7656C7.50391 16.7753 8.32239 17.5938 9.33203 17.5938H14.6758C15.6854 17.5938 16.5039 16.7753 16.5039 15.7656V10.4219C16.5039 9.41223 15.6854 8.59375 14.6758 8.59375Z`,
              fill: `url(#paint1_radial_4603_166847)`,
            }),
            (0, vr.jsx)(`path`, {
              d: `M14.6758 8.59375H9.33203C8.32239 8.59375 7.50391 9.41223 7.50391 10.4219V15.7656C7.50391 16.7753 8.32239 17.5938 9.33203 17.5938H14.6758C15.6854 17.5938 16.5039 16.7753 16.5039 15.7656V10.4219C16.5039 9.41223 15.6854 8.59375 14.6758 8.59375Z`,
              fill: `url(#paint2_radial_4603_166847)`,
              fillOpacity: 0.3,
            }),
            (0, vr.jsx)(`path`, {
              d: `M11.566 13.9895V15.6643H10.4082V10.5215H12.1969C12.8374 10.5215 13.3249 10.6613 13.6595 10.9411C13.9965 11.2208 14.165 11.6356 14.165 12.1855C14.165 12.7522 13.9762 13.1945 13.5986 13.5125C13.2234 13.8305 12.7191 13.9895 12.0858 13.9895H11.566ZM11.566 11.4109V13.1H12.05C12.3368 13.1 12.5578 13.0248 12.7131 12.8741C12.8685 12.7235 12.9462 12.5071 12.9462 12.225C12.9462 11.9644 12.8697 11.7635 12.7167 11.6225C12.5662 11.4814 12.3499 11.4109 12.0679 11.4109H11.566Z`,
              fill: `white`,
            }),
            (0, vr.jsx)(`path`, {
              d: `M13.0039 2.59375C13.2706 2.59375 13.5414 2.66875 13.8164 2.81875C14.0914 2.96875 14.3997 3.21042 14.7414 3.54375L19.6914 8.44375C20.2331 8.98542 20.5039 9.53542 20.5039 10.0938H15.7164C14.8831 10.0938 14.2206 9.85208 13.7289 9.36875C13.2456 8.87708 13.0039 8.21458 13.0039 7.38125V2.59375Z`,
              fill: `url(#paint3_linear_4603_166847)`,
            }),
            (0, vr.jsxs)(`defs`, {
              children: [
                (0, vr.jsxs)(`linearGradient`, {
                  id: `paint0_linear_4603_166847`,
                  x1: 4.50391,
                  y1: 20.5938,
                  x2: 16.0039,
                  y2: 7.09375,
                  gradientUnits: `userSpaceOnUse`,
                  children: [
                    (0, vr.jsx)(`stop`, { offset: 0.0240385, stopColor: `#F35AAA` }),
                    (0, vr.jsx)(`stop`, { offset: 0.528846, stopColor: `#E1473D` }),
                    (0, vr.jsx)(`stop`, { offset: 1, stopColor: `#B0212C` }),
                  ],
                }),
                (0, vr.jsxs)(`radialGradient`, {
                  id: `paint1_radial_4603_166847`,
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: `userSpaceOnUse`,
                  gradientTransform: `translate(7.50281 8.59375) rotate(45) scale(12.7279)`,
                  children: [
                    (0, vr.jsx)(`stop`, { stopColor: `#F8193E` }),
                    (0, vr.jsx)(`stop`, { offset: 0.939062, stopColor: `#920616` }),
                  ],
                }),
                (0, vr.jsxs)(`radialGradient`, {
                  id: `paint2_radial_4603_166847`,
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientUnits: `userSpaceOnUse`,
                  gradientTransform: `translate(12.0028 13.9937) rotate(90) scale(6.3 7.17187)`,
                  children: [
                    (0, vr.jsx)(`stop`, { offset: 0.575893, stopColor: `#FFB055`, stopOpacity: 0 }),
                    (0, vr.jsx)(`stop`, { offset: 0.973806, stopColor: `#FFF2BE` }),
                  ],
                }),
                (0, vr.jsxs)(`linearGradient`, {
                  id: `paint3_linear_4603_166847`,
                  x1: 16.5039,
                  y1: 6.09375,
                  x2: 13.5039,
                  y2: 9.59375,
                  gradientUnits: `userSpaceOnUse`,
                  children: [
                    (0, vr.jsx)(`stop`, { stopColor: `#FF8F29` }),
                    (0, vr.jsx)(`stop`, { offset: 0.850962, stopColor: `#FE80AD` }),
                  ],
                }),
              ],
            }),
          ],
        })));
  }))();
}
function xr(e) {
  let n = (0, Cr.c)(73),
    {
      content: a,
      conversationId: o,
      disabled: s,
      onSubmittingChange: c,
      selectedTemplate: l,
      writingBlockId: u,
    } = e,
    d = i(F),
    f = q(),
    p = Se(ct),
    m = Se(bt),
    h = Se(Er),
    g;
  n[0] === m ? (g = n[1]) : ((g = { hostId: m }), (n[0] = m), (n[1] = g));
  let _ = _t(g),
    v;
  n[2] === p ? (v = n[3]) : ((v = p == null ? void 0 : [p]), (n[2] = p), (n[3] = v));
  let y;
  n[4] !== m || n[5] !== _ || n[6] !== v
    ? ((y = { enabled: _, hostId: m, resolveActiveRoots: !0, roots: v }),
      (n[4] = m),
      (n[5] = _),
      (n[6] = v),
      (n[7] = y))
    : (y = n[7]);
  let { data: b, isLoading: x } = sn(y),
    S;
  n[8] !== b || n[9] !== _
    ? ((S = _ ? b?.find(Sr) : void 0), (n[8] = b), (n[9] = _), (n[10] = S))
    : (S = n[10]);
  let C = S,
    w;
  n[11] === p ? (w = n[12]) : ((w = p ?? []), (n[11] = p), (n[12] = w));
  let T = l != null,
    E;
  n[13] === T ? (E = n[14]) : ((E = { enabled: T }), (n[13] = T), (n[14] = E));
  let { skills: D } = wt(w, m, E),
    { data: O } = Sn(D, m),
    k;
  n[15] !== O || n[16] !== l || n[17] !== D
    ? ((k =
        l == null || O == null
          ? null
          : (Et(D, `presentation`, O).find((e) => e.name === l.name && e.path === l.path) ?? null)),
      (n[15] = O),
      (n[16] = l),
      (n[17] = D),
      (n[18] = k))
    : (k = n[18]);
  let A = k,
    [j, M] = (0, wr.useState)(!1),
    P;
  n[19] !== A ||
  n[20] !== o ||
  n[21] !== f ||
  n[22] !== c ||
  n[23] !== h ||
  n[24] !== C ||
  n[25] !== d ||
  n[26] !== l ||
  n[27] !== u
    ? ((P = () => {
        if (l != null && A == null) return;
        (M(!0), c(!0));
        let e = A == null ? null : N({ displayLabel: r(A), name: A.name, path: A.path }),
          t;
        t =
          h === `google-slides`
            ? e == null
              ? f.formatMessage({
                  id: `codex.writingBlock.slides.create.googleSlidesPromptWithOutlineAbove`,
                  defaultMessage: `make a Google Slides presentation with the outline above`,
                  description: `User message following a Presentations plugin mention that asks Codex to create a Google Slides presentation from the selected presentation outline above`,
                })
              : f.formatMessage(
                  {
                    id: `codex.writingBlock.slides.create.googleSlidesPromptWithOutlineAboveAndTemplate`,
                    defaultMessage: `make a Google Slides presentation with the outline above using {template}`,
                    description: `User message following a Presentations plugin mention that asks Codex to create a Google Slides presentation from the selected outline above; template is the selected installed presentation template skill mention`,
                  },
                  { template: e },
                )
            : e == null
              ? f.formatMessage({
                  id: `codex.writingBlock.slides.create.promptWithOutlineAbove`,
                  defaultMessage: `make a presentation with the outline above`,
                  description: `User message following a Presentations plugin mention that asks Codex to create a presentation from the selected presentation outline above`,
                })
              : f.formatMessage(
                  {
                    id: `codex.writingBlock.slides.create.promptWithOutlineAboveAndTemplate`,
                    defaultMessage: `make a presentation with the outline above using {template}`,
                    description: `User message following a Presentations plugin mention that asks Codex to create a presentation from the selected outline above; template is the selected installed presentation template skill mention`,
                  },
                  { template: e },
                );
        let n = C == null ? t : At({ defaultPrompt: t, pluginDisplayName: Nt(C), pluginId: C.plugin.id });
        Tn({
          scope: d,
          additionalContext: {
            codex_apps_artifact_outline: {
              kind: `untrusted`,
              value: `Use the presentation outline in writing block "${u}".`,
            },
            codex_apps_artifact_platform: {
              kind: `untrusted`,
              value:
                h === `google-slides`
                  ? `Create the presentation in Google Slides.`
                  : `Create the presentation in Microsoft PowerPoint.`,
            },
          },
          turnTrigger: `slides_outline`,
          model: void 0,
          prompt: n,
          threadId: o,
          thinking: void 0,
        })
          .catch(() => {
            d.get(Le).danger(
              f.formatMessage({
                id: `codex.writingBlock.slides.create.error`,
                defaultMessage: `Couldn’t create slides from the presentation outline`,
                description: `Error toast shown when a presentation outline cannot be sent to the current Codex task`,
              }),
              { errorAnalytics: { toastId: `codex.writingBlock.slides.create.error` } },
            );
          })
          .finally(() => {
            (M(!1), c(!1));
          });
      }),
      (n[19] = A),
      (n[20] = o),
      (n[21] = f),
      (n[22] = c),
      (n[23] = h),
      (n[24] = C),
      (n[25] = d),
      (n[26] = l),
      (n[27] = u),
      (n[28] = P))
    : (P = n[28]);
  let I = P,
    L;
  n[29] !== A || n[30] !== a || n[31] !== s || n[32] !== x || n[33] !== j || n[34] !== l
    ? ((L = s || j || x || a.trim().length === 0 || (l != null && A == null)),
      (n[29] = A),
      (n[30] = a),
      (n[31] = s),
      (n[32] = x),
      (n[33] = j),
      (n[34] = l),
      (n[35] = L))
    : (L = n[35]);
  let R = L,
    z = h === `google-slides` ? _e : yr,
    B;
  n[36] !== z || n[37] !== j
    ? ((B = j
        ? (0, Tr.jsx)(t, { className: `icon-xs` })
        : (0, Tr.jsx)(z, { "aria-hidden": !0, className: `icon-sm` })),
      (n[36] = z),
      (n[37] = j),
      (n[38] = B))
    : (B = n[38]);
  let V;
  n[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Tr.jsx)(Y, {
        id: `codex.writingBlock.slides.create.button`,
        defaultMessage: `Create presentation`,
        description: `Primary button in a completed presentation outline writing block that asks Codex to create the outlined presentation`,
      })),
      (n[39] = V))
    : (V = n[39]);
  let H;
  n[40] !== I || n[41] !== R || n[42] !== B
    ? ((H = (0, Tr.jsx)(or, {
        className: `cursor-interaction rounded-e-none border border-transparent bg-primary-solid text-primary-solid no-drag focus:outline-none enabled:hover:bg-text/80`,
        disabled: R,
        icon: B,
        label: V,
        onClick: I,
      })),
      (n[40] = I),
      (n[41] = R),
      (n[42] = B),
      (n[43] = H))
    : (H = n[43]);
  let U;
  n[44] === f
    ? (U = n[45])
    : ((U = f.formatMessage({
        id: `codex.writingBlock.slides.create.chooseFormat`,
        defaultMessage: `Choose presentation format`,
        description: `Accessible label for the dropdown button that selects whether a completed presentation outline is created in Microsoft PowerPoint or Google Slides`,
      })),
      (n[44] = f),
      (n[45] = U));
  let ee;
  n[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Tr.jsx)(Ee, {})), (n[46] = ee))
    : (ee = n[46]);
  let te;
  n[47] !== R || n[48] !== U
    ? ((te = (0, Tr.jsx)(`button`, {
        "aria-label": U,
        className: `flex h-9 w-8 shrink-0 cursor-interaction items-center justify-center bg-primary-solid text-primary-solid no-drag enabled:hover:bg-text/80 enabled:hover:opacity-90 disabled:cursor-default disabled:opacity-40 data-[state=open]:bg-text/80`,
        disabled: R,
        type: `button`,
        children: ee,
      })),
      (n[47] = R),
      (n[48] = U),
      (n[49] = te))
    : (te = n[49]);
  let ne;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, Tr.jsx)(yr, { "aria-hidden": !0, className: `icon-sm` })), (n[50] = ne))
    : (ne = n[50]);
  let re;
  n[51] === d ? (re = n[52]) : ((re = () => d.set(Er, `powerpoint`)), (n[51] = d), (n[52] = re));
  let ie;
  n[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Tr.jsx)(Y, {
        id: `codex.writingBlock.slides.create.powerPointOption`,
        defaultMessage: `PowerPoint`,
        description: `Presentation format dropdown option for creating a Microsoft PowerPoint presentation from a completed presentation outline`,
      })),
      (n[53] = ie))
    : (ie = n[53]);
  let ae;
  n[54] === re
    ? (ae = n[55])
    : ((ae = (0, Tr.jsx)(J.RadioItem, { icon: ne, onSelect: re, value: `powerpoint`, children: ie })),
      (n[54] = re),
      (n[55] = ae));
  let W;
  n[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Tr.jsx)(_e, { "aria-hidden": !0, className: `icon-sm` })), (n[56] = W))
    : (W = n[56]);
  let oe;
  n[57] === d ? (oe = n[58]) : ((oe = () => d.set(Er, `google-slides`)), (n[57] = d), (n[58] = oe));
  let G;
  n[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Tr.jsx)(Y, {
        id: `codex.writingBlock.slides.create.googleSlidesOption`,
        defaultMessage: `Google Slides`,
        description: `Presentation format dropdown option for creating a Google Slides presentation from a completed presentation outline`,
      })),
      (n[59] = G))
    : (G = n[59]);
  let se;
  n[60] === oe
    ? (se = n[61])
    : ((se = (0, Tr.jsx)(J.RadioItem, { icon: W, onSelect: oe, value: `google-slides`, children: G })),
      (n[60] = oe),
      (n[61] = se));
  let ce;
  n[62] !== h || n[63] !== ae || n[64] !== se
    ? ((ce = (0, Tr.jsxs)(J.RadioGroup, { value: h, children: [ae, se] })),
      (n[62] = h),
      (n[63] = ae),
      (n[64] = se),
      (n[65] = ce))
    : (ce = n[65]);
  let K;
  n[66] !== R || n[67] !== te || n[68] !== ce
    ? ((K = (0, Tr.jsx)(Ve, {
        align: `end`,
        contentWidth: `menuBounded`,
        disabled: R,
        triggerButton: te,
        children: ce,
      })),
      (n[66] = R),
      (n[67] = te),
      (n[68] = ce),
      (n[69] = K))
    : (K = n[69]);
  let le;
  return (
    n[70] !== H || n[71] !== K
      ? ((le = (0, Tr.jsxs)(`div`, {
          className: `inline-flex min-w-0 overflow-hidden rounded-full`,
          children: [H, K],
        })),
        (n[70] = H),
        (n[71] = K),
        (n[72] = le))
      : (le = n[72]),
    le
  );
}
function Sr(e) {
  return e.plugin.enabled && e.plugin.availability !== `DISABLED_BY_ADMIN` && bn(e);
}
var Cr, wr, Tr, Er;
function Dr() {
  return (Dr = e(() => {
    ((Cr = j()),
      sr(),
      K(),
      lt(),
      (wr = f()),
      ie(),
      un(),
      vt(),
      Xt(),
      fe(),
      z(),
      he(),
      te(),
      mt(),
      br(),
      Be(),
      Ut(),
      kn(),
      Mt(),
      o(),
      Dn(),
      Pe(),
      xt(),
      on(),
      (Tr = C()),
      (Er = tt(`writing-block-presentation-format`, `powerpoint`)));
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
    (f(),
      (kr = C()),
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
  let t = (0, Pr.c)(41),
    { disabled: n, isOpen: r, onOpenChange: i, onSlideCountChange: a, slideCount: o } = e,
    c = q(),
    l = (0, Fr.useRef)(null),
    d = (0, Fr.useRef)(null),
    f = Math.max(1, o),
    p = Math.max(20, f + 10),
    [m, h] = (0, Fr.useState)(!1),
    [g, _] = (0, Fr.useState)(f),
    v = !n && (r ?? m),
    b;
  t[0] !== f || t[1] !== r || t[2] !== i
    ? ((b = (e) => {
        (_(f), r ?? h(e), i?.(e));
      }),
      (t[0] = f),
      (t[1] = r),
      (t[2] = i),
      (t[3] = b))
    : (b = t[3]);
  let x = b,
    C;
  t[4] === x
    ? (C = t[5])
    : ((C = (e) => {
        l.current != null && !e.composedPath().includes(l.current) && x(!1);
      }),
      (t[4] = x),
      (t[5] = C));
  let T = (0, Fr.useEffectEvent)(C),
    E;
  t[6] !== T || t[7] !== v
    ? ((E = () => {
        if (!v) return;
        let e = l.current?.ownerDocument;
        if (e != null)
          return (
            e.addEventListener(`pointerdown`, T, !0),
            () => {
              e.removeEventListener(`pointerdown`, T, !0);
            }
          );
      }),
      (t[6] = T),
      (t[7] = v),
      (t[8] = E))
    : (E = t[8]);
  let D;
  (t[9] === v ? (D = t[10]) : ((D = [v]), (t[9] = v), (t[10] = D)), (0, Fr.useEffect)(E, D));
  let O = v ? `w-64 sm:w-72` : `w-fit`,
    k;
  t[11] === O
    ? (k = t[12])
    : ((k = w(
        `relative flex h-9 max-w-full min-w-0 items-start overflow-hidden rounded-full border border-default bg-surface select-none`,
        O,
      )),
      (t[11] = O),
      (t[12] = k));
  let A = v && `pointer-events-none invisible`,
    j;
  t[13] === A
    ? (j = t[14])
    : ((j = w(
        `flex h-full min-w-0 shrink-0 cursor-interaction items-center gap-1.5 rounded-full px-3 text-sm font-medium text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring enabled:hover:bg-primary-ghost-hover disabled:cursor-default disabled:opacity-40`,
        A,
      )),
      (t[13] = A),
      (t[14] = j));
  let M = v || void 0,
    N;
  t[15] === x ? (N = t[16]) : ((N = () => x(!0)), (t[15] = x), (t[16] = N));
  let P = v ? -1 : void 0,
    F;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Lr.jsx)(Ar, { "aria-hidden": !0, className: `icon-sm shrink-0` })), (t[17] = F))
    : (F = t[17]);
  let I;
  t[18] === o
    ? (I = t[19])
    : ((I = (0, Lr.jsx)(`span`, {
        className: `truncate`,
        children: (0, Lr.jsx)(Y, {
          id: `codex.writingBlock.slides.slideCount.button`,
          defaultMessage: `{count, plural, one {# slide} other {# slides}}`,
          description: `Button showing the current number of slides in an editable Codex presentation outline; selecting the button opens the slide-count adjustment slider`,
          values: { count: o },
        }),
      })),
      (t[18] = o),
      (t[19] = I));
  let L;
  t[20] !== n || t[21] !== v || t[22] !== N || t[23] !== P || t[24] !== I || t[25] !== j || t[26] !== M
    ? ((L = (0, Lr.jsxs)(`button`, {
        ref: d,
        className: j,
        "aria-expanded": v,
        "aria-hidden": M,
        disabled: n,
        onClick: N,
        type: `button`,
        tabIndex: P,
        children: [F, I],
      })),
      (t[20] = n),
      (t[21] = v),
      (t[22] = N),
      (t[23] = P),
      (t[24] = I),
      (t[25] = j),
      (t[26] = M),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] !== n ||
  t[29] !== g ||
  t[30] !== c ||
  t[31] !== p ||
  t[32] !== a ||
  t[33] !== v ||
  t[34] !== x ||
  t[35] !== o
    ? ((R = v
        ? (0, Lr.jsxs)(`div`, {
            className: `absolute inset-y-0 start-0 flex w-full min-w-0 items-center gap-2 ps-2 pe-1`,
            onKeyDownCapture: (e) => {
              e.key === `Escape` &&
                (e.preventDefault(), e.stopPropagation(), (0, Ir.flushSync)(() => x(!1)), d.current?.focus());
            },
            children: [
              (0, Lr.jsxs)(s, {
                className: `relative flex h-6 min-w-0 flex-1 touch-none items-center`,
                disabled: n,
                max: p,
                min: 1,
                onValueChange: (e) => {
                  let [t] = e;
                  t != null && _(t);
                },
                step: 1,
                value: [g],
                children: [
                  (0, Lr.jsx)(V, {
                    className: `relative h-4 grow overflow-hidden rounded-full bg-text/5`,
                    children: (0, Lr.jsx)(`span`, {
                      className: `pointer-events-none absolute inset-x-2 inset-y-0 flex items-center justify-between`,
                      children: Array.from({ length: Math.min(p, 20) }, Nr),
                    }),
                  }),
                  (0, Lr.jsx)(y, {
                    "aria-label": c.formatMessage({
                      id: `codex.writingBlock.slides.slideCount.slider`,
                      defaultMessage: `Number of presentation slides`,
                      description: `Accessible name for the keyboard-operable slider that adjusts the number of slides in a Codex presentation outline`,
                    }),
                    "aria-valuetext": c.formatMessage(
                      {
                        id: `codex.writingBlock.slides.slideCount.value`,
                        defaultMessage: `{count, plural, one {# slide} other {# slides}}`,
                        description: `Current presentation slide count announced to screen-reader users while adjusting an outline; count is the positive number of slides`,
                      },
                      { count: g },
                    ),
                    autoFocus: !0,
                    className: `block h-6 w-2 rounded-full border border-default bg-surface shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring`,
                  }),
                ],
              }),
              (0, Lr.jsx)(`output`, {
                "aria-live": `polite`,
                className: `min-w-5 text-center text-sm font-medium tabular-nums`,
                children: (0, Lr.jsx)(S, { value: g }),
              }),
              (0, Lr.jsx)(oe, {
                "aria-label": c.formatMessage({
                  id: `codex.writingBlock.slides.slideCount.confirm`,
                  defaultMessage: `Confirm slide count`,
                  description: `Accessible name for the button that applies a new slide count to an editable Codex presentation outline using Magic Edit`,
                }),
                color: `primary`,
                disabled: n || g === o,
                onClick: () => {
                  (x(!1), a(g));
                },
                size: `composerSm`,
                uniform: !0,
                children: (0, Lr.jsx)(u, { asset: ce }),
              }),
            ],
          })
        : null),
      (t[28] = n),
      (t[29] = g),
      (t[30] = c),
      (t[31] = p),
      (t[32] = a),
      (t[33] = v),
      (t[34] = x),
      (t[35] = o),
      (t[36] = R))
    : (R = t[36]);
  let z;
  return (
    t[37] !== L || t[38] !== R || t[39] !== k
      ? ((z = (0, Lr.jsxs)(`div`, { ref: l, className: k, children: [L, R] })),
        (t[37] = L),
        (t[38] = R),
        (t[39] = k),
        (t[40] = z))
      : (z = t[40]),
    z
  );
}
function Nr(e, t) {
  return (0, Lr.jsx)(`span`, { "aria-hidden": !0, className: `size-1 shrink-0 rounded-full bg-text/20` }, t);
}
var Pr, Fr, Ir, Lr;
function Rr() {
  return (Rr = e(() => {
    ((Pr = j()), M(), ne(), E(), (Fr = f()), (Ir = p()), ie(), se(), O(), jr(), (Lr = C()));
  }))();
}
var zr, Br;
function Vr() {
  return (Vr = e(() => {
    (f(),
      (zr = C()),
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
    { disabled: n, onMetadataChange: i, selectedTemplate: a } = e,
    [o, s] = (0, Wr.useState)(!1),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = () => s(!0)), (t[0] = c)) : (c = t[0]);
  let l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Gr.jsx)(Br, { "aria-hidden": !0, className: `icon-sm shrink-0` })), (t[1] = l))
    : (l = t[1]);
  let u;
  t[2] === a
    ? (u = t[3])
    : ((u =
        a == null
          ? (0, Gr.jsx)(Y, {
              id: `codex.writingBlock.slides.templates.button`,
              defaultMessage: `Templates`,
              description: `Presentation outline header button that opens the installed presentation-template gallery`,
            })
          : a.displayName),
      (t[2] = a),
      (t[3] = u));
  let d;
  t[4] === u
    ? (d = t[5])
    : ((d = (0, Gr.jsx)(`span`, { className: `truncate`, children: u })), (t[4] = u), (t[5] = d));
  let f;
  t[6] !== n || t[7] !== o || t[8] !== d
    ? ((f = (0, Gr.jsxs)(`button`, {
        className: `flex h-9 min-w-0 cursor-interaction items-center gap-1.5 rounded-full border border-default bg-surface px-3 text-sm font-medium text-default select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring enabled:hover:bg-primary-ghost-hover disabled:cursor-default disabled:opacity-40`,
        "aria-expanded": o,
        disabled: n,
        onClick: c,
        type: `button`,
        children: [l, d],
      })),
      (t[6] = n),
      (t[7] = o),
      (t[8] = d),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== o || t[11] !== i || t[12] !== a?.path
    ? ((p = o
        ? (0, Gr.jsx)(Wr.Suspense, {
            fallback: null,
            children: (0, Gr.jsx)(Kr, {
              onOpenChange: s,
              onSelect: (e) => {
                if (e == null) {
                  i?.({ presentation_source: null });
                  return;
                }
                i?.({
                  presentation_source: {
                    kind: `template`,
                    template: { displayName: r(e), name: e.name, path: e.path },
                  },
                });
              },
              open: o,
              selectedTemplatePath: a?.path ?? null,
            }),
          })
        : null),
      (t[10] = o),
      (t[11] = i),
      (t[12] = a?.path),
      (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== f || t[15] !== p
      ? ((m = (0, Gr.jsxs)(Gr.Fragment, { children: [f, p] })), (t[14] = f), (t[15] = p), (t[16] = m))
      : (m = t[16]),
    m
  );
}
var Ur, Wr, Gr, Kr;
function qr() {
  return (qr = e(() => {
    ((Ur = j()),
      (Wr = f()),
      ie(),
      Vr(),
      Pe(),
      (Gr = C()),
      Te(),
      (Kr = (0, Wr.lazy)(async () => ({
        default: (
          await k(
            async () => {
              let { SlidesOutlineTemplatePicker: e } = await import(`./template-picker-ef0cc3c41f1b.js`);
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
    (_(),
      (Yr = De({ displayName: U(), name: U(), path: U() })),
      (Xr = De({ kind: xe(`template`), template: Yr })));
  }))();
}
function Qr(e) {
  let r = (0, ei.c)(48),
    {
      appearance: a,
      content: o,
      isDisabled: s,
      messageId: c,
      onBeforeExport: l,
      renderAsSubmenu: u,
      serverConversationId: d,
      title: f,
      writingBlockIndex: p,
    } = e,
    m = a === void 0 ? `inline` : a,
    h = u !== void 0 && u,
    g = i(F),
    _ = q(),
    [v, y] = (0, ti.useState)(!1),
    b;
  r[0] === _
    ? (b = r[1])
    : ((b = _.formatMessage({
        id: `codex.writingBlock.download.label`,
        defaultMessage: `Download`,
        description: `Tooltip and accessible name for the download menu in a Codex Apps document writing block. The menu offers Markdown, PDF, and Microsoft Word formats when available.`,
      })),
      (r[0] = _),
      (r[1] = b));
  let x = b,
    S = d != null && c != null && p != null,
    C;
  r[2] !== o || r[3] !== f
    ? ((C = () => {
        let e = (f ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
          t = /\.md$/i.test(e) ? e : `${e || `writing-block`}.md`;
        fn(new Blob([typeof o == `function` ? o() : o], { type: `text/markdown;charset=utf-8` }), t);
      }),
      (r[2] = o),
      (r[3] = f),
      (r[4] = C))
    : (C = r[4]);
  let w = C,
    T;
  r[5] !== _ || r[6] !== c || r[7] !== l || r[8] !== g || r[9] !== d || r[10] !== p
    ? ((T = (e) => {
        d != null &&
          c != null &&
          p != null &&
          (y(!0),
          Promise.resolve(l?.())
            .then(() =>
              tn.safePost(`/export_doc/writing_block/file`, {
                requestBody: { conversation_id: d, export_type: e, index: p, message_id: c },
              }),
            )
            .then($r)
            .catch(() => {
              g.get(Le).danger(
                _.formatMessage({
                  id: `codex.writingBlock.download.error`,
                  defaultMessage: `Download failed`,
                  description: `Error toast shown when downloading a Codex Apps document writing block as a PDF or Microsoft Word file fails.`,
                }),
                { errorAnalytics: { toastId: `codex.writingBlock.download.error` } },
              );
            })
            .finally(() => y(!1)));
      }),
      (r[5] = _),
      (r[6] = c),
      (r[7] = l),
      (r[8] = g),
      (r[9] = d),
      (r[10] = p),
      (r[11] = T))
    : (T = r[11]);
  let E = T,
    D = s || v,
    O;
  r[12] !== w || r[13] !== h
    ? ((O = (e) => {
        (h && e.preventDefault(), w());
      }),
      (r[12] = w),
      (r[13] = h),
      (r[14] = O))
    : (O = r[14]);
  let k, A;
  r[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(J.ItemIcon, {
        size: `md`,
        children: (0, Z.jsx)(de, {
          className: `size-5`,
          "aria-hidden": !0,
          fileName: void 0,
          mimeType: `text/markdown`,
        }),
      })),
      (A = (0, Z.jsx)(Y, {
        id: `codex.writingBlock.download.markdown`,
        defaultMessage: `Markdown document`,
        description: `Menu item that downloads a Codex Apps document writing block as a Markdown file with the .md extension.`,
      })),
      (r[15] = k),
      (r[16] = A))
    : ((k = r[15]), (A = r[16]));
  let j;
  r[17] !== D || r[18] !== O
    ? ((j = (0, Z.jsxs)(J.Item, { disabled: D, onSelect: O, children: [k, A] })),
      (r[17] = D),
      (r[18] = O),
      (r[19] = j))
    : (j = r[19]);
  let M;
  r[20] !== S || r[21] !== E || r[22] !== s || r[23] !== v || r[24] !== h
    ? ((M = S
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsxs)(J.Item, {
                disabled: s || v,
                onSelect: (e) => {
                  (h && e.preventDefault(), E(`pdf`));
                },
                children: [
                  (0, Z.jsx)(J.ItemIcon, {
                    size: `md`,
                    children: (0, Z.jsx)(de, {
                      className: `size-5`,
                      "aria-hidden": !0,
                      fileName: void 0,
                      mimeType: `application/pdf`,
                    }),
                  }),
                  (0, Z.jsx)(Y, {
                    id: `codex.writingBlock.download.pdf`,
                    defaultMessage: `PDF document`,
                    description: `Menu item that downloads a Codex Apps document writing block as a PDF file with the .pdf extension.`,
                  }),
                ],
              }),
              (0, Z.jsxs)(J.Item, {
                disabled: s || v,
                onSelect: (e) => {
                  (h && e.preventDefault(), E(`docx`));
                },
                children: [
                  (0, Z.jsx)(J.ItemIcon, {
                    size: `md`,
                    children: (0, Z.jsx)(de, {
                      className: `size-5`,
                      "aria-hidden": !0,
                      fileName: void 0,
                      mimeType: `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
                    }),
                  }),
                  (0, Z.jsx)(Y, {
                    id: `codex.writingBlock.download.word`,
                    defaultMessage: `Microsoft Word`,
                    description: `Menu item that downloads a Codex Apps document writing block as a Microsoft Word file with the .docx extension.`,
                  }),
                ],
              }),
            ],
          })
        : null),
      (r[20] = S),
      (r[21] = E),
      (r[22] = s),
      (r[23] = v),
      (r[24] = h),
      (r[25] = M))
    : (M = r[25]);
  let N;
  r[26] !== j || r[27] !== M
    ? ((N = (0, Z.jsxs)(Z.Fragment, { children: [j, M] })), (r[26] = j), (r[27] = M), (r[28] = N))
    : (N = r[28]);
  let P = N;
  if (h) {
    let e = s || v,
      n = v ? void 0 : Oe,
      i = v ? `size-5` : void 0,
      a;
    return (
      r[29] !== x || r[30] !== P || r[31] !== e || r[32] !== n || r[33] !== i
        ? ((a = (0, Z.jsx)(J.FlyoutSubmenuItem, {
            ariaLabel: x,
            contentWidth: `menuBounded`,
            disabled: e,
            label: x,
            leftIconAsset: n,
            leftIconClassName: i,
            LeftIcon: t,
            children: P,
          })),
          (r[29] = x),
          (r[30] = P),
          (r[31] = e),
          (r[32] = n),
          (r[33] = i),
          (r[34] = a))
        : (a = r[34]),
      a
    );
  }
  let I = m === `viewer` ? Ye : Ve,
    L = s || v,
    z;
  r[35] !== m || r[36] !== x || r[37] !== s || r[38] !== v
    ? ((z =
        m === `viewer`
          ? (0, Z.jsx)(R, {
              "aria-label": x,
              disabled: s || v,
              uniform: !0,
              children: v ? (0, Z.jsx)(t, { className: `size-5` }) : (0, Z.jsx)(n, {}),
            })
          : (0, Z.jsx)(oe, {
              "aria-label": x,
              color: `ghostActive`,
              disabled: s || v,
              size: `imageToolbar`,
              uniform: !0,
              children: v ? (0, Z.jsx)(t, { className: `size-5` }) : (0, Z.jsx)(n, {}),
            })),
      (r[35] = m),
      (r[36] = x),
      (r[37] = s),
      (r[38] = v),
      (r[39] = z))
    : (z = r[39]);
  let B;
  r[40] !== x || r[41] !== z
    ? ((B = (0, Z.jsx)(Me, { sideOffset: 0, tooltipContent: x, children: z })),
      (r[40] = x),
      (r[41] = z),
      (r[42] = B))
    : (B = r[42]);
  let V;
  return (
    r[43] !== I || r[44] !== P || r[45] !== L || r[46] !== B
      ? ((V = (0, Z.jsx)(I, {
          align: `end`,
          contentWidth: `menuBounded`,
          disabled: L,
          triggerButton: B,
          children: P,
        })),
        (r[43] = I),
        (r[44] = P),
        (r[45] = L),
        (r[46] = B),
        (r[47] = V))
      : (V = r[47]),
    V
  );
}
function $r(e) {
  rt({ href: e.download_url, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
}
var ei, ti, Z;
function ni() {
  return (ni = e(() => {
    ((ei = j()),
      He(),
      K(),
      (ti = f()),
      ie(),
      Cn(),
      se(),
      fe(),
      Gt(),
      z(),
      he(),
      te(),
      Re(),
      ke(),
      o(),
      ae(),
      (Z = C()));
  }))();
}
function ri(e) {
  let t = (0, ii.c)(57),
    { disabled: n, onOpen: r } = e,
    i = n !== void 0 && n,
    a = q(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `chatgptConversations.writingBlock.email.open.tooltip`,
        defaultMessage: `Open in email`,
        description: `Tooltip for an action in a Codex Apps Quick Chat email writing block. The action opens the draft in the user's email provider with its fields prefilled.`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s = o,
    c;
  t[2] === a
    ? (c = t[3])
    : ((c = a.formatMessage({
        id: `chatgptConversations.writingBlock.email.open.dropdown.ariaLabel`,
        defaultMessage: `Open email in app`,
        description: `Accessible label for a dropdown in a Codex Apps Quick Chat email writing block. Users choose Gmail, Outlook, or their default email app; this label is not visible text.`,
      })),
      (t[2] = a),
      (t[3] = c));
  let l = c,
    d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(u, { "aria-hidden": !1, asset: We })), (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] !== i || t[6] !== l
    ? ((f = (0, Q.jsx)(oe, {
        "aria-label": l,
        color: `ghostActive`,
        disabled: i,
        size: `imageToolbar`,
        uniform: !0,
        children: d,
      })),
      (t[5] = i),
      (t[6] = l),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== s || t[9] !== f
    ? ((p = (0, Q.jsx)(Me, { sideOffset: 0, tooltipContent: s, children: f })),
      (t[8] = s),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === a
    ? (m = t[12])
    : ((m = a.formatMessage({
        id: `chatgptConversations.writingBlock.email.open.option.gmail.ariaLabel`,
        defaultMessage: `Open email using Gmail`,
        description: `Accessible label for the Gmail option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.`,
      })),
      (t[11] = a),
      (t[12] = m));
  let h;
  t[13] === r ? (h = t[14]) : ((h = () => r(`gmail`)), (t[13] = r), (t[14] = h));
  let g, _;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(J.ItemIcon, { size: `md`, children: (0, Q.jsx)(x, { className: `icon-sm` }) })),
      (g = (0, Q.jsx)(Y, {
        id: `chatgptConversations.writingBlock.email.open.option.gmail.label`,
        defaultMessage: `Gmail`,
        description: `Short provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.`,
      })),
      (t[15] = g),
      (t[16] = _))
    : ((g = t[15]), (_ = t[16]));
  let v;
  t[17] !== m || t[18] !== h
    ? ((v = (0, Q.jsxs)(J.Item, { "aria-label": m, onSelect: h, children: [_, g] })),
      (t[17] = m),
      (t[18] = h),
      (t[19] = v))
    : (v = t[19]);
  let y;
  t[20] === a
    ? (y = t[21])
    : ((y = a.formatMessage({
        id: `chatgptConversations.writingBlock.email.open.option.outlook.ariaLabel`,
        defaultMessage: `Open email using Outlook`,
        description: `Accessible label for the Outlook option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.`,
      })),
      (t[20] = a),
      (t[21] = y));
  let b;
  t[22] === r ? (b = t[23]) : ((b = () => r(`outlook`)), (t[22] = r), (t[23] = b));
  let S, C;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(J.ItemIcon, { size: `md`, children: (0, Q.jsx)(Ln, { className: `icon-sm` }) })),
      (C = (0, Q.jsx)(Y, {
        id: `chatgptConversations.writingBlock.email.open.option.outlook.label`,
        defaultMessage: `Outlook`,
        description: `Short provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.`,
      })),
      (t[24] = S),
      (t[25] = C))
    : ((S = t[24]), (C = t[25]));
  let w;
  t[26] !== y || t[27] !== b
    ? ((w = (0, Q.jsxs)(J.Item, { "aria-label": y, onSelect: b, children: [S, C] })),
      (t[26] = y),
      (t[27] = b),
      (t[28] = w))
    : (w = t[28]);
  let T;
  t[29] === a
    ? (T = t[30])
    : ((T = a.formatMessage({
        id: `chatgptConversations.writingBlock.email.open.option.default.ariaLabel`,
        defaultMessage: `Open email using default email app`,
        description: `Accessible label for the default-app option in the open-in-email dropdown of a Codex Apps Quick Chat writing block.`,
      })),
      (t[29] = a),
      (t[30] = T));
  let E;
  t[31] === r ? (E = t[32]) : ((E = () => r(`default`)), (t[31] = r), (t[32] = E));
  let D, O;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(J.ItemIcon, { size: `md`, children: (0, Q.jsx)(rn, { className: `icon-sm` }) })),
      (O = (0, Q.jsx)(Y, {
        id: `chatgptConversations.writingBlock.email.open.option.default.label`,
        defaultMessage: `Default email app`,
        description: `Provider option in the open-in-email dropdown of a Codex Apps Quick Chat writing block. It launches the operating system's configured mail app.`,
      })),
      (t[33] = D),
      (t[34] = O))
    : ((D = t[33]), (O = t[34]));
  let k;
  t[35] !== T || t[36] !== E
    ? ((k = (0, Q.jsxs)(J.Item, { "aria-label": T, onSelect: E, children: [D, O] })),
      (t[35] = T),
      (t[36] = E),
      (t[37] = k))
    : (k = t[37]);
  let A;
  t[38] !== i || t[39] !== v || t[40] !== w || t[41] !== k || t[42] !== p
    ? ((A = (0, Q.jsx)(`div`, {
        className: `hidden md:block`,
        children: (0, Q.jsxs)(Ve, {
          align: `end`,
          contentWidth: `menuBounded`,
          disabled: i,
          triggerButton: p,
          children: [v, w, k],
        }),
      })),
      (t[38] = i),
      (t[39] = v),
      (t[40] = w),
      (t[41] = k),
      (t[42] = p),
      (t[43] = A))
    : (A = t[43]);
  let j;
  t[44] === r ? (j = t[45]) : ((j = () => r(`default`)), (t[44] = r), (t[45] = j));
  let M;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(u, { "aria-hidden": !1, asset: We })), (t[46] = M))
    : (M = t[46]);
  let N;
  t[47] !== i || t[48] !== s || t[49] !== j
    ? ((N = (0, Q.jsx)(oe, {
        "aria-label": s,
        color: `ghostActive`,
        disabled: i,
        onClick: j,
        size: `imageToolbar`,
        uniform: !0,
        children: M,
      })),
      (t[47] = i),
      (t[48] = s),
      (t[49] = j),
      (t[50] = N))
    : (N = t[50]);
  let P;
  t[51] !== s || t[52] !== N
    ? ((P = (0, Q.jsx)(`div`, {
        className: `md:hidden`,
        children: (0, Q.jsx)(Me, { sideOffset: 0, tooltipContent: s, children: N }),
      })),
      (t[51] = s),
      (t[52] = N),
      (t[53] = P))
    : (P = t[53]);
  let F;
  return (
    t[54] !== A || t[55] !== P
      ? ((F = (0, Q.jsxs)(Q.Fragment, { children: [A, P] })), (t[54] = A), (t[55] = P), (t[56] = F))
      : (F = t[56]),
    F
  );
}
var ii, Q;
function ai() {
  return (ai = e(() => {
    ((ii = j()), l(), ie(), se(), fe(), O(), Re(), G(), et(), In(), (Q = C()));
  }))();
}
function oi() {
  return {
    async sendEmail(e) {
      try {
        let t = await tn.safePost(`/aip/connectors/email/send_email`, {
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
          await tn.safePost(`/aip/connectors/email/unsend_email`, {
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
        let t = await tn.safePost(`/aip/connectors/email/send_email_status`, {
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
  return ui(dt({ shouldStripDirectives: !0 }).parse(e), e).trim();
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
    (gt(),
      Ht(),
      Cn(),
      (mi = { gmail: `https://www.googleapis.com/auth/gmail.modify`, outlook: `mail.send` }));
  }))();
}
function gi(e) {
  let t = (0, _i.c)(57),
    {
      bcc: n,
      cc: r,
      emailSendState: i,
      isPersistedSent: a,
      isLoadingSenderAccounts: o,
      onConnect: s,
      onSend: c,
      onUndoSend: l,
      recipient: d,
      selectedSenderAccount: f,
    } = e,
    p = q(),
    m = a || i.kind === `success_sent`,
    h = mn(i),
    g = i.kind === `sending_in_progress` && i.undoAvailable;
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
      ? ((r = (0, vi.jsx)(u, { "aria-hidden": !1, asset: qe })), (t[2] = r))
      : (r = t[2]);
    let i;
    t[3] === n
      ? (i = t[4])
      : ((i = (0, vi.jsx)(or, {
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
        ? ((a = (0, vi.jsx)(Me, { tooltipContent: n, children: i })), (t[5] = n), (t[6] = i), (t[7] = a))
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
      let n = e,
        r;
      t[10] !== i.sendId || t[11] !== l
        ? ((r = () => l(i.sendId)), (t[10] = i.sendId), (t[11] = l), (t[12] = r))
        : (r = t[12]);
      let a;
      return (
        t[13] !== r || t[14] !== n
          ? ((a = (0, vi.jsx)(oe, { color: `secondary`, onClick: r, size: `composer`, children: n })),
            (t[13] = r),
            (t[14] = n),
            (t[15] = a))
          : (a = t[15]),
        a
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
    let n;
    return (
      t[18] === e
        ? (n = t[19])
        : ((n = (0, vi.jsx)(oe, { color: `secondary`, loading: !0, size: `composer`, children: e })),
          (t[18] = e),
          (t[19] = n)),
      n
    );
  }
  if (o) {
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
    let n = e,
      r;
    return (
      t[22] === n
        ? (r = t[23])
        : ((r = (0, vi.jsx)(oe, { "aria-label": n, color: `secondary`, loading: !0, size: `toolbar` })),
          (t[22] = n),
          (t[23] = r)),
      r
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
    let n;
    return (
      t[26] !== s || t[27] !== e
        ? ((n = (0, vi.jsx)(oe, { color: `secondary`, onClick: s, size: `composer`, children: e })),
          (t[26] = s),
          (t[27] = e),
          (t[28] = n))
        : (n = t[28]),
      n
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
    let n;
    return (
      t[31] !== s || t[32] !== e
        ? ((n = (0, vi.jsx)(oe, { color: `secondary`, onClick: s, size: `composer`, children: e })),
          (t[31] = s),
          (t[32] = e),
          (t[33] = n))
        : (n = t[33]),
      n
    );
  }
  let _;
  t[34] !== n || t[35] !== r || t[36] !== d
    ? ((_ = en({ to: Kt(d), cc: Kt(r), bcc: Kt(n) })), (t[34] = n), (t[35] = r), (t[36] = d), (t[37] = _))
    : (_ = t[37]);
  let v = _,
    y;
  t[38] !== p || t[39] !== f.label
    ? ((y = p.formatMessage(
        {
          id: `chatgptConversations.writingBlock.emailSendAs`,
          defaultMessage: `Send as {email}`,
          description: `Accessible label for sending a writing block email from a connected account in Codex Apps.`,
        },
        { email: f.label },
      )),
      (t[38] = p),
      (t[39] = f.label),
      (t[40] = y))
    : (y = t[40]);
  let b = y,
    x;
  t[41] === p
    ? (x = t[42])
    : ((x = p.formatMessage({
        id: `chatgptConversations.writingBlock.emailSend`,
        defaultMessage: `Send`,
        description: `Button label for sending an email from a writing block in Codex Apps.`,
      })),
      (t[41] = p),
      (t[42] = x));
  let S = x,
    C;
  t[43] !== v || t[44] !== b
    ? ((C = v
        ? b
        : (0, vi.jsx)(Y, {
            id: `chatgptConversations.writingBlock.emailSendMissingRecipients`,
            defaultMessage: `Add at least one valid email recipient before sending.`,
            description: `Tooltip on the disabled Send button in a Codex Apps email writing block when the To, Cc, and Bcc fields contain no valid email address. Tells the email author how to enable sending and matches ChatGPT's missing-recipient toast.`,
          })),
      (t[43] = v),
      (t[44] = b),
      (t[45] = C))
    : (C = t[45]);
  let w = !v,
    T;
  t[46] === c ? (T = t[47]) : ((T = () => c(crypto.randomUUID())), (t[46] = c), (t[47] = T));
  let E;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, vi.jsx)(u, { "aria-hidden": !1, asset: L })), (t[48] = E))
    : (E = t[48]);
  let D;
  t[49] !== b || t[50] !== w || t[51] !== T || t[52] !== S
    ? ((D = (0, vi.jsxs)(oe, {
        "aria-label": b,
        color: `composerPrimary`,
        disabled: w,
        onClick: T,
        size: `toolbar`,
        children: [E, S],
      })),
      (t[49] = b),
      (t[50] = w),
      (t[51] = T),
      (t[52] = S),
      (t[53] = D))
    : (D = t[53]);
  let O;
  return (
    t[54] !== C || t[55] !== D
      ? ((O = (0, vi.jsx)(Me, { tooltipContent: C, children: D })), (t[54] = C), (t[55] = D), (t[56] = O))
      : (O = t[56]),
    O
  );
}
var _i, vi;
function yi() {
  return (yi = e(() => {
    ((_i = j()), ue(), Ke(), Ht(), sr(), ie(), se(), O(), Re(), (vi = C()));
  }))();
}
function bi(e) {
  let t = (0, Si.c)(13),
    { accounts: n, displayMode: r, isDisabled: i, onChange: a, onOpenChange: o, selectedAccount: s } = e,
    c = q(),
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
  let d = l,
    f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Ci.jsx)(Y, {
        id: `chatgptConversations.writingBlock.email.sender.field.label`,
        defaultMessage: `From`,
        description: `Short field label identifying the sender account in an email writing block shown in Codex Apps Quick Chat. It appears to the left of the account without punctuation.`,
      })),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Ci.jsx)(u, { className: `shrink-0 self-center text-default`, "aria-hidden": !1, asset: ee })),
      (t[3] = m))
    : (m = t[3]);
  let h = n.length > 1,
    g;
  return (
    t[4] !== n ||
    t[5] !== r ||
    t[6] !== i ||
    t[7] !== a ||
    t[8] !== o ||
    t[9] !== s ||
    t[10] !== d ||
    t[11] !== h
      ? ((g = (0, Ci.jsx)(Kn, {
          accounts: n,
          chevronIcon: m,
          displayMode: r,
          isDisabled: i,
          isSelectable: h,
          onChange: a,
          onOpenChange: o,
          renderMenu: xi,
          selectedAccount: s,
          selectorAriaLabel: d,
          senderLabel: p,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a),
        (t[8] = o),
        (t[9] = s),
        (t[10] = d),
        (t[11] = h),
        (t[12] = g))
      : (g = t[12]),
    g
  );
}
function xi(e) {
  let { accounts: t, isDisabled: n, onChange: r, onOpenChange: i, selectedAccount: a, trigger: o } = e;
  return (0, Ci.jsx)(Ve, {
    align: `start`,
    contentWidth: `menuBounded`,
    disabled: n,
    onOpenChange: i,
    triggerButton: o,
    children: t.map((e) =>
      (0, Ci.jsxs)(
        J.Item,
        {
          onSelect: () => r(e.id),
          rightIcon: e.id === a.id ? (0, Ci.jsx)(u, { "aria-hidden": !1, asset: qe }) : null,
          children: [
            (0, Ci.jsx)(J.ItemIcon, {
              size: `md`,
              children:
                e.provider === `gmail`
                  ? (0, Ci.jsx)(x, { className: `icon-sm` })
                  : (0, Ci.jsx)(Ln, { className: `icon-sm` }),
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
    ((Si = j()), ue(), v(), Yn(), ie(), fe(), O(), G(), In(), (Ci = C()));
  }))();
}
async function Ti(e, t) {
  let n = await tn.safePost(`/aip/connectors/google_contacts/search_contacts`, {
    surface: `writing_blocks`,
    requestBody: { limit: Ei, link_id: e, query: t },
  });
  return Zt(n.contacts);
}
var Ei;
function Di() {
  return (Di = e(() => {
    (Wt(), Cn(), (Ei = 10));
  }))();
}
function Oi(e) {
  let t = (0, ki.c)(23),
    { contactsLinkId: n, enabled: r } = e,
    [i, a] = (0, Ai.useState)(``),
    o;
  t[0] === i ? (o = t[1]) : ((o = i.trim()), (t[0] = i), (t[1] = o));
  let s = o,
    c = Pt(s, ji),
    l;
  t[2] !== n || t[3] !== c || t[4] !== r
    ? ((l = r && n != null && c.length > 0 && !An(c)), (t[2] = n), (t[3] = c), (t[4] = r), (t[5] = l))
    : (l = t[5]);
  let u = l,
    d;
  t[6] !== n || t[7] !== c
    ? ((d = n == null ? pe : () => Ti(n, c)), (t[6] = n), (t[7] = c), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== n || t[10] !== c
    ? ((f = [`chatgpt`, `writing-block-email-contacts`, n, c]), (t[9] = n), (t[10] = c), (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] !== u || t[13] !== d || t[14] !== f
    ? ((p = { enabled: u, queryFn: d, queryKey: f, retry: !1, staleTime: Xe.FIVE_MINUTES }),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f),
      (t[15] = p))
    : (p = t[15]);
  let { data: m } = T(p),
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
            return r && n != null && t.length > 0 && t === s && c === s && !An(t) ? (m ?? Mi) : Mi;
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
    ((ki = j()), Wt(), Ce(), we(), (Ai = f()), c(), ut(), Di(), (ji = 200), (Mi = []));
  }))();
}
function Pi({
  bcc: e,
  bodyMarkdown: t,
  cc: n,
  enabled: r,
  metadata: a,
  onMetadataChange: o,
  recipient: s,
  subject: c,
  writingBlockId: l,
}) {
  "use no forget";
  let u = q(),
    d = i(F),
    f = r,
    p = oi(),
    { data: m, isLoading: h } = T({
      queryKey: [`chatgpt`, `writing-block-email-accounts`],
      queryFn: async () => {
        let [e, t, n] = await Promise.all([
            tn.safePost(`/aip/connectors/links/list_accessible`, {
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
      staleTime: Xe.FIVE_MINUTES,
    }),
    g = m?.emailAccounts,
    _ = xn(a),
    v = pn(a),
    y = vn(a),
    b = Yt(a),
    x = g?.find((e) => e.id === y) ?? g?.find((e) => e.provider === b?.provider) ?? g?.[0],
    S = ve((e) => {
      o?.(e);
    }),
    C = ve((e) => {
      S({ [Vt]: e });
    }),
    { getContactsForQuery: w, searchContacts: E } = Oi({
      contactsLinkId: hn(
        (m?.contactsLinks ?? []).map((e) => ({ id: e.id, ownerEmail: e.owner_profile?.email })),
        x,
      ),
      enabled: f,
    }),
    D = ve((e) => {
      d.get(Le).danger(
        e.kind === `undo_failed`
          ? u.formatMessage({
              id: `chatgptConversations.writingBlock.emailUndoFailed`,
              defaultMessage: `Couldn't undo sending this email`,
              description: `Error toast shown when undoing a writing block email send fails in Codex Apps.`,
            })
          : u.formatMessage({
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
    } = Xn({
      isAvailable: f && (x != null || _ != null),
      selectedSenderAccount: x,
      recipient: s,
      cc: n,
      bcc: e,
      subject: c,
      body: f ? ci(t) : ``,
      emailVersionSent: v,
      initialSendId: _,
      transport: p,
      sourceId: l,
      sourceType: l == null ? void 0 : `email_writing_block`,
      emailAction: b,
      markEmailVersionSent: () => {
        S({ [Dt]: !0, [Lt]: null });
      },
      onSendIdChange: (e, t) => {
        S({ [Lt]: e, ...(t == null ? {} : { [Vt]: t }) });
      },
      onFailure: D,
      getVisibilityState: () => document.visibilityState,
    });
  return {
    emailAccounts: g,
    emailSendState: k,
    getContactsForQuery: w,
    isLoadingSenderAccounts: h,
    searchContacts: E,
    selectedSenderAccount: x,
    selectSenderAccount: C,
    sendEmail: O,
    undoEmailSend: A,
  };
}
async function Fi(e) {
  return (
    await tn.safeGet(`/aip/connectors/{connector_id}`, {
      surface: `writing_blocks`,
      additionalHeaders: { "OAI-Product-Sku": `CODEX` },
      parameters: { path: { connector_id: e }, query: { include_actions: !0 } },
    })
  ).actions.some((e) => e.name.trim().toLowerCase() === `send_email` && e.is_enabled !== !1);
}
var Ii, Li, Ri;
function zi() {
  return (zi = e(() => {
    (Wt(),
      Ht(),
      tr(),
      we(),
      K(),
      ie(),
      Cn(),
      te(),
      o(),
      c(),
      be(),
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
  t[10] === D ? (O = t[11]) : ((O = pn(D)), (t[10] = D), (t[11] = O));
  let k = O,
    A;
  t[12] !== k || t[13] !== y || t[14] !== l
    ? ((A = l && (k || yn(y))), (t[12] = k), (t[13] = y), (t[14] = l), (t[15] = A))
    : (A = t[15]);
  let j = A,
    M = i && !j,
    N = r?.writingBlockMetadata,
    P;
  t[16] === N ? (P = t[17]) : ((P = dn(N)), (t[16] = N), (t[17] = P));
  let F = P,
    I;
  t[18] !== a || t[19] !== F
    ? ((I = (e, t, n, r) => {
        r &&
          a?.({
            contacts: Qt({
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
          rt({
            href: qt({
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
        let e = C?.provider ?? Yt(r?.writingBlockMetadata)?.provider ?? `gmail`;
        rt({
          href: It({
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
    ((Vi = j()), Wt(), Ht(), Rt(), Gt(), ai(), hi(), yi(), wi(), zi(), (Hi = C()));
  }))();
}
function Wi(e) {
  let t = (0, qi.c)(42),
    {
      initialFeedbackText: n,
      initialOpen: r,
      messageId: a,
      serverConversationId: o,
      userEditedWritingBlock: s,
      writingBlockId: c,
    } = e,
    l = n === void 0 ? `` : n,
    d = r !== void 0 && r,
    f = i(F),
    p = q(),
    m = Ne(wn, `1594900112`),
    h = Se(Zi),
    [g] = (0, Ji.useState)(Ki),
    [_, v] = (0, Ji.useState)(l),
    [y, b] = (0, Ji.useState)(d),
    x = (0, Ji.useRef)(null),
    S,
    C;
  if (
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = () => () => {
          x.current != null && clearTimeout(x.current);
        }),
        (C = []),
        (t[0] = S),
        (t[1] = C))
      : ((S = t[0]), (C = t[1])),
    (0, Ji.useEffect)(S, C),
    !m || (h != null && h > g))
  )
    return null;
  let w;
  t[2] === p
    ? (w = t[3])
    : ((w = p.formatMessage({
        id: `codex.writingBlock.feedback.trigger`,
        defaultMessage: `What is this?`,
        description: `Accessible name for the feedback button below a ChatGPT writing block in Codex Apps. Activating it opens a short explanation and a form to share feedback about writing blocks.`,
      })),
      (t[2] = p),
      (t[3] = w));
  let T, E, D, O;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        x.current = setTimeout(() => b(!0), 500);
      }),
      (E = () => {
        x.current != null && (clearTimeout(x.current), (x.current = null));
      }),
      (D = (0, Yi.jsx)(Y, {
        id: `codex.writingBlock.feedback.visibleTrigger`,
        defaultMessage: `What is this?`,
        description: `Visible label for the feedback button shown below a ChatGPT writing block in Codex Apps. The button opens a short feature explanation and feedback form.`,
      })),
      (O = (0, Yi.jsx)(u, { asset: Ue })),
      (t[4] = T),
      (t[5] = E),
      (t[6] = D),
      (t[7] = O))
    : ((T = t[4]), (E = t[5]), (D = t[6]), (O = t[7]));
  let k;
  t[8] === w
    ? (k = t[9])
    : ((k = (0, Yi.jsxs)(oe, {
        "aria-label": w,
        color: `ghost`,
        size: `compact`,
        onMouseEnter: T,
        onMouseLeave: E,
        children: [D, O],
      })),
      (t[8] = w),
      (t[9] = k));
  let A;
  t[10] !== _ || t[11] !== p || t[12] !== a || t[13] !== f || t[14] !== o || t[15] !== s || t[16] !== c
    ? ((A = (e) => {
        e.preventDefault();
        let t = _.trim();
        t &&
          (tn
            .safePost(`/conversation/message/writing-blocks/feedback`, {
              requestBody: {
                conversation_id: o,
                feedback: t,
                message_id: a,
                user_edited_writing_block: s,
                writing_block_id: c,
              },
            })
            .catch(Gi),
          f
            .get(Le)
            .success(
              p.formatMessage({
                id: `codex.writingBlock.feedback.submitted`,
                defaultMessage: `Your feedback has been submitted`,
                description: `Short confirmation toast shown after a Codex Apps user submits feedback about a ChatGPT writing block.`,
              }),
            ),
          f.set(Zi, Date.now() + Xi),
          v(``),
          b(!1));
      }),
      (t[10] = _),
      (t[11] = p),
      (t[12] = a),
      (t[13] = f),
      (t[14] = o),
      (t[15] = s),
      (t[16] = c),
      (t[17] = A))
    : (A = t[17]);
  let j;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Yi.jsx)(`div`, {
        className: `text-sm font-semibold text-default`,
        children: (0, Yi.jsx)(Y, {
          id: `codex.writingBlock.feedback.title`,
          defaultMessage: `This is a writing block, a new feature we’re testing`,
          description: `Heading above the feedback form opened from a ChatGPT writing block in Codex Apps. It explains that writing blocks are a new feature and encourages the user to share feedback.`,
        }),
      })),
      (t[18] = j))
    : (j = t[18]);
  let M;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Yi.jsx)(`div`, {
        className: `text-xs text-secondary`,
        children: (0, Yi.jsx)(Y, {
          id: `codex.writingBlock.feedback.description`,
          defaultMessage: `Tell us what’s working and what’s not. The more specific the feedback, the better`,
          description: `Helper text above the writing-block feedback input in Codex Apps. It asks the user to describe what works and what does not, and encourages concrete feedback.`,
        }),
      })),
      (t[19] = M))
    : (M = t[19]);
  let N;
  t[20] === p
    ? (N = t[21])
    : ((N = p.formatMessage({
        id: `codex.writingBlock.feedback.inputLabel`,
        defaultMessage: `Additional feedback`,
        description: `Accessible name for the writing-block feedback text area in Codex Apps. Users enter what they liked or disliked about the writing-block editor.`,
      })),
      (t[20] = p),
      (t[21] = N));
  let P;
  t[22] === p
    ? (P = t[23])
    : ((P = p.formatMessage({
        id: `codex.writingBlock.feedback.placeholder`,
        defaultMessage: `What did you like or dislike?`,
        description: `Placeholder in the writing-block feedback text area in Codex Apps. It asks the user to explain what they liked or disliked about the editor.`,
      })),
      (t[22] = p),
      (t[23] = P));
  let I;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e) => v(e.target.value)), (t[24] = I))
    : (I = t[24]);
  let L;
  t[25] !== _ || t[26] !== N || t[27] !== P
    ? ((L = (0, Yi.jsx)(Ot, {
        "aria-label": N,
        autoFocus: !0,
        name: `writing-block-feedback`,
        placeholder: P,
        rows: 3,
        value: _,
        onChange: I,
      })),
      (t[25] = _),
      (t[26] = N),
      (t[27] = P),
      (t[28] = L))
    : (L = t[28]);
  let R;
  t[29] === _ ? (R = t[30]) : ((R = _.trim()), (t[29] = _), (t[30] = R));
  let z = R.length === 0,
    B;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Yi.jsx)(Y, {
        id: `codex.writingBlock.feedback.submit`,
        defaultMessage: `Share feedback`,
        description: `Label for the submit button in the writing-block feedback form in Codex Apps. It sends the user’s written feedback about the writing-block editor.`,
      })),
      (t[31] = B))
    : (B = t[31]);
  let V;
  t[32] === z
    ? (V = t[33])
    : ((V = (0, Yi.jsx)(oe, { disabled: z, size: `compact`, type: `submit`, children: B })),
      (t[32] = z),
      (t[33] = V));
  let H;
  t[34] !== A || t[35] !== L || t[36] !== V
    ? ((H = (0, Yi.jsxs)(`form`, {
        className: `flex flex-col gap-3 p-2`,
        onSubmit: A,
        children: [j, M, L, V],
      })),
      (t[34] = A),
      (t[35] = L),
      (t[36] = V),
      (t[37] = H))
    : (H = t[37]);
  let U;
  return (
    t[38] !== y || t[39] !== k || t[40] !== H
      ? ((U = (0, Yi.jsx)(`div`, {
          className: `flex justify-end px-3`,
          children: (0, Yi.jsx)(Ve, {
            align: `end`,
            contentWidth: `menuBounded`,
            onOpenChange: b,
            open: y,
            side: `top`,
            triggerButton: k,
            children: H,
          }),
        })),
        (t[38] = y),
        (t[39] = k),
        (t[40] = H),
        (t[41] = U))
      : (U = t[41]),
    U
  );
}
function Gi() {}
function Ki() {
  return Date.now();
}
var qi, Ji, Yi, Xi, Zi;
function Qi() {
  return (Qi = e(() => {
    ((qi = j()),
      Je(),
      K(),
      (Ji = f()),
      ie(),
      Cn(),
      se(),
      fe(),
      O(),
      $e(),
      te(),
      o(),
      ln(),
      on(),
      (Yi = C()),
      (Xi = 6048e5),
      (Zi = tt(`1594900112-hidden-until`, null)));
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
  t[0] === i ? (_ = t[1]) : ((_ = ft(i)), (t[0] = i), (t[1] = _));
  let v = _,
    y = r || s,
    x;
  t[2] === v
    ? (x = t[3])
    : ((x = () => {
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
      (t[3] = x));
  let S = x,
    C = me(S),
    T = me(S);
  if (n != null || l || v.length === 0 || Ze(i)) return null;
  let E;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { height: `auto`, opacity: 1, y: 0 }), (t[4] = E))
    : (E = t[4]);
  let D;
  t[5] === h ? (D = t[6]) : ((D = !h && { height: 0, opacity: 0, y: -8 }), (t[5] = h), (t[6] = D));
  let O = h ? 0 : 0.2,
    k;
  t[7] === O ? (k = t[8]) : ((k = { duration: O, ease: `easeOut` }), (t[7] = O), (t[8] = k));
  let A;
  t[9] !== C || t[10] !== S
    ? ((A = (e) => {
        ((p.current = e), C(e), S());
      }),
      (t[9] = C),
      (t[10] = S),
      (t[11] = A))
    : (A = t[11]);
  let j;
  if (t[12] !== y || t[13] !== a || t[14] !== o || t[15] !== h || t[16] !== v || t[17] !== d) {
    let e;
    (t[19] !== y || t[20] !== a || t[21] !== o || t[22] !== h || t[23] !== v.length
      ? ((e = (e, t) => {
          let { prompt: n, sourceIndex: r, title: i } = e;
          return (0, ia.jsxs)(
            b.button,
            {
              className: w(
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
                (0, ia.jsx)(g, {
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
      (j = v.slice(0, d ?? v.length).map(e)),
      (t[12] = y),
      (t[13] = a),
      (t[14] = o),
      (t[15] = h),
      (t[16] = v),
      (t[17] = d),
      (t[18] = j));
  } else j = t[18];
  let M;
  t[25] !== A || t[26] !== j
    ? ((M = (0, ia.jsx)(`div`, {
        ref: A,
        className: `flex min-w-0 flex-col items-start sm:flex-row sm:items-center sm:gap-3`,
        children: j,
      })),
      (t[25] = A),
      (t[26] = j),
      (t[27] = M))
    : (M = t[27]);
  let N;
  t[28] === v ? (N = t[29]) : ((N = JSON.stringify(v.map(ta))), (t[28] = v), (t[29] = N));
  let P;
  t[30] !== T || t[31] !== S
    ? ((P = (e) => {
        ((m.current = e), T(e), S());
      }),
      (t[30] = T),
      (t[31] = S),
      (t[32] = P))
    : (P = t[32]);
  let F;
  t[33] === v ? (F = t[34]) : ((F = v.map(ea)), (t[33] = v), (t[34] = F));
  let I;
  t[35] !== N || t[36] !== P || t[37] !== F
    ? ((I = (0, ia.jsx)(
        `div`,
        {
          ref: P,
          className: `pointer-events-none invisible absolute start-0 top-0 hidden w-max items-center gap-3 sm:flex`,
          "aria-hidden": `true`,
          children: F,
        },
        N,
      )),
      (t[35] = N),
      (t[36] = P),
      (t[37] = F),
      (t[38] = I))
    : (I = t[38]);
  let L;
  t[39] !== I || t[40] !== M
    ? ((L = (0, ia.jsxs)(`div`, {
        className: `relative min-w-0 px-3 text-base leading-relaxed text-default sm:rounded-b-3xl sm:bg-secondary-soft-alpha sm:py-2.5`,
        children: [M, I],
      })),
      (t[39] = I),
      (t[40] = M),
      (t[41] = L))
    : (L = t[41]);
  let R;
  return (
    t[42] !== L || t[43] !== D || t[44] !== k
      ? ((R = (0, ia.jsx)(b.div, {
          className: `relative mb-4 min-w-0 overflow-visible px-3 sm:-mt-4 sm:overflow-hidden`,
          animate: E,
          initial: D,
          transition: k,
          children: L,
        })),
        (t[42] = L),
        (t[43] = D),
        (t[44] = k),
        (t[45] = R))
      : (R = t[45]),
    R
  );
}
function ea(e) {
  let { sourceIndex: t, title: n } = e;
  return (0, ia.jsxs)(
    `div`,
    {
      className: `flex shrink-0 items-center gap-1.5`,
      children: [(0, ia.jsx)(g, {}), (0, ia.jsx)(`span`, { className: `whitespace-nowrap`, children: n })],
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
    ((na = j()), Jt(), E(), m(), (ra = f()), z(), H(), Ae(), (ia = C()));
  }))();
}
function oa(e) {
  let t = (0, da.c)(268),
    {
      conversationId: n,
      context: r,
      editorKey: a,
      emailMetadata: o,
      serverConversationId: s,
      enableAiTools: c,
      isExpanded: l,
      isReadOnly: d,
      librarySaveControls: f,
      isStreaming: p,
      messageId: m,
      copyTurnToClipboardMessageId: h,
      onBeforeDocumentExport: g,
      onAskForChanges: _,
      onEmailMetadataChange: v,
      onOpenVersionHistory: y,
      onSuggestedFollowup: b,
      renderFrame: x,
      showMagicEditAction: S,
      suppressCopyTurnToClipboardAnalytics: C,
      suggestedFollowupIneligibilityReason: w,
      title: T,
      userEditedWritingBlock: E,
      variant: D,
      writingBlockId: O,
      writingBlockIndex: k,
    } = e,
    A = l !== void 0 && l,
    j = d !== void 0 && d,
    M = h === void 0 ? m : h,
    N = S !== void 0 && S,
    I = E !== void 0 && E,
    L = i(F),
    z = kt(),
    B = st(`3737772469`),
    V = at(`3220935388`) || B.get(`inline_header_library_enabled`, !1),
    H = Se(an),
    U = (0, fa.useRef)(!1),
    ee = (0, fa.useRef)(void 0),
    te,
    ne;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = () => () => ee.current?.()), (ne = []), (t[0] = te), (t[1] = ne))
    : ((te = t[0]), (ne = t[1])),
    (0, fa.useEffect)(te, ne));
  let [re, ie] = (0, fa.useState)(!1),
    { renderView: ae, state: W } = r,
    G = a != null && !p && !j,
    se;
  t[2] !== m || t[3] !== L || t[4] !== s
    ? ((se = (e) => {
        s != null && m != null && jn(L, it, { conversationId: s, messageId: m, provider: e });
      }),
      (t[2] = m),
      (t[3] = L),
      (t[4] = s),
      (t[5] = se))
    : (se = t[5]);
  let ce;
  t[6] !== o ||
  t[7] !== G ||
  t[8] !== v ||
  t[9] !== W.displayedContent ||
  t[10] !== se ||
  t[11] !== D ||
  t[12] !== O
    ? ((ce = {
        bodyMarkdown: W.displayedContent,
        emailMetadata: o,
        isPersistedAndComplete: G,
        onEmailMetadataChange: v,
        onOpenEmail: se,
        variant: D,
        writingBlockId: O,
      }),
      (t[6] = o),
      (t[7] = G),
      (t[8] = v),
      (t[9] = W.displayedContent),
      (t[10] = se),
      (t[11] = D),
      (t[12] = O),
      (t[13] = ce))
    : (ce = t[13]);
  let K = Bi(ce),
    le = D === `slides` && (re || o?.writingBlockMetadata?.artifact_generation_completed === !0),
    ue = G && !K.isLocked && !le && !f?.isSaving,
    de;
  t[14] !== o?.writingBlockMetadata || t[15] !== D
    ? ((de = D === `slides` ? Jr(o?.writingBlockMetadata) : null),
      (t[14] = o?.writingBlockMetadata),
      (t[15] = D),
      (t[16] = de))
    : (de = t[16]);
  let fe = de,
    pe = o?.writingBlockMetadata,
    me;
  t[17] === pe ? (me = t[18]) : ((me = ft(pe)), (t[17] = pe), (t[18] = me));
  let he = me.length,
    ge = o?.writingBlockMetadata,
    _e;
  t[19] === ge ? (_e = t[20]) : ((_e = Ze(ge)), (t[19] = ge), (t[20] = _e));
  let ye = _e,
    be,
    xe;
  (t[21] !== K.isLocked ||
  t[22] !== he ||
  t[23] !== ye ||
  t[24] !== A ||
  t[25] !== p ||
  t[26] !== m ||
  t[27] !== L ||
  t[28] !== s ||
  t[29] !== w ||
  t[30] !== D ||
  t[31] !== O
    ? ((be = () => {
        if (
          U.current ||
          A ||
          he === 0 ||
          p ||
          m == null ||
          s == null ||
          w === `conversation_unavailable` ||
          w === `message_not_found`
        )
          return;
        U.current = !0;
        let e = w == null && !ye && !K.isLocked,
          t = K.isLocked
            ? yt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_EMAIL_SEND_LOCKED
            : ua(w);
        jn(L, St, {
          conversationId: s,
          followupCount: P(he),
          messageId: m,
          notShownReason: e ? void 0 : t,
          outcome: e
            ? Tt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_RENDER_OUTCOME_TYPE_SHOWN
            : Tt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_RENDER_OUTCOME_TYPE_NOT_SHOWN,
          variant: D,
          writingBlockId: O,
        });
      }),
      (xe = [K.isLocked, he, ye, A, p, m, L, s, w, D, O]),
      (t[21] = K.isLocked),
      (t[22] = he),
      (t[23] = ye),
      (t[24] = A),
      (t[25] = p),
      (t[26] = m),
      (t[27] = L),
      (t[28] = s),
      (t[29] = w),
      (t[30] = D),
      (t[31] = O),
      (t[32] = be),
      (t[33] = xe))
    : ((be = t[32]), (xe = t[33])),
    (0, fa.useEffect)(be, xe));
  let Ce = c ?? s != null,
    we;
  t[34] !== m || t[35] !== L || t[36] !== s || t[37] !== D || t[38] !== O
    ? ((we = (e) => {
        let { checked: t } = e;
        s != null &&
          m != null &&
          jn(L, Mn, {
            checked: String(t),
            messageId: m,
            metricValue: P(+!!t),
            threadId: s,
            variant: D,
            writingBlockId: O,
          });
      }),
      (t[34] = m),
      (t[35] = L),
      (t[36] = s),
      (t[37] = D),
      (t[38] = O),
      (t[39] = we))
    : (we = t[39]);
  let Te;
  t[40] !== o || t[41] !== v || t[42] !== W || t[43] !== D
    ? ((Te = (e, t, n) => {
        if (v == null) return !1;
        let r = D === `email` && o?.subject != null ? { type: `email`, subject: o.subject } : void 0,
          i = _n(o?.writingBlockMetadata, e, t);
        if (i == null && n != null) {
          let a = zt(o?.writingBlockMetadata),
            s = n.primaryOption ? [{ ...n.primaryOption, variant: r ?? n.primaryOption.variant }, ...a] : a;
          if (e.index !== s.length || e.index < 1 || s.some((t) => t.id === e.id)) return !1;
          i = { options: [...s, { id: e.id, label: e.id, content: t }] };
        }
        return (
          i != null && r != null && (i = $t(i, e, r.subject)),
          i != null && (v({ ...i, [Ft]: e.id, [gn]: !0 }), W.selectToneSection(e.id), !0)
        );
      }),
      (t[40] = o),
      (t[41] = v),
      (t[42] = W),
      (t[43] = D),
      (t[44] = Te))
    : (Te = t[44]);
  let Ee;
  t[45] !== ue ||
  t[46] !== m ||
  t[47] !== s ||
  t[48] !== N ||
  t[49] !== W.editorView ||
  t[50] !== W.generatePluginState ||
  t[51] !== Ce ||
  t[52] !== we ||
  t[53] !== Te ||
  t[54] !== D ||
  t[55] !== O ||
  t[56] !== k
    ? ((Ee = {
        editorView: W.editorView,
        enableAiTools: Ce,
        generatePluginState: W.generatePluginState,
        isEditable: ue,
        messageId: m,
        onTaskCheckboxToggled: we,
        onWriteLikeMeResult: Te,
        serverConversationId: s,
        showMagicEditAction: N,
        variant: D,
        writingBlockId: O,
        writingBlockIndex: k,
      }),
      (t[45] = ue),
      (t[46] = m),
      (t[47] = s),
      (t[48] = N),
      (t[49] = W.editorView),
      (t[50] = W.generatePluginState),
      (t[51] = Ce),
      (t[52] = we),
      (t[53] = Te),
      (t[54] = D),
      (t[55] = O),
      (t[56] = k),
      (t[57] = Ee))
    : (Ee = t[57]);
  let {
      cancelPendingAiRequests: De,
      createEditor: Oe,
      editorOverlays: ke,
      editorRootRef: Ae,
      hasPendingAiEdits: je,
      headerMagicEditAction: Me,
      isGenerateInputOpen: Ne,
      isHeaderComposerOpen: Pe,
      isHeaderInteractionDisabled: Ie,
      isHistoryInteractionDisabled: q,
      isEditorInteractionDisabled: Le,
      isWriteLikeMeSubmitting: Re,
      magicEdit: J,
      onEditSelection: ze,
      onEditorKeyDownCapture: Be,
      onEditorPointerDownCapture: Ve,
      onWriteLikeMeAction: He,
      previewEngine: Ue,
      resetAiTools: We,
      resetGeneratePrompt: Ge,
      submitHeaderMagicEdit: Ke,
    } = Vn(Ee),
    qe = J.isLoading && J.magicEditSubmissionSource === Bn.TOOLBAR,
    Je;
  t[58] !== _ || t[59] !== Ue
    ? ((Je = (e) => {
        let t = _?.(e, () => {
          e.isDestroyed || Ue.unpinMagicEditSelection(e);
        });
        t != null && ((ee.current = t), Ue.pinMagicEditSelection(e));
      }),
      (t[58] = _),
      (t[59] = Ue),
      (t[60] = Je))
    : (Je = t[60]);
  let Ye = ve(Je),
    Xe = Me;
  if (D === `slides` && n != null) {
    let e;
    t[61] !== ue ||
    t[62] !== Pe ||
    t[63] !== q ||
    t[64] !== J.isLoading ||
    t[65] !== J.magicEditSubmissionSource ||
    t[66] !== v ||
    t[67] !== We ||
    t[68] !== fe ||
    t[69] !== W.displayedContent ||
    t[70] !== Ke
      ? ((e = Pe
          ? null
          : (0, $.jsxs)($.Fragment, {
              children: [
                J.isLoading && J.magicEditSubmissionSource === Bn.HEADER_COMPOSER
                  ? (0, $.jsx)(oe, {
                      color: `ghost`,
                      onClick: We,
                      size: `composer`,
                      children: (0, $.jsx)(Y, {
                        id: `codex.writingBlock.slides.slideCount.stop`,
                        defaultMessage: `Stop`,
                        description: `Button that cancels an in-progress AI rewrite of a presentation outline after changing its slide count`,
                      }),
                    })
                  : (0, $.jsx)(Mr, {
                      disabled: !ue || q || W.displayedContent.trim().length === 0,
                      onSlideCountChange: (e) => {
                        Ke(
                          `Revise this presentation outline to exactly ${e} slides total. Preserve its presentation title, cover-slide choice, topic, key facts, and logical flow. Number slides consecutively using "## Slide N: <slide title>" headings. If a title slide is present, label it "## Slide 1 (Title): <presentation title>", keep it to the title and optional subtitle, and include it in the total. Give each content slide one clear focus and concise dash bullets. Combine closely related ideas when reducing slides; split complex ideas or add meaningful sections when expanding. Do not add filler or invent facts.`,
                        ).catch(la);
                      },
                      slideCount: Or(W.displayedContent),
                    }),
                (0, $.jsx)(Hr, { disabled: !ue || q, onMetadataChange: v, selectedTemplate: fe }),
              ],
            })),
        (t[61] = ue),
        (t[62] = Pe),
        (t[63] = q),
        (t[64] = J.isLoading),
        (t[65] = J.magicEditSubmissionSource),
        (t[66] = v),
        (t[67] = We),
        (t[68] = fe),
        (t[69] = W.displayedContent),
        (t[70] = Ke),
        (t[71] = e))
      : (e = t[71]);
    let n;
    (t[72] === e
      ? (n = t[73])
      : ((n = (0, $.jsx)(`div`, {
          className: `flex min-h-9 min-w-0 grow items-center gap-3 px-2`,
          children: e,
        })),
        (t[72] = e),
        (t[73] = n)),
      (Xe = n));
  } else if (!A && D !== `email` && !ye && (V || (f?.saveToPage && f.onSave != null))) {
    let e = !G || Ie || q,
      n;
    t[74] !== Ie ||
    t[75] !== G ||
    t[76] !== m ||
    t[77] !== g ||
    t[78] !== s ||
    t[79] !== W.displayedContent ||
    t[80] !== T ||
    t[81] !== D ||
    t[82] !== k
      ? ((n =
          D === `document`
            ? (0, $.jsx)(Qr, {
                content: W.displayedContent,
                isDisabled: !G || Ie,
                messageId: m,
                onBeforeExport: g,
                renderAsSubmenu: !0,
                serverConversationId: s,
                title: T,
                writingBlockIndex: k,
              })
            : void 0),
        (t[74] = Ie),
        (t[75] = G),
        (t[76] = m),
        (t[77] = g),
        (t[78] = s),
        (t[79] = W.displayedContent),
        (t[80] = T),
        (t[81] = D),
        (t[82] = k),
        (t[83] = n))
      : (n = t[83]);
    let r = D === `document` ? y : void 0,
      i = f?.libraryFileId,
      a = f?.isSaving,
      o = f?.saveConfirmation,
      c = f?.saveToPage,
      l;
    t[84] !== H || t[85] !== g
      ? ((l = H
          ? () => {
              g?.().catch(ca);
            }
          : void 0),
        (t[84] = H),
        (t[85] = g),
        (t[86] = l))
      : (l = t[86]);
    let u;
    t[87] !== H || t[88] !== f || t[89] !== W.displayedContent || t[90] !== W.editorView
      ? ((u =
          (H || f?.saveToPage) && W.displayedContent.trim() !== `` && f?.onSave != null
            ? (e) => {
                let t = W.editorView;
                f.onSave?.(t == null || t.isDestroyed ? W.displayedContent : dt().serialize(t.state.doc), e);
              }
            : void 0),
        (t[87] = H),
        (t[88] = f),
        (t[89] = W.displayedContent),
        (t[90] = W.editorView),
        (t[91] = u))
      : (u = t[91]);
    let d;
    t[92] === T
      ? (d = t[93])
      : ((d =
          T ??
          (0, $.jsx)(Y, {
            id: `codex.writingBlock.header.title.fallback`,
            defaultMessage: `Writing`,
            description: `Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title.`,
          })),
        (t[92] = T),
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
      ? ((p = (0, $.jsx)(pr, {
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
      (Xe = p));
  }
  let Qe;
  if (
    t[105] !== De ||
    t[106] !== n ||
    t[107] !== M ||
    t[108] !== Oe ||
    t[109] !== ke ||
    t[110] !== Ae ||
    t[111] !== K.actions ||
    t[112] !== K.emailRowsCapabilities ||
    t[113] !== o?.writingBlockMetadata ||
    t[114] !== Ye ||
    t[115] !== ye ||
    t[116] !== je ||
    t[117] !== Xe ||
    t[118] !== V ||
    t[119] !== re ||
    t[120] !== qe ||
    t[121] !== ue ||
    t[122] !== Le ||
    t[123] !== A ||
    t[124] !== Ne ||
    t[125] !== Pe ||
    t[126] !== Ie ||
    t[127] !== q ||
    t[128] !== G ||
    t[129] !== le ||
    t[130] !== z ||
    t[131] !== p ||
    t[132] !== Re ||
    t[133] !== H ||
    t[134] !== f ||
    t[135] !== J ||
    t[136] !== m ||
    t[137] !== _ ||
    t[138] !== g ||
    t[139] !== ze ||
    t[140] !== Be ||
    t[141] !== Ve ||
    t[142] !== y ||
    t[143] !== He ||
    t[144] !== Ue ||
    t[145] !== x ||
    t[146] !== ae ||
    t[147] !== We ||
    t[148] !== Ge ||
    t[149] !== L ||
    t[150] !== fe ||
    t[151] !== s ||
    t[152] !== W ||
    t[153] !== C ||
    t[154] !== T ||
    t[155] !== D ||
    t[156] !== O ||
    t[157] !== k
  ) {
    let e;
    if (A && (H || f?.saveToPage) && !f?.libraryFileId && f?.onSave != null) {
      let n;
      if (f.saveToPage) {
        let e;
        (t[159] === f.isSaving
          ? (e = t[160])
          : ((e = f.isSaving
              ? (0, $.jsx)(Y, {
                  id: `codex.writingBlock.page.saving`,
                  defaultMessage: `Creating Page`,
                  description: `Accessible label on the writing block save control while its editable Page is being created. Keep this progress label short.`,
                })
              : (0, $.jsx)(Y, {
                  id: `codex.writingBlock.page.save`,
                  defaultMessage: `Save`,
                  description: `Label, accessible label, and tooltip for a writing block's save control. Saves the document as a Page in the existing writing block so it remains editable inline. Keep this action short.`,
                })),
            (t[159] = f.isSaving),
            (t[160] = e)),
          (n = e));
      } else if (f.isSaving && z) {
        let e;
        (t[161] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Y, {
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
          ? ((e = (0, $.jsx)(Y, {
              id: `codex.writingBlock.viewer.savingToLibrary`,
              defaultMessage: `Adding to Library`,
              description: `Label on the expanded writing block's save button while its Library save is in progress.`,
            })),
            (t[162] = e))
          : (e = t[162]),
          (n = e));
      } else if (z) {
        let e;
        (t[163] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Y, {
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
          ? ((e = (0, $.jsx)(Y, {
              id: `codex.writingBlock.viewer.saveToLibrary`,
              defaultMessage: `Add to Library`,
              description: `Button in the expanded writing block header that saves the writing block to Library.`,
            })),
            (t[164] = e))
          : (e = t[164]),
          (n = e));
      }
      let r;
      t[165] !== ue || t[166] !== Ie || t[167] !== W.displayedContent
        ? ((r = !ue || Ie || W.displayedContent.trim() === ``),
          (t[165] = ue),
          (t[166] = Ie),
          (t[167] = W.displayedContent),
          (t[168] = r))
        : (r = t[168]);
      let i;
      t[169] !== f || t[170] !== W.displayedContent || t[171] !== W.editorView
        ? ((i = (e) => {
            let t = W.editorView;
            f.onSave?.(
              t == null || t.isDestroyed ? W.displayedContent : dt().serialize(t.state.doc),
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
        : ((a = f.isSaving ? null : (0, $.jsx)(u, { asset: Fe })), (t[173] = f.isSaving), (t[174] = a));
      let o;
      (t[175] === n
        ? (o = t[176])
        : ((o = (0, $.jsx)(`span`, { className: `text-tertiary`, children: n })), (t[175] = n), (t[176] = o)),
        (e = (0, $.jsxs)(R, {
          "aria-busy": f.isSaving || void 0,
          loading: f.isSaving,
          disabled: r,
          onClick: i,
          children: [a, o],
        })));
    }
    let r;
    t[177] !== A ||
    t[178] !== Ie ||
    t[179] !== G ||
    t[180] !== m ||
    t[181] !== g ||
    t[182] !== s ||
    t[183] !== W.displayedContent ||
    t[184] !== T ||
    t[185] !== D ||
    t[186] !== k
      ? ((r =
          A && D === `document`
            ? (0, $.jsx)(Qr, {
                appearance: `viewer`,
                content: W.displayedContent,
                isDisabled: !G || Ie,
                messageId: m,
                onBeforeExport: g,
                serverConversationId: s,
                title: T,
                writingBlockIndex: k,
              })
            : null),
        (t[177] = A),
        (t[178] = Ie),
        (t[179] = G),
        (t[180] = m),
        (t[181] = g),
        (t[182] = s),
        (t[183] = W.displayedContent),
        (t[184] = T),
        (t[185] = D),
        (t[186] = k),
        (t[187] = r))
      : (r = t[187]);
    let i;
    t[188] !== A || t[189] !== q || t[190] !== G || t[191] !== y || t[192] !== D
      ? ((i = A && D === `document` && y != null ? (0, $.jsx)(Gn, { disabled: !G || q, onSelect: y }) : null),
        (t[188] = A),
        (t[189] = q),
        (t[190] = G),
        (t[191] = y),
        (t[192] = D),
        (t[193] = i))
      : (i = t[193]);
    let a;
    t[194] !== ye ||
    t[195] !== V ||
    t[196] !== A ||
    t[197] !== Ie ||
    t[198] !== G ||
    t[199] !== H ||
    t[200] !== f?.libraryFileId ||
    t[201] !== m ||
    t[202] !== g ||
    t[203] !== s ||
    t[204] !== W.displayedContent ||
    t[205] !== T ||
    t[206] !== D ||
    t[207] !== k
      ? ((a =
          D === `document` && !A && f?.libraryFileId != null && (!V || !H || ye)
            ? (0, $.jsx)(Qr, {
                content: W.displayedContent,
                isDisabled: !G || Ie,
                messageId: m,
                onBeforeExport: g,
                serverConversationId: s,
                title: T,
                writingBlockIndex: k,
              })
            : null),
        (t[194] = ye),
        (t[195] = V),
        (t[196] = A),
        (t[197] = Ie),
        (t[198] = G),
        (t[199] = H),
        (t[200] = f?.libraryFileId),
        (t[201] = m),
        (t[202] = g),
        (t[203] = s),
        (t[204] = W.displayedContent),
        (t[205] = T),
        (t[206] = D),
        (t[207] = k),
        (t[208] = a))
      : (a = t[208]);
    let c;
    t[209] !== n ||
    t[210] !== q ||
    t[211] !== G ||
    t[212] !== le ||
    t[213] !== fe ||
    t[214] !== W.displayedContent ||
    t[215] !== D ||
    t[216] !== O
      ? ((c =
          D === `slides` && n != null && O != null
            ? (0, $.jsx)(xr, {
                content: W.displayedContent,
                conversationId: n,
                disabled: !G || le || q,
                onSubmittingChange: ie,
                selectedTemplate: fe,
                writingBlockId: O,
              })
            : null),
        (t[209] = n),
        (t[210] = q),
        (t[211] = G),
        (t[212] = le),
        (t[213] = fe),
        (t[214] = W.displayedContent),
        (t[215] = D),
        (t[216] = O),
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
    let d;
    t[222] === J
      ? (d = t[223])
      : ((d = () => {
          J.magicEditSubmissionSource === Bn.TOOLBAR && J.cancelMagicEdit();
        }),
        (t[222] = J),
        (t[223] = d));
    let h;
    t[224] !== Ue || t[225] !== W.editorView
      ? ((h = (e) => {
          let t = W.editorView;
          t == null || t.isDestroyed || (e ? Ue.pinMagicEditSelection(t) : Ue.unpinMagicEditSelection(t));
        }),
        (t[224] = Ue),
        (t[225] = W.editorView),
        (t[226] = h))
      : (h = t[226]);
    let v;
    t[227] !== m || t[228] !== L || t[229] !== s || t[230] !== D || t[231] !== O || t[232] !== k
      ? ((v = (e) => {
          s != null &&
            m != null &&
            (jn(L, jt, {
              conversationId: s,
              messageId: m,
              variant: D,
              writingBlockId: O,
              writingBlockIndex: k == null ? void 0 : String(k),
            }),
            tn
              .safePost(`/conversation/implicit_message_feedback`, {
                requestBody: {
                  conversation_id: s,
                  message_id: m,
                  source: `mouse`,
                  location: `writing-block`,
                  feedback: { feedback_type: `copy`, selected_text_length: e.length },
                },
              })
              .catch(sa));
        }),
        (t[227] = m),
        (t[228] = L),
        (t[229] = s),
        (t[230] = D),
        (t[231] = O),
        (t[232] = k),
        (t[233] = v))
      : (v = t[233]);
    let b;
    t[234] !== M || t[235] !== L || t[236] !== s || t[237] !== C
      ? ((b = () => {}), (t[234] = M), (t[235] = L), (t[236] = s), (t[237] = C), (t[238] = b))
      : (b = t[238]);
    let S;
    t[239] === Ge
      ? (S = t[240])
      : ((S = (e) => {
          zn(e, Ge);
        }),
        (t[239] = Ge),
        (t[240] = S));
    let w;
    (t[241] !== We || t[242] !== W
      ? ((w = (e) => {
          e !== W.activeToneSectionId && (We(), W.selectToneSection(e));
        }),
        (t[241] = We),
        (t[242] = W),
        (t[243] = w))
      : (w = t[243]),
      (Qe = ae({
        actionsPresentation: A ? `viewer` : `inline`,
        viewerDownloadControl: r,
        ...(Ie ? { copyInteractionDisabled: !0 } : {}),
        viewerVersionHistoryMenuItem: i,
        actionsAfterCopy: l,
        createEditor: Oe,
        editorOverlays: ke,
        editorRootRef: Ae,
        editorInteractionDisabled: Le,
        onBeforeExternalContentUpdate: We,
        emailRowsCapabilities: K.emailRowsCapabilities,
        hideFormatToolbar: Pe || Ne || (Le && !qe),
        hideSlashMenu: Ne,
        headerLeadingContent: Xe,
        historyInteractionDisabled: q || le,
        isEditable: ue,
        isEditSelectionLoading: qe,
        isHeaderComposerOpen: Pe,
        isMagicEditSubmitting: J.isLoading,
        isWriteLikeMeSubmitting: Re,
        metadataInteractionDisabled: q,
        onCancelEditSelection: d,
        onAskForChanges: _ == null ? void 0 : Ye,
        onEditSelection: ze,
        onEditSelectionOpenChange: h,
        onCopy: v,
        onEditorEscape: A && !p && !je ? Ct : void 0,
        onCopyContentPrepared: b,
        onEditorKeyDownCapture: Be,
        onEditorPointerDownCapture: Ve,
        onWriteLikeMeAction: He,
        onSlashMenuExecute: S,
        onToneSectionSelect: w,
        renderFrame: x == null ? void 0 : (t) => x({ ...t, viewerTitleControl: e }, je || re, De),
        writingBlockMetadata: o?.writingBlockMetadata,
      })),
      (t[105] = De),
      (t[106] = n),
      (t[107] = M),
      (t[108] = Oe),
      (t[109] = ke),
      (t[110] = Ae),
      (t[111] = K.actions),
      (t[112] = K.emailRowsCapabilities),
      (t[113] = o?.writingBlockMetadata),
      (t[114] = Ye),
      (t[115] = ye),
      (t[116] = je),
      (t[117] = Xe),
      (t[118] = V),
      (t[119] = re),
      (t[120] = qe),
      (t[121] = ue),
      (t[122] = Le),
      (t[123] = A),
      (t[124] = Ne),
      (t[125] = Pe),
      (t[126] = Ie),
      (t[127] = q),
      (t[128] = G),
      (t[129] = le),
      (t[130] = z),
      (t[131] = p),
      (t[132] = Re),
      (t[133] = H),
      (t[134] = f),
      (t[135] = J),
      (t[136] = m),
      (t[137] = _),
      (t[138] = g),
      (t[139] = ze),
      (t[140] = Be),
      (t[141] = Ve),
      (t[142] = y),
      (t[143] = He),
      (t[144] = Ue),
      (t[145] = x),
      (t[146] = ae),
      (t[147] = We),
      (t[148] = Ge),
      (t[149] = L),
      (t[150] = fe),
      (t[151] = s),
      (t[152] = W),
      (t[153] = C),
      (t[154] = T),
      (t[155] = D),
      (t[156] = O),
      (t[157] = k),
      (t[158] = Qe));
  } else Qe = t[158];
  let $e = Qe,
    et;
  t[244] !== o?.writingBlockMetadata ||
  t[245] !== ye ||
  t[246] !== ue ||
  t[247] !== A ||
  t[248] !== Ie ||
  t[249] !== m ||
  t[250] !== b ||
  t[251] !== L ||
  t[252] !== s ||
  t[253] !== w ||
  t[254] !== D ||
  t[255] !== O ||
  t[256] !== k
    ? ((et =
        !A && !ye && b != null && k === 0
          ? (0, $.jsx)($i, {
              ineligibilityReason: w,
              isDisabled: !ue || Ie,
              metadata: o?.writingBlockMetadata,
              onFollowupClick: (e, t) => {
                s != null &&
                  m != null &&
                  jn(L, nn, {
                    conversationId: s,
                    followupCount: P(t),
                    followupPosition: P(e),
                    messageId: m,
                    variant: D,
                    writingBlockId: O,
                  });
              },
              onSelect: b,
            })
          : null),
      (t[244] = o?.writingBlockMetadata),
      (t[245] = ye),
      (t[246] = ue),
      (t[247] = A),
      (t[248] = Ie),
      (t[249] = m),
      (t[250] = b),
      (t[251] = L),
      (t[252] = s),
      (t[253] = w),
      (t[254] = D),
      (t[255] = O),
      (t[256] = k),
      (t[257] = et))
    : (et = t[257]);
  let tt;
  t[258] !== A || t[259] !== m || t[260] !== s || t[261] !== I || t[262] !== O
    ? ((tt =
        !A && s != null && m != null && O != null
          ? (0, $.jsx)(Wi, {
              messageId: m,
              serverConversationId: s,
              userEditedWritingBlock: I,
              writingBlockId: O,
            })
          : null),
      (t[258] = A),
      (t[259] = m),
      (t[260] = s),
      (t[261] = I),
      (t[262] = O),
      (t[263] = tt))
    : (tt = t[263]);
  let nt;
  return (
    t[264] !== et || t[265] !== tt || t[266] !== $e
      ? ((nt = (0, $.jsxs)($.Fragment, { children: [$e, et, tt] })),
        (t[264] = et),
        (t[265] = tt),
        (t[266] = $e),
        (t[267] = nt))
      : (nt = t[267]),
    nt
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
      return yt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_MISSING_MESSAGE_ID;
    case `not_primary_writing_block`:
      return yt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_NOT_PRIMARY_WRITING_BLOCK;
    case `not_last_node_in_message`:
      return yt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_NOT_LAST_NODE_IN_MESSAGE;
    case `invalid_source_message`:
      return yt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_INVALID_SOURCE_MESSAGE;
    case `superseded_by_later_turn`:
      return yt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_SUPERSEDED_BY_LATER_TURN;
    case `conversation_unavailable`:
    case `message_not_found`:
    case null:
    case void 0:
      return yt.CHATGPT_WRITING_BLOCK_SUGGESTED_FOLLOWUPS_NOT_SHOWN_REASON_UNKNOWN;
  }
}
var da, fa, $;
function pa() {
  return (pa = e(() => {
    ((da = j()),
      Bt(),
      pt(),
      ze(),
      gt(),
      Jt(),
      Hn(),
      K(),
      (fa = f()),
      ie(),
      Cn(),
      Wn(),
      ht(),
      se(),
      O(),
      En(),
      ot(),
      Pn(),
      o(),
      Nn(),
      be(),
      ae(),
      Rn(),
      Un(),
      _r(),
      Dr(),
      Rr(),
      qr(),
      Zr(),
      ni(),
      Ui(),
      Qi(),
      aa(),
      ($ = C()));
  }))();
}
export { pa as n, oa as t };
//# sourceMappingURL=writing-block-app-capabilities-80d71e437b42.js.map
