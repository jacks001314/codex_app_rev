import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { I9 as t, Irt as n, J9 as r, N9 as i, P9 as a, Rnt as o } from "./app-shared-bbfeca5e5737.js";
import { QDr as s, XDr as c, ocr as l } from "./app-initial-5851df3f6cb1.js";
import { t as u } from "./src-c65a930b3c0e.js";
function d(e, t) {
  return {
    removedCount: e.filter((e) => !t.includes(e)).length,
    addedCount: t.filter((t) => !e.includes(t)).length,
  };
}
function f(e, n, i, a, o) {
  try {
    s(e, r, {
      action: n,
      kind: i === `site` ? t.CODEX_PROFILE_PIN_KIND_SITE : t.CODEX_PROFILE_PIN_KIND_SKILL,
      entryPoint: a,
      pageScope: o,
    });
  } catch {}
}
function p(e, r, o, c) {
  for (let [l, u] of [
    [`site`, t.CODEX_PROFILE_PIN_KIND_SITE],
    [`skill`, t.CODEX_PROFILE_PIN_KIND_SKILL],
  ]) {
    let { removedCount: t, addedCount: f } = d(
      r.filter((e) => e.kind === l).map((e) => e.artifact_id),
      o.filter((e) => e.kind === l).map((e) => e.artifact_id),
    );
    for (let [r, o] of [
      [t, i.CODEX_PROFILE_PIN_ACTION_UNPIN],
      [f, i.CODEX_PROFILE_PIN_ACTION_PIN],
    ])
      if (r !== 0)
        try {
          s(e, a, { count: n(r), action: o, entryPoint: c, kind: u });
        } catch {}
  }
}
function m() {
  return (m = e(() => {
    (l(), o(), u(), c());
  }))();
}
export { p as n, f as r, m as t };
//# sourceMappingURL=pin-analytics-417acc826387.js.map
