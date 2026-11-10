import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IF as t, xMt as n } from "./app-shared-bbfeca5e5737.js";
import { Stn as r, _zt as i, dIn as a, gzt as o, pIn as s, ytn as c } from "./app-initial-5851df3f6cb1.js";
import { n as l, t as u } from "./site-preview-b226ffd1d9b7.js";
function d(e) {
  if (e.kind === `site`)
    return {
      title: e.site.title,
      description: e.site.description ?? null,
      icon: (0, f.jsx)(u, { screenshotUrl: e.site.thumbnail_url ?? null, viewMode: `list` }),
    };
  if (`localSkill` in e) {
    let n = c(e.localSkill);
    return {
      title: e.localSkill.interface?.displayName || e.localSkill.name,
      description: t(e.localSkill),
      icon: (0, f.jsx)(n, { className: `size-9` }),
    };
  }
  let n = e.pin.icon;
  return (
    n &&
      !n.startsWith(`data:`) &&
      (n = `data:${
        [
          [`PHN2Zy`, `image/svg+xml`],
          [`PD94bWw`, `image/svg+xml`],
          [`/9j/`, `image/jpeg`],
          [`R0lGOD`, `image/gif`],
          [`UklGR`, `image/webp`],
        ].find(([e]) => n?.startsWith(e))?.[1] ?? `image/png`
      };base64,${n}`),
    {
      title: e.pin.title,
      description: e.pin.description ?? null,
      icon: (0, f.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center`,
        children: n
          ? (0, f.jsx)(
              o,
              { alt: ``, src: n, className: `size-9`, fallback: (0, f.jsx)(p, { className: `size-9` }) },
              n,
            )
          : (0, f.jsx)(p, { className: `size-9` }),
      }),
    }
  );
}
var f, p;
function m() {
  return (m = e(() => {
    (i(), r(), l(), (f = n()), (p = c()));
  }))();
}
function h(e, t) {
  s(e).count(`default`, `profiles_v2.plugin_resolution_result`, { result: t });
}
function g(e, t) {
  s(e).count(`default`, `profiles_v2.showcase_save_result`, { result: t });
}
function _(e, t, n) {
  s(e).count(`default`, `profiles_v2.profile_load_result`, { result: t, view: n });
}
function v(e, t) {
  s(e).count(`default`, `profiles_v2.skill_install_result`, { result: t });
}
function y(e, t) {
  s(e).count(`default`, `profiles_v2.photo_save_result`, { result: t });
}
function b(e, t) {
  s(e).count(`default`, `profiles_v2.photo_processing_result`, { result: t });
}
function x(e, t) {
  s(e).count(`default`, `profiles_v2.share_card_processing_result`, { result: t });
}
function S() {
  return (S = e(() => {
    a();
  }))();
}
export { _ as a, v as c, h as i, d as l, b as n, x as o, y as r, g as s, S as t, m as u };
//# sourceMappingURL=telemetry-754c57f9b0cd.js.map
