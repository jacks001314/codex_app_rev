import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  NSt as a,
  PBt as o,
  Qst as s,
  USt as c,
  XOt as l,
  ZSt as u,
  tkt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CRn as f,
  Man as p,
  Nan as m,
  bRn as h,
  jan as g,
  lDn as _,
  sDn as v,
} from "./app-initial-ad16eaadf81f.js";
import { n as y, t as b } from "./es-337e76517f64.js";
import { dy as x } from "./app-primary-3e00728c2a4c.js";
import { r as S, t as C } from "./boundary-47568ae8a6a8.js";
import { i as w, n as T, r as E, t as D } from "./trusted-contact-actions-16807b969a06.js";
function O(e) {
  let n = (0, A.c)(13),
    { intervention: r } = e,
    i = t(s),
    a = c(),
    [o, l] = (0, j.useState)(!1),
    u = m(p());
  if (o) return null;
  let f;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, M.jsx)(d, {
        id: `chatgpt.productIntervention.renderError`,
        defaultMessage: `Unable to display this notice`,
        description: `Shown when a server-provided conversation notice cannot be rendered`,
      })),
      (n[0] = f))
    : (f = n[0]);
  let h = r.effect.dil,
    g;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = [`product_intervention`, `open_url`]), (n[1] = g))
    : (g = n[1]);
  let _;
  n[2] !== r.intervention_id || n[3] !== a || n[4] !== i
    ? ((_ = async (e, t) => {
        if (t !== `client` || !e.payload) return;
        let { payload: n } = e;
        if (e.type === `product_intervention`) {
          if (n.type === `action.dismiss.v1`) {
            l(!0);
            return;
          }
          if (n.type === `action.open_local_url.v1` && typeof n.web_url == `string`) {
            if (/^mailto:/i.test(n.web_url)) {
              r.intervention_id === `trusted_contact.notify_us5`
                ? T(
                    { type: `personal-note`, href: n.web_url },
                    {
                      scope: i,
                      navigate: (e) => {
                        a(e);
                      },
                    },
                  )
                : w(n.web_url);
              return;
            }
            let e = x(n.web_url);
            if (e != null) {
              T(e, {
                scope: i,
                navigate: (e) => {
                  a(e);
                },
                onDismiss: () => l(!0),
              });
              return;
            }
            k(n.web_url);
          } else n.type === `action.open_safe_url.v1` && typeof n.url == `string` && k(n.url);
        } else e.type === `open_url` && typeof n.url == `string` && k(n.url);
      }),
      (n[2] = r.intervention_id),
      (n[3] = a),
      (n[4] = i),
      (n[5] = _))
    : (_ = n[5]);
  let b;
  n[6] !== h || n[7] !== _ || n[8] !== u
    ? ((b = (0, M.jsx)(y, {
        widget: h,
        theme: u,
        errorMode: `throw`,
        supportedClientActions: g,
        onAction: _,
      })),
      (n[6] = h),
      (n[7] = _),
      (n[8] = u),
      (n[9] = b))
    : (b = n[9]);
  let S;
  return (
    n[10] !== b || n[11] !== u
      ? ((S = (0, M.jsx)(v, {
          name: `ProductInterventionDIL`,
          fallback: f,
          children: (0, M.jsx)(C, { theme: u, children: b }),
        })),
        (n[10] = b),
        (n[11] = u),
        (n[12] = S))
      : (S = n[12]),
    S
  );
}
function k(e) {
  let t = URL.parse(e, `https://chatgpt.com`);
  if (t?.protocol === `mailto:` || t?.protocol === `sms:`) {
    w(t.href);
    return;
  }
  (t?.protocol === `https:` || t?.protocol === `http:`) &&
    f({ href: t.href, initiator: `open_in_browser_bridge` });
}
var A, j, M;
function N() {
  return (N = e(() => {
    ((A = o()), S(), b(), u(), (j = r()), l(), a(), D(), E(), _(), h(), n(), g(), (M = i()));
  }))();
}
N();
export { O as ProductInterventionNotice };
//# sourceMappingURL=product-intervention-notice-6c0737ae54eb.js.map
