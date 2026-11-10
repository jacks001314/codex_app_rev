import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, ZSt as i, nCt as a, okt as o } from "./app-shared-2feb3d4c6fcc.js";
import { F7n as s, L7n as c, hdn as l, vdn as u } from "./app-initial-ad16eaadf81f.js";
import { n as d, t as f } from "./collaborator-avatar-10a2fed246c1.js";
import { n as p, t as m } from "./facepile-9177ce707296.js";
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
    ((g = n()), c(), (_ = t()));
  }))();
}
function y(e) {
  let t = (0, x.c)(13),
    { pageId: n, collapsible: r, people: i, showPlaceholder: s } = e,
    c = r === void 0 || r,
    l = s !== void 0 && s,
    d = o(),
    f = a(u, n ?? null);
  if (i.length === 0 && !l) return null;
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
  let h = i.length === 0 || void 0,
    g = c || void 0,
    _;
  t[3] === l ? (_ = t[4]) : ((_ = l ? (0, S.jsx)(b, {}) : void 0), (t[3] = l), (t[4] = _));
  let v;
  t[5] !== i || t[6] !== _
    ? ((v = (0, S.jsx)(m, { people: i, placeholder: _ })), (t[5] = i), (t[6] = _), (t[7] = v))
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
    t = o(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `codex.space.page.collaborator.loading`,
        defaultMessage: `Loading collaborators`,
        description: `Tooltip for the reserved avatar while a Page's collaborator roster loads`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = (0, S.jsx)(h, {})), (e[2] = r)) : (r = e[2]);
  let i;
  return (
    e[3] === n ? (i = e[4]) : ((i = (0, S.jsx)(f, { tooltip: n, children: r })), (e[3] = n), (e[4] = i)),
    i
  );
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = n()), i(), r(), d(), v(), p(), l(), (S = t()));
  }))();
}
export { v as i, C as n, h as r, y as t };
//# sourceMappingURL=facepile-acf5586b71ad.js.map
