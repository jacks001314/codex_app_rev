import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  Cy as n,
  F5t as r,
  Hk as i,
  IXt as a,
  JS as o,
  O5t as s,
  QGt as c,
  QTt as l,
  RJt as u,
  SC as d,
  Urn as f,
  Vk as p,
  Wrn as m,
  XS as h,
  YTt as g,
  Yrn as _,
  _Jt as v,
  _Rt as y,
  _dn as b,
  ast as x,
  cMt as S,
  dJt as C,
  ein as w,
  fJt as T,
  gMt as E,
  iC as D,
  ist as O,
  mcn as k,
  my as A,
  nC as j,
  nG as M,
  py as N,
  qRt as P,
  rEt as F,
  rG as ee,
  rOt as I,
  tC as L,
  tOt as R,
  uMt as z,
  vJt as B,
  vdn as V,
  xC as H,
  xy as U,
  yRt as W,
} from "./app-shared-7552fc8d5d82.js";
import {
  $O as te,
  $gt as G,
  Jgt as ne,
  Xgt as K,
  Ygt as q,
  Zgt as re,
  dw as ie,
  e_t as ae,
  fw as oe,
  gk as se,
  nk as ce,
  t_t as le,
  tk as ue,
  vk as de,
} from "./app-initial-3916b423772b.js";
import { K_ as fe, q_ as pe } from "./app-primary-7b889402e22e.js";
var me;
function he() {
  return (he = e(() => {
    me = `` + new URL(`appshot-demo-dc57d9bd1938.mp4`, import.meta.url).href;
  }))();
}
function ge() {
  let e = (0, J.c)(46),
    n = t(C),
    i = w(),
    a = r(re),
    { platform: s } = ee(),
    c = I(),
    [l, u] = (0, ye.useState)(null),
    { data: d } = r(ae),
    f;
  e[0] !== c || e[1] !== n
    ? ((f = {
        mutationFn: _e,
        onSuccess: (e) => {
          (n.query.setData(ae, e.state), c(G));
        },
      }),
      (e[0] = c),
      (e[1] = n),
      (e[2] = f))
    : (f = e[2]);
  let p = B(f);
  if (!a || d?.supported === !1) return null;
  let m;
  e[3] !== n || e[4] !== p
    ? ((m = async function (e, t) {
        u(null);
        try {
          let r = await p.mutateAsync({ hotkey: e });
          if (!r.success) {
            u(r.error);
            return;
          }
          W(n, P, { hotkey: e ?? void 0, enabled: e != null, source: t });
        } catch (e) {
          let t = e;
          u(t instanceof Error ? t.message : String(t));
        }
      }),
      (e[3] = n),
      (e[4] = p),
      (e[5] = m))
    : (m = e[5]);
  let g = m,
    v = d?.configuredHotkey ?? null,
    y,
    b,
    x,
    S,
    T,
    E,
    D,
    k,
    A,
    j;
  if (
    e[6] !== g ||
    e[7] !== v ||
    e[8] !== l ||
    e[9] !== i ||
    e[10] !== s ||
    e[11] !== p.isPending
  ) {
    let t =
        s === `windows`
          ? [
              { hotkey: `DoubleAlt`, label: i.formatMessage(X.doubleAlt) },
              { hotkey: `DoubleShift`, label: i.formatMessage(X.doubleShift) },
            ]
          : be,
      n = t.find((e) => e.hotkey === v) ?? null,
      r = n?.label ?? (v == null ? null : H(v)),
      a = n?.hotkey ?? null,
      c =
        a == null && l == null
          ? void 0
          : (0, Y.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                a == null ? null : (0, Y.jsx)(ve, { hotkey: a, isWindows: s === `windows` }),
                l ? (0, Y.jsx)(`span`, { className: `text-danger`, children: l }) : null,
              ],
            });
    ((x = U),
      e[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((A = (0, Y.jsx)(_, {
            id: `settings.appshotHotkey.label`,
            defaultMessage: `Hotkey`,
            description: `Label for appshot hotkey setting`,
          })),
          (e[22] = A))
        : (A = e[22]),
      (j = c),
      (b = o),
      (T = `end`),
      (E = `icon`),
      (D = p.isPending),
      (k = (0, Y.jsx)(te, {
        className: `w-max`,
        contentClassName: `flex-none`,
        disabled: p.isPending,
        children:
          r ??
          (0, Y.jsx)(_, {
            id: `settings.appshotHotkey.none`,
            defaultMessage: `None`,
            description: `Label for disabling the appshot hotkey`,
          }),
      })),
      (y = h.Section),
      (S = t.map((e) =>
        (0, Y.jsx)(
          h.Item,
          {
            rightIconAsset: e.hotkey === n?.hotkey ? O : void 0,
            onSelect: () => {
              (u(null), e.hotkey !== v && g(e.hotkey, `capture`));
            },
            children: e.label,
          },
          e.hotkey,
        ),
      )),
      (e[6] = g),
      (e[7] = v),
      (e[8] = l),
      (e[9] = i),
      (e[10] = s),
      (e[11] = p.isPending),
      (e[12] = y),
      (e[13] = b),
      (e[14] = x),
      (e[15] = S),
      (e[16] = T),
      (e[17] = E),
      (e[18] = D),
      (e[19] = k),
      (e[20] = A),
      (e[21] = j));
  } else
    ((y = e[12]),
      (b = e[13]),
      (x = e[14]),
      (S = e[15]),
      (T = e[16]),
      (E = e[17]),
      (D = e[18]),
      (k = e[19]),
      (A = e[20]),
      (j = e[21]));
  let M = v == null ? O : void 0,
    N;
  e[23] !== g || e[24] !== v
    ? ((N = () => {
        (u(null), v != null && g(null, `disable`));
      }),
      (e[23] = g),
      (e[24] = v),
      (e[25] = N))
    : (N = e[25]);
  let F;
  e[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Y.jsx)(_, {
        id: `settings.appshotHotkey.none`,
        defaultMessage: `None`,
        description: `Label for disabling the appshot hotkey`,
      })),
      (e[26] = F))
    : (F = e[26]);
  let L;
  e[27] !== N || e[28] !== M
    ? ((L = (0, Y.jsx)(h.Item, { rightIconAsset: M, onSelect: N, children: F })),
      (e[27] = N),
      (e[28] = M),
      (e[29] = L))
    : (L = e[29]);
  let R;
  e[30] !== y || e[31] !== L || e[32] !== S
    ? ((R = (0, Y.jsxs)(y, { children: [S, L] })),
      (e[30] = y),
      (e[31] = L),
      (e[32] = S),
      (e[33] = R))
    : (R = e[33]);
  let z;
  e[34] !== b || e[35] !== R || e[36] !== T || e[37] !== E || e[38] !== D || e[39] !== k
    ? ((z = (0, Y.jsx)(b, {
        align: T,
        contentWidth: E,
        disabled: D,
        triggerButton: k,
        children: R,
      })),
      (e[34] = b),
      (e[35] = R),
      (e[36] = T),
      (e[37] = E),
      (e[38] = D),
      (e[39] = k),
      (e[40] = z))
    : (z = e[40]);
  let V;
  return (
    e[41] !== x || e[42] !== z || e[43] !== A || e[44] !== j
      ? ((V = (0, Y.jsx)(x, { label: A, description: j, control: z })),
        (e[41] = x),
        (e[42] = z),
        (e[43] = A),
        (e[44] = j),
        (e[45] = V))
      : (V = e[45]),
    V
  );
}
async function _e(e) {
  let { hotkey: t } = e,
    n = p.appshot;
  if (n == null) throw Error(`Appshot hotkeys are unavailable`);
  return n.setHotkey(t);
}
function ve(e) {
  let t = (0, J.c)(5),
    { hotkey: n, isWindows: r } = e;
  switch (n) {
    case `DoubleCommand`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(_, {
              id: `settings.appshotHotkey.description.command`,
              defaultMessage: `Press both ⌘ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Command keys`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `DoubleOption`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(_, {
              id: `settings.appshotHotkey.description.option`,
              defaultMessage: `Press both ⌥ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Option keys`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `DoubleShift`: {
      let e;
      return (
        t[2] === r
          ? (e = t[3])
          : ((e = r
              ? (0, Y.jsx)(_, {
                  id: `settings.appshotHotkey.description.windowsShift`,
                  defaultMessage: `Press both Shift keys simultaneously`,
                  description: `Description shown when the Windows appshot hotkey is both Shift keys`,
                })
              : (0, Y.jsx)(_, {
                  id: `settings.appshotHotkey.description.shift`,
                  defaultMessage: `Press both ⇧ keys simultaneously`,
                  description: `Description shown when the appshot hotkey is both Shift keys`,
                })),
            (t[2] = r),
            (t[3] = e)),
        e
      );
    }
    case `DoubleAlt`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(_, {
              id: `settings.appshotHotkey.description.windowsAlt`,
              defaultMessage: `Press both Alt keys simultaneously`,
              description: `Description shown when the Windows appshot hotkey is both Alt keys`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
var J, ye, Y, be, X;
function xe() {
  return (xe = e(() => {
    ((J = b()),
      c(),
      x(),
      v(),
      s(),
      (ye = V()),
      m(),
      K(),
      le(),
      L(),
      M(),
      d(),
      y(),
      R(),
      i(),
      T(),
      n(),
      ce(),
      (Y = k()),
      (be = [
        { hotkey: `DoubleCommand`, label: `⌘ + ⌘` },
        { hotkey: `DoubleOption`, label: `⌥ + ⌥` },
        { hotkey: `DoubleShift`, label: `⇧ + ⇧` },
      ]),
      (X = f({
        doubleAlt: {
          id: `settings.appshotHotkey.option.windowsAlt`,
          defaultMessage: `Alt + Alt`,
          description: `Label for the Windows appshot shortcut using both Alt keys`,
        },
        doubleShift: {
          id: `settings.appshotHotkey.option.windowsShift`,
          defaultMessage: `Shift + Shift`,
          description: `Label for the Windows appshot shortcut using both Shift keys`,
        },
      })));
  }))();
}
var Z;
function Se() {
  return (Se = e(() => {
    (m(),
      (Z = f({
        capture: {
          id: `settings.appshots.hero.title`,
          defaultMessage: `Take an appshot to show ChatGPT your frontmost window`,
          description: `Explainer heading for Appshots, a Codex feature that captures the frontmost app window and sends its content to a chat`,
        },
        soundEffect: {
          id: `settings.appshots.soundEffect.label`,
          defaultMessage: `Play sound effect`,
          description: `Label for the Appshots sound effect setting row`,
        },
      })));
  }))();
}
function Ce() {
  let e = (0, Q.c)(41),
    n = t(C),
    i = w(),
    s = F(a.destination),
    c = F(a.alwaysSendToMini),
    u = r(re),
    d = E(),
    f = z(`1532120159`),
    { isLoading: p, platform: m } = ee(),
    g;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(_, {
        id: `settings.appshots.destination.automatic`,
        defaultMessage: `Automatic`,
        description: `Option label for choosing the chat that receives an Appshot automatically based on recent chat activity`,
      })),
      (e[0] = g))
    : (g = e[0]);
  let v;
  e[1] === f
    ? (v = e[2])
    : ((v = {
        id: `automatic`,
        label: g,
        description: f
          ? (0, $.jsx)(_, {
              id: `settings.appshots.destination.automatic.description.mini`,
              defaultMessage: `Uses the current chat if used recently, otherwise starts a new chat. In Mini, always starts a new chat`,
              description: `Explains automatic Appshot routing: outside Mini, the floating compact panel, reuse a recently active chat or create a new chat; in Mini, always create a new chat`,
            })
          : (0, $.jsx)(_, {
              id: `settings.appshots.destination.automatic.description`,
              defaultMessage: `Uses the current chat if used recently, otherwise starts a new chat`,
              description: `Explains automatic Appshot routing: reuse a recently active chat or create a new chat`,
            }),
      }),
      (e[1] = f),
      (e[2] = v));
  let y;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = {
        id: `last-chat`,
        label: (0, $.jsx)(_, {
          id: `settings.appshots.destination.lastChat`,
          defaultMessage: `Current chat`,
          description: `Option label for always sending an Appshot to the current chat`,
        }),
        description: (0, $.jsx)(_, {
          id: `settings.appshots.destination.lastChat.description`,
          defaultMessage: `Always use the current chat`,
          description: `Explains that captured Appshot content is always sent to the current chat`,
        }),
      }),
      (e[3] = y))
    : (y = e[3]);
  let b;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = {
        id: `new-chat`,
        label: (0, $.jsx)(_, {
          id: `settings.appshots.destination.newChat`,
          defaultMessage: `New chat`,
          description: `Option label for always creating a new chat to receive an Appshot`,
        }),
        description: (0, $.jsx)(_, {
          id: `settings.appshots.destination.newChat.description`,
          defaultMessage: `Always start a new chat`,
          description: `Explains that capturing an Appshot always creates a new chat for its content`,
        }),
      }),
      (e[4] = b))
    : (b = e[4]);
  let x;
  e[5] === v ? (x = e[6]) : ((x = [v, y, b]), (e[5] = v), (e[6] = x));
  let S = x,
    T;
  e[7] !== s || e[8] !== S
    ? ((T = S.find((e) => e.id === s) ?? S[0]), (e[7] = s), (e[8] = S), (e[9] = T))
    : (T = e[9]);
  let D = T;
  if (d || p || !u) return null;
  let k;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, $.jsx)(ue, { slug: `appshots` })), (e[10] = k))
    : (k = e[10]);
  let A;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(fe, {
        description: (0, $.jsx)(_, {
          id: `settings.appshots.hero.description`,
          defaultMessage: `Appshots include visual and text content, including text scrolled offscreen`,
          description: `Description for the Appshots settings explainer`,
        }),
        leadingVisual: (0, $.jsx)(ne, { className: `size-8 object-contain` }),
        title: (0, $.jsx)(_, { ...Z.capture }),
      })),
      (e[11] = A))
    : (A = e[11]);
  let M;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(ge, {})), (e[12] = M))
    : (M = e[12]);
  let P, I;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(_, {
        id: `settings.appshots.destination.label`,
        defaultMessage: `Appshot destination`,
        description: `Label for choosing which Codex chat receives the window content captured by an Appshot`,
      })),
      (P = (0, $.jsx)(_, {
        id: `settings.appshots.destination.description`,
        defaultMessage: `Choose where appshots go when you use the hotkey`,
        description: `Explains that the global Appshot shortcut can send captured window content to the current chat or a new chat`,
      })),
      (e[13] = P),
      (e[14] = I))
    : ((P = e[13]), (I = e[14]));
  let L;
  e[15] === D.label
    ? (L = e[16])
    : ((L = (0, $.jsx)(te, { contentClassName: `truncate`, children: D.label })),
      (e[15] = D.label),
      (e[16] = L));
  let R;
  e[17] !== s || e[18] !== S || e[19] !== n
    ? ((R = S.map((e) =>
        (0, $.jsx)(
          h.Item,
          {
            rightIconAsset: e.id === s ? O : void 0,
            subTextAllowWrap: !0,
            onSelect: () => {
              l(n, a.destination, e.id);
            },
            SubText: (0, $.jsx)(`div`, {
              className: `pt-1 text-sm text-secondary`,
              children: e.description,
            }),
            children: (0, $.jsx)(`span`, { className: `text-sm`, children: e.label }),
          },
          e.id,
        ),
      )),
      (e[17] = s),
      (e[18] = S),
      (e[19] = n),
      (e[20] = R))
    : (R = e[20]);
  let B;
  e[21] !== L || e[22] !== R
    ? ((B = (0, $.jsx)(U, {
        label: I,
        description: P,
        control: (0, $.jsx)(o, {
          align: `end`,
          contentWidth: `panelWide`,
          triggerButton: L,
          children: R,
        }),
      })),
      (e[21] = L),
      (e[22] = R),
      (e[23] = B))
    : (B = e[23]);
  let V;
  e[24] !== c || e[25] !== s || e[26] !== f || e[27] !== m || e[28] !== n
    ? ((V =
        f && m === `macOS`
          ? (0, $.jsx)(U, {
              label: (0, $.jsx)(_, {
                id: `settings.appshots.alwaysSendToMini.label`,
                defaultMessage: `Use Mini when visible`,
                description: `Label for a toggle that sends automatic Appshots to Mini, the floating compact panel, whenever it is visible`,
              }),
              description: (0, $.jsx)(_, {
                id: `settings.appshots.alwaysSendToMini.description`,
                defaultMessage: `When Mini isn’t visible, Appshots follow Automatic routing`,
                description: `Explains that Appshots use Automatic routing when Mini, the floating compact panel, is not visible`,
              }),
              control: (e) =>
                (0, $.jsx)(j, {
                  ...e,
                  checked: c,
                  disabled: s !== `automatic`,
                  onChange: (e) => {
                    l(n, a.alwaysSendToMini, e);
                  },
                }),
            })
          : null),
      (e[24] = c),
      (e[25] = s),
      (e[26] = f),
      (e[27] = m),
      (e[28] = n),
      (e[29] = V))
    : (V = e[29]);
  let H;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(we, {})), (e[30] = H))
    : (H = e[30]);
  let W;
  e[31] !== B || e[32] !== V
    ? ((W = (0, $.jsx)(ie, {
        className: `self-start`,
        children: (0, $.jsx)(ie.Content, { children: (0, $.jsxs)(N, { children: [M, B, V, H] }) }),
      })),
      (e[31] = B),
      (e[32] = V),
      (e[33] = W))
    : (W = e[33]);
  let G;
  e[34] === i
    ? (G = e[35])
    : ((G = i.formatMessage({
        id: `settings.appshots.demoVideo.label`,
        defaultMessage: `Appshots walkthrough video`,
        description: `Accessible label for the Appshots settings walkthrough video`,
      })),
      (e[34] = i),
      (e[35] = G));
  let K;
  e[36] === G
    ? (K = e[37])
    : ((K = (0, $.jsx)(N, {
        className: `w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch`,
        children: (0, $.jsx)(`video`, {
          "aria-label": G,
          autoPlay: !0,
          className: `aspect-[901/1095] w-full bg-surface-secondary/92 object-cover`,
          loop: !0,
          muted: !0,
          playsInline: !0,
          preload: `auto`,
          src: me,
        }),
      })),
      (e[36] = G),
      (e[37] = K));
  let q;
  return (
    e[38] !== W || e[39] !== K
      ? ((q = (0, $.jsx)(se, {
          title: k,
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-[var(--padding-panel)]`,
            children: [
              A,
              (0, $.jsxs)(`div`, {
                className: `grid gap-[var(--padding-panel)] lg:grid-cols-2`,
                children: [W, K],
              }),
            ],
          }),
        })),
        (e[38] = W),
        (e[39] = K),
        (e[40] = q))
      : (q = e[40]),
    q
  );
}
function we() {
  let e = (0, Q.c)(9),
    n = t(C),
    r = w(),
    i = F(a.soundEnabled),
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(_, { ...Z.soundEffect })), (e[0] = o))
    : (o = e[0]);
  let s;
  e[1] === r
    ? (s = e[2])
    : ((s = r.formatMessage({
        id: `settings.appshots.soundEffect.ariaLabel`,
        defaultMessage: `Play appshot sound effect`,
        description: `Accessible label for the Appshots sound effect toggle`,
      })),
      (e[1] = r),
      (e[2] = s));
  let c;
  e[3] === n
    ? (c = e[4])
    : ((c = (e) => {
        l(n, a.soundEnabled, e);
      }),
      (e[3] = n),
      (e[4] = c));
  let u;
  return (
    e[5] !== i || e[6] !== s || e[7] !== c
      ? ((u = (0, $.jsx)(U, {
          label: o,
          control: (0, $.jsx)(j, { ariaLabel: s, checked: i, onChange: c }),
        })),
        (e[5] = i),
        (e[6] = s),
        (e[7] = c),
        (e[8] = u))
      : (u = e[8]),
    u
  );
}
var Q, $;
function Te() {
  return (Te = e(() => {
    ((Q = b()),
      x(),
      s(),
      u(),
      m(),
      K(),
      q(),
      he(),
      L(),
      pe(),
      D(),
      M(),
      T(),
      g(),
      de(),
      oe(),
      n(),
      ce(),
      A(),
      S(),
      xe(),
      Se(),
      ($ = k()));
  }))();
}
Te();
export { Ce as AppshotsSettings };
//# sourceMappingURL=appshots-settings-c20accccaf65.js.map
