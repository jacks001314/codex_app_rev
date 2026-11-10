import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  JC as n,
  JR as r,
  Pxt as i,
  Vxt as a,
  YR as o,
  e3 as s,
  iw as c,
  jDt as l,
  qC as u,
  t3 as d,
  tw as f,
  vzt as p,
  xMt as m,
  yzt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as g,
  FMr as _,
  Fin as v,
  HMr as y,
  Hin as b,
  NHn as x,
  PHn as S,
  fur as C,
  hPr as w,
  mF as T,
  pF as E,
  pur as D,
  tNr as O,
} from "./app-initial-5851df3f6cb1.js";
import { Ll as k, Rl as A } from "./app-primary-fe8a450b3b04.js";
import { n as j, r as M } from "./usage-data-188598c9d599.js";
import { t as N } from "./admin-console-locale-c3cf2e837ea1.js";
import { n as P, t as F } from "./billing-analytics-bcdd6f8fa300.js";
function I(e) {
  let t = (0, R.c)(23),
    { isPolling: n } = e,
    r = n === void 0 || n,
    { accountId: i, email: s, isLoading: c } = D(),
    { data: l } = b(),
    u = a(y),
    { data: d } = a(S),
    { canViewCreditSettings: f, isUsageSettingsAccessLoading: p, plan: m } = A(d?.credits?.balance != null),
    h = o(),
    g;
  t[0] === m ? (g = t[1]) : ((g = M(m) || m === w.ENT26), (t[0] = m), (t[1] = g));
  let v = g,
    x = `consumer`;
  v ? (x = `workspace`) : _(m) && (x = `business`);
  let C;
  t[2] !== i || t[3] !== l || t[4] !== s || t[5] !== c || t[6] !== u
    ? ((t[2] = i), (t[3] = l), (t[4] = s), (t[5] = c), (t[6] = u), (t[7] = C))
    : (C = t[7]);
  let T;
  t[8] !== C || t[9] !== r
    ? ((T = () => {
        r && C != null && window.location.replace(C);
      }),
      (t[8] = C),
      (t[9] = r),
      (t[10] = T))
    : (T = t[10]);
  let O;
  if (
    (t[11] !== C || t[12] !== r ? ((O = [C, r]), (t[11] = C), (t[12] = r), (t[13] = O)) : (O = t[13]),
    (0, z.useEffect)(T, O),
    m == null && p)
  ) {
    let e;
    return (
      t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, B.jsx)(E, {})), (t[14] = e))
        : (e = t[14]),
      e
    );
  }
  if (C != null) {
    let e;
    return (
      t[15] === C ? (e = t[16]) : ((e = (0, B.jsx)(L, { adminConsoleUrl: C })), (t[15] = C), (t[16] = e)),
      e
    );
  }
  let k = v || f,
    j = m === w.ENT26,
    N;
  return (
    t[17] !== r || t[18] !== h || t[19] !== x || t[20] !== k || t[21] !== j
      ? ((N = (0, B.jsx)(F, {
          isPolling: r,
          canViewCreditSettings: k,
          isUsdWorkspace: j,
          reduceMotion: h,
          scope: x,
        })),
        (t[17] = r),
        (t[18] = h),
        (t[19] = x),
        (t[20] = k),
        (t[21] = j),
        (t[22] = N))
      : (N = t[22]),
    N
  );
}
function L(e) {
  let n = (0, R.c)(5),
    { adminConsoleUrl: r } = e,
    i,
    a;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, B.jsx)(t, {
        id: `codex.analytics.adminConsoleRedirect.title`,
        defaultMessage: `Analytics has moved`,
        description: `Heading in Settings Analytics for Enterprise and Education workspace members, explaining that their analytics are now available in the Admin Console`,
      })),
      (a = (0, B.jsx)(t, {
        id: `codex.analytics.adminConsoleRedirect.body`,
        defaultMessage: `View your Codex and Work analytics in the Admin Console`,
        description: `Settings Analytics notice for Enterprise and Education members. Admin Console is the destination product name; Work refers to ChatGPT Work mode`,
      })),
      (n[0] = i),
      (n[1] = a))
    : ((i = n[0]), (a = n[1]));
  let o;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, B.jsx)(t, {
        id: `codex.analytics.adminConsoleRedirect.link.label`,
        defaultMessage: `Open analytics`,
        description: `Button in Settings Analytics that opens the current Enterprise or Education workspace's Codex and Work analytics in the Admin Console`,
      })),
      (n[2] = o))
    : (o = n[2]);
  let c;
  return (
    n[3] === r
      ? (c = n[4])
      : ((c = (0, B.jsx)(u, {
          children: (0, B.jsx)(f, {
            label: i,
            description: a,
            control: (0, B.jsx)(s, { href: r, color: `secondary`, children: o }),
          }),
        })),
        (n[3] = r),
        (n[4] = c)),
    c
  );
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = p()),
      i(),
      (z = h()),
      l(),
      O(),
      C(),
      v(),
      d(),
      k(),
      x(),
      r(),
      T(),
      c(),
      n(),
      j(),
      N(),
      g(),
      P(),
      (B = m()));
  }))();
}
V();
export { I as UsageAnalyticsSettings };
//# sourceMappingURL=analytics-settings-77bf2f859883.js.map
