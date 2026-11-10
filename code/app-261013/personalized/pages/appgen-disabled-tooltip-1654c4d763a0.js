import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, jDt as n, vzt as r, xMt as i, yzt as a } from "./app-shared-bbfeca5e5737.js";
import { xPn as o, yPn as s } from "./app-initial-5851df3f6cb1.js";
function c(e) {
  let n = (0, u.c)(3),
    { disabledBy: r } = e;
  if (r === `openai`) {
    let e;
    return (
      n[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, f.jsx)(t, {
            id: `appgenPage.disabledByOpenAI.tooltip`,
            defaultMessage: `Your site may violate OpenAI policies. <learnMore>Learn more</learnMore>`,
            description: `Tooltip explaining why OpenAI disabled a site in the Sites list and linking to the ChatGPT Sites Terms`,
            values: { learnMore: l },
          })),
          (n[0] = e))
        : (e = n[0]),
      e
    );
  }
  if (r !== `workspace_admin`) {
    let e;
    return (
      n[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, f.jsx)(t, {
            id: `appgenPage.disabledUnknown.tooltip`,
            defaultMessage: `Disabled`,
            description: `Tooltip for a disabled site whose disabling actor is unavailable`,
          })),
          (n[1] = e))
        : (e = n[1]),
      e
    );
  }
  let i;
  return (
    n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, f.jsx)(t, {
          id: `appgenPage.disabled.tooltip`,
          defaultMessage: `Disabled by an admin`,
          description: `Tooltip explaining why a workspace admin disabled a site in the Sites list`,
        })),
        (n[2] = i))
      : (i = n[2]),
    i
  );
}
function l(e) {
  return (0, f.jsx)(
    s,
    {
      className: `text-info underline decoration-current underline-offset-2`,
      href: p,
      initiator: `sites_library`,
      children: d.Children.toArray(e),
    },
    `sites-terms-link`,
  );
}
var u, d, f, p;
function m() {
  return (m = e(() => {
    ((u = r()), (d = a()), n(), o(), (f = i()), (p = `https://openai.com/policies/chatgpt-sites-terms/`));
  }))();
}
export { m as n, c as t };
//# sourceMappingURL=appgen-disabled-tooltip-1654c4d763a0.js.map
