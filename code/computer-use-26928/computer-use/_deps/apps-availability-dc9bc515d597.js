import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  F5t as n,
  Gwt as r,
  IJt as i,
  LJt as a,
  Lwt as o,
  Nwt as s,
  O5t as c,
  Pwt as l,
  Sft as u,
  Tft as d,
  Urn as f,
  Uwt as p,
  Wrn as m,
  _Jt as h,
  _Mt as g,
  _dn as _,
  dJt as v,
  ein as y,
  fJt as b,
  fNt as x,
  gPt as S,
  lJt as C,
  lPt as w,
  rOt as T,
  tOt as E,
  uJt as D,
  vJt as O,
  vMt as k,
  vun as A,
  yun as j,
} from "./app-shared-7552fc8d5d82.js";
import { FAn as M, VAn as N } from "./app-initial-3916b423772b.js";
import { a as P, n as F } from "./new-chat-page-suggestions-eligibility-5957e81b404b.js";
function I(e) {
  let r = (0, R.c)(36),
    i = e?.hostId ?? `local`,
    c = t(v),
    d = n(u),
    f = a(),
    m = T(),
    h = y(),
    _;
  r[0] !== d || r[1] !== i || r[2] !== c
    ? ((_ = M(i, g(c, `403472035`), void 0)), (r[0] = d), (r[1] = i), (r[2] = c), (r[3] = _))
    : (_ = r[3]);
  let b = _,
    x;
  r[4] !== b || r[5] !== i || r[6] !== m
    ? ((x = async () => {
        await Promise.all([
          m(F(i)),
          m(b),
          m([...s, i]),
          m([...l, i]),
          m(o),
          m([`user-saved-config`]),
        ]);
      }),
      (r[4] = b),
      (r[5] = i),
      (r[6] = m),
      (r[7] = x))
    : (x = r[7]);
  let w = x,
    E;
  r[8] !== i || r[9] !== f || r[10] !== c
    ? ((E = async (e) => {
        let { appId: t, enabled: n } = e,
          r = await p(c, f, i);
        if (
          (
            await C(c, i).sendRequest(`config/batchWrite`, {
              edits: L({ appId: t, enabled: n }),
              filePath: r?.filePath ?? null,
              expectedVersion: r?.expectedVersion ?? null,
              reloadUserConfig: !0,
            })
          ).status === `okOverridden`
        )
          throw Error(`App setting is overridden by project configuration`);
      }),
      (r[8] = i),
      (r[9] = f),
      (r[10] = c),
      (r[11] = E))
    : (E = r[11]);
  let D;
  r[12] !== b || r[13] !== f
    ? ((D = async (e) => {
        let { appId: t, enabled: n } = e;
        await f.cancelQueries({ queryKey: b });
        let r = f.getQueryData(b);
        return (
          r &&
            f.setQueryData(
              b,
              r.map((e) => (e.id !== t || e.isEnabled === n ? e : { ...e, isEnabled: n })),
            ),
          { previousApps: r }
        );
      }),
      (r[12] = b),
      (r[13] = f),
      (r[14] = D))
    : (D = r[14]);
  let k;
  r[15] !== b || r[16] !== h || r[17] !== m || r[18] !== f || r[19] !== c
    ? ((k = async (e, t, n) => {
        let { appId: r, appName: i, enabled: a } = t;
        if (
          a &&
          n?.previousApps?.find((e) => e.id === r)?.isEnabled === !1 &&
          (await m(b), f.getQueryData(b)?.find((e) => e.id === r)?.isEnabled === !1)
        )
          throw Error(`App remains disabled after updating its configuration`);
        let o = i ?? f.getQueryData(b)?.find((e) => e.id === r)?.name ?? r;
        c.get(S).success(h.formatMessage(a ? B.enableSuccess : B.disableSuccess, { appName: o }));
      }),
      (r[15] = b),
      (r[16] = h),
      (r[17] = m),
      (r[18] = f),
      (r[19] = c),
      (r[20] = k))
    : (k = r[20]);
  let A;
  r[21] !== b || r[22] !== h || r[23] !== f || r[24] !== c
    ? ((A = (e, t, n) => {
        (j.error(`Failed to update app enablement`, { safe: {}, sensitive: { error: e } }),
          c.get(S).danger(h.formatMessage(B.updateError), {
            errorAnalytics: { toastId: `appsAvailability.onError.updateError` },
          }),
          n?.previousApps && f.setQueryData(b, n.previousApps));
      }),
      (r[21] = b),
      (r[22] = h),
      (r[23] = f),
      (r[24] = c),
      (r[25] = A))
    : (A = r[25]);
  let N;
  r[26] !== w || r[27] !== E || r[28] !== D || r[29] !== k || r[30] !== A
    ? ((N = { mutationFn: E, onMutate: D, onSuccess: k, onError: A, onSettled: w }),
      (r[26] = w),
      (r[27] = E),
      (r[28] = D),
      (r[29] = k),
      (r[30] = A),
      (r[31] = N))
    : (N = r[31]);
  let P = O(N),
    I = P.isPending ? (P.variables?.appId ?? null) : null,
    z;
  return (
    r[32] !== P.isPending || r[33] !== P.mutateAsync || r[34] !== I
      ? ((z = { setAppEnabled: P.mutateAsync, isUpdating: P.isPending, updatingAppId: I }),
        (r[32] = P.isPending),
        (r[33] = P.mutateAsync),
        (r[34] = I),
        (r[35] = z))
      : (z = r[35]),
    z
  );
}
function L({ appId: e, enabled: t }) {
  return [{ keyPath: `${z}.${e}.enabled`, value: t, mergeStrategy: `upsert` }];
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = _()),
      h(),
      i(),
      c(),
      m(),
      P(),
      D(),
      N(),
      d(),
      w(),
      r(),
      E(),
      b(),
      x(),
      k(),
      A(),
      (z = `apps`),
      (B = f({
        enableSuccess: {
          id: `apps.enable.success`,
          defaultMessage: `{appName} app enabled`,
          description: `Toast shown after successfully enabling an app`,
        },
        disableSuccess: {
          id: `apps.disable.success`,
          defaultMessage: `{appName} app disabled`,
          description: `Toast shown after successfully disabling an app`,
        },
        updateError: {
          id: `apps.update.error`,
          defaultMessage: `Failed to update app`,
          description: `Toast shown when enabling or disabling an app fails`,
        },
      })));
  }))();
}
export { I as n, V as t };
//# sourceMappingURL=apps-availability-dc9bc515d597.js.map
