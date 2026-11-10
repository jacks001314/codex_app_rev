import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ext as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  _xt as o,
  jDt as s,
  vzt as c,
  wot as l,
  xMt as u,
  yzt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  HCn as f,
  JPn as p,
  WCn as m,
  ZPn as h,
  dnn as g,
  fnn as _,
  unn as v,
} from "./app-initial-5851df3f6cb1.js";
import { n as y, t as b } from "./es-f1d4a62c2c18.js";
import { Uv as x } from "./app-primary-fe8a450b3b04.js";
import { r as S, t as C } from "./boundary-303cd7fff1c0.js";
import { i as w, n as T, r as E, t as D } from "./trusted-contact-actions-ee7c8ff7d3a9.js";
function O(e) {
  let a = (0, A.c)(13),
    { intervention: o } = e,
    s = i(t),
    c = n(),
    [l, u] = (0, j.useState)(!1),
    d = _(g());
  if (l) return null;
  let p;
  a[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, M.jsx)(r, {
        id: `chatgpt.productIntervention.renderError`,
        defaultMessage: `Unable to display this notice`,
        description: `Shown when a server-provided conversation notice cannot be rendered`,
      })),
      (a[0] = p))
    : (p = a[0]);
  let m = o.effect.dil,
    h;
  a[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = [`product_intervention`, `open_url`]), (a[1] = h))
    : (h = a[1]);
  let v;
  a[2] !== o.intervention_id || a[3] !== c || a[4] !== s
    ? ((v = async (e, t) => {
        if (t !== `client` || !e.payload) return;
        let { payload: n } = e;
        if (e.type === `product_intervention`) {
          if (n.type === `action.dismiss.v1`) {
            u(!0);
            return;
          }
          if (n.type === `action.open_local_url.v1` && typeof n.web_url == `string`) {
            if (/^mailto:/i.test(n.web_url)) {
              o.intervention_id === `trusted_contact.notify_us5`
                ? T(
                    { type: `personal-note`, href: n.web_url },
                    {
                      scope: s,
                      navigate: (e) => {
                        c(e);
                      },
                    },
                  )
                : w(n.web_url);
              return;
            }
            let e = x(n.web_url);
            if (e != null) {
              T(e, {
                scope: s,
                navigate: (e) => {
                  c(e);
                },
                onDismiss: () => u(!0),
              });
              return;
            }
            k(n.web_url);
          } else n.type === `action.open_safe_url.v1` && typeof n.url == `string` && k(n.url);
        } else e.type === `open_url` && typeof n.url == `string` && k(n.url);
      }),
      (a[2] = o.intervention_id),
      (a[3] = c),
      (a[4] = s),
      (a[5] = v))
    : (v = a[5]);
  let b;
  a[6] !== m || a[7] !== v || a[8] !== d
    ? ((b = (0, M.jsx)(y, {
        widget: m,
        theme: d,
        errorMode: `throw`,
        supportedClientActions: h,
        onAction: v,
      })),
      (a[6] = m),
      (a[7] = v),
      (a[8] = d),
      (a[9] = b))
    : (b = a[9]);
  let S;
  return (
    a[10] !== b || a[11] !== d
      ? ((S = (0, M.jsx)(f, {
          name: `ProductInterventionDIL`,
          fallback: p,
          children: (0, M.jsx)(C, { theme: d, children: b }),
        })),
        (a[10] = b),
        (a[11] = d),
        (a[12] = S))
      : (S = a[12]),
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
    h({ href: t.href, initiator: `open_in_browser_bridge` });
}
var A, j, M;
function N() {
  return (N = e(() => {
    ((A = c()), S(), b(), a(), (j = d()), s(), o(), D(), E(), m(), p(), l(), v(), (M = u()));
  }))();
}
N();
export { O as ProductInterventionNotice };
//# sourceMappingURL=product-intervention-notice-8a2aaf03c543.js.map
