import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Bv as n,
  Cot as r,
  IDt as i,
  Ixt as a,
  Iz as o,
  Lz as s,
  Mz as c,
  Nz as l,
  Pxt as u,
  Vv as d,
  _O as f,
  cO as p,
  fO as m,
  gO as h,
  hot as g,
  jDt as _,
  lO as v,
  lot as y,
  mO as b,
  oO as x,
  sO as S,
  t3 as C,
  vO as w,
  vzt as T,
  wot as E,
  xMt as D,
  yzt as O,
} from "./app-shared-bbfeca5e5737.js";
function k(e) {
  let s = (0, M.c)(41),
    { hostname: l, isExitingAnnotationMode: u, onRespond: d, onCloseAutoFocus: m } = e,
    _ = a(r),
    [y, C] = (0, N.useState)(!1),
    w;
  s[0] !== y || s[1] !== d || s[2] !== _
    ? ((w = async (e) => {
        if (!y) {
          C(!0);
          try {
            if (!(await d(e))) {
              C(!1);
              return;
            }
            e ||
              _.get(g).info(
                (0, P.jsx)(i, {
                  id: `thread.browser.siteAnnotationPermission.blocked`,
                  defaultMessage: `Annotation features blocked for this site. You can still annotate the page yourself.`,
                  description: `Toast confirming that site-provided annotation features have been blocked, while the user can still annotate the page manually`,
                }),
              );
          } catch {
            (C(!1),
              _.get(g).danger(
                (0, P.jsx)(i, {
                  id: `thread.browser.siteAnnotationPermission.saveError`,
                  defaultMessage: `Could not save your choice. Please try again.`,
                  description: `Error toast when saving whether a website may change annotation mode fails`,
                }),
                { errorAnalytics: { toastId: `thread.browser.siteAnnotationPermission.saveError` } },
              ));
          }
        }
      }),
      (s[0] = y),
      (s[1] = d),
      (s[2] = _),
      (s[3] = w))
    : (w = s[3]);
  let T = w,
    E;
  s[4] === m
    ? (E = s[5])
    : ((E = (e) => {
        m != null && (e.preventDefault(), m());
      }),
      (s[4] = m),
      (s[5] = E));
  let D;
  s[6] === T
    ? (D = s[7])
    : ((D = (e) => {
        e.key === `Enter` && !e.repeat && e.target === e.currentTarget && (e.preventDefault(), T(!0));
      }),
      (s[6] = T),
      (s[7] = D));
  let O;
  s[8] !== E || s[9] !== D
    ? ((O = { onEscapeKeyDown: j, onCloseAutoFocus: E, onOpenAutoFocus: A, onKeyDown: D }),
      (s[8] = E),
      (s[9] = D),
      (s[10] = O))
    : (O = s[10]);
  let k;
  s[11] === T
    ? (k = s[12])
    : ((k = (e) => {
        (e.preventDefault(), T(!0));
      }),
      (s[11] = T),
      (s[12] = k));
  let F;
  s[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, P.jsx)(c, { className: `shrink-0 text-secondary`, asset: n })), (s[13] = F))
    : (F = s[13]);
  let I;
  s[14] === u
    ? (I = s[15])
    : ((I = (0, P.jsx)(f, {
        children: (0, P.jsxs)(`span`, {
          className: `flex items-center gap-2`,
          children: [
            F,
            u
              ? (0, P.jsx)(i, {
                  id: `thread.browser.siteAnnotationPermission.toggleTitleForSite`,
                  defaultMessage: `Let this site toggle annotation mode?`,
                  description: `Title asking whether to let the current website change annotation mode when it requests to turn the mode off`,
                })
              : (0, P.jsx)(i, {
                  id: `thread.browser.siteAnnotationPermission.enterTitleForSite`,
                  defaultMessage: `Let this site start annotation mode?`,
                  description: `Title asking whether to let the current website start annotation mode in the in-app browser`,
                }),
          ],
        }),
      })),
      (s[14] = u),
      (s[15] = I));
  let L;
  s[16] === l
    ? (L = s[17])
    : ((L = (0, P.jsx)(h, {
        children: (0, P.jsx)(i, {
          id: `thread.browser.siteAnnotationPermission.summaryWithDomain`,
          defaultMessage: `Annotation mode lets you leave comments for ChatGPT on the page. {domain} can suggest comments and add context but can’t read or submit your prompts.`,
          description: `Explanation in a website annotation permission dialog. Annotation mode lets the user leave comments for ChatGPT on the page. The domain names the website that can suggest comments and provide context, but cannot read or submit the user's prompts.`,
          values: { domain: l },
        }),
      })),
      (s[16] = l),
      (s[17] = L));
  let R;
  s[18] !== I || s[19] !== L
    ? ((R = (0, P.jsx)(v, { children: (0, P.jsx)(p, { title: I, subtitle: L }) })),
      (s[18] = I),
      (s[19] = L),
      (s[20] = R))
    : (R = s[20]);
  let z;
  s[21] === T ? (z = s[22]) : ((z = () => void T(!1)), (s[21] = T), (s[22] = z));
  let B;
  s[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, P.jsx)(i, {
        id: `thread.browser.siteAnnotationPermission.block`,
        defaultMessage: `Block`,
        description: `Button that rejects a website's request to change annotation mode and disables annotation features for that domain`,
      })),
      (s[23] = B))
    : (B = s[23]);
  let V;
  s[24] !== y || s[25] !== z
    ? ((V = (0, P.jsx)(t, { color: `secondary`, disabled: y, onClick: z, type: `button`, children: B })),
      (s[24] = y),
      (s[25] = z),
      (s[26] = V))
    : (V = s[26]);
  let H;
  s[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, P.jsx)(i, {
        id: `thread.browser.siteAnnotationPermission.allow`,
        defaultMessage: `Allow`,
        description: `Button that approves a website's request to change annotation mode and remembers approval for that domain`,
      })),
      (s[27] = H))
    : (H = s[27]);
  let U;
  s[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, P.jsx)(`span`, {
        "aria-hidden": `true`,
        children: (0, P.jsx)(o, { keysLabel: `↵`, variant: `button` }),
      })),
      (s[28] = U))
    : (U = s[28]);
  let W;
  s[29] === y
    ? (W = s[30])
    : ((W = (0, P.jsxs)(t, { disabled: y, type: `submit`, children: [H, U] })), (s[29] = y), (s[30] = W));
  let G;
  s[31] !== V || s[32] !== W
    ? ((G = (0, P.jsx)(v, { children: (0, P.jsxs)(S, { children: [V, W] }) })),
      (s[31] = V),
      (s[32] = W),
      (s[33] = G))
    : (G = s[33]);
  let K;
  s[34] !== G || s[35] !== k || s[36] !== R
    ? ((K = (0, P.jsxs)(x, { as: `form`, className: `select-none no-drag`, onSubmit: k, children: [R, G] })),
      (s[34] = G),
      (s[35] = k),
      (s[36] = R),
      (s[37] = K))
    : (K = s[37]);
  let q;
  return (
    s[38] !== K || s[39] !== O
      ? ((q = (0, P.jsx)(b, {
          size: `compact`,
          open: !0,
          showDialogClose: !1,
          shouldIgnoreClickOutside: !0,
          contentProps: O,
          children: K,
        })),
        (s[38] = K),
        (s[39] = O),
        (s[40] = q))
      : (q = s[40]),
    q
  );
}
function A(e) {
  (e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus());
}
function j(e) {
  return e.preventDefault();
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = T()), d(), u(), (N = O()), _(), C(), w(), m(), l(), s(), y(), E(), (P = D()));
  }))();
}
F();
export { k as BrowserSiteAnnotationPermissionDialog };
//# sourceMappingURL=site-annotation-permission-dialog-2d0c6f0314ad.js.map
