import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, VDt as n, jDt as r, vzt as i, xMt as a, zxt as o } from "./app-shared-bbfeca5e5737.js";
import { Q3n as s, e6n as c, wsn as l, xsn as u } from "./app-initial-5851df3f6cb1.js";
import { n as d, t as f } from "./collaborator-avatar-cfdc8d7a57ac.js";
import { n as p, t as m } from "./facepile-b69f19009d4d.js";
function h() {
  let e = (0, g.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, _.jsx)(`span`, {
          className: `inline-flex size-6 shrink-0 overflow-hidden rounded-full`,
          "aria-hidden": !0,
          children: (0, _.jsx)(s, { as: `span`, size: `fill` }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var g, _;
function v() {
  return (v = e(() => {
    ((g = i()), c(), (_ = a()));
  }))();
}
function y(e) {
  let t = (0, x.c)(13),
    { pageId: r, collapsible: i, people: a, showPlaceholder: s } = e,
    c = i === void 0 || i,
    u = s !== void 0 && s,
    d = n(),
    f = o(l, r ?? null);
  if (a.length === 0 && !u) return null;
  let p;
  t[0] !== d || t[1] !== f?.document_type
    ? ((p = d.formatMessage(
        {
          id: `codex.space.page.collaborator.groupLabel.byDocumentType`,
          defaultMessage: `{documentType, select, granola_presentation {Slide collaborators} granola_workbook {Sheet collaborators} other {Page collaborators}}`,
          description: `Accessible label for the collaborator avatars in a Page header; the group can include active people and known direct collaborators, but does not represent everyone with access. documentType selects slide, sheet, or page for the current document.`,
        },
        { documentType: f?.document_type ?? `page` },
      )),
      (t[0] = d),
      (t[1] = f?.document_type),
      (t[2] = p))
    : (p = t[2]);
  let h = a.length === 0 || void 0,
    g = c || void 0,
    _;
  t[3] === u ? (_ = t[4]) : ((_ = u ? (0, S.jsx)(b, {}) : void 0), (t[3] = u), (t[4] = _));
  let v;
  t[5] !== a || t[6] !== _
    ? ((v = (0, S.jsx)(m, { people: a, placeholder: _ })), (t[5] = a), (t[6] = _), (t[7] = v))
    : (v = t[7]);
  let y;
  return (
    t[8] !== p || t[9] !== h || t[10] !== g || t[11] !== v
      ? ((y = (0, S.jsx)(`div`, {
          className: `flex min-w-0 items-center select-none`,
          "aria-label": p,
          "aria-busy": h,
          "data-viewer-header-collapsible": g,
          role: `group`,
          children: v,
        })),
        (t[8] = p),
        (t[9] = h),
        (t[10] = g),
        (t[11] = v),
        (t[12] = y))
      : (y = t[12]),
    y
  );
}
function b() {
  let e = (0, x.c)(5),
    t = n(),
    r;
  e[0] === t
    ? (r = e[1])
    : ((r = t.formatMessage({
        id: `codex.space.page.collaborator.loading`,
        defaultMessage: `Loading collaborators`,
        description: `Tooltip for the reserved avatar while a Page's collaborator roster loads`,
      })),
      (e[0] = t),
      (e[1] = r));
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = (0, S.jsx)(h, {})), (e[2] = i)) : (i = e[2]);
  let a;
  return (
    e[3] === r ? (a = e[4]) : ((a = (0, S.jsx)(f, { tooltip: r, children: i })), (e[3] = r), (e[4] = a)),
    a
  );
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = i()), t(), r(), d(), v(), p(), u(), (S = a()));
  }))();
}
export { v as i, C as n, h as r, y as t };
//# sourceMappingURL=facepile-4ea3da6a7b88.js.map
