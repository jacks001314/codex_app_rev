import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as t,
  A6 as n,
  Cot as r,
  M6 as i,
  N6 as a,
  Pxt as o,
  Rnt as s,
  k6 as c,
  oSt as l,
  uSt as u,
  wot as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  K7 as f,
  NDr as p,
  P7 as m,
  R7 as h,
  XDr as g,
  XMr as _,
  Y7 as v,
  Ymr as y,
  eOr as b,
  ehr as x,
  jDr as S,
  pOr as C,
  tNr as w,
} from "./app-initial-5851df3f6cb1.js";
function T(e) {
  let t = e?.replace(/^uploaded:(?=pet_)/u, ``);
  return t != null && (t.startsWith(`pet_`) || f.some((e) => e.id === t)) ? t : `default`;
}
function E(e) {
  return (
    !!e.spritesheet_url &&
    e.spritesheet_url_expires_at != null &&
    Number.isFinite(Date.parse(e.spritesheet_url_expires_at))
  );
}
async function D(e, t, n) {
  if (e.get(C) !== t) return;
  let r = e.query.snapshot(S);
  await r.cancel();
  let i = r.getData()?.accessoryId;
  r.setData((e) => (e == null ? e : { ...e, accessoryId: n }));
  try {
    (await y.safePatch(`/settings/account_user_setting`, {
      additionalHeaders: { "ChatGPT-Account-ID": t },
      parameters: { query: { feature: `accessory_id`, value: n } },
    }),
      await r.invalidate(),
      O(e, c.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, n));
  } catch (e) {
    throw (r.setData((e) => (e?.accessoryId === n ? { ...e, accessoryId: i } : e)), e);
  }
}
function O(e, t, r) {
  let o = f.find((e) => e.id === r),
    s;
  (o == null
    ? r?.startsWith(`pet_`) && (s = i.CODEX_AVATAR_OVERLAY_PET_KIND_CUSTOM)
    : (s = i.CODEX_AVATAR_OVERLAY_PET_KIND_BUILT_IN),
    e
      .get(b)
      .logProductEvent(n, {
        action: t,
        builtInPetId: o?.id,
        petKind: s,
        source: a.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
      }));
}
var k, A, j;
function M() {
  return (M = e(() => {
    (s(),
      o(),
      w(),
      v(),
      h(),
      x(),
      p(),
      g(),
      d(),
      (k = t(r, ({ get: e }) => {
        let t = e(C);
        return { ...m(t, e(_)), enabled: !0 };
      })),
      (A = u(
        r,
        () => Date.now(),
        ({ set: e }) => {
          let t = setInterval(() => e(Date.now()), 6e4);
          return () => clearInterval(t);
        },
      )),
      (j = l(r, ({ get: e }) => {
        let t = e(k).data;
        return t != null && e(A) - t.receivedAt >= 48e4;
      })));
  }))();
}
export { j as a, O as i, E as n, k as o, M as r, D as s, T as t };
//# sourceMappingURL=pet-model-b77e0aeadfcf.js.map
