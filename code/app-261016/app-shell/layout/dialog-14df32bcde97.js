import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  FBt as i,
  FNt as a,
  HO as o,
  IO as s,
  JO as c,
  LNt as l,
  Mt as u,
  Ns as d,
  Nt as f,
  OB as p,
  PBt as m,
  Ps as h,
  Pt as g,
  Qst as _,
  TY as v,
  Vq as y,
  Vrt as b,
  WO as ee,
  XOt as x,
  Y3 as S,
  Z3 as C,
  ZSt as w,
  gB as T,
  hB as E,
  jt as te,
  nCt as D,
  okt as ne,
  qO as re,
  qrt as O,
  tV as k,
  tkt as A,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Air as j,
  CIr as M,
  Mdn as N,
  Mir as P,
  SIr as F,
  e4n as I,
  hdn as L,
  n4n as R,
} from "./app-initial-ad16eaadf81f.js";
import { Fr as z, Lr as B } from "./app-primary-3e00728c2a4c.js";
import { a as V, i as H, l as U, n as W, r as G } from "./prompt-chat-bcb03ce4ce0e.js";
function K(e, t) {
  let n = e.get(j).pathname;
  return n !== `/space/` + t && n !== `/space/` + e.get(N, t)
    ? !1
    : U(
        e,
        t,
        e
          .get(M)
          .formatMessage({
            id: `pages.presentation.quickStart.filesPrompt`,
            defaultMessage: `Use these files to create a presentation.`,
            description: `Editable, unsent prompt placed in an empty presentation composer after the user selects local or Space files`,
          }),
      );
}
function q(e) {
  e.get(O).danger(
    e
      .get(M)
      .formatMessage({
        id: `pages.presentation.quickStart.sourceFailed`,
        defaultMessage: `Couldn't add that source. Try again.`,
        description: `Error when a selected presentation source cannot be added to its composer`,
      }),
    { errorAnalytics: { toastId: `space.presentation.quickStart.sourceFailed` } },
  );
}
function J() {
  return (J = e(() => {
    (P(), b(), F(), W(), L());
  }))();
}
function ie(e) {
  let t = (0, Y.c)(3),
    { pageId: n } = e,
    r = D(G, n),
    [i, a] = (0, X.useState)(r);
  r && !i && a(!0);
  let o;
  return (
    t[0] !== i || t[1] !== e
      ? ((o = i ? (0, Q.jsx)(ae, { ...e }) : null), (t[0] = i), (t[1] = e), (t[2] = o))
      : (o = t[2]),
    o
  );
}
function ae(e) {
  let n = (0, Y.c)(26),
    { pageId: i, onClose: a } = e,
    o = t(_),
    c = ne(),
    l = T(a),
    [u, p] = (0, X.useState)(!1),
    m = D(V, i),
    h = D(G, i),
    g;
  n[0] !== l || n[1] !== i || n[2] !== o
    ? ((g = () => {
        (0, Z.flushSync)(l);
        try {
          let e = o.get(H, i);
          (e == null || !K(o, i) || !R(`composer.addFiles`, `menu`, { composerId: e })) && q(o);
        } catch {
          q(o);
        }
      }),
      (n[0] = l),
      (n[1] = i),
      (n[2] = o),
      (n[3] = g))
    : (g = n[3]);
  let v = g,
    b;
  n[4] !== l || n[5] !== i || n[6] !== o
    ? ((b = async (e) => {
        let t = o.get(V, i);
        if (t != null && e.length !== 0) {
          (0, Z.flushSync)(l);
          try {
            (K(o, i), await t.attachLibraryFiles(e));
          } catch {
            q(o);
          }
        }
      }),
      (n[4] = l),
      (n[5] = i),
      (n[6] = o),
      (n[7] = b))
    : (b = n[7]);
  let x = b,
    C = u ? `wideTall` : `xxwide`,
    w;
  n[8] !== c || n[9] !== u
    ? ((w = u
        ? (0, Q.jsx)(S, {
            color: `outlineSurfaceRaised`,
            size: `iconCircle`,
            radius: `full`,
            "aria-label": c.formatMessage({
              id: `pages.presentation.quickStart.back`,
              defaultMessage: `Back`,
              description: `Return from Space file search to the presentation Quick start choices`,
            }),
            onClick: () => p(!1),
            children: (0, Q.jsx)(k, {}),
          })
        : void 0),
      (n[8] = c),
      (n[9] = u),
      (n[10] = w))
    : (w = n[10]);
  let E;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { "aria-describedby": void 0 }), (n[11] = E))
    : (E = n[11]);
  let O;
  n[12] === l
    ? (O = n[13])
    : ((O = (e) => {
        e || l();
      }),
      (n[12] = l),
      (n[13] = O));
  let j;
  n[14] !== m || n[15] !== x || n[16] !== l || n[17] !== v || n[18] !== u || n[19] !== h
    ? ((j = u
        ? (0, Q.jsx)(z, {
            ...m?.libraryFilePickerOptions,
            fill: !0,
            disabled: m == null,
            open: !0,
            onOpenChange: (e) => {
              e || l();
            },
            onAttachFiles: (e) => void x(e),
          })
        : (0, Q.jsxs)(s, {
            className: `select-none`,
            size: `full`,
            variant: `chatgpt`,
            children: [
              (0, Q.jsx)(`div`, {
                className: `shrink-0 p-4`,
                children: (0, Q.jsxs)(re, {
                  className: `m-0 flex items-center gap-2 body-sm font-medium`,
                  children: [
                    (0, Q.jsx)(y, {}),
                    (0, Q.jsx)(A, {
                      id: `pages.presentation.quickStart.title`,
                      defaultMessage: `New slide`,
                      description: `Title of the dialog with ways to begin a new presentation`,
                    }),
                  ],
                }),
              }),
              (0, Q.jsxs)(`div`, {
                className: `grid shrink-0 grid-cols-3 gap-4 p-4`,
                children: [
                  (0, Q.jsx)(S, {
                    className: `w-full min-w-0 justify-center`,
                    color: `secondary`,
                    size: `inline`,
                    radius: `large`,
                    autoFocus: !0,
                    onClick: l,
                    children: (0, Q.jsxs)(`span`, {
                      className: `flex w-full flex-col items-center gap-5 px-4 pt-6 pb-4 text-center body-sm font-normal whitespace-normal`,
                      children: [
                        (0, Q.jsx)(r, { asset: d }),
                        (0, Q.jsx)(A, {
                          id: `pages.presentation.quickStart.scratch`,
                          defaultMessage: `Start from scratch`,
                          description: `Action that closes Quick start to edit the new blank presentation`,
                        }),
                      ],
                    }),
                  }),
                  (0, Q.jsx)(S, {
                    className: `w-full min-w-0 justify-center`,
                    color: `secondary`,
                    size: `inline`,
                    radius: `large`,
                    disabled: m == null,
                    onClick: () => p(!0),
                    children: (0, Q.jsxs)(`span`, {
                      className: `flex w-full flex-col items-center gap-5 px-4 pt-6 pb-4 text-center body-sm font-normal whitespace-normal`,
                      children: [
                        (0, Q.jsx)(r, { asset: te }),
                        (0, Q.jsx)(A, {
                          id: `pages.presentation.quickStart.spaceFiles`,
                          defaultMessage: `Create from spaces`,
                          description: `Action to create a presentation using files from a Space; Space means a collection of Pages and files`,
                        }),
                      ],
                    }),
                  }),
                  (0, Q.jsx)(S, {
                    className: `w-full min-w-0 justify-center`,
                    color: `secondary`,
                    size: `inline`,
                    radius: `large`,
                    disabled: !h,
                    onClick: v,
                    children: (0, Q.jsxs)(`span`, {
                      className: `flex w-full flex-col items-center gap-5 px-4 pt-6 pb-4 text-center body-sm font-normal whitespace-normal`,
                      children: [
                        (0, Q.jsx)(r, { asset: f }),
                        (0, Q.jsx)(A, {
                          id: `pages.presentation.quickStart.import`,
                          defaultMessage: `Create from a file`,
                          description: `Action to select existing files and attach them as sources in the presentation composer`,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })),
      (n[14] = m),
      (n[15] = x),
      (n[16] = l),
      (n[17] = v),
      (n[18] = u),
      (n[19] = h),
      (n[20] = j))
    : (j = n[20]);
  let M;
  return (
    n[21] !== C || n[22] !== w || n[23] !== O || n[24] !== j
      ? ((M = (0, Q.jsx)(ee, {
          open: !0,
          size: C,
          widthHint: 800,
          variant: `translucent`,
          headerActions: w,
          contentProps: E,
          onOpenChange: O,
          children: j,
        })),
        (n[21] = C),
        (n[22] = w),
        (n[23] = O),
        (n[24] = j),
        (n[25] = M))
      : (M = n[25]),
    M
  );
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = m()),
      g(),
      h(),
      u(),
      w(),
      (X = i()),
      (Z = a()),
      x(),
      I(),
      C(),
      c(),
      o(),
      p(),
      v(),
      B(),
      W(),
      n(),
      E(),
      J(),
      (Q = l()));
  }))();
}
$();
export { ie as PresentationQuickStartDialog };
//# sourceMappingURL=dialog-14df32bcde97.js.map
