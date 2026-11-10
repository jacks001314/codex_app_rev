const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-9d2a86f6a26c.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./contact-ready-7c923836a87f.js",
      "./text-message-instructions-c51c87e9d826.js",
      "./parsePhoneNumber-1c038b3a80d8.js",
      "./parsePhoneNumber-d60824298d64.js",
      "./withMetadataArgument-66f337837d55.js",
      "./contact-ready-dfd7fa950fe1.css",
      "./state-d33b90e079dc.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $R as t,
  ADt as n,
  AO as r,
  CO as i,
  Cot as a,
  GY as o,
  IDt as s,
  Ixt as c,
  KY as l,
  MDt as u,
  NH as d,
  Pxt as f,
  QR as p,
  Sj as m,
  TJ as h,
  TO as g,
  VDt as _,
  Vxt as v,
  XJ as y,
  YJ as b,
  _Mt as x,
  _O as S,
  _wt as C,
  _xt as w,
  af as T,
  cO as E,
  dj as D,
  fO as O,
  fPt as k,
  gMt as A,
  gO as ee,
  gwt as j,
  hot as te,
  i3 as M,
  iO as N,
  jDt as P,
  lO as ne,
  lot as F,
  mO as re,
  oO as ie,
  of as I,
  pPt as L,
  r3 as ae,
  rO as R,
  vO as oe,
  vzt as z,
  wot as B,
  wxt as se,
  xMt as V,
  yzt as H,
  zxt as U,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as W,
  F$ as G,
  GMr as ce,
  J5t as le,
  JPn as ue,
  Jhr as de,
  K5t as fe,
  Khr as pe,
  OPr as me,
  Opr as he,
  P$ as ge,
  Qhr as _e,
  T5n as ve,
  UX as ye,
  WX as be,
  Whr as xe,
  XMr as Se,
  XPn as Ce,
  Xhr as we,
  Y5t as Te,
  Y8n as Ee,
  Yhr as De,
  Ymr as Oe,
  Zhr as ke,
  _bn as Ae,
  c7 as je,
  d7 as Me,
  dIn as Ne,
  egr as Pe,
  ehr as Fe,
  fbn as Ie,
  gbn as Le,
  i7 as Re,
  kPr as ze,
  nT as Be,
  ngr as Ve,
  pIn as He,
  qhr as Ue,
  r7 as We,
  rT as Ge,
  tNr as Ke,
  v8n as qe,
  vbn as Je,
  w8n as Ye,
  wpr as Xe,
  xPn as Ze,
  yPn as Qe,
} from "./app-initial-5851df3f6cb1.js";
import { n as $e, t as K } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { n as et, t as tt } from "./aeon-appearance-picker-37d157024d1d.js";
import { n as nt, t as rt } from "./channel-button-bad94b04d4c2.js";
import { n as it, t as at } from "./contact-ready-7c923836a87f.js";
import { a as ot, s as st } from "./text-message-instructions-c51c87e9d826.js";
import { a as ct, c as lt, l as ut, r as dt, t as ft } from "./state-d33b90e079dc.js";
import { n as pt, r as mt } from "./activity-state-label-54eb9cc1c5d9.js";
function ht(e) {
  let t = (0, gt.c)(27),
    { conversationId: n, isArchived: r } = e,
    i = U(ze, `1973839244`),
    a = U(ve, n),
    [o, c] = (0, _t.useState)(null),
    [l, u] = (0, _t.useState)(null),
    [d, f] = (0, _t.useState)(null);
  if (!i || a !== `durable` || r) return null;
  let p;
  t[0] === n
    ? (p = t[1])
    : ((p = async function (e) {
        (c(e), u(null));
        try {
          let t = await Oe.safePost(
            e === `setup`
              ? `/cloud-aeons/by-thread/{thread_id}/doctor/setup`
              : `/cloud-aeons/by-thread/{thread_id}/doctor/check-in`,
            { parameters: { path: { thread_id: n } } },
          );
          (f(t.schedule_url ?? t.workflow_url), u(e));
        } catch {
          u(`error`);
        }
        c(null);
      }),
      (t[0] = n),
      (t[1] = p));
  let m = p,
    h = o != null,
    g;
  t[2] === m ? (g = t[3]) : ((g = () => void m(`setup`)), (t[2] = m), (t[3] = g));
  let _;
  t[4] === o
    ? (_ = t[5])
    : ((_ = (0, q.jsx)(K.ItemLabel, {
        children:
          o === `setup`
            ? (0, q.jsx)(s, {
                id: `restricted.aeon.doctor.setup.pending`,
                defaultMessage: `Setting up recurring doctor…`,
                description: `Button in the dot summary while setting up recurring health checks`,
              })
            : (0, q.jsx)(s, {
                id: `restricted.aeon.doctor.setup.label`,
                defaultMessage: `Set up recurring doctor`,
                description: `Button in the dot summary that schedules recurring health checks; separate from Check in now`,
              }),
      })),
      (t[4] = o),
      (t[5] = _));
  let v;
  t[6] !== h || t[7] !== g || t[8] !== _
    ? ((v = (0, q.jsx)(K.ItemButton, { className: `select-none`, disabled: h, onClick: g, children: _ })),
      (t[6] = h),
      (t[7] = g),
      (t[8] = _),
      (t[9] = v))
    : (v = t[9]);
  let y = o != null,
    b;
  t[10] === m ? (b = t[11]) : ((b = () => void m(`check-in`)), (t[10] = m), (t[11] = b));
  let x;
  t[12] === o
    ? (x = t[13])
    : ((x = (0, q.jsx)(K.ItemLabel, {
        children:
          o === `check-in`
            ? (0, q.jsx)(s, {
                id: `restricted.aeon.doctor.requesting`,
                defaultMessage: `Requesting check-in…`,
                description: `Dot doctor button while submitting a health check request`,
              })
            : (0, q.jsx)(s, {
                id: `restricted.aeon.doctor.checkInNow.label`,
                defaultMessage: `Check in now`,
                description: `Button in the dot summary that requests an immediate doctor check-in, starting the recurring doctor if needed`,
              }),
      })),
      (t[12] = o),
      (t[13] = x));
  let S;
  t[14] !== y || t[15] !== b || t[16] !== x
    ? ((S = (0, q.jsx)(K.ItemButton, { className: `select-none`, disabled: y, onClick: b, children: x })),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x),
      (t[17] = S))
    : (S = t[17]);
  let C;
  t[18] === l
    ? (C = t[19])
    : ((C =
        l != null &&
        (0, q.jsx)(K.Item, {
          role: `status`,
          children: (0, q.jsxs)(K.ItemLabel, {
            children: [
              l === `setup` &&
                (0, q.jsx)(s, {
                  id: `restricted.aeon.doctor.setup.success`,
                  defaultMessage: `Recurring doctor is set up`,
                  description: `Confirmation in the dot summary that recurring health checks are scheduled`,
                }),
              l === `check-in` &&
                (0, q.jsx)(s, {
                  id: `restricted.aeon.doctor.checkInNow.requested`,
                  defaultMessage: `Check-in requested`,
                  description: `Confirmation in the dot summary that a doctor check was requested; the check may still be running`,
                }),
              l === `error` &&
                (0, q.jsx)(s, {
                  id: `restricted.aeon.doctor.request.error`,
                  defaultMessage: `Doctor unavailable · Try again`,
                  description: `Error in the dot summary when setting up the doctor or requesting a check-in fails; either button can be retried`,
                }),
            ],
          }),
        })),
      (t[18] = l),
      (t[19] = C));
  let w;
  t[20] === d
    ? (w = t[21])
    : ((w =
        d != null &&
        (0, q.jsx)(K.Item, {
          children: (0, q.jsx)(Qe, {
            href: d,
            initiator: `external_link`,
            children: (0, q.jsx)(s, {
              id: `restricted.aeon.doctor.schedule.link`,
              defaultMessage: `View doctor schedule`,
              description: `Link in the dot summary to inspect when health checks will run and see recent checks in Temporal`,
            }),
          }),
        })),
      (t[20] = d),
      (t[21] = w));
  let T;
  return (
    t[22] !== C || t[23] !== w || t[24] !== v || t[25] !== S
      ? ((T = (0, q.jsxs)(K.Section, {
          sectionKey: `orbit-doctor`,
          mode: `headerless`,
          children: [v, S, C, w],
        })),
        (t[22] = C),
        (t[23] = w),
        (t[24] = v),
        (t[25] = S),
        (t[26] = T))
      : (T = t[26]),
    T
  );
}
var gt, _t, q;
function vt() {
  return (vt = e(() => {
    ((gt = z()), f(), (_t = H()), P(), qe(), Fe(), Ze(), me(), $e(), (q = V()));
  }))();
}
function yt(e) {
  let t = (0, J.c)(11),
    { conversationId: n, isArchived: r, mode: i, onSetup: a } = e,
    o = i === void 0 ? `section` : i,
    s = _(),
    c = U(W, n),
    l = U(ve, n),
    u;
  t[0] !== n || t[1] !== c || t[2] !== s || t[3] !== r || t[4] !== o || t[5] !== a || t[6] !== l
    ? ((u =
        r || xe(c, l) !== `durable`
          ? (0, X.jsx)(Ct, {
              disabled: !0,
              mode: o,
              title: s.formatMessage({
                id: `restricted.aeon.email.settings.cloudRequired.dot`,
                defaultMessage: `Email setup is available for active cloud dot assistants`,
                description: `Explanation in email settings when the assistant is archived or runs locally and cannot own a cloud email binding. Keep dot lowercase and untranslated.`,
              }),
            })
          : (0, X.jsx)(bt, { conversationId: n, mode: o, onSetup: a })),
      (t[0] = n),
      (t[1] = c),
      (t[2] = s),
      (t[3] = r),
      (t[4] = o),
      (t[5] = a),
      (t[6] = l),
      (t[7] = u))
    : (u = t[7]);
  let d = u,
    f;
  return (
    t[8] !== d || t[9] !== o
      ? ((f =
          o === `section`
            ? (0, X.jsx)(K.Section, { sectionKey: `aeon-email`, mode: `headerless`, children: d })
            : d),
        (t[8] = d),
        (t[9] = o),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
function bt(e) {
  let t = (0, J.c)(14),
    { conversationId: n, mode: r, onSetup: i } = e,
    a = v(ce),
    o = v(Se),
    { data: s, isPending: c, isError: l, refetch: u } = U(Xe, n);
  if (a == null || o == null) return null;
  if (r === `setup` && c) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, X.jsx)(ot, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  if (c || l) {
    let e;
    t[1] === u ? (e = t[2]) : ((e = () => void u()), (t[1] = u), (t[2] = e));
    let n;
    return (
      t[3] !== l || t[4] !== c || t[5] !== r || t[6] !== e
        ? ((n = (0, X.jsx)(Ct, { mode: r, isLoading: c, isError: l, onClick: e })),
          (t[3] = l),
          (t[4] = c),
          (t[5] = r),
          (t[6] = e),
          (t[7] = n))
        : (n = t[7]),
      n
    );
  }
  if (s == null) return null;
  let d = `${a}:${o}:${s.id}:${n}`,
    f;
  return (
    t[8] !== n || t[9] !== r || t[10] !== i || t[11] !== s.id || t[12] !== d
      ? ((f = (0, X.jsx)(xt, { aeonId: s.id, mode: r, threadId: n, onSetup: i }, d)),
        (t[8] = n),
        (t[9] = r),
        (t[10] = i),
        (t[11] = s.id),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
function xt(e) {
  let t = (0, J.c)(60),
    { aeonId: n, mode: r, threadId: i, onSetup: o } = e,
    l = c(a),
    u = _(),
    d = v(ce),
    f = v(Se),
    { mutate: p, isPending: m } = U(ct, n),
    [h, g] = (0, Y.useState)(!1),
    [y, b] = (0, Y.useState)(!1),
    [x, S] = (0, Y.useState)(`claim`),
    C = (0, Y.useRef)(null),
    w = Ge(),
    T = (0, Y.useRef)(-1 / 0),
    E;
  t[0] !== d || t[1] !== w || t[2] !== l || t[3] !== f
    ? ((E = (e, t) => {
        let n = () =>
          w() &&
          e > T.current &&
          l.get(ce) === d &&
          l.get(Se) === f &&
          document.visibilityState === `visible`;
        n() &&
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              n() &&
                He(l).hist(`orbit_email`, `claim_visible_result_ms`, { outcome: t }, performance.now() - e);
            });
          });
      }),
      (t[0] = d),
      (t[1] = w),
      (t[2] = l),
      (t[3] = f),
      (t[4] = E))
    : (E = t[4]);
  let D = E,
    { data: O, isPending: k, isError: A, error: ee } = U(ft, n),
    j;
  t[5] !== ee || t[6] !== A
    ? ((j = A && lt(ee).code === `workspace_disabled`), (t[5] = ee), (t[6] = A), (t[7] = j))
    : (j = t[7]);
  let M = j,
    N = !A && O?.status === `linked` ? O.email_address : null;
  if ((N == null && y && b(!1), r === `setup`)) {
    if (k) {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(ot, {})), (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    if (N != null && O?.narrow_email_consent_version === 1) {
      let e;
      return (
        t[9] !== N || t[10] !== i
          ? ((e = (0, X.jsx)(at, { conversationId: i, method: `email`, destination: N })),
            (t[9] = N),
            (t[10] = i),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    let e;
    return (
      t[12] !== n || t[13] !== D || t[14] !== i
        ? ((e = (0, X.jsx)(Tt, {
            aeonId: n,
            threadId: i,
            initialMode: `claim`,
            embedded: !0,
            onClaimResult: D,
          })),
          (t[12] = n),
          (t[13] = D),
          (t[14] = i),
          (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  let P = A ? void 0 : O,
    ne = m || M,
    F;
  t[16] !== u || t[17] !== M
    ? ((F = M
        ? u.formatMessage({
            id: `restricted.aeon.email.settings.workspaceDisabled`,
            defaultMessage: `Email is disabled by your workspace admin`,
            description: `Explanation on the disabled dot email control when the ChatGPT workspace admin has denied dot or Email access`,
          })
        : void 0),
      (t[16] = u),
      (t[17] = M),
      (t[18] = F))
    : (F = t[18]);
  let ie = N == null ? `dialog` : `menu`,
    I;
  t[19] !== N || t[20] !== o
    ? ((I = N == null && o != null ? () => o(C.current) : void 0), (t[19] = N), (t[20] = o), (t[21] = I))
    : (I = t[21]);
  let L;
  t[22] !== A ||
  t[23] !== k ||
  t[24] !== r ||
  t[25] !== P ||
  t[26] !== ne ||
  t[27] !== F ||
  t[28] !== ie ||
  t[29] !== I
    ? ((L = (0, X.jsx)(Ct, {
        ref: C,
        mode: r,
        email: P,
        isLoading: k,
        isError: A,
        disabled: ne,
        title: F,
        "aria-haspopup": ie,
        onClick: I,
      })),
      (t[22] = A),
      (t[23] = k),
      (t[24] = r),
      (t[25] = P),
      (t[26] = ne),
      (t[27] = F),
      (t[28] = ie),
      (t[29] = I),
      (t[30] = L))
    : (L = t[30]);
  let R = L,
    oe = N == null && o != null ? R : null,
    z;
  t[31] !== d ||
  t[32] !== n ||
  t[33] !== N ||
  t[34] !== y ||
  t[35] !== r ||
  t[36] !== h ||
  t[37] !== l ||
  t[38] !== R ||
  t[39] !== p ||
  t[40] !== f
    ? ((z =
        N == null
          ? null
          : (0, X.jsx)(St, {
              emailAddress: N,
              open: y,
              onOpenChange: b,
              onCloseAutoFocus: (e) => {
                h && e.preventDefault();
              },
              triggerButton: R,
              onDebug:
                r === `shortcut`
                  ? void 0
                  : () => {
                      (S(`debug`), g(!0));
                    },
              onRemove: () => {
                if (l.get(ct, n).isPending) return;
                b(!1);
                let e = l.get(te),
                  t = e.info(
                    (0, X.jsx)(s, {
                      id: `restricted.aeon.email.disconnecting`,
                      defaultMessage: `Disconnecting Email…`,
                      description: `Progress while disconnecting a dot's email address`,
                    }),
                    { duration: 0, hasCloseButton: !1, leading: (0, X.jsx)(ae, {}) },
                  ),
                  r = !1,
                  i = l.watch((e) => {
                    let { get: n } = e;
                    (n(ce) !== d || n(Se) !== f) && ((r = !0), t.close());
                  });
                p(
                  { type: `unlink` },
                  {
                    onSettled: (a, o) => {
                      if ((i(), t.close(), r)) return;
                      let c = l.get(ft, n);
                      if (o == null || (c.isSuccess && c.data.status === `unlinked`)) {
                        e.success(
                          (0, X.jsx)(s, {
                            id: `restricted.aeon.email.disconnected`,
                            defaultMessage: `Email disconnected`,
                            description: `Confirmation after disconnecting the dot while keeping the user's email address`,
                          }),
                        );
                        return;
                      }
                      e.danger(
                        (0, X.jsx)(s, {
                          id: `restricted.aeon.email.removeFailed`,
                          defaultMessage: `Couldn’t disconnect Email. Please try again`,
                          description: `Error when disconnecting an email address from a dot fails`,
                        }),
                        {
                          errorAnalytics: {
                            toastId: `orbit-email-remove-failed`,
                            operation: `orbit-email-remove`,
                            retryable: !0,
                          },
                        },
                      );
                    },
                  },
                );
              },
            })),
      (t[31] = d),
      (t[32] = n),
      (t[33] = N),
      (t[34] = y),
      (t[35] = r),
      (t[36] = h),
      (t[37] = l),
      (t[38] = R),
      (t[39] = p),
      (t[40] = f),
      (t[41] = z))
    : (z = t[41]);
  let B;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        (b(!1), e ? S(`claim`) : (T.current = performance.now()), g(e));
      }),
      (t[42] = B))
    : (B = t[42]);
  let se = N == null && o == null ? R : void 0,
    V;
  t[43] === y
    ? (V = t[44])
    : ((V = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), y || C.current?.focus());
        },
      }),
      (t[43] = y),
      (t[44] = V));
  let H;
  t[45] !== n || t[46] !== x || t[47] !== h || t[48] !== D || t[49] !== i
    ? ((H = h
        ? (0, X.jsx)(Y.Suspense, {
            fallback: (0, X.jsx)(wt, {}),
            children: (0, X.jsx)(Tt, {
              aeonId: n,
              threadId: i,
              initialMode: x,
              onClaimResult: D,
              onLinked: () => {
                (g(!1), b(!0));
              },
            }),
          })
        : null),
      (t[45] = n),
      (t[46] = x),
      (t[47] = h),
      (t[48] = D),
      (t[49] = i),
      (t[50] = H))
    : (H = t[50]);
  let W;
  t[51] !== h || t[52] !== se || t[53] !== V || t[54] !== H
    ? ((W = (0, X.jsx)(re, {
        open: h,
        onOpenChange: B,
        size: `compact`,
        triggerContent: se,
        contentProps: V,
        children: H,
      })),
      (t[51] = h),
      (t[52] = se),
      (t[53] = V),
      (t[54] = H),
      (t[55] = W))
    : (W = t[55]);
  let G;
  return (
    t[56] !== z || t[57] !== W || t[58] !== oe
      ? ((G = (0, X.jsxs)(X.Fragment, { children: [oe, z, W] })),
        (t[56] = z),
        (t[57] = W),
        (t[58] = oe),
        (t[59] = G))
      : (G = t[59]),
    G
  );
}
function St(e) {
  let t = (0, J.c)(30),
    {
      emailAddress: n,
      open: r,
      onOpenChange: a,
      onCloseAutoFocus: o,
      triggerButton: c,
      onDebug: u,
      onRemove: d,
    } = e,
    f;
  t[0] === n
    ? (f = t[1])
    : ((f = (0, X.jsx)(g.SectionLabel, {
        children: (0, X.jsx)(`span`, { className: `break-all select-text`, children: n }),
      })),
      (t[0] = n),
      (t[1] = f));
  let p;
  t[2] === n ? (p = t[3]) : ((p = (e) => void R(n, e)), (t[2] = n), (t[3] = p));
  let m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(s, {
        id: `restricted.aeon.email.actions.copy`,
        defaultMessage: `Copy email address`,
        description: `Dot email shortcut action that copies its linked email address`,
      })),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] === p
    ? (h = t[6])
    : ((h = (0, X.jsx)(g.Item, { leftIconAsset: l, onClick: p, children: m })), (t[5] = p), (t[6] = h));
  let _ = `mailto:${encodeURIComponent(n)}`,
    v;
  t[7] !== n || t[8] !== a
    ? ((v = (e) => {
        (a(!1), Ce({ event: e, href: `mailto:${encodeURIComponent(n)}`, initiator: `side_panel_menu` }));
      }),
      (t[7] = n),
      (t[8] = a),
      (t[9] = v))
    : (v = t[9]);
  let b;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(s, {
        id: `restricted.aeon.email.actions.open`,
        defaultMessage: `Open Email`,
        description: `Dot email shortcut action that opens the user's email app with the dot's linked address as recipient`,
      })),
      (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] !== _ || t[12] !== v
    ? ((x = (0, X.jsx)(g.Item, { leftIconAsset: T, href: _, onClick: v, children: b })),
      (t[11] = _),
      (t[12] = v),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, X.jsx)(g.Separator, {})), (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(s, {
        id: `restricted.aeon.email.actions.remove`,
        defaultMessage: `Remove`,
        description: `Disconnects the email address from this dot while keeping the address owned by the user`,
      })),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] === d
    ? (w = t[17])
    : ((w = (0, X.jsx)(g.Item, { leftIconAsset: y, tone: `destructive`, onSelect: d, children: C })),
      (t[16] = d),
      (t[17] = w));
  let E;
  t[18] === u
    ? (E = t[19])
    : ((E =
        u == null
          ? null
          : (0, X.jsx)(g.Item, {
              onSelect: u,
              children: (0, X.jsx)(`span`, {
                className: `text-xs text-secondary`,
                children: (0, X.jsx)(s, {
                  id: `restricted.aeon.email.actions.debug`,
                  defaultMessage: `Debug`,
                  description: `Opens debug controls for repairing the dot's email setup or removing its linked address`,
                }),
              }),
            })),
      (t[18] = u),
      (t[19] = E));
  let D;
  return (
    t[20] !== o ||
    t[21] !== a ||
    t[22] !== r ||
    t[23] !== f ||
    t[24] !== w ||
    t[25] !== E ||
    t[26] !== h ||
    t[27] !== x ||
    t[28] !== c
      ? ((D = (0, X.jsxs)(i, {
          side: `bottom`,
          align: `center`,
          contentWidth: `menu`,
          open: r,
          onOpenChange: a,
          onCloseAutoFocus: o,
          triggerButton: c,
          children: [f, h, x, S, w, E],
        })),
        (t[20] = o),
        (t[21] = a),
        (t[22] = r),
        (t[23] = f),
        (t[24] = w),
        (t[25] = E),
        (t[26] = h),
        (t[27] = x),
        (t[28] = c),
        (t[29] = D))
      : (D = t[29]),
    D
  );
}
function Ct(e) {
  let t = (0, J.c)(32),
    n,
    r,
    i,
    a,
    o,
    c,
    l;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (c = t[6]), (l = t[7]))
    : (({ email: r, mode: a, isLoading: o, isError: c, disabled: n, title: l, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = c),
      (t[7] = l));
  let u = a === void 0 ? `section` : a,
    f = o !== void 0 && o,
    p = c !== void 0 && c,
    m = _(),
    h = !f && !p && r?.status === `linked` ? r : void 0,
    g = l,
    v = i[`aria-label`];
  if (u === `shortcut` && f) {
    let e;
    (t[8] !== m || t[9] !== l
      ? ((e = l ?? m.formatMessage(Et.loading)), (t[8] = m), (t[9] = l), (t[10] = e))
      : (e = t[10]),
      (g = e));
  } else if (u === `shortcut` && p) {
    let e;
    (t[11] !== m || t[12] !== l
      ? ((e = l ?? m.formatMessage(Et.unavailable)), (t[11] = m), (t[12] = l), (t[13] = e))
      : (e = t[13]),
      (g = e));
  } else if (u === `shortcut` && h?.email_address) {
    g = l ?? h.email_address;
    let e;
    (t[14] !== v || t[15] !== m || t[16] !== h
      ? ((e =
          v ??
          m.formatMessage(
            {
              id: `restricted.aeon.email.shortcut.addressLabel`,
              defaultMessage: `Email: {emailAddress}`,
              description: `Accessible label for the button opening the agent's linked email menu. emailAddress is the full email address.`,
            },
            { emailAddress: h.email_address },
          )),
        (t[14] = v),
        (t[15] = m),
        (t[16] = h),
        (t[17] = e))
      : (e = t[17]),
      (v = e));
  }
  let y;
  if (u === `shortcut`) {
    let e;
    (t[18] === h
      ? (e = t[19])
      : ((e = h?.local_part
          ? (0, X.jsx)(`span`, { className: `truncate`, children: h.local_part })
          : (0, X.jsx)(s, {
              id: `restricted.aeonMessaging.emailShortcut`,
              defaultMessage: `Email`,
              description: `Button opening the dot's email settings`,
            })),
        (t[18] = h),
        (t[19] = e)),
      (y = e));
  } else if (f) {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(s, { ...Et.loading })), (t[20] = e))
      : (e = t[20]),
      (y = e));
  } else if (p) {
    let e;
    (t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(s, { ...Et.unavailable })), (t[21] = e))
      : (e = t[21]),
      (y = e));
  } else if (r?.status === `linked`) y = r.email_address;
  else {
    let e;
    (t[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(s, {
          id: `restricted.aeon.email.summary.add`,
          defaultMessage: `Add email`,
          description: `Button in the pinned dot summary that opens a dialog to claim a new email address or link an existing address`,
        })),
        (t[22] = e))
      : (e = t[22]),
      (y = e));
  }
  let b = u === `setup` ? `section` : u,
    x;
  t[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = (0, X.jsx)(d, {})), (t[23] = x)) : (x = t[23]);
  let S = n || f,
    C;
  return (
    t[24] !== v || t[25] !== f || t[26] !== y || t[27] !== i || t[28] !== g || t[29] !== b || t[30] !== S
      ? ((C = (0, X.jsx)(rt, {
          ...i,
          title: g,
          mode: b,
          icon: x,
          disabled: S,
          loading: f,
          "aria-busy": f,
          "aria-label": v,
          children: y,
        })),
        (t[24] = v),
        (t[25] = f),
        (t[26] = y),
        (t[27] = i),
        (t[28] = g),
        (t[29] = b),
        (t[30] = S),
        (t[31] = C))
      : (C = t[31]),
    C
  );
}
function wt() {
  let e = (0, J.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, X.jsx)(S, {
        children: (0, X.jsx)(s, {
          id: `restricted.aeon.email.dialog.loadingTitle`,
          defaultMessage: `Email`,
          description: `Title of the dot email setup dialog while its contents are loading`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, X.jsx)(ie, {
          children: (0, X.jsx)(ne, {
            children: (0, X.jsx)(E, {
              title: t,
              subtitle: (0, X.jsx)(ee, {
                children: (0, X.jsx)(s, {
                  id: `restricted.aeon.email.settings.loading`,
                  defaultMessage: `Loading email settings…`,
                  description: `Loading indicator while reading the selected dot's email binding or available addresses`,
                }),
              }),
            }),
          }),
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
var J, Y, X, Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((J = z()),
      I(),
      o(),
      b(),
      f(),
      (Y = H()),
      P(),
      Ne(),
      qe(),
      Ke(),
      oe(),
      O(),
      r(),
      ue(),
      h(),
      M(),
      F(),
      B(),
      $e(),
      N(),
      Be(),
      pe(),
      he(),
      nt(),
      it(),
      st(),
      ut(),
      dt(),
      (X = V()),
      L(),
      (Tt = (0, Y.lazy)(async () => {
        let { EmailSettingsDialogBody: e } = await k(
          async () => {
            let { EmailSettingsDialogBody: e } = await import(`./dialog-9d2a86f6a26c.js`);
            return { EmailSettingsDialogBody: e };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
          import.meta.url,
        );
        return { default: e };
      })),
      (Et = n({
        loading: {
          id: `restricted.aeon.email.summary.loading`,
          defaultMessage: `Loading email…`,
          description: `Compact status in the pinned dot summary while its email binding is being read`,
        },
        unavailable: {
          id: `restricted.aeon.email.summary.unavailable`,
          defaultMessage: `Email unavailable`,
          description: `Email row in the pinned dot summary when the saved email binding cannot be read; opens recovery settings when the dot is accessible`,
        },
      })));
  }))();
}
function Ot(e) {
  let t = (0, Q.c)(5),
    { conversationId: n, layout: r, showActivityStatus: i } = e,
    a = r === void 0 ? `row` : r,
    o = i === void 0 || i,
    s = U(Je, n),
    c;
  return (
    t[0] !== n || t[1] !== s || t[2] !== a || t[3] !== o
      ? ((c =
          s && n != null ? (0, $.jsx)(Rt, { conversationId: n, layout: a, showActivityStatus: o }) : null),
        (t[0] = n),
        (t[1] = s),
        (t[2] = a),
        (t[3] = o),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
function kt(e) {
  let t = (0, Q.c)(5),
    { conversationId: n, mode: r, onSetup: i } = e,
    a = r === void 0 ? `content` : r,
    o = Bt(n),
    s;
  return (
    t[0] !== n || t[1] !== o || t[2] !== a || t[3] !== i
      ? ((s = (0, $.jsx)(yt, { conversationId: n, isArchived: o, mode: a, onSetup: i })),
        (t[0] = n),
        (t[1] = o),
        (t[2] = a),
        (t[3] = i),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function At({
  renderAppearancePicker: e,
  description: n = (0, $.jsx)(s, {
    id: `restricted.aeon.summary.identity.productName.dot`,
    defaultMessage: `Your private {productName}`,
    description: `Description beneath the agent's name in its summary panel; productName is the untranslated term for the user's agent, not the assistant's custom name`,
    values: { productName: (0, $.jsx)(`strong`, { children: `dot` }) },
  }),
  activityStatus: r,
  identity: i = `orbit-draft`,
  mode: a = `section`,
  layout: o = `row`,
}) {
  let c = U(i === `legacy-draft` && Re, i),
    l = { duration: v(t) ? 0 : 150 / 1e3, ease: D },
    u = (0, $.jsxs)(`div`, {
      className: `flex min-w-0 items-center gap-token-button-composer-gap select-none`,
      children: [
        (0, $.jsx)(K.ItemLeading, {
          variant: o === `compact` ? `custom` : `intrinsic`,
          children: (0, $.jsx)(C.div, {
            className: `shrink-0`,
            layout: o !== `row`,
            layoutDependency: o,
            transition: l,
            children: e(o === `row` ? `profile` : o),
          }),
        }),
        (0, $.jsxs)(C.div, {
          className: `flex min-w-0 flex-1 flex-col text-base`,
          layout: o !== `row` && `position`,
          layoutDependency: o,
          transition: l,
          children: [
            (0, $.jsx)(`div`, {
              className: A(
                `-ms-2.5 flex min-w-0 items-start`,
                o === `compact` ? `text-sm font-medium` : `text-lg leading-6.5`,
                o === `hero` && `font-semibold`,
                o === `row` && `font-normal`,
              ),
              children: e(o === `compact` ? `compact-name` : `name`),
            }),
            (0, $.jsx)(`div`, {
              hidden: o === `compact`,
              children:
                r ??
                (o !== `hero` && n != null
                  ? (0, $.jsx)(`p`, {
                      className: `text-sm break-words text-secondary select-text`,
                      children: c
                        ? (0, $.jsx)(s, {
                            id: `restricted.aeon.summary.identity.legacy`,
                            defaultMessage: `Legacy Aeon`,
                            description: `Description beneath a legacy agent's name in the new-draft summary panel, distinguishing it from a new dot`,
                          })
                        : n,
                    })
                  : null),
            }),
          ],
        }),
      ],
    });
  return a === `content`
    ? u
    : (0, $.jsx)(K.Section, { sectionKey: `aeon-identity`, mode: `headerless`, children: u });
}
function jt(e) {
  let t = (0, Q.c)(8),
    {
      isActive: n,
      lastActiveAtMs: r,
      latestActivityAtMs: i,
      isPaused: a,
      pausedAtMs: o,
      pauseResumeAction: s,
    } = e,
    c = i === void 0 ? null : i,
    l = a !== void 0 && a,
    u = o === void 0 ? null : o;
  if (l) {
    let e;
    return (
      t[0] !== s || t[1] !== u
        ? ((e = (0, $.jsx)(Ft, { pausedAtMs: u, pauseResumeAction: s })), (t[0] = s), (t[1] = u), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let d = c ?? r;
  if (n) {
    let e;
    return (
      t[3] === s ? (e = t[4]) : ((e = (0, $.jsx)(Mt, { pauseResumeAction: s })), (t[3] = s), (t[4] = e)),
      e
    );
  }
  let f;
  return (
    t[5] !== d || t[6] !== s
      ? ((f = d == null ? null : (0, $.jsx)(Nt, { lastActiveAtMs: d, pauseResumeAction: s })),
        (t[5] = d),
        (t[6] = s),
        (t[7] = f))
      : (f = t[7]),
    f
  );
}
function Mt(e) {
  let t = (0, Q.c)(3),
    { pauseResumeAction: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(s, {
        id: `restricted.aeon.summary.active`,
        defaultMessage: `Active`,
        description: `Status beneath a dot's profile while it is working, waiting on subtasks, or was active within the recent-activity grace period`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, $.jsx)(Z, { pauseResumeAction: n, children: r })), (t[1] = n), (t[2] = i)),
    i
  );
}
function Nt(e) {
  let t = (0, Q.c)(5),
    { lastActiveAtMs: n, pauseResumeAction: r } = e,
    i = n + Wt,
    a = Te(i),
    o;
  return (
    t[0] !== i || t[1] !== n || t[2] !== a || t[3] !== r
      ? ((o =
          a.getTime() < i
            ? (0, $.jsx)(Mt, { pauseResumeAction: r })
            : (0, $.jsx)(Pt, { lastActiveAtMs: n, pauseResumeAction: r })),
        (t[0] = i),
        (t[1] = n),
        (t[2] = a),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function Pt(e) {
  let t = (0, Q.c)(9),
    { lastActiveAtMs: n, pauseResumeAction: r } = e,
    i = le(),
    a;
  t[0] !== n || t[1] !== i
    ? ((a = ge(new Date(n).toISOString(), i)), (t[0] = n), (t[1] = i), (t[2] = a))
    : (a = t[2]);
  let { unit: o, value: c } = a,
    l = -c,
    d;
  t[3] !== l || t[4] !== o
    ? ((d = (0, $.jsx)(s, {
        id: `restricted.aeon.summary.activeRelativeTimeNatural`,
        defaultMessage: `Active {time}`,
        description: `Relative timestamp beneath a dot's profile showing when it most recently did work, after the recent-activity grace period; time is a localized relative phrase such as '4 minutes ago'`,
        values: { time: (0, $.jsx)(u, { numeric: `always`, unit: o, value: l }, `active-relative-time`) },
      })),
      (t[3] = l),
      (t[4] = o),
      (t[5] = d))
    : (d = t[5]);
  let f;
  return (
    t[6] !== r || t[7] !== d
      ? ((f = (0, $.jsx)(Z, { pauseResumeAction: r, children: d })), (t[6] = r), (t[7] = d), (t[8] = f))
      : (f = t[8]),
    f
  );
}
function Ft(e) {
  let t = (0, Q.c)(15),
    { pausedAtMs: n, pauseResumeAction: r } = e,
    i = le(),
    a = n == null ? null : n + Wt,
    o = Te(a),
    c = a != null && o.getTime() < a ? o : i;
  if (n == null) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(s, {
          id: `restricted.aeon.summary.paused`,
          defaultMessage: `Paused`,
          description: `Status beneath a dot's name when it is paused but the pause time is unknown`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] === r
        ? (n = t[2])
        : ((n = (0, $.jsx)(Z, { pauseResumeAction: r, children: e })), (t[1] = r), (t[2] = n)),
      n
    );
  }
  if (c.getTime() < n + Wt) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(s, {
          id: `restricted.aeon.summary.pausedJustNow`,
          defaultMessage: `Paused just now`,
          description: `Status beneath a dot's name during the first minute after the user pauses it`,
        })),
        (t[3] = e))
      : (e = t[3]);
    let n;
    return (
      t[4] === r
        ? (n = t[5])
        : ((n = (0, $.jsx)(Z, { pauseResumeAction: r, children: e })), (t[4] = r), (t[5] = n)),
      n
    );
  }
  let l;
  t[6] !== c || t[7] !== n
    ? ((l = ge(new Date(n).toISOString(), c)), (t[6] = c), (t[7] = n), (t[8] = l))
    : (l = t[8]);
  let { unit: d, value: f } = l,
    p = -f,
    m;
  t[9] !== p || t[10] !== d
    ? ((m = (0, $.jsx)(s, {
        id: `restricted.aeon.summary.pausedRelativeTime`,
        defaultMessage: `Paused {time}`,
        description: `Status beneath a dot's name showing how long ago the user paused it`,
        values: { time: (0, $.jsx)(u, { numeric: `always`, unit: d, value: p }, `paused-relative-time`) },
      })),
      (t[9] = p),
      (t[10] = d),
      (t[11] = m))
    : (m = t[11]);
  let h;
  return (
    t[12] !== r || t[13] !== m
      ? ((h = (0, $.jsx)(Z, { pauseResumeAction: r, children: m })), (t[12] = r), (t[13] = m), (t[14] = h))
      : (h = t[14]),
    h
  );
}
function It(e) {
  let t = (0, Q.c)(7),
    { conversationId: n, pauseResumeAction: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = (e) => Ve(n, e)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === n ? (o = t[3]) : ((o = () => ke(n)), (t[2] = n), (t[3] = o));
  let s = (0, Ut.useSyncExternalStore)(a, o, Lt),
    c;
  return (
    t[4] !== r || t[5] !== s
      ? ((c = (0, $.jsx)(Ft, { pausedAtMs: s, pauseResumeAction: r })), (t[4] = r), (t[5] = s), (t[6] = c))
      : (c = t[6]),
    c
  );
}
function Lt() {
  return null;
}
function Z(e) {
  let t = (0, Q.c)(5),
    { children: n, pauseResumeAction: r } = e;
  if (r != null) {
    let e;
    return (
      t[0] !== n || t[1] !== r
        ? ((e = (0, $.jsx)(ye, { ...r, className: `leading-5 text-tertiary`, statusLabel: n })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let i;
  return (
    t[3] === n
      ? (i = t[4])
      : ((i = (0, $.jsx)(`p`, { className: `leading-5 text-tertiary`, children: n })),
        (t[3] = n),
        (t[4] = i)),
    i
  );
}
function Rt(e) {
  let t = (0, Q.c)(24),
    { activityStatus: n, conversationId: r, layout: i, showActivityStatus: a } = e,
    o = Bt(r),
    s = (0, Ut.useRef)(null),
    c;
  t[0] === r
    ? (c = t[1])
    : ((c = (e) => {
        let t = e === `name` || e === `compact-name`;
        return (0, $.jsx)(tt, {
          ref: t ? void 0 : s,
          conversationId: r,
          variant: e,
          onTrigger: t ? (e) => s.current?.open(e) : void 0,
        });
      }),
      (t[0] = r),
      (t[1] = c));
  let l;
  t[2] === i
    ? (l = t[3])
    : ((l =
        i === `hero`
          ? (0, $.jsx)(`div`, {
              className: `invisible col-start-1 row-start-1`,
              "aria-hidden": !0,
              children: (0, $.jsx)(Mt, {}),
            })
          : null),
      (t[2] = i),
      (t[3] = l));
  let u;
  t[4] !== n || t[5] !== r || t[6] !== a
    ? ((u = a
        ? (0, $.jsx)(`div`, {
            className: `col-start-1 row-start-1 flex flex-col`,
            children: n ?? (0, $.jsx)(zt, { conversationId: r }, r),
          })
        : null),
      (t[4] = n),
      (t[5] = r),
      (t[6] = a),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] !== l || t[9] !== u
    ? ((d = (0, $.jsxs)(`div`, { className: `grid`, children: [l, u] })), (t[8] = l), (t[9] = u), (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] !== i || t[12] !== c || t[13] !== d
    ? ((f = (0, $.jsx)(At, {
        description: null,
        layout: i,
        renderAppearancePicker: c,
        activityStatus: d,
        mode: `content`,
      })),
      (t[11] = i),
      (t[12] = c),
      (t[13] = d),
      (t[14] = f))
    : (f = t[14]);
  let p = i === `compact`,
    m;
  t[15] !== r || t[16] !== o
    ? ((m = (0, $.jsx)(ht, { conversationId: r, isArchived: o }, r)), (t[15] = r), (t[16] = o), (t[17] = m))
    : (m = t[17]);
  let h;
  t[18] !== p || t[19] !== m
    ? ((h = (0, $.jsx)(`div`, { hidden: p, children: m })), (t[18] = p), (t[19] = m), (t[20] = h))
    : (h = t[20]);
  let g;
  return (
    t[21] !== f || t[22] !== h
      ? ((g = (0, $.jsxs)($.Fragment, { children: [f, h] })), (t[21] = f), (t[22] = h), (t[23] = g))
      : (g = t[23]),
    g
  );
}
function zt(e) {
  let t = (0, Q.c)(17),
    { conversationId: n } = e,
    r = U(W, n),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = { enabled: !1 }), (t[0] = i)) : (i = t[0]);
  let { data: a } = U(Xe, n, i),
    o = a?.messaging_room_id ?? void 0,
    s;
  t[1] !== n || t[2] !== o
    ? ((s = { conversationId: n, roomId: o }), (t[1] = n), (t[2] = o), (t[3] = s))
    : (s = t[3]);
  let c = U(je, s),
    l = Bt(n),
    u = U(we, n),
    d;
  t[4] === c
    ? (d = t[5])
    : ((d = c == null ? void 0 : (0, $.jsx)(pt, { heading: c.heading, state: c.state })),
      (t[4] = c),
      (t[5] = d));
  let f = c != null,
    p = u === `stopped`,
    m;
  t[6] !== n || t[7] !== r || t[8] !== l || t[9] !== u
    ? ((m =
        u === `off` || u === `failed`
          ? void 0
          : {
              conversationId: n,
              executionHostId: r,
              isActionEnabled: !l,
              isResponseInProgress: u === `working`,
            }),
      (t[6] = n),
      (t[7] = r),
      (t[8] = l),
      (t[9] = u),
      (t[10] = m))
    : (m = t[10]);
  let h;
  return (
    t[11] !== n || t[12] !== d || t[13] !== f || t[14] !== p || t[15] !== m
      ? ((h = (0, $.jsx)(Vt, {
          conversationId: n,
          liveActivityLabel: d,
          isActive: f,
          isPaused: p,
          pauseResumeAction: m,
        })),
        (t[11] = n),
        (t[12] = d),
        (t[13] = f),
        (t[14] = p),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
function Bt(e) {
  let t = U(Ye, e),
    n = se();
  return t || n.state?.archivedConversationPreview === !0;
}
function Vt(e) {
  let t = (0, Q.c)(18),
    { conversationId: n, liveActivityLabel: r, isActive: i, isPaused: o, pauseResumeAction: s } = e,
    l = c(a),
    [u, d] = (0, Ut.useState)(null),
    f = U(Ee, n),
    p = U(de, n),
    m = U(Le, i && u != null ? null : n),
    h = U(Ue, n),
    g = U(De, n),
    _ = m ?? p ?? f;
  u == null && _ != null && d(_);
  let v, y;
  if (
    (t[0] !== n || t[1] !== p || t[2] !== f || t[3] !== l
      ? ((v = () => {
          p == null && f != null && Pe(l, n, f);
        }),
        (y = [n, p, f, l]),
        (t[0] = n),
        (t[1] = p),
        (t[2] = f),
        (t[3] = l),
        (t[4] = v),
        (t[5] = y))
      : ((v = t[4]), (y = t[5])),
    (0, Ut.useEffect)(v, y),
    o)
  ) {
    let e;
    return (
      t[6] !== n || t[7] !== s
        ? ((e = (0, $.jsx)(It, { conversationId: n, pauseResumeAction: s })),
          (t[6] = n),
          (t[7] = s),
          (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  let b;
  return (
    t[9] !== u ||
    t[10] !== i ||
    t[11] !== _ ||
    t[12] !== h ||
    t[13] !== m ||
    t[14] !== r ||
    t[15] !== s ||
    t[16] !== g
      ? ((b =
          r == null
            ? (0, $.jsx)(jt, {
                isActive: i,
                lastActiveAtMs: u ?? _,
                latestActivityAtMs: Ht(m, h, g),
                pauseResumeAction: s,
              })
            : (0, $.jsx)(Z, { pauseResumeAction: s, children: r })),
        (t[9] = u),
        (t[10] = i),
        (t[11] = _),
        (t[12] = h),
        (t[13] = m),
        (t[14] = r),
        (t[15] = s),
        (t[16] = g),
        (t[17] = b))
      : (b = t[17]),
    b
  );
}
function Ht(...e) {
  return e.reduce((e, t) => (t == null ? e : Math.max(e ?? t, t)), null);
}
var Q, Ut, $, Wt;
function Gt() {
  return (Gt = e(() => {
    ((Q = z()),
      x(),
      j(),
      f(),
      (Ut = H()),
      P(),
      w(),
      qe(),
      G(),
      fe(),
      B(),
      p(),
      $e(),
      m(),
      et(),
      _e(),
      be(),
      Ae(),
      Ie(),
      he(),
      vt(),
      Dt(),
      Me(),
      mt(),
      We(),
      ($ = V()),
      (Wt = 6e4));
  }))();
}
export { Vt as a, Ot as i, At as n, Gt as o, kt as r, Rt as t };
//# sourceMappingURL=aeon-summary-panel-identity-8a58b733681a.js.map
