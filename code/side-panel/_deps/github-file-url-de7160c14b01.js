import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Aen as t,
  B6t as n,
  H4t as r,
  J4t as i,
  Nen as a,
  U4t as o,
  _Jt as s,
  _Ut as c,
  gUt as l,
  jen as u,
  pJt as d,
  q4t as f,
  t7t as p,
} from "./app-initial-f094ef01c64d.js";
async function m({ cwd: e, hostConfig: t, operationSource: n, path: r }) {
  let i = (await d(`git-origins`, { params: { dirs: [e], hostId: t.id }, source: n })).origins[0];
  if (i == null) return null;
  let { branch: a } = await c(`git`).request({
    method: `current-branch`,
    params: { hostConfig: t, operationSource: n, root: i.root },
  });
  return h({ branch: a, cwd: e, path: r, remoteUrl: i.originUrl, root: i.root });
}
function h({ branch: e, cwd: n, path: r, remoteUrl: s, root: c }) {
  let l = e?.trim();
  if (s == null || !l) return null;
  let d = p(s);
  if (d?.host.toLowerCase() !== `github.com`) return null;
  let m = a(f(c)).replace(/\/+$/, ``),
    h = a(f(o(r) ? r : i(n, r))),
    _ = t(m) || u(m),
    v = _ ? m.toLowerCase() : m;
  if (!(_ ? h.toLowerCase() : h).startsWith(`${v}/`)) return null;
  let y = h.slice(m.length + 1);
  return `https://github.com/${g(d.owner)}/${g(d.repo)}/blob/${g(l)}/${g(y)}`;
}
function g(e) {
  return e.split(`/`).map(encodeURIComponent).join(`/`);
}
var _ = e(() => {
  (n(), r(), s(), l());
});
export { h as n, _ as r, m as t };
//# sourceMappingURL=github-file-url-de7160c14b01.js.map
