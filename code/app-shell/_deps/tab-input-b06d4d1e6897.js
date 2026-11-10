import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  O3t as i,
  Opn as a,
  Qit as o,
  Rpn as s,
  Spn as c,
  Zit as l,
  gRt as ee,
  hmn as u,
  kmn as d,
  xRt as f,
  zpn as p,
} from "./app-initial-f094ef01c64d.js";
import { DS as m, OS as h } from "./app-primary-4c40d73a1074.js";
import { i as g, n as _, r as te, t as ne } from "./popup-16e1d7eb9a55.js";
function re(e) {
  let t = (0, ae.c)(133),
    {
      addressBarRef: n,
      addressInputRef: r,
      className: i,
      addressValue: o,
      bottomPanelAnimation: c,
      currentAddress: l,
      id: ee,
      allowEmptySuggestions: u,
      hasEditedAddressRef: d,
      isAddressEditing: f,
      isStoppingAddressEditingRef: p,
      isVisible: h,
      sources: g,
      onAddressValueChange: _,
      onCancelAddressEditing: te,
      onCommitAddress: re,
      onEnsureAddressEditing: oe,
      onFinishAddressEditing: se,
      onFind: b,
      onStartAddressEditing: x,
      onStopAddressEditing: S,
      panelTarget: C,
      placeholder: ce,
      rightPanelLayoutTick: le,
      showAddressSuggestionsRef: w,
      shouldKeepAddressSelectedRef: T,
      submittedAddressStillPending: ue,
    } = e,
    de = a(),
    [E] = (0, v.useState)(ie),
    fe;
  t[0] !== E || t[1] !== g
    ? ((fe = (e) => E.subscribe(e, g)), (t[0] = E), (t[1] = g), (t[2] = fe))
    : (fe = t[2]);
  let pe;
  t[3] !== E || t[4] !== g
    ? ((pe = () => E.getSnapshot(g)), (t[3] = E), (t[4] = g), (t[5] = pe))
    : (pe = t[5]);
  let D = (0, v.useSyncExternalStore)(fe, pe),
    { displayedSelectedIndex: O, preview: k, suggestions: A, selectedSuggestion: me } = D,
    j = `address-suggestions-${ee}`,
    M = f && A.length > 0,
    he = g.some((e) => e.getSuggestions(o) != null),
    ge = f ? (k?.value ?? o) : o,
    N,
    P;
  (t[6] !== n ||
  t[7] !== E ||
  t[8] !== c ||
  t[9] !== M ||
  t[10] !== j ||
  t[11] !== C ||
  t[12] !== le
    ? ((N = () => {
        if (!M) return;
        let e = n.current;
        if (e == null) return;
        let t = e.offsetWidth,
          r = e.offsetHeight,
          i = document.getElementById(j),
          a = !1,
          o = () => {
            a || ((a = !0), E.stop(`interaction`, !1));
          },
          s = new ResizeObserver(() => {
            (e.offsetWidth !== t || e.offsetHeight !== r) && o();
          }),
          l = (e) => {
            (e.target instanceof Node && i?.contains(e.target)) || o();
          };
        s.observe(e);
        let ee = C === `bottom` ? c.on(`change`, o) : le.on(`change`, o);
        return (
          window.addEventListener(`resize`, o),
          window.addEventListener(`scroll`, l, !0),
          window.visualViewport?.addEventListener(`resize`, o),
          window.visualViewport?.addEventListener(`scroll`, o),
          () => {
            (s.disconnect(),
              ee(),
              window.removeEventListener(`resize`, o),
              window.removeEventListener(`scroll`, l, !0),
              window.visualViewport?.removeEventListener(`resize`, o),
              window.visualViewport?.removeEventListener(`scroll`, o));
          }
        );
      }),
      (P = [n, E, c, M, j, C, le]),
      (t[6] = n),
      (t[7] = E),
      (t[8] = c),
      (t[9] = M),
      (t[10] = j),
      (t[11] = C),
      (t[12] = le),
      (t[13] = N),
      (t[14] = P))
    : ((N = t[13]), (P = t[14])),
    (0, v.useEffect)(N, P));
  let F, I;
  (t[15] !== E || t[16] !== f || t[17] !== h
    ? ((F = () => {
        (!f || !h) && E.stop(`interaction`, !0);
      }),
      (I = [E, f, h]),
      (t[15] = E),
      (t[16] = f),
      (t[17] = h),
      (t[18] = F),
      (t[19] = I))
    : ((F = t[18]), (I = t[19])),
    (0, v.useEffect)(F, I));
  let L, R;
  (t[20] === E
    ? ((L = t[21]), (R = t[22]))
    : ((L = () => () => {
        E.stop(`interaction`, !0);
      }),
      (R = [E]),
      (t[20] = E),
      (t[21] = L),
      (t[22] = R)),
    (0, v.useEffect)(L, R));
  let _e, ve;
  (t[23] !== r || t[24] !== f || t[25] !== k
    ? ((ve = () => {
        let e = r.current;
        !f ||
          e == null ||
          e !== document.activeElement ||
          k == null ||
          (e.value === k.value &&
            e.selectionStart === k.selectionStart &&
            e.selectionEnd === k.selectionEnd) ||
          e.setSelectionRange(k.selectionStart, k.selectionEnd, `forward`);
      }),
      (_e = [r, f, k]),
      (t[23] = r),
      (t[24] = f),
      (t[25] = k),
      (t[26] = _e),
      (t[27] = ve))
    : ((_e = t[26]), (ve = t[27])),
    (0, v.useLayoutEffect)(ve, _e));
  let ye, be;
  (t[28] !== D || t[29] !== M || t[30] !== h || t[31] !== g
    ? ((ye = () => {
        if (M && h) for (let e of g) e.onRendered?.(D);
      }),
      (be = [D, M, h, g]),
      (t[28] = D),
      (t[29] = M),
      (t[30] = h),
      (t[31] = g),
      (t[32] = ye),
      (t[33] = be))
    : ((ye = t[32]), (be = t[33])),
    (0, v.useLayoutEffect)(ye, be));
  let xe;
  t[34] !== u || t[35] !== E || t[36] !== g
    ? ((xe = (e, t, n, r) => {
        let i = r !== void 0 && r;
        if (e.length === 0 && !u) {
          E.stop(`clobbered`, !1);
          return;
        }
        E.start({ preventInlineAutocomplete: i, selectionEnd: n, selectionStart: t, value: e }, g);
      }),
      (t[34] = u),
      (t[35] = E),
      (t[36] = g),
      (t[37] = xe))
    : (xe = t[37]);
  let z = xe,
    Se;
  (t[38] !== r || t[39] !== u || t[40] !== M || t[41] !== z
    ? ((Se = () => () => {
        let e = r.current;
        e == null ||
          e !== document.activeElement ||
          e.value.length > 0 ||
          !u ||
          M ||
          z(e.value, e.selectionStart ?? e.value.length, e.selectionEnd ?? e.value.length, !0);
      }),
      (t[38] = r),
      (t[39] = u),
      (t[40] = M),
      (t[41] = z),
      (t[42] = Se))
    : (Se = t[42]),
    (0, v.useImperativeHandle)(w, Se));
  let Ce;
  t[43] !== d || t[44] !== _ || t[45] !== T || t[46] !== z
    ? ((Ce = (e) => {
        let t = e.clipboardData.getData(`text`);
        if (t.length === 0) return;
        e.preventDefault();
        let n = e.currentTarget,
          r = n.selectionStart ?? n.value.length,
          i = n.selectionEnd ?? r,
          a = `${n.value.slice(0, r)}${t}${n.value.slice(i)}`;
        n.value = a;
        let o = r + t.length;
        (n.setSelectionRange(o, o), (d.current = !0), (T.current = !1), _(a), z(a, o, o, !0));
      }),
      (t[43] = d),
      (t[44] = _),
      (t[45] = T),
      (t[46] = z),
      (t[47] = Ce))
    : (Ce = t[47]);
  let we = Ce,
    Te;
  t[48] !== r ||
  t[49] !== E ||
  t[50] !== p ||
  t[51] !== te ||
  t[52] !== se ||
  t[53] !== T ||
  t[54] !== ue
    ? ((Te = (e, t) => {
        let n = t !== void 0 && t;
        if (
          e instanceof HTMLElement &&
          (e === r.current || e.dataset.browserSidebarAutocompleteDelete === `true`)
        )
          return;
        ((T.current = !1), E.stop(`interaction`, !0));
        let i =
          e instanceof HTMLElement &&
          (e.dataset.browserSidebarOpenExternal === `true` ||
            e.dataset.browserSidebarSkipAddressCommit === `true`);
        (!n && !p.current && e == null) || (se(), !i && !ue && te(e), (p.current = !1));
      }),
      (t[48] = r),
      (t[49] = E),
      (t[50] = p),
      (t[51] = te),
      (t[52] = se),
      (t[53] = T),
      (t[54] = ue),
      (t[55] = Te))
    : (Te = t[55]);
  let B = Te,
    Ee;
  t[56] !== E || t[57] !== g
    ? ((Ee = (e, t) => {
        let n = E.getSnapshot(g);
        n.suggestions
          .find((t) => {
            let { id: n } = t;
            return n === e.id;
          })
          ?.onSelect(t, n) && E.stop(`interaction`, !0);
      }),
      (t[56] = E),
      (t[57] = g),
      (t[58] = Ee))
    : (Ee = t[58]);
  let V = Ee,
    De;
  O >= 0 && O < A.length && (De = `${j}-option-${O}`);
  let Oe = f
      ? `cursor-text ps-2 text-start`
      : `cursor-text text-center focus:ps-2 focus:text-start`,
    H;
  t[59] !== i || t[60] !== Oe
    ? ((H = s(
        `h-full w-full min-w-0 bg-transparent py-0 text-sm leading-[18px] text-default outline-none select-text placeholder:text-tertiary [&::placeholder]:select-none`,
        Oe,
        i,
      )),
      (t[59] = i),
      (t[60] = Oe),
      (t[61] = H))
    : (H = t[61]);
  let ke = he ? `both` : void 0,
    Ae = M ? j : void 0,
    je = he ? M : void 0,
    Me = he ? `combobox` : void 0,
    U;
  t[62] !== x || t[63] !== T || t[64] !== w
    ? ((U = (e) => {
        (e.currentTarget === document.activeElement ? (T.current = !1) : (e.preventDefault(), x()),
          w.current?.());
      }),
      (t[62] = x),
      (t[63] = T),
      (t[64] = w),
      (t[65] = U))
    : (U = t[65]);
  let W;
  t[66] !== E || t[67] !== d || t[68] !== _ || t[69] !== T || t[70] !== z
    ? ((W = (e) => {
        let t = e.currentTarget.value,
          n = e.currentTarget.selectionStart ?? t.length,
          r = e.currentTarget.selectionEnd ?? n,
          i = E.consumePreventInlineAutocompleteOnNextChange();
        ((d.current = !0), (T.current = !1), _(t), z(t, n, r, i));
      }),
      (t[66] = E),
      (t[67] = d),
      (t[68] = _),
      (t[69] = T),
      (t[70] = z),
      (t[71] = W))
    : (W = t[71]);
  let G, K, q;
  t[72] === E
    ? ((G = t[73]), (K = t[74]), (q = t[75]))
    : ((G = () => E.setComposing(!0)),
      (K = () => E.setComposing(!1)),
      (q = (e) => {
        e.currentTarget.selectionStart !== e.currentTarget.selectionEnd &&
          E.setPreventInlineAutocompleteOnNextChange(!0);
      }),
      (t[72] = E),
      (t[73] = G),
      (t[74] = K),
      (t[75] = q));
  let J;
  t[76] === B
    ? (J = t[77])
    : ((J = (e) => {
        B(e.relatedTarget);
      }),
      (t[76] = B),
      (t[77] = J));
  let Y;
  t[78] !== E ||
  t[79] !== D ||
  t[80] !== j ||
  t[81] !== re ||
  t[82] !== b ||
  t[83] !== S ||
  t[84] !== k ||
  t[85] !== V ||
  t[86] !== me ||
  t[87] !== g ||
  t[88] !== A
    ? ((Y = (e) => {
        if (!e.nativeEvent.isComposing) {
          if (
            (E.setPreventInlineAutocompleteOnNextChange(
              e.key === `Backspace` || e.key === `Delete`,
            ),
            e.key.toLowerCase() === `f` && (e.metaKey || e.ctrlKey))
          ) {
            (e.preventDefault(), e.stopPropagation(), b());
            return;
          }
          if ((e.key === `ArrowDown` || e.key === `ArrowUp`) && A.length > 0) {
            (e.preventDefault(),
              E.moveSelection(e.key === `ArrowDown` ? 1 : -1, g),
              requestAnimationFrame(() => {
                let e = `${j}-option-${E.getSnapshot(g).selectedIndex}`;
                document.getElementById(e)?.scrollIntoView?.({ block: `nearest` });
              }));
            return;
          }
          if (e.key === `Escape`) {
            (e.preventDefault(), E.stop(`interaction`, !0), S());
            return;
          }
          if (
            !(e.key !== `Enter` && e.key !== `Return`) &&
            (e.preventDefault(), !D.isSelectedSuggestionMissing)
          ) {
            if (me != null) {
              let e = `typed_enter`;
              (E.hasKeyboardSelection()
                ? (e = `suggestion_keyboard`)
                : k != null && (e = `inline_enter`),
                V(me, e));
              return;
            }
            (g.some((t) => t.submit?.(e.currentTarget.value, D)) || re(e.currentTarget.value, D),
              E.stop(`interaction`, !0));
          }
        }
      }),
      (t[78] = E),
      (t[79] = D),
      (t[80] = j),
      (t[81] = re),
      (t[82] = b),
      (t[83] = S),
      (t[84] = k),
      (t[85] = V),
      (t[86] = me),
      (t[87] = g),
      (t[88] = A),
      (t[89] = Y))
    : (Y = t[89]);
  let X;
  t[90] !== E ||
  t[91] !== l ||
  t[92] !== d ||
  t[93] !== _ ||
  t[94] !== T ||
  t[95] !== g ||
  t[96] !== z
    ? ((X = (e) => {
        let t = e.currentTarget,
          n = t.selectionStart ?? t.value.length,
          r = t.selectionEnd ?? n;
        E.shouldPreventInlineAutocompleteOnNextChange() ||
          (!d.current && t.value === l) ||
          E.isAutocompleteSelection(t.value, n, r, g) ||
          ((d.current = !0), (T.current = !1), _(t.value), z(t.value, n, r));
      }),
      (t[90] = E),
      (t[91] = l),
      (t[92] = d),
      (t[93] = _),
      (t[94] = T),
      (t[95] = g),
      (t[96] = z),
      (t[97] = X))
    : (X = t[97]);
  let Z;
  t[98] !== De ||
  t[99] !== r ||
  t[100] !== we ||
  t[101] !== oe ||
  t[102] !== ce ||
  t[103] !== H ||
  t[104] !== ke ||
  t[105] !== Ae ||
  t[106] !== je ||
  t[107] !== Me ||
  t[108] !== U ||
  t[109] !== W ||
  t[110] !== G ||
  t[111] !== K ||
  t[112] !== q ||
  t[113] !== J ||
  t[114] !== Y ||
  t[115] !== X ||
  t[116] !== ge
    ? ((Z = (0, y.jsx)(`input`, {
        ref: r,
        className: H,
        dir: `ltr`,
        "data-browser-sidebar-address-input": `true`,
        "aria-activedescendant": De,
        "aria-autocomplete": ke,
        "aria-controls": Ae,
        "aria-expanded": je,
        role: Me,
        value: ge,
        placeholder: ce,
        onFocus: oe,
        onPointerDown: U,
        onChange: W,
        onCompositionStart: G,
        onCompositionEnd: K,
        onCut: q,
        onPaste: we,
        onBlur: J,
        onKeyDown: Y,
        onSelect: X,
      })),
      (t[98] = De),
      (t[99] = r),
      (t[100] = we),
      (t[101] = oe),
      (t[102] = ce),
      (t[103] = H),
      (t[104] = ke),
      (t[105] = Ae),
      (t[106] = je),
      (t[107] = Me),
      (t[108] = U),
      (t[109] = W),
      (t[110] = G),
      (t[111] = K),
      (t[112] = q),
      (t[113] = J),
      (t[114] = Y),
      (t[115] = X),
      (t[116] = ge),
      (t[117] = Z))
    : (Z = t[117]);
  let Q;
  t[118] !== n ||
  t[119] !== r ||
  t[120] !== E ||
  t[121] !== O ||
  t[122] !== B ||
  t[123] !== de ||
  t[124] !== M ||
  t[125] !== j ||
  t[126] !== V ||
  t[127] !== g ||
  t[128] !== A
    ? ((Q = M
        ? (0, y.jsx)(m, {
            anchorRef: n,
            constrainHeightToViewport: !0,
            gap: 0,
            isActive: !0,
            minWidth: 360,
            placement: `bottom`,
            portalRoot: `body`,
            zIndexClassName: `z-30`,
            children: (0, y.jsx)(ne, {
              label: de.formatMessage({
                id: `thread.browser.addressSuggestions`,
                defaultMessage: `Address suggestions`,
                description: `Accessible label for browser address bar suggestions`,
              }),
              listboxId: j,
              suggestions: A,
              selectedIndex: O,
              onDelete: (e) => {
                E.deleteSuggestion(e, g) && r.current?.focus();
              },
              onDeleteBlur: (e) => {
                B(e, !0);
              },
              onSelect: (e) => V(e, `suggestion_click`),
            }),
          })
        : null),
      (t[118] = n),
      (t[119] = r),
      (t[120] = E),
      (t[121] = O),
      (t[122] = B),
      (t[123] = de),
      (t[124] = M),
      (t[125] = j),
      (t[126] = V),
      (t[127] = g),
      (t[128] = A),
      (t[129] = Q))
    : (Q = t[129]);
  let $;
  return (
    t[130] !== Z || t[131] !== Q
      ? (($ = (0, y.jsxs)(y.Fragment, { children: [Z, Q] })),
        (t[130] = Z),
        (t[131] = Q),
        (t[132] = $))
      : ($ = t[132]),
    $
  );
}
function ie() {
  return new te();
}
var ae,
  v,
  y,
  oe = e(() => {
    ((ae = d()), p(), (v = t(r(), 1)), c(), h(), g(), _(), (y = u()));
  });
function se(e) {
  let t = (0, b.c)(28),
    r,
    i,
    a,
    s,
    c;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (s = t[4]), (c = t[5]))
    : (({ conversationId: r, providers: s, sources: c, onNavigate: i, ...a } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = s),
      (t[5] = c));
  let l = n(ee),
    u;
  t[6] !== r ||
  t[7] !== i ||
  t[8] !== a.addressValue ||
  t[9] !== a.id ||
  t[10] !== a.onStopAddressEditing ||
  t[11] !== a.panelTarget
    ? ((u = () => ({
        id: a.id,
        conversationId: r,
        panelTarget: a.panelTarget,
        value: a.addressValue,
        navigate: i,
        stopEditing: a.onStopAddressEditing,
      })),
      (t[6] = r),
      (t[7] = i),
      (t[8] = a.addressValue),
      (t[9] = a.id),
      (t[10] = a.onStopAddressEditing),
      (t[11] = a.panelTarget),
      (t[12] = u))
    : (u = t[12]);
  let d = o(u),
    f;
  t[13] !== d || t[14] !== s || t[15] !== l
    ? ((f = () => s.map((e) => e(l, d))), (t[13] = d), (t[14] = s), (t[15] = l), (t[16] = f))
    : (f = t[16]);
  let [p] = (0, x.useState)(f),
    m;
  t[17] === c ? (m = t[18]) : ((m = c ?? []), (t[17] = c), (t[18] = m));
  let h;
  t[19] !== p || t[20] !== m
    ? ((h = [...m, ...p]), (t[19] = p), (t[20] = m), (t[21] = h))
    : (h = t[21]);
  let g;
  t[22] === i ? (g = t[23]) : ((g = (e) => i(e, !1)), (t[22] = i), (t[23] = g));
  let _;
  return (
    t[24] !== a || t[25] !== h || t[26] !== g
      ? ((_ = (0, S.jsx)(re, { ...a, sources: h, onCommitAddress: g })),
        (t[24] = a),
        (t[25] = h),
        (t[26] = g),
        (t[27] = _))
      : (_ = t[27]),
    _
  );
}
var b,
  x,
  S,
  C = e(() => {
    ((b = d()), i(), (x = t(r(), 1)), f(), l(), oe(), (S = u()));
  });
export { C as n, se as t };
//# sourceMappingURL=tab-input-b06d4d1e6897.js.map
