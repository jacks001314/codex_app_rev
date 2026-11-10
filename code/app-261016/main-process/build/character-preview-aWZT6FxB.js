require("./rolldown-runtime-CPUxUITh.js");
function e(e, n) {
  if (t(new URL(e))) {
    let e = new Headers(n.headers);
    return (
      e.set(`Document-Isolation-Policy`, `isolate-and-require-corp`),
      e.set(`Content-Security-Policy`, `frame-ancestors 'self'`),
      new Response(n.body, { status: n.status, statusText: n.statusText, headers: e })
    );
  }
  return n;
}
function t(e) {
  return (
    e.protocol === `app:` &&
    e.host === `-` &&
    e.username === `` &&
    e.password === `` &&
    /^\/assets\/orbit-character-[a-f0-9]{16}\/[a-f0-9]{16}\/frame\.html$/.test(e.pathname)
  );
}
((exports.addCharacterPreviewHeaders = e), (exports.isCharacterPreviewFrameUrl = t));
//# sourceMappingURL=character-preview-aWZT6FxB.js.map
