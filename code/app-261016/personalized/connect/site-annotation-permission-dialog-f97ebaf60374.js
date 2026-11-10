import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  FBt as i,
  HO as a,
  IO as o,
  JO as s,
  KO as c,
  LNt as l,
  LO as u,
  MB as d,
  OB as f,
  PBt as p,
  Qst as m,
  RO as h,
  Vrt as g,
  WO as _,
  XOt as v,
  Y3 as y,
  Z3 as b,
  ZSt as x,
  fy as S,
  jB as C,
  py as w,
  qO as T,
  qrt as E,
  tkt as D,
  zO as O,
} from "./app-shared-2feb3d4c6fcc.js";
function k(e) {
  let n = (0, M.c)(41),
    { hostname: i, isExitingAnnotationMode: a, onRespond: s, onCloseAutoFocus: l } = e,
    d = t(m),
    [f, p] = (0, N.useState)(!1),
    g;
  n[0] !== f || n[1] !== s || n[2] !== d
    ? ((g = async (e) => {
        if (!f) {
          p(!0);
          try {
            if (!(await s(e))) {
              p(!1);
              return;
            }
            e ||
              d
                .get(E)
                .info(
                  (0, P.jsx)(D, {
                    id: `thread.browser.siteAnnotationPermission.blocked`,
                    defaultMessage: `Annotation features blocked for this site. You can still annotate the page yourself.`,
                    description: `Toast confirming that site-provided annotation features have been blocked, while the user can still annotate the page manually`,
                  }),
                );
          } catch {
            (p(!1),
              d
                .get(E)
                .danger(
                  (0, P.jsx)(D, {
                    id: `thread.browser.siteAnnotationPermission.saveError`,
                    defaultMessage: `Could not save your choice. Please try again.`,
                    description: `Error toast when saving whether a website may change annotation mode fails`,
                  }),
                  { errorAnalytics: { toastId: `thread.browser.siteAnnotationPermission.saveError` } },
                ));
          }
        }
      }),
      (n[0] = f),
      (n[1] = s),
      (n[2] = d),
      (n[3] = g))
    : (g = n[3]);
  let v = g,
    b;
  n[4] === l
    ? (b = n[5])
    : ((b = (e) => {
        l != null && (e.preventDefault(), l());
      }),
      (n[4] = l),
      (n[5] = b));
  let x;
  n[6] === v
    ? (x = n[7])
    : ((x = (e) => {
        e.key === `Enter` && !e.repeat && e.target === e.currentTarget && (e.preventDefault(), v(!0));
      }),
      (n[6] = v),
      (n[7] = x));
  let w;
  n[8] !== b || n[9] !== x
    ? ((w = { onEscapeKeyDown: j, onCloseAutoFocus: b, onOpenAutoFocus: A, onKeyDown: x }),
      (n[8] = b),
      (n[9] = x),
      (n[10] = w))
    : (w = n[10]);
  let k;
  n[11] === v
    ? (k = n[12])
    : ((k = (e) => {
        (e.preventDefault(), v(!0));
      }),
      (n[11] = v),
      (n[12] = k));
  let F;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, P.jsx)(r, { className: `shrink-0 text-secondary`, asset: S })), (n[13] = F))
    : (F = n[13]);
  let I;
  n[14] === a
    ? (I = n[15])
    : ((I = (0, P.jsx)(T, {
        children: (0, P.jsxs)(`span`, {
          className: `flex items-center gap-2`,
          children: [
            F,
            a
              ? (0, P.jsx)(D, {
                  id: `thread.browser.siteAnnotationPermission.toggleTitleForSite`,
                  defaultMessage: `Let this site toggle annotation mode?`,
                  description: `Title asking whether to let the current website change annotation mode when it requests to turn the mode off`,
                })
              : (0, P.jsx)(D, {
                  id: `thread.browser.siteAnnotationPermission.enterTitleForSite`,
                  defaultMessage: `Let this site start annotation mode?`,
                  description: `Title asking whether to let the current website start annotation mode in the in-app browser`,
                }),
          ],
        }),
      })),
      (n[14] = a),
      (n[15] = I));
  let L;
  n[16] === i
    ? (L = n[17])
    : ((L = (0, P.jsx)(c, {
        children: (0, P.jsx)(D, {
          id: `thread.browser.siteAnnotationPermission.summaryWithDomain`,
          defaultMessage: `Annotation mode lets you leave comments for ChatGPT on the page. {domain} can suggest comments and add context but can’t read or submit your prompts.`,
          description: `Explanation in a website annotation permission dialog. Annotation mode lets the user leave comments for ChatGPT on the page. The domain names the website that can suggest comments and provide context, but cannot read or submit the user's prompts.`,
          values: { domain: i },
        }),
      })),
      (n[16] = i),
      (n[17] = L));
  let R;
  n[18] !== I || n[19] !== L
    ? ((R = (0, P.jsx)(O, { children: (0, P.jsx)(h, { title: I, subtitle: L }) })),
      (n[18] = I),
      (n[19] = L),
      (n[20] = R))
    : (R = n[20]);
  let z;
  n[21] === v ? (z = n[22]) : ((z = () => void v(!1)), (n[21] = v), (n[22] = z));
  let B;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, P.jsx)(D, {
        id: `thread.browser.siteAnnotationPermission.block`,
        defaultMessage: `Block`,
        description: `Button that rejects a website's request to change annotation mode and disables annotation features for that domain`,
      })),
      (n[23] = B))
    : (B = n[23]);
  let V;
  n[24] !== f || n[25] !== z
    ? ((V = (0, P.jsx)(y, { color: `secondary`, disabled: f, onClick: z, type: `button`, children: B })),
      (n[24] = f),
      (n[25] = z),
      (n[26] = V))
    : (V = n[26]);
  let H;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, P.jsx)(D, {
        id: `thread.browser.siteAnnotationPermission.allow`,
        defaultMessage: `Allow`,
        description: `Button that approves a website's request to change annotation mode and remembers approval for that domain`,
      })),
      (n[27] = H))
    : (H = n[27]);
  let U;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, P.jsx)(`span`, {
        "aria-hidden": `true`,
        children: (0, P.jsx)(C, { keysLabel: `↵`, variant: `button` }),
      })),
      (n[28] = U))
    : (U = n[28]);
  let W;
  n[29] === f
    ? (W = n[30])
    : ((W = (0, P.jsxs)(y, { disabled: f, type: `submit`, children: [H, U] })), (n[29] = f), (n[30] = W));
  let G;
  n[31] !== V || n[32] !== W
    ? ((G = (0, P.jsx)(O, { children: (0, P.jsxs)(u, { children: [V, W] }) })),
      (n[31] = V),
      (n[32] = W),
      (n[33] = G))
    : (G = n[33]);
  let K;
  n[34] !== G || n[35] !== k || n[36] !== R
    ? ((K = (0, P.jsxs)(o, { as: `form`, className: `select-none no-drag`, onSubmit: k, children: [R, G] })),
      (n[34] = G),
      (n[35] = k),
      (n[36] = R),
      (n[37] = K))
    : (K = n[37]);
  let q;
  return (
    n[38] !== K || n[39] !== w
      ? ((q = (0, P.jsx)(_, {
          size: `compact`,
          open: !0,
          showDialogClose: !1,
          shouldIgnoreClickOutside: !0,
          contentProps: w,
          children: K,
        })),
        (n[38] = K),
        (n[39] = w),
        (n[40] = q))
      : (q = n[40]),
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
    ((M = p()), w(), x(), (N = i()), v(), b(), s(), a(), f(), d(), g(), n(), (P = l()));
  }))();
}
F();
export { k as BrowserSiteAnnotationPermissionDialog };
//# sourceMappingURL=site-annotation-permission-dialog-f97ebaf60374.js.map
