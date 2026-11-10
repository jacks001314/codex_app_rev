import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  A3t as r,
  Amn as i,
  B6t as a,
  BS as o,
  Byt as s,
  Cpn as c,
  EJt as l,
  F3t as u,
  Hu as d,
  IDt as ee,
  JG as f,
  JK as p,
  JS as m,
  KG as te,
  LDt as h,
  MDt as g,
  O3t as _,
  OJt as v,
  Opn as y,
  QG as b,
  QKt as x,
  QXt as S,
  Qu as C,
  RDt as w,
  RS as ne,
  Spn as T,
  V8t as E,
  VS as D,
  Vu as O,
  XS as k,
  Xu as A,
  YKt as j,
  ZG as M,
  Zu as N,
  _Zt as P,
  a3t as F,
  aYt as I,
  bK as L,
  cn as R,
  d3t as z,
  e0t as B,
  eZt as V,
  fYt as H,
  hmn as U,
  hz as W,
  jDt as re,
  kmn as ie,
  mz as ae,
  o3t as oe,
  qK as G,
  qKt as se,
  qu as K,
  s3t as ce,
  sYt as le,
  sn as ue,
  xK as de,
  xpn as fe,
  zyt as pe,
} from "./app-initial-f094ef01c64d.js";
import { Fw as me, Iw as he } from "./app-primary-4c40d73a1074.js";
var ge,
  _e = e(() => {
    ge = `` + new URL(`appshot-demo-dc57d9bd1938.mp4`, import.meta.url).href;
  });
function ve() {
  let e = (0, q.c)(46),
    t = r(F),
    n = y(),
    i = u(g),
    { platform: a } = s(),
    o = v(),
    [l, d] = (0, J.useState)(null),
    { data: p } = u(h),
    m;
  e[0] !== o || e[1] !== t
    ? ((m = {
        mutationFn: ye,
        onSuccess: (e) => {
          (t.query.setData(h, e.state), o(ee));
        },
      }),
      (e[0] = o),
      (e[1] = t),
      (e[2] = m))
    : (m = e[2]);
  let _ = z(m);
  if (!i || p?.supported === !1) return null;
  let b;
  e[3] !== t || e[4] !== _
    ? ((b = async function (e, n) {
        d(null);
        try {
          let r = await _.mutateAsync({ hotkey: e });
          if (!r.success) {
            d(r.error);
            return;
          }
          V(t, P, { hotkey: e ?? void 0, enabled: e != null, source: n });
        } catch (e) {
          let t = e;
          d(t instanceof Error ? t.message : String(t));
        }
      }),
      (e[3] = t),
      (e[4] = _),
      (e[5] = b))
    : (b = e[5]);
  let x = b,
    S = p?.configuredHotkey ?? null,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M;
  if (
    e[6] !== x ||
    e[7] !== S ||
    e[8] !== l ||
    e[9] !== n ||
    e[10] !== a ||
    e[11] !== _.isPending
  ) {
    let t =
        a === `windows`
          ? [
              { hotkey: `DoubleAlt`, label: n.formatMessage(X.doubleAlt) },
              { hotkey: `DoubleShift`, label: n.formatMessage(X.doubleShift) },
            ]
          : xe,
      r = t.find((e) => e.hotkey === S) ?? null,
      i = r?.label ?? (S == null ? null : L(S)),
      o = r?.hotkey ?? null,
      s =
        o == null && l == null
          ? void 0
          : (0, Y.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                o == null ? null : (0, Y.jsx)(be, { hotkey: o, isWindows: a === `windows` }),
                l ? (0, Y.jsx)(`span`, { className: `text-danger`, children: l }) : null,
              ],
            });
    ((T = K),
      e[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((j = (0, Y.jsx)(c, {
            id: `settings.appshotHotkey.label`,
            defaultMessage: `Hotkey`,
            description: `Label for appshot hotkey setting`,
          })),
          (e[22] = j))
        : (j = e[22]),
      (M = s),
      (w = te),
      (D = `end`),
      (O = `icon`),
      (k = _.isPending),
      (A = (0, Y.jsx)(ne, {
        className: `w-max`,
        contentClassName: `flex-none`,
        disabled: _.isPending,
        children:
          i ??
          (0, Y.jsx)(c, {
            id: `settings.appshotHotkey.none`,
            defaultMessage: `None`,
            description: `Label for disabling the appshot hotkey`,
          }),
      })),
      (C = f.Section),
      (E = t.map((e) =>
        (0, Y.jsx)(
          f.Item,
          {
            RightIcon: e.hotkey === r?.hotkey ? G : void 0,
            onSelect: () => {
              (d(null), e.hotkey !== S && x(e.hotkey, `capture`));
            },
            children: e.label,
          },
          e.hotkey,
        ),
      )),
      (e[6] = x),
      (e[7] = S),
      (e[8] = l),
      (e[9] = n),
      (e[10] = a),
      (e[11] = _.isPending),
      (e[12] = C),
      (e[13] = w),
      (e[14] = T),
      (e[15] = E),
      (e[16] = D),
      (e[17] = O),
      (e[18] = k),
      (e[19] = A),
      (e[20] = j),
      (e[21] = M));
  } else
    ((C = e[12]),
      (w = e[13]),
      (T = e[14]),
      (E = e[15]),
      (D = e[16]),
      (O = e[17]),
      (k = e[18]),
      (A = e[19]),
      (j = e[20]),
      (M = e[21]));
  let N = S == null ? G : void 0,
    I;
  e[23] !== x || e[24] !== S
    ? ((I = () => {
        (d(null), S != null && x(null, `disable`));
      }),
      (e[23] = x),
      (e[24] = S),
      (e[25] = I))
    : (I = e[25]);
  let R;
  e[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Y.jsx)(c, {
        id: `settings.appshotHotkey.none`,
        defaultMessage: `None`,
        description: `Label for disabling the appshot hotkey`,
      })),
      (e[26] = R))
    : (R = e[26]);
  let B;
  e[27] !== I || e[28] !== N
    ? ((B = (0, Y.jsx)(f.Item, { RightIcon: N, onSelect: I, children: R })),
      (e[27] = I),
      (e[28] = N),
      (e[29] = B))
    : (B = e[29]);
  let H;
  e[30] !== C || e[31] !== B || e[32] !== E
    ? ((H = (0, Y.jsxs)(C, { children: [E, B] })),
      (e[30] = C),
      (e[31] = B),
      (e[32] = E),
      (e[33] = H))
    : (H = e[33]);
  let U;
  e[34] !== w || e[35] !== H || e[36] !== D || e[37] !== O || e[38] !== k || e[39] !== A
    ? ((U = (0, Y.jsx)(w, {
        align: D,
        contentWidth: O,
        disabled: k,
        triggerButton: A,
        children: H,
      })),
      (e[34] = w),
      (e[35] = H),
      (e[36] = D),
      (e[37] = O),
      (e[38] = k),
      (e[39] = A),
      (e[40] = U))
    : (U = e[40]);
  let W;
  return (
    e[41] !== T || e[42] !== U || e[43] !== j || e[44] !== M
      ? ((W = (0, Y.jsx)(T, { label: j, description: M, control: U })),
        (e[41] = T),
        (e[42] = U),
        (e[43] = j),
        (e[44] = M),
        (e[45] = W))
      : (W = e[45]),
    W
  );
}
async function ye(e) {
  let { hotkey: t } = e,
    n = ae.appshot;
  if (n == null) throw Error(`Appshot hotkeys are unavailable`);
  return n.setHotkey(t);
}
function be(e) {
  let t = (0, q.c)(5),
    { hotkey: n, isWindows: r } = e;
  switch (n) {
    case `DoubleCommand`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(c, {
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
          ? ((e = (0, Y.jsx)(c, {
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
              ? (0, Y.jsx)(c, {
                  id: `settings.appshotHotkey.description.windowsShift`,
                  defaultMessage: `Press both Shift keys simultaneously`,
                  description: `Description shown when the Windows appshot hotkey is both Shift keys`,
                })
              : (0, Y.jsx)(c, {
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
          ? ((e = (0, Y.jsx)(c, {
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
var q,
  J,
  Y,
  xe,
  X,
  Se = e(() => {
    ((q = ie()),
      B(),
      ce(),
      _(),
      (J = t(i(), 1)),
      T(),
      re(),
      w(),
      M(),
      pe(),
      p(),
      de(),
      S(),
      l(),
      W(),
      oe(),
      A(),
      D(),
      (Y = U()),
      (xe = [
        { hotkey: `DoubleCommand`, label: `⌘ + ⌘` },
        { hotkey: `DoubleOption`, label: `⌥ + ⌥` },
        { hotkey: `DoubleShift`, label: `⇧ + ⇧` },
      ]),
      (X = fe({
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
  }),
  Z,
  Ce = e(() => {
    (T(),
      (Z = fe({
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
  });
function we() {
  let e = (0, Q.c)(34),
    t = r(F),
    n = y(),
    i = x(E.destination),
    a = u(g),
    l = H(),
    d = le(`1532120159`),
    { isLoading: ee } = s(),
    p;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(c, {
        id: `settings.appshots.destination.automatic`,
        defaultMessage: `Automatic`,
        description: `Option label for choosing the chat that receives an Appshot automatically based on recent chat activity`,
      })),
      (e[0] = p))
    : (p = e[0]);
  let h;
  e[1] === d
    ? (h = e[2])
    : ((h = {
        id: `automatic`,
        label: p,
        description: d
          ? (0, $.jsx)(c, {
              id: `settings.appshots.destination.automatic.description.mini`,
              defaultMessage: `Uses the current chat if used recently, otherwise starts a new chat. In Mini, always starts a new chat`,
              description: `Explains automatic Appshot routing: outside Mini, reuse a recently active chat or create a new chat; in Mini, always create a new chat`,
            })
          : (0, $.jsx)(c, {
              id: `settings.appshots.destination.automatic.description`,
              defaultMessage: `Uses the current chat if used recently, otherwise starts a new chat`,
              description: `Explains automatic Appshot routing: reuse a recently active chat or create a new chat`,
            }),
      }),
      (e[1] = d),
      (e[2] = h));
  let _;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = {
        id: `last-chat`,
        label: (0, $.jsx)(c, {
          id: `settings.appshots.destination.lastChat`,
          defaultMessage: `Current chat`,
          description: `Option label for always sending an Appshot to the current chat`,
        }),
        description: (0, $.jsx)(c, {
          id: `settings.appshots.destination.lastChat.description`,
          defaultMessage: `Always use the current chat`,
          description: `Explains that captured Appshot content is always sent to the current chat`,
        }),
      }),
      (e[3] = _))
    : (_ = e[3]);
  let v;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = {
        id: `new-chat`,
        label: (0, $.jsx)(c, {
          id: `settings.appshots.destination.newChat`,
          defaultMessage: `New chat`,
          description: `Option label for always creating a new chat to receive an Appshot`,
        }),
        description: (0, $.jsx)(c, {
          id: `settings.appshots.destination.newChat.description`,
          defaultMessage: `Always start a new chat`,
          description: `Explains that capturing an Appshot always creates a new chat for its content`,
        }),
      }),
      (e[4] = v))
    : (v = e[4]);
  let b;
  e[5] === h ? (b = e[6]) : ((b = [h, _, v]), (e[5] = h), (e[6] = b));
  let S = b,
    C;
  e[7] !== i || e[8] !== S
    ? ((C = S.find((e) => e.id === i) ?? S[0]), (e[7] = i), (e[8] = S), (e[9] = C))
    : (C = e[9]);
  let w = C;
  if (l || ee || !a) return null;
  let T;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(o, { slug: `appshots` })), (e[10] = T))
    : (T = e[10]);
  let D;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(me, {
        description: (0, $.jsx)(c, {
          id: `settings.appshots.hero.description`,
          defaultMessage: `Appshots include visual and text content, including text scrolled offscreen`,
          description: `Description for the Appshots settings explainer`,
        }),
        leadingVisual: (0, $.jsx)(`img`, {
          alt: ``,
          "aria-hidden": !0,
          className: `size-8 object-contain`,
          src: ue,
        }),
        title: (0, $.jsx)(c, { ...Z.capture }),
      })),
      (e[11] = D))
    : (D = e[11]);
  let k;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, $.jsx)(ve, {})), (e[12] = k))
    : (k = e[12]);
  let A, M;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(c, {
        id: `settings.appshots.destination.label`,
        defaultMessage: `Appshot destination`,
        description: `Label for choosing which Codex chat receives the window content captured by an Appshot`,
      })),
      (A = (0, $.jsx)(c, {
        id: `settings.appshots.destination.description`,
        defaultMessage: `Choose where appshots go when you use the hotkey`,
        description: `Explains that the global Appshot shortcut can send captured window content to the current chat or a new chat`,
      })),
      (e[13] = A),
      (e[14] = M))
    : ((A = e[13]), (M = e[14]));
  let P;
  e[15] === w.label
    ? (P = e[16])
    : ((P = (0, $.jsx)(ne, { contentClassName: `truncate`, children: w.label })),
      (e[15] = w.label),
      (e[16] = P));
  let I;
  e[17] !== i || e[18] !== S || e[19] !== t
    ? ((I = S.map((e) =>
        (0, $.jsx)(
          f.Item,
          {
            RightIcon: e.id === i ? G : void 0,
            subTextAllowWrap: !0,
            onSelect: () => {
              j(t, E.destination, e.id);
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
      (e[17] = i),
      (e[18] = S),
      (e[19] = t),
      (e[20] = I))
    : (I = e[20]);
  let L;
  e[21] !== P || e[22] !== I
    ? ((L = (0, $.jsx)(K, {
        label: M,
        description: A,
        control: (0, $.jsx)(te, {
          align: `end`,
          contentWidth: `panelWide`,
          triggerButton: P,
          children: I,
        }),
      })),
      (e[21] = P),
      (e[22] = I),
      (e[23] = L))
    : (L = e[23]);
  let R;
  e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(Te, {})), (e[24] = R))
    : (R = e[24]);
  let z;
  e[25] === L
    ? (z = e[26])
    : ((z = (0, $.jsx)(N, {
        className: `self-start`,
        children: (0, $.jsx)(N.Content, { children: (0, $.jsxs)(O, { children: [k, L, R] }) }),
      })),
      (e[25] = L),
      (e[26] = z));
  let B;
  e[27] === n
    ? (B = e[28])
    : ((B = n.formatMessage({
        id: `settings.appshots.demoVideo.label`,
        defaultMessage: `Appshots walkthrough video`,
        description: `Accessible label for the Appshots settings walkthrough video`,
      })),
      (e[27] = n),
      (e[28] = B));
  let V;
  e[29] === B
    ? (V = e[30])
    : ((V = (0, $.jsx)(O, {
        className: `w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch`,
        children: (0, $.jsx)(`video`, {
          "aria-label": B,
          autoPlay: !0,
          className: `aspect-[901/1095] w-full bg-surface-secondary/92 object-cover`,
          loop: !0,
          muted: !0,
          playsInline: !0,
          preload: `auto`,
          src: ge,
        }),
      })),
      (e[29] = B),
      (e[30] = V));
  let U;
  return (
    e[31] !== z || e[32] !== V
      ? ((U = (0, $.jsx)(m, {
          title: T,
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-[var(--padding-panel)]`,
            children: [
              D,
              (0, $.jsxs)(`div`, {
                className: `grid gap-[var(--padding-panel)] lg:grid-cols-2`,
                children: [z, V],
              }),
            ],
          }),
        })),
        (e[31] = z),
        (e[32] = V),
        (e[33] = U))
      : (U = e[33]),
    U
  );
}
function Te() {
  let e = (0, Q.c)(9),
    t = r(F),
    n = y(),
    i = x(E.soundEnabled),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(c, { ...Z.soundEffect })), (e[0] = a))
    : (a = e[0]);
  let o;
  e[1] === n
    ? (o = e[2])
    : ((o = n.formatMessage({
        id: `settings.appshots.soundEffect.ariaLabel`,
        defaultMessage: `Play appshot sound effect`,
        description: `Accessible label for the Appshots sound effect toggle`,
      })),
      (e[1] = n),
      (e[2] = o));
  let s;
  e[3] === t
    ? (s = e[4])
    : ((s = (e) => {
        j(t, E.soundEnabled, e);
      }),
      (e[3] = t),
      (e[4] = s));
  let l;
  return (
    e[5] !== i || e[6] !== o || e[7] !== s
      ? ((l = (0, $.jsx)(K, {
          label: a,
          control: (0, $.jsx)(b, { ariaLabel: o, checked: i, onChange: s }),
        })),
        (e[5] = i),
        (e[6] = o),
        (e[7] = s),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
var Q, $;
e(() => {
  ((Q = ie()),
    _(),
    a(),
    T(),
    re(),
    _e(),
    R(),
    M(),
    he(),
    n(),
    pe(),
    p(),
    oe(),
    se(),
    k(),
    C(),
    A(),
    D(),
    d(),
    I(),
    Se(),
    Ce(),
    ($ = U()));
})();
export { we as AppshotsSettings };
//# sourceMappingURL=appshots-settings-3d0ba53e7730.js.map
