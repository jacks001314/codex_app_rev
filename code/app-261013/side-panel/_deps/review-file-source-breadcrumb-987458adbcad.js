import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $S as n,
  $_ as r,
  ADt as i,
  AO as a,
  BE as o,
  BJ as s,
  BR as c,
  CE as l,
  CS as u,
  DD as d,
  ED as f,
  Ez as p,
  Fat as m,
  HE as h,
  IDt as g,
  Ixt as _,
  Kat as v,
  LR as y,
  Mz as b,
  Nz as x,
  Pat as S,
  Pxt as C,
  Q_ as w,
  RE as T,
  Rxt as E,
  SO as D,
  Sht as O,
  TO as k,
  UE as A,
  VDt as j,
  VR as M,
  Vxt as N,
  X_ as P,
  Y_ as F,
  Z_ as I,
  Zxt as L,
  _Mt as R,
  aSt as z,
  av as ee,
  bz as te,
  cSt as ne,
  cz as re,
  gMt as ie,
  gPt as ae,
  hPt as oe,
  i3 as se,
  iv as ce,
  jDt as B,
  kz as le,
  nE as ue,
  nk as V,
  ob as de,
  qat as fe,
  qft as pe,
  r3 as me,
  rE as he,
  rst as ge,
  rv as _e,
  sb as ve,
  sz as ye,
  t3 as be,
  tk as xe,
  vzt as H,
  wE as Se,
  xMt as U,
  xO as Ce,
  xz as we,
  yzt as Te,
  zE as W,
  zJ as Ee,
  zxt as G,
} from "./app-shared-bbfeca5e5737.js";
import {
  $wt as De,
  C$n as Oe,
  Cwr as K,
  Fgt as ke,
  Jht as Ae,
  OPr as je,
  VJn as Me,
  Xht as Ne,
  Xwt as Pe,
  Zwt as Fe,
  bgt as Ie,
  eTt as Le,
  fa as Re,
  gwr as q,
  ha as ze,
  igt as Be,
  kPr as Ve,
  mWn as He,
  nrr as Ue,
  rrr as We,
  sgt as Ge,
  w$n as Ke,
} from "./app-initial-5851df3f6cb1.js";
import { Bc as qe, Gc as Je, Vc as Ye, Wc as Xe } from "./app-primary-fe8a450b3b04.js";
import { r as Ze, t as Qe } from "./workspace-directory-entries-query-380a93ae197a.js";
import { n as $e, t as et } from "./base-file-tree-1123b9ab610d.js";
import { n as tt } from "./gate-c0654fbd7860.js";
import { n as nt, t as rt } from "./workspace-file-context-menu-trigger-2c51b734f37b.js";
function it(e, t) {
  let n = e.trim();
  if (!st.test(n)) return null;
  let r = Number(n);
  return !Number.isSafeInteger(r) || r === 0 ? null : t == null ? r : at(r, t);
}
function at(e, t) {
  let n = Math.max(1, t),
    r = e < 0 ? n + 1 + e : e;
  return Math.min(Math.max(1, r), n);
}
function ot(e) {
  return e === `` ? 1 : e.split(/\r\n|\r|\n/).length;
}
var st;
function ct() {
  return (ct = e(() => {
    st = /^-?\d+$/;
  }))();
}
function lt(e) {
  let t = (0, mt.c)(117),
    {
      alignWithPaddedPierreFile: n,
      appearance: i,
      getKeyboardOwner: a,
      getLineCount: o,
      inputRef: s,
      onCancelPreview: c,
      onGoToLine: l,
      onOpen: u,
      onPreviewLine: d,
      pierreThemeKey: f,
      restoreFocus: p,
    } = e,
    m = n !== void 0 && n,
    h = _(q),
    v = j(),
    y = (0, J.useRef)(null),
    b = s ?? y,
    x = (0, J.useRef)(!1),
    S = (0, J.useRef)(!1),
    C = (0, J.useRef)(!1),
    w = (0, J.useRef)(null),
    T = (0, J.useRef)(c),
    E = (0, J.useRef)(0),
    D = (0, J.useRef)(null),
    O = (0, J.useId)(),
    k = (0, J.useId)(),
    A = (0, J.useId)(),
    [M, N] = (0, J.useState)(!1),
    [P, F] = (0, J.useState)(!1),
    [L, R] = (0, J.useState)(ht),
    [z, te] = (0, J.useState)(``),
    ne;
  t[0] !== o || t[1] !== M ? ((ne = M ? o() : null), (t[0] = o), (t[1] = M), (t[2] = ne)) : (ne = t[2]);
  let re = ne,
    ae;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = () => {
        let e = ut(D.current);
        return (
          e != null &&
          (R((t) =>
            t.background === e.background && t.foreground === e.foreground && t.modified === e.modified
              ? t
              : e,
          ),
          !0)
        );
      }),
      (t[3] = ae))
    : (ae = t[3]);
  let oe = ae,
    se;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = () => {
        ((E.current += 1), (C.current = !1));
      }),
      (t[4] = se))
    : (se = t[4]);
  let ce = se,
    B,
    le;
  (t[5] === c
    ? ((B = t[6]), (le = t[7]))
    : ((B = () => {
        T.current = c;
      }),
      (le = [c]),
      (t[5] = c),
      (t[6] = B),
      (t[7] = le)),
    (0, J.useEffect)(B, le));
  let ue;
  t[8] !== c || t[9] !== p
    ? ((ue = (e, t) => {
        let n = t === void 0 || t;
        x.current || ((x.current = !0), (S.current = !1), ce(), N(!1), n && c?.(), e && p());
      }),
      (t[8] = c),
      (t[9] = p),
      (t[10] = ue))
    : (ue = t[10]);
  let V = ue,
    de,
    fe;
  (t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = () => () => {
        (X === w.current && (X = null), (w.current = null), S.current && (ce(), T.current?.()));
      }),
      (fe = [ce]),
      (t[11] = de),
      (t[12] = fe))
    : ((de = t[11]), (fe = t[12])),
    (0, J.useEffect)(de, fe));
  let pe;
  t[13] !== V || t[14] !== o || t[15] !== l || t[16] !== z
    ? ((pe = () => {
        let e = it(z, o());
        if (e == null) {
          F(!0);
          return;
        }
        (l(e), V(!0, !1));
      }),
      (t[13] = V),
      (t[14] = o),
      (t[15] = l),
      (t[16] = z),
      (t[17] = pe))
    : (pe = t[17]);
  let me = pe,
    he;
  if (t[18] !== o || t[19] !== b || t[20] !== d) {
    he = (t, r, i) => {
      let a = o();
      if (a == null) return;
      let s = it(t, a);
      if (s == null || d == null) return;
      let c = E.current + 1;
      ((E.current = c), (C.current = !0), d(s), n(r, i), e(r, i, c));
    };
    let e = (t, r, i, a) => {
        let o = a === void 0 ? 0 : a;
        window.requestAnimationFrame(() => {
          if (E.current === i) {
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
        n != null &&
          document.activeElement !== n &&
          (n.focus({ preventScroll: !0 }), e != null && t != null && n.setSelectionRange(e, t));
      };
    ((t[18] = o), (t[19] = b), (t[20] = d), (t[21] = he));
  } else he = t[21];
  let ge, _e;
  (t[22] === a
    ? ((ge = t[23]), (_e = t[24]))
    : ((ge = () => {
        let e = a();
        if (e == null) return;
        w.current = e;
        let t = () => {
          X = e;
        };
        return (
          e.addEventListener(`focusin`, t),
          () => {
            e.removeEventListener(`focusin`, t);
          }
        );
      }),
      (_e = [a]),
      (t[22] = a),
      (t[23] = ge),
      (t[24] = _e)),
    (0, J.useEffect)(ge, _e));
  let ve, ye;
  (t[25] !== V || t[26] !== M
    ? ((ve = () => {
        if (!M) return;
        let e = (e) => {
          let t = D.current;
          t != null && e.target instanceof Node && !t.contains(e.target) && V(!1, !1);
        };
        return (
          document.addEventListener(`pointerdown`, e, !0),
          () => {
            document.removeEventListener(`pointerdown`, e, !0);
          }
        );
      }),
      (ye = [V, M]),
      (t[25] = V),
      (t[26] = M),
      (t[27] = ve),
      (t[28] = ye))
    : ((ve = t[27]), (ye = t[28])),
    (0, J.useEffect)(ve, ye));
  let be, xe;
  (t[29] !== i || t[30] !== M
    ? ((be = () => {
        M && i === `pierre` && oe();
      }),
      (xe = [i, M, oe]),
      (t[29] = i),
      (t[30] = M),
      (t[31] = be),
      (t[32] = xe))
    : ((be = t[31]), (xe = t[32])),
    (0, J.useLayoutEffect)(be, xe));
  let H, Se;
  (t[33] !== i || t[34] !== M || t[35] !== f
    ? ((H = () => {
        if (!M || i !== `pierre` || f == null) return;
        let e = D.current?.parentElement?.parentElement;
        if (e == null) return;
        let t = [],
          n = null,
          r = null,
          a = () => {
            let n = e.querySelector(`diffs-container`);
            if (n == null) return !1;
            if (n === r) return !0;
            for (let e of t) e.disconnect();
            ((t.length = 0), (r = n), oe());
            let i = new MutationObserver(oe);
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
                    ((c = new MutationObserver(oe)),
                    c.observe(e, { characterData: !0, childList: !0, subtree: !0 }),
                    t.push(c)),
                  oe());
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
      (Se = [i, M, f, oe]),
      (t[33] = i),
      (t[34] = M),
      (t[35] = f),
      (t[36] = H),
      (t[37] = Se))
    : ((H = t[36]), (Se = t[37])),
    (0, J.useEffect)(H, Se));
  let U;
  t[38] !== b || t[39] !== M || t[40] !== u || t[41] !== h
    ? ((U = () => {
        if (h.get(Ge) === `browser`) {
          let e = h.get(Be);
          (e != null && ee({ ...e, command: { type: `close-find` } }, Je), ke(h, Ae));
        }
        if ((Ne(h), M)) {
          (b.current?.focus(), b.current?.select());
          return;
        }
        (F(!1), te(``), (x.current = !1), (S.current = !0), u?.(), N(!0));
      }),
      (t[38] = b),
      (t[39] = M),
      (t[40] = u),
      (t[41] = h),
      (t[42] = U))
    : (U = t[42]);
  let Ce;
  if (
    (t[43] === a
      ? (Ce = t[44])
      : ((Ce = {
          isActive: (e) => pt(e?.originPanel, a(), D.current),
          keyboardHandler: (e) => {
            if (!ft(e, a(), D.current)) return !1;
          },
        }),
        (t[43] = a),
        (t[44] = Ce)),
    Ke(`goToLine`, U, Ce),
    !M)
  )
    return null;
  let we;
  t[45] !== L.background || t[46] !== L.foreground || t[47] !== L.modified
    ? ((we = {
        "--go-to-line-bg": L.background,
        "--go-to-line-fg": L.foreground,
        "--go-to-line-modified-base": L.modified,
      }),
      (t[45] = L.background),
      (t[46] = L.foreground),
      (t[47] = L.modified),
      (t[48] = we))
    : (we = t[48]);
  let Te = we,
    W = i === `pierre`,
    Ee;
  t[49] === v
    ? (Ee = t[50])
    : ((Ee = v.formatMessage({
        id: `codex.goToLine.close`,
        defaultMessage: `Close go to line`,
        description: `Button label to close the go to line input`,
      })),
      (t[49] = v),
      (t[50] = Ee));
  let G = Ee,
    De;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, Y.jsx)(g, {
        id: `codex.goToLine.label`,
        defaultMessage: `Go to line`,
        description: `Accessible label for the go to line input`,
      })),
      (t[51] = De))
    : (De = t[51]);
  let Oe;
  t[52] === O
    ? (Oe = t[53])
    : ((Oe = (0, Y.jsx)(`label`, { className: `sr-only`, htmlFor: O, children: De })),
      (t[52] = O),
      (t[53] = Oe));
  let K = re == null ? void 0 : k,
    je = P ? A : void 0,
    Me = P || void 0,
    Pe;
  t[54] !== v || t[55] !== W
    ? ((Pe = W
        ? v.formatMessage({
            id: `codex.goToLine.fieldLabel`,
            defaultMessage: `Line`,
            description: `Visual label shown before the go to line input`,
          })
        : void 0),
      (t[54] = v),
      (t[55] = W),
      (t[56] = Pe))
    : (Pe = t[56]);
  let Fe = W
      ? `h-7 w-full min-w-0 grow rounded-[6px] border border-[color-mix(in_lab,var(--go-to-line-fg)_12%,var(--go-to-line-bg))] bg-[var(--go-to-line-bg)] px-[6px] py-px text-[13px] leading-6 text-[var(--go-to-line-fg)] outline-none placeholder:text-tertiary selection:bg-[color-mix(in_lab,var(--go-to-line-fg)_8%,var(--go-to-line-bg))] focus-visible:outline-2 focus-visible:outline-[var(--go-to-line-modified-base)] focus-visible:outline-solid`
      : `h-6 w-24 min-w-0 bg-transparent text-base leading-6 text-default outline-none focus:!outline-none`,
    Ie = P ? (W ? `border-text-danger text-danger` : `text-danger`) : null,
    Le;
  t[57] !== Fe || t[58] !== Ie ? ((Le = ie(Fe, Ie)), (t[57] = Fe), (t[58] = Ie), (t[59] = Le)) : (Le = t[59]);
  let Re;
  t[60] === he
    ? (Re = t[61])
    : ((Re = (e) => {
        let t = e.target.value;
        (te(t), F(!1), he(t, e.target.selectionStart, e.target.selectionEnd));
      }),
      (t[60] = he),
      (t[61] = Re));
  let ze;
  t[62] === a
    ? (ze = t[63])
    : ((ze = () => {
        let e = a();
        e != null && (X = e);
      }),
      (t[62] = a),
      (t[63] = ze));
  let Ve;
  t[64] === me
    ? (Ve = t[65])
    : ((Ve = (e) => {
        if (e.key === `Tab`) {
          ce();
          return;
        }
        e.key === `Enter` && (e.preventDefault(), me());
      }),
      (t[64] = me),
      (t[65] = Ve));
  let He;
  t[66] !== O ||
  t[67] !== b ||
  t[68] !== K ||
  t[69] !== je ||
  t[70] !== Me ||
  t[71] !== Pe ||
  t[72] !== Le ||
  t[73] !== Re ||
  t[74] !== ze ||
  t[75] !== Ve ||
  t[76] !== z
    ? ((He = (0, Y.jsx)(`input`, {
        id: O,
        ref: b,
        type: `text`,
        inputMode: `numeric`,
        autoComplete: `off`,
        autoFocus: !0,
        "aria-describedby": K,
        "aria-errormessage": je,
        "aria-invalid": Me,
        placeholder: Pe,
        className: Le,
        value: z,
        onChange: Re,
        onFocus: ze,
        onKeyDown: Ve,
      })),
      (t[66] = O),
      (t[67] = b),
      (t[68] = K),
      (t[69] = je),
      (t[70] = Me),
      (t[71] = Pe),
      (t[72] = Le),
      (t[73] = Re),
      (t[74] = ze),
      (t[75] = Ve),
      (t[76] = z),
      (t[77] = He))
    : (He = t[77]);
  let Ue;
  t[78] !== Oe || t[79] !== He
    ? ((Ue = (0, Y.jsxs)(Y.Fragment, { children: [Oe, He] })), (t[78] = Oe), (t[79] = He), (t[80] = Ue))
    : (Ue = t[80]);
  let We = Ue,
    qe;
  t[81] !== W || t[82] !== re || t[83] !== k || t[84] !== z
    ? ((qe =
        re == null
          ? null
          : (0, Y.jsx)(`span`, {
              id: k,
              className: ie(
                W
                  ? `flex min-w-[50px] shrink-0 items-center text-[12px] leading-5 font-medium whitespace-nowrap`
                  : `col-[2/3] row-[1] flex h-[44px] items-center px-2 text-base leading-6 text-codex-description`,
                W &&
                  (z.trim().length === 0
                    ? `text-[color-mix(in_lab,var(--go-to-line-fg)_35%,var(--go-to-line-bg))]`
                    : `text-[color-mix(in_lab,var(--go-to-line-fg)_50%,var(--go-to-line-bg))]`),
              ),
              children: (0, Y.jsx)(g, {
                id: `codex.goToLine.range`,
                defaultMessage: `1–{lineCount}`,
                description: `Current valid line range shown in the go to line input`,
                values: { lineCount: re },
              }),
            })),
      (t[81] = W),
      (t[82] = re),
      (t[83] = k),
      (t[84] = z),
      (t[85] = qe))
    : (qe = t[85]);
  let Ye = qe,
    Xe;
  t[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = (0, Y.jsx)(g, {
        id: `codex.goToLine.error`,
        defaultMessage: `Enter a valid whole line number`,
        description: `Accessible error for an invalid go to line value`,
      })),
      (t[86] = Xe))
    : (Xe = t[86]);
  let Ze;
  t[87] === A
    ? (Ze = t[88])
    : ((Ze = (0, Y.jsx)(`span`, { id: A, className: `sr-only`, children: Xe })), (t[87] = A), (t[88] = Ze));
  let Qe = Ze,
    $e;
  t[89] !== m || t[90] !== W
    ? (($e = ie(
        `pointer-events-none sticky z-[55] flex justify-end`,
        W ? [`top-4 h-0 w-full`, m ? `pe-8` : `pe-4`] : `top-3 mb-[-44px] pe-3`,
      )),
      (t[89] = m),
      (t[90] = W),
      (t[91] = $e))
    : ($e = t[91]);
  let et = W && `relative max-w-full font-sans text-[14px] leading-5 font-normal`,
    tt;
  t[92] === et ? (tt = t[93]) : ((tt = ie(`pointer-events-auto`, et)), (t[92] = et), (t[93] = tt));
  let nt = W ? Te : void 0,
    rt;
  t[94] === V
    ? (rt = t[95])
    : ((rt = (e) => {
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
      (t[95] = rt));
  let at;
  t[96] === me
    ? (at = t[97])
    : ((at = (e) => {
        (e.preventDefault(), me());
      }),
      (t[96] = me),
      (t[97] = at));
  let ot;
  t[98] === V
    ? (ot = t[99])
    : ((ot = (e) => {
        e.key === `Escape` && (e.preventDefault(), V(!0));
      }),
      (t[98] = V),
      (t[99] = ot));
  let st;
  t[100] !== V || t[101] !== G || t[102] !== W || t[103] !== Qe || t[104] !== We || t[105] !== Ye
    ? ((st = W
        ? (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsxs)(`div`, {
                className: `relative flex w-fit max-w-full min-w-0 items-center gap-[6px] rounded-[9px] border border-[color-mix(in_lab,var(--go-to-line-fg)_20%,transparent)] bg-[color-mix(in_lab,var(--go-to-line-fg)_4%,var(--go-to-line-bg))] p-1 shadow-[inset_0_0_0_1px_var(--go-to-line-bg),0_4px_8px_rgba(0,0,0,0.075),0_6px_18px_rgba(0,0,0,0.075)]`,
                children: [
                  (0, Y.jsx)(`div`, { className: `flex w-[200px] min-w-0 items-center`, children: We }),
                  Ye,
                  Qe,
                ],
              }),
              (0, Y.jsx)(`button`, {
                type: `button`,
                "aria-label": G,
                className: `absolute end-0 top-0 flex size-5 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[50%] border-0 bg-[color-mix(in_lab,var(--go-to-line-fg)_50%,var(--go-to-line-bg))] p-0 text-[color-mix(in_lab,var(--go-to-line-fg)_4%,var(--go-to-line-bg))] transition-colors outline-none hover:bg-[var(--go-to-line-fg)] focus-visible:outline-2 focus-visible:outline-[var(--go-to-line-modified-base)] focus-visible:outline-solid rtl:-translate-x-1/2`,
                onClick: () => {
                  V(!0);
                },
                children: (0, Y.jsx)(dt, {}),
              }),
            ],
          })
        : (0, Y.jsxs)(I, {
            children: [
              (0, Y.jsxs)(`div`, {
                className: `col-[1/2] row-[1] flex h-[44px] min-w-0 items-center gap-2 ps-4`,
                children: [
                  (0, Y.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `shrink-0 text-base leading-6 text-codex-description`,
                    children: (0, Y.jsx)(g, {
                      id: `codex.goToLine.fieldLabel`,
                      defaultMessage: `Line`,
                      description: `Visual label shown before the go to line input`,
                    }),
                  }),
                  We,
                ],
              }),
              Ye,
              Qe,
              (0, Y.jsx)(r, {
                label: G,
                onClose: () => {
                  V(!0);
                },
              }),
            ],
          })),
      (t[100] = V),
      (t[101] = G),
      (t[102] = W),
      (t[103] = Qe),
      (t[104] = We),
      (t[105] = Ye),
      (t[106] = st))
    : (st = t[106]);
  let ct;
  t[107] !== tt || t[108] !== nt || t[109] !== rt || t[110] !== at || t[111] !== ot || t[112] !== st
    ? ((ct = (0, Y.jsx)(`form`, {
        ref: D,
        autoComplete: `off`,
        className: tt,
        style: nt,
        onBlurCapture: rt,
        onSubmit: at,
        onKeyDown: ot,
        children: st,
      })),
      (t[107] = tt),
      (t[108] = nt),
      (t[109] = rt),
      (t[110] = at),
      (t[111] = ot),
      (t[112] = st),
      (t[113] = ct))
    : (ct = t[113]);
  let lt;
  return (
    t[114] !== $e || t[115] !== ct
      ? ((lt = (0, Y.jsx)(`div`, { className: $e, children: ct })),
        (t[114] = $e),
        (t[115] = ct),
        (t[116] = lt))
      : (lt = t[116]),
    lt
  );
}
function ut(e) {
  let t = e?.parentElement?.parentElement?.querySelector(`diffs-container`);
  if (t == null) return null;
  let n = window.getComputedStyle(t);
  return {
    background: n.getPropertyValue(`--diffs-bg`).trim() || n.backgroundColor,
    foreground: n.getPropertyValue(`--diffs-fg`).trim() || n.color,
    modified: n.getPropertyValue(`--diffs-modified-base`).trim() || ht.modified,
  };
}
function dt() {
  let e = (0, mt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsx)(`svg`, {
          "aria-hidden": `true`,
          className: `size-3`,
          focusable: `false`,
          viewBox: `0 0 16 16`,
          children: (0, Y.jsx)(`path`, {
            d: `M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L8 6.93934L11.7197 3.21967C12.0126 2.92678 12.4874 2.92678 12.7803 3.21967C13.0732 3.51256 13.0732 3.98744 12.7803 4.28033L9.06066 8L12.7803 11.7197C13.0732 12.0126 13.0732 12.4874 12.7803 12.7803C12.4874 13.0732 12.0126 13.0732 11.7197 12.7803L8 9.06066L4.28033 12.7803C3.98744 13.0732 3.51256 13.0732 3.21967 12.7803C2.92678 12.4874 2.92678 12.0126 3.21967 11.7197L6.93934 8L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967Z`,
            fill: `currentColor`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ft(e, t, n) {
  return e.defaultPrevented || t == null
    ? !1
    : e.composedPath().some((e) => e instanceof Node && (t.contains(e) || n?.contains(e) === !0));
}
function pt(e, t, n) {
  if (t == null) return !1;
  if (e != null) return t.dataset.appShellTabPanelController === e;
  let r = document.activeElement;
  return r instanceof Node
    ? t.contains(r) || n?.contains(r) === !0
      ? ((X = t), !0)
      : r instanceof Element && r.closest(`[role="tabpanel"]`) != null
        ? !1
        : (X?.isConnected === !1 && (X = null), X == null || X === t)
    : !0;
}
var mt, J, Y, X, ht;
function gt() {
  return (gt = e(() => {
    ((mt = H()),
      R(),
      C(),
      (J = Te()),
      B(),
      ce(),
      Oe(),
      Xe(),
      _e(),
      w(),
      Ie(),
      K(),
      ct(),
      (Y = U()),
      (X = null),
      (ht = {
        background: `var(--color-surface)`,
        foreground: `var(--color-text)`,
        modified: `light-dark(#009fff, #69b1ff)`,
      }));
  }))();
}
function _t(e, t, n) {
  let r = e.entries.slice(0, e.index + 1);
  return (yt(r.at(-1), t) || r.push(t), yt(r.at(-1), n) || r.push(n), { entries: r, index: r.length - 1 });
}
function vt(e, t) {
  let n = e.index + t,
    r = e.entries[n];
  return r == null ? null : { history: { entries: e.entries, index: n }, location: r };
}
function yt(e, t) {
  return (
    e?.path === t.path && e.position.line === t.position.line && e.position.character === t.position.character
  );
}
var bt;
function xt() {
  return (xt = e(() => {
    (C(),
      K(),
      (bt = z(q, (e) => ({ entries: [], index: -1 }), void 0, {
        excludeFieldsFromKey: [`contents`, `languageId`, `path`],
      })));
  }))();
}
function St(e, t) {
  let n = Number.parseInt(e.dataset.char ?? ``, 10),
    r = qe(t);
  return Number.isInteger(n) && r != null ? { element: e, position: { character: n, line: r } } : null;
}
function Ct(e, t, n, r, i = 0) {
  (Tt(t), Nt(t));
  let a = e.get(t.hoverTarget$);
  if (i === 0 && t.hoverContentElement != null && a?.element === r.element && a.contents === n.contents)
    return;
  (a != null && delete a.element.dataset.languageSymbolHighlight, e.set(t.hoverTarget$, null));
  let { contents: o } = n;
  t.hoverRequestVersion += 1;
  let { hoverRequestVersion: s } = t;
  t.hoverTimeout = {
    element: r.element,
    timeout: setTimeout(() => {
      ((t.hoverTimeout = null),
        e.set(t.hoverTarget$, { ...r, contents: o, requestVersion: s, retryCount: i }));
    }, Pt),
  };
}
function wt(e, t, n) {
  (Tt(t),
    (t.hoverCloseTimeout = setTimeout(() => {
      ((t.hoverCloseTimeout = null),
        !(!n.isConnected || n.matches(`:hover`) || t.hoverContentElement?.matches(`:hover`)) && kt(e, t, n));
    }, 100)));
}
function Tt(e) {
  e.hoverCloseTimeout != null && (clearTimeout(e.hoverCloseTimeout), (e.hoverCloseTimeout = null));
}
function Et(e, t) {
  e.hoverContentElement = t;
}
function Dt(e, t) {
  (Tt(t), Nt(t));
  let n = e.get(t.hoverTarget$);
  n != null && (delete n.element.dataset.languageSymbolHighlight, e.set(t.hoverTarget$, null));
}
function Ot(e, t) {
  t ? (e.dataset.languageSymbolHighlight = ``) : delete e.dataset.languageSymbolHighlight;
}
function kt(e, t, n) {
  (delete n.dataset.languageSymbolHighlight,
    t.hoverTimeout?.element === n && (clearTimeout(t.hoverTimeout.timeout), (t.hoverTimeout = null)),
    e.get(t.hoverTarget$)?.element === n && e.set(t.hoverTarget$, null));
}
async function At(e, t, n, r, i, a) {
  let o = Symbol();
  ((t.locationRequest = o), e.set(t.locationList$, null));
  let s = (await v.lsp?.locations({ ...n, kind: r, position: i.position })) ?? [];
  t.locationRequest === o &&
    ((t.locationRequest = null),
    s.length === 1 && s[0] != null
      ? jt(e, n, i, s[0], a)
      : s.length > 1 && e.set(t.locationList$, { kind: r, locations: s, target: i }));
}
function jt(e, t, n, r, i) {
  (e.set(bt, t, (e) =>
    _t(e, { path: t.path, position: n.position }, { path: r.path, position: r.range.start }),
  ),
    i(r));
}
function Mt(e, t) {
  ((t.locationRequest = null), e.set(t.locationList$, null));
}
function Nt(e) {
  e.hoverTimeout != null &&
    (clearTimeout(e.hoverTimeout.timeout),
    delete e.hoverTimeout.element.dataset.languageSymbolHighlight,
    (e.hoverTimeout = null));
}
var Pt, Ft, It, Lt;
function Rt() {
  return (Rt = e(() => {
    (C(),
      fe(),
      K(),
      m(),
      xt(),
      (Pt = 300),
      (Ft = ne(q, (e, { signal: t }) => ({
        contextTarget$: t(null),
        hoverCloseTimeout: null,
        hoverContentElement: null,
        hoverRequestVersion: 0,
        hoverTarget$: t(null),
        hoverTimeout: null,
        locationList$: t(null),
        locationRequest: null,
      }))),
      (It = L(
        q,
        (e) => ({
          enabled: v?.lsp != null,
          queryFn: async () =>
            (await v?.lsp?.capabilities({
              hostId: e.hostId,
              languageId: e.languageId,
              path: e.path,
              workspaceRoot: e.workspaceRoot,
            })) ?? null,
          queryKey: [`review-file-language-capabilities`, e.hostId, e.languageId, e.workspaceRoot ?? e.path],
          staleTime: S.FIVE_SECONDS,
        }),
        { excludeFieldsFromKey: [`contents`] },
      )),
      (Lt = L(
        q,
        ({ contentsHash: e, languageFile: t, surfaceId: n }, { get: r }) => {
          let i = r(r(Ft, n).hoverTarget$);
          return {
            enabled: v?.lsp != null && i != null && i.contents === t.contents,
            queryFn: async () =>
              i == null || v?.lsp == null ? null : v.lsp.hover({ ...t, position: i.position }),
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
            staleTime: S.FIVE_SECONDS,
          };
        },
        { key: ({ contentsHash: e, surfaceId: t }) => `${t}\0${e}` },
      )));
  }))();
}
function zt({ scope: e, surface: t, languageFile: n, locationKinds: r, onOpenLocation: i }) {
  let a = e.get(t.contextTarget$);
  return a == null
    ? []
    : Vt.filter(({ kind: e }) => r.includes(e)).map(({ kind: r, message: o }) => ({
        id: r,
        message: o,
        onSelect: () => {
          (e.set(t.contextTarget$, null), kt(e, t, a.element), At(e, t, n, r, a, i).catch(() => {}));
        },
      }));
}
var Bt, Vt;
function Ht() {
  return (Ht = e(() => {
    (B(),
      Rt(),
      (Bt = i({
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
      (Vt = [
        { kind: `definition`, message: Bt.goToDefinition },
        { kind: `typeDefinition`, message: Bt.goToTypeDefinition },
        { kind: `implementation`, message: Bt.goToImplementations },
        { kind: `references`, message: Bt.goToReferences },
      ]));
  }))();
}
function Ut(e) {
  let t = (0, Wt.c)(10),
    {
      children: n,
      getFallbackItems: r,
      languageFile: i,
      locationKinds: a,
      onOpenLocation: o,
      surface: s,
    } = e,
    c = _(q),
    l;
  t[0] !== r || t[1] !== i || t[2] !== a || t[3] !== o || t[4] !== c || t[5] !== s
    ? ((l = () => {
        let e = zt({ scope: c, surface: s, languageFile: i, locationKinds: a, onOpenLocation: o });
        return e.length > 0 ? e : (r?.() ?? []);
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = c),
      (t[5] = s),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== n || t[8] !== l
      ? ((u = (0, Gt.jsx)(Ce, { getItems: l, children: n })), (t[7] = n), (t[8] = l), (t[9] = u))
      : (u = t[9]),
    u
  );
}
var Wt, Gt;
function Kt() {
  return (Kt = e(() => {
    ((Wt = H()), C(), D(), K(), Ht(), (Gt = U()));
  }))();
}
function qt(e) {
  let t = (0, Jt.c)(8),
    { hover: n, language: r } = e,
    i;
  t[0] !== n.signature || t[1] !== r
    ? ((i = (0, Yt.jsx)(de, {
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
          : (0, Yt.jsx)(ze, {
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
      ? ((o = (0, Yt.jsxs)(`div`, { className: `flex flex-col gap-2 select-text`, children: [i, a] })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
var Jt, Yt;
function Xt() {
  return (Xt = e(() => {
    ((Jt = H()), ve(), Re(), (Yt = U()));
  }))();
}
function Zt(e) {
  let t = (0, tn.c)(6),
    { languageFile: n, onOpenLocation: r, surface: i } = e,
    a = N(i.locationList$);
  if (a == null) return null;
  let o = `${a.kind}:${a.target.position.line}:${a.target.position.character}`,
    s;
  return (
    t[0] !== n || t[1] !== a || t[2] !== r || t[3] !== i || t[4] !== o
      ? ((s = (0, Z.jsx)(Qt, { languageFile: n, locationList: a, onOpenLocation: r, surface: i }, o)),
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
function Qt(e) {
  let n = (0, tn.c)(71),
    { languageFile: r, locationList: i, onOpenLocation: a, surface: c } = e,
    u = _(q),
    d = j(),
    [f, p] = (0, nn.useState)(100),
    m,
    h,
    v,
    y,
    x,
    S,
    C,
    w,
    E;
  n[0] !== d ||
  n[1] !== r.workspaceRoot ||
  n[2] !== i.kind ||
  n[3] !== i.locations.length ||
  n[4] !== i.target.element ||
  n[5] !== u ||
  n[6] !== c
    ? ((C = en(i.kind)),
      (w = { count: i.locations.length }),
      (E = r.workspaceRoot ?? void 0),
      (h = T),
      (y = !0),
      n[16] !== u || n[17] !== c
        ? ((x = (e) => {
            e || Mt(u, c);
          }),
          (n[16] = u),
          (n[17] = c),
          (n[18] = x))
        : (x = n[18]),
      n[19] === i.target.element
        ? (S = n[20])
        : ((S = (0, Z.jsx)(W, { virtualRef: { current: i.target.element } })),
          (n[19] = i.target.element),
          (n[20] = S)),
      (m = o),
      (v = d.formatMessage(C, w)),
      (n[0] = d),
      (n[1] = r.workspaceRoot),
      (n[2] = i.kind),
      (n[3] = i.locations.length),
      (n[4] = i.target.element),
      (n[5] = u),
      (n[6] = c),
      (n[7] = m),
      (n[8] = h),
      (n[9] = v),
      (n[10] = y),
      (n[11] = x),
      (n[12] = S),
      (n[13] = C),
      (n[14] = w),
      (n[15] = E))
    : ((m = n[7]),
      (h = n[8]),
      (v = n[9]),
      (y = n[10]),
      (x = n[11]),
      (S = n[12]),
      (C = n[13]),
      (w = n[14]),
      (E = n[15]));
  let D;
  n[21] !== C || n[22] !== w
    ? ((D = (0, Z.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, Z.jsx)(g, { ...C, values: w }),
      })),
      (n[21] = C),
      (n[22] = w),
      (n[23] = D))
    : (D = n[23]);
  let O;
  n[24] === d
    ? (O = n[25])
    : ((O = d.formatMessage({
        id: `review.fileLanguage.locations.close`,
        defaultMessage: `Close locations`,
        description: `Accessible label for closing the file viewer symbol locations card`,
      })),
      (n[24] = d),
      (n[25] = O));
  let k;
  n[26] !== u || n[27] !== c
    ? ((k = () => {
        Mt(u, c);
      }),
      (n[26] = u),
      (n[27] = c),
      (n[28] = k))
    : (k = n[28]);
  let A;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Z.jsx)(b, { asset: s })), (n[29] = A))
    : (A = n[29]);
  let M;
  n[30] !== O || n[31] !== k
    ? ((M = (0, Z.jsx)(t, {
        "aria-label": O,
        color: `ghostSecondary`,
        onClick: k,
        size: `icon`,
        children: A,
      })),
      (n[30] = O),
      (n[31] = k),
      (n[32] = M))
    : (M = n[32]);
  let N;
  n[33] !== D || n[34] !== M
    ? ((N = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between border-b border-default px-3 py-2`,
        children: [D, M],
      })),
      (n[33] = D),
      (n[34] = M),
      (n[35] = N))
    : (N = n[35]);
  let P;
  if (
    n[36] !== d ||
    n[37] !== r ||
    n[38] !== i.locations ||
    n[39] !== i.target ||
    n[40] !== a ||
    n[41] !== u ||
    n[42] !== c ||
    n[43] !== f ||
    n[44] !== E
  ) {
    let e;
    (n[46] !== d ||
    n[47] !== r ||
    n[48] !== i.target ||
    n[49] !== a ||
    n[50] !== u ||
    n[51] !== c ||
    n[52] !== E
      ? ((e = (e) => {
          let t = Ue(e.path, E),
            n = e.range.start.line + 1,
            o = e.range.start.character + 1;
          return (0, Z.jsxs)(
            `button`,
            {
              "aria-label": d.formatMessage(
                {
                  id: `review.fileLanguage.locations.open`,
                  defaultMessage: `Open {path}, line {line}, column {column}`,
                  description: `Accessible label for a location in the file viewer symbol locations card`,
                },
                { column: o, line: n, path: t },
              ),
              className: `flex cursor-interaction items-center gap-3 rounded-lg px-2 py-1.5 text-start text-sm hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover focus:outline-none`,
              onClick: () => {
                (Mt(u, c), jt(u, r, i.target, e, a));
              },
              type: `button`,
              children: [
                (0, Z.jsx)(l, { className: `flex-1 font-mono text-default`, text: t }),
                (0, Z.jsx)(`span`, {
                  className: `shrink-0 font-mono text-xs text-secondary`,
                  children: (0, Z.jsx)(g, {
                    id: `review.fileLanguage.locations.lineAndColumn`,
                    defaultMessage: `{line}:{column}`,
                    description: `Line and column shown for a symbol location in the file viewer`,
                    values: { column: o, line: n },
                  }),
                }),
              ],
            },
            `${e.path}:${n}:${o}`,
          );
        }),
        (n[46] = d),
        (n[47] = r),
        (n[48] = i.target),
        (n[49] = a),
        (n[50] = u),
        (n[51] = c),
        (n[52] = E),
        (n[53] = e))
      : (e = n[53]),
      (P = i.locations.slice(0, f).map(e)),
      (n[36] = d),
      (n[37] = r),
      (n[38] = i.locations),
      (n[39] = i.target),
      (n[40] = a),
      (n[41] = u),
      (n[42] = c),
      (n[43] = f),
      (n[44] = E),
      (n[45] = P));
  } else P = n[45];
  let F;
  n[54] !== i.locations.length || n[55] !== f
    ? ((F =
        f < i.locations.length
          ? (0, Z.jsx)(t, {
              color: `ghostSecondary`,
              onClick: () => {
                p($t);
              },
              children: (0, Z.jsx)(g, {
                id: `review.fileLanguage.locations.loadMore`,
                defaultMessage: `Load more locations`,
                description: `Button to reveal the next page of symbol references or definitions in the file viewer`,
              }),
            })
          : null),
      (n[54] = i.locations.length),
      (n[55] = f),
      (n[56] = F))
    : (F = n[56]);
  let I;
  n[57] !== P || n[58] !== F
    ? ((I = (0, Z.jsxs)(`div`, {
        className: `flex max-h-72 flex-col overflow-y-auto p-1`,
        children: [P, F],
      })),
      (n[57] = P),
      (n[58] = F),
      (n[59] = I))
    : (I = n[59]);
  let L;
  n[60] !== m || n[61] !== v || n[62] !== N || n[63] !== I
    ? ((L = (0, Z.jsxs)(m, {
        "aria-label": v,
        align: `start`,
        className: `overflow-hidden`,
        disablePadding: !0,
        side: `top`,
        size: `large`,
        children: [N, I],
      })),
      (n[60] = m),
      (n[61] = v),
      (n[62] = N),
      (n[63] = I),
      (n[64] = L))
    : (L = n[64]);
  let R;
  return (
    n[65] !== h || n[66] !== L || n[67] !== y || n[68] !== x || n[69] !== S
      ? ((R = (0, Z.jsxs)(h, { open: y, onOpenChange: x, children: [S, L] })),
        (n[65] = h),
        (n[66] = L),
        (n[67] = y),
        (n[68] = x),
        (n[69] = S),
        (n[70] = R))
      : (R = n[70]),
    R
  );
}
function $t(e) {
  return e + 100;
}
function en(e) {
  switch (e) {
    case `definition`:
      return rn.definitions;
    case `implementation`:
      return rn.implementations;
    case `references`:
      return rn.references;
    case `typeDefinition`:
      return rn.typeDefinitions;
  }
}
var tn, nn, Z, rn;
function an() {
  return (an = e(() => {
    ((tn = H()),
      Ee(),
      C(),
      (nn = Te()),
      B(),
      be(),
      x(),
      Se(),
      A(),
      We(),
      K(),
      Rt(),
      (Z = U()),
      (rn = i({
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
  }))();
}
function on(e) {
  let t = (0, ln.c)(42),
    {
      definitionNavigationEnabled: n,
      enabled: r,
      isActive: i,
      languageFile: a,
      onOpenLocation: o,
      panelId: s,
      surface: c,
      surfaceRef: l,
    } = e,
    u = _(q),
    d = G(bt, a),
    f;
  t[0] !== n || t[1] !== a || t[2] !== o || t[3] !== u || t[4] !== c || t[5] !== l
    ? ((f = function (e) {
        if (!n || o == null || l.current == null) return !1;
        let t = Ye(e),
          r = t?.focusNode instanceof HTMLElement ? t.focusNode : (t?.focusNode?.parentElement ?? null),
          i = r?.closest(`[data-char]`),
          s = r?.closest(`[data-line]`);
        if (i == null || s == null || !cn(i, l.current)) return !1;
        let d = St(i, s);
        return d != null && (kt(u, c, d.element), At(u, c, a, `definition`, d, o).catch(sn), !0);
      }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o),
      (t[3] = u),
      (t[4] = c),
      (t[5] = l),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    m;
  t[7] !== a || t[8] !== o || t[9] !== u
    ? ((m = function (e) {
        if (o == null) return;
        let t = vt(u.get(bt, a), e);
        t != null &&
          (u.set(bt, a, t.history),
          o({ path: t.location.path, range: { end: t.location.position, start: t.location.position } }));
      }),
      (t[7] = a),
      (t[8] = o),
      (t[9] = u),
      (t[10] = m))
    : (m = t[10]);
  let h = m,
    g;
  t[11] !== i || t[12] !== s || t[13] !== l
    ? ((g = function (e) {
        if (!i) return !1;
        if (e?.originPanel != null) return s == null || e.originPanel === s;
        if (s == null) return !0;
        let t = l.current;
        return (
          t != null && (cn(document.activeElement, t) || cn(Ye(document.activeElement)?.focusNode ?? null, t))
        );
      }),
      (t[11] = i),
      (t[12] = s),
      (t[13] = l),
      (t[14] = g))
    : (g = t[14]);
  let v = g,
    y;
  t[15] !== s || t[16] !== l
    ? ((y = function (e, t) {
        if (t?.originPanel != null || s == null) return !0;
        let n = l.current;
        if (n == null) return !1;
        let r = e.composedPath()[0] ?? e.target ?? document.activeElement;
        return (r instanceof Node && cn(r, n)) || cn(Ye(r)?.focusNode ?? null, n);
      }),
      (t[15] = s),
      (t[16] = l),
      (t[17] = y))
    : (y = t[17]);
  let b = y,
    x;
  t[18] === p
    ? (x = t[19])
    : ((x = () => {
        p(document.activeElement);
      }),
      (t[18] = p),
      (t[19] = x));
  let S;
  t[20] === p
    ? (S = t[21])
    : ((S = (e) => {
        let t = p(e.composedPath()[0] ?? e.target ?? document.activeElement);
        return (t && e.stopPropagation(), t);
      }),
      (t[20] = p),
      (t[21] = S));
  let C;
  (t[22] !== n || t[23] !== v || t[24] !== S
    ? ((C = { enabled: n, isActive: v, keyboardHandler: S }),
      (t[22] = n),
      (t[23] = v),
      (t[24] = S),
      (t[25] = C))
    : (C = t[25]),
    Ke(`file.goToDefinition`, x, C));
  let w;
  t[26] === h
    ? (w = t[27])
    : ((w = () => {
        h(-1);
      }),
      (t[26] = h),
      (t[27] = w));
  let T = r && o != null && d.index > 0,
    E;
  t[28] === b ? (E = t[29]) : ((E = (e, t) => (b(e, t) ? void 0 : !1)), (t[28] = b), (t[29] = E));
  let D;
  (t[30] !== v || t[31] !== E || t[32] !== T
    ? ((D = { enabled: T, isActive: v, keyboardHandler: E }),
      (t[30] = v),
      (t[31] = E),
      (t[32] = T),
      (t[33] = D))
    : (D = t[33]),
    Ke(`file.navigateBack`, w, D));
  let O;
  t[34] === h
    ? (O = t[35])
    : ((O = () => {
        h(1);
      }),
      (t[34] = h),
      (t[35] = O));
  let k = r && o != null && d.index < d.entries.length - 1,
    A;
  t[36] === b ? (A = t[37]) : ((A = (e, t) => (b(e, t) ? void 0 : !1)), (t[36] = b), (t[37] = A));
  let j;
  return (
    t[38] !== v || t[39] !== k || t[40] !== A
      ? ((j = { enabled: k, isActive: v, keyboardHandler: A }),
        (t[38] = v),
        (t[39] = k),
        (t[40] = A),
        (t[41] = j))
      : (j = t[41]),
    Ke(`file.navigateForward`, O, j),
    null
  );
}
function sn() {}
function cn(e, t) {
  let n = e;
  for (; n != null;) {
    if (t.contains(n)) return !0;
    let e = n.getRootNode();
    n = e instanceof ShadowRoot ? e.host : null;
  }
  return !1;
}
var ln;
function un() {
  return (un = e(() => {
    ((ln = H()), C(), Oe(), K(), Rt(), xt());
  }))();
}
function dn(e) {
  let t = (0, vn.c)(10),
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
    d = (0, yn.useId)(),
    f = G(Ve, `1932174607`) && l,
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
      ? ((p = (0, Q.jsx)(fn, {
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
function fn(e) {
  let t = (0, vn.c)(75),
    {
      children: n,
      enabled: r,
      getFallbackContextMenuItems: i,
      isActive: a,
      languageFile: o,
      onOpenLocation: s,
      panelId: c,
      surfaceId: l,
      withContextMenu: u,
    } = e,
    d = _(q),
    f = E(Ft, l),
    p = (0, yn.useRef)(null),
    m;
  t[0] !== d || t[1] !== f
    ? ((m = () => () => {
        (Dt(d, f), Mt(d, f));
      }),
      (t[0] = d),
      (t[1] = f),
      (t[2] = m))
    : (m = t[2]);
  let h;
  (t[3] !== o.contents || t[4] !== d || t[5] !== f
    ? ((h = [d, f, o.contents]), (t[3] = o.contents), (t[4] = d), (t[5] = f), (t[6] = h))
    : (h = t[6]),
    (0, yn.useEffect)(m, h));
  let g;
  t[7] === r ? (g = t[8]) : ((g = { enabled: r }), (t[7] = r), (t[8] = g));
  let { data: v } = G(It, o, g),
    y = r && v?.hover === !0,
    b = r && (v === void 0 || y),
    x,
    S,
    C,
    w,
    T;
  if (
    t[9] !== v?.locationKinds ||
    t[10] !== n ||
    t[11] !== r ||
    t[12] !== b ||
    t[13] !== o ||
    t[14] !== s ||
    t[15] !== d ||
    t[16] !== f
  ) {
    ((w = r ? (v?.locationKinds ?? []) : []),
      (S = s != null && w.includes(`definition`)),
      (x = s != null && w.length > 0));
    let e;
    t[22] !== o || t[23] !== s || t[24] !== d || t[25] !== f
      ? ((e = function (e, t) {
          s != null && (kt(d, f, t.element), At(d, f, o, e, t, s).catch(pn));
        }),
        (t[22] = o),
        (t[23] = s),
        (t[24] = d),
        (t[25] = f),
        (t[26] = e))
      : (e = t[26]);
    let i = e,
      a = function (e, t) {
        !S ||
          !(t.metaKey || t.ctrlKey) ||
          (`side` in e && e.side === `deletions`) ||
          (t.preventDefault(), i(`definition`, { element: e.tokenElement, position: mn(e) }));
      },
      c;
    t[27] !== o || t[28] !== d || t[29] !== f
      ? ((c = function (e) {
          (`side` in e && e.side === `deletions`) ||
            Ct(d, f, o, { element: e.tokenElement, position: mn(e) });
        }),
        (t[27] = o),
        (t[28] = d),
        (t[29] = f),
        (t[30] = c))
      : (c = t[30]);
    let l = c,
      u;
    t[31] !== d || t[32] !== f
      ? ((u = function (e) {
          wt(d, f, e.tokenElement);
        }),
        (t[31] = d),
        (t[32] = f),
        (t[33] = u))
      : (u = t[33]);
    let p = u,
      m;
    (t[34] !== x || t[35] !== d || t[36] !== f
      ? ((m = function (e) {
          let t = x ? hn(e.nativeEvent.composedPath()) : null;
          d.set(f.contextTarget$, t);
        }),
        (t[34] = x),
        (t[35] = d),
        (t[36] = f),
        (t[37] = m))
      : (m = t[37]),
      (C = m),
      (T = n({
        definitionNavigationEnabled: S,
        fileOptions: {
          onTokenClick: S ? a : void 0,
          onTokenEnter: b ? l : void 0,
          onTokenLeave: b ? p : void 0,
        },
        getContextMenuItems: () =>
          s == null ? [] : zt({ scope: d, surface: f, languageFile: o, locationKinds: w, onOpenLocation: s }),
        onContextMenu: C,
      })),
      (t[9] = v?.locationKinds),
      (t[10] = n),
      (t[11] = r),
      (t[12] = b),
      (t[13] = o),
      (t[14] = s),
      (t[15] = d),
      (t[16] = f),
      (t[17] = x),
      (t[18] = S),
      (t[19] = C),
      (t[20] = w),
      (t[21] = T));
  } else ((x = t[17]), (S = t[18]), (C = t[19]), (w = t[20]), (T = t[21]));
  let D = T,
    O = u ? `h-full` : `contents`,
    k = u && x ? C : void 0,
    A;
  t[38] !== D || t[39] !== O || t[40] !== k
    ? ((A = (0, Q.jsx)(`div`, { ref: p, className: O, onContextMenu: k, children: D })),
      (t[38] = D),
      (t[39] = O),
      (t[40] = k),
      (t[41] = A))
    : (A = t[41]);
  let j = A,
    M;
  t[42] !== x ||
  t[43] !== i ||
  t[44] !== o ||
  t[45] !== w ||
  t[46] !== s ||
  t[47] !== f ||
  t[48] !== j ||
  t[49] !== u
    ? ((M =
        u && x
          ? (0, Q.jsx)(Ut, {
              getFallbackItems: i,
              languageFile: o,
              locationKinds: w,
              onOpenLocation: s,
              surface: f,
              children: j,
            })
          : j),
      (t[42] = x),
      (t[43] = i),
      (t[44] = o),
      (t[45] = w),
      (t[46] = s),
      (t[47] = f),
      (t[48] = j),
      (t[49] = u),
      (t[50] = M))
    : (M = t[50]);
  let N;
  t[51] !== S || t[52] !== r || t[53] !== a || t[54] !== o || t[55] !== s || t[56] !== c || t[57] !== f
    ? ((N = (0, Q.jsx)(on, {
        definitionNavigationEnabled: S,
        enabled: r,
        isActive: a,
        languageFile: o,
        onOpenLocation: s,
        panelId: c,
        surface: f,
        surfaceRef: p,
      })),
      (t[51] = S),
      (t[52] = r),
      (t[53] = a),
      (t[54] = o),
      (t[55] = s),
      (t[56] = c),
      (t[57] = f),
      (t[58] = N))
    : (N = t[58]);
  let P;
  t[59] !== r || t[60] !== y || t[61] !== o || t[62] !== f || t[63] !== l
    ? ((P = r
        ? (0, Q.jsx)(_n, { languageFile: o, retryEnabled: y, surface: f, surfaceId: l, surfaceRef: p })
        : null),
      (t[59] = r),
      (t[60] = y),
      (t[61] = o),
      (t[62] = f),
      (t[63] = l),
      (t[64] = P))
    : (P = t[64]);
  let F;
  t[65] !== r || t[66] !== o || t[67] !== s || t[68] !== f
    ? ((F = !r || s == null ? null : (0, Q.jsx)(Zt, { languageFile: o, onOpenLocation: s, surface: f })),
      (t[65] = r),
      (t[66] = o),
      (t[67] = s),
      (t[68] = f),
      (t[69] = F))
    : (F = t[69]);
  let I;
  return (
    t[70] !== P || t[71] !== F || t[72] !== M || t[73] !== N
      ? ((I = (0, Q.jsxs)(Q.Fragment, { children: [M, N, P, F] })),
        (t[70] = P),
        (t[71] = F),
        (t[72] = M),
        (t[73] = N),
        (t[74] = I))
      : (I = t[74]),
    I
  );
}
function pn() {}
function mn(e) {
  return { character: e.lineCharStart, line: e.lineNumber - 1 };
}
function hn(e) {
  let t = e.find((e) => e instanceof HTMLElement && e.dataset.char != null),
    n = e.find((e) => e instanceof HTMLElement && e.dataset.line != null);
  return t == null || n == null ? null : St(t, n);
}
function gn(e) {
  if (e == null) return null;
  let t = [e];
  for (let e = 0; e < t.length; e += 1) {
    let n = t[e],
      r = n?.querySelector(`[data-char]:hover`),
      i = r?.closest(`[data-line]`);
    if (r != null && i != null) return St(r, i);
    for (let e of n?.querySelectorAll(`*`) ?? []) e.shadowRoot != null && t.push(e.shadowRoot);
  }
  return null;
}
function _n(e) {
  let t = (0, vn.c)(64),
    { languageFile: n, retryEnabled: r, surface: i, surfaceId: a, surfaceRef: o } = e,
    s = _(q),
    c = N(i.hoverTarget$),
    l;
  t[0] === n.contents ? (l = t[1]) : ((l = Me(n.contents)), (t[0] = n.contents), (t[1] = l));
  let u = l,
    d;
  t[2] !== u || t[3] !== n || t[4] !== a
    ? ((d = { contentsHash: u, languageFile: n, surfaceId: a }),
      (t[2] = u),
      (t[3] = n),
      (t[4] = a),
      (t[5] = d))
    : (d = t[5]);
  let { data: f, isLoading: p } = G(Lt, d),
    m;
  t[6] === n.path ? (m = t[7]) : ((m = He(n.path)), (t[6] = n.path), (t[7] = m));
  let h = m,
    v = f == null && !p && r && c != null && c.retryCount < 2,
    y,
    b;
  (t[8] !== f || t[9] !== c || t[10] !== n || t[11] !== r || t[12] !== s || t[13] !== i || t[14] !== o
    ? ((y = () => {
        if (f === void 0 || f != null || !r || c == null || c.retryCount >= 2) return;
        let e = setTimeout(() => {
          if (s.get(i.hoverTarget$) !== c) return;
          let e = gn(o.current) ?? (c.element.isConnected ? c : null);
          e?.position.line === c.position.line &&
            e.position.character === c.position.character &&
            Ct(s, i, n, e, c.retryCount + 1);
        }, bn);
        return () => clearTimeout(e);
      }),
      (b = [f, c, n, r, s, i, o]),
      (t[8] = f),
      (t[9] = c),
      (t[10] = n),
      (t[11] = r),
      (t[12] = s),
      (t[13] = i),
      (t[14] = o),
      (t[15] = y),
      (t[16] = b))
    : ((y = t[15]), (b = t[16])),
    (0, yn.useEffect)(y, b));
  let x;
  t[17] !== f ||
  t[18] !== c ||
  t[19] !== p ||
  t[20] !== v ||
  t[21] !== s ||
  t[22] !== i.hoverTarget$ ||
  t[23] !== o
    ? ((x = () => {
        if ((f == null && !p && !v) || c == null || c.element.isConnected) return;
        let e = gn(o.current);
        e?.position.line === c.position.line &&
          e.position.character === c.position.character &&
          s.set(i.hoverTarget$, { ...c, element: e.element });
      }),
      (t[17] = f),
      (t[18] = c),
      (t[19] = p),
      (t[20] = v),
      (t[21] = s),
      (t[22] = i.hoverTarget$),
      (t[23] = o),
      (t[24] = x))
    : (x = t[24]);
  let S;
  (t[25] !== f || t[26] !== c || t[27] !== p || t[28] !== v || t[29] !== s || t[30] !== i || t[31] !== o
    ? ((S = [f, c, p, v, s, i, o]),
      (t[25] = f),
      (t[26] = c),
      (t[27] = p),
      (t[28] = v),
      (t[29] = s),
      (t[30] = i),
      (t[31] = o),
      (t[32] = S))
    : (S = t[32]),
    (0, yn.useEffect)(x, S));
  let C, w;
  if (
    (t[33] !== f || t[34] !== c || t[35] !== p || t[36] !== v || t[37] !== n.contents
      ? ((C = () => {
          if ((f == null && !p && !v) || c == null || c.contents !== n.contents) return;
          let e = c.element;
          return (
            Ot(e, !0),
            () => {
              Ot(e, !1);
            }
          );
        }),
        (w = [f, c, p, v, n.contents]),
        (t[33] = f),
        (t[34] = c),
        (t[35] = p),
        (t[36] = v),
        (t[37] = n.contents),
        (t[38] = C),
        (t[39] = w))
      : ((C = t[38]), (w = t[39])),
    (0, yn.useEffect)(C, w),
    (f == null && !p && !v) || c == null || c.contents !== n.contents)
  )
    return null;
  let T;
  t[40] !== s || t[41] !== i
    ? ((T = (e) => {
        e || Dt(s, i);
      }),
      (t[40] = s),
      (t[41] = i),
      (t[42] = T))
    : (T = t[42]);
  let E;
  t[43] === i
    ? (E = t[44])
    : ((E = (e) => {
        Et(i, e);
      }),
      (t[43] = i),
      (t[44] = E));
  let D;
  t[45] === i ? (D = t[46]) : ((D = () => Tt(i)), (t[45] = i), (t[46] = D));
  let O;
  t[47] !== c.element || t[48] !== s || t[49] !== i
    ? ((O = () => wt(s, i, c.element)), (t[47] = c.element), (t[48] = s), (t[49] = i), (t[50] = O))
    : (O = t[50]);
  let k;
  t[51] !== f || t[52] !== h
    ? ((k =
        f == null
          ? (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-secondary select-none`,
              role: `status`,
              children: [
                (0, Q.jsx)(me, { as: `span`, className: `icon-xxs` }),
                (0, Q.jsx)(g, {
                  id: `review.fileLanguage.hover.loading`,
                  defaultMessage: `Loading type information…`,
                  description: `Status shown in a code hover while type information is loading from a language server`,
                }),
              ],
            })
          : (0, Q.jsx)(qt, { hover: f, language: h === `tsx` ? `typescript` : h })),
      (t[51] = f),
      (t[52] = h),
      (t[53] = k))
    : (k = t[53]);
  let A;
  t[54] !== E || t[55] !== D || t[56] !== O || t[57] !== k
    ? ((A = (0, Q.jsx)(`div`, {
        ref: E,
        className: `p-3`,
        onPointerEnter: D,
        onPointerLeave: O,
        children: k,
      })),
      (t[54] = E),
      (t[55] = D),
      (t[56] = O),
      (t[57] = k),
      (t[58] = A))
    : (A = t[58]);
  let j;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Q.jsx)(`span`, { "aria-hidden": !0 })), (t[59] = j))
    : (j = t[59]);
  let M;
  return (
    t[60] !== c.element || t[61] !== T || t[62] !== A
      ? ((M = (0, Q.jsx)(ye, {
          closeOnPointerLeave: !1,
          disableHoverOpen: !0,
          forceMount: !0,
          interactive: !0,
          open: !0,
          onOpenChange: T,
          positioningElement: c.element,
          side: `top`,
          tooltipContent: A,
          variant: `rich`,
          children: j,
        })),
        (t[60] = c.element),
        (t[61] = T),
        (t[62] = A),
        (t[63] = M))
      : (M = t[63]),
    M
  );
}
var vn, yn, Q, bn;
function xn() {
  return (xn = e(() => {
    ((vn = H()),
      C(),
      (yn = Te()),
      B(),
      se(),
      re(),
      K(),
      je(),
      Kt(),
      Ht(),
      Rt(),
      tt(),
      Xt(),
      an(),
      un(),
      (Q = U()),
      (bn = 500));
  }))();
}
function Sn(e) {
  let t = (0, wn.c)(12),
    { hostId: n, root: r } = e,
    i = j(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage({
        id: `files.search.allFiles`,
        defaultMessage: `Search in files`,
        description: `Button in the Files toolbar that searches text across the workspace`,
      })),
      (t[0] = i),
      (t[1] = a));
  let o = a,
    s;
  t[2] !== n || t[3] !== r
    ? ((s = () => ae.dispatchHostMessage({ type: `find-in-files`, target: { hostId: n, root: r } })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Tn.jsx)(b, { asset: F })), (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] !== o || t[7] !== s
    ? ((l = (0, Tn.jsx)(ue, { "aria-label": o, uniform: !0, onMouseDown: Cn, onClick: s, children: c })),
      (t[6] = o),
      (t[7] = s),
      (t[8] = l))
    : (l = t[8]);
  let u;
  return (
    t[9] !== o || t[10] !== l
      ? ((u = (0, Tn.jsx)(ye, { tooltipContent: o, delayOpen: !0, children: l })),
        (t[9] = o),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function Cn(e) {
  return e.preventDefault();
}
var wn, Tn;
function En() {
  return (En = e(() => {
    ((wn = H()), P(), B(), x(), re(), oe(), u(), (Tn = U()));
  }))();
}
function Dn(e) {
  let t = (0, Fn.c)(64),
    {
      cwd: r,
      hostId: i,
      onSelectFile: a,
      path: o,
      pathActions: s,
      preserveFolderSelection: l,
      trailingContent: u,
      workspaceRoot: d,
    } = e,
    m = l !== void 0 && l,
    h = j(),
    g,
    _,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A;
  if (t[0] !== r || t[1] !== i || t[2] !== h || t[3] !== a || t[4] !== o || t[5] !== m || t[6] !== d) {
    S = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = o == null ? [Mn(d ?? r)] : Pe({ cwd: r, path: o, workspaceRoot: d });
      if (e.length === 0) {
        S = null;
        break bb0;
      }
      let s = e.join(`/`),
        l = o == null ? s : c(De({ cwd: r, path: o, workspaceRoot: d })),
        u;
      t[21] !== r || t[22] !== o || t[23] !== d
        ? ((u = o == null || d == null ? null : Fe({ cwd: r, path: o, workspaceRoot: d })),
          (t[21] = r),
          (t[22] = o),
          (t[23] = d),
          (t[24] = u))
        : (u = t[24]);
      let v = u;
      ((_ = n),
        (b = `group`),
        (x = `compact`),
        (k = `file-path`),
        (A = !0),
        (y = !0),
        (g = he),
        (O = `flex min-w-0 items-center`),
        t[25] === h
          ? (E = t[26])
          : ((E = h.formatMessage({
              id: `review.fileSource.breadcrumb.ariaLabel`,
              defaultMessage: `File path`,
              description: `Accessible label for breadcrumbs above a workspace file preview`,
            })),
            (t[25] = h),
            (t[26] = E)),
        (D = `hide-scrollbar flex h-full min-w-0 flex-row-reverse items-center overflow-x-auto px-2`),
        (C = `flex flex-1 items-center gap-1 text-sm text-secondary select-text`),
        (w = (e) => {
          let t = Pn(e.currentTarget);
          t != null && (e.preventDefault(), e.clipboardData.setData(`text/plain`, t === s ? l : t));
        }),
        (T = e.map((t, n) => {
          let r = n === e.length - 1,
            o = v?.[n],
            s = ie(`whitespace-nowrap`, r && `font-medium text-default`);
          return (0, $.jsxs)(
            `li`,
            {
              className: `flex shrink-0 items-center gap-1`,
              children: [
                o == null || i == null || a == null || d == null
                  ? (0, $.jsx)(`span`, { className: s, children: t })
                  : (0, $.jsx)(On, {
                      activePath: o.activePath,
                      directoryPath: o.directoryPath,
                      hostId: i,
                      shouldExpandActivePath: !r,
                      label: t,
                      labelClassName: s,
                      onSelectFile: a,
                      preserveFolderSelection: m,
                      root: d,
                    }),
                r
                  ? null
                  : (0, $.jsx)(p, {
                      className: `shrink-0 text-tertiary`,
                      legacyIcon: xe,
                      asset16: f,
                      legacyClassName: `icon-2xs`,
                      "aria-hidden": !0,
                    }),
              ],
            },
            `${n}:${t}`,
          );
        })));
    }
    ((t[0] = r),
      (t[1] = i),
      (t[2] = h),
      (t[3] = a),
      (t[4] = o),
      (t[5] = m),
      (t[6] = d),
      (t[7] = g),
      (t[8] = _),
      (t[9] = y),
      (t[10] = b),
      (t[11] = x),
      (t[12] = S),
      (t[13] = C),
      (t[14] = w),
      (t[15] = T),
      (t[16] = E),
      (t[17] = D),
      (t[18] = O),
      (t[19] = k),
      (t[20] = A));
  } else
    ((g = t[7]),
      (_ = t[8]),
      (y = t[9]),
      (b = t[10]),
      (x = t[11]),
      (S = t[12]),
      (C = t[13]),
      (w = t[14]),
      (T = t[15]),
      (E = t[16]),
      (D = t[17]),
      (O = t[18]),
      (k = t[19]),
      (A = t[20]));
  if (S !== Symbol.for(`react.early_return_sentinel`)) return S;
  let M;
  t[27] !== C || t[28] !== w || t[29] !== T
    ? ((M = (0, $.jsx)(`ol`, { className: C, onCopy: w, children: T })),
      (t[27] = C),
      (t[28] = w),
      (t[29] = T),
      (t[30] = M))
    : (M = t[30]);
  let N;
  t[31] !== M || t[32] !== E || t[33] !== D
    ? ((N = (0, $.jsx)(`nav`, { "aria-label": E, className: D, children: M })),
      (t[31] = M),
      (t[32] = E),
      (t[33] = D),
      (t[34] = N))
    : (N = t[34]);
  let P;
  t[35] !== g || t[36] !== N || t[37] !== O
    ? ((P = (0, $.jsx)(g, { className: O, children: N })), (t[35] = g), (t[36] = N), (t[37] = O), (t[38] = P))
    : (P = t[38]);
  let F;
  t[39] !== y || t[40] !== P || t[41] !== k || t[42] !== A
    ? ((F = { id: k, allowShrink: A, grow: y, content: P }),
      (t[39] = y),
      (t[40] = P),
      (t[41] = k),
      (t[42] = A),
      (t[43] = F))
    : (F = t[43]);
  let I;
  t[44] === s ? (I = t[45]) : ((I = { id: `path-actions`, content: s }), (t[44] = s), (t[45] = I));
  let L;
  t[46] !== i || t[47] !== a || t[48] !== d
    ? ((L =
        i != null && i !== `durable` && d != null && a != null && v.workspaceSearch != null
          ? (0, $.jsx)(Sn, { hostId: i, root: d })
          : null),
      (t[46] = i),
      (t[47] = a),
      (t[48] = d),
      (t[49] = L))
    : (L = t[49]);
  let R;
  t[50] === L ? (R = t[51]) : ((R = { id: `workspace-search`, content: L }), (t[50] = L), (t[51] = R));
  let z;
  t[52] === u ? (z = t[53]) : ((z = { id: `file-actions`, content: u }), (t[52] = u), (t[53] = z));
  let ee;
  t[54] !== F || t[55] !== I || t[56] !== R || t[57] !== z
    ? ((ee = [F, I, R, z]), (t[54] = F), (t[55] = I), (t[56] = R), (t[57] = z), (t[58] = ee))
    : (ee = t[58]);
  let te;
  return (
    t[59] !== _ || t[60] !== b || t[61] !== x || t[62] !== ee
      ? ((te = (0, $.jsx)(_, { className: b, density: x, leading: ee })),
        (t[59] = _),
        (t[60] = b),
        (t[61] = x),
        (t[62] = ee),
        (t[63] = te))
      : (te = t[63]),
    te
  );
}
function On(e) {
  let t = (0, Fn.c)(30),
    {
      activePath: n,
      directoryPath: r,
      hostId: i,
      shouldExpandActivePath: a,
      label: s,
      labelClassName: c,
      onSelectFile: l,
      preserveFolderSelection: u,
      root: d,
    } = e,
    [f, p] = (0, In.useState)(!1),
    m;
  t[0] === d ? (m = t[1]) : ((m = pe(d)), (t[0] = d), (t[1] = m));
  let g = a ? `workspace` : `file`,
    _;
  t[2] !== n || t[3] !== d
    ? ((_ = n == null ? d : O(d, ...n.split(`/`))), (t[2] = n), (t[3] = d), (t[4] = _))
    : (_ = t[4]);
  let v;
  t[5] === c
    ? (v = t[6])
    : ((v = ie(
        c,
        `cursor-interaction outline-none hover:text-default focus-visible:ring-2 focus-visible:ring-ring`,
      )),
      (t[5] = c),
      (t[6] = v));
  let y;
  t[7] !== s || t[8] !== v
    ? ((y = (0, $.jsx)(h, {
        asChild: !0,
        children: (0, $.jsx)(`button`, { type: `button`, className: v, children: s }),
      })),
      (t[7] = s),
      (t[8] = v),
      (t[9] = y))
    : (y = t[9]);
  let b;
  t[10] !== i || t[11] !== m || t[12] !== g || t[13] !== _ || t[14] !== y
    ? ((b = (0, $.jsx)(rt, { cwd: m, hostId: i, openMode: g, path: _, children: y })),
      (t[10] = i),
      (t[11] = m),
      (t[12] = g),
      (t[13] = _),
      (t[14] = y),
      (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] === l
    ? (x = t[17])
    : ((x = (e, t) => {
        (p(!1), l(e, t));
      }),
      (t[16] = l),
      (t[17] = x));
  let S;
  t[18] !== n || t[19] !== r || t[20] !== i || t[21] !== u || t[22] !== d || t[23] !== a || t[24] !== x
    ? ((S = (0, $.jsx)(o, {
        className: `h-80`,
        opaque: !0,
        sideOffset: 1,
        size: `large`,
        children: (0, $.jsx)(kn, {
          activePath: n,
          directoryPath: r,
          hostId: i,
          shouldExpandActivePath: a,
          preserveFolderSelection: u,
          onSelectFile: x,
          root: d,
        }),
      })),
      (t[18] = n),
      (t[19] = r),
      (t[20] = i),
      (t[21] = u),
      (t[22] = d),
      (t[23] = a),
      (t[24] = x),
      (t[25] = S))
    : (S = t[25]);
  let C;
  return (
    t[26] !== f || t[27] !== b || t[28] !== S
      ? ((C = (0, $.jsxs)(T, { open: f, onOpenChange: p, children: [b, S] })),
        (t[26] = f),
        (t[27] = b),
        (t[28] = S),
        (t[29] = C))
      : (C = t[29]),
    C
  );
}
function kn(e) {
  let t = (0, Fn.c)(41),
    {
      activePath: n,
      directoryPath: r,
      hostId: i,
      shouldExpandActivePath: a,
      onSelectFile: o,
      preserveFolderSelection: s,
      root: c,
    } = e,
    l;
  t[0] !== n || t[1] !== r
    ? ((l = n == null ? null : An(n, r)), (t[0] = n), (t[1] = r), (t[2] = l))
    : (l = t[2]);
  let u = l,
    [d, f] = (0, In.useState)(u),
    p;
  t[3] !== u || t[4] !== a
    ? ((p = () => (a && u != null ? [u] : [])), (t[3] = u), (t[4] = a), (t[5] = p))
    : (p = t[5]);
  let [m, h] = (0, In.useState)(p),
    _;
  if (t[6] !== r || t[7] !== m) {
    let e;
    (t[9] === r ? (e = t[10]) : ((e = (e) => jn(e, r)), (t[9] = r), (t[10] = e)),
      (_ = m.map(e)),
      (t[6] = r),
      (t[7] = m),
      (t[8] = _));
  } else _ = t[8];
  let v;
  t[11] !== r || t[12] !== i || t[13] !== c || t[14] !== _
    ? ((v = {
        directoryPath: r,
        expandedPaths: _,
        hostId: i,
        includeHidden: !0,
        refreshKey: void 0,
        workspaceRoot: c,
      }),
      (t[11] = r),
      (t[12] = i),
      (t[13] = c),
      (t[14] = _),
      (t[15] = v))
    : (v = t[15]);
  let { error: y, files: b, isLoading: x } = G(Ze, v),
    S;
  t[16] === s
    ? (S = t[17])
    : ((S = (e) => {
        h((t) => {
          let n = e;
          if (s) {
            let r = t.filter((t) => !e.includes(t));
            n = e.filter((e) => !r.some((t) => e.startsWith(`${t}/`)));
          }
          return Nn(t, n) ? t : n;
        });
      }),
      (t[16] = s),
      (t[17] = S));
  let C = we(S),
    w;
  t[18] !== r || t[19] !== o || t[20] !== s || t[21] !== c
    ? ((w = (e) => {
        let t = e[0];
        (s && f(t ?? null), !(t == null || t.endsWith(`/`)) && o(M(c, jn(t, r)), { isPreview: !0 }));
      }),
      (t[18] = r),
      (t[19] = o),
      (t[20] = s),
      (t[21] = c),
      (t[22] = w))
    : (w = t[22]);
  let T = we(w);
  if (y != null) {
    let e;
    return (
      t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(k.Message, {
            role: `alert`,
            tone: `error`,
            children: (0, $.jsx)(g, {
              id: `review.fileSource.breadcrumb.directoryError`,
              defaultMessage: `Couldn't load folder contents`,
              description: `Error shown when a file path breadcrumb tree cannot load`,
            }),
          })),
          (t[23] = e))
        : (e = t[23]),
      e
    );
  }
  if (x) {
    let e;
    return (
      t[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(k.Message, {
            role: `status`,
            children: (0, $.jsx)(g, {
              id: `review.fileSource.breadcrumb.loadingDirectory`,
              defaultMessage: `Loading…`,
              description: `Loading state in a file path breadcrumb tree`,
            }),
          })),
          (t[24] = e))
        : (e = t[24]),
      e
    );
  }
  if (b.length === 0) {
    let e;
    return (
      t[25] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(k.Message, {
            children: (0, $.jsx)(g, {
              id: `review.fileSource.breadcrumb.emptyDirectory`,
              defaultMessage: `This folder is empty`,
              description: `Empty state in a file path breadcrumb tree`,
            }),
          })),
          (t[25] = e))
        : (e = t[25]),
      e
    );
  }
  let E;
  t[26] === c ? (E = t[27]) : ((E = pe(c)), (t[26] = c), (t[27] = E));
  let D;
  if (t[28] !== r || t[29] !== b) {
    let e;
    (t[31] === r
      ? (e = t[32])
      : ((e = (e) => ({ displayPath: An(e, r), path: e.endsWith(`/`) ? e.slice(0, -1) : e })),
        (t[31] = r),
        (t[32] = e)),
      (D = b.map(e)),
      (t[28] = r),
      (t[29] = b),
      (t[30] = D));
  } else D = t[30];
  let O = s ? d : u,
    A;
  return (
    t[33] !== m || t[34] !== C || t[35] !== T || t[36] !== i || t[37] !== E || t[38] !== D || t[39] !== O
      ? ((A = (0, $.jsx)(`div`, {
          className: `h-full min-h-0 w-full`,
          children: (0, $.jsx)(et, {
            cwd: E,
            hostId: i,
            initialExpandedPaths: m,
            onExpandedPathsChange: C,
            onSelectionChange: T,
            paths: D,
            revealSelectedPath: !0,
            revealSelectedPathScrollOffset: `center`,
            selectedPath: O,
            surface: `dropdown`,
          }),
        })),
        (t[33] = m),
        (t[34] = C),
        (t[35] = T),
        (t[36] = i),
        (t[37] = E),
        (t[38] = D),
        (t[39] = O),
        (t[40] = A))
      : (A = t[40]),
    A
  );
}
function An(e, t) {
  let n = t == null ? `` : `${t}/`;
  return e.slice(n.length);
}
function jn(e, t) {
  let n = e.endsWith(`/`) ? e.slice(0, -1) : e;
  return t == null ? n : `${t}/${n}`;
}
function Mn(e) {
  return c(e ?? ``).match(/^\/?([a-z]:)(?:\/|$)/i)?.[1] ?? `/`;
}
function Nn(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Pn(e) {
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
var Fn, In, $;
function Ln() {
  return (Ln = e(() => {
    ((Fn = H()),
      d(),
      R(),
      C(),
      ge(),
      (In = Te()),
      B(),
      a(),
      A(),
      le(),
      $e(),
      En(),
      Qe(),
      nt(),
      V(),
      fe(),
      y(),
      te(),
      u(),
      Le(),
      ($ = U()));
  }))();
}
export { lt as a, ct as c, xn as i, at as l, Ln as n, gt as o, dn as r, ot as s, Dn as t };
//# sourceMappingURL=review-file-source-breadcrumb-987458adbcad.js.map
