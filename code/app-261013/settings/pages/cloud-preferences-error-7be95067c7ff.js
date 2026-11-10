import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  JC as r,
  iw as i,
  jDt as a,
  qC as o,
  t3 as s,
  tw as c,
  vzt as l,
  xMt as u,
} from "./app-shared-bbfeca5e5737.js";
import { Ek as d, Tk as f } from "./app-initial-5851df3f6cb1.js";
function p(e) {
  let r = (0, m.c)(5),
    { isRetrying: i, onRetry: a } = e,
    s;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, h.jsx)(n, {
        id: `settings.general.cloudPreferences.loadError`,
        defaultMessage: `Unable to load cloud preferences`,
        description: `Error message shown when cloud preferences fail to load`,
      })),
      (r[0] = s))
    : (s = r[0]);
  let l;
  r[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, h.jsx)(n, {
        id: `settings.general.cloudPreferences.retry`,
        defaultMessage: `Retry`,
        description: `Button label to retry loading cloud preferences`,
      })),
      (r[1] = l))
    : (l = r[1]);
  let u;
  return (
    r[2] !== i || r[3] !== a
      ? ((u = (0, h.jsx)(f, {
          children: (0, h.jsx)(f.Content, {
            children: (0, h.jsx)(o, {
              children: (0, h.jsx)(c, {
                label: s,
                control: (0, h.jsx)(t, {
                  color: `secondary`,
                  disabled: i,
                  onClick: a,
                  size: `toolbar`,
                  children: l,
                }),
              }),
            }),
          }),
        })),
        (r[2] = i),
        (r[3] = a),
        (r[4] = u))
      : (u = r[4]),
    u
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = l()), a(), s(), d(), i(), r(), (h = u()));
  }))();
}
export { g as n, p as t };
//# sourceMappingURL=cloud-preferences-error-7be95067c7ff.js.map
