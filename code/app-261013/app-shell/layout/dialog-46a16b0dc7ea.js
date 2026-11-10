import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Ext as r,
  FV as i,
  HT as a,
  IDt as o,
  Ixt as s,
  Pxt as c,
  TJ as l,
  VDt as ee,
  VT as te,
  _Mt as u,
  _O as ne,
  _xt as d,
  cO as re,
  cz as f,
  fO as p,
  gMt as ie,
  jDt as m,
  lO as h,
  mO as ae,
  oO as oe,
  sO as se,
  sz as ce,
  t3 as g,
  vO as _,
  vzt as v,
  wot as y,
  xMt as le,
  yzt as b,
  zxt as ue,
} from "./app-shared-bbfeca5e5737.js";
import {
  MRt as de,
  NRt as x,
  Rrt as fe,
  c1n as pe,
  f1n as me,
  u1n as he,
  zrt as ge,
} from "./app-initial-5851df3f6cb1.js";
import { i as _e, p as S } from "./hooks-settings-model-f200bbc1bcb6.js";
import { n as ve, r as C } from "./hooks-settings-route-8191acda142e.js";
import { a as w, i as T, r as ye } from "./hooks-settings-copy-2f5f2d429af4.js";
import { a as E, n as D, r as be, t as O } from "./hooks-settings-source-label-5c6b62b43749.js";
import { n as xe, t as k } from "./hooks-settings-navigation-ea4c42793f91.js";
function A(e) {
  let a = (0, j.c)(61),
    { hooks: c, hostId: l, onClose: u } = e,
    d = s(n),
    f = ee(),
    p = r(),
    m = (0, M.useId)(),
    g;
  a[0] === f
    ? (g = a[1])
    : ((g = f.formatMessage({
        id: `composer.hooks.review.details`,
        defaultMessage: `Details`,
        description: `Toggle the full configuration details of a hook without selecting it`,
      })),
      (a[0] = f),
      (a[1] = g));
  let _ = g,
    v;
  a[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = new Set()), (a[2] = v)) : (v = a[2]);
  let [y, le] = (0, M.useState)(v),
    b;
  a[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = new Set()), (a[3] = b)) : (b = a[3]);
  let [x, fe] = (0, M.useState)(b),
    [he, _e] = (0, M.useState)(`selected`),
    S = (0, M.useRef)(null),
    C;
  a[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (e, t) => {
        fe((n) => {
          let r = new Set(n);
          return (t ? r.add(e) : r.delete(e), r);
        });
      }),
      (a[4] = C))
    : (C = a[4]);
  let w = C,
    { mutate: T, isPending: E, error: D } = ue(me, l),
    O;
  a[5] !== c || a[6] !== E || a[7] !== T || a[8] !== u || a[9] !== x
    ? ((O = (e) => {
        let t = e === `all` ? c : c.filter((e) => x.has(e.key));
        E || t.length === 0 || (_e(e), T(t.map(Se), { onSuccess: u }));
      }),
      (a[5] = c),
      (a[6] = E),
      (a[7] = T),
      (a[8] = u),
      (a[9] = x),
      (a[10] = O))
    : (O = a[10]);
  let k = O,
    A = ae,
    P;
  a[11] !== E || a[12] !== u
    ? ((P = (e) => {
        !e && !E && u();
      }),
      (a[11] = E),
      (a[12] = u),
      (a[13] = P))
    : (P = a[13]);
  let F;
  a[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = { "aria-describedby": void 0 }), (a[14] = F))
    : (F = a[14]);
  let I = oe,
    L;
  a[15] === k
    ? (L = a[16])
    : ((L = (e) => {
        (e.preventDefault(), k(`selected`));
      }),
      (a[15] = k),
      (a[16] = L));
  let R;
  a[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, N.jsx)(h, {
        children: (0, N.jsx)(re, {
          title: (0, N.jsx)(ne, {
            children: (0, N.jsx)(o, {
              id: `composer.hooks.review.title`,
              defaultMessage: `Review hooks`,
              description: `Title of the hook approval dialog`,
            }),
          }),
        }),
      })),
      (a[17] = R))
    : (R = a[17]);
  let z = h,
    B = c.map((e, n) =>
      (0, N.jsxs)(
        `div`,
        {
          className: ie(
            `min-w-0 rounded-lg border`,
            x.has(e.key) ? `border-strong bg-surface-secondary` : `border-default`,
            !E && `cursor-interaction hover:bg-surface-secondary`,
          ),
          role: `presentation`,
          onMouseDown: (t) => {
            t.detail === 1 && (S.current = { key: e.key, checked: x.has(e.key) });
          },
          onClick: (t) => {
            if (E || !(t.target instanceof Element) || t.target.closest(`button, input, label`)) return;
            let n = t.currentTarget.ownerDocument.getSelection();
            if (n != null && !n.isCollapsed) {
              t.detail > 1 && S.current?.key === e.key && w(e.key, S.current.checked);
              return;
            }
            w(e.key, !x.has(e.key));
          },
          children: [
            (0, N.jsxs)(`div`, {
              className: `relative flex items-center gap-3 px-3 py-2`,
              children: [
                (0, N.jsx)(te, {
                  id: `${m}-${n}`,
                  checked: x.has(e.key),
                  disabled: E,
                  onCheckedChange: (t) => w(e.key, t),
                }),
                (0, N.jsx)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: (0, N.jsxs)(`label`, {
                    htmlFor: `${m}-${n}`,
                    className: `flex cursor-interaction items-center gap-3 text-sm font-medium select-none`,
                    children: [
                      (0, N.jsx)(`span`, {
                        className: `truncate`,
                        title: ye(e, n, f),
                        children: ye(e, n, f),
                      }),
                      (0, N.jsx)(de, {
                        className: `shrink-0`,
                        variant: e.trustStatus === `modified` ? `caution` : `success`,
                        children:
                          e.trustStatus === `modified`
                            ? (0, N.jsx)(o, {
                                id: `composer.hooks.review.changed`,
                                defaultMessage: `Modified`,
                                description: `Label for a hook changed since its last approval`,
                              })
                            : (0, N.jsx)(o, {
                                id: `composer.hooks.review.new`,
                                defaultMessage: `New`,
                                description: `Label for a hook awaiting its first approval`,
                              }),
                      }),
                    ],
                  }),
                }),
                (0, N.jsx)(ce, {
                  cloneCustomTrigger: !0,
                  tooltipContent: _,
                  children: (0, N.jsx)(t, {
                    color: `ghost`,
                    size: `compact`,
                    "aria-label": _,
                    "aria-expanded": y.has(e.key),
                    "aria-controls": `${m}-${n}-details`,
                    onClick: (t) => {
                      (t.stopPropagation(),
                        le((t) => {
                          let n = new Set(t);
                          return (n.has(e.key) ? n.delete(e.key) : n.add(e.key), n);
                        }));
                    },
                    children: (0, N.jsx)(i, { className: ie(y.has(e.key) && `rotate-180`) }),
                  }),
                }),
              ],
            }),
            (0, N.jsx)(`div`, {
              id: `${m}-${n}-details`,
              className: `border-t border-default p-3`,
              hidden: !y.has(e.key),
              children: y.has(e.key)
                ? (0, N.jsx)(be, { hook: e, source: (0, N.jsx)(Ce, { hook: e }), variant: `embedded` })
                : null,
            }),
          ],
        },
        e.key,
      ),
    ),
    V;
  a[18] !== z || a[19] !== B
    ? ((V = (0, N.jsx)(z, { className: `min-h-0 gap-2 overflow-y-auto`, children: B })),
      (a[18] = z),
      (a[19] = B),
      (a[20] = V))
    : (V = a[20]);
  let H;
  a[21] === D
    ? (H = a[22])
    : ((H =
        D == null
          ? null
          : (0, N.jsx)(h, {
              children: (0, N.jsx)(`p`, {
                role: `alert`,
                className: `text-sm text-danger`,
                children:
                  D instanceof pe
                    ? (0, N.jsx)(o, {
                        id: `composer.hooks.review.overridden`,
                        defaultMessage: `Another config layer overrides these hook settings and must be changed before approval can take effect`,
                        description: `Explains why saved hook approval did not take effect`,
                      })
                    : (0, N.jsx)(o, {
                        id: `composer.hooks.review.error`,
                        defaultMessage: `Could not allow hooks`,
                        description: `Error after saving hook approval fails`,
                      }),
              }),
            })),
      (a[21] = D),
      (a[22] = H));
  let U;
  a[23] !== l || a[24] !== E || a[25] !== p || a[26] !== u || a[27] !== d
    ? ((U = (0, N.jsx)(`p`, {
        className: `min-w-0 flex-1 basis-full text-xs text-secondary select-none sm:basis-0`,
        children: (0, N.jsx)(o, {
          id: `composer.hooks.review.persistenceLink`,
          defaultMessage: `You can change this later in <settings>settings</settings>`,
          description: `Explains that hook approval choices can be changed later. The settings link opens Hooks settings.`,
          values: {
            settings: (e) =>
              (0, N.jsx)(`button`, {
                className: `cursor-interaction rounded-sm border-0 bg-transparent p-0 align-baseline text-inherit underline decoration-current underline-offset-2 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
                type: `button`,
                disabled: E,
                onClick: () => {
                  (u(),
                    xe({
                      hostId: l,
                      navigate: p,
                      section: ve({ hostId: l }),
                      setSelectedHostId: (e) => ge(d, e),
                    }));
                },
                children: e,
              }),
          },
        }),
      })),
      (a[23] = l),
      (a[24] = E),
      (a[25] = p),
      (a[26] = u),
      (a[27] = d),
      (a[28] = U))
    : (U = a[28]);
  let W;
  a[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, N.jsx)(o, {
        id: `composer.hooks.review.notNow`,
        defaultMessage: `Not now`,
        description: `Dismiss hook review without changing trust`,
      })),
      (a[29] = W))
    : (W = a[29]);
  let G;
  a[30] !== E || a[31] !== u
    ? ((G = (0, N.jsx)(t, { color: `secondary`, disabled: E, onClick: u, children: W })),
      (a[30] = E),
      (a[31] = u),
      (a[32] = G))
    : (G = a[32]);
  let we = c.length === 0 || E,
    Te = E && he === `all`,
    K;
  a[33] === k ? (K = a[34]) : ((K = () => k(`all`)), (a[33] = k), (a[34] = K));
  let q;
  a[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, N.jsx)(o, {
        id: `composer.hooks.review.allowAll`,
        defaultMessage: `Allow all`,
        description: `Immediately approve every hook definition shown in the review dialog`,
      })),
      (a[35] = q))
    : (q = a[35]);
  let J;
  a[36] !== we || a[37] !== Te || a[38] !== K
    ? ((J = (0, N.jsx)(t, { color: `secondary`, disabled: we, loading: Te, onClick: K, children: q })),
      (a[36] = we),
      (a[37] = Te),
      (a[38] = K),
      (a[39] = J))
    : (J = a[39]);
  let Ee = x.size === 0 || E,
    De = E && he === `selected`,
    Y;
  a[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, N.jsx)(o, {
        id: `composer.hooks.review.allow`,
        defaultMessage: `Allow selected`,
        description: `Approve only the selected hook definitions`,
      })),
      (a[40] = Y))
    : (Y = a[40]);
  let X;
  a[41] !== Ee || a[42] !== De
    ? ((X = (0, N.jsx)(t, { type: `submit`, disabled: Ee, loading: De, children: Y })),
      (a[41] = Ee),
      (a[42] = De),
      (a[43] = X))
    : (X = a[43]);
  let Z;
  a[44] !== U || a[45] !== G || a[46] !== J || a[47] !== X
    ? ((Z = (0, N.jsx)(h, { children: (0, N.jsxs)(se, { className: `flex-wrap`, children: [U, G, J, X] }) })),
      (a[44] = U),
      (a[45] = G),
      (a[46] = J),
      (a[47] = X),
      (a[48] = Z))
    : (Z = a[48]);
  let Q;
  a[49] !== I || a[50] !== L || a[51] !== R || a[52] !== V || a[53] !== H || a[54] !== Z
    ? ((Q = (0, N.jsxs)(I, {
        as: `form`,
        className: `max-h-[min(680px,calc(100dvh/var(--codex-window-zoom)-4rem))] min-h-0 overflow-hidden`,
        onSubmit: L,
        children: [R, V, H, Z],
      })),
      (a[49] = I),
      (a[50] = L),
      (a[51] = R),
      (a[52] = V),
      (a[53] = H),
      (a[54] = Z),
      (a[55] = Q))
    : (Q = a[55]);
  let $;
  return (
    a[56] !== A || a[57] !== F || a[58] !== Q || a[59] !== P
      ? (($ = (0, N.jsx)(A, {
          open: !0,
          size: `xwide`,
          showDialogClose: !1,
          onOpenChange: P,
          contentProps: F,
          children: Q,
        })),
        (a[56] = A),
        (a[57] = F),
        (a[58] = Q),
        (a[59] = P),
        (a[60] = $))
      : ($ = a[60]),
    $
  );
}
function Se(e) {
  return { key: e.key, trustedHash: e.currentHash };
}
function Ce(e) {
  let t = (0, j.c)(10),
    { hook: n } = e,
    r;
  t[0] === n.source ? (r = t[1]) : ((r = _e(n.source)), (t[0] = n.source), (t[1] = r));
  let i = r,
    a;
  t[2] === i ? (a = t[3]) : ((a = (0, N.jsx)(O, { source: i })), (t[2] = i), (t[3] = a));
  let s = a;
  if (i === `plugin`) {
    let e;
    (t[4] !== n.pluginId || t[5] !== s
      ? ((e = T(n.pluginId) ?? s), (t[4] = n.pluginId), (t[5] = s), (t[6] = e))
      : (e = t[6]),
      (s = e));
  } else if (i === `project`) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, N.jsx)(o, {
          id: `composer.hooks.review.project`,
          defaultMessage: `This project`,
          description: `Source label for a hook defined in the current project`,
        })),
        (t[7] = e))
      : (e = t[7]),
      (s = e));
  }
  let c;
  return (
    t[8] === s
      ? (c = t[9])
      : ((c = (0, N.jsx)(`span`, { className: `select-none`, children: s })), (t[8] = s), (t[9] = c)),
    c
  );
}
var j, M, N;
function P() {
  return (P = e(() => {
    ((j = v()),
      u(),
      c(),
      (M = b()),
      m(),
      d(),
      x(),
      g(),
      a(),
      _(),
      p(),
      l(),
      f(),
      y(),
      w(),
      E(),
      S(),
      k(),
      he(),
      C(),
      D(),
      fe(),
      (N = le()));
  }))();
}
P();
export { A as HookReviewDialog };
//# sourceMappingURL=dialog-46a16b0dc7ea.js.map
