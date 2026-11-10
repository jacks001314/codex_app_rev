import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IPr as t, d9n as n, gj as r, hj as i, u9n as a } from "./app-initial-5851df3f6cb1.js";
function o({
  allowedWorkspaceId: e,
  authUrl: t,
  codexAppVersion: n,
  currentWorkspaceId: r,
  desktopAuthOrigin: a,
  loginHint: o,
  sourceSurfaceStableId: s = l.StableID.get(i),
  includeCodexOriginStableId: f = !1,
  useDesktopAuth: p,
  useStreamlinedLoginUx: h,
}) {
  let g = !!(e || n || r || o || s);
  if (!g && !p && !h) return t;
  try {
    let i = new URL(t);
    if (i.pathname === u) {
      let t = i.searchParams.get(`authorize_url`);
      if (g && t) {
        let a = new URL(t);
        (c(a, e, n, r, o, s, f), i.searchParams.set(`authorize_url`, a.toString()));
      }
      return (h && i.searchParams.set(m, `true`), i.toString());
    }
    if ((g && c(i, e, n, r, o, s, f), h && i.searchParams.set(m, `true`), !p)) return i.toString();
    let l = new URL(u, a?.trim() || d);
    return (
      l.searchParams.set(`authorize_url`, i.toString()),
      h && l.searchParams.set(m, `true`),
      l.toString()
    );
  } catch {
    return t;
  }
}
function s(e) {
  return e.get(a).data?.version;
}
function c(e, t, n, r, i, a, o) {
  (t && e.searchParams.set(h, t),
    n && e.searchParams.set(f, n),
    r && e.searchParams.set(g, r),
    i && e.searchParams.set(_, i),
    a && (e.searchParams.set(v, a), o && e.searchParams.set(p, a)));
}
var l, u, d, f, p, m, h, g, _, v;
function y() {
  return (y = e(() => {
    ((l = t()),
      n(),
      r(),
      (u = `/codex/desktop-auth`),
      (d = `https://chatgpt.com`),
      (f = `codex_app_version`),
      (p = `codex_origin_stable_id`),
      (m = `codex_streamlined_login`),
      (h = `allowed_workspace_id`),
      (g = `current_workspace_id`),
      (_ = `login_hint`),
      (v = `source_surface_stable_id`));
  }))();
}
export { s as n, y as r, o as t };
//# sourceMappingURL=chatgpt-desktop-auth-url-ac1ccaaae86b.js.map
