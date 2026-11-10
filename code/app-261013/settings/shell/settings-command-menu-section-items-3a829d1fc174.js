import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  D9 as n,
  IDt as r,
  Ixt as i,
  Mz as a,
  Nz as o,
  Pxt as s,
  Rnt as c,
  VDt as l,
  gPt as u,
  hPt as d,
  jDt as f,
  vzt as p,
  wot as m,
  xMt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  $lr as g,
  Hm as _,
  JPn as v,
  QDr as y,
  Vm as b,
  XDr as x,
  ZPn as S,
  a4 as C,
  eDr as w,
  eur as T,
  fur as E,
  i4 as D,
  l4 as O,
  lIr as k,
  nDr as A,
  nF as j,
  pur as M,
  rF as N,
  u4 as P,
  uIr as F,
} from "./app-initial-5851df3f6cb1.js";
import {
  a as I,
  i as L,
  n as R,
  o as z,
  r as B,
  s as V,
  t as H,
} from "./use-visible-settings-sections-c1893dca184a.js";
function U(e) {
  let t = (0, K.c)(18),
    { close: n, isSelectedHostLocal: r, selectedHostId: i, onNavigate: a } = e,
    { openAIAuth: o, isLoading: s } = M(),
    c = A(I),
    { visibleSettingsSections: l, settingsNavigationSections: u } = R(null, r, i),
    d;
  if (t[0] !== u || t[1] !== l) {
    let e;
    (t[3] === u
      ? (e = t[4])
      : ((e = (e) =>
          !e.disabled && ((e.slug !== `cloud-settings` && e.slug !== `cloud-environments`) || u.includes(e))),
        (t[3] = u),
        (t[4] = e)),
      (d = l.filter(e)),
      (t[0] = u),
      (t[1] = l),
      (t[2] = d));
  } else d = t[2];
  let f = d;
  if (f.length === 0) return null;
  let p;
  t[5] !== s || t[6] !== o
    ? ((p = !s && o === `chatgpt` ? [z.account] : []), (t[5] = s), (t[6] = o), (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] === c ? (m = t[9]) : ((m = c ? [z.securitySettings] : []), (t[8] = c), (t[9] = m));
  let h;
  t[10] !== p || t[11] !== m ? ((h = [...p, ...m]), (t[10] = p), (t[11] = m), (t[12] = h)) : (h = t[12]);
  let g;
  return (
    t[13] !== n || t[14] !== a || t[15] !== f || t[16] !== h
      ? ((g = (0, q.jsx)(W, { close: n, onNavigate: a, externalItems: h, settingsSections: f })),
        (t[13] = n),
        (t[14] = a),
        (t[15] = f),
        (t[16] = h),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
function W(e) {
  let t = (0, K.c)(19),
    { close: n, externalItems: i, settingsSections: a, onNavigate: o } = e,
    s = l(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, q.jsx)(`span`, {
        className: `block px-2 pt-2 text-sm text-codex-description`,
        children: (0, q.jsx)(r, {
          id: `codex.commandMenu.settingsGroup`,
          defaultMessage: `Settings`,
          description: `Command group label for settings sections in the command menu`,
        }),
      })),
      (t[0] = c))
    : (c = t[0]);
  let u;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { gap: `var(--spacing)` }), (t[1] = u))
    : (u = t[1]);
  let d;
  if (t[2] !== n || t[3] !== o || t[4] !== a) {
    let e;
    (t[6] !== n || t[7] !== o
      ? ((e = (e) => (0, q.jsx)(G, { close: n, section: e, onNavigate: o }, e.slug)),
        (t[6] = n),
        (t[7] = o),
        (t[8] = e))
      : (e = t[8]),
      (d = a.map(e)),
      (t[2] = n),
      (t[3] = o),
      (t[4] = a),
      (t[5] = d));
  } else d = t[5];
  let f;
  if (t[9] !== n || t[10] !== i || t[11] !== s) {
    let e;
    (t[13] !== n || t[14] !== s
      ? ((e = (e) => {
          let t = s.formatMessage(e.message);
          return (0, q.jsx)(
            D,
            {
              value: `settings ${t}`,
              title: t,
              LeftIcon: e.icon,
              RightIcon: b,
              onSelect: () => {
                (S({ href: e.href, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }),
                  n());
              },
            },
            e.href,
          );
        }),
        (t[13] = n),
        (t[14] = s),
        (t[15] = e))
      : (e = t[15]),
      (f = i.map(e)),
      (t[9] = n),
      (t[10] = i),
      (t[11] = s),
      (t[12] = f));
  } else f = t[12];
  let p;
  return (
    t[16] !== d || t[17] !== f
      ? ((p = (0, q.jsxs)(O.Group, { heading: c, className: `flex flex-col`, style: u, children: [d, f] })),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p))
      : (p = t[18]),
    p
  );
}
function G(e) {
  let r = (0, K.c)(24),
    { close: o, section: s, onNavigate: c } = e,
    d = i(t),
    f = l(),
    { platform: p } = T(),
    m;
  if (r[0] !== f || r[1] !== s.slug) {
    let e = j(s.slug);
    ((m = f.formatMessage(e, e.values)), (r[0] = f), (r[1] = s.slug), (r[2] = m));
  } else m = r[2];
  let h = m,
    g;
  r[3] !== p || r[4] !== s.slug ? ((g = B(s.slug, p)), (r[3] = p), (r[4] = s.slug), (r[5] = g)) : (g = r[5]);
  let _ = g,
    v = `settings ${h}${s.slug === `mcp-settings` ? ` mcp settings` : ``}`,
    x;
  r[6] === s.slug
    ? (x = r[7])
    : ((x = s.slug === `connections` ? [`remote`, `ssh`] : void 0), (r[6] = s.slug), (r[7] = x));
  let S = _.commandAsset == null ? _.component : void 0,
    C;
  r[8] === _.commandAsset
    ? (C = r[9])
    : ((C =
        _.commandAsset == null
          ? void 0
          : (0, q.jsx)(a, { className: `shrink-0`, asset: _.commandAsset, "aria-hidden": !1 })),
      (r[8] = _.commandAsset),
      (r[9] = C));
  let w = s.appRoute == null ? void 0 : b,
    E;
  r[10] !== o || r[11] !== c || r[12] !== d || r[13] !== s.appRoute || r[14] !== s.slug
    ? ((E = () => {
        let e = !1;
        if (s.appRoute != null) {
          if (c != null) ((e = !0), c(s.appRoute));
          else if (!F(d, s.appRoute)) return;
        } else
          c == null
            ? u.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings/${s.slug}` })
            : ((e = !0), c(`/settings/${s.slug}`));
        (s.slug === `profile` && y(d, n, { source: `command_menu` }), e || o());
      }),
      (r[10] = o),
      (r[11] = c),
      (r[12] = d),
      (r[13] = s.appRoute),
      (r[14] = s.slug),
      (r[15] = E))
    : (E = r[15]);
  let O;
  return (
    r[16] !== v || r[17] !== x || r[18] !== S || r[19] !== C || r[20] !== w || r[21] !== E || r[22] !== h
      ? ((O = (0, q.jsx)(D, {
          value: v,
          title: h,
          keywords: x,
          LeftIcon: S,
          leftAccessory: C,
          RightIcon: w,
          onSelect: E,
        })),
        (r[16] = v),
        (r[17] = x),
        (r[18] = S),
        (r[19] = C),
        (r[20] = w),
        (r[21] = E),
        (r[22] = h),
        (r[23] = O))
      : (O = r[23]),
    O
  );
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = p()),
      c(),
      P(),
      s(),
      f(),
      k(),
      E(),
      C(),
      v(),
      o(),
      g(),
      _(),
      d(),
      x(),
      m(),
      V(),
      L(),
      N(),
      H(),
      w(),
      (q = h()));
  }))();
}
J();
export { U as VisibleSettingsCommandMenuSectionItems };
//# sourceMappingURL=settings-command-menu-section-items-3a829d1fc174.js.map
