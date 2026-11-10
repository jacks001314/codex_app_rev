import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $nt as t,
  ADt as n,
  AO as r,
  CO as i,
  Cot as a,
  H3 as o,
  IDt as s,
  Iot as c,
  Ixt as l,
  JC as u,
  Kat as d,
  Lot as f,
  MO as p,
  Pxt as m,
  Rnt as h,
  TO as g,
  VDt as _,
  Vxt as v,
  Wnt as y,
  XO as b,
  ZO as x,
  b0 as S,
  hot as C,
  iw as w,
  jDt as T,
  jO as E,
  lot as D,
  mlt as O,
  qC as k,
  qat as A,
  qnt as j,
  rst as M,
  tw as N,
  vzt as P,
  wot as F,
  xMt as I,
  y0 as L,
  yzt as R,
} from "./app-shared-bbfeca5e5737.js";
import {
  $lr as z,
  BPr as B,
  CDt as ee,
  DDt as V,
  EDt as H,
  Ek as U,
  HPr as W,
  QDr as G,
  QP as te,
  SDt as K,
  TDt as ne,
  Tk as re,
  XDr as ie,
  _F as ae,
  bDt as oe,
  eDr as se,
  eF as ce,
  eur as le,
  hF as ue,
  nDr as de,
  sDr as fe,
  tF as pe,
  xDt as me,
} from "./app-initial-5851df3f6cb1.js";
import { O_ as he, k_ as ge } from "./app-primary-fe8a450b3b04.js";
var _e;
function ve() {
  return (ve = e(() => {
    _e = `` + new URL(`appshot-demo-dc57d9bd1938.mp4`, import.meta.url).href;
  }))();
}
function ye() {
  let e = (0, q.c)(46),
    t = l(a),
    n = _(),
    r = v(ee),
    { platform: c } = le(),
    u = W(),
    [d, p] = (0, J.useState)(null),
    { data: m } = v(H),
    h;
  e[0] !== u || e[1] !== t
    ? ((h = {
        mutationFn: be,
        onSuccess: (e) => {
          (t.query.setData(H, e.state), u(ne));
        },
      }),
      (e[0] = u),
      (e[1] = t),
      (e[2] = h))
    : (h = e[2]);
  let y = f(h);
  if (!r || m?.supported === !1) return null;
  let x;
  e[3] !== t || e[4] !== y
    ? ((x = async function (e, n) {
        p(null);
        try {
          let r = await y.mutateAsync({ hotkey: e });
          if (!r.success) {
            p(r.error);
            return;
          }
          G(t, o, { hotkey: e ?? void 0, enabled: e != null, source: n });
        } catch (e) {
          let t = e;
          p(t instanceof Error ? t.message : String(t));
        }
      }),
      (e[3] = t),
      (e[4] = y),
      (e[5] = x))
    : (x = e[5]);
  let S = x,
    C = m?.configuredHotkey ?? null,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    P;
  if (e[6] !== S || e[7] !== C || e[8] !== d || e[9] !== n || e[10] !== c || e[11] !== y.isPending) {
    let t =
        c === `windows`
          ? [
              { hotkey: `DoubleAlt`, label: n.formatMessage(X.doubleAlt) },
              { hotkey: `DoubleShift`, label: n.formatMessage(X.doubleShift) },
            ]
          : Se,
      r = t.find((e) => e.hotkey === C) ?? null,
      a = r?.label ?? (C == null ? null : b(C)),
      o = r?.hotkey ?? null,
      l =
        o == null && d == null
          ? void 0
          : (0, Y.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                o == null ? null : (0, Y.jsx)(xe, { hotkey: o, isWindows: c === `windows` }),
                d ? (0, Y.jsx)(`span`, { className: `text-danger`, children: d }) : null,
              ],
            });
    ((E = N),
      e[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((M = (0, Y.jsx)(s, {
            id: `settings.appshotHotkey.label`,
            defaultMessage: `Hotkey`,
            description: `Label for appshot hotkey setting`,
          })),
          (e[22] = M))
        : (M = e[22]),
      (P = l),
      (T = i),
      (O = `end`),
      (k = `icon`),
      (A = y.isPending),
      (j = (0, Y.jsx)(te, {
        className: `w-max`,
        contentClassName: `flex-none`,
        disabled: y.isPending,
        children:
          a ??
          (0, Y.jsx)(s, {
            id: `settings.appshotHotkey.none`,
            defaultMessage: `None`,
            description: `Label for disabling the appshot hotkey`,
          }),
      })),
      (w = g.Section),
      (D = t.map((e) =>
        (0, Y.jsx)(
          g.Item,
          {
            rightIconAsset: e.hotkey === r?.hotkey ? L : void 0,
            onSelect: () => {
              (p(null), e.hotkey !== C && S(e.hotkey, `capture`));
            },
            children: e.label,
          },
          e.hotkey,
        ),
      )),
      (e[6] = S),
      (e[7] = C),
      (e[8] = d),
      (e[9] = n),
      (e[10] = c),
      (e[11] = y.isPending),
      (e[12] = w),
      (e[13] = T),
      (e[14] = E),
      (e[15] = D),
      (e[16] = O),
      (e[17] = k),
      (e[18] = A),
      (e[19] = j),
      (e[20] = M),
      (e[21] = P));
  } else
    ((w = e[12]),
      (T = e[13]),
      (E = e[14]),
      (D = e[15]),
      (O = e[16]),
      (k = e[17]),
      (A = e[18]),
      (j = e[19]),
      (M = e[20]),
      (P = e[21]));
  let F = C == null ? L : void 0,
    I;
  e[23] !== S || e[24] !== C
    ? ((I = () => {
        (p(null), C != null && S(null, `disable`));
      }),
      (e[23] = S),
      (e[24] = C),
      (e[25] = I))
    : (I = e[25]);
  let R;
  e[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Y.jsx)(s, {
        id: `settings.appshotHotkey.none`,
        defaultMessage: `None`,
        description: `Label for disabling the appshot hotkey`,
      })),
      (e[26] = R))
    : (R = e[26]);
  let z;
  e[27] !== I || e[28] !== F
    ? ((z = (0, Y.jsx)(g.Item, { rightIconAsset: F, onSelect: I, children: R })),
      (e[27] = I),
      (e[28] = F),
      (e[29] = z))
    : (z = e[29]);
  let B;
  e[30] !== w || e[31] !== z || e[32] !== D
    ? ((B = (0, Y.jsxs)(w, { children: [D, z] })), (e[30] = w), (e[31] = z), (e[32] = D), (e[33] = B))
    : (B = e[33]);
  let V;
  e[34] !== T || e[35] !== B || e[36] !== O || e[37] !== k || e[38] !== A || e[39] !== j
    ? ((V = (0, Y.jsx)(T, { align: O, contentWidth: k, disabled: A, triggerButton: j, children: B })),
      (e[34] = T),
      (e[35] = B),
      (e[36] = O),
      (e[37] = k),
      (e[38] = A),
      (e[39] = j),
      (e[40] = V))
    : (V = e[40]);
  let U;
  return (
    e[41] !== E || e[42] !== V || e[43] !== M || e[44] !== P
      ? ((U = (0, Y.jsx)(E, { label: M, description: P, control: V })),
        (e[41] = E),
        (e[42] = V),
        (e[43] = M),
        (e[44] = P),
        (e[45] = U))
      : (U = e[45]),
    U
  );
}
async function be(e) {
  let { hotkey: t } = e,
    n = d.appshot;
  if (n == null) throw Error(`Appshot hotkeys are unavailable`);
  return n.setHotkey(t);
}
function xe(e) {
  let t = (0, q.c)(5),
    { hotkey: n, isWindows: r } = e;
  switch (n) {
    case `DoubleCommand`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
              ? (0, Y.jsx)(s, {
                  id: `settings.appshotHotkey.description.windowsShift`,
                  defaultMessage: `Press both Shift keys simultaneously`,
                  description: `Description shown when the Windows appshot hotkey is both Shift keys`,
                })
              : (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
var q, J, Y, Se, X;
function Ce() {
  return (Ce = e(() => {
    ((q = P()),
      h(),
      S(),
      c(),
      m(),
      (J = R()),
      T(),
      K(),
      V(),
      r(),
      z(),
      x(),
      ie(),
      B(),
      A(),
      F(),
      w(),
      pe(),
      (Y = I()),
      (Se = [
        { hotkey: `DoubleCommand`, label: `⌘ + ⌘` },
        { hotkey: `DoubleOption`, label: `⌥ + ⌥` },
        { hotkey: `DoubleShift`, label: `⇧ + ⇧` },
      ]),
      (X = n({
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
function we() {
  return (we = e(() => {
    (T(),
      (Z = n({
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
function Te() {
  let e = (0, Q.c)(41),
    n = l(a),
    r = _(),
    o = t(O.destination),
    c = t(O.alwaysSendToMini),
    u = v(ee),
    d = fe(),
    f = de(`1532120159`),
    { isLoading: p, platform: m } = le(),
    h;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(s, {
        id: `settings.appshots.destination.automatic`,
        defaultMessage: `Automatic`,
        description: `Option label for choosing the chat that receives an Appshot automatically based on recent chat activity`,
      })),
      (e[0] = h))
    : (h = e[0]);
  let y;
  e[1] === f
    ? (y = e[2])
    : ((y = {
        id: `automatic`,
        label: h,
        description: f
          ? (0, $.jsx)(s, {
              id: `settings.appshots.destination.automatic.description.mini`,
              defaultMessage: `Uses the current chat if used recently, otherwise starts a new chat. In Mini, always starts a new chat`,
              description: `Explains automatic Appshot routing: outside Mini, the floating compact panel, reuse a recently active chat or create a new chat; in Mini, always create a new chat`,
            })
          : (0, $.jsx)(s, {
              id: `settings.appshots.destination.automatic.description`,
              defaultMessage: `Uses the current chat if used recently, otherwise starts a new chat`,
              description: `Explains automatic Appshot routing: reuse a recently active chat or create a new chat`,
            }),
      }),
      (e[1] = f),
      (e[2] = y));
  let b;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = {
        id: `last-chat`,
        label: (0, $.jsx)(s, {
          id: `settings.appshots.destination.lastChat`,
          defaultMessage: `Current chat`,
          description: `Option label for always sending an Appshot to the current chat`,
        }),
        description: (0, $.jsx)(s, {
          id: `settings.appshots.destination.lastChat.description`,
          defaultMessage: `Always use the current chat`,
          description: `Explains that captured Appshot content is always sent to the current chat`,
        }),
      }),
      (e[3] = b))
    : (b = e[3]);
  let x;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = {
        id: `new-chat`,
        label: (0, $.jsx)(s, {
          id: `settings.appshots.destination.newChat`,
          defaultMessage: `New chat`,
          description: `Option label for always creating a new chat to receive an Appshot`,
        }),
        description: (0, $.jsx)(s, {
          id: `settings.appshots.destination.newChat.description`,
          defaultMessage: `Always start a new chat`,
          description: `Explains that capturing an Appshot always creates a new chat for its content`,
        }),
      }),
      (e[4] = x))
    : (x = e[4]);
  let S;
  e[5] === y ? (S = e[6]) : ((S = [y, b, x]), (e[5] = y), (e[6] = S));
  let w = S,
    T;
  e[7] !== o || e[8] !== w
    ? ((T = w.find((e) => e.id === o) ?? w[0]), (e[7] = o), (e[8] = w), (e[9] = T))
    : (T = e[9]);
  let D = T;
  if (d || p || !u) return null;
  let A;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(ce, { slug: `appshots` })), (e[10] = A))
    : (A = e[10]);
  let M;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(he, {
        description: (0, $.jsx)(s, {
          id: `settings.appshots.hero.description`,
          defaultMessage: `Appshots include visual and text content, including text scrolled offscreen`,
          description: `Description for the Appshots settings explainer`,
        }),
        leadingVisual: (0, $.jsx)(oe, { className: `size-8 object-contain` }),
        title: (0, $.jsx)(s, { ...Z.capture }),
      })),
      (e[11] = M))
    : (M = e[11]);
  let P;
  e[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((P = (0, $.jsx)(ye, {})), (e[12] = P)) : (P = e[12]);
  let F, I;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(s, {
        id: `settings.appshots.destination.label`,
        defaultMessage: `Appshot destination`,
        description: `Label for choosing which Codex chat receives the window content captured by an Appshot`,
      })),
      (F = (0, $.jsx)(s, {
        id: `settings.appshots.destination.description`,
        defaultMessage: `Choose where appshots go when you use the hotkey`,
        description: `Explains that the global Appshot shortcut can send captured window content to the current chat or a new chat`,
      })),
      (e[13] = F),
      (e[14] = I))
    : ((F = e[13]), (I = e[14]));
  let R;
  e[15] === D.label
    ? (R = e[16])
    : ((R = (0, $.jsx)(te, { contentClassName: `truncate`, children: D.label })),
      (e[15] = D.label),
      (e[16] = R));
  let z;
  e[17] !== o || e[18] !== w || e[19] !== r || e[20] !== n
    ? ((z = w.map((e) =>
        (0, $.jsx)(
          g.Item,
          {
            rightIconAsset: e.id === o ? L : void 0,
            subTextAllowWrap: !0,
            onSelect: () => {
              j(n, O.destination, e.id).catch(() => {
                n.get(C).danger(
                  r.formatMessage({
                    id: `settings.appshots.destination.saveError`,
                    defaultMessage: `Could not save Appshot destination`,
                    description: `Error toast when the selected chat destination for Appshots cannot be saved`,
                  }),
                  { errorAnalytics: { toastId: `appshotsSettings.destination.saveError` } },
                );
              });
            },
            SubText: (0, $.jsx)(`div`, { className: `pt-1 text-sm text-secondary`, children: e.description }),
            children: (0, $.jsx)(`span`, { className: `text-sm`, children: e.label }),
          },
          e.id,
        ),
      )),
      (e[17] = o),
      (e[18] = w),
      (e[19] = r),
      (e[20] = n),
      (e[21] = z))
    : (z = e[21]);
  let B;
  e[22] !== R || e[23] !== z
    ? ((B = (0, $.jsx)(N, {
        label: I,
        description: F,
        control: (0, $.jsx)(i, { align: `end`, contentWidth: `panelWide`, triggerButton: R, children: z }),
      })),
      (e[22] = R),
      (e[23] = z),
      (e[24] = B))
    : (B = e[24]);
  let V;
  e[25] !== c || e[26] !== f || e[27] !== m || e[28] !== n
    ? ((V =
        f && m === `macOS`
          ? (0, $.jsx)(N, {
              label: (0, $.jsx)(s, {
                id: `settings.appshots.alwaysSendToMini.label`,
                defaultMessage: `Use Mini when visible`,
                description: `Label for a toggle that sends Appshots to Mini, the floating compact panel, whenever it is visible`,
              }),
              description: (0, $.jsx)(s, {
                id: `settings.appshots.alwaysSendToMini.description`,
                defaultMessage: `When Mini isn’t visible, Appshots use your chosen destination`,
                description: `Explains that Appshots use the selected destination when Mini, the floating compact panel, is not visible`,
              }),
              control: (e) =>
                (0, $.jsx)(E, {
                  ...e,
                  checked: c,
                  onChange: (e) => {
                    j(n, O.alwaysSendToMini, e);
                  },
                }),
            })
          : null),
      (e[25] = c),
      (e[26] = f),
      (e[27] = m),
      (e[28] = n),
      (e[29] = V))
    : (V = e[29]);
  let H;
  e[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((H = (0, $.jsx)(Ee, {})), (e[30] = H)) : (H = e[30]);
  let U;
  e[31] !== B || e[32] !== V
    ? ((U = (0, $.jsx)(re, {
        className: `self-start`,
        children: (0, $.jsx)(re.Content, { children: (0, $.jsxs)(k, { children: [P, B, V, H] }) }),
      })),
      (e[31] = B),
      (e[32] = V),
      (e[33] = U))
    : (U = e[33]);
  let W;
  e[34] === r
    ? (W = e[35])
    : ((W = r.formatMessage({
        id: `settings.appshots.demoVideo.label`,
        defaultMessage: `Appshots walkthrough video`,
        description: `Accessible label for the Appshots settings walkthrough video`,
      })),
      (e[34] = r),
      (e[35] = W));
  let G;
  e[36] === W
    ? (G = e[37])
    : ((G = (0, $.jsx)(k, {
        className: `w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch`,
        children: (0, $.jsx)(`video`, {
          "aria-label": W,
          autoPlay: !0,
          className: `aspect-[901/1095] w-full bg-surface-secondary/92 object-cover`,
          loop: !0,
          muted: !0,
          playsInline: !0,
          preload: `auto`,
          src: _e,
        }),
      })),
      (e[36] = W),
      (e[37] = G));
  let K;
  return (
    e[38] !== U || e[39] !== G
      ? ((K = (0, $.jsx)(ue, {
          title: A,
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-[var(--padding-panel)]`,
            children: [
              M,
              (0, $.jsxs)(`div`, {
                className: `grid gap-[var(--padding-panel)] lg:grid-cols-2`,
                children: [U, G],
              }),
            ],
          }),
        })),
        (e[38] = U),
        (e[39] = G),
        (e[40] = K))
      : (K = e[40]),
    K
  );
}
function Ee() {
  let e = (0, Q.c)(9),
    n = l(a),
    r = _(),
    i = t(O.soundEnabled),
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(s, { ...Z.soundEffect })), (e[0] = o))
    : (o = e[0]);
  let c;
  e[1] === r
    ? (c = e[2])
    : ((c = r.formatMessage({
        id: `settings.appshots.soundEffect.ariaLabel`,
        defaultMessage: `Play appshot sound effect`,
        description: `Accessible label for the Appshots sound effect toggle`,
      })),
      (e[1] = r),
      (e[2] = c));
  let u;
  e[3] === n
    ? (u = e[4])
    : ((u = (e) => {
        j(n, O.soundEnabled, e);
      }),
      (e[3] = n),
      (e[4] = u));
  let d;
  return (
    e[5] !== i || e[6] !== c || e[7] !== u
      ? ((d = (0, $.jsx)(N, { label: o, control: (0, $.jsx)(E, { ariaLabel: c, checked: i, onChange: u }) })),
        (e[5] = i),
        (e[6] = c),
        (e[7] = u),
        (e[8] = d))
      : (d = e[8]),
    d
  );
}
var Q, $;
function De() {
  return (De = e(() => {
    ((Q = P()),
      S(),
      m(),
      M(),
      T(),
      K(),
      me(),
      ve(),
      r(),
      ge(),
      D(),
      p(),
      z(),
      F(),
      y(),
      ae(),
      U(),
      w(),
      pe(),
      u(),
      se(),
      Ce(),
      we(),
      ($ = I()));
  }))();
}
De();
export { Te as AppshotsSettings };
//# sourceMappingURL=appshots-settings-39e061aa1405.js.map
