import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  CPt as n,
  Cot as r,
  Iot as i,
  Ixt as a,
  Lot as o,
  Pxt as s,
  SPt as c,
  VDt as l,
  Vxt as u,
  hot as d,
  jDt as f,
  lot as p,
  nst as m,
  tst as h,
  vzt as g,
  wot as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as v,
  DPr as y,
  Ggr as b,
  HPr as x,
  OPr as S,
  UPr as C,
  Wgr as w,
  XPr as T,
  YPr as E,
  a0n as D,
  e0n as O,
  fOr as k,
  hOr as A,
  i_r as j,
  oFr as M,
  r_r as N,
} from "./app-initial-5851df3f6cb1.js";
import { a as P, n as F } from "./new-chat-page-suggestions-eligibility-15ea6f3b5a27.js";
function I(e) {
  let t = (0, R.c)(36),
    i = e?.hostId ?? `local`,
    s = a(r),
    c = u(k),
    f = m(),
    p = x(),
    h = l(),
    g;
  t[0] !== c || t[1] !== i || t[2] !== s
    ? ((g = O(i, y(s, `403472035`), void 0)), (t[0] = c), (t[1] = i), (t[2] = s), (t[3] = g))
    : (g = t[3]);
  let _ = g,
    v;
  t[4] !== _ || t[5] !== i || t[6] !== p
    ? ((v = async () => {
        await Promise.all([p(F(i)), p(_), p([...N, i]), p([...j, i]), p(C), p([`user-saved-config`])]);
      }),
      (t[4] = _),
      (t[5] = i),
      (t[6] = p),
      (t[7] = v))
    : (v = t[7]);
  let b = v,
    S;
  t[8] !== i || t[9] !== f || t[10] !== s
    ? ((S = async (e) => {
        let { appId: t, enabled: n } = e,
          r = await w(s, f, i);
        if (
          (
            await E(s, i).sendRequest(`config/batchWrite`, {
              edits: L({ appId: t, enabled: n }),
              filePath: r?.filePath ?? null,
              expectedVersion: r?.expectedVersion ?? null,
              reloadUserConfig: !0,
            })
          ).status === `okOverridden`
        )
          throw Error(`App setting is overridden by project configuration`);
      }),
      (t[8] = i),
      (t[9] = f),
      (t[10] = s),
      (t[11] = S))
    : (S = t[11]);
  let T;
  t[12] !== _ || t[13] !== f
    ? ((T = async (e) => {
        let { appId: t, enabled: n } = e;
        await f.cancelQueries({ queryKey: _ });
        let r = f.getQueryData(_);
        return (
          r &&
            f.setQueryData(
              _,
              r.map((e) => (e.id !== t || e.isEnabled === n ? e : { ...e, isEnabled: n })),
            ),
          { previousApps: r }
        );
      }),
      (t[12] = _),
      (t[13] = f),
      (t[14] = T))
    : (T = t[14]);
  let D;
  t[15] !== _ || t[16] !== h || t[17] !== p || t[18] !== f || t[19] !== s
    ? ((D = async (e, t, n) => {
        let { appId: r, appName: i, enabled: a } = t;
        if (
          a &&
          n?.previousApps?.find((e) => e.id === r)?.isEnabled === !1 &&
          (await p(_), f.getQueryData(_)?.find((e) => e.id === r)?.isEnabled === !1)
        )
          throw Error(`App remains disabled after updating its configuration`);
        let o = i ?? f.getQueryData(_)?.find((e) => e.id === r)?.name ?? r;
        s.get(d).success(h.formatMessage(a ? B.enableSuccess : B.disableSuccess, { appName: o }));
      }),
      (t[15] = _),
      (t[16] = h),
      (t[17] = p),
      (t[18] = f),
      (t[19] = s),
      (t[20] = D))
    : (D = t[20]);
  let A;
  t[21] !== _ || t[22] !== h || t[23] !== f || t[24] !== s
    ? ((A = (e, t, r) => {
        (n.error(`Failed to update app enablement`, { safe: {}, sensitive: { error: e } }),
          s
            .get(d)
            .danger(h.formatMessage(B.updateError), {
              errorAnalytics: { toastId: `appsAvailability.onError.updateError` },
            }),
          r?.previousApps && f.setQueryData(_, r.previousApps));
      }),
      (t[21] = _),
      (t[22] = h),
      (t[23] = f),
      (t[24] = s),
      (t[25] = A))
    : (A = t[25]);
  let M;
  t[26] !== b || t[27] !== S || t[28] !== T || t[29] !== D || t[30] !== A
    ? ((M = { mutationFn: S, onMutate: T, onSuccess: D, onError: A, onSettled: b }),
      (t[26] = b),
      (t[27] = S),
      (t[28] = T),
      (t[29] = D),
      (t[30] = A),
      (t[31] = M))
    : (M = t[31]);
  let P = o(M),
    I = P.isPending ? (P.variables?.appId ?? null) : null,
    z;
  return (
    t[32] !== P.isPending || t[33] !== P.mutateAsync || t[34] !== I
      ? ((z = { setAppEnabled: P.mutateAsync, isUpdating: P.isPending, updatingAppId: I }),
        (t[32] = P.isPending),
        (t[33] = P.mutateAsync),
        (t[34] = I),
        (t[35] = z))
      : (z = t[35]),
    z
  );
}
function L({ appId: e, enabled: t }) {
  return [{ keyPath: `${z}.${e}.enabled`, value: t, mergeStrategy: `upsert` }];
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = g()),
      i(),
      h(),
      s(),
      f(),
      P(),
      T(),
      D(),
      A(),
      p(),
      b(),
      v(),
      _(),
      M(),
      S(),
      c(),
      (z = `apps`),
      (B = t({
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
//# sourceMappingURL=apps-availability-30e091a5d405.js.map
