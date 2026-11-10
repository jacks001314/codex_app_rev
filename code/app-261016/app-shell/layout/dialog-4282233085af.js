import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  LNt as s,
  LO as ee,
  MNt as te,
  NNt as c,
  NSt as l,
  OT as ne,
  PBt as u,
  Qst as re,
  RO as ie,
  TY as d,
  USt as ae,
  WO as oe,
  XOt as f,
  Y3 as p,
  Z3 as m,
  ZSt as h,
  jH as se,
  kT as ce,
  nB as le,
  nCt as ue,
  okt as de,
  qO as fe,
  rB as g,
  tkt as _,
  zO as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B4n as pe,
  BFt as y,
  H4n as me,
  W4n as he,
  aat as ge,
  iat as b,
  zFt as _e,
} from "./app-initial-ad16eaadf81f.js";
import { i as ve, p as x } from "./hooks-settings-model-f200bbc1bcb6.js";
import { n as ye, r as S } from "./hooks-settings-route-8191acda142e.js";
import { a as C, i as w, r as be } from "./hooks-settings-copy-22021d3ecf83.js";
import { a as T, n as E, r as xe, t as D } from "./hooks-settings-source-label-75d050a55147.js";
import { n as Se, t as O } from "./hooks-settings-navigation-6717d3ac9a68.js";
function k(e) {
  let n = (0, A.c)(61),
    { hooks: r, hostId: i, onClose: o } = e,
    s = t(re),
    c = de(),
    l = ae(),
    u = (0, j.useId)(),
    d;
  n[0] === c
    ? (d = n[1])
    : ((d = c.formatMessage({
        id: `composer.hooks.review.details`,
        defaultMessage: `Details`,
        description: `Toggle the full configuration details of a hook without selecting it`,
      })),
      (n[0] = c),
      (n[1] = d));
  let f = d,
    m;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = new Set()), (n[2] = m)) : (m = n[2]);
  let [h, ce] = (0, j.useState)(m),
    g;
  n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = new Set()), (n[3] = g)) : (g = n[3]);
  let [y, me] = (0, j.useState)(g),
    [b, ve] = (0, j.useState)(`selected`),
    x = (0, j.useRef)(null),
    S;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (e, t) => {
        me((n) => {
          let r = new Set(n);
          return (t ? r.add(e) : r.delete(e), r);
        });
      }),
      (n[4] = S))
    : (S = n[4]);
  let C = S,
    { mutate: w, isPending: T, error: E } = ue(he, i),
    D;
  n[5] !== r || n[6] !== T || n[7] !== w || n[8] !== o || n[9] !== y
    ? ((D = (e) => {
        let t = e === `all` ? r : r.filter((e) => y.has(e.key));
        T || t.length === 0 || (ve(e), w(t.map(Ce), { onSuccess: o }));
      }),
      (n[5] = r),
      (n[6] = T),
      (n[7] = w),
      (n[8] = o),
      (n[9] = y),
      (n[10] = D))
    : (D = n[10]);
  let O = D,
    k = oe,
    N;
  n[11] !== T || n[12] !== o
    ? ((N = (e) => {
        !e && !T && o();
      }),
      (n[11] = T),
      (n[12] = o),
      (n[13] = N))
    : (N = n[13]);
  let P;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = { "aria-describedby": void 0 }), (n[14] = P))
    : (P = n[14]);
  let F = a,
    I;
  n[15] === O
    ? (I = n[16])
    : ((I = (e) => {
        (e.preventDefault(), O(`selected`));
      }),
      (n[15] = O),
      (n[16] = I));
  let L;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, M.jsx)(v, {
        children: (0, M.jsx)(ie, {
          title: (0, M.jsx)(fe, {
            children: (0, M.jsx)(_, {
              id: `composer.hooks.review.title`,
              defaultMessage: `Review hooks`,
              description: `Title of the hook approval dialog`,
            }),
          }),
        }),
      })),
      (n[17] = L))
    : (L = n[17]);
  let R = v,
    Te = r.map((e, t) =>
      (0, M.jsxs)(
        `div`,
        {
          className: te(
            `min-w-0 rounded-lg border`,
            y.has(e.key) ? `border-strong bg-surface-secondary` : `border-default`,
            !T && `cursor-interaction hover:bg-surface-secondary`,
          ),
          role: `presentation`,
          onMouseDown: (t) => {
            t.detail === 1 && (x.current = { key: e.key, checked: y.has(e.key) });
          },
          onClick: (t) => {
            if (T || !(t.target instanceof Element) || t.target.closest(`button, input, label`)) return;
            let n = t.currentTarget.ownerDocument.getSelection();
            if (n != null && !n.isCollapsed) {
              t.detail > 1 && x.current?.key === e.key && C(e.key, x.current.checked);
              return;
            }
            C(e.key, !y.has(e.key));
          },
          children: [
            (0, M.jsxs)(`div`, {
              className: `relative flex items-center gap-3 px-3 py-2`,
              children: [
                (0, M.jsx)(ne, {
                  id: `${u}-${t}`,
                  checked: y.has(e.key),
                  disabled: T,
                  onCheckedChange: (t) => C(e.key, t),
                }),
                (0, M.jsx)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: (0, M.jsxs)(`label`, {
                    htmlFor: `${u}-${t}`,
                    className: `flex cursor-interaction items-center gap-3 text-sm font-medium select-none`,
                    children: [
                      (0, M.jsx)(`span`, {
                        className: `truncate`,
                        title: be(e, t, c),
                        children: be(e, t, c),
                      }),
                      (0, M.jsx)(_e, {
                        className: `shrink-0`,
                        variant: e.trustStatus === `modified` ? `caution` : `success`,
                        children:
                          e.trustStatus === `modified`
                            ? (0, M.jsx)(_, {
                                id: `composer.hooks.review.changed`,
                                defaultMessage: `Modified`,
                                description: `Label for a hook changed since its last approval`,
                              })
                            : (0, M.jsx)(_, {
                                id: `composer.hooks.review.new`,
                                defaultMessage: `New`,
                                description: `Label for a hook awaiting its first approval`,
                              }),
                      }),
                    ],
                  }),
                }),
                (0, M.jsx)(le, {
                  cloneCustomTrigger: !0,
                  tooltipContent: f,
                  children: (0, M.jsx)(p, {
                    color: `ghost`,
                    size: `compact`,
                    "aria-label": f,
                    "aria-expanded": h.has(e.key),
                    "aria-controls": `${u}-${t}-details`,
                    onClick: (t) => {
                      (t.stopPropagation(),
                        ce((t) => {
                          let n = new Set(t);
                          return (n.has(e.key) ? n.delete(e.key) : n.add(e.key), n);
                        }));
                    },
                    children: (0, M.jsx)(se, { className: te(h.has(e.key) && `rotate-180`) }),
                  }),
                }),
              ],
            }),
            (0, M.jsx)(`div`, {
              id: `${u}-${t}-details`,
              className: `border-t border-default p-3`,
              hidden: !h.has(e.key),
              children: h.has(e.key)
                ? (0, M.jsx)(xe, { hook: e, source: (0, M.jsx)(we, { hook: e }), variant: `embedded` })
                : null,
            }),
          ],
        },
        e.key,
      ),
    ),
    z;
  n[18] !== R || n[19] !== Te
    ? ((z = (0, M.jsx)(R, { className: `min-h-0 gap-2 overflow-y-auto`, children: Te })),
      (n[18] = R),
      (n[19] = Te),
      (n[20] = z))
    : (z = n[20]);
  let B;
  n[21] === E
    ? (B = n[22])
    : ((B =
        E == null
          ? null
          : (0, M.jsx)(v, {
              children: (0, M.jsx)(`p`, {
                role: `alert`,
                className: `text-sm text-danger`,
                children:
                  E instanceof pe
                    ? (0, M.jsx)(_, {
                        id: `composer.hooks.review.overridden`,
                        defaultMessage: `Another config layer overrides these hook settings and must be changed before approval can take effect`,
                        description: `Explains why saved hook approval did not take effect`,
                      })
                    : (0, M.jsx)(_, {
                        id: `composer.hooks.review.error`,
                        defaultMessage: `Could not allow hooks`,
                        description: `Error after saving hook approval fails`,
                      }),
              }),
            })),
      (n[21] = E),
      (n[22] = B));
  let V;
  n[23] !== i || n[24] !== T || n[25] !== l || n[26] !== o || n[27] !== s
    ? ((V = (0, M.jsx)(`p`, {
        className: `min-w-0 flex-1 basis-full text-xs text-secondary select-none sm:basis-0`,
        children: (0, M.jsx)(_, {
          id: `composer.hooks.review.persistenceLink`,
          defaultMessage: `You can change this later in <settings>settings</settings>`,
          description: `Explains that hook approval choices can be changed later. The settings link opens Hooks settings.`,
          values: {
            settings: (e) =>
              (0, M.jsx)(`button`, {
                className: `cursor-interaction rounded-sm border-0 bg-transparent p-0 align-baseline text-inherit underline decoration-current underline-offset-2 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
                type: `button`,
                disabled: T,
                onClick: () => {
                  (o(),
                    Se({
                      hostId: i,
                      navigate: l,
                      section: ye({ hostId: i }),
                      setSelectedHostId: (e) => ge(s, e),
                    }));
                },
                children: e,
              }),
          },
        }),
      })),
      (n[23] = i),
      (n[24] = T),
      (n[25] = l),
      (n[26] = o),
      (n[27] = s),
      (n[28] = V))
    : (V = n[28]);
  let H;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, M.jsx)(_, {
        id: `composer.hooks.review.notNow`,
        defaultMessage: `Not now`,
        description: `Dismiss hook review without changing trust`,
      })),
      (n[29] = H))
    : (H = n[29]);
  let U;
  n[30] !== T || n[31] !== o
    ? ((U = (0, M.jsx)(p, { color: `secondary`, disabled: T, onClick: o, children: H })),
      (n[30] = T),
      (n[31] = o),
      (n[32] = U))
    : (U = n[32]);
  let W = r.length === 0 || T,
    G = T && b === `all`,
    K;
  n[33] === O ? (K = n[34]) : ((K = () => O(`all`)), (n[33] = O), (n[34] = K));
  let q;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, M.jsx)(_, {
        id: `composer.hooks.review.allowAll`,
        defaultMessage: `Allow all`,
        description: `Immediately approve every hook definition shown in the review dialog`,
      })),
      (n[35] = q))
    : (q = n[35]);
  let J;
  n[36] !== W || n[37] !== G || n[38] !== K
    ? ((J = (0, M.jsx)(p, { color: `secondary`, disabled: W, loading: G, onClick: K, children: q })),
      (n[36] = W),
      (n[37] = G),
      (n[38] = K),
      (n[39] = J))
    : (J = n[39]);
  let Ee = y.size === 0 || T,
    De = T && b === `selected`,
    Y;
  n[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, M.jsx)(_, {
        id: `composer.hooks.review.allow`,
        defaultMessage: `Allow selected`,
        description: `Approve only the selected hook definitions`,
      })),
      (n[40] = Y))
    : (Y = n[40]);
  let X;
  n[41] !== Ee || n[42] !== De
    ? ((X = (0, M.jsx)(p, { type: `submit`, disabled: Ee, loading: De, children: Y })),
      (n[41] = Ee),
      (n[42] = De),
      (n[43] = X))
    : (X = n[43]);
  let Z;
  n[44] !== V || n[45] !== U || n[46] !== J || n[47] !== X
    ? ((Z = (0, M.jsx)(v, { children: (0, M.jsxs)(ee, { className: `flex-wrap`, children: [V, U, J, X] }) })),
      (n[44] = V),
      (n[45] = U),
      (n[46] = J),
      (n[47] = X),
      (n[48] = Z))
    : (Z = n[48]);
  let Q;
  n[49] !== F || n[50] !== I || n[51] !== L || n[52] !== z || n[53] !== B || n[54] !== Z
    ? ((Q = (0, M.jsxs)(F, {
        as: `form`,
        className: `max-h-[min(680px,calc(100dvh/var(--codex-window-zoom)-4rem))] min-h-0 overflow-hidden`,
        onSubmit: I,
        children: [L, z, B, Z],
      })),
      (n[49] = F),
      (n[50] = I),
      (n[51] = L),
      (n[52] = z),
      (n[53] = B),
      (n[54] = Z),
      (n[55] = Q))
    : (Q = n[55]);
  let $;
  return (
    n[56] !== k || n[57] !== P || n[58] !== Q || n[59] !== N
      ? (($ = (0, M.jsx)(k, {
          open: !0,
          size: `xwide`,
          showDialogClose: !1,
          onOpenChange: N,
          contentProps: P,
          children: Q,
        })),
        (n[56] = k),
        (n[57] = P),
        (n[58] = Q),
        (n[59] = N),
        (n[60] = $))
      : ($ = n[60]),
    $
  );
}
function Ce(e) {
  return { key: e.key, trustedHash: e.currentHash };
}
function we(e) {
  let t = (0, A.c)(10),
    { hook: n } = e,
    r;
  t[0] === n.source ? (r = t[1]) : ((r = ve(n.source)), (t[0] = n.source), (t[1] = r));
  let i = r,
    a;
  t[2] === i ? (a = t[3]) : ((a = (0, M.jsx)(D, { source: i })), (t[2] = i), (t[3] = a));
  let o = a;
  if (i === `plugin`) {
    let e;
    (t[4] !== n.pluginId || t[5] !== o
      ? ((e = w(n.pluginId) ?? o), (t[4] = n.pluginId), (t[5] = o), (t[6] = e))
      : (e = t[6]),
      (o = e));
  } else if (i === `project`) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(_, {
          id: `composer.hooks.review.project`,
          defaultMessage: `This project`,
          description: `Source label for a hook defined in the current project`,
        })),
        (t[7] = e))
      : (e = t[7]),
      (o = e));
  }
  let s;
  return (
    t[8] === o
      ? (s = t[9])
      : ((s = (0, M.jsx)(`span`, { className: `select-none`, children: o })), (t[8] = o), (t[9] = s)),
    s
  );
}
var A, j, M;
function N() {
  return (N = e(() => {
    ((A = u()),
      c(),
      h(),
      (j = r()),
      f(),
      l(),
      y(),
      m(),
      ce(),
      o(),
      i(),
      d(),
      g(),
      n(),
      C(),
      T(),
      x(),
      O(),
      me(),
      S(),
      E(),
      b(),
      (M = s()));
  }))();
}
N();
export { k as HookReviewDialog };
//# sourceMappingURL=dialog-4282233085af.js.map
