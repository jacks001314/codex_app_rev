import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  KO as ee,
  LNt as s,
  LO as te,
  NSt as c,
  PBt as l,
  Qst as ne,
  RO as re,
  USt as ie,
  VSt as ae,
  WO as oe,
  XOt as u,
  Y3 as d,
  Z3 as se,
  ZSt as f,
  iCt as ce,
  okt as le,
  qO as ue,
  tkt as p,
  zO as m,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Djr as de,
  FWn as fe,
  IWn as h,
  Ojr as pe,
  ZUn as me,
  _Ir as g,
  b_ as he,
  e4n as _,
  eMr as ge,
  gIr as v,
  gXt as y,
  hIr as b,
  hXt as x,
  mIr as S,
  n4n as _e,
  nMr as C,
  xMr as ve,
  x_ as w,
  xjr as T,
  yMr as E,
} from "./app-initial-ad16eaadf81f.js";
var ye;
function D() {
  return (D = e(() => {
    ye = { $type: `protobuf_analytics_events.v1.ChatgptAmphoraBlackoutHoursClientBlocked` };
  }))();
}
function O(e) {
  let n = (0, xe.c)(71),
    { userId: r, accountId: i, timeZone: o, onClose: s } = e,
    c = t(ne),
    l = le(),
    u = ie(),
    { pathname: se } = ae(),
    f = ce(he),
    { data: h } = ce(ge),
    g = de(`67629032`),
    _ = pe(),
    v = h?.hasRecurringQuietHours === !0 && !h.quietHours.managedByParent && h.eligibleNowOrBefore === !0,
    [y, b] = (0, k.useState)(!1),
    x = (0, k.useRef)(!1),
    S;
  n[0] !== i || n[1] !== c || n[2] !== r
    ? ((S = function () {
        let e = c.get(he);
        return e.status === `allowed` && e.userId === r && e.accountId === i;
      }),
      (n[0] = i),
      (n[1] = c),
      (n[2] = r),
      (n[3] = S))
    : (S = n[3]);
  let C = S,
    w;
  n[4] !== C || n[5] !== c || n[6] !== r
    ? ((w = () => {
        !x.current &&
          C() &&
          ((x.current = !0),
          ve(c, ye, { userId: r }),
          ve(c, me, { type: fe.UPSELL_OR_MODAL_TYPE_BLOCKING_INITIAL_MODAL }));
      }),
      (n[4] = C),
      (n[5] = c),
      (n[6] = r),
      (n[7] = w))
    : (w = n[7]);
  let T = (0, k.useEffectEvent)(w),
    E;
  n[8] === T ? (E = n[9]) : ((E = () => T()), (n[8] = T), (n[9] = E));
  let D;
  if (
    (n[10] === f.status ? (D = n[11]) : ((D = [f.status]), (n[10] = f.status), (n[11] = D)),
    (0, k.useEffect)(E, D),
    f.status !== `allowed` || f.userId !== r || f.accountId !== i)
  )
    return null;
  let O, j, M, N, P, F, I, L, R, z, B;
  if (n[12] !== h?.quietHours || n[13] !== l || n[14] !== s || n[15] !== o) {
    let e = be(h?.quietHours, new Date(), o);
    ((N = oe),
      (z = !0),
      (B = `compact`),
      (P = !1),
      n[27] === s
        ? (F = n[28])
        : ((F = (e) => {
            e || s();
          }),
          (n[27] = s),
          (n[28] = F)),
      (M = a),
      (L = `select-none`),
      n[29] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((R = (0, A.jsx)(re, {
            title: (0, A.jsx)(ue, {
              children: (0, A.jsx)(p, {
                id: `chatGpt.quietHours.active.title`,
                defaultMessage: `Time for a break`,
                description: `Title of the notice shown when ChatGPT quiet hours are active`,
              }),
            }),
          })),
          (n[29] = R))
        : (R = n[29]),
      (j = m),
      (O = ee),
      (I =
        e == null
          ? (0, A.jsx)(p, {
              id: `chatGpt.quietHours.active.generic`,
              defaultMessage: `Quiet hours are in effect`,
              description: `Fallback quiet hours notice when the next allowed time cannot be determined safely`,
            })
          : (0, A.jsx)(p, {
              id: `chatGpt.quietHours.active.nextAllowed`,
              defaultMessage: `{day, select, today {You can use ChatGPT again today at {time}} other {You can use ChatGPT again tomorrow at {time}}}`,
              description: `Quiet hours notice explaining when ChatGPT becomes available again. day is today or tomorrow in the device timezone and time is the localized return time.`,
              values: {
                day: e.day,
                time: l.formatTime(e.at, { hour: `numeric`, minute: `2-digit`, timeZone: o }),
              },
            })),
      (n[12] = h?.quietHours),
      (n[13] = l),
      (n[14] = s),
      (n[15] = o),
      (n[16] = O),
      (n[17] = j),
      (n[18] = M),
      (n[19] = N),
      (n[20] = P),
      (n[21] = F),
      (n[22] = I),
      (n[23] = L),
      (n[24] = R),
      (n[25] = z),
      (n[26] = B));
  } else
    ((O = n[16]),
      (j = n[17]),
      (M = n[18]),
      (N = n[19]),
      (P = n[20]),
      (F = n[21]),
      (I = n[22]),
      (L = n[23]),
      (R = n[24]),
      (z = n[25]),
      (B = n[26]));
  let V;
  n[30] !== O || n[31] !== I
    ? ((V = (0, A.jsx)(O, { children: I })), (n[30] = O), (n[31] = I), (n[32] = V))
    : (V = n[32]);
  let H;
  n[33] !== j || n[34] !== V
    ? ((H = (0, A.jsx)(j, { children: V })), (n[33] = j), (n[34] = V), (n[35] = H))
    : (H = n[35]);
  let U;
  n[36] === y
    ? (U = n[37])
    : ((U =
        y &&
        (0, A.jsx)(m, {
          children: (0, A.jsx)(`div`, {
            role: `alert`,
            children: (0, A.jsx)(p, {
              id: `chatGpt.quietHours.active.logoutUnavailable`,
              defaultMessage: `Sign out is unavailable. Try again.`,
              description: `Retryable error when the existing sign-out command is not available in the current app session`,
            }),
          }),
        })),
      (n[36] = y),
      (n[37] = U));
  let W;
  n[38] === C
    ? (W = n[39])
    : ((W = () => {
        if (!C()) return;
        let e = _e(`logOut`, `modal.quiet-hours-modal`);
        b(!e);
      }),
      (n[38] = C),
      (n[39] = W));
  let G;
  n[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, A.jsx)(p, {
        id: `chatGpt.quietHours.active.signOut`,
        defaultMessage: `Sign out`,
        description: `Action in the quiet hours notice that starts the existing sign-out flow`,
      })),
      (n[40] = G))
    : (G = n[40]);
  let K;
  n[41] === W
    ? (K = n[42])
    : ((K = (0, A.jsx)(d, { type: `button`, color: `secondary`, onClick: W, children: G })),
      (n[41] = W),
      (n[42] = K));
  let q = h == null || (v && _),
    J;
  n[43] !== C || n[44] !== g || n[45] !== u || n[46] !== s || n[47] !== c || n[48] !== _
    ? ((J = () => {
        if (!C()) return;
        let e = c.get(ge).data;
        if (e == null) return;
        let t = e.hasRecurringQuietHours && !e.quietHours.managedByParent && e.eligibleNowOrBefore === !0;
        if (t && _) return;
        let n = t && g.get(`enable_chatgpt_time_management_settings`, !1);
        (s(), u(n ? `/settings/safety?view=quiet-hours` : `/settings/parental-controls`));
      }),
      (n[43] = C),
      (n[44] = g),
      (n[45] = u),
      (n[46] = s),
      (n[47] = c),
      (n[48] = _),
      (n[49] = J))
    : (J = n[49]);
  let Y;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, A.jsx)(p, {
        id: `chatGpt.quietHours.active.viewSettings`,
        defaultMessage: `View settings`,
        description: `Action in the quiet hours notice opening the user's quiet hours editor or parent-managed controls`,
      })),
      (n[50] = Y))
    : (Y = n[50]);
  let X;
  n[51] !== q || n[52] !== J
    ? ((X = (0, A.jsx)(d, { type: `button`, color: `primary`, disabled: q, onClick: J, children: Y })),
      (n[51] = q),
      (n[52] = J),
      (n[53] = X))
    : (X = n[53]);
  let Z;
  n[54] !== K || n[55] !== X
    ? ((Z = (0, A.jsx)(m, { children: (0, A.jsxs)(te, { children: [K, X] }) })),
      (n[54] = K),
      (n[55] = X),
      (n[56] = Z))
    : (Z = n[56]);
  let Q;
  n[57] !== M || n[58] !== H || n[59] !== U || n[60] !== Z || n[61] !== L || n[62] !== R
    ? ((Q = (0, A.jsxs)(M, { className: L, children: [R, H, U, Z] })),
      (n[57] = M),
      (n[58] = H),
      (n[59] = U),
      (n[60] = Z),
      (n[61] = L),
      (n[62] = R),
      (n[63] = Q))
    : (Q = n[63]);
  let $;
  return (
    n[64] !== N || n[65] !== P || n[66] !== F || n[67] !== Q || n[68] !== z || n[69] !== B
      ? (($ = (0, A.jsx)(N, { open: z, size: B, showDialogClose: P, onOpenChange: F, children: Q })),
        (n[64] = N),
        (n[65] = P),
        (n[66] = F),
        (n[67] = Q),
        (n[68] = z),
        (n[69] = B),
        (n[70] = $))
      : ($ = n[70]),
    $
  );
}
function be(e, t, n) {
  if (e?.status !== `loaded`) return null;
  try {
    let r = x(e.schedule, t, n);
    if (r == null) return null;
    let i = S(t, n),
      a = S(r, n);
    return v(a, i) ? { at: r, day: `today` } : v(a, i.add({ days: 1 })) ? { at: r, day: `tomorrow` } : null;
  } catch {
    return null;
  }
}
var xe, k, A;
function j() {
  return (j = e(() => {
    ((xe = l()),
      b(),
      g(),
      h(),
      D(),
      f(),
      (k = r()),
      u(),
      c(),
      C(),
      _(),
      se(),
      o(),
      i(),
      E(),
      n(),
      T(),
      w(),
      y(),
      (A = s()));
  }))();
}
j();
export { O as QuietHoursActiveDialog };
//# sourceMappingURL=dialog-a1e08a8df29f.js.map
