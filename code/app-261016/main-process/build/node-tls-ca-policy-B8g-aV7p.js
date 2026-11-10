let e = require("node:crypto"),
  t = require("node:tls");
var n = `86A1ECBA089C4A8D3BBE2734C612BA341D813E043CF9E8A862CD5C57A36BBE6B`;
function r(e) {
  return e.filter((e) => a(e) !== n);
}
function i() {
  let e = (0, t.getCACertificates)(`default`),
    n = r(e);
  n.length !== e.length && (0, t.setDefaultCACertificates)(n);
  let i = (0, t.getCACertificates)(`default`);
  if (r(i).length !== i.length) throw Error(`Failed to remove emSign ECC Root CA - G3`);
}
function a(t) {
  return new e.X509Certificate(t).fingerprint256.replaceAll(`:`, ``).toUpperCase();
}
(Object.defineProperty(exports, "n", {
  enumerable: !0,
  get: function () {
    return r;
  },
}),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return i;
    },
  }));
//# sourceMappingURL=node-tls-ca-policy-B8g-aV7p.js.map
