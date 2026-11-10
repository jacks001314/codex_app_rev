import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as t,
  Cot as n,
  EPt as r,
  Pxt as i,
  TLt as a,
  _It as o,
  _Mt as s,
  gMt as c,
  oIt as ee,
  oSt as l,
  pLt as u,
  vzt as d,
  wot as f,
  xMt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as m,
  Fdr as h,
  Fur as g,
  GMr as _,
  Mdr as v,
  Ndr as y,
  Nur as b,
  OPr as x,
  Our as S,
  Pdr as C,
  QDr as te,
  XDr as ne,
  XMr as w,
  ZMr as T,
  djt as E,
  hEr as D,
  hPr as O,
  iNr as k,
  kPr as A,
  kur as j,
  ljt as M,
  rNr as N,
  tNr as P,
  vEr as F,
  zdr as I,
} from "./app-initial-5851df3f6cb1.js";
import { n as L, r as R } from "./library-provider-filter-eb6e18971656.js";
function z({ availability: e, links: t, availabilityError: n, linksError: r }) {
  if (e === void 0) return n ? `error` : `loading`;
  if (!e?.available || e.status === `DISABLED_BY_ADMIN`) return `unavailable`;
  if (t === void 0) return r ? `error` : `loading`;
  let i = t.filter((e) => e.connector_status !== `DISABLED_BY_ADMIN` && e.unavailable_reason == null);
  return i.some((e) => e.auth_status === `ACTIVE`)
    ? `connected`
    : !e.installed && !e.can_install
      ? `unavailable`
      : i.some((e) => e.auth_status === `REAUTH_REQUIRED`)
        ? `reconnectable`
        : t.length === 0
          ? `connectable`
          : `unavailable`;
}
var B, V, H, U;
function W() {
  return (W = e(() => {
    (i(),
      j(),
      g(),
      P(),
      f(),
      x(),
      m(),
      E(),
      (B = l(n, ({ get: e }) => {
        let t = e(T);
        if (t.status !== `allowed` || !(`plan` in t) || t.plan === O.FREE || t.plan === O.FREE_WORKSPACE)
          return [];
        let n = [];
        return (
          t.plan !== O.GO &&
            e(A, `3001618585`) &&
            !e(A, `chatgpt-library-google-drive-entrypoints-killswitch`) &&
            n.push(`google_drive`),
          e(A, `3224986812`) && n.push(`box`),
          e(A, `2060455659`) && n.push(`dropbox`),
          (e(A, `523386142`) || e(A, `3583034603`)) && n.push(`sharepoint`),
          n
        );
      })),
      (V = t(n, ({ get: e }) =>
        S({
          productSku: `CONNECTOR_SETTING`,
          userId: e(w),
          accountId: e(_),
          appIds: e(B).map(M),
          enabled: e(B).length > 0,
        }),
      )),
      (H = t(n, ({ get: e }) => ({
        ...b({ accountId: e(_), productSku: `CONNECTOR_SETTING`, userId: e(w) }),
        enabled: e(_) != null && e(w) != null && e(B).length > 0,
        refetchOnWindowFocus: `always`,
      }))),
      (U = l(n, ({ get: e }) => {
        let t = e(B),
          n = e(V),
          r = e(H);
        return t.map((e) => {
          let t = M(e),
            i = r.data?.filter((e) => e.connector_id === t);
          return {
            provider: e,
            connectorId: t,
            state: z({
              availability: n.data === void 0 ? void 0 : (n.data.find((e) => e.id === t) ?? null),
              links: i,
              availabilityError: n.isError,
              linksError: r.isError,
            }),
          };
        });
      })));
  }))();
}
function G(e, t) {
  return {
    accountId: t,
    journeyId: crypto.randomUUID(),
    productExperience: e.get(D) === `work` ? `work` : `chat`,
  };
}
function K(e, t, n, r) {
  if (t == null || e.get(_) !== t.accountId) return;
  if (n === `shown`) {
    if (t.pickerShown) return;
    e.set(J, { ...t, pickerShown: !0 });
  }
  let i = {
      entrypoint: C.CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED,
      shown: C.CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED,
      dismissed: C.CHATGPT_CONNECTOR_AUTH_STAGE_CANCELLED,
      selected: C.CHATGPT_CONNECTOR_AUTH_STAGE_START_REQUESTED,
    },
    a = n === `entrypoint` ? `entrypoint` : `picker`;
  (r != null && (a = `provider`),
    te(e, v, {
      flowCorrelationId: t.journeyId,
      referrer: `library_onboarding/home_beacon/provider_picker/${a}`,
      origin: y.CHATGPT_CONNECTOR_AUTH_ORIGIN_PLUGINS,
      productExperience: t.productExperience,
      stage: i[n],
      surface: a === `picker` ? h.CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET : void 0,
      connectorId: r,
    }));
}
var q, J;
function Y() {
  return (Y = e(() => {
    (I(),
      r(),
      P(),
      F(),
      ne(),
      N(),
      (q = u({
        accountId: a(),
        journeyId: a(),
        productExperience: ee([`chat`, `work`]),
        pickerShown: o().optional(),
      })),
      (J = k(`library-provider-onboarding-journey`, null, {
        coerceStoredValue: (e) => q.safeParse(e).data ?? null,
      })));
  }))();
}
function X(e) {
  let t = (0, Z.c)(4),
    { providers: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.slice(0, 3).map(re)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, Q.jsx)(`span`, {
          "aria-hidden": `true`,
          className: `isolate flex h-5 shrink-0 items-center -space-x-2.5 rtl:space-x-reverse`,
          children: r,
        })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function re(e, t) {
  return (0, Q.jsx)(
    `span`,
    {
      className: c(
        `relative flex shrink-0 items-center justify-center`,
        t === 0 && `z-[3] size-[27.212px]`,
        t === 1 && `z-[2] size-5.5`,
        t === 2 && `z-[1] size-[27.212px]`,
      ),
      children: (0, Q.jsx)(`span`, {
        className: c(
          `flex size-5.5 items-center justify-center overflow-hidden rounded-lg border-[0.5px] border-subtle bg-surface`,
          t === 0 && `-rotate-16 rtl:rotate-16`,
          t === 2 && `rotate-16 rtl:-rotate-16`,
        ),
        children: (0, Q.jsx)(L, { provider: e, size: `menuStack` }),
      }),
    },
    e,
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = d()), s(), R(), (Q = p()));
  }))();
}
export { J as a, V as c, U as d, Y as i, H as l, $ as n, K as o, G as r, W as s, X as t, B as u };
//# sourceMappingURL=library-connect-provider-logos-a622da60af1e.js.map
