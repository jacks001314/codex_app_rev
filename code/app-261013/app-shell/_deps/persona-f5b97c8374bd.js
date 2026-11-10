const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./persona-dcd82a18594e.js", "./rolldown-runtime-2d059c5e81f4.js"]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as n, pPt as r, rst as i, spt as a } from "./app-shared-bbfeca5e5737.js";
import { Ymr as o, ehr as s } from "./app-initial-5851df3f6cb1.js";
function c({ accountId: e, kind: r = `age`, onLoad: i, onComplete: s, onCancel: c, onError: l }) {
  let u = new AbortController(),
    d = !1,
    f = null,
    p = () => {
      ((d = !0), u.abort(), f?.destroy(), (f = null));
    },
    m =
      r === `guardian`
        ? `/compliance/guardian_verification/persona/inquiries`
        : `/compliance/age_verification/persona/inquiries`,
    h = r === `guardian` ? { "ChatGPT-Account-ID": e, [a]: e } : { "ChatGPT-Account-ID": e };
  return (
    Promise.all([
      n(
        () => import(`./persona-dcd82a18594e.js`).then((e) => t(e.default, 1)),
        __vite__mapDeps([0, 1]),
        import.meta.url,
      ),
      o.safePost(m, { additionalHeaders: h, requestBody: { enabled: !0 }, signal: u.signal }),
    ])
      .then(([{ default: e }, t]) => {
        d ||
          ((f = new e.Client({
            inquiryId: t.id,
            onLoad: () => {
              d || i?.();
            },
            onComplete: () => {
              d || (p(), s());
            },
            onCancel: () => {
              d || (p(), c());
            },
            onError: () => {
              d || (p(), l());
            },
          })),
          f.open());
      })
      .catch(() => {
        d || (p(), l());
      }),
    p
  );
}
function l() {
  return (l = e(() => {
    (i(), s(), r());
  }))();
}
export { c as n, l as t };
//# sourceMappingURL=persona-f5b97c8374bd.js.map
