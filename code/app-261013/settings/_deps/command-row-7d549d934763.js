import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $O as n,
  ADt as r,
  IDt as i,
  MO as a,
  Pxt as o,
  TJ as s,
  VDt as c,
  Vxt as l,
  XO as u,
  ZO as d,
  _Mt as f,
  cz as p,
  ek as m,
  gMt as h,
  iw as ee,
  jDt as g,
  jO as te,
  sJ as ne,
  sz as re,
  t3 as _,
  tw as v,
  vzt as y,
  xMt as b,
  yzt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  $lr as S,
  CSn as C,
  DPn as w,
  DSn as T,
  FSn as E,
  ISn as D,
  NSn as O,
  TPn as ie,
  VSn as k,
  _Sn as A,
  bWt as j,
  dSn as M,
  eDr as N,
  eur as ae,
  fSn as oe,
  gSn as se,
  i1n as ce,
  n1n as le,
  nDr as ue,
  o1n as de,
  r1n as P,
  rer as fe,
  rur as F,
  ter as I,
  tur as pe,
  uSn as me,
  vSn as L,
  wSn as he,
  xWt as ge,
} from "./app-initial-5851df3f6cb1.js";
import { d_ as R, f_ as _e, h_ as z, m_ as ve, p_ as B, u_ as ye } from "./app-primary-fe8a450b3b04.js";
import { r as V, t as H } from "./command-messages-54cbbed1e112.js";
function U(e) {
  let n = (0, Oe.c)(58),
    {
      command: r,
      presentation: a,
      description: o,
      inline: s,
      isPending: d,
      keymapState: f,
      title: p,
      onBlur: m,
      onFocus: ee,
      onUpdate: g,
    } = e,
    _ = a === void 0 ? `codex` : a,
    y = s !== void 0 && s,
    b = c(),
    x = r.id === `globalDictationHold` || r.id === `globalDictationSingleTap`,
    S = (0, W.useId)(),
    C = (0, W.useId)(),
    w = (0, W.useId)(),
    T;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = new Map()), (n[0] = T)) : (T = n[0]);
  let D = (0, W.useRef)(T),
    k = (0, W.useRef)(null),
    { platform: j } = ae(),
    M = pe[j],
    N;
  n[1] !== r || n[2] !== M ? ((N = E(r, M)), (n[1] = r), (n[2] = M), (n[3] = N)) : (N = n[3]);
  let oe = N,
    se = l(de),
    ce = l(fe),
    le = ue(`1532120159`),
    [P, F] = (0, W.useState)(null),
    [I, L] = (0, W.useState)(null),
    R;
  n[4] !== b || n[5] !== g
    ? ((R = async function (e) {
        L(null);
        try {
          return (await g(e), !0);
        } catch (e) {
          let t = e;
          return (
            L(
              t instanceof Error
                ? t.message
                : b.formatMessage({
                    id: `settings.keyboardShortcuts.updateError`,
                    defaultMessage: `Failed to update shortcut`,
                    description: `Fallback error shown when updating an action shortcut fails`,
                  }),
            ),
            !1
          );
        }
      }),
      (n[4] = b),
      (n[5] = g),
      (n[6] = R))
    : (R = n[6]);
  let z = R,
    B = me(r.id, f, j, _),
    V =
      r.id === `toggleSidebar` && B.some((e) => ge(e.accelerator, `CmdOrCtrl+B`, j === `macOS`))
        ? (0, G.jsx)(`span`, {
            className: `block`,
            children: (0, G.jsx)(i, {
              id: `settings.keyboardShortcuts.sidebarBoldHintWithShortcut`,
              defaultMessage: `{shortcut} applies bold, except at the start of the composer where it toggles the sidebar`,
              description: `Explains that the secondary sidebar shortcut toggles the sidebar only with an unselected cursor at the beginning of the composer, and otherwise yields to rich-text bold formatting`,
              values: { shortcut: u(`CmdOrCtrl+B`, j === `macOS`) },
            }),
          })
        : null,
    H = _ === `chatgpt` && r.id === `composer.submit`,
    U;
  n[7] === r.id ? (U = n[8]) : ((U = (e) => e.command === r.id), (n[7] = r.id), (n[8] = U));
  let Ee = f.bindings.some(U),
    K = Ee && !(H && A(B.map(Ce))) && (r.id !== `searchChats` || B.length > 0),
    Ae = De({ commandId: r.id, hasCustomBinding: K, keymapState: f, platform: j, shortcutEntries: B }),
    je = P?.mode === `append`,
    Me = B.length === 0 ? [null] : B,
    Ne = je && B.length > 0 ? [...B, null] : Me,
    q,
    J;
  (n[9] === P
    ? ((q = n[10]), (J = n[11]))
    : ((q = () => {
        if (P != null || k.current == null) return;
        let { accelerator: e } = k.current;
        ((k.current = null), (D.current.get(e) ?? D.current.values().next().value)?.focus());
      }),
      (J = [P]),
      (n[9] = P),
      (n[10] = q),
      (n[11] = J)),
    (0, W.useLayoutEffect)(q, J));
  let Y = function (e) {
      (e || (k.current = null), F(null));
    },
    Pe = function (e, t) {
      if ((L(null), r.id === `browser.toggleAnnotationMode` && !O({ command: r.id, key: e }))) {
        (F(Se),
          L(
            b.formatMessage({
              id: `settings.keyboardShortcuts.annotationModeUnsupportedShortcut`,
              defaultMessage: `Use a single key combination with Command, Control, or Alt/Option, or a function key`,
              description: `Error when an annotation mode shortcut uses a typing key without a modifier or a sequence of key combinations; function keys F1 through F24 are also supported`,
            }),
          ));
        return;
      }
      let n = H && e === `Enter` && B.length <= 1;
      if (!n && t != null && Te(t.accelerator, e, j === `macOS`)) {
        Y(_ === `chatgpt`);
        return;
      }
      let i = we({
        accelerator: e,
        commandId: r.id,
        intl: b,
        isUnifiedTabStripEnabled: ce,
        keymapState: f,
        platform: j,
        presentation: _,
        registeredCommands: se,
        useMiniLanguage: le,
      });
      if (i != null) {
        F((e) => (e == null ? e : { ...e, conflictingCommandTitle: i }));
        return;
      }
      let a;
      a = n
        ? { type: `reset` }
        : P?.mode === `append`
          ? { type: `append`, accelerator: e }
          : t == null || (H && !Ee)
            ? { type: `set`, accelerator: e }
            : { type: `replace`, previousAccelerator: t.accelerator, accelerator: e };
      let o = P == null ? null : { ...P, conflictingCommandTitle: null };
      (F(o),
        z(a).then((t) => {
          if (_ === `chatgpt`) {
            if (!t) return;
            k.current != null && (k.current = { accelerator: e });
          }
          F((e) => (e === o ? null : e));
        }));
    };
  if (_ === `chatgpt`) {
    let e;
    if (n[12] !== r.id || n[13] !== f.bindings) {
      let t;
      (n[15] === r.id
        ? (t = n[16])
        : ((t = (e) => e.command === r.id && e.key == null), (n[15] = r.id), (n[16] = t)),
        (e = f.bindings.some(t)),
        (n[12] = r.id),
        (n[13] = f.bindings),
        (n[14] = e));
    } else e = n[14];
    let a = e,
      o = a && !y ? me(r.id, { ...f, bindings: [] }, j, _) : B,
      s = o.length === 0 ? [null] : o,
      c = P?.conflictingCommandTitle,
      l;
    n[17] !== c || n[18] !== I
      ? ((l = c == null ? I : (0, G.jsx)(i, { ...ke.conflict, values: { shortcut: c } })),
        (n[17] = c),
        (n[18] = I),
        (n[19] = l))
      : (l = n[19]);
    let u = l,
      h;
    n[20] !== b || n[21] !== p
      ? ((h = b.formatMessage(
          {
            id: `settings.keyboardShortcuts.changeSequence`,
            defaultMessage: `Change shortcut for {shortcut}`,
            description: `Accessible label on a keyboard shortcut button; shortcut is the name of the action whose key combination will be edited`,
          },
          { shortcut: p },
        )),
        (n[20] = b),
        (n[21] = p),
        (n[22] = h))
      : (h = n[22]);
    let g = h,
      v;
    n[23] !== b || n[24] !== p
      ? ((v = b.formatMessage(
          {
            id: `settings.hotkeySetter.clearAriaLabel`,
            defaultMessage: `Clear shortcut for {hotkeyName}`,
            description: `Aria label for clearing a settings hotkey`,
          },
          { hotkeyName: p },
        )),
        (n[23] = b),
        (n[24] = p),
        (n[25] = v))
      : (v = n[25]);
    let x = v,
      T = (0, G.jsxs)(`span`, {
        className: `inline-flex max-w-full shrink-0 flex-wrap items-center justify-end gap-1`,
        children: [
          s.map((e) => {
            let n = e?.accelerator ?? null;
            return P != null && P.accelerator === n
              ? (0, G.jsx)(
                  `span`,
                  {
                    className: y ? `w-36 max-w-full` : `w-40 max-w-full`,
                    children: (0, G.jsx)(_e, {
                      allowsBareModifiers: !1,
                      onCapture: (t) => Pe(t, e),
                      onCancel: () => Y(!0),
                      children: () =>
                        (0, G.jsx)(ie, {
                          variant: y ? `compact` : `transparent`,
                          "data-codex-shortcut-capture": !0,
                          autoFocus: !0,
                          readOnly: !0,
                          "aria-busy": d,
                          "aria-describedby": u == null ? void 0 : w,
                          "aria-invalid": u != null || void 0,
                          "aria-label": b.formatMessage({
                            id: `settings.keyboardShortcuts.editorLabel`,
                            defaultMessage: `Press the new key sequence`,
                            description: `Accessible label for the input capturing a replacement key combination in ChatGPT keyboard shortcut settings`,
                          }),
                          name: `keyboard-shortcut-capture`,
                          placeholder: b.formatMessage({
                            id: `settings.keyboardShortcuts.editorPlaceholder`,
                            defaultMessage: `Press key sequence`,
                            description: `Placeholder in the keyboard shortcut capture input, prompting the user to press their new key combination`,
                          }),
                          value: ``,
                          onBlur: () => Y(!1),
                          onKeyDown: (t) => {
                            if ((t.preventDefault(), t.stopPropagation(), t.repeat)) return;
                            if (t.key === `Escape` && !t.altKey && !t.ctrlKey && !t.metaKey && !t.shiftKey) {
                              Y(!0);
                              return;
                            }
                            if (d) return;
                            let n = ve(t.nativeEvent);
                            n != null && Pe(n, e);
                          },
                        }),
                    }),
                  },
                  n ?? `unassigned`,
                )
              : (0, G.jsx)(
                  re,
                  {
                    tooltipContent: y ? g : null,
                    children: (0, G.jsx)(t, {
                      ref: (e) => {
                        e == null ? D.current.delete(n) : D.current.set(n, e);
                      },
                      "aria-label": g,
                      color: y ? `secondary` : `ghostSecondary`,
                      disabled: (!y && a) || d,
                      radius: `full`,
                      size: y ? `default` : `toolbar`,
                      onClick: () => {
                        (L(null),
                          (k.current = { accelerator: n }),
                          F({
                            accelerator: n,
                            conflictingCommandTitle: null,
                            mode: e == null ? `set` : `replace`,
                          }));
                      },
                      children:
                        e?.label ??
                        (0, G.jsx)(i, {
                          id: `settings.keyboardShortcuts.none`,
                          defaultMessage: `none`,
                          description: `Placeholder key combination shown when a keyboard shortcut action has no binding`,
                        }),
                    }),
                  },
                  n ?? `unassigned`,
                );
          }),
          y &&
            P != null &&
            B.length > 0 &&
            (0, G.jsx)(re, {
              tooltipContent: x,
              children: (0, G.jsx)(t, {
                "aria-label": x,
                color: `ghost`,
                disabled: d,
                size: `default`,
                uniform: !0,
                onMouseDown: xe,
                onClick: () => {
                  z({ type: `clear` }).then((e) => {
                    e && Y(!0);
                  });
                },
                children: (0, G.jsx)(ne, {}),
              }),
            }),
          y &&
            P != null &&
            (0, G.jsx)(t, {
              color: `ghost`,
              disabled: d,
              size: `default`,
              onMouseDown: be,
              onClick: () => Y(!0),
              children: (0, G.jsx)(i, {
                id: `settings.hotkeySetter.cancel`,
                defaultMessage: `Cancel`,
                description: `Button label to cancel settings hotkey capture`,
              }),
            }),
        ],
      });
    if (y) {
      let e;
      return (
        n[26] !== w || n[27] !== u
          ? ((e =
              u == null
                ? null
                : (0, G.jsx)(`span`, {
                    id: w,
                    className: `block text-xs text-danger`,
                    role: `alert`,
                    children: u,
                  })),
            (n[26] = w),
            (n[27] = u),
            (n[28] = e))
          : (e = n[28]),
        (0, G.jsxs)(G.Fragment, { children: [T, e] })
      );
    }
    let E;
    n[29] === m
      ? (E = n[30])
      : ((E = (e) => {
          (!(e.relatedTarget instanceof Node) || !e.currentTarget.contains(e.relatedTarget)) && m?.();
        }),
        (n[29] = m),
        (n[30] = E));
    let O;
    n[31] !== S || n[32] !== p || n[33] !== C
      ? ((O = (0, G.jsx)(`label`, {
          id: S,
          className: `min-w-0 flex-1 cursor-interaction truncate text-sm leading-5 font-normal text-default select-none`,
          htmlFor: C,
          children: p,
        })),
        (n[31] = S),
        (n[32] = p),
        (n[33] = C),
        (n[34] = O))
      : (O = n[34]);
    let A;
    n[35] === V
      ? (A = n[36])
      : ((A =
          V == null
            ? null
            : (0, G.jsx)(`div`, { className: `px-4 pb-2 text-xs text-secondary`, children: V })),
        (n[35] = V),
        (n[36] = A));
    let M;
    return (
      n[37] !== w || n[38] !== u
        ? ((M =
            u == null
              ? null
              : (0, G.jsx)(`div`, {
                  id: w,
                  className: `px-4 pb-2 text-end text-xs text-danger`,
                  role: `alert`,
                  children: u,
                })),
          (n[37] = w),
          (n[38] = u),
          (n[39] = M))
        : (M = n[39]),
      (0, G.jsxs)(`li`, {
        className: `scroll-mt-12 scroll-mb-24 border-b border-subtle last:border-b-0`,
        onBlurCapture: E,
        onFocusCapture: ee,
        children: [
          (0, G.jsxs)(`div`, {
            className: `flex min-h-12 items-center gap-2 py-2 ps-4 pe-3`,
            children: [
              (0, G.jsx)(te, {
                id: C,
                "aria-labelledby": S,
                checked: !a,
                disabled: d,
                onChange: (e) => {
                  if ((Y(!1), e))
                    for (let e of o) {
                      let t = we({
                        accelerator: e.accelerator,
                        commandId: r.id,
                        intl: b,
                        isUnifiedTabStripEnabled: ce,
                        keymapState: f,
                        platform: j,
                        presentation: _,
                        registeredCommands: se,
                        useMiniLanguage: le,
                      });
                      if (t != null) {
                        L(b.formatMessage(ke.conflict, { shortcut: t }));
                        return;
                      }
                    }
                  z({ type: e ? `reset` : `clear` });
                },
              }),
              O,
              T,
            ],
          }),
          A,
          M,
        ],
      })
    );
  }
  let Fe = v,
    Ie = !x && `w-96`,
    X;
  n[40] === Ie
    ? (X = n[41])
    : ((X = h(`flex max-w-full flex-col @max-xl/keyboard-shortcuts:w-full`, Ie)), (n[40] = Ie), (n[41] = X));
  let Le = Ne.map((e, t) => {
      let n =
          P != null &&
          (P.mode === `append` ? e == null && t === B.length : P.accelerator === (e?.accelerator ?? null)),
        a = `${S}-binding-${t}`;
      return (0, G.jsx)(
        ye,
        {
          accelerator: e?.accelerator ?? null,
          acceleratorLabel: e?.label ?? null,
          allowsBareModifiers: he(r, M),
          allowsSequences:
            r.kind === `webview` &&
            !oe &&
            r.id !== `composer.submit` &&
            r.id !== `browser.toggleAnnotationMode`,
          ariaLabelledBy: a,
          canAppend: !oe && !x,
          captureAriaLabel: b.formatMessage(
            {
              id: `settings.keyboardShortcuts.captureAriaLabel`,
              defaultMessage: `Shortcut capture for {commandTitle}`,
              description: `Aria label for the shortcut capture input for a command`,
            },
            { commandTitle: p },
          ),
          conflict: n ? P.conflictingCommandTitle : null,
          disabled: d,
          emptyLabel: x
            ? (0, G.jsx)(i, {
                id: `settings.keyboardShortcuts.dictation.off`,
                defaultMessage: `Off`,
                description: `Status of a dictation shortcut that has no assigned key`,
              })
            : void 0,
          hotkeyName: p,
          isCapturing: n,
          valueLabelId: a,
          onCancelCapture: () => Y(!1),
          onCapture: (t) => {
            Pe(t, e);
          },
          onClear: () => {
            e != null && z({ type: `remove`, accelerator: e.accelerator });
          },
          onReset:
            t === Ae && K
              ? () => {
                  z({ type: `reset` });
                }
              : void 0,
          onStartCapture: (t) => {
            (L(null),
              F({
                accelerator: t === `append` ? null : (e?.accelerator ?? null),
                conflictingCommandTitle: null,
                mode: t,
              }));
          },
        },
        `${r.id}-${e?.accelerator ?? `unassigned`}`,
      );
    }),
    Z;
  n[42] !== S || n[43] !== X || n[44] !== Le
    ? ((Z = (0, G.jsx)(`div`, { "aria-labelledby": S, className: X, role: `group`, children: Le })),
      (n[42] = S),
      (n[43] = X),
      (n[44] = Le),
      (n[45] = Z))
    : (Z = n[45]);
  let Q;
  n[46] !== o || n[47] !== I || n[48] !== V
    ? ((Q =
        o !== `` || V != null || I != null
          ? (0, G.jsxs)(G.Fragment, {
              children: [
                o,
                V,
                I == null
                  ? null
                  : (0, G.jsx)(`span`, {
                      className: `block text-xs text-danger`,
                      role: `alert`,
                      children: I,
                    }),
              ],
            })
          : void 0),
      (n[46] = o),
      (n[47] = I),
      (n[48] = V),
      (n[49] = Q))
    : (Q = n[49]);
  let $;
  n[50] !== S || n[51] !== p
    ? (($ = (0, G.jsx)(`span`, { id: S, className: `block truncate`, children: p })),
      (n[50] = S),
      (n[51] = p),
      (n[52] = $))
    : ($ = n[52]);
  let Re;
  return (
    n[53] !== Fe || n[54] !== Z || n[55] !== Q || n[56] !== $
      ? ((Re = (0, G.jsx)(Fe, {
          className: `@max-xl/keyboard-shortcuts:flex-col @max-xl/keyboard-shortcuts:items-stretch @max-xl/keyboard-shortcuts:gap-2`,
          control: Z,
          description: Q,
          label: $,
        })),
        (n[53] = Fe),
        (n[54] = Z),
        (n[55] = Q),
        (n[56] = $),
        (n[57] = Re))
      : (Re = n[57]),
    Re
  );
}
function be(e) {
  return e.preventDefault();
}
function xe(e) {
  return e.preventDefault();
}
function Se(e) {
  return e == null ? e : { ...e, conflictingCommandTitle: null };
}
function Ce(e) {
  let { accelerator: t } = e;
  return t;
}
function we({
  accelerator: e,
  commandId: t,
  intl: n,
  isUnifiedTabStripEnabled: r,
  keymapState: i,
  platform: a,
  presentation: o,
  registeredCommands: s,
  useMiniLanguage: c,
}) {
  let l = M(e, a);
  switch (l) {
    case `find`:
    case `findNext`:
    case `findPrevious`:
      return n.formatMessage(
        {
          id: `settings.keyboardShortcuts.fixedFindCommand`,
          defaultMessage: `{command, select, find {Find} findNext {Find Next} other {Find Previous}}`,
          description: `Fixed Find command title shown for a shortcut conflict`,
        },
        { command: l },
      );
  }
  for (let l of k)
    if (
      !(
        !D(l) ||
        l.id === `findInThread` ||
        l.id === t ||
        (l.id === `toggleDebugModal` && le(s, l.id) === 0)
      ) &&
      !(
        C(l.id, t, e) &&
        (o === `chatgpt` ||
          e.toLowerCase() !== `enter` ||
          (l.id !== `composer.submit` && t !== `composer.submit`))
      ) &&
      me(l.id, i, a, o).some((t) => Ee(t.accelerator, e, a === `macOS`))
    )
      return H(l, n, P(s, l.id), c, r).title;
  return null;
}
function Te(e, t, n) {
  return u(e, n) === u(t, n);
}
function Ee(e, t, r) {
  let i = n(e).map((e) => u(e, r)),
    a = n(t).map((e) => u(e, r)),
    o = Math.min(i.length, a.length);
  return o > 0 && (i.length === o || a.length === o) && i.slice(0, o).every((e, t) => e === a[t]);
}
function De({ commandId: e, hasCustomBinding: t, keymapState: n, platform: r, shortcutEntries: i }) {
  if (!t) return null;
  let a = T({
      commandId: e,
      windowType: `electron`,
      isMacOS: r === `macOS`,
      keymapState: { ...n, bindings: [] },
    }),
    o = i.findIndex((e, t) => e.accelerator !== a[t]);
  return o === -1 ? 0 : o;
}
var Oe, W, G, ke;
function K() {
  return (K = e(() => {
    ((Oe = y()),
      f(),
      L(),
      o(),
      (W = x()),
      g(),
      oe(),
      ce(),
      V(),
      _(),
      s(),
      w(),
      a(),
      p(),
      S(),
      F(),
      se(),
      d(),
      m(),
      j(),
      R(),
      z(),
      ee(),
      B(),
      N(),
      I(),
      (G = b()),
      (ke = r({
        conflict: {
          id: `settings.keyboardShortcuts.conflict`,
          defaultMessage: `Already used by {shortcut}`,
          description: `Error in a keyboard shortcut row when the new key combination conflicts with another action; shortcut is that action's name`,
        },
      })));
  }))();
}
export { K as n, U as t };
//# sourceMappingURL=command-row-7d549d934763.js.map
