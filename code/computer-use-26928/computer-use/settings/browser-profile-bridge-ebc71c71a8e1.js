import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  AE as n,
  AOt as r,
  Akt as i,
  BOt as a,
  CMt as o,
  Dkt as s,
  Ekt as c,
  Mkt as l,
  O5t as u,
  Okt as d,
  R1t as f,
  RJt as p,
  _dn as m,
  bvt as h,
  dJt as g,
  fJt as _,
  hvt as v,
  jkt as y,
  kE as b,
  kkt as x,
  vMt as S,
  vdn as C,
  yMt as w,
} from "./app-shared-7552fc8d5d82.js";
import { n as T, t as E } from "./chatgpt-user-granular-consent-218581f87f25.js";
import { s as D, t as O } from "./placement-policy-eef9788f4202.js";
function k(e, t) {
  if (t.aborted) return Promise.resolve();
  let n = s();
  return n == null
    ? Promise.resolve()
    : ((j = j.then(async () => {
        if (!(t.aborted || (M?.accountId === e && M.identifier === n)))
          try {
            let r = await v.safePost(`/bazaar/obi/sync-token`, {
                signal: t,
                additionalHeaders: { "ChatGPT-Account-ID": e, [f]: e },
                requestBody: { operation: `set`, obi: n },
              }),
              a = () =>
                !t.aborted && y(`__obi`, { consent: { analytics: !0, marketing: !1 } }) === n;
            if ((await i(), !a())) return;
            let o = await x({ token: r.token });
            a()
              ? o && (M = { accountId: e, identifier: n })
              : (y(`__obi`, { consent: { analytics: !0, marketing: !1 } }) ??
                  (await x({ operation: `clear` })),
                (M = void 0));
          } catch {}
      })),
      j);
}
function A() {
  ((M = void 0), c());
}
var j, M;
function N() {
  return (N = e(() => {
    (p(), d(), h(), l(), (j = Promise.resolve()));
  }))();
}
function P() {
  let e = (0, I.c)(3),
    n = t(g),
    r,
    i;
  return (
    e[0] === n
      ? ((r = e[1]), (i = e[2]))
      : ((r = () => n.watch(F)), (i = [n]), (e[0] = n), (e[1] = r), (e[2] = i)),
    (0, L.useEffect)(r, i),
    null
  );
}
function F(e) {
  let t = new AbortController(),
    n = e.get(b, { name: `chatgpt.ads` }),
    i = e.get(r),
    a = e.get(O);
  if (n.isLoading || e.get(o) || a == null) return;
  if (
    !(
      n.isCapable &&
      i != null &&
      a.authenticatedEnabled &&
      !a.adsSuppressed &&
      e.get(w, `644166061`)
    )
  ) {
    A();
    return;
  }
  let s = e.get(E);
  return (
    (e.get(w, `500337272`) && Reflect.get(navigator, `globalPrivacyControl`) === !0) ||
    (s.data != null && !(s.data.analytics ?? !s.data.isConsentRequired))
      ? A()
      : s.data != null && !s.isError && k(i, t.signal),
    () => t.abort()
  );
}
var I, L;
function R() {
  return (R = e(() => {
    ((I = m()), u(), (L = C()), n(), a(), T(), _(), S(), N(), D());
  }))();
}
R();
export { P as BrowserProfileBridge };
//# sourceMappingURL=browser-profile-bridge-ebc71c71a8e1.js.map
