import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  LNt as a,
  Ok as o,
  PBt as s,
  Qst as c,
  R6 as l,
  Rrt as u,
  Vrt as d,
  XOt as f,
  YOt as p,
  ZSt as m,
  ast as h,
  b2 as g,
  ck as _,
  ew as v,
  hit as y,
  iCt as b,
  ist as x,
  kk as S,
  lit as C,
  lk as w,
  oit as T,
  okt as E,
  qrt as D,
  rk as O,
  sct as k,
  sw as A,
  tk as ee,
  tkt as j,
  uk as M,
  uw as N,
  vst as P,
  vut as F,
  y2 as I,
  yst as L,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CBr as R,
  Cjr as z,
  FF as te,
  Hpr as B,
  LF as V,
  Ojr as H,
  QF as ne,
  RF as U,
  Upr as re,
  cA as W,
  cwt as G,
  eI as K,
  fwt as q,
  lwt as J,
  mwt as ie,
  pwt as ae,
  sA as oe,
  swt as se,
  uwt as ce,
  xBr as le,
  xMr as ue,
  xjr as de,
  yMr as fe,
} from "./app-initial-ad16eaadf81f.js";
import { K_ as pe, q_ as me } from "./app-primary-3e00728c2a4c.js";
var he;
function ge() {
  return (ge = e(() => {
    he = `` + new URL(`appshot-demo-dc57d9bd1938.mp4`, import.meta.url).href;
  }))();
}
function _e() {
  let e = (0, Y.c)(46),
    t = n(c),
    r = E(),
    i = b(ce),
    { platform: a } = re(),
    s = R(),
    [u, d] = (0, be.useState)(null),
    { data: f } = b(ae),
    p;
  e[0] !== s || e[1] !== t
    ? ((p = {
        mutationFn: ve,
        onSuccess: (e) => {
          (t.query.setData(ae, e.state), s(q));
        },
      }),
      (e[0] = s),
      (e[1] = t),
      (e[2] = p))
    : (p = e[2]);
  let m = L(p);
  if (!i || f?.supported === !1) return null;
  let h;
  e[3] !== t || e[4] !== m
    ? ((h = async function (e, n) {
        d(null);
        try {
          let r = await m.mutateAsync({ hotkey: e });
          if (!r.success) {
            d(r.error);
            return;
          }
          ue(t, l, { hotkey: e ?? void 0, enabled: e != null, source: n });
        } catch (e) {
          let t = e;
          d(t instanceof Error ? t.message : String(t));
        }
      }),
      (e[3] = t),
      (e[4] = m),
      (e[5] = h))
    : (h = e[5]);
  let g = h,
    _ = f?.configuredHotkey ?? null,
    v,
    y,
    x,
    S,
    C,
    w,
    T,
    D,
    k,
    M;
  if (e[6] !== g || e[7] !== _ || e[8] !== u || e[9] !== r || e[10] !== a || e[11] !== m.isPending) {
    let t =
        a === `windows`
          ? [
              { hotkey: `DoubleAlt`, label: r.formatMessage(Z.doubleAlt) },
              { hotkey: `DoubleShift`, label: r.formatMessage(Z.doubleShift) },
            ]
          : xe,
      n = t.find((e) => e.hotkey === _) ?? null,
      i = n?.label ?? (_ == null ? null : o(_)),
      s = n?.hotkey ?? null,
      c =
        s == null && u == null
          ? void 0
          : (0, X.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                s == null ? null : (0, X.jsx)(ye, { hotkey: s, isWindows: a === `windows` }),
                u ? (0, X.jsx)(`span`, { className: `text-danger`, children: u }) : null,
              ],
            });
    ((x = A),
      e[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((k = (0, X.jsx)(j, {
            id: `settings.appshotHotkey.label`,
            defaultMessage: `Hotkey`,
            description: `Label for appshot hotkey setting`,
          })),
          (e[22] = k))
        : (k = e[22]),
      (M = c),
      (y = ee),
      (C = `end`),
      (w = `icon`),
      (T = m.isPending),
      (D = (0, X.jsx)(te, {
        className: `w-max`,
        contentClassName: `flex-none`,
        disabled: m.isPending,
        children:
          i ??
          (0, X.jsx)(j, {
            id: `settings.appshotHotkey.none`,
            defaultMessage: `None`,
            description: `Label for disabling the appshot hotkey`,
          }),
      })),
      (v = O.Section),
      (S = t.map((e) =>
        (0, X.jsx)(
          O.Item,
          {
            rightIconAsset: e.hotkey === n?.hotkey ? I : void 0,
            onSelect: () => {
              (d(null), e.hotkey !== _ && g(e.hotkey, `capture`));
            },
            children: e.label,
          },
          e.hotkey,
        ),
      )),
      (e[6] = g),
      (e[7] = _),
      (e[8] = u),
      (e[9] = r),
      (e[10] = a),
      (e[11] = m.isPending),
      (e[12] = v),
      (e[13] = y),
      (e[14] = x),
      (e[15] = S),
      (e[16] = C),
      (e[17] = w),
      (e[18] = T),
      (e[19] = D),
      (e[20] = k),
      (e[21] = M));
  } else
    ((v = e[12]),
      (y = e[13]),
      (x = e[14]),
      (S = e[15]),
      (C = e[16]),
      (w = e[17]),
      (T = e[18]),
      (D = e[19]),
      (k = e[20]),
      (M = e[21]));
  let N = _ == null ? I : void 0,
    P;
  e[23] !== g || e[24] !== _
    ? ((P = () => {
        (d(null), _ != null && g(null, `disable`));
      }),
      (e[23] = g),
      (e[24] = _),
      (e[25] = P))
    : (P = e[25]);
  let F;
  e[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(j, {
        id: `settings.appshotHotkey.none`,
        defaultMessage: `None`,
        description: `Label for disabling the appshot hotkey`,
      })),
      (e[26] = F))
    : (F = e[26]);
  let z;
  e[27] !== P || e[28] !== N
    ? ((z = (0, X.jsx)(O.Item, { rightIconAsset: N, onSelect: P, children: F })),
      (e[27] = P),
      (e[28] = N),
      (e[29] = z))
    : (z = e[29]);
  let B;
  e[30] !== v || e[31] !== z || e[32] !== S
    ? ((B = (0, X.jsxs)(v, { children: [S, z] })), (e[30] = v), (e[31] = z), (e[32] = S), (e[33] = B))
    : (B = e[33]);
  let V;
  e[34] !== y || e[35] !== B || e[36] !== C || e[37] !== w || e[38] !== T || e[39] !== D
    ? ((V = (0, X.jsx)(y, { align: C, contentWidth: w, disabled: T, triggerButton: D, children: B })),
      (e[34] = y),
      (e[35] = B),
      (e[36] = C),
      (e[37] = w),
      (e[38] = T),
      (e[39] = D),
      (e[40] = V))
    : (V = e[40]);
  let H;
  return (
    e[41] !== x || e[42] !== V || e[43] !== k || e[44] !== M
      ? ((H = (0, X.jsx)(x, { label: k, description: M, control: V })),
        (e[41] = x),
        (e[42] = V),
        (e[43] = k),
        (e[44] = M),
        (e[45] = H))
      : (H = e[45]),
    H
  );
}
async function ve(e) {
  let { hotkey: t } = e,
    n = x.appshot;
  if (n == null) throw Error(`Appshot hotkeys are unavailable`);
  return n.setHotkey(t);
}
function ye(e) {
  let t = (0, Y.c)(5),
    { hotkey: n, isWindows: r } = e;
  switch (n) {
    case `DoubleCommand`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(j, {
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
          ? ((e = (0, X.jsx)(j, {
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
              ? (0, X.jsx)(j, {
                  id: `settings.appshotHotkey.description.windowsShift`,
                  defaultMessage: `Press both Shift keys simultaneously`,
                  description: `Description shown when the Windows appshot hotkey is both Shift keys`,
                })
              : (0, X.jsx)(j, {
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
          ? ((e = (0, X.jsx)(j, {
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
var Y, be, X, xe, Z;
function Se() {
  return (Se = e(() => {
    ((Y = s()),
      u(),
      g(),
      P(),
      m(),
      (be = i()),
      f(),
      J(),
      ie(),
      _(),
      B(),
      S(),
      fe(),
      le(),
      h(),
      r(),
      N(),
      U(),
      (X = a()),
      (xe = [
        { hotkey: `DoubleCommand`, label: `⌘ + ⌘` },
        { hotkey: `DoubleOption`, label: `⌥ + ⌥` },
        { hotkey: `DoubleShift`, label: `⇧ + ⇧` },
      ]),
      (Z = p({
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
var Q;
function Ce() {
  return (Ce = e(() => {
    (f(),
      (Q = p({
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
function we() {
  let e = (0, Ee.c)(41),
    r = n(c),
    i = E(),
    a = y(F.destination),
    o = y(F.alwaysSendToMini),
    s = b(ce),
    l = H(),
    u = z(`1532120159`),
    { isLoading: d, platform: f } = re(),
    p;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(j, {
        id: `settings.appshots.destination.automatic`,
        defaultMessage: `Automatic`,
        description: `Option label for choosing the chat that receives an Appshot automatically based on recent chat activity`,
      })),
      (e[0] = p))
    : (p = e[0]);
  let m;
  e[1] === u
    ? (m = e[2])
    : ((m = {
        id: `automatic`,
        label: p,
        description: u
          ? (0, $.jsx)(j, {
              id: `settings.appshots.destination.automatic.description.mini`,
              defaultMessage: `Uses the current chat if used recently, otherwise starts a new chat. In Mini, always starts a new chat`,
              description: `Explains automatic Appshot routing: outside Mini, the floating compact panel, reuse a recently active chat or create a new chat; in Mini, always create a new chat`,
            })
          : (0, $.jsx)(j, {
              id: `settings.appshots.destination.automatic.description`,
              defaultMessage: `Uses the current chat if used recently, otherwise starts a new chat`,
              description: `Explains automatic Appshot routing: reuse a recently active chat or create a new chat`,
            }),
      }),
      (e[1] = u),
      (e[2] = m));
  let h;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = {
        id: `last-chat`,
        label: (0, $.jsx)(j, {
          id: `settings.appshots.destination.lastChat`,
          defaultMessage: `Current chat`,
          description: `Option label for always sending an Appshot to the current chat`,
        }),
        description: (0, $.jsx)(j, {
          id: `settings.appshots.destination.lastChat.description`,
          defaultMessage: `Always use the current chat`,
          description: `Explains that captured Appshot content is always sent to the current chat`,
        }),
      }),
      (e[3] = h))
    : (h = e[3]);
  let g;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = {
        id: `new-chat`,
        label: (0, $.jsx)(j, {
          id: `settings.appshots.destination.newChat`,
          defaultMessage: `New chat`,
          description: `Option label for always creating a new chat to receive an Appshot`,
        }),
        description: (0, $.jsx)(j, {
          id: `settings.appshots.destination.newChat.description`,
          defaultMessage: `Always start a new chat`,
          description: `Explains that capturing an Appshot always creates a new chat for its content`,
        }),
      }),
      (e[4] = g))
    : (g = e[4]);
  let _;
  e[5] === m ? (_ = e[6]) : ((_ = [m, h, g]), (e[5] = m), (e[6] = _));
  let v = _,
    x;
  e[7] !== a || e[8] !== v
    ? ((x = v.find((e) => e.id === a) ?? v[0]), (e[7] = a), (e[8] = v), (e[9] = x))
    : (x = e[9]);
  let S = x;
  if (l || d || !s) return null;
  let T;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(V, { slug: `appshots` })), (e[10] = T))
    : (T = e[10]);
  let k;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, $.jsx)(pe, {
        description: (0, $.jsx)(j, {
          id: `settings.appshots.hero.description`,
          defaultMessage: `Appshots include visual and text content, including text scrolled offscreen`,
          description: `Description for the Appshots settings explainer`,
        }),
        leadingVisual: (0, $.jsx)(se, { className: `size-8 object-contain` }),
        title: (0, $.jsx)(j, { ...Q.capture }),
      })),
      (e[11] = k))
    : (k = e[11]);
  let M;
  e[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = (0, $.jsx)(_e, {})), (e[12] = M)) : (M = e[12]);
  let N, P;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(j, {
        id: `settings.appshots.destination.label`,
        defaultMessage: `Appshot destination`,
        description: `Label for choosing which Codex chat receives the window content captured by an Appshot`,
      })),
      (N = (0, $.jsx)(j, {
        id: `settings.appshots.destination.description`,
        defaultMessage: `Choose where appshots go when you use the hotkey`,
        description: `Explains that the global Appshot shortcut can send captured window content to the current chat or a new chat`,
      })),
      (e[13] = N),
      (e[14] = P))
    : ((N = e[13]), (P = e[14]));
  let L;
  e[15] === S.label
    ? (L = e[16])
    : ((L = (0, $.jsx)(te, { contentClassName: `truncate`, children: S.label })),
      (e[15] = S.label),
      (e[16] = L));
  let R;
  e[17] !== a || e[18] !== v || e[19] !== i || e[20] !== r
    ? ((R = v.map((e) =>
        (0, $.jsx)(
          O.Item,
          {
            rightIconAsset: e.id === a ? I : void 0,
            subTextAllowWrap: !0,
            onSelect: () => {
              C(r, F.destination, e.id).catch(() => {
                r.get(D).danger(
                  i.formatMessage({
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
      (e[17] = a),
      (e[18] = v),
      (e[19] = i),
      (e[20] = r),
      (e[21] = R))
    : (R = e[21]);
  let B;
  e[22] !== L || e[23] !== R
    ? ((B = (0, $.jsx)(A, {
        label: P,
        description: N,
        control: (0, $.jsx)(ee, { align: `end`, contentWidth: `panelWide`, triggerButton: L, children: R }),
      })),
      (e[22] = L),
      (e[23] = R),
      (e[24] = B))
    : (B = e[24]);
  let U;
  e[25] !== o || e[26] !== u || e[27] !== f || e[28] !== r
    ? ((U =
        u && f === `macOS`
          ? (0, $.jsx)(A, {
              label: (0, $.jsx)(j, {
                id: `settings.appshots.alwaysSendToMini.label`,
                defaultMessage: `Use Mini when visible`,
                description: `Label for a toggle that sends Appshots to Mini, the floating compact panel, whenever it is visible`,
              }),
              description: (0, $.jsx)(j, {
                id: `settings.appshots.alwaysSendToMini.description`,
                defaultMessage: `When Mini isn’t visible, Appshots use your chosen destination`,
                description: `Explains that Appshots use the selected destination when Mini, the floating compact panel, is not visible`,
              }),
              control: (e) =>
                (0, $.jsx)(w, {
                  ...e,
                  checked: o,
                  onChange: (e) => {
                    C(r, F.alwaysSendToMini, e);
                  },
                }),
            })
          : null),
      (e[25] = o),
      (e[26] = u),
      (e[27] = f),
      (e[28] = r),
      (e[29] = U))
    : (U = e[29]);
  let W;
  e[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((W = (0, $.jsx)(Te, {})), (e[30] = W)) : (W = e[30]);
  let G;
  e[31] !== B || e[32] !== U
    ? ((G = (0, $.jsx)(oe, {
        className: `self-start`,
        children: (0, $.jsx)(oe.Content, { children: (0, $.jsxs)(t, { children: [M, B, U, W] }) }),
      })),
      (e[31] = B),
      (e[32] = U),
      (e[33] = G))
    : (G = e[33]);
  let K;
  e[34] === i
    ? (K = e[35])
    : ((K = i.formatMessage({
        id: `settings.appshots.demoVideo.label`,
        defaultMessage: `Appshots walkthrough video`,
        description: `Accessible label for the Appshots settings walkthrough video`,
      })),
      (e[34] = i),
      (e[35] = K));
  let q;
  e[36] === K
    ? (q = e[37])
    : ((q = (0, $.jsx)(t, {
        className: `w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch`,
        children: (0, $.jsx)(`video`, {
          "aria-label": K,
          autoPlay: !0,
          className: `aspect-[901/1095] w-full bg-surface-secondary/92 object-cover`,
          loop: !0,
          muted: !0,
          playsInline: !0,
          preload: `auto`,
          src: he,
        }),
      })),
      (e[36] = K),
      (e[37] = q));
  let J;
  return (
    e[38] !== G || e[39] !== q
      ? ((J = (0, $.jsx)(ne, {
          title: T,
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-[var(--padding-panel)]`,
            children: [
              k,
              (0, $.jsxs)(`div`, {
                className: `grid gap-[var(--padding-panel)] lg:grid-cols-2`,
                children: [G, q],
              }),
            ],
          }),
        })),
        (e[38] = G),
        (e[39] = q),
        (e[40] = J))
      : (J = e[40]),
    J
  );
}
function Te() {
  let e = (0, Ee.c)(9),
    t = n(c),
    r = E(),
    i = y(F.soundEnabled),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(j, { ...Q.soundEffect })), (e[0] = a))
    : (a = e[0]);
  let o;
  e[1] === r
    ? (o = e[2])
    : ((o = r.formatMessage({
        id: `settings.appshots.soundEffect.ariaLabel`,
        defaultMessage: `Play appshot sound effect`,
        description: `Accessible label for the Appshots sound effect toggle`,
      })),
      (e[1] = r),
      (e[2] = o));
  let s;
  e[3] === t
    ? (s = e[4])
    : ((s = (e) => {
        C(t, F.soundEnabled, e);
      }),
      (e[3] = t),
      (e[4] = s));
  let l;
  return (
    e[5] !== i || e[6] !== o || e[7] !== s
      ? ((l = (0, $.jsx)(A, { label: a, control: (0, $.jsx)(w, { ariaLabel: o, checked: i, onChange: s }) })),
        (e[5] = i),
        (e[6] = o),
        (e[7] = s),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
var Ee, $;
function De() {
  return (De = e(() => {
    ((Ee = s()),
      g(),
      m(),
      k(),
      f(),
      J(),
      G(),
      ge(),
      _(),
      me(),
      d(),
      M(),
      B(),
      r(),
      T(),
      K(),
      W(),
      N(),
      U(),
      v(),
      de(),
      Se(),
      Ce(),
      ($ = a()));
  }))();
}
De();
export { we as AppshotsSettings };
//# sourceMappingURL=appshots-settings-6fbff775d148.js.map
