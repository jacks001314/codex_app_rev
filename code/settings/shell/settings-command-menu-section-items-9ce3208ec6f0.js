import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  Cpn as n,
  HS as r,
  M6t as i,
  Mv as a,
  O3t as o,
  Opn as s,
  P6t as c,
  QXt as l,
  Spn as u,
  US as d,
  a3t as f,
  aYt as p,
  bmn as m,
  e0t as h,
  eZt as g,
  fs as _,
  h$t as v,
  hmn as y,
  hv as b,
  jv as x,
  kmn as S,
  mv as C,
  o3t as w,
  ps as T,
  sYt as E,
  xmn as D,
} from "./app-initial-f094ef01c64d.js";
import {
  a as O,
  i as k,
  n as A,
  o as j,
  r as M,
  s as N,
  t as P,
} from "./use-visible-settings-sections-cc4e77dbddd0.js";
function F(e) {
  let t = (0, z.c)(8),
    { close: n, isSelectedHostLocal: r, selectedHostId: i } = e,
    a = E(O),
    { visibleSettingsSections: o } = A(null, r, i),
    s;
  t[0] === o ? (s = t[1]) : ((s = o.filter(I)), (t[0] = o), (t[1] = s));
  let c = s;
  if (c.length === 0) return null;
  let l;
  t[2] === a
    ? (l = t[3])
    : ((l = [j.account, ...(a ? [j.securitySettings] : [])]), (t[2] = a), (t[3] = l));
  let u;
  return (
    t[4] !== n || t[5] !== c || t[6] !== l
      ? ((u = (0, B.jsx)(L, { close: n, externalItems: l, settingsSections: c })),
        (t[4] = n),
        (t[5] = c),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function I(e) {
  return !e.disabled;
}
function L(e) {
  let t = (0, z.c)(17),
    { close: r, externalItems: i, settingsSections: a } = e,
    o = s(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, B.jsx)(`span`, {
        className: `block px-2 pt-2 text-sm text-codex-description`,
        children: (0, B.jsx)(n, {
          id: `codex.commandMenu.settingsGroup`,
          defaultMessage: `Settings`,
          description: `Command group label for settings sections in the command menu`,
        }),
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { gap: `var(--spacing)` }), (t[1] = u))
    : (u = t[1]);
  let d;
  if (t[2] !== r || t[3] !== a) {
    let e;
    (t[5] === r
      ? (e = t[6])
      : ((e = (e) => (0, B.jsx)(R, { close: r, section: e }, e.slug)), (t[5] = r), (t[6] = e)),
      (d = a.map(e)),
      (t[2] = r),
      (t[3] = a),
      (t[4] = d));
  } else d = t[4];
  let f;
  if (t[7] !== r || t[8] !== i || t[9] !== o) {
    let e;
    (t[11] !== r || t[12] !== o
      ? ((e = (e) => {
          let t = o.formatMessage(e.message);
          return (0, B.jsx)(
            C,
            {
              value: `settings ${t}`,
              title: t,
              LeftIcon: e.icon,
              RightIcon: _,
              onSelect: () => {
                (c({
                  href: e.href,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }),
                  r());
              },
            },
            e.href,
          );
        }),
        (t[11] = r),
        (t[12] = o),
        (t[13] = e))
      : (e = t[13]),
      (f = i.map(e)),
      (t[7] = r),
      (t[8] = i),
      (t[9] = o),
      (t[10] = f));
  } else f = t[10];
  let p;
  return (
    t[14] !== d || t[15] !== f
      ? ((p = (0, B.jsxs)(x.Group, {
          heading: l,
          className: `flex flex-col`,
          style: u,
          children: [d, f],
        })),
        (t[14] = d),
        (t[15] = f),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
function R(e) {
  let n = (0, z.c)(14),
    { close: i, section: a } = e,
    o = t(f),
    l = s(),
    u;
  n[0] !== l || n[1] !== a.slug
    ? ((u = l.formatMessage(r(a.slug))), (n[0] = l), (n[1] = a.slug), (n[2] = u))
    : (u = n[2]);
  let d = u,
    p = `settings ${d}${a.slug === `mcp-settings` ? ` mcp settings` : ``}`,
    m = M[a.slug],
    h = a.externalUrl == null ? void 0 : _,
    y;
  n[3] !== i || n[4] !== o || n[5] !== a.externalUrl || n[6] !== a.slug
    ? ((y = () => {
        (a.externalUrl == null
          ? (a.slug === `profile` && g(o, v, { source: `command_menu` }),
            D.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings/${a.slug}` }))
          : c({ href: a.externalUrl, initiator: `open_in_browser_bridge` }),
          i());
      }),
      (n[3] = i),
      (n[4] = o),
      (n[5] = a.externalUrl),
      (n[6] = a.slug),
      (n[7] = y))
    : (y = n[7]);
  let b;
  return (
    n[8] !== p || n[9] !== m || n[10] !== h || n[11] !== y || n[12] !== d
      ? ((b = (0, B.jsx)(C, { value: p, title: d, LeftIcon: m, RightIcon: h, onSelect: y })),
        (n[8] = p),
        (n[9] = m),
        (n[10] = h),
        (n[11] = y),
        (n[12] = d),
        (n[13] = b))
      : (b = n[13]),
    b
  );
}
var z, B;
e(() => {
  ((z = S()), h(), a(), o(), u(), b(), i(), T(), m(), l(), w(), N(), k(), d(), P(), p(), (B = y()));
})();
export { F as VisibleSettingsCommandMenuSectionItems };
//# sourceMappingURL=settings-command-menu-section-items-9ce3208ec6f0.js.map
