import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  KO as s,
  LNt as c,
  LO as l,
  PBt as u,
  Qst as d,
  RO as f,
  Vrt as p,
  WO as m,
  XOt as h,
  Y3 as g,
  Z3 as _,
  ZSt as v,
  okt as y,
  qO as b,
  qrt as x,
  tkt as S,
  zO as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as w,
  D5n as T,
  O5n as E,
  T5n as D,
  iRr as O,
  tyr as k,
  xMr as A,
  yMr as j,
} from "./app-initial-ad16eaadf81f.js";
import { O as M, u as N } from "./chatgpt_tpp-f471c7c8ab7d.js";
function P(e) {
  let n = (0, F.c)(30),
    { isCurrent: r, signal: i, onAllowed: o, onClose: c } = e,
    u = t(d),
    p = y(),
    h = (0, I.useRef)(!1),
    [_, v] = (0, I.useState)(!1),
    w;
  n[0] !== p || n[1] !== r || n[2] !== o || n[3] !== c || n[4] !== u || n[5] !== i
    ? ((w = async () => {
        if (!h.current) {
          if (!r()) {
            c();
            return;
          }
          ((h.current = !0), v(!0));
          try {
            await O.safePatch(`/flora/browser/config`, {
              requestBody: { origin_mutation: { pattern: `http://terminal.local:4173`, decision: `allow` } },
              signal: i,
            });
          } catch {
            if (!r()) {
              c();
              return;
            }
            ((h.current = !1),
              v(!1),
              u
                .get(x)
                .danger(
                  p.formatMessage({
                    id: `chatgpt.tpp.onboarding.website_permission.toast.update_failed`,
                    defaultMessage: `Couldn't allow site previews. Please try again`,
                    description: `Error toast after saving permission for ChatGPT to preview unpublished Sites websites fails in Work onboarding. The user can retry Allow. No placeholders.`,
                  }),
                  { errorAnalytics: { toastId: `site-preview-permission-update-failed` } },
                ));
            return;
          }
          r() ? o() : c();
        }
      }),
      (n[0] = p),
      (n[1] = r),
      (n[2] = o),
      (n[3] = c),
      (n[4] = u),
      (n[5] = i),
      (n[6] = w))
    : (w = n[6]);
  let T = w,
    E = !_,
    D;
  n[7] === c
    ? (D = n[8])
    : ((D = (e) => {
        !e && !h.current && c();
      }),
      (n[7] = c),
      (n[8] = D));
  let k;
  n[9] === T
    ? (k = n[10])
    : ((k = (e) => {
        (e.preventDefault(), T());
      }),
      (n[9] = T),
      (n[10] = k));
  let A;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, L.jsx)(b, {
        className: `select-none`,
        children: (0, L.jsx)(S, {
          id: `chatgpt.tpp.onboarding.website_permission.title`,
          defaultMessage: `Allow ChatGPT to preview your site?`,
          description: `Headline after selecting a website-building task in Work onboarding. Allow permits the cloud browser to preview this and future unpublished Sites websites. No placeholders.`,
        }),
      })),
      (n[11] = A))
    : (A = n[11]);
  let j;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, L.jsx)(C, {
        children: (0, L.jsx)(f, {
          title: A,
          subtitle: (0, L.jsx)(s, {
            children: (0, L.jsx)(S, {
              id: `chatgpt.tpp.onboarding.website_permission.description`,
              defaultMessage: `ChatGPT will use the cloud browser to view and interact with the version you’re building before it is published. This also allows future site previews.`,
              description: `Consent body in Work onboarding. Granting access allows ChatGPT's remote cloud browser to preview the current and future unpublished Sites websites. No placeholders.`,
            }),
          }),
        }),
      })),
      (n[12] = j))
    : (j = n[12]);
  let M;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, L.jsx)(S, {
        id: `chatgpt.tpp.onboarding.website_permission.button.not_now`,
        defaultMessage: `Not now`,
        description: `Dismiss Sites preview permission in Work onboarding without granting access or starting the selected task. Short button label.`,
      })),
      (n[13] = M))
    : (M = n[13]);
  let N;
  n[14] !== _ || n[15] !== c
    ? ((N = (0, L.jsx)(g, { color: `secondary`, disabled: _, type: `button`, onClick: c, children: M })),
      (n[14] = _),
      (n[15] = c),
      (n[16] = N))
    : (N = n[16]);
  let P;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, L.jsx)(S, {
        id: `chatgpt.tpp.onboarding.website_permission.button.allow`,
        defaultMessage: `Allow`,
        description: `Grant account-wide access to preview current and future unpublished Sites websites, then start the selected Work onboarding task. Short button label.`,
      })),
      (n[17] = P))
    : (P = n[17]);
  let R;
  n[18] === _
    ? (R = n[19])
    : ((R = (0, L.jsx)(g, { loading: _, type: `submit`, children: P })), (n[18] = _), (n[19] = R));
  let z;
  n[20] !== R || n[21] !== N
    ? ((z = (0, L.jsx)(C, { children: (0, L.jsxs)(l, { children: [N, R] }) })),
      (n[20] = R),
      (n[21] = N),
      (n[22] = z))
    : (z = n[22]);
  let B;
  n[23] !== z || n[24] !== k
    ? ((B = (0, L.jsxs)(a, { as: `form`, onSubmit: k, children: [j, z] })),
      (n[23] = z),
      (n[24] = k),
      (n[25] = B))
    : (B = n[25]);
  let V;
  return (
    n[26] !== B || n[27] !== E || n[28] !== D
      ? ((V = (0, L.jsx)(m, { open: !0, showDialogClose: E, onOpenChange: D, children: B })),
        (n[26] = B),
        (n[27] = E),
        (n[28] = D),
        (n[29] = V))
      : (V = n[29]),
    V
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = u()), v(), (I = r()), h(), k(), _(), o(), i(), p(), n(), (L = c()));
  }))();
}
async function z(e, { cardId: t, signal: n, isCurrent: r }) {
  if (!r() || E(e, P)) return !1;
  let i = (n) => {
      A(e, N, { action: n, cardId: t, category: `website` });
    },
    a,
    o = () => {};
  try {
    return (
      i(`shown`),
      await new Promise((t) => {
        ((o = () => t(!1)),
          w(e, P, {
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
    (a?.(), n.removeEventListener(`abort`, o), D(e, P));
  }
}
function B() {
  return (B = e(() => {
    (M(), T(), j(), R());
  }))();
}
B();
export { z as requestSitePreview };
//# sourceMappingURL=request-site-preview-9805accc426c.js.map
