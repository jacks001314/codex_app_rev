import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Csr as t, Dsr as n, Edn as r, Msr as i, Tdn as a } from "./app-initial-5851df3f6cb1.js";
function o(e, n, { hostId: a, signal: o, appConnectOptions: s, suppressSuccessToast: c }) {
  return new Promise((l) => {
    let u = null,
      d = !1,
      f = (e) => {
        d || ((d = !0), o.removeEventListener(`abort`, p), l(e));
      },
      p = () => {
        let n = e.get(i);
        (u != null && n.kind !== `closed` && n.requestId === u && e.set(i, t(n)), f(`cancelled`));
      };
    if ((o.addEventListener(`abort`, p, { once: !0 }), o.aborted)) {
      p();
      return;
    }
    if (
      !r(e, n, {
        hostId: a,
        appConnectOptions: s,
        suppressSuccessToast: c,
        onSuccess: () => f(`installed`),
        onCancel: () => f(`cancelled`),
        onError: () => f(`failed`),
      })
    ) {
      f(`failed`);
      return;
    }
    let m = e.get(i);
    u = m.kind === `closed` ? null : (m.requestId ?? null);
  });
}
function s() {
  return (s = e(() => {
    (n(), a());
  }))();
}
var c;
function l() {
  return (l = e(() => {
    c = `connector_openai_write_like_me`;
  }))();
}
export { o as i, l as n, s as r, c as t };
//# sourceMappingURL=contracts-80c91d59a0a6.js.map
