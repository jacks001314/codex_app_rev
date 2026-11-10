import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Vpt as t, sct as n } from "./app-shared-2feb3d4c6fcc.js";
import { Lpn as r, Ypn as i } from "./app-initial-ad16eaadf81f.js";
function a(e) {
  return `${l}${encodeURIComponent(e)}`;
}
function o(e) {
  if (e.node.kind !== `file` || !t(e.node.id)) return;
  let n = i(e);
  return n === `native` || n === `native_shared` ? a(e.node.id) : void 0;
}
function s(e, t) {
  if (!c(e.pathname)) return t;
  let n = e.state?.libraryPreview?.returnLocation;
  return n != null && n.pathname.startsWith(`/space`) && !c(n.pathname) ? n.pathname + n.search : `/space`;
}
function c(e) {
  return e.startsWith(l);
}
var l;
function u() {
  return (u = e(() => {
    (n(), r(), (l = `/space/file/`));
  }))();
}
export { c as a, u as i, o as n, a as r, s as t };
//# sourceMappingURL=space-library-file-route-fc4068b09fe5.js.map
