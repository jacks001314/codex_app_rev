import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, VDt as n, jDt as r, vzt as i, xMt as a } from "./app-shared-bbfeca5e5737.js";
import { DPn as o, TPn as s } from "./app-initial-5851df3f6cb1.js";
function c(e, t) {
  return e !== `` && t === e;
}
function l(e, t, n = !1) {
  let r = e ?? t,
    i = r.trim();
  return {
    isInvalid: e != null && i.length === 0,
    title: r,
    update: e != null && i.length > 0 && (i !== t || n) ? { title: i } : null,
  };
}
function u() {
  return (u = e(() => {}))();
}
function d(e) {
  let n = (0, m.c)(2),
    { siteSlug: r } = e,
    i;
  return (
    n[0] === r
      ? (i = n[1])
      : ((i = (0, h.jsx)(t, {
          id: `appgenSettings.deleteDialog.subtitle`,
          defaultMessage: `Deleting your site will take it offline permanently and delete any data users have uploaded. Please type <strong>{siteSlug}</strong> below:`,
          description: `Subtitle for dialog confirming deletion of a site`,
          values: { siteSlug: r, strong: f },
        })),
        (n[0] = r),
        (n[1] = i)),
    i
  );
}
function f(e) {
  return (0, h.jsx)(`strong`, { children: e });
}
function p(e) {
  let t = (0, m.c)(11),
    { siteSlug: r, confirmationSlug: i, onChange: a, pending: o, autoFocus: c } = e,
    l = c === void 0 || c,
    u = n(),
    d;
  t[0] === u
    ? (d = t[1])
    : ((d = u.formatMessage({
        id: `appgenSettings.deleteDialog.slugInputLabel`,
        defaultMessage: `Site slug`,
        description: `Accessible label for the site slug input used to confirm site deletion`,
      })),
      (t[0] = u),
      (t[1] = d));
  let f;
  t[2] === a ? (f = t[3]) : ((f = (e) => a(e.target.value)), (t[2] = a), (t[3] = f));
  let p;
  return (
    t[4] !== l || t[5] !== i || t[6] !== o || t[7] !== r || t[8] !== d || t[9] !== f
      ? ((p = (0, h.jsx)(s, {
          variant: `code`,
          "aria-label": d,
          autoFocus: l,
          disabled: o,
          placeholder: r,
          spellCheck: !1,
          type: `text`,
          value: i,
          onChange: f,
        })),
        (t[4] = l),
        (t[5] = i),
        (t[6] = o),
        (t[7] = r),
        (t[8] = d),
        (t[9] = f),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = i()), r(), o(), (h = a()));
  }))();
}
export { u as a, l as i, d as n, c as o, g as r, p as t };
//# sourceMappingURL=site-delete-confirmation-b17089235f40.js.map
