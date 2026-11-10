import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, jDt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
import { JPn as a, XPn as o } from "./app-initial-5851df3f6cb1.js";
function s() {
  let e = (0, u.c)(2),
    n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, d.jsx)(`div`, {
          className: `text-sm text-codex-description`,
          children: (0, d.jsx)(t, {
            id: `turnRatingControls.feedbackLegalNotice`,
            defaultMessage: `Your feedback can be used to improve ChatGPT. <link>Learn more</link>.`,
            description: `Legal notice shown below feedback details`,
            values: { link: c },
          }),
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function c(e) {
  return (0, d.jsx)(`a`, {
    className: `underline underline-offset-2`,
    href: f,
    rel: `noreferrer`,
    target: `_blank`,
    onClick: l,
    children: e,
  });
}
function l(e) {
  o({ event: e, href: f, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
}
var u, d, f;
function p() {
  return (p = e(() => {
    ((u = r()),
      n(),
      a(),
      (d = i()),
      (f = `https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance`));
  }))();
}
export { p as n, s as t };
//# sourceMappingURL=feedback-legal-notice-b9fb88ae9820.js.map
