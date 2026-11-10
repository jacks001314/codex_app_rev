import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $4t as t,
  FDt as n,
  KYt as r,
  PDt as i,
  Q4t as a,
  Z4t as o,
  e4t as s,
  i3t as c,
  r3t as l,
  vUt as u,
  yUt as d,
} from "./app-initial-f094ef01c64d.js";
async function f({
  scope: e,
  hostId: t = s,
  signal: n,
  useHostedLoginSuccessPage: r,
  useStreamlinedLogin: i,
}) {
  return m(
    l(e, t).createChatGptLoginSession({
      ...(r ? { appBrand: `chatgpt` } : {}),
      useHostedLoginSuccessPage: r,
      useStreamlinedLogin: i,
    }),
    n,
  );
}
function p({ scope: e, signal: t }) {
  return m(l(e, s).createChatGptDeviceCodeLoginSession(), t);
}
async function m(e, t) {
  let n = () => {
    e.cancel().catch(() => void 0);
  };
  t?.aborted ? n() : t?.addEventListener(`abort`, n, { once: !0 });
  try {
    return {
      ...(await e.getStartResult()),
      completion: e
        .waitForCompletion()
        .catch((e) => {
          throw t?.aborted ? u() : e;
        })
        .finally(() => {
          (t?.removeEventListener(`abort`, n), e[Symbol.dispose]());
        }),
    };
  } catch (r) {
    throw (t?.removeEventListener(`abort`, n), e[Symbol.dispose](), t?.aborted ? u() : r);
  }
}
var h = e(() => {
  (c(), r(), d());
});
function g({
  allowedWorkspaceId: e,
  authUrl: t,
  codexAppVersion: n,
  currentWorkspaceId: r,
  desktopAuthOrigin: i,
  loginHint: a,
  sourceSurfaceStableId: s = y.StableID.get(o),
  includeCodexOriginStableId: c = !1,
  useDesktopAuth: l,
  useStreamlinedLoginUx: u,
}) {
  let d = !!(e || n || r || a || s);
  if (!d && !l && !u) return t;
  try {
    let o = new URL(t);
    if (o.pathname === b) {
      let t = o.searchParams.get(`authorize_url`);
      if (d && t) {
        let i = new URL(t);
        (v(i, e, n, r, a, s, c), o.searchParams.set(`authorize_url`, i.toString()));
      }
      return (u && o.searchParams.set(w, `true`), o.toString());
    }
    if ((d && v(o, e, n, r, a, s, c), u && o.searchParams.set(w, `true`), !l)) return o.toString();
    let f = new URL(b, i?.trim() || x);
    return (
      f.searchParams.set(`authorize_url`, o.toString()),
      u && f.searchParams.set(w, `true`),
      f.toString()
    );
  } catch {
    return t;
  }
}
function _(e) {
  return e.get(i).data?.version;
}
function v(e, t, n, r, i, a, o) {
  (t && e.searchParams.set(T, t),
    n && e.searchParams.set(S, n),
    r && e.searchParams.set(E, r),
    i && e.searchParams.set(D, i),
    a && (e.searchParams.set(O, a), o && e.searchParams.set(C, a)));
}
var y,
  b,
  x,
  S,
  C,
  w,
  T,
  E,
  D,
  O,
  k = e(() => {
    ((y = t()),
      n(),
      a(),
      (b = `/codex/desktop-auth`),
      (x = `https://chatgpt.com`),
      (S = `codex_app_version`),
      (C = `codex_origin_stable_id`),
      (w = `codex_streamlined_login`),
      (T = `allowed_workspace_id`),
      (E = `current_workspace_id`),
      (D = `login_hint`),
      (O = `source_surface_stable_id`));
  });
export { p as a, h as i, _ as n, f as o, k as r, g as t };
//# sourceMappingURL=chatgpt-desktop-auth-url-2a0627f4c041.js.map
