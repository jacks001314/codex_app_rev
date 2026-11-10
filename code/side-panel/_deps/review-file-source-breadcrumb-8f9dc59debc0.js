import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AH as r,
  AMt as i,
  Amn as a,
  B6t as o,
  B7 as s,
  BQ as c,
  BT as l,
  Cpn as u,
  F3t as d,
  GG as f,
  GK as p,
  H4t as m,
  HQ as h,
  J4t as g,
  JG as _,
  Jit as v,
  KK as y,
  Kit as b,
  M3t as x,
  MMt as S,
  N3t as C,
  O3t as w,
  Opn as T,
  Qit as E,
  RT as D,
  Rpn as O,
  Spn as k,
  TJt as A,
  U3t as j,
  UQ as M,
  V7 as N,
  W4t as P,
  WG as F,
  XT as ee,
  ZG as te,
  Zit as ne,
  _Mt as re,
  aG as I,
  e9t as ie,
  gMt as L,
  gRt as R,
  gwt as ae,
  hE as oe,
  hMt as se,
  hYt as ce,
  hmn as z,
  hz as le,
  iB as ue,
  jMt as de,
  kH as fe,
  kMt as pe,
  kmn as B,
  lG as V,
  mYt as me,
  mz as H,
  nB as he,
  nWt as ge,
  oG as _e,
  q4t as ve,
  qT as ye,
  rE as be,
  s6t as xe,
  sG as Se,
  tWt as Ce,
  u6t as we,
  uG as Te,
  vMt as Ee,
  vwt as De,
  wJt as Oe,
  xRt as U,
  xpn as ke,
  zQ as W,
  zpn as Ae,
} from "./app-initial-f094ef01c64d.js";
import {
  Bb as je,
  Ey as Me,
  Gb as Ne,
  Jb as Pe,
  KS as Fe,
  US as Ie,
  Vb as Le,
  Yb as Re,
  wy as ze,
  zb as Be,
} from "./app-primary-4c40d73a1074.js";
import { n as Ve } from "./gate-04dc472e6f9b.js";
import { l as He, u as Ue } from "./review-file-tree-pane-b743a8f06e62.js";
import { n as We, t as Ge } from "./workspace-file-context-menu-trigger-f535672389ec.js";
function Ke(e, t) {
  let n = e.trim();
  if (!Je.test(n)) return null;
  let r = Number(n);
  return !Number.isSafeInteger(r) || r === 0 ? null : t == null ? r : G(r, t);
}
function G(e, t) {
  let n = Math.max(1, t),
    r = e < 0 ? n + 1 + e : e;
  return Math.min(Math.max(1, r), n);
}
function qe(e) {
  return e === `` ? 1 : e.split(/\r\n|\r|\n/).length;
}
var Je,
  Ye = e(() => {
    Je = /^-?\d+$/;
  });
function Xe(e) {
  let t = (0, tt.c)(117),
    {
      alignWithPaddedPierreFile: r,
      appearance: i,
      getKeyboardOwner: a,
      getLineCount: o,
      inputRef: s,
      onCancelPreview: c,
      onGoToLine: d,
      onOpen: f,
      onPreviewLine: p,
      pierreThemeKey: m,
      restoreFocus: h,
    } = e,
    g = r !== void 0 && r,
    _ = n(R),
    v = T(),
    y = (0, K.useRef)(null),
    b = s ?? y,
    x = (0, K.useRef)(!1),
    S = (0, K.useRef)(!1),
    C = (0, K.useRef)(!1),
    w = (0, K.useRef)(null),
    E = (0, K.useRef)(c),
    k = (0, K.useRef)(0),
    A = (0, K.useRef)(null),
    j = (0, K.useId)(),
    M = (0, K.useId)(),
    P = (0, K.useId)(),
    [F, te] = (0, K.useState)(!1),
    [ne, re] = (0, K.useState)(!1),
    [I, ie] = (0, K.useState)(nt),
    [L, ae] = (0, K.useState)(``),
    se;
  t[0] !== o || t[1] !== F
    ? ((se = F ? o() : null), (t[0] = o), (t[1] = F), (t[2] = se))
    : (se = t[2]);
  let ce = se,
    z;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = () => {
        let e = Ze(A.current);
        return e == null
          ? !1
          : (ie((t) =>
              t.background === e.background &&
              t.foreground === e.foreground &&
              t.modified === e.modified
                ? t
                : e,
            ),
            !0);
      }),
      (t[3] = z))
    : (z = t[3]);
  let le = z,
    ue;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = () => {
        ((k.current += 1), (C.current = !1));
      }),
      (t[4] = ue))
    : (ue = t[4]);
  let de = ue,
    fe,
    pe;
  (t[5] === c
    ? ((fe = t[6]), (pe = t[7]))
    : ((fe = () => {
        E.current = c;
      }),
      (pe = [c]),
      (t[5] = c),
      (t[6] = fe),
      (t[7] = pe)),
    (0, K.useEffect)(fe, pe));
  let B;
  t[8] !== c || t[9] !== h
    ? ((B = (e, t) => {
        let n = t === void 0 || t;
        x.current || ((x.current = !0), (S.current = !1), de(), te(!1), n && c?.(), e && h());
      }),
      (t[8] = c),
      (t[9] = h),
      (t[10] = B))
    : (B = t[10]);
  let V = B,
    me,
    H;
  (t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = () => () => {
        (J === w.current && (J = null), (w.current = null), S.current && (de(), E.current?.()));
      }),
      (H = [de]),
      (t[11] = me),
      (t[12] = H))
    : ((me = t[11]), (H = t[12])),
    (0, K.useEffect)(me, H));
  let he;
  t[13] !== V || t[14] !== o || t[15] !== d || t[16] !== L
    ? ((he = () => {
        let e = Ke(L, o());
        if (e == null) {
          re(!0);
          return;
        }
        (d(e), V(!0, !1));
      }),
      (t[13] = V),
      (t[14] = o),
      (t[15] = d),
      (t[16] = L),
      (t[17] = he))
    : (he = t[17]);
  let ge = he,
    _e;
  if (t[18] !== o || t[19] !== b || t[20] !== p) {
    _e = (t, r, i) => {
      let a = o();
      if (a == null) return;
      let s = Ke(t, a);
      if (s == null || p == null) return;
      let c = k.current + 1;
      ((k.current = c), (C.current = !0), p(s), n(r, i), e(r, i, c));
    };
    let e = (t, r, i, a) => {
        let o = a === void 0 ? 0 : a;
        window.requestAnimationFrame(() => {
          if (k.current === i) {
            if ((n(t, r), o < 4)) {
              e(t, r, i, o + 1);
              return;
            }
            C.current = !1;
          }
        });
      },
      n = (e, t) => {
        let n = b.current;
        n == null ||
          document.activeElement === n ||
          (n.focus({ preventScroll: !0 }), e != null && t != null && n.setSelectionRange(e, t));
      };
    ((t[18] = o), (t[19] = b), (t[20] = p), (t[21] = _e));
  } else _e = t[21];
  let ve, be;
  (t[22] === a
    ? ((ve = t[23]), (be = t[24]))
    : ((ve = () => {
        let e = a();
        if (e == null) return;
        w.current = e;
        let t = () => {
          J = e;
        };
        return (
          e.addEventListener(`focusin`, t),
          () => {
            e.removeEventListener(`focusin`, t);
          }
        );
      }),
      (be = [a]),
      (t[22] = a),
      (t[23] = ve),
      (t[24] = be)),
    (0, K.useEffect)(ve, be));
  let xe, Se;
  (t[25] !== V || t[26] !== F
    ? ((xe = () => {
        if (!F) return;
        let e = (e) => {
          let t = A.current;
          t == null || !(e.target instanceof Node) || t.contains(e.target) || V(!1, !1);
        };
        return (
          document.addEventListener(`pointerdown`, e, !0),
          () => {
            document.removeEventListener(`pointerdown`, e, !0);
          }
        );
      }),
      (Se = [V, F]),
      (t[25] = V),
      (t[26] = F),
      (t[27] = xe),
      (t[28] = Se))
    : ((xe = t[27]), (Se = t[28])),
    (0, K.useEffect)(xe, Se));
  let Ce, we;
  (t[29] !== i || t[30] !== F
    ? ((Ce = () => {
        !F || i !== `pierre` || le();
      }),
      (we = [i, F, le]),
      (t[29] = i),
      (t[30] = F),
      (t[31] = Ce),
      (t[32] = we))
    : ((Ce = t[31]), (we = t[32])),
    (0, K.useLayoutEffect)(Ce, we));
  let Te, Ee;
  (t[33] !== i || t[34] !== F || t[35] !== m
    ? ((Te = () => {
        if (!F || i !== `pierre` || m == null) return;
        let e = A.current?.parentElement?.parentElement;
        if (e == null) return;
        let t = [],
          n = null,
          r = null,
          a = () => {
            let n = e.querySelector(`diffs-container`);
            if (n == null) return !1;
            if (n === r) return !0;
            for (let e of t) e.disconnect();
            ((t.length = 0), (r = n), le());
            let i = new MutationObserver(le);
            (i.observe(n, { attributes: !0, attributeFilter: [`data-theme`, `style`] }), t.push(i));
            for (let r = n.parentElement; r != null; r = r.parentElement) {
              let i = new MutationObserver(() => {
                e.querySelector(`diffs-container`) !== n && o();
              });
              if ((i.observe(r, { childList: !0 }), t.push(i), r === e)) break;
            }
            let a = n.shadowRoot;
            if (a == null) return !0;
            let s = null,
              c = null,
              l = () => {
                let e = a.querySelector(`style[data-theme-css]`);
                e !== s &&
                  (c?.disconnect(),
                  (s = e),
                  e != null &&
                    ((c = new MutationObserver(le)),
                    c.observe(e, { characterData: !0, childList: !0, subtree: !0 }),
                    t.push(c)),
                  le());
              },
              u = new MutationObserver(l);
            return (u.observe(a, { childList: !0 }), t.push(u), l(), !0);
          },
          o = () => {
            if (a()) {
              (n?.disconnect(), (n = null));
              return;
            }
            n ?? ((n = new MutationObserver(o)), n.observe(e, { childList: !0, subtree: !0 }));
          };
        return (
          o(),
          () => {
            n?.disconnect();
            for (let e of t) e.disconnect();
          }
        );
      }),
      (Ee = [i, F, m, le]),
      (t[33] = i),
      (t[34] = F),
      (t[35] = m),
      (t[36] = Te),
      (t[37] = Ee))
    : ((Te = t[36]), (Ee = t[37])),
    (0, K.useEffect)(Te, Ee));
  let De;
  t[38] !== b || t[39] !== F || t[40] !== f || t[41] !== _
    ? ((De = () => {
        if (
          (_.get(ee) === `browser` && (Pe(_.get(ye), { type: `close-find` }), oe(_, D)), l(_), F)
        ) {
          (b.current?.focus(), b.current?.select());
          return;
        }
        (re(!1), ae(``), (x.current = !1), (S.current = !0), f?.(), te(!0));
      }),
      (t[38] = b),
      (t[39] = F),
      (t[40] = f),
      (t[41] = _),
      (t[42] = De))
    : (De = t[42]);
  let Oe;
  if (
    (t[43] === a
      ? (Oe = t[44])
      : ((Oe = {
          isActive: (e) => et(e?.originPanel, a(), A.current),
          keyboardHandler: (e) => {
            if (!$e(e, a(), A.current)) return !1;
          },
        }),
        (t[43] = a),
        (t[44] = Oe)),
    N(`goToLine`, De, Oe),
    !F)
  )
    return null;
  let U;
  t[45] !== I.background || t[46] !== I.foreground || t[47] !== I.modified
    ? ((U = {
        "--go-to-line-bg": I.background,
        "--go-to-line-fg": I.foreground,
        "--go-to-line-modified-base": I.modified,
      }),
      (t[45] = I.background),
      (t[46] = I.foreground),
      (t[47] = I.modified),
      (t[48] = U))
    : (U = t[48]);
  let ke = U,
    W = i === `pierre`,
    Ae;
  t[49] === v
    ? (Ae = t[50])
    : ((Ae = v.formatMessage({
        id: `codex.goToLine.close`,
        defaultMessage: `Close go to line`,
        description: `Button label to close the go to line input`,
      })),
      (t[49] = v),
      (t[50] = Ae));
  let je = Ae,
    Me;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (0, q.jsx)(u, {
        id: `codex.goToLine.label`,
        defaultMessage: `Go to line`,
        description: `Accessible label for the go to line input`,
      })),
      (t[51] = Me))
    : (Me = t[51]);
  let Ne;
  t[52] === j
    ? (Ne = t[53])
    : ((Ne = (0, q.jsx)(`label`, { className: `sr-only`, htmlFor: j, children: Me })),
      (t[52] = j),
      (t[53] = Ne));
  let Fe = ce == null ? void 0 : M,
    Ie = ne ? P : void 0,
    Re = ne || void 0,
    ze;
  t[54] !== v || t[55] !== W
    ? ((ze = W
        ? v.formatMessage({
            id: `codex.goToLine.fieldLabel`,
            defaultMessage: `Line`,
            description: `Visual label shown before the go to line input`,
          })
        : void 0),
      (t[54] = v),
      (t[55] = W),
      (t[56] = ze))
    : (ze = t[56]);
  let Ve = W
      ? `h-7 w-full min-w-0 grow rounded-[6px] border border-[color-mix(in_lab,var(--go-to-line-fg)_12%,var(--go-to-line-bg))] bg-[var(--go-to-line-bg)] px-[6px] py-px text-[13px] leading-6 text-[var(--go-to-line-fg)] outline-none placeholder:text-tertiary selection:bg-[color-mix(in_lab,var(--go-to-line-fg)_8%,var(--go-to-line-bg))] focus-visible:outline-2 focus-visible:outline-[var(--go-to-line-modified-base)] focus-visible:outline-solid`
      : `h-6 w-24 min-w-0 bg-transparent text-base leading-6 text-default outline-none focus:!outline-none`,
    He = ne ? (W ? `border-text-danger text-danger` : `text-danger`) : null,
    Ue;
  t[57] !== Ve || t[58] !== He
    ? ((Ue = O(Ve, He)), (t[57] = Ve), (t[58] = He), (t[59] = Ue))
    : (Ue = t[59]);
  let We;
  t[60] === _e
    ? (We = t[61])
    : ((We = (e) => {
        let t = e.target.value;
        (ae(t), re(!1), _e(t, e.target.selectionStart, e.target.selectionEnd));
      }),
      (t[60] = _e),
      (t[61] = We));
  let Ge;
  t[62] === a
    ? (Ge = t[63])
    : ((Ge = () => {
        let e = a();
        e != null && (J = e);
      }),
      (t[62] = a),
      (t[63] = Ge));
  let G;
  t[64] === ge
    ? (G = t[65])
    : ((G = (e) => {
        if (e.key === `Tab`) {
          de();
          return;
        }
        e.key === `Enter` && (e.preventDefault(), ge());
      }),
      (t[64] = ge),
      (t[65] = G));
  let qe;
  t[66] !== j ||
  t[67] !== b ||
  t[68] !== Fe ||
  t[69] !== Ie ||
  t[70] !== Re ||
  t[71] !== ze ||
  t[72] !== Ue ||
  t[73] !== We ||
  t[74] !== Ge ||
  t[75] !== G ||
  t[76] !== L
    ? ((qe = (0, q.jsx)(`input`, {
        id: j,
        ref: b,
        type: `text`,
        inputMode: `numeric`,
        autoComplete: `off`,
        autoFocus: !0,
        "aria-describedby": Fe,
        "aria-errormessage": Ie,
        "aria-invalid": Re,
        placeholder: ze,
        className: Ue,
        value: L,
        onChange: We,
        onFocus: Ge,
        onKeyDown: G,
      })),
      (t[66] = j),
      (t[67] = b),
      (t[68] = Fe),
      (t[69] = Ie),
      (t[70] = Re),
      (t[71] = ze),
      (t[72] = Ue),
      (t[73] = We),
      (t[74] = Ge),
      (t[75] = G),
      (t[76] = L),
      (t[77] = qe))
    : (qe = t[77]);
  let Je;
  t[78] !== Ne || t[79] !== qe
    ? ((Je = (0, q.jsxs)(q.Fragment, { children: [Ne, qe] })),
      (t[78] = Ne),
      (t[79] = qe),
      (t[80] = Je))
    : (Je = t[80]);
  let Ye = Je,
    Xe;
  t[81] !== W || t[82] !== ce || t[83] !== M || t[84] !== L
    ? ((Xe =
        ce == null
          ? null
          : (0, q.jsx)(`span`, {
              id: M,
              className: O(
                W
                  ? `flex min-w-[50px] shrink-0 items-center text-[12px] leading-5 font-medium whitespace-nowrap`
                  : `col-[2/3] row-[1] flex h-[44px] items-center px-2 text-base leading-6 text-codex-description`,
                W &&
                  (L.trim().length === 0
                    ? `text-[color-mix(in_lab,var(--go-to-line-fg)_35%,var(--go-to-line-bg))]`
                    : `text-[color-mix(in_lab,var(--go-to-line-fg)_50%,var(--go-to-line-bg))]`),
              ),
              children: (0, q.jsx)(u, {
                id: `codex.goToLine.range`,
                defaultMessage: `1–{lineCount}`,
                description: `Current valid line range shown in the go to line input`,
                values: { lineCount: ce },
              }),
            })),
      (t[81] = W),
      (t[82] = ce),
      (t[83] = M),
      (t[84] = L),
      (t[85] = Xe))
    : (Xe = t[85]);
  let rt = Xe,
    it;
  t[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = (0, q.jsx)(u, {
        id: `codex.goToLine.error`,
        defaultMessage: `Enter a valid whole line number`,
        description: `Accessible error for an invalid go to line value`,
      })),
      (t[86] = it))
    : (it = t[86]);
  let at;
  t[87] === P
    ? (at = t[88])
    : ((at = (0, q.jsx)(`span`, { id: P, className: `sr-only`, children: it })),
      (t[87] = P),
      (t[88] = at));
  let ot = at,
    st;
  t[89] !== g || t[90] !== W
    ? ((st = O(
        `pointer-events-none sticky z-[55] flex justify-end`,
        W ? [`top-4 h-0 w-full`, g ? `pe-8` : `pe-4`] : `top-3 mb-[-44px] pe-3`,
      )),
      (t[89] = g),
      (t[90] = W),
      (t[91] = st))
    : (st = t[91]);
  let ct = W && `relative max-w-full font-sans text-[14px] leading-5 font-normal`,
    lt;
  t[92] === ct ? (lt = t[93]) : ((lt = O(`pointer-events-auto`, ct)), (t[92] = ct), (t[93] = lt));
  let ut = W ? ke : void 0,
    Y;
  t[94] === V
    ? (Y = t[95])
    : ((Y = (e) => {
        let t = e.currentTarget;
        C.current ||
          (e.relatedTarget instanceof Node && t.contains(e.relatedTarget)) ||
          window.requestAnimationFrame(() => {
            if (C.current) return;
            let e = document.activeElement;
            (e instanceof Node && t.contains(e)) || V(!1, !1);
          });
      }),
      (t[94] = V),
      (t[95] = Y));
  let dt;
  t[96] === ge
    ? (dt = t[97])
    : ((dt = (e) => {
        (e.preventDefault(), ge());
      }),
      (t[96] = ge),
      (t[97] = dt));
  let X;
  t[98] === V
    ? (X = t[99])
    : ((X = (e) => {
        e.key === `Escape` && (e.preventDefault(), V(!0));
      }),
      (t[98] = V),
      (t[99] = X));
  let ft;
  t[100] !== V || t[101] !== je || t[102] !== W || t[103] !== ot || t[104] !== Ye || t[105] !== rt
    ? ((ft = W
        ? (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsxs)(`div`, {
                className: `relative flex w-fit max-w-full min-w-0 items-center gap-[6px] rounded-[9px] border border-[color-mix(in_lab,var(--go-to-line-fg)_20%,transparent)] bg-[color-mix(in_lab,var(--go-to-line-fg)_4%,var(--go-to-line-bg))] p-1 shadow-[inset_0_0_0_1px_var(--go-to-line-bg),0_4px_8px_rgba(0,0,0,0.075),0_6px_18px_rgba(0,0,0,0.075)]`,
                children: [
                  (0, q.jsx)(`div`, {
                    className: `flex w-[200px] min-w-0 items-center`,
                    children: Ye,
                  }),
                  rt,
                  ot,
                ],
              }),
              (0, q.jsx)(`button`, {
                type: `button`,
                "aria-label": je,
                className: `absolute end-0 top-0 flex size-5 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[50%] border-0 bg-[color-mix(in_lab,var(--go-to-line-fg)_50%,var(--go-to-line-bg))] p-0 text-[color-mix(in_lab,var(--go-to-line-fg)_4%,var(--go-to-line-bg))] transition-colors outline-none hover:bg-[var(--go-to-line-fg)] focus-visible:outline-2 focus-visible:outline-[var(--go-to-line-modified-base)] focus-visible:outline-solid rtl:-translate-x-1/2`,
                onClick: () => {
                  V(!0);
                },
                children: (0, q.jsx)(Qe, {}),
              }),
            ],
          })
        : (0, q.jsxs)(Be, {
            children: [
              (0, q.jsxs)(`div`, {
                className: `col-[1/2] row-[1] flex h-[44px] min-w-0 items-center gap-2 ps-4`,
                children: [
                  (0, q.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `shrink-0 text-base leading-6 text-codex-description`,
                    children: (0, q.jsx)(u, {
                      id: `codex.goToLine.fieldLabel`,
                      defaultMessage: `Line`,
                      description: `Visual label shown before the go to line input`,
                    }),
                  }),
                  Ye,
                ],
              }),
              rt,
              ot,
              (0, q.jsx)(Le, {
                label: je,
                onClose: () => {
                  V(!0);
                },
              }),
            ],
          })),
      (t[100] = V),
      (t[101] = je),
      (t[102] = W),
      (t[103] = ot),
      (t[104] = Ye),
      (t[105] = rt),
      (t[106] = ft))
    : (ft = t[106]);
  let pt;
  t[107] !== lt || t[108] !== ut || t[109] !== Y || t[110] !== dt || t[111] !== X || t[112] !== ft
    ? ((pt = (0, q.jsx)(`form`, {
        ref: A,
        autoComplete: `off`,
        className: lt,
        style: ut,
        onBlurCapture: Y,
        onSubmit: dt,
        onKeyDown: X,
        children: ft,
      })),
      (t[107] = lt),
      (t[108] = ut),
      (t[109] = Y),
      (t[110] = dt),
      (t[111] = X),
      (t[112] = ft),
      (t[113] = pt))
    : (pt = t[113]);
  let mt;
  return (
    t[114] !== st || t[115] !== pt
      ? ((mt = (0, q.jsx)(`div`, { className: st, children: pt })),
        (t[114] = st),
        (t[115] = pt),
        (t[116] = mt))
      : (mt = t[116]),
    mt
  );
}
function Ze(e) {
  let t = e?.parentElement?.parentElement?.querySelector(`diffs-container`);
  if (t == null) return null;
  let n = window.getComputedStyle(t);
  return {
    background: n.getPropertyValue(`--diffs-bg`).trim() || n.backgroundColor,
    foreground: n.getPropertyValue(`--diffs-fg`).trim() || n.color,
    modified: n.getPropertyValue(`--diffs-modified-base`).trim() || nt.modified,
  };
}
function Qe() {
  let e = (0, tt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, q.jsx)(`svg`, {
          "aria-hidden": `true`,
          className: `size-3`,
          focusable: `false`,
          viewBox: `0 0 16 16`,
          children: (0, q.jsx)(`path`, {
            d: `M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L8 6.93934L11.7197 3.21967C12.0126 2.92678 12.4874 2.92678 12.7803 3.21967C13.0732 3.51256 13.0732 3.98744 12.7803 4.28033L9.06066 8L12.7803 11.7197C13.0732 12.0126 13.0732 12.4874 12.7803 12.7803C12.4874 13.0732 12.0126 13.0732 11.7197 12.7803L8 9.06066L4.28033 12.7803C3.98744 13.0732 3.51256 13.0732 3.21967 12.7803C2.92678 12.4874 2.92678 12.0126 3.21967 11.7197L6.93934 8L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967Z`,
            fill: `currentColor`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function $e(e, t, n) {
  return e.defaultPrevented || t == null
    ? !1
    : e.composedPath().some((e) => e instanceof Node && (t.contains(e) || n?.contains(e) === !0));
}
function et(e, t, n) {
  if (t == null) return !1;
  if (e != null) return t.dataset.appShellTabPanelController === e;
  let r = document.activeElement;
  return r instanceof Node
    ? t.contains(r) || n?.contains(r) === !0
      ? ((J = t), !0)
      : r instanceof Element && r.closest(`[role="tabpanel"]`) != null
        ? !1
        : (J?.isConnected === !1 && (J = null), J == null || J === t)
    : !0;
}
var tt,
  K,
  q,
  J,
  nt,
  rt = e(() => {
    ((tt = B()),
      Ae(),
      w(),
      (K = t(a(), 1)),
      k(),
      s(),
      Re(),
      Ne(),
      je(),
      be(),
      U(),
      Ye(),
      (q = z()),
      (J = null),
      (nt = {
        background: `var(--color-surface)`,
        foreground: `var(--color-text)`,
        modified: `light-dark(#009fff, #69b1ff)`,
      }));
  });
function it(e, t, n) {
  let r = e.shadowRoot?.querySelector(`[data-line="${t}"]`),
    i = Array.from(r?.querySelectorAll(`[data-char]`) ?? []),
    a = Math.max(0, n - 1),
    o =
      i.find((e, t) => {
        let n = Number.parseInt(e.dataset.char ?? ``, 10),
          r = Number.parseInt(i[t + 1]?.dataset.char ?? ``, 10);
        return Number.isInteger(n) && n <= a && (!Number.isInteger(r) || a < r);
      }) ?? i.at(-1),
    s = o?.firstChild,
    c = Number.parseInt(o?.dataset.char ?? ``, 10);
  if (!(s instanceof Text) || !Number.isInteger(c)) return !1;
  let l = at(e);
  if (l == null) return !1;
  let u = e.ownerDocument.createRange();
  return (
    u.setStart(s, Math.min(Math.max(0, a - c), s.length)),
    u.collapse(!0),
    l.removeAllRanges(),
    l.addRange(u),
    !0
  );
}
function at(e) {
  if (!(e instanceof Node)) return document.getSelection();
  let t = e instanceof HTMLElement && e.shadowRoot != null ? e.shadowRoot : e.getRootNode();
  return t instanceof ShadowRoot && ot(t)
    ? t.getSelection()
    : (e.ownerDocument?.getSelection() ?? null);
}
function ot(e) {
  return `getSelection` in e && typeof e.getSelection == `function`;
}
var st = e(() => {});
function ct(e, t, n) {
  let r = e.entries.slice(0, e.index + 1);
  return (
    ut(r.at(-1), t) || r.push(t), ut(r.at(-1), n) || r.push(n), { entries: r, index: r.length - 1 }
  );
}
function lt(e, t) {
  let n = e.index + t,
    r = e.entries[n];
  return r == null ? null : { history: { entries: e.entries, index: n }, location: r };
}
function ut(e, t) {
  return (
    e?.path === t.path &&
    e.position.line === t.position.line &&
    e.position.character === t.position.character
  );
}
var Y,
  dt = e(() => {
    (w(),
      U(),
      (Y = xe(R, (e) => ({ entries: [], index: -1 }), void 0, {
        excludeFieldsFromKey: [`contents`, `languageId`, `path`],
      })));
  });
function X(e, t) {
  let n = Number.parseInt(e.dataset.char ?? ``, 10),
    r = Number.parseInt(t.dataset.line ?? ``, 10) - 1;
  return Number.isInteger(n) && Number.isInteger(r) && r >= 0
    ? { element: e, position: { character: n, line: r } }
    : null;
}
function ft(e, t, n, r, i = 0) {
  (mt(t), xt(t));
  let a = e.get(t.hoverTarget$);
  (a != null && delete a.element.dataset.languageSymbolHighlight, e.set(t.hoverTarget$, null));
  let { contents: o } = n;
  t.hoverRequestVersion += 1;
  let { hoverRequestVersion: s } = t;
  t.hoverTimeout = {
    element: r.element,
    timeout: setTimeout(() => {
      ((t.hoverTimeout = null),
        e.set(t.hoverTarget$, { ...r, contents: o, requestVersion: s, retryCount: i }));
    }, St),
  };
}
function pt(e, t, n) {
  (mt(t),
    (t.hoverCloseTimeout = setTimeout(() => {
      ((t.hoverCloseTimeout = null), n.isConnected && _t(e, t, n));
    }, 100)));
}
function mt(e) {
  e.hoverCloseTimeout != null && (clearTimeout(e.hoverCloseTimeout), (e.hoverCloseTimeout = null));
}
function ht(e, t) {
  (mt(t), xt(t));
  let n = e.get(t.hoverTarget$);
  n != null && (delete n.element.dataset.languageSymbolHighlight, e.set(t.hoverTarget$, null));
}
function gt(e, t) {
  t ? (e.dataset.languageSymbolHighlight = ``) : delete e.dataset.languageSymbolHighlight;
}
function _t(e, t, n) {
  (delete n.dataset.languageSymbolHighlight,
    t.hoverTimeout?.element === n &&
      (clearTimeout(t.hoverTimeout.timeout), (t.hoverTimeout = null)),
    e.get(t.hoverTarget$)?.element === n && e.set(t.hoverTarget$, null));
}
async function vt(e, t, n, r, i, a) {
  let o = Symbol();
  ((t.locationRequest = o), e.set(t.locationList$, null));
  let s = (await H.lsp?.locations({ ...n, kind: r, position: i.position })) ?? [];
  t.locationRequest === o &&
    ((t.locationRequest = null),
    s.length === 1 && s[0] != null
      ? yt(e, n, i, s[0], a)
      : s.length > 1 && e.set(t.locationList$, { kind: r, locations: s, target: i }));
}
function yt(e, t, n, r, i) {
  (e.set(Y, t, (e) =>
    ct(e, { path: t.path, position: n.position }, { path: r.path, position: r.range.start }),
  ),
    i(r));
}
function bt(e, t) {
  ((t.locationRequest = null), e.set(t.locationList$, null));
}
function xt(e) {
  e.hoverTimeout != null &&
    (clearTimeout(e.hoverTimeout.timeout),
    delete e.hoverTimeout.element.dataset.languageSymbolHighlight,
    (e.hoverTimeout = null));
}
var St,
  Ct,
  wt,
  Tt,
  Et = e(() => {
    (w(),
      le(),
      U(),
      A(),
      dt(),
      (St = 300),
      (Ct = we(R, (e, { signal: t }) => ({
        contextTarget$: t(null),
        hoverCloseTimeout: null,
        hoverRequestVersion: 0,
        hoverTarget$: t(null),
        hoverTimeout: null,
        locationList$: t(null),
        locationRequest: null,
      }))),
      (wt = j(
        R,
        (e) => ({
          enabled: H?.lsp != null,
          queryFn: async () =>
            (await H?.lsp?.capabilities({
              hostId: e.hostId,
              languageId: e.languageId,
              path: e.path,
              workspaceRoot: e.workspaceRoot,
            })) ?? null,
          queryKey: [
            `review-file-language-capabilities`,
            e.hostId,
            e.languageId,
            e.workspaceRoot ?? e.path,
          ],
          staleTime: Oe.FIVE_SECONDS,
        }),
        { excludeFieldsFromKey: [`contents`] },
      )),
      (Tt = j(
        R,
        ({ contentsHash: e, languageFile: t, surfaceId: n }, { get: r }) => {
          let i = r(r(Ct, n).hoverTarget$);
          return {
            enabled: H?.lsp != null && i != null && i.contents === t.contents,
            queryFn: async () =>
              i == null || H?.lsp == null ? null : H.lsp.hover({ ...t, position: i.position }),
            queryKey: [
              `review-file-language-hover`,
              t.hostId,
              t.languageId,
              t.path,
              t.workspaceRoot,
              e,
              i?.requestVersion,
              i?.position.line,
              i?.position.character,
            ],
            staleTime: Oe.FIVE_SECONDS,
          };
        },
        { key: ({ contentsHash: e, surfaceId: t }) => `${t}\0${e}` },
      )));
  });
function Dt({ scope: e, surface: t, languageFile: n, locationKinds: r, onOpenLocation: i }) {
  let a = e.get(t.contextTarget$);
  return a == null
    ? []
    : kt
        .filter(({ kind: e }) => r.includes(e))
        .map(({ kind: r, message: o }) => ({
          id: r,
          message: o,
          onSelect: () => {
            (e.set(t.contextTarget$, null),
              _t(e, t, a.element),
              vt(e, t, n, r, a, i).catch(() => {}));
          },
        }));
}
var Ot,
  kt,
  At = e(() => {
    (k(),
      Et(),
      (Ot = ke({
        goToDefinition: {
          id: `review.fileLanguage.contextMenu.goToDefinition`,
          defaultMessage: `Go to Definition`,
          description: `Context menu action for opening a symbol definition in the file viewer`,
        },
        goToImplementations: {
          id: `review.fileLanguage.contextMenu.goToImplementations`,
          defaultMessage: `Go to Implementations`,
          description: `Context menu action for opening symbol implementations in the file viewer`,
        },
        goToReferences: {
          id: `review.fileLanguage.contextMenu.goToReferences`,
          defaultMessage: `Go to References`,
          description: `Context menu action for opening symbol references in the file viewer`,
        },
        goToTypeDefinition: {
          id: `review.fileLanguage.contextMenu.goToTypeDefinition`,
          defaultMessage: `Go to Type Definition`,
          description: `Context menu action for opening a symbol type definition in the file viewer`,
        },
      })),
      (kt = [
        { kind: `definition`, message: Ot.goToDefinition },
        { kind: `typeDefinition`, message: Ot.goToTypeDefinition },
        { kind: `implementation`, message: Ot.goToImplementations },
        { kind: `references`, message: Ot.goToReferences },
      ]));
  });
function jt(e) {
  let t = (0, Mt.c)(10),
    {
      children: r,
      getFallbackItems: i,
      languageFile: a,
      locationKinds: o,
      onOpenLocation: s,
      surface: c,
    } = e,
    l = n(R),
    u;
  t[0] !== i || t[1] !== a || t[2] !== o || t[3] !== s || t[4] !== l || t[5] !== c
    ? ((u = () => {
        let e = Dt({ scope: l, surface: c, languageFile: a, locationKinds: o, onOpenLocation: s });
        return e.length > 0 ? e : (i?.() ?? []);
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s),
      (t[4] = l),
      (t[5] = c),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== r || t[8] !== u
      ? ((d = (0, Nt.jsx)(F, { getItems: u, children: r })), (t[7] = r), (t[8] = u), (t[9] = d))
      : (d = t[9]),
    d
  );
}
var Mt,
  Nt,
  Pt = e(() => {
    ((Mt = B()), w(), f(), U(), At(), (Nt = z()));
  });
function Ft(e) {
  let t = (0, It.c)(8),
    { hover: n, language: r } = e,
    i;
  t[0] !== n.signature || t[1] !== r
    ? ((i = (0, Lt.jsx)(fe, {
        content: n.signature,
        language: r,
        shouldWrapCode: !0,
        showActionBar: !1,
        variant: `hover`,
      })),
      (t[0] = n.signature),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === n.documentation
    ? (a = t[4])
    : ((a =
        n.documentation == null
          ? null
          : (0, Lt.jsx)(Fe, {
              className: `text-secondary`,
              externalResourcePolicy: `restricted`,
              textStyle: { kind: `small` },
              children: n.documentation,
            })),
      (t[3] = n.documentation),
      (t[4] = a));
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = (0, Lt.jsxs)(`div`, {
          className: `flex flex-col gap-2 select-text`,
          children: [i, a],
        })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
var It,
  Lt,
  Rt = e(() => {
    ((It = B()), r(), Ie(), (Lt = z()));
  });
function zt(e) {
  let t = (0, Ut.c)(6),
    { languageFile: n, onOpenLocation: r, surface: i } = e,
    a = d(i.locationList$);
  if (a == null) return null;
  let o = `${a.kind}:${a.target.position.line}:${a.target.position.character}`,
    s;
  return (
    t[0] !== n || t[1] !== a || t[2] !== r || t[3] !== i || t[4] !== o
      ? ((s = (0, Z.jsx)(
          Bt,
          { languageFile: n, locationList: a, onOpenLocation: r, surface: i },
          o,
        )),
        (t[0] = n),
        (t[1] = a),
        (t[2] = r),
        (t[3] = i),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function Bt(e) {
  let t = (0, Ut.c)(71),
    { languageFile: r, locationList: i, onOpenLocation: a, surface: o } = e,
    s = n(R),
    c = T(),
    [l, d] = (0, Wt.useState)(100),
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b;
  t[0] !== c ||
  t[1] !== r.workspaceRoot ||
  t[2] !== i.kind ||
  t[3] !== i.locations.length ||
  t[4] !== i.target.element ||
  t[5] !== s ||
  t[6] !== o
    ? ((v = Ht(i.kind)),
      (y = { count: i.locations.length }),
      (b = r.workspaceRoot ?? void 0),
      (p = I),
      (h = !0),
      t[16] !== s || t[17] !== o
        ? ((g = (e) => {
            e || bt(s, o);
          }),
          (t[16] = s),
          (t[17] = o),
          (t[18] = g))
        : (g = t[18]),
      t[19] === i.target.element
        ? (_ = t[20])
        : ((_ = (0, Z.jsx)(_e, { virtualRef: { current: i.target.element } })),
          (t[19] = i.target.element),
          (t[20] = _)),
      (f = Se),
      (m = c.formatMessage(v, y)),
      (t[0] = c),
      (t[1] = r.workspaceRoot),
      (t[2] = i.kind),
      (t[3] = i.locations.length),
      (t[4] = i.target.element),
      (t[5] = s),
      (t[6] = o),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b))
    : ((f = t[7]),
      (p = t[8]),
      (m = t[9]),
      (h = t[10]),
      (g = t[11]),
      (_ = t[12]),
      (v = t[13]),
      (y = t[14]),
      (b = t[15]));
  let x;
  t[21] !== v || t[22] !== y
    ? ((x = (0, Z.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, Z.jsx)(u, { ...v, values: y }),
      })),
      (t[21] = v),
      (t[22] = y),
      (t[23] = x))
    : (x = t[23]);
  let S;
  t[24] === c
    ? (S = t[25])
    : ((S = c.formatMessage({
        id: `review.fileLanguage.locations.close`,
        defaultMessage: `Close locations`,
        description: `Accessible label for closing the file viewer symbol locations card`,
      })),
      (t[24] = c),
      (t[25] = S));
  let C;
  t[26] !== s || t[27] !== o
    ? ((C = () => {
        bt(s, o);
      }),
      (t[26] = s),
      (t[27] = o),
      (t[28] = C))
    : (C = t[28]);
  let w;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(se, { asset: Ee })), (t[29] = w))
    : (w = t[29]);
  let E;
  t[30] !== S || t[31] !== C
    ? ((E = (0, Z.jsx)(pe, {
        "aria-label": S,
        color: `ghostSecondary`,
        onClick: C,
        size: `icon`,
        children: w,
      })),
      (t[30] = S),
      (t[31] = C),
      (t[32] = E))
    : (E = t[32]);
  let D;
  t[33] !== x || t[34] !== E
    ? ((D = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between border-b border-default px-3 py-2`,
        children: [x, E],
      })),
      (t[33] = x),
      (t[34] = E),
      (t[35] = D))
    : (D = t[35]);
  let O;
  if (
    t[36] !== c ||
    t[37] !== r ||
    t[38] !== i.locations ||
    t[39] !== i.target ||
    t[40] !== a ||
    t[41] !== s ||
    t[42] !== o ||
    t[43] !== l ||
    t[44] !== b
  ) {
    let e;
    (t[46] !== c ||
    t[47] !== r ||
    t[48] !== i.target ||
    t[49] !== a ||
    t[50] !== s ||
    t[51] !== o ||
    t[52] !== b
      ? ((e = (e) => {
          let t = Ce(e.path, b),
            n = e.range.start.line + 1,
            l = e.range.start.character + 1;
          return (0, Z.jsxs)(
            `button`,
            {
              "aria-label": c.formatMessage(
                {
                  id: `review.fileLanguage.locations.open`,
                  defaultMessage: `Open {path}, line {line}, column {column}`,
                  description: `Accessible label for a location in the file viewer symbol locations card`,
                },
                { column: l, line: n, path: t },
              ),
              className: `flex cursor-interaction items-center gap-3 rounded-lg px-2 py-1.5 text-start text-sm hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover focus:outline-none`,
              onClick: () => {
                (bt(s, o), yt(s, r, i.target, e, a));
              },
              type: `button`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `min-w-0 flex-1 truncate font-mono text-default`,
                  children: t,
                }),
                (0, Z.jsx)(`span`, {
                  className: `shrink-0 font-mono text-xs text-secondary`,
                  children: (0, Z.jsx)(u, {
                    id: `review.fileLanguage.locations.lineAndColumn`,
                    defaultMessage: `{line}:{column}`,
                    description: `Line and column shown for a symbol location in the file viewer`,
                    values: { column: l, line: n },
                  }),
                }),
              ],
            },
            `${e.path}:${n}:${l}`,
          );
        }),
        (t[46] = c),
        (t[47] = r),
        (t[48] = i.target),
        (t[49] = a),
        (t[50] = s),
        (t[51] = o),
        (t[52] = b),
        (t[53] = e))
      : (e = t[53]),
      (O = i.locations.slice(0, l).map(e)),
      (t[36] = c),
      (t[37] = r),
      (t[38] = i.locations),
      (t[39] = i.target),
      (t[40] = a),
      (t[41] = s),
      (t[42] = o),
      (t[43] = l),
      (t[44] = b),
      (t[45] = O));
  } else O = t[45];
  let k;
  t[54] !== i.locations.length || t[55] !== l
    ? ((k =
        l < i.locations.length
          ? (0, Z.jsx)(pe, {
              color: `ghostSecondary`,
              onClick: () => {
                d(Vt);
              },
              children: (0, Z.jsx)(u, {
                id: `review.fileLanguage.locations.loadMore`,
                defaultMessage: `Load more locations`,
                description: `Button to reveal the next page of symbol references or definitions in the file viewer`,
              }),
            })
          : null),
      (t[54] = i.locations.length),
      (t[55] = l),
      (t[56] = k))
    : (k = t[56]);
  let A;
  t[57] !== O || t[58] !== k
    ? ((A = (0, Z.jsxs)(`div`, {
        className: `flex max-h-72 flex-col overflow-y-auto p-1`,
        children: [O, k],
      })),
      (t[57] = O),
      (t[58] = k),
      (t[59] = A))
    : (A = t[59]);
  let j;
  t[60] !== f || t[61] !== m || t[62] !== D || t[63] !== A
    ? ((j = (0, Z.jsxs)(f, {
        "aria-label": m,
        align: `start`,
        className: `overflow-hidden`,
        disablePadding: !0,
        side: `top`,
        size: `large`,
        children: [D, A],
      })),
      (t[60] = f),
      (t[61] = m),
      (t[62] = D),
      (t[63] = A),
      (t[64] = j))
    : (j = t[64]);
  let M;
  return (
    t[65] !== p || t[66] !== j || t[67] !== h || t[68] !== g || t[69] !== _
      ? ((M = (0, Z.jsxs)(p, { open: h, onOpenChange: g, children: [_, j] })),
        (t[65] = p),
        (t[66] = j),
        (t[67] = h),
        (t[68] = g),
        (t[69] = _),
        (t[70] = M))
      : (M = t[70]),
    M
  );
}
function Vt(e) {
  return e + 100;
}
function Ht(e) {
  switch (e) {
    case `definition`:
      return Gt.definitions;
    case `implementation`:
      return Gt.implementations;
    case `references`:
      return Gt.references;
    case `typeDefinition`:
      return Gt.typeDefinitions;
  }
}
var Ut,
  Wt,
  Z,
  Gt,
  Kt = e(() => {
    ((Ut = B()),
      re(),
      w(),
      (Wt = t(a(), 1)),
      k(),
      i(),
      L(),
      Te(),
      ge(),
      U(),
      Et(),
      (Z = z()),
      (Gt = ke({
        definitions: {
          id: `review.fileLanguage.locations.definitions`,
          defaultMessage: `{count, plural, one {# definition} other {# definitions}}`,
          description: `Title for the file viewer card listing symbol definitions`,
        },
        implementations: {
          id: `review.fileLanguage.locations.implementations`,
          defaultMessage: `{count, plural, one {# implementation} other {# implementations}}`,
          description: `Title for the file viewer card listing symbol implementations`,
        },
        references: {
          id: `review.fileLanguage.locations.references`,
          defaultMessage: `{count, plural, one {# reference} other {# references}}`,
          description: `Title for the file viewer card listing symbol references`,
        },
        typeDefinitions: {
          id: `review.fileLanguage.locations.typeDefinitions`,
          defaultMessage: `{count, plural, one {# type definition} other {# type definitions}}`,
          description: `Title for the file viewer card listing symbol type definitions`,
        },
      })));
  });
function qt(e) {
  let t = (0, Xt.c)(42),
    {
      definitionNavigationEnabled: r,
      enabled: i,
      isActive: a,
      languageFile: o,
      onOpenLocation: s,
      panelId: c,
      surface: l,
      surfaceRef: u,
    } = e,
    d = n(R),
    f = C(Y, o),
    p;
  t[0] !== r || t[1] !== o || t[2] !== s || t[3] !== d || t[4] !== l || t[5] !== u
    ? ((p = function (e) {
        if (!r || s == null || u.current == null) return !1;
        let t = at(e),
          n =
            t?.focusNode instanceof HTMLElement
              ? t.focusNode
              : (t?.focusNode?.parentElement ?? null),
          i = n?.closest(`[data-char]`),
          a = n?.closest(`[data-line]`);
        if (i == null || a == null || !Yt(i, u.current)) return !1;
        let c = X(i, a);
        return c == null
          ? !1
          : (_t(d, l, c.element), vt(d, l, o, `definition`, c, s).catch(Jt), !0);
      }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s),
      (t[3] = d),
      (t[4] = l),
      (t[5] = u),
      (t[6] = p))
    : (p = t[6]);
  let m = p,
    h;
  t[7] !== o || t[8] !== s || t[9] !== d
    ? ((h = function (e) {
        if (s == null) return;
        let t = lt(d.get(Y, o), e);
        t != null &&
          (d.set(Y, o, t.history),
          s({
            path: t.location.path,
            range: { end: t.location.position, start: t.location.position },
          }));
      }),
      (t[7] = o),
      (t[8] = s),
      (t[9] = d),
      (t[10] = h))
    : (h = t[10]);
  let g = h,
    _;
  t[11] !== a || t[12] !== c || t[13] !== u
    ? ((_ = function (e) {
        if (!a) return !1;
        if (e?.originPanel != null) return c == null || e.originPanel === c;
        if (c == null) return !0;
        let t = u.current;
        return (
          t != null &&
          (Yt(document.activeElement, t) || Yt(at(document.activeElement)?.focusNode ?? null, t))
        );
      }),
      (t[11] = a),
      (t[12] = c),
      (t[13] = u),
      (t[14] = _))
    : (_ = t[14]);
  let v = _,
    y;
  t[15] !== c || t[16] !== u
    ? ((y = function (e, t) {
        if (t?.originPanel != null || c == null) return !0;
        let n = u.current;
        if (n == null) return !1;
        let r = e.composedPath()[0] ?? e.target ?? document.activeElement;
        return (r instanceof Node && Yt(r, n)) || Yt(at(r)?.focusNode ?? null, n);
      }),
      (t[15] = c),
      (t[16] = u),
      (t[17] = y))
    : (y = t[17]);
  let b = y,
    x;
  t[18] === m
    ? (x = t[19])
    : ((x = () => {
        m(document.activeElement);
      }),
      (t[18] = m),
      (t[19] = x));
  let S;
  t[20] === m
    ? (S = t[21])
    : ((S = (e) => {
        let t = m(e.composedPath()[0] ?? e.target ?? document.activeElement);
        return (t && e.stopPropagation(), t);
      }),
      (t[20] = m),
      (t[21] = S));
  let w;
  (t[22] !== r || t[23] !== v || t[24] !== S
    ? ((w = { enabled: r, isActive: v, keyboardHandler: S }),
      (t[22] = r),
      (t[23] = v),
      (t[24] = S),
      (t[25] = w))
    : (w = t[25]),
    N(`file.goToDefinition`, x, w));
  let T;
  t[26] === g
    ? (T = t[27])
    : ((T = () => {
        g(-1);
      }),
      (t[26] = g),
      (t[27] = T));
  let E = i && s != null && f.index > 0,
    D;
  t[28] === b ? (D = t[29]) : ((D = (e, t) => (b(e, t) ? void 0 : !1)), (t[28] = b), (t[29] = D));
  let O;
  (t[30] !== v || t[31] !== D || t[32] !== E
    ? ((O = { enabled: E, isActive: v, keyboardHandler: D }),
      (t[30] = v),
      (t[31] = D),
      (t[32] = E),
      (t[33] = O))
    : (O = t[33]),
    N(`file.navigateBack`, T, O));
  let k;
  t[34] === g
    ? (k = t[35])
    : ((k = () => {
        g(1);
      }),
      (t[34] = g),
      (t[35] = k));
  let A = i && s != null && f.index < f.entries.length - 1,
    j;
  t[36] === b ? (j = t[37]) : ((j = (e, t) => (b(e, t) ? void 0 : !1)), (t[36] = b), (t[37] = j));
  let M;
  return (
    t[38] !== v || t[39] !== A || t[40] !== j
      ? ((M = { enabled: A, isActive: v, keyboardHandler: j }),
        (t[38] = v),
        (t[39] = A),
        (t[40] = j),
        (t[41] = M))
      : (M = t[41]),
    N(`file.navigateForward`, k, M),
    null
  );
}
function Jt() {}
function Yt(e, t) {
  let n = e;
  for (; n != null;) {
    if (t.contains(n)) return !0;
    let e = n.getRootNode();
    n = e instanceof ShadowRoot ? e.host : null;
  }
  return !1;
}
var Xt,
  Zt = e(() => {
    ((Xt = B()), w(), s(), U(), st(), Et(), dt());
  });
function Qt(e) {
  let t = (0, on.c)(10),
    {
      children: n,
      getFallbackContextMenuItems: r,
      isActive: i,
      languageFile: a,
      onOpenLocation: o,
      panelId: s,
      withContextMenu: c,
    } = e,
    l = i === void 0 || i,
    u = c !== void 0 && c,
    d = (0, sn.useId)(),
    f = C(ce, `1932174607`) && l,
    p;
  return (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== l ||
    t[3] !== a ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== d ||
    t[7] !== f ||
    t[8] !== u
      ? ((p = (0, Q.jsx)($t, {
          enabled: f,
          getFallbackContextMenuItems: r,
          isActive: l,
          languageFile: a,
          onOpenLocation: o,
          panelId: s,
          surfaceId: d,
          withContextMenu: u,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = l),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = d),
        (t[7] = f),
        (t[8] = u),
        (t[9] = p))
      : (p = t[9]),
    p
  );
}
function $t(e) {
  let t = (0, on.c)(75),
    {
      children: r,
      enabled: i,
      getFallbackContextMenuItems: a,
      isActive: o,
      languageFile: s,
      onOpenLocation: c,
      panelId: l,
      surfaceId: u,
      withContextMenu: d,
    } = e,
    f = n(R),
    p = x(Ct, u),
    m = (0, sn.useRef)(null),
    h;
  t[0] !== f || t[1] !== p
    ? ((h = () => () => {
        (ht(f, p), bt(f, p));
      }),
      (t[0] = f),
      (t[1] = p),
      (t[2] = h))
    : (h = t[2]);
  let g;
  (t[3] !== s.contents || t[4] !== f || t[5] !== p
    ? ((g = [f, p, s.contents]), (t[3] = s.contents), (t[4] = f), (t[5] = p), (t[6] = g))
    : (g = t[6]),
    (0, sn.useEffect)(h, g));
  let _;
  t[7] === i ? (_ = t[8]) : ((_ = { enabled: i }), (t[7] = i), (t[8] = _));
  let { data: v } = C(wt, s, _),
    y = i && v?.hover === !0,
    b = i && (v === void 0 || y),
    S,
    w,
    T,
    E,
    D;
  if (
    t[9] !== v?.locationKinds ||
    t[10] !== r ||
    t[11] !== i ||
    t[12] !== b ||
    t[13] !== s ||
    t[14] !== c ||
    t[15] !== f ||
    t[16] !== p
  ) {
    ((E = i ? (v?.locationKinds ?? []) : []),
      (w = c != null && E.includes(`definition`)),
      (S = c != null && E.length > 0));
    let e;
    t[22] !== s || t[23] !== c || t[24] !== f || t[25] !== p
      ? ((e = function (e, t) {
          c != null && (_t(f, p, t.element), vt(f, p, s, e, t, c).catch(en));
        }),
        (t[22] = s),
        (t[23] = c),
        (t[24] = f),
        (t[25] = p),
        (t[26] = e))
      : (e = t[26]);
    let n = e,
      a = function (e, t) {
        !w ||
          !(t.metaKey || t.ctrlKey) ||
          (t.preventDefault(), n(`definition`, { element: e.tokenElement, position: tn(e) }));
      },
      o;
    t[27] !== s || t[28] !== f || t[29] !== p
      ? ((o = function (e) {
          ft(f, p, s, { element: e.tokenElement, position: tn(e) });
        }),
        (t[27] = s),
        (t[28] = f),
        (t[29] = p),
        (t[30] = o))
      : (o = t[30]);
    let l = o,
      u;
    t[31] !== f || t[32] !== p
      ? ((u = function (e) {
          pt(f, p, e.tokenElement);
        }),
        (t[31] = f),
        (t[32] = p),
        (t[33] = u))
      : (u = t[33]);
    let d = u,
      m;
    (t[34] !== S || t[35] !== f || t[36] !== p
      ? ((m = function (e) {
          let t = S ? nn(e.nativeEvent.composedPath()) : null;
          f.set(p.contextTarget$, t);
        }),
        (t[34] = S),
        (t[35] = f),
        (t[36] = p),
        (t[37] = m))
      : (m = t[37]),
      (T = m),
      (D = r({
        definitionNavigationEnabled: w,
        fileOptions: {
          onTokenClick: w ? a : void 0,
          onTokenEnter: b ? l : void 0,
          onTokenLeave: b ? d : void 0,
        },
        getContextMenuItems: () =>
          c == null
            ? []
            : Dt({ scope: f, surface: p, languageFile: s, locationKinds: E, onOpenLocation: c }),
        onContextMenu: T,
      })),
      (t[9] = v?.locationKinds),
      (t[10] = r),
      (t[11] = i),
      (t[12] = b),
      (t[13] = s),
      (t[14] = c),
      (t[15] = f),
      (t[16] = p),
      (t[17] = S),
      (t[18] = w),
      (t[19] = T),
      (t[20] = E),
      (t[21] = D));
  } else ((S = t[17]), (w = t[18]), (T = t[19]), (E = t[20]), (D = t[21]));
  let O = D,
    k = d ? `h-full` : `contents`,
    A = d && S ? T : void 0,
    j;
  t[38] !== O || t[39] !== k || t[40] !== A
    ? ((j = (0, Q.jsx)(`div`, { ref: m, className: k, onContextMenu: A, children: O })),
      (t[38] = O),
      (t[39] = k),
      (t[40] = A),
      (t[41] = j))
    : (j = t[41]);
  let M = j,
    N;
  t[42] !== S ||
  t[43] !== a ||
  t[44] !== s ||
  t[45] !== E ||
  t[46] !== c ||
  t[47] !== p ||
  t[48] !== M ||
  t[49] !== d
    ? ((N =
        d && S
          ? (0, Q.jsx)(jt, {
              getFallbackItems: a,
              languageFile: s,
              locationKinds: E,
              onOpenLocation: c,
              surface: p,
              children: M,
            })
          : M),
      (t[42] = S),
      (t[43] = a),
      (t[44] = s),
      (t[45] = E),
      (t[46] = c),
      (t[47] = p),
      (t[48] = M),
      (t[49] = d),
      (t[50] = N))
    : (N = t[50]);
  let P;
  t[51] !== w ||
  t[52] !== i ||
  t[53] !== o ||
  t[54] !== s ||
  t[55] !== c ||
  t[56] !== l ||
  t[57] !== p
    ? ((P = (0, Q.jsx)(qt, {
        definitionNavigationEnabled: w,
        enabled: i,
        isActive: o,
        languageFile: s,
        onOpenLocation: c,
        panelId: l,
        surface: p,
        surfaceRef: m,
      })),
      (t[51] = w),
      (t[52] = i),
      (t[53] = o),
      (t[54] = s),
      (t[55] = c),
      (t[56] = l),
      (t[57] = p),
      (t[58] = P))
    : (P = t[58]);
  let F;
  t[59] !== i || t[60] !== y || t[61] !== s || t[62] !== p || t[63] !== u
    ? ((F = i
        ? (0, Q.jsx)(an, {
            languageFile: s,
            retryEnabled: y,
            surface: p,
            surfaceId: u,
            surfaceRef: m,
          })
        : null),
      (t[59] = i),
      (t[60] = y),
      (t[61] = s),
      (t[62] = p),
      (t[63] = u),
      (t[64] = F))
    : (F = t[64]);
  let ee;
  t[65] !== i || t[66] !== s || t[67] !== c || t[68] !== p
    ? ((ee =
        !i || c == null
          ? null
          : (0, Q.jsx)(zt, { languageFile: s, onOpenLocation: c, surface: p })),
      (t[65] = i),
      (t[66] = s),
      (t[67] = c),
      (t[68] = p),
      (t[69] = ee))
    : (ee = t[69]);
  let te;
  return (
    t[70] !== F || t[71] !== ee || t[72] !== N || t[73] !== P
      ? ((te = (0, Q.jsxs)(Q.Fragment, { children: [N, P, F, ee] })),
        (t[70] = F),
        (t[71] = ee),
        (t[72] = N),
        (t[73] = P),
        (t[74] = te))
      : (te = t[74]),
    te
  );
}
function en() {}
function tn(e) {
  return { character: e.lineCharStart, line: e.lineNumber - 1 };
}
function nn(e) {
  let t = e.find((e) => e instanceof HTMLElement && e.dataset.char != null),
    n = e.find((e) => e instanceof HTMLElement && e.dataset.line != null);
  return t == null || n == null ? null : X(t, n);
}
function rn(e) {
  if (e == null) return null;
  let t = [e];
  for (let e = 0; e < t.length; e += 1) {
    let n = t[e],
      r = n?.querySelector(`[data-char]:hover`),
      i = r?.closest(`[data-line]`);
    if (r != null && i != null) return X(r, i);
    for (let e of n?.querySelectorAll(`*`) ?? []) e.shadowRoot != null && t.push(e.shadowRoot);
  }
  return null;
}
function an(e) {
  let t = (0, on.c)(61),
    { languageFile: r, retryEnabled: i, surface: a, surfaceId: o, surfaceRef: s } = e,
    c = n(R),
    l = d(a.hoverTarget$),
    f;
  t[0] === r.contents ? (f = t[1]) : ((f = ae(r.contents)), (t[0] = r.contents), (t[1] = f));
  let p = f,
    m;
  t[2] !== p || t[3] !== r || t[4] !== o
    ? ((m = { contentsHash: p, languageFile: r, surfaceId: o }),
      (t[2] = p),
      (t[3] = r),
      (t[4] = o),
      (t[5] = m))
    : (m = t[5]);
  let { data: h, isLoading: g } = C(Tt, m),
    _;
  t[6] === r.path ? (_ = t[7]) : ((_ = ze(r.path)), (t[6] = r.path), (t[7] = _));
  let v = _,
    y = h == null && !g && i && l != null && l.retryCount < 2,
    x,
    S;
  (t[8] !== h ||
  t[9] !== l ||
  t[10] !== r ||
  t[11] !== i ||
  t[12] !== c ||
  t[13] !== a ||
  t[14] !== s
    ? ((x = () => {
        if (h === void 0 || h != null || !i || l == null || l.retryCount >= 2) return;
        let e = setTimeout(() => {
          if (c.get(a.hoverTarget$) !== l) return;
          let e = rn(s.current) ?? (l.element.isConnected ? l : null);
          e?.position.line !== l.position.line ||
            e.position.character !== l.position.character ||
            ft(c, a, r, e, l.retryCount + 1);
        }, cn);
        return () => clearTimeout(e);
      }),
      (S = [h, l, r, i, c, a, s]),
      (t[8] = h),
      (t[9] = l),
      (t[10] = r),
      (t[11] = i),
      (t[12] = c),
      (t[13] = a),
      (t[14] = s),
      (t[15] = x),
      (t[16] = S))
    : ((x = t[15]), (S = t[16])),
    (0, sn.useEffect)(x, S));
  let w;
  t[17] !== h ||
  t[18] !== l ||
  t[19] !== g ||
  t[20] !== y ||
  t[21] !== c ||
  t[22] !== a.hoverTarget$ ||
  t[23] !== s
    ? ((w = () => {
        if ((h == null && !g && !y) || l == null || l.element.isConnected) return;
        let e = rn(s.current);
        e?.position.line === l.position.line &&
          e.position.character === l.position.character &&
          c.set(a.hoverTarget$, { ...l, element: e.element });
      }),
      (t[17] = h),
      (t[18] = l),
      (t[19] = g),
      (t[20] = y),
      (t[21] = c),
      (t[22] = a.hoverTarget$),
      (t[23] = s),
      (t[24] = w))
    : (w = t[24]);
  let T;
  (t[25] !== h ||
  t[26] !== l ||
  t[27] !== g ||
  t[28] !== y ||
  t[29] !== c ||
  t[30] !== a ||
  t[31] !== s
    ? ((T = [h, l, g, y, c, a, s]),
      (t[25] = h),
      (t[26] = l),
      (t[27] = g),
      (t[28] = y),
      (t[29] = c),
      (t[30] = a),
      (t[31] = s),
      (t[32] = T))
    : (T = t[32]),
    (0, sn.useEffect)(w, T));
  let E, D;
  if (
    (t[33] !== h || t[34] !== l || t[35] !== g || t[36] !== y || t[37] !== r.contents
      ? ((E = () => {
          if ((h == null && !g && !y) || l == null || l.contents !== r.contents) return;
          let e = l.element;
          return (
            gt(e, !0),
            () => {
              gt(e, !1);
            }
          );
        }),
        (D = [h, l, g, y, r.contents]),
        (t[33] = h),
        (t[34] = l),
        (t[35] = g),
        (t[36] = y),
        (t[37] = r.contents),
        (t[38] = E),
        (t[39] = D))
      : ((E = t[38]), (D = t[39])),
    (0, sn.useEffect)(E, D),
    (h == null && !g && !y) || l == null || l.contents !== r.contents)
  )
    return null;
  let O;
  t[40] !== c || t[41] !== a
    ? ((O = (e) => {
        e || ht(c, a);
      }),
      (t[40] = c),
      (t[41] = a),
      (t[42] = O))
    : (O = t[42]);
  let k;
  t[43] === a ? (k = t[44]) : ((k = () => mt(a)), (t[43] = a), (t[44] = k));
  let A;
  t[45] !== l.element || t[46] !== c || t[47] !== a
    ? ((A = () => pt(c, a, l.element)), (t[45] = l.element), (t[46] = c), (t[47] = a), (t[48] = A))
    : (A = t[48]);
  let j;
  t[49] !== h || t[50] !== v
    ? ((j =
        h == null
          ? (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-secondary select-none`,
              role: `status`,
              children: [
                (0, Q.jsx)(de, { as: `span`, className: `icon-xxs` }),
                (0, Q.jsx)(u, {
                  id: `review.fileLanguage.hover.loading`,
                  defaultMessage: `Loading type information…`,
                  description: `Status shown in a code hover while type information is loading from a language server`,
                }),
              ],
            })
          : (0, Q.jsx)(Ft, { hover: h, language: v === `tsx` ? `typescript` : v })),
      (t[49] = h),
      (t[50] = v),
      (t[51] = j))
    : (j = t[51]);
  let M;
  t[52] !== k || t[53] !== A || t[54] !== j
    ? ((M = (0, Q.jsx)(`div`, { onPointerEnter: k, onPointerLeave: A, children: j })),
      (t[52] = k),
      (t[53] = A),
      (t[54] = j),
      (t[55] = M))
    : (M = t[55]);
  let N;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Q.jsx)(`span`, { "aria-hidden": !0 })), (t[56] = N))
    : (N = t[56]);
  let P;
  return (
    t[57] !== l.element || t[58] !== O || t[59] !== M
      ? ((P = (0, Q.jsx)(b, {
          disableHoverOpen: !0,
          forceMount: !0,
          interactive: !0,
          open: !0,
          onOpenChange: O,
          positioningElement: l.element,
          side: `top`,
          tooltipContent: M,
          variant: `rich`,
          children: N,
        })),
        (t[57] = l.element),
        (t[58] = O),
        (t[59] = M),
        (t[60] = P))
      : (P = t[60]),
    P
  );
}
var on,
  sn,
  Q,
  cn,
  ln = e(() => {
    ((on = B()),
      w(),
      (sn = t(a(), 1)),
      k(),
      S(),
      v(),
      U(),
      me(),
      Me(),
      De(),
      Pt(),
      At(),
      Et(),
      Ve(),
      Rt(),
      Kt(),
      Zt(),
      (Q = z()),
      (cn = 500));
  });
function un(e) {
  let t = (0, vn.c)(36),
    {
      cwd: n,
      hostId: r,
      onSelectFile: i,
      path: a,
      pathActions: o,
      trailingContent: s,
      workspaceRoot: l,
    } = e,
    u = T(),
    d,
    f,
    m,
    g,
    _,
    v,
    y;
  if (t[0] !== n || t[1] !== r || t[2] !== u || t[3] !== i || t[4] !== a || t[5] !== l) {
    y = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = a == null ? [hn(l ?? n)] : W({ cwd: n, path: a, workspaceRoot: l });
      if (e.length === 0) {
        y = null;
        break bb0;
      }
      let o = e.join(`/`),
        s = a == null ? o : ve(h({ cwd: n, path: a, workspaceRoot: l })),
        b;
      t[13] !== n || t[14] !== a || t[15] !== l
        ? ((b = a == null || l == null ? null : c({ cwd: n, path: a, workspaceRoot: l })),
          (t[13] = n),
          (t[14] = a),
          (t[15] = l),
          (t[16] = b))
        : (b = t[16]);
      let x = b;
      (t[17] === u
        ? (_ = t[18])
        : ((_ = u.formatMessage({
            id: `review.fileSource.breadcrumb.ariaLabel`,
            defaultMessage: `File path`,
            description: `Accessible label for breadcrumbs above a workspace file preview`,
          })),
          (t[17] = u),
          (t[18] = _)),
        (v = `group flex h-toolbar-pane shrink-0 items-center gap-2 border-b border-default bg-surface px-2 select-none`),
        (g = `hide-scrollbar flex min-w-0 flex-row-reverse items-center overflow-x-auto px-2`),
        (d = `flex flex-1 items-center gap-1 text-xs text-secondary select-text`),
        (f = (e) => {
          let t = _n(e.currentTarget);
          t != null && (e.preventDefault(), e.clipboardData.setData(`text/plain`, t === o ? s : t));
        }),
        (m = e.map((t, n) => {
          let a = n === e.length - 1,
            o = x?.[n],
            s = O(`whitespace-nowrap`, a && `font-medium text-default`);
          return (0, $.jsxs)(
            `li`,
            {
              className: `flex shrink-0 items-center gap-1`,
              children: [
                o == null || r == null || i == null || l == null
                  ? (0, $.jsx)(`span`, { className: s, children: t })
                  : (0, $.jsx)(dn, {
                      activePath: o.activePath,
                      directoryPath: o.directoryPath,
                      hostId: r,
                      shouldExpandActivePath: !a,
                      label: t,
                      labelClassName: s,
                      onSelectFile: i,
                      root: l,
                    }),
                a
                  ? null
                  : (0, $.jsx)(p, {
                      "aria-hidden": !0,
                      className: `icon-2xs shrink-0 text-tertiary`,
                    }),
              ],
            },
            `${n}:${t}`,
          );
        })));
    }
    ((t[0] = n),
      (t[1] = r),
      (t[2] = u),
      (t[3] = i),
      (t[4] = a),
      (t[5] = l),
      (t[6] = d),
      (t[7] = f),
      (t[8] = m),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v),
      (t[12] = y));
  } else ((d = t[6]), (f = t[7]), (m = t[8]), (g = t[9]), (_ = t[10]), (v = t[11]), (y = t[12]));
  if (y !== Symbol.for(`react.early_return_sentinel`)) return y;
  let b;
  t[19] !== d || t[20] !== f || t[21] !== m
    ? ((b = (0, $.jsx)(`ol`, { className: d, onCopy: f, children: m })),
      (t[19] = d),
      (t[20] = f),
      (t[21] = m),
      (t[22] = b))
    : (b = t[22]);
  let x;
  t[23] !== g || t[24] !== b
    ? ((x = (0, $.jsx)(`div`, { className: g, children: b })),
      (t[23] = g),
      (t[24] = b),
      (t[25] = x))
    : (x = t[25]);
  let S;
  t[26] === o
    ? (S = t[27])
    : ((S =
        o == null
          ? null
          : (0, $.jsx)(`div`, { className: `flex shrink-0 items-center gap-1.5`, children: o })),
      (t[26] = o),
      (t[27] = S));
  let C;
  t[28] === s
    ? (C = t[29])
    : ((C =
        s == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `ms-auto flex shrink-0 items-center gap-1.5`,
              children: s,
            })),
      (t[28] = s),
      (t[29] = C));
  let w;
  return (
    t[30] !== S || t[31] !== C || t[32] !== _ || t[33] !== v || t[34] !== x
      ? ((w = (0, $.jsxs)(`nav`, { "aria-label": _, className: v, children: [x, S, C] })),
        (t[30] = S),
        (t[31] = C),
        (t[32] = _),
        (t[33] = v),
        (t[34] = x),
        (t[35] = w))
      : (w = t[35]),
    w
  );
}
function dn(e) {
  let t = (0, vn.c)(29),
    {
      activePath: n,
      directoryPath: r,
      hostId: i,
      shouldExpandActivePath: a,
      label: o,
      labelClassName: s,
      onSelectFile: c,
      root: l,
    } = e,
    [u, d] = (0, yn.useState)(!1),
    f;
  t[0] === l ? (f = t[1]) : ((f = ie(l)), (t[0] = l), (t[1] = f));
  let p = a ? `workspace` : `file`,
    m;
  t[2] !== n || t[3] !== l
    ? ((m = n == null ? l : P(l, ...n.split(`/`))), (t[2] = n), (t[3] = l), (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] === s
    ? (h = t[6])
    : ((h = O(
        s,
        `cursor-interaction outline-none hover:text-default focus-visible:ring-2 focus-visible:ring-ring`,
      )),
      (t[5] = s),
      (t[6] = h));
  let g;
  t[7] !== o || t[8] !== h
    ? ((g = (0, $.jsx)(V, {
        asChild: !0,
        children: (0, $.jsx)(`button`, { type: `button`, className: h, children: o }),
      })),
      (t[7] = o),
      (t[8] = h),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== i || t[11] !== f || t[12] !== p || t[13] !== m || t[14] !== g
    ? ((_ = (0, $.jsx)(Ge, { cwd: f, hostId: i, openMode: p, path: m, children: g })),
      (t[10] = i),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m),
      (t[14] = g),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  t[16] === c
    ? (v = t[17])
    : ((v = (e, t) => {
        (d(!1), c(e, t));
      }),
      (t[16] = c),
      (t[17] = v));
  let y;
  t[18] !== n || t[19] !== r || t[20] !== i || t[21] !== l || t[22] !== a || t[23] !== v
    ? ((y = (0, $.jsx)(Se, {
        className: `h-80`,
        opaque: !0,
        sideOffset: 1,
        size: `large`,
        children: (0, $.jsx)(fn, {
          activePath: n,
          directoryPath: r,
          hostId: i,
          shouldExpandActivePath: a,
          onSelectFile: v,
          root: l,
        }),
      })),
      (t[18] = n),
      (t[19] = r),
      (t[20] = i),
      (t[21] = l),
      (t[22] = a),
      (t[23] = v),
      (t[24] = y))
    : (y = t[24]);
  let b;
  return (
    t[25] !== u || t[26] !== _ || t[27] !== y
      ? ((b = (0, $.jsxs)(I, { open: u, onOpenChange: d, children: [_, y] })),
        (t[25] = u),
        (t[26] = _),
        (t[27] = y),
        (t[28] = b))
      : (b = t[28]),
    b
  );
}
function fn(e) {
  let t = (0, vn.c)(39),
    {
      activePath: n,
      directoryPath: r,
      hostId: i,
      shouldExpandActivePath: a,
      onSelectFile: o,
      root: s,
    } = e,
    c;
  t[0] !== n || t[1] !== r
    ? ((c = n == null ? null : pn(n, r)), (t[0] = n), (t[1] = r), (t[2] = c))
    : (c = t[2]);
  let l = c,
    d;
  t[3] !== l || t[4] !== a
    ? ((d = () => (a && l != null ? [l] : [])), (t[3] = l), (t[4] = a), (t[5] = d))
    : (d = t[5]);
  let [f, p] = (0, yn.useState)(d),
    m;
  if (t[6] !== r || t[7] !== f) {
    let e;
    (t[9] === r ? (e = t[10]) : ((e = (e) => mn(e, r)), (t[9] = r), (t[10] = e)),
      (m = f.map(e)),
      (t[6] = r),
      (t[7] = f),
      (t[8] = m));
  } else m = t[8];
  let h;
  t[11] !== r || t[12] !== i || t[13] !== s || t[14] !== m
    ? ((h = {
        directoryPath: r,
        expandedPaths: m,
        hostId: i,
        includeHidden: !0,
        refreshKey: void 0,
        workspaceRoot: s,
      }),
      (t[11] = r),
      (t[12] = i),
      (t[13] = s),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let { error: v, files: y, isLoading: b } = C(ue, h),
    x;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (e) => {
        p((t) => (gn(t, e) ? t : e));
      }),
      (t[16] = x))
    : (x = t[16]);
  let S = E(x),
    w;
  t[17] !== r || t[18] !== o || t[19] !== s
    ? ((w = (e) => {
        let t = e[0];
        t == null || t.endsWith(`/`) || o(g(s, mn(t, r)), { isPreview: !0 });
      }),
      (t[17] = r),
      (t[18] = o),
      (t[19] = s),
      (t[20] = w))
    : (w = t[20]);
  let T = E(w);
  if (v != null) {
    let e;
    return (
      t[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(_.Message, {
            role: `alert`,
            tone: `error`,
            children: (0, $.jsx)(u, {
              id: `review.fileSource.breadcrumb.directoryError`,
              defaultMessage: `Couldn't load folder contents`,
              description: `Error shown when a file path breadcrumb tree cannot load`,
            }),
          })),
          (t[21] = e))
        : (e = t[21]),
      e
    );
  }
  if (b) {
    let e;
    return (
      t[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(_.Message, {
            role: `status`,
            children: (0, $.jsx)(u, {
              id: `review.fileSource.breadcrumb.loadingDirectory`,
              defaultMessage: `Loading…`,
              description: `Loading state in a file path breadcrumb tree`,
            }),
          })),
          (t[22] = e))
        : (e = t[22]),
      e
    );
  }
  if (y.length === 0) {
    let e;
    return (
      t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(_.Message, {
            children: (0, $.jsx)(u, {
              id: `review.fileSource.breadcrumb.emptyDirectory`,
              defaultMessage: `This folder is empty`,
              description: `Empty state in a file path breadcrumb tree`,
            }),
          })),
          (t[23] = e))
        : (e = t[23]),
      e
    );
  }
  let D;
  t[24] === s ? (D = t[25]) : ((D = ie(s)), (t[24] = s), (t[25] = D));
  let O;
  if (t[26] !== r || t[27] !== y) {
    let e;
    (t[29] === r
      ? (e = t[30])
      : ((e = (e) => ({ displayPath: pn(e, r), path: e.endsWith(`/`) ? e.slice(0, -1) : e })),
        (t[29] = r),
        (t[30] = e)),
      (O = y.map(e)),
      (t[26] = r),
      (t[27] = y),
      (t[28] = O));
  } else O = t[28];
  let k;
  return (
    t[31] !== l ||
    t[32] !== f ||
    t[33] !== S ||
    t[34] !== T ||
    t[35] !== i ||
    t[36] !== D ||
    t[37] !== O
      ? ((k = (0, $.jsx)(`div`, {
          className: `h-full min-h-0 w-full`,
          children: (0, $.jsx)(He, {
            cwd: D,
            hostId: i,
            initialExpandedPaths: f,
            onExpandedPathsChange: S,
            onSelectionChange: T,
            paths: O,
            revealSelectedPath: !0,
            revealSelectedPathScrollOffset: `center`,
            selectedPath: l,
            surface: `dropdown`,
          }),
        })),
        (t[31] = l),
        (t[32] = f),
        (t[33] = S),
        (t[34] = T),
        (t[35] = i),
        (t[36] = D),
        (t[37] = O),
        (t[38] = k))
      : (k = t[38]),
    k
  );
}
function pn(e, t) {
  let n = t == null ? `` : `${t}/`;
  return e.slice(n.length);
}
function mn(e, t) {
  let n = e.endsWith(`/`) ? e.slice(0, -1) : e;
  return t == null ? n : `${t}/${n}`;
}
function hn(e) {
  return ve(e ?? ``).match(/^\/?([a-z]:)(?:\/|$)/i)?.[1] ?? `/`;
}
function gn(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function _n(e) {
  let t = e.ownerDocument.getSelection();
  if (t == null || t.rangeCount === 0) return null;
  let n = t.getRangeAt(0);
  if (n.collapsed || !e.contains(n.commonAncestorContainer)) return null;
  let r = n.cloneContents().querySelectorAll(`li`);
  return (
    (r.length === 0
      ? n.toString()
      : Array.from(r, (e) => e.textContent ?? ``)
          .filter((e) => e.length > 0)
          .join(`/`)) || null
  );
}
var vn,
  yn,
  $,
  bn = e(() => {
    ((vn = B()),
      Ae(),
      w(),
      o(),
      (yn = t(a(), 1)),
      k(),
      te(),
      Te(),
      Ue(),
      he(),
      We(),
      y(),
      m(),
      ne(),
      M(),
      ($ = z()));
  });
export {
  st as a,
  rt as c,
  G as d,
  ln as i,
  qe as l,
  bn as n,
  it as o,
  Qt as r,
  Xe as s,
  un as t,
  Ye as u,
};
//# sourceMappingURL=review-file-source-breadcrumb-8f9dc59debc0.js.map
