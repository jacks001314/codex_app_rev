import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBt as t, LNt as n, PBt as r, XOt as i, tkt as a } from "./app-shared-2feb3d4c6fcc.js";
import { GLn as o, qLn as s } from "./app-initial-ad16eaadf81f.js";
function c(e) {
  let t = (0, u.c)(3),
    { disabledBy: n } = e;
  if (n === `openai`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, f.jsx)(a, {
            id: `appgenPage.disabledByOpenAI.tooltip`,
            defaultMessage: `Your site may violate OpenAI policies. <learnMore>Learn more</learnMore>`,
            description: `Tooltip explaining why OpenAI disabled a site in the Sites list and linking to the ChatGPT Sites Terms`,
            values: { learnMore: l },
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n !== `workspace_admin`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, f.jsx)(a, {
            id: `appgenPage.disabledUnknown.tooltip`,
            defaultMessage: `Disabled`,
            description: `Tooltip for a disabled site whose disabling actor is unavailable`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, f.jsx)(a, {
          id: `appgenPage.disabled.tooltip`,
          defaultMessage: `Disabled by an admin`,
          description: `Tooltip explaining why a workspace admin disabled a site in the Sites list`,
        })),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function l(e) {
  return (0, f.jsx)(
    o,
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
    ((u = r()), (d = t()), i(), s(), (f = n()), (p = `https://openai.com/policies/chatgpt-sites-terms/`));
  }))();
}
export { m as n, c as t };
//# sourceMappingURL=appgen-disabled-tooltip-72287f1924e6.js.map
