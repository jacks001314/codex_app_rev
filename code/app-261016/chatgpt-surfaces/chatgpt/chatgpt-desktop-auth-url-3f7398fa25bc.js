import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Mnr as t, _Br as n, jnr as r, nM as i, tM as a } from "./app-initial-ad16eaadf81f.js";
function o({
  allowedWorkspaceId: e,
  authUrl: t,
  codexAppVersion: n,
  currentWorkspaceId: r,
  desktopAuthOrigin: i,
  loginHint: o,
  sourceSurfaceStableId: s = l.StableID.get(a),
  includeCodexOriginStableId: f = !1,
  useDesktopAuth: p,
  useStreamlinedLoginUx: h,
}) {
  let g = !!(e || n || r || o || s);
  if (!g && !p && !h) return t;
  try {
    let a = new URL(t);
    if (a.pathname === u) {
      let t = a.searchParams.get(`authorize_url`);
      if (g && t) {
        let i = new URL(t);
        (c(i, e, n, r, o, s, f), a.searchParams.set(`authorize_url`, i.toString()));
      }
      return (h && a.searchParams.set(m, `true`), a.toString());
    }
    if ((g && c(a, e, n, r, o, s, f), h && a.searchParams.set(m, `true`), !p)) return a.toString();
    let l = new URL(u, i?.trim() || d);
    return (
      l.searchParams.set(`authorize_url`, a.toString()),
      h && l.searchParams.set(m, `true`),
      l.toString()
    );
  } catch {
    return t;
  }
}
function s(e) {
  return e.get(r).data?.version;
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
    ((l = n()),
      t(),
      i(),
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
//# sourceMappingURL=chatgpt-desktop-auth-url-3f7398fa25bc.js.map
