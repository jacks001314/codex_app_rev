import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Ext as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  VDt as ee,
  Vxt as te,
  _O as ne,
  _xt as s,
  cO as re,
  fO as c,
  gO as ie,
  jDt as l,
  lO as u,
  mO as ae,
  oO as oe,
  sO as se,
  t3 as d,
  vO as f,
  vzt as p,
  wot as m,
  wxt as ce,
  xMt as le,
  yzt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  E$n as g,
  Gg as ue,
  Gjr as _,
  Jjr as v,
  Kg as de,
  Kjr as y,
  NDr as fe,
  O$n as pe,
  PBn as me,
  QDr as b,
  XDr as x,
  _2t as S,
  eDr as C,
  g2t as w,
  jDr as he,
  oDr as ge,
  qjr as T,
  sDr as _e,
  vVn as ve,
  yVn as E,
} from "./app-initial-5851df3f6cb1.js";
var ye;
function D() {
  return (D = e(() => {
    ye = { $type: `protobuf_analytics_events.v1.ChatgptAmphoraBlackoutHoursClientBlocked` };
  }))();
}
function O(e) {
  let o = (0, xe.c)(71),
    { userId: s, accountId: c, timeZone: l, onClose: d } = e,
    f = a(n),
    p = ee(),
    m = r(),
    { pathname: le } = ce(),
    h = te(ue),
    { data: g } = te(he),
    _ = ge(`67629032`),
    v = _e(),
    de = g?.hasRecurringQuietHours === !0 && !g.quietHours.managedByParent && g.eligibleNowOrBefore === !0,
    [y, fe] = (0, k.useState)(!1),
    x = (0, k.useRef)(!1),
    S;
  o[0] !== c || o[1] !== f || o[2] !== s
    ? ((S = function () {
        let e = f.get(ue);
        return e.status === `allowed` && e.userId === s && e.accountId === c;
      }),
      (o[0] = c),
      (o[1] = f),
      (o[2] = s),
      (o[3] = S))
    : (S = o[3]);
  let C = S,
    w;
  o[4] !== C || o[5] !== f || o[6] !== s
    ? ((w = () => {
        !x.current &&
          C() &&
          ((x.current = !0),
          b(f, ye, { userId: s }),
          b(f, me, { type: ve.UPSELL_OR_MODAL_TYPE_BLOCKING_INITIAL_MODAL }));
      }),
      (o[4] = C),
      (o[5] = f),
      (o[6] = s),
      (o[7] = w))
    : (w = o[7]);
  let T = (0, k.useEffectEvent)(w),
    E;
  o[8] === T ? (E = o[9]) : ((E = () => T()), (o[8] = T), (o[9] = E));
  let D;
  if (
    (o[10] === h.status ? (D = o[11]) : ((D = [h.status]), (o[10] = h.status), (o[11] = D)),
    (0, k.useEffect)(E, D),
    h.status !== `allowed` || h.userId !== s || h.accountId !== c)
  )
    return null;
  let O, j, M, N, P, F, I, L, R, z, B;
  if (o[12] !== g?.quietHours || o[13] !== p || o[14] !== d || o[15] !== l) {
    let e = be(g?.quietHours, new Date(), l);
    ((N = ae),
      (z = !0),
      (B = `compact`),
      (P = !1),
      o[27] === d
        ? (F = o[28])
        : ((F = (e) => {
            e || d();
          }),
          (o[27] = d),
          (o[28] = F)),
      (M = oe),
      (L = `select-none`),
      o[29] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((R = (0, A.jsx)(re, {
            title: (0, A.jsx)(ne, {
              children: (0, A.jsx)(i, {
                id: `chatGpt.quietHours.active.title`,
                defaultMessage: `Time for a break`,
                description: `Title of the notice shown when ChatGPT quiet hours are active`,
              }),
            }),
          })),
          (o[29] = R))
        : (R = o[29]),
      (j = u),
      (O = ie),
      (I =
        e == null
          ? (0, A.jsx)(i, {
              id: `chatGpt.quietHours.active.generic`,
              defaultMessage: `Quiet hours are in effect`,
              description: `Fallback quiet hours notice when the next allowed time cannot be determined safely`,
            })
          : (0, A.jsx)(i, {
              id: `chatGpt.quietHours.active.nextAllowed`,
              defaultMessage: `{day, select, today {You can use ChatGPT again today at {time}} other {You can use ChatGPT again tomorrow at {time}}}`,
              description: `Quiet hours notice explaining when ChatGPT becomes available again. day is today or tomorrow in the device timezone and time is the localized return time.`,
              values: {
                day: e.day,
                time: p.formatTime(e.at, { hour: `numeric`, minute: `2-digit`, timeZone: l }),
              },
            })),
      (o[12] = g?.quietHours),
      (o[13] = p),
      (o[14] = d),
      (o[15] = l),
      (o[16] = O),
      (o[17] = j),
      (o[18] = M),
      (o[19] = N),
      (o[20] = P),
      (o[21] = F),
      (o[22] = I),
      (o[23] = L),
      (o[24] = R),
      (o[25] = z),
      (o[26] = B));
  } else
    ((O = o[16]),
      (j = o[17]),
      (M = o[18]),
      (N = o[19]),
      (P = o[20]),
      (F = o[21]),
      (I = o[22]),
      (L = o[23]),
      (R = o[24]),
      (z = o[25]),
      (B = o[26]));
  let V;
  o[30] !== O || o[31] !== I
    ? ((V = (0, A.jsx)(O, { children: I })), (o[30] = O), (o[31] = I), (o[32] = V))
    : (V = o[32]);
  let H;
  o[33] !== j || o[34] !== V
    ? ((H = (0, A.jsx)(j, { children: V })), (o[33] = j), (o[34] = V), (o[35] = H))
    : (H = o[35]);
  let U;
  o[36] === y
    ? (U = o[37])
    : ((U =
        y &&
        (0, A.jsx)(u, {
          children: (0, A.jsx)(`div`, {
            role: `alert`,
            children: (0, A.jsx)(i, {
              id: `chatGpt.quietHours.active.logoutUnavailable`,
              defaultMessage: `Sign out is unavailable. Try again.`,
              description: `Retryable error when the existing sign-out command is not available in the current app session`,
            }),
          }),
        })),
      (o[36] = y),
      (o[37] = U));
  let W;
  o[38] === C
    ? (W = o[39])
    : ((W = () => {
        if (!C()) return;
        let e = pe(`logOut`, `modal.quiet-hours-modal`);
        fe(!e);
      }),
      (o[38] = C),
      (o[39] = W));
  let G;
  o[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, A.jsx)(i, {
        id: `chatGpt.quietHours.active.signOut`,
        defaultMessage: `Sign out`,
        description: `Action in the quiet hours notice that starts the existing sign-out flow`,
      })),
      (o[40] = G))
    : (G = o[40]);
  let K;
  o[41] === W
    ? (K = o[42])
    : ((K = (0, A.jsx)(t, { type: `button`, color: `secondary`, onClick: W, children: G })),
      (o[41] = W),
      (o[42] = K));
  let q = g == null || (de && v),
    J;
  o[43] !== C || o[44] !== _ || o[45] !== m || o[46] !== d || o[47] !== f || o[48] !== v
    ? ((J = () => {
        if (!C()) return;
        let e = f.get(he).data;
        if (e == null) return;
        let t = e.hasRecurringQuietHours && !e.quietHours.managedByParent && e.eligibleNowOrBefore === !0;
        if (t && v) return;
        let n = t && _.get(`enable_chatgpt_time_management_settings`, !1);
        (d(), m(n ? `/settings/safety?view=quiet-hours` : `/settings/parental-controls`));
      }),
      (o[43] = C),
      (o[44] = _),
      (o[45] = m),
      (o[46] = d),
      (o[47] = f),
      (o[48] = v),
      (o[49] = J))
    : (J = o[49]);
  let Y;
  o[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, A.jsx)(i, {
        id: `chatGpt.quietHours.active.viewSettings`,
        defaultMessage: `View settings`,
        description: `Action in the quiet hours notice opening the user's quiet hours editor or parent-managed controls`,
      })),
      (o[50] = Y))
    : (Y = o[50]);
  let X;
  o[51] !== q || o[52] !== J
    ? ((X = (0, A.jsx)(t, { type: `button`, color: `primary`, disabled: q, onClick: J, children: Y })),
      (o[51] = q),
      (o[52] = J),
      (o[53] = X))
    : (X = o[53]);
  let Z;
  o[54] !== K || o[55] !== X
    ? ((Z = (0, A.jsx)(u, { children: (0, A.jsxs)(se, { children: [K, X] }) })),
      (o[54] = K),
      (o[55] = X),
      (o[56] = Z))
    : (Z = o[56]);
  let Q;
  o[57] !== M || o[58] !== H || o[59] !== U || o[60] !== Z || o[61] !== L || o[62] !== R
    ? ((Q = (0, A.jsxs)(M, { className: L, children: [R, H, U, Z] })),
      (o[57] = M),
      (o[58] = H),
      (o[59] = U),
      (o[60] = Z),
      (o[61] = L),
      (o[62] = R),
      (o[63] = Q))
    : (Q = o[63]);
  let $;
  return (
    o[64] !== N || o[65] !== P || o[66] !== F || o[67] !== Q || o[68] !== z || o[69] !== B
      ? (($ = (0, A.jsx)(N, { open: z, size: B, showDialogClose: P, onOpenChange: F, children: Q })),
        (o[64] = N),
        (o[65] = P),
        (o[66] = F),
        (o[67] = Q),
        (o[68] = z),
        (o[69] = B),
        (o[70] = $))
      : ($ = o[70]),
    $
  );
}
function be(e, t, n) {
  if (e?.status !== `loaded`) return null;
  try {
    let r = w(e.schedule, t, n);
    if (r == null) return null;
    let i = _(t, n),
      a = _(r, n);
    return T(a, i) ? { at: r, day: `today` } : T(a, i.add({ days: 1 })) ? { at: r, day: `tomorrow` } : null;
  } catch {
    return null;
  }
}
var xe, k, A;
function j() {
  return (j = e(() => {
    ((xe = p()),
      y(),
      v(),
      E(),
      D(),
      o(),
      (k = h()),
      l(),
      s(),
      fe(),
      g(),
      d(),
      f(),
      c(),
      x(),
      m(),
      C(),
      de(),
      S(),
      (A = le()));
  }))();
}
j();
export { O as QuietHoursActiveDialog };
//# sourceMappingURL=dialog-f6836df44774.js.map
