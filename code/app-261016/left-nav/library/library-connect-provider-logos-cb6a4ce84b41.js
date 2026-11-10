import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  CCt as n,
  HFt as r,
  LNt as i,
  MNt as a,
  NLt as o,
  NNt as s,
  PBt as c,
  Qst as l,
  SLt as u,
  VRt as d,
  ZSt as ee,
  gCt as f,
  kRt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as m,
  Ahr as h,
  BRr as g,
  Emr as _,
  IAr as v,
  Ihr as y,
  Mhr as b,
  NAr as x,
  Xzr as S,
  YDt as C,
  ZDt as te,
  bmr as ne,
  jhr as w,
  kLr as T,
  khr as E,
  lBr as D,
  tLr as O,
  uBr as k,
  wLr as A,
  wmr as j,
  xLr as M,
  xMr as N,
  yMr as P,
  ymr as F,
  zRr as I,
} from "./app-initial-ad16eaadf81f.js";
import { n as L, r as R } from "./library-provider-filter-56e8962f2aff.js";
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
    (ee(),
      ne(),
      _(),
      A(),
      t(),
      D(),
      O(),
      te(),
      (B = n(l, ({ get: e }) => {
        let t = e(M);
        if (t.status !== `allowed` || !(`plan` in t) || t.plan === S.FREE || t.plan === S.FREE_WORKSPACE)
          return [];
        let n = [];
        return (
          t.plan !== S.GO &&
            e(k, `3001618585`) &&
            !e(k, `chatgpt-library-google-drive-entrypoints-killswitch`) &&
            n.push(`google_drive`),
          e(k, `3224986812`) && n.push(`box`),
          e(k, `2060455659`) && n.push(`dropbox`),
          (e(k, `523386142`) || e(k, `3583034603`)) && n.push(`sharepoint`),
          n
        );
      })),
      (V = f(l, ({ get: e }) =>
        F({
          productSku: `CONNECTOR_SETTING`,
          userId: e(g),
          accountId: e(I),
          appIds: e(B).map(C),
          enabled: e(B).length > 0,
        }),
      )),
      (H = f(l, ({ get: e }) => ({
        ...j({ accountId: e(I), productSku: `CONNECTOR_SETTING`, userId: e(g) }),
        enabled: e(I) != null && e(g) != null && e(B).length > 0,
        refetchOnWindowFocus: `always`,
      }))),
      (U = n(l, ({ get: e }) => {
        let t = e(B),
          n = e(V),
          r = e(H);
        return t.map((e) => {
          let t = C(e),
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
    productExperience: e.get(x) === `work` ? `work` : `chat`,
  };
}
function K(e, t, n, r) {
  if (t == null || e.get(I) !== t.accountId) return;
  if (n === `shown`) {
    if (t.pickerShown) return;
    e.set(J, { ...t, pickerShown: !0 });
  }
  let i = {
      entrypoint: w.CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED,
      shown: w.CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED,
      dismissed: w.CHATGPT_CONNECTOR_AUTH_STAGE_CANCELLED,
      selected: w.CHATGPT_CONNECTOR_AUTH_STAGE_START_REQUESTED,
    },
    a = n === `entrypoint` ? `entrypoint` : `picker`;
  (r != null && (a = `provider`),
    N(e, E, {
      flowCorrelationId: t.journeyId,
      referrer: `library_onboarding/home_beacon/provider_picker/${a}`,
      origin: h.CHATGPT_CONNECTOR_AUTH_ORIGIN_PLUGINS,
      productExperience: t.productExperience,
      stage: i[n],
      surface: a === `picker` ? b.CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET : void 0,
      connectorId: r,
    }));
}
var q, J;
function Y() {
  return (Y = e(() => {
    (y(),
      r(),
      A(),
      v(),
      P(),
      T(),
      (q = p({
        accountId: d(),
        journeyId: d(),
        productExperience: u([`chat`, `work`]),
        pickerShown: o().optional(),
      })),
      (J = m(`library-provider-onboarding-journey`, null, {
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
      className: a(
        `relative flex shrink-0 items-center justify-center`,
        t === 0 && `z-[3] size-[27.212px]`,
        t === 1 && `z-[2] size-5.5`,
        t === 2 && `z-[1] size-[27.212px]`,
      ),
      children: (0, Q.jsx)(`span`, {
        className: a(
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
    ((Z = c()), s(), R(), (Q = i()));
  }))();
}
export { J as a, V as c, U as d, Y as i, H as l, $ as n, K as o, G as r, W as s, X as t, B as u };
//# sourceMappingURL=library-connect-provider-logos-cb6a4ce84b41.js.map
