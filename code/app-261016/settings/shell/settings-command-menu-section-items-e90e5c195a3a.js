import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  Det as i,
  LNt as a,
  MFt as o,
  OB as s,
  PBt as c,
  Qst as l,
  Rrt as u,
  XOt as d,
  ZSt as f,
  jFt as p,
  okt as m,
  tkt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BF as g,
  CRn as _,
  Cjr as v,
  D3 as y,
  Hpr as b,
  M3 as x,
  Mir as S,
  N3 as C,
  Nir as w,
  O3 as T,
  Upr as E,
  bRn as D,
  ch as O,
  imr as k,
  rmr as A,
  sh as j,
  xMr as M,
  xjr as N,
  yMr as P,
  zF as F,
} from "./app-initial-ad16eaadf81f.js";
import {
  a as I,
  i as L,
  n as R,
  o as z,
  r as B,
  s as V,
  t as H,
} from "./use-visible-settings-sections-f3457cb7f00e.js";
function U(e) {
  let t = (0, K.c)(18),
    { close: n, isSelectedHostLocal: r, selectedHostId: i, onNavigate: a } = e,
    { openAIAuth: o, isLoading: s } = k(),
    c = v(I),
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
    { close: n, externalItems: r, settingsSections: i, onNavigate: a } = e,
    o = m(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, q.jsx)(`span`, {
        className: `block px-2 pt-2 text-sm text-codex-description`,
        children: (0, q.jsx)(h, {
          id: `codex.commandMenu.settingsGroup`,
          defaultMessage: `Settings`,
          description: `Command group label for settings sections in the command menu`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { gap: `var(--spacing)` }), (t[1] = c))
    : (c = t[1]);
  let l;
  if (t[2] !== n || t[3] !== a || t[4] !== i) {
    let e;
    (t[6] !== n || t[7] !== a
      ? ((e = (e) => (0, q.jsx)(G, { close: n, section: e, onNavigate: a }, e.slug)),
        (t[6] = n),
        (t[7] = a),
        (t[8] = e))
      : (e = t[8]),
      (l = i.map(e)),
      (t[2] = n),
      (t[3] = a),
      (t[4] = i),
      (t[5] = l));
  } else l = t[5];
  let u;
  if (t[9] !== n || t[10] !== r || t[11] !== o) {
    let e;
    (t[13] !== n || t[14] !== o
      ? ((e = (e) => {
          let t = o.formatMessage(e.message);
          return (0, q.jsx)(
            y,
            {
              value: `settings ${t}`,
              title: t,
              LeftIcon: e.icon,
              RightIcon: j,
              onSelect: () => {
                (_({ href: e.href, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }),
                  n());
              },
            },
            e.href,
          );
        }),
        (t[13] = n),
        (t[14] = o),
        (t[15] = e))
      : (e = t[15]),
      (u = r.map(e)),
      (t[9] = n),
      (t[10] = r),
      (t[11] = o),
      (t[12] = u));
  } else u = t[12];
  let d;
  return (
    t[16] !== l || t[17] !== u
      ? ((d = (0, q.jsxs)(x.Group, { heading: s, className: `flex flex-col`, style: c, children: [l, u] })),
        (t[16] = l),
        (t[17] = u),
        (t[18] = d))
      : (d = t[18]),
    d
  );
}
function G(e) {
  let n = (0, K.c)(24),
    { close: a, section: s, onNavigate: c } = e,
    u = t(l),
    d = m(),
    { platform: f } = E(),
    p;
  if (n[0] !== d || n[1] !== s.slug) {
    let e = F(s.slug);
    ((p = d.formatMessage(e, e.values)), (n[0] = d), (n[1] = s.slug), (n[2] = p));
  } else p = n[2];
  let h = p,
    g;
  n[3] !== f || n[4] !== s.slug ? ((g = B(s.slug, f)), (n[3] = f), (n[4] = s.slug), (n[5] = g)) : (g = n[5]);
  let _ = g,
    v = `settings ${h}${s.slug === `mcp-settings` ? ` mcp settings` : ``}`,
    b;
  n[6] === s.slug
    ? (b = n[7])
    : ((b = s.slug === `connections` ? [`remote`, `ssh`] : void 0), (n[6] = s.slug), (n[7] = b));
  let x = _.commandAsset == null ? _.component : void 0,
    S;
  n[8] === _.commandAsset
    ? (S = n[9])
    : ((S =
        _.commandAsset == null
          ? void 0
          : (0, q.jsx)(r, { className: `shrink-0`, asset: _.commandAsset, "aria-hidden": !1 })),
      (n[8] = _.commandAsset),
      (n[9] = S));
  let C = s.appRoute == null ? void 0 : j,
    T;
  n[10] !== a || n[11] !== c || n[12] !== u || n[13] !== s.appRoute || n[14] !== s.slug
    ? ((T = () => {
        let e = !1;
        if (s.appRoute != null) {
          if (c != null) ((e = !0), c(s.appRoute));
          else if (!w(u, s.appRoute)) return;
        } else
          c == null
            ? o.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings/${s.slug}` })
            : ((e = !0), c(`/settings/${s.slug}`));
        (s.slug === `profile` && M(u, i, { source: `command_menu` }), e || a());
      }),
      (n[10] = a),
      (n[11] = c),
      (n[12] = u),
      (n[13] = s.appRoute),
      (n[14] = s.slug),
      (n[15] = T))
    : (T = n[15]);
  let D;
  return (
    n[16] !== v || n[17] !== b || n[18] !== x || n[19] !== S || n[20] !== C || n[21] !== T || n[22] !== h
      ? ((D = (0, q.jsx)(y, {
          value: v,
          title: h,
          keywords: b,
          LeftIcon: x,
          leftAccessory: S,
          RightIcon: C,
          onSelect: T,
        })),
        (n[16] = v),
        (n[17] = b),
        (n[18] = x),
        (n[19] = S),
        (n[20] = C),
        (n[21] = T),
        (n[22] = h),
        (n[23] = D))
      : (D = n[23]),
    D
  );
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = c()),
      u(),
      C(),
      f(),
      d(),
      S(),
      A(),
      T(),
      D(),
      s(),
      b(),
      O(),
      p(),
      P(),
      n(),
      V(),
      L(),
      g(),
      H(),
      N(),
      (q = a()));
  }))();
}
J();
export { U as VisibleSettingsCommandMenuSectionItems };
//# sourceMappingURL=settings-command-menu-section-items-e90e5c195a3a.js.map
