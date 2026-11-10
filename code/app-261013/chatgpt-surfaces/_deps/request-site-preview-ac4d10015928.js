import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  VDt as o,
  _O as s,
  cO as c,
  fO as l,
  gO as u,
  hot as d,
  jDt as f,
  lO as p,
  lot as m,
  mO as h,
  oO as g,
  sO as _,
  t3 as v,
  vO as y,
  vzt as b,
  wot as x,
  xMt as S,
  yzt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  G4n as w,
  J4n as T,
  K4n as E,
  QDr as D,
  U4n as O,
  XDr as k,
  Ymr as A,
  ehr as j,
} from "./app-initial-5851df3f6cb1.js";
import { O as M, u as N } from "./chatgpt_tpp-f471c7c8ab7d.js";
function P(e) {
  let a = (0, F.c)(30),
    { isCurrent: l, signal: f, onAllowed: m, onClose: v } = e,
    y = i(n),
    b = o(),
    x = (0, I.useRef)(!1),
    [S, C] = (0, I.useState)(!1),
    w;
  a[0] !== b || a[1] !== l || a[2] !== m || a[3] !== v || a[4] !== y || a[5] !== f
    ? ((w = async () => {
        if (!x.current) {
          if (!l()) {
            v();
            return;
          }
          ((x.current = !0), C(!0));
          try {
            await A.safePatch(`/flora/browser/config`, {
              requestBody: { origin_mutation: { pattern: `http://terminal.local:4173`, decision: `allow` } },
              signal: f,
            });
          } catch {
            if (!l()) {
              v();
              return;
            }
            ((x.current = !1),
              C(!1),
              y
                .get(d)
                .danger(
                  b.formatMessage({
                    id: `chatgpt.tpp.onboarding.website_permission.toast.update_failed`,
                    defaultMessage: `Couldn't allow site previews. Please try again`,
                    description: `Error toast after saving permission for ChatGPT to preview unpublished Sites websites fails in Work onboarding. The user can retry Allow. No placeholders.`,
                  }),
                  { errorAnalytics: { toastId: `site-preview-permission-update-failed` } },
                ));
            return;
          }
          l() ? m() : v();
        }
      }),
      (a[0] = b),
      (a[1] = l),
      (a[2] = m),
      (a[3] = v),
      (a[4] = y),
      (a[5] = f),
      (a[6] = w))
    : (w = a[6]);
  let T = w,
    E = !S,
    D;
  a[7] === v
    ? (D = a[8])
    : ((D = (e) => {
        !e && !x.current && v();
      }),
      (a[7] = v),
      (a[8] = D));
  let O;
  a[9] === T
    ? (O = a[10])
    : ((O = (e) => {
        (e.preventDefault(), T());
      }),
      (a[9] = T),
      (a[10] = O));
  let k;
  a[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, L.jsx)(s, {
        className: `select-none`,
        children: (0, L.jsx)(r, {
          id: `chatgpt.tpp.onboarding.website_permission.title`,
          defaultMessage: `Allow ChatGPT to preview your site?`,
          description: `Headline after selecting a website-building task in Work onboarding. Allow permits the cloud browser to preview this and future unpublished Sites websites. No placeholders.`,
        }),
      })),
      (a[11] = k))
    : (k = a[11]);
  let j;
  a[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, L.jsx)(p, {
        children: (0, L.jsx)(c, {
          title: k,
          subtitle: (0, L.jsx)(u, {
            children: (0, L.jsx)(r, {
              id: `chatgpt.tpp.onboarding.website_permission.description`,
              defaultMessage: `ChatGPT will use the cloud browser to view and interact with the version you’re building before it is published. This also allows future site previews.`,
              description: `Consent body in Work onboarding. Granting access allows ChatGPT's remote cloud browser to preview the current and future unpublished Sites websites. No placeholders.`,
            }),
          }),
        }),
      })),
      (a[12] = j))
    : (j = a[12]);
  let M;
  a[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, L.jsx)(r, {
        id: `chatgpt.tpp.onboarding.website_permission.button.not_now`,
        defaultMessage: `Not now`,
        description: `Dismiss Sites preview permission in Work onboarding without granting access or starting the selected task. Short button label.`,
      })),
      (a[13] = M))
    : (M = a[13]);
  let N;
  a[14] !== S || a[15] !== v
    ? ((N = (0, L.jsx)(t, { color: `secondary`, disabled: S, type: `button`, onClick: v, children: M })),
      (a[14] = S),
      (a[15] = v),
      (a[16] = N))
    : (N = a[16]);
  let P;
  a[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, L.jsx)(r, {
        id: `chatgpt.tpp.onboarding.website_permission.button.allow`,
        defaultMessage: `Allow`,
        description: `Grant account-wide access to preview current and future unpublished Sites websites, then start the selected Work onboarding task. Short button label.`,
      })),
      (a[17] = P))
    : (P = a[17]);
  let R;
  a[18] === S
    ? (R = a[19])
    : ((R = (0, L.jsx)(t, { loading: S, type: `submit`, children: P })), (a[18] = S), (a[19] = R));
  let z;
  a[20] !== R || a[21] !== N
    ? ((z = (0, L.jsx)(p, { children: (0, L.jsxs)(_, { children: [N, R] }) })),
      (a[20] = R),
      (a[21] = N),
      (a[22] = z))
    : (z = a[22]);
  let B;
  a[23] !== z || a[24] !== O
    ? ((B = (0, L.jsxs)(g, { as: `form`, onSubmit: O, children: [j, z] })),
      (a[23] = z),
      (a[24] = O),
      (a[25] = B))
    : (B = a[25]);
  let V;
  return (
    a[26] !== B || a[27] !== E || a[28] !== D
      ? ((V = (0, L.jsx)(h, { open: !0, showDialogClose: E, onOpenChange: D, children: B })),
        (a[26] = B),
        (a[27] = E),
        (a[28] = D),
        (a[29] = V))
      : (V = a[29]),
    V
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = b()), a(), (I = C()), f(), j(), v(), y(), l(), m(), x(), (L = S()));
  }))();
}
async function z(e, { cardId: t, signal: n, isCurrent: r }) {
  if (!r() || E(e, P)) return !1;
  let i = (n) => {
      D(e, N, { action: n, cardId: t, category: `website` });
    },
    a,
    o = () => {};
  try {
    return (
      i(`shown`),
      await new Promise((t) => {
        ((o = () => t(!1)),
          T(e, P, {
            isCurrent: r,
            signal: n,
            onAllowed: () => {
              (i(`approved`), t(!0));
            },
            onClose: () => {
              (r() && i(`denied`), t(!1));
            },
          }),
          (a = e.watch((e) => {
            E(e, P) || t(!1);
          })),
          n.addEventListener(`abort`, o, { once: !0 }));
      })
    );
  } finally {
    (a?.(), n.removeEventListener(`abort`, o), O(e, P));
  }
}
function B() {
  return (B = e(() => {
    (M(), w(), k(), R());
  }))();
}
B();
export { z as requestSitePreview };
//# sourceMappingURL=request-site-preview-ac4d10015928.js.map
