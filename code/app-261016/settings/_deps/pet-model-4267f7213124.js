import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  CCt as n,
  DCt as r,
  E8 as i,
  O8 as a,
  Qst as o,
  Rrt as s,
  T8 as c,
  ZSt as l,
  gCt as u,
  k8 as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as f,
  CMr as p,
  IMr as m,
  _et as h,
  eMr as g,
  iRr as _,
  met as v,
  nMr as y,
  net as b,
  oet as x,
  tyr as S,
  wLr as C,
  yMr as w,
} from "./app-initial-ad16eaadf81f.js";
function T(e) {
  let t = e?.replace(/^uploaded:(?=pet_)/u, ``);
  return t != null && (t.startsWith(`pet_`) || v.some((e) => e.id === t)) ? t : `default`;
}
function E(e) {
  return (
    !!e.spritesheet_url &&
    e.spritesheet_url_expires_at != null &&
    Number.isFinite(Date.parse(e.spritesheet_url_expires_at))
  );
}
async function D(e, t, n) {
  if (e.get(m) !== t) return;
  let r = e.query.snapshot(g);
  await r.cancel();
  let i = r.getData()?.accessoryId;
  r.setData((e) => (e == null ? e : { ...e, accessoryId: n }));
  try {
    (await _.safePatch(`/settings/account_user_setting`, {
      additionalHeaders: { "ChatGPT-Account-ID": t },
      parameters: { query: { feature: `accessory_id`, value: n } },
    }),
      await r.invalidate(),
      O(e, c.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, n));
  } catch (e) {
    throw (r.setData((e) => (e?.accessoryId === n ? { ...e, accessoryId: i } : e)), e);
  }
}
function O(e, t, n) {
  let r = v.find((e) => e.id === n),
    o;
  (r == null
    ? n?.startsWith(`pet_`) && (o = a.CODEX_AVATAR_OVERLAY_PET_KIND_CUSTOM)
    : (o = a.CODEX_AVATAR_OVERLAY_PET_KIND_BUILT_IN),
    e
      .get(p)
      .logProductEvent(i, {
        action: t,
        builtInPetId: r?.id,
        petKind: o,
        source: d.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
      }));
}
var k, A, j;
function M() {
  return (M = e(() => {
    (s(),
      l(),
      C(),
      h(),
      x(),
      S(),
      y(),
      w(),
      t(),
      (k = u(o, ({ get: e }) => {
        let t = e(m);
        return { ...b(t, e(f)), enabled: !0 };
      })),
      (A = r(
        o,
        () => Date.now(),
        ({ set: e }) => {
          let t = setInterval(() => e(Date.now()), 6e4);
          return () => clearInterval(t);
        },
      )),
      (j = n(o, ({ get: e }) => {
        let t = e(k).data;
        return t != null && e(A) - t.receivedAt >= 48e4;
      })));
  }))();
}
export { j as a, O as i, E as n, k as o, M as r, D as s, T as t };
//# sourceMappingURL=pet-model-4267f7213124.js.map
