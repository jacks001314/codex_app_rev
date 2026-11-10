import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  Av as n,
  DB as r,
  DU as i,
  Dv as a,
  FBt as o,
  FE as s,
  Fv as c,
  Iv as l,
  LNt as u,
  Lgt as d,
  Lv as f,
  MFt as p,
  MNt as m,
  Mz as h,
  NNt as g,
  Nk as _,
  OB as v,
  OC as y,
  Ov as b,
  Oz as x,
  PBt as S,
  PE as C,
  Pk as w,
  TE as T,
  TY as E,
  XOt as D,
  XS as O,
  ZSt as k,
  _D as A,
  ast as j,
  ck as M,
  cmt as N,
  dO as P,
  fD as F,
  gB as I,
  gD as L,
  hB as R,
  ist as z,
  jFt as B,
  jv as ee,
  jz as te,
  kv as ne,
  lO as V,
  mD as H,
  nB as U,
  nCt as W,
  nO as re,
  okt as ie,
  rB as ae,
  rO as G,
  rk as oe,
  sct as se,
  tkt as ce,
  wB as le,
  xB as ue,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  E8t as de,
  K_t as fe,
  MOr as pe,
  O8t as me,
  Q2n as he,
  T8t as ge,
  Z2n as _e,
  a_t as ve,
  h_t as ye,
  j_t as be,
  k8t as xe,
  s_t as Se,
  v_t as Ce,
  zOr as we,
} from "./app-initial-ad16eaadf81f.js";
import { Qc as Te, Zc as Ee } from "./app-primary-3e00728c2a4c.js";
import { r as De, t as Oe } from "./workspace-directory-entries-query-6519c19f9a40.js";
import { n as ke, t as Ae } from "./base-file-tree-37c729271893.js";
import { n as je, t as K } from "./workspace-file-context-menu-trigger-6c6e3b98d857.js";
function Me(e, t) {
  let n = e.trim();
  if (!Fe.test(n)) return null;
  let r = Number(n);
  return !Number.isSafeInteger(r) || r === 0 ? null : t == null ? r : Ne(r, t);
}
function Ne(e, t) {
  let n = Math.max(1, t),
    r = e < 0 ? n + 1 + e : e;
  return Math.min(Math.max(1, r), n);
}
function Pe(e) {
  return e === `` ? 1 : e.split(/\r\n|\r|\n/).length;
}
var Fe;
function q() {
  return (q = e(() => {
    Fe = /^-?\d+$/;
  }))();
}
function Ie(e) {
  let n = (0, Ve.c)(117),
    {
      alignWithPaddedPierreFile: r,
      appearance: i,
      getKeyboardOwner: a,
      getLineCount: o,
      inputRef: s,
      onCancelPreview: c,
      onGoToLine: l,
      onOpen: u,
      onPreviewLine: d,
      pierreThemeKey: p,
      restoreFocus: h,
    } = e,
    g = r !== void 0 && r,
    _ = t(pe),
    v = ie(),
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
    [j, M] = (0, J.useState)(!1),
    [N, P] = (0, J.useState)(!1),
    [F, I] = (0, J.useState)(He),
    [L, R] = (0, J.useState)(``),
    z;
  n[0] !== o || n[1] !== j ? ((z = j ? o() : null), (n[0] = o), (n[1] = j), (n[2] = z)) : (z = n[2]);
  let B = z,
    te;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = () => {
        let e = Le(D.current);
        return (
          e != null &&
          (I((t) =>
            t.background === e.background && t.foreground === e.foreground && t.modified === e.modified
              ? t
              : e,
          ),
          !0)
        );
      }),
      (n[3] = te))
    : (te = n[3]);
  let V = te,
    H;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = () => {
        ((E.current += 1), (C.current = !1));
      }),
      (n[4] = H))
    : (H = n[4]);
  let U = H,
    W,
    re;
  (n[5] === c
    ? ((W = n[6]), (re = n[7]))
    : ((W = () => {
        T.current = c;
      }),
      (re = [c]),
      (n[5] = c),
      (n[6] = W),
      (n[7] = re)),
    (0, J.useEffect)(W, re));
  let ae;
  n[8] !== c || n[9] !== h
    ? ((ae = (e, t) => {
        let n = t === void 0 || t;
        x.current || ((x.current = !0), (S.current = !1), U(), M(!1), n && c?.(), e && h());
      }),
      (n[8] = c),
      (n[9] = h),
      (n[10] = ae))
    : (ae = n[10]);
  let G = ae,
    oe,
    se;
  (n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = () => () => {
        (X === w.current && (X = null), (w.current = null), S.current && (U(), T.current?.()));
      }),
      (se = [U]),
      (n[11] = oe),
      (n[12] = se))
    : ((oe = n[11]), (se = n[12])),
    (0, J.useEffect)(oe, se));
  let le;
  n[13] !== G || n[14] !== o || n[15] !== l || n[16] !== L
    ? ((le = () => {
        let e = Me(L, o());
        if (e == null) {
          P(!0);
          return;
        }
        (l(e), G(!0, !1));
      }),
      (n[13] = G),
      (n[14] = o),
      (n[15] = l),
      (n[16] = L),
      (n[17] = le))
    : (le = n[17]);
  let ue = le,
    de;
  if (n[18] !== o || n[19] !== b || n[20] !== d) {
    de = (n, r, i) => {
      let a = o();
      if (a == null) return;
      let s = Me(n, a);
      if (s == null || d == null) return;
      let c = E.current + 1;
      ((E.current = c), (C.current = !0), d(s), t(r, i), e(r, i, c));
    };
    let e = (n, r, i, a) => {
        let o = a === void 0 ? 0 : a;
        window.requestAnimationFrame(() => {
          if (E.current === i) {
            if ((t(n, r), o < 4)) {
              e(n, r, i, o + 1);
              return;
            }
            C.current = !1;
          }
        });
      },
      t = (e, t) => {
        let n = b.current;
        n != null &&
          document.activeElement !== n &&
          (n.focus({ preventScroll: !0 }), e != null && t != null && n.setSelectionRange(e, t));
      };
    ((n[18] = o), (n[19] = b), (n[20] = d), (n[21] = de));
  } else de = n[21];
  let me, ge;
  (n[22] === a
    ? ((me = n[23]), (ge = n[24]))
    : ((me = () => {
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
      (ge = [a]),
      (n[22] = a),
      (n[23] = me),
      (n[24] = ge)),
    (0, J.useEffect)(me, ge));
  let _e, be;
  (n[25] !== G || n[26] !== j
    ? ((_e = () => {
        if (!j) return;
        let e = (e) => {
          let t = D.current;
          t != null && e.target instanceof Node && !t.contains(e.target) && G(!1, !1);
        };
        return (
          document.addEventListener(`pointerdown`, e, !0),
          () => {
            document.removeEventListener(`pointerdown`, e, !0);
          }
        );
      }),
      (be = [G, j]),
      (n[25] = G),
      (n[26] = j),
      (n[27] = _e),
      (n[28] = be))
    : ((_e = n[27]), (be = n[28])),
    (0, J.useEffect)(_e, be));
  let xe, we;
  (n[29] !== i || n[30] !== j
    ? ((xe = () => {
        j && i === `pierre` && V();
      }),
      (we = [i, j, V]),
      (n[29] = i),
      (n[30] = j),
      (n[31] = xe),
      (n[32] = we))
    : ((xe = n[31]), (we = n[32])),
    (0, J.useLayoutEffect)(xe, we));
  let Ee, De;
  (n[33] !== i || n[34] !== j || n[35] !== p
    ? ((Ee = () => {
        if (!j || i !== `pierre` || p == null) return;
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
            ((t.length = 0), (r = n), V());
            let i = new MutationObserver(V);
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
                    ((c = new MutationObserver(V)),
                    c.observe(e, { characterData: !0, childList: !0, subtree: !0 }),
                    t.push(c)),
                  V());
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
      (De = [i, j, p, V]),
      (n[33] = i),
      (n[34] = j),
      (n[35] = p),
      (n[36] = Ee),
      (n[37] = De))
    : ((Ee = n[36]), (De = n[37])),
    (0, J.useEffect)(Ee, De));
  let Oe;
  n[38] !== b || n[39] !== j || n[40] !== u || n[41] !== _
    ? ((Oe = () => {
        if (_.get(Ce) === `browser`) {
          let e = _.get(ye);
          (e != null && f({ ...e, command: { type: `close-find` } }, Te), fe(_, ve));
        }
        if ((Se(_), j)) {
          (b.current?.focus(), b.current?.select());
          return;
        }
        (P(!1), R(``), (x.current = !1), (S.current = !0), u?.(), M(!0));
      }),
      (n[38] = b),
      (n[39] = j),
      (n[40] = u),
      (n[41] = _),
      (n[42] = Oe))
    : (Oe = n[42]);
  let ke;
  if (
    (n[43] === a
      ? (ke = n[44])
      : ((ke = {
          isActive: (e) => Be(e?.originPanel, a(), D.current),
          keyboardHandler: (e) => {
            if (!ze(e, a(), D.current)) return !1;
          },
        }),
        (n[43] = a),
        (n[44] = ke)),
    he(`goToLine`, Oe, ke),
    !j)
  )
    return null;
  let Ae;
  n[45] !== F.background || n[46] !== F.foreground || n[47] !== F.modified
    ? ((Ae = {
        "--go-to-line-bg": F.background,
        "--go-to-line-fg": F.foreground,
        "--go-to-line-modified-base": F.modified,
      }),
      (n[45] = F.background),
      (n[46] = F.foreground),
      (n[47] = F.modified),
      (n[48] = Ae))
    : (Ae = n[48]);
  let je = Ae,
    K = i === `pierre`,
    Ne;
  n[49] === v
    ? (Ne = n[50])
    : ((Ne = v.formatMessage({
        id: `codex.goToLine.close`,
        defaultMessage: `Close go to line`,
        description: `Button label to close the go to line input`,
      })),
      (n[49] = v),
      (n[50] = Ne));
  let Pe = Ne,
    Fe;
  n[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, Y.jsx)(ce, {
        id: `codex.goToLine.label`,
        defaultMessage: `Go to line`,
        description: `Accessible label for the go to line input`,
      })),
      (n[51] = Fe))
    : (Fe = n[51]);
  let q;
  n[52] === O
    ? (q = n[53])
    : ((q = (0, Y.jsx)(`label`, { className: `sr-only`, htmlFor: O, children: Fe })),
      (n[52] = O),
      (n[53] = q));
  let Ie = B == null ? void 0 : k,
    Ue = N ? A : void 0,
    We = N || void 0,
    Ge;
  n[54] !== v || n[55] !== K
    ? ((Ge = K
        ? v.formatMessage({
            id: `codex.goToLine.fieldLabel`,
            defaultMessage: `Line`,
            description: `Visual label shown before the go to line input`,
          })
        : void 0),
      (n[54] = v),
      (n[55] = K),
      (n[56] = Ge))
    : (Ge = n[56]);
  let Ke = K
      ? `h-7 w-full min-w-0 grow rounded-[6px] border border-[color-mix(in_lab,var(--go-to-line-fg)_12%,var(--go-to-line-bg))] bg-[var(--go-to-line-bg)] px-[6px] py-px text-[13px] leading-6 text-[var(--go-to-line-fg)] outline-none placeholder:text-tertiary selection:bg-[color-mix(in_lab,var(--go-to-line-fg)_8%,var(--go-to-line-bg))] focus-visible:outline-2 focus-visible:outline-[var(--go-to-line-modified-base)] focus-visible:outline-solid`
      : `h-6 w-24 min-w-0 bg-transparent text-base leading-6 text-default outline-none focus:!outline-none`,
    qe = N ? (K ? `border-text-danger text-danger` : `text-danger`) : null,
    Je;
  n[57] !== Ke || n[58] !== qe ? ((Je = m(Ke, qe)), (n[57] = Ke), (n[58] = qe), (n[59] = Je)) : (Je = n[59]);
  let Ye;
  n[60] === de
    ? (Ye = n[61])
    : ((Ye = (e) => {
        let t = e.target.value;
        (R(t), P(!1), de(t, e.target.selectionStart, e.target.selectionEnd));
      }),
      (n[60] = de),
      (n[61] = Ye));
  let Xe;
  n[62] === a
    ? (Xe = n[63])
    : ((Xe = () => {
        let e = a();
        e != null && (X = e);
      }),
      (n[62] = a),
      (n[63] = Xe));
  let Ze;
  n[64] === ue
    ? (Ze = n[65])
    : ((Ze = (e) => {
        if (e.key === `Tab`) {
          U();
          return;
        }
        e.key === `Enter` && (e.preventDefault(), ue());
      }),
      (n[64] = ue),
      (n[65] = Ze));
  let Qe;
  n[66] !== O ||
  n[67] !== b ||
  n[68] !== Ie ||
  n[69] !== Ue ||
  n[70] !== We ||
  n[71] !== Ge ||
  n[72] !== Je ||
  n[73] !== Ye ||
  n[74] !== Xe ||
  n[75] !== Ze ||
  n[76] !== L
    ? ((Qe = (0, Y.jsx)(`input`, {
        id: O,
        ref: b,
        type: `text`,
        inputMode: `numeric`,
        autoComplete: `off`,
        autoFocus: !0,
        "aria-describedby": Ie,
        "aria-errormessage": Ue,
        "aria-invalid": We,
        placeholder: Ge,
        className: Je,
        value: L,
        onChange: Ye,
        onFocus: Xe,
        onKeyDown: Ze,
      })),
      (n[66] = O),
      (n[67] = b),
      (n[68] = Ie),
      (n[69] = Ue),
      (n[70] = We),
      (n[71] = Ge),
      (n[72] = Je),
      (n[73] = Ye),
      (n[74] = Xe),
      (n[75] = Ze),
      (n[76] = L),
      (n[77] = Qe))
    : (Qe = n[77]);
  let $e;
  n[78] !== q || n[79] !== Qe
    ? (($e = (0, Y.jsxs)(Y.Fragment, { children: [q, Qe] })), (n[78] = q), (n[79] = Qe), (n[80] = $e))
    : ($e = n[80]);
  let et = $e,
    tt;
  n[81] !== K || n[82] !== B || n[83] !== k || n[84] !== L
    ? ((tt =
        B == null
          ? null
          : (0, Y.jsx)(`span`, {
              id: k,
              className: m(
                K
                  ? `flex min-w-[50px] shrink-0 items-center text-[12px] leading-5 font-medium whitespace-nowrap`
                  : `col-[2/3] row-[1] flex h-[44px] items-center px-2 text-base leading-6 text-codex-description`,
                K &&
                  (L.trim().length === 0
                    ? `text-[color-mix(in_lab,var(--go-to-line-fg)_35%,var(--go-to-line-bg))]`
                    : `text-[color-mix(in_lab,var(--go-to-line-fg)_50%,var(--go-to-line-bg))]`),
              ),
              children: (0, Y.jsx)(ce, {
                id: `codex.goToLine.range`,
                defaultMessage: `1–{lineCount}`,
                description: `Current valid line range shown in the go to line input`,
                values: { lineCount: B },
              }),
            })),
      (n[81] = K),
      (n[82] = B),
      (n[83] = k),
      (n[84] = L),
      (n[85] = tt))
    : (tt = n[85]);
  let nt = tt,
    rt;
  n[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (0, Y.jsx)(ce, {
        id: `codex.goToLine.error`,
        defaultMessage: `Enter a valid whole line number`,
        description: `Accessible error for an invalid go to line value`,
      })),
      (n[86] = rt))
    : (rt = n[86]);
  let it;
  n[87] === A
    ? (it = n[88])
    : ((it = (0, Y.jsx)(`span`, { id: A, className: `sr-only`, children: rt })), (n[87] = A), (n[88] = it));
  let Z = it,
    Q;
  n[89] !== g || n[90] !== K
    ? ((Q = m(
        `pointer-events-none sticky z-[55] flex justify-end`,
        K ? [`top-4 h-0 w-full`, g ? `pe-8` : `pe-4`] : `top-3 mb-[-44px] pe-3`,
      )),
      (n[89] = g),
      (n[90] = K),
      (n[91] = Q))
    : (Q = n[91]);
  let $ = K && `relative max-w-full font-sans text-[14px] leading-5 font-normal`,
    at;
  n[92] === $ ? (at = n[93]) : ((at = m(`pointer-events-auto`, $)), (n[92] = $), (n[93] = at));
  let ot = K ? je : void 0,
    st;
  n[94] === G
    ? (st = n[95])
    : ((st = (e) => {
        let t = e.currentTarget;
        C.current ||
          (e.relatedTarget instanceof Node && t.contains(e.relatedTarget)) ||
          window.requestAnimationFrame(() => {
            if (C.current) return;
            let e = document.activeElement;
            (e instanceof Node && t.contains(e)) || G(!1, !1);
          });
      }),
      (n[94] = G),
      (n[95] = st));
  let ct;
  n[96] === ue
    ? (ct = n[97])
    : ((ct = (e) => {
        (e.preventDefault(), ue());
      }),
      (n[96] = ue),
      (n[97] = ct));
  let lt;
  n[98] === G
    ? (lt = n[99])
    : ((lt = (e) => {
        e.key === `Escape` && (e.preventDefault(), G(!0));
      }),
      (n[98] = G),
      (n[99] = lt));
  let ut;
  n[100] !== G || n[101] !== Pe || n[102] !== K || n[103] !== Z || n[104] !== et || n[105] !== nt
    ? ((ut = K
        ? (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsxs)(`div`, {
                className: `relative flex w-fit max-w-full min-w-0 items-center gap-[6px] rounded-[9px] border border-[color-mix(in_lab,var(--go-to-line-fg)_20%,transparent)] bg-[color-mix(in_lab,var(--go-to-line-fg)_4%,var(--go-to-line-bg))] p-1 shadow-[inset_0_0_0_1px_var(--go-to-line-bg),0_4px_8px_rgba(0,0,0,0.075),0_6px_18px_rgba(0,0,0,0.075)]`,
                children: [
                  (0, Y.jsx)(`div`, { className: `flex w-[200px] min-w-0 items-center`, children: et }),
                  nt,
                  Z,
                ],
              }),
              (0, Y.jsx)(`button`, {
                type: `button`,
                "aria-label": Pe,
                className: `absolute end-0 top-0 flex size-5 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[50%] border-0 bg-[color-mix(in_lab,var(--go-to-line-fg)_50%,var(--go-to-line-bg))] p-0 text-[color-mix(in_lab,var(--go-to-line-fg)_4%,var(--go-to-line-bg))] transition-colors outline-none hover:bg-[var(--go-to-line-fg)] focus-visible:outline-2 focus-visible:outline-[var(--go-to-line-modified-base)] focus-visible:outline-solid rtl:-translate-x-1/2`,
                onClick: () => {
                  G(!0);
                },
                children: (0, Y.jsx)(Re, {}),
              }),
            ],
          })
        : (0, Y.jsxs)(ne, {
            children: [
              (0, Y.jsxs)(`div`, {
                className: `col-[1/2] row-[1] flex h-[44px] min-w-0 items-center gap-2 ps-4`,
                children: [
                  (0, Y.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `shrink-0 text-base leading-6 text-codex-description`,
                    children: (0, Y.jsx)(ce, {
                      id: `codex.goToLine.fieldLabel`,
                      defaultMessage: `Line`,
                      description: `Visual label shown before the go to line input`,
                    }),
                  }),
                  et,
                ],
              }),
              nt,
              Z,
              (0, Y.jsx)(ee, {
                label: Pe,
                onClose: () => {
                  G(!0);
                },
              }),
            ],
          })),
      (n[100] = G),
      (n[101] = Pe),
      (n[102] = K),
      (n[103] = Z),
      (n[104] = et),
      (n[105] = nt),
      (n[106] = ut))
    : (ut = n[106]);
  let dt;
  n[107] !== at || n[108] !== ot || n[109] !== st || n[110] !== ct || n[111] !== lt || n[112] !== ut
    ? ((dt = (0, Y.jsx)(`form`, {
        ref: D,
        autoComplete: `off`,
        className: at,
        style: ot,
        onBlurCapture: st,
        onSubmit: ct,
        onKeyDown: lt,
        children: ut,
      })),
      (n[107] = at),
      (n[108] = ot),
      (n[109] = st),
      (n[110] = ct),
      (n[111] = lt),
      (n[112] = ut),
      (n[113] = dt))
    : (dt = n[113]);
  let ft;
  return (
    n[114] !== Q || n[115] !== dt
      ? ((ft = (0, Y.jsx)(`div`, { className: Q, children: dt })), (n[114] = Q), (n[115] = dt), (n[116] = ft))
      : (ft = n[116]),
    ft
  );
}
function Le(e) {
  let t = e?.parentElement?.parentElement?.querySelector(`diffs-container`);
  if (t == null) return null;
  let n = window.getComputedStyle(t);
  return {
    background: n.getPropertyValue(`--diffs-bg`).trim() || n.backgroundColor,
    foreground: n.getPropertyValue(`--diffs-fg`).trim() || n.color,
    modified: n.getPropertyValue(`--diffs-modified-base`).trim() || He.modified,
  };
}
function Re() {
  let e = (0, Ve.c)(1),
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
function ze(e, t, n) {
  return e.defaultPrevented || t == null
    ? !1
    : e.composedPath().some((e) => e instanceof Node && (t.contains(e) || n?.contains(e) === !0));
}
function Be(e, t, n) {
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
var Ve, J, Y, X, He;
function Ue() {
  return (Ue = e(() => {
    ((Ve = S()),
      g(),
      k(),
      (J = o()),
      D(),
      l(),
      _e(),
      Ee(),
      c(),
      n(),
      be(),
      we(),
      q(),
      (Y = u()),
      (X = null),
      (He = {
        background: `var(--color-surface)`,
        foreground: `var(--color-text)`,
        modified: `light-dark(#009fff, #69b1ff)`,
      }));
  }))();
}
function We(e) {
  let t = (0, Ke.c)(12),
    { hostId: n, root: i } = e,
    o = ie(),
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = o.formatMessage({
        id: `files.search.allFiles`,
        defaultMessage: `Search in files`,
        description: `Button in the Files toolbar that searches text across the workspace`,
      })),
      (t[0] = o),
      (t[1] = s));
  let c = s,
    l;
  t[2] !== n || t[3] !== i
    ? ((l = () => p.dispatchHostMessage({ type: `find-in-files`, target: { hostId: n, root: i } })),
      (t[2] = n),
      (t[3] = i),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, qe.jsx)(r, { asset: a })), (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== c || t[7] !== l
    ? ((d = (0, qe.jsx)(T, { "aria-label": c, uniform: !0, onMouseDown: Ge, onClick: l, children: u })),
      (t[6] = c),
      (t[7] = l),
      (t[8] = d))
    : (d = t[8]);
  let f;
  return (
    t[9] !== c || t[10] !== d
      ? ((f = (0, qe.jsx)(U, { tooltipContent: c, delayOpen: !0, children: d })),
        (t[9] = c),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function Ge(e) {
  return e.preventDefault();
}
var Ke, qe;
function Je() {
  return (Je = e(() => {
    ((Ke = S()), b(), D(), v(), ae(), B(), O(), (qe = u()));
  }))();
}
function Ye(e) {
  let t = (0, Z.c)(75),
    {
      cwd: n,
      headerLeadingActions: r,
      hostId: i,
      onSelectFile: a,
      path: o,
      pathActions: s,
      preserveFolderSelection: c,
      trailingContent: l,
      workspaceRoot: u,
    } = e,
    d = c !== void 0 && c,
    f = ie(),
    p,
    h,
    g,
    v,
    b,
    x,
    S,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N;
  if (t[0] !== n || t[1] !== i || t[2] !== f || t[3] !== a || t[4] !== o || t[5] !== d || t[6] !== u) {
    w = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((g = o == null ? [nt(u ?? n)] : ge({ cwd: n, path: o, workspaceRoot: u })), g.length === 0)) {
        w = null;
        break bb0;
      }
      let e = g.join(`/`),
        r = o == null ? e : te(me({ cwd: n, path: o, workspaceRoot: u })),
        s;
      t[24] !== n || t[25] !== o || t[26] !== u
        ? ((s = o == null || u == null ? null : de({ cwd: n, path: o, workspaceRoot: u })),
          (t[24] = n),
          (t[25] = o),
          (t[26] = u),
          (t[27] = s))
        : (s = t[27]);
      let c = s,
        l;
      (t[28] !== i || t[29] !== a || t[30] !== u
        ? ((l =
            i != null && i !== `durable` && u != null && a != null && z.workspaceSearch != null
              ? (0, $.jsx)(We, { hostId: i, root: u })
              : null),
          (t[28] = i),
          (t[29] = a),
          (t[30] = u),
          (t[31] = l))
        : (l = t[31]),
        (N = l),
        (h = y),
        (x = `group @container/file-header`),
        (S = `compact`),
        (M = `file-path`),
        (v = !0),
        (b = g.slice(0, -1).map(Xe)),
        (p = C),
        (j = `flex min-w-0 items-center`),
        t[32] === f
          ? (O = t[33])
          : ((O = f.formatMessage({
              id: `review.fileSource.breadcrumb.ariaLabel`,
              defaultMessage: `File path`,
              description: `Accessible label for breadcrumbs above a workspace file preview`,
            })),
            (t[32] = f),
            (t[33] = O)),
        (k = `flex h-full min-w-0 items-center overflow-hidden px-2`),
        (A = r),
        (T = `flex min-w-0 flex-1 items-center gap-1 text-sm text-secondary select-text`),
        (E = (t) => {
          let n = it(t.currentTarget);
          n != null && (t.preventDefault(), t.clipboardData.setData(`text/plain`, n === e ? r : n));
        }),
        (D = g.map((e, t) => {
          let n = t === g.length - 1,
            r = c?.[t],
            o = n ? `min-w-0 truncate font-medium text-default` : `whitespace-nowrap`;
          return (0, $.jsxs)(
            `li`,
            {
              className: m(`flex items-center gap-1`, n ? `min-w-0` : `shrink-0`),
              "data-file-ancestor": n ? void 0 : t,
              children: [
                r == null || i == null || a == null || u == null
                  ? (0, $.jsx)(`span`, { className: o, children: e })
                  : (0, $.jsx)(Qe, {
                      activePath: r.activePath,
                      directoryPath: r.directoryPath,
                      hostId: i,
                      shouldExpandActivePath: !n,
                      label: e,
                      labelClassName: o,
                      onSelectFile: a,
                      preserveFolderSelection: d,
                      root: u,
                    }),
                n
                  ? null
                  : (0, $.jsx)(ue, {
                      className: `shrink-0 text-tertiary`,
                      legacyIcon: _,
                      asset16: re,
                      legacyClassName: `icon-2xs`,
                      "aria-hidden": !0,
                    }),
              ],
            },
            `${t}:${e}`,
          );
        })));
    }
    ((t[0] = n),
      (t[1] = i),
      (t[2] = f),
      (t[3] = a),
      (t[4] = o),
      (t[5] = d),
      (t[6] = u),
      (t[7] = p),
      (t[8] = h),
      (t[9] = g),
      (t[10] = v),
      (t[11] = b),
      (t[12] = x),
      (t[13] = S),
      (t[14] = w),
      (t[15] = T),
      (t[16] = E),
      (t[17] = D),
      (t[18] = O),
      (t[19] = k),
      (t[20] = A),
      (t[21] = j),
      (t[22] = M),
      (t[23] = N));
  } else
    ((p = t[7]),
      (h = t[8]),
      (g = t[9]),
      (v = t[10]),
      (b = t[11]),
      (x = t[12]),
      (S = t[13]),
      (w = t[14]),
      (T = t[15]),
      (E = t[16]),
      (D = t[17]),
      (O = t[18]),
      (k = t[19]),
      (A = t[20]),
      (j = t[21]),
      (M = t[22]),
      (N = t[23]));
  if (w !== Symbol.for(`react.early_return_sentinel`)) return w;
  let P;
  t[34] !== T || t[35] !== E || t[36] !== D
    ? ((P = (0, $.jsx)(`ol`, { className: T, onCopy: E, children: D })),
      (t[34] = T),
      (t[35] = E),
      (t[36] = D),
      (t[37] = P))
    : (P = t[37]);
  let F;
  t[38] !== P || t[39] !== O || t[40] !== k || t[41] !== A
    ? ((F = (0, $.jsx)(`nav`, { "aria-label": O, className: k, title: A, children: P })),
      (t[38] = P),
      (t[39] = O),
      (t[40] = k),
      (t[41] = A),
      (t[42] = F))
    : (F = t[42]);
  let I;
  t[43] !== p || t[44] !== F || t[45] !== j
    ? ((I = (0, $.jsx)(p, { className: j, children: F })), (t[43] = p), (t[44] = F), (t[45] = j), (t[46] = I))
    : (I = t[46]);
  let L;
  t[47] !== v || t[48] !== b || t[49] !== I || t[50] !== M
    ? ((L = { id: M, allowShrink: v, collapseSteps: b, content: I }),
      (t[47] = v),
      (t[48] = b),
      (t[49] = I),
      (t[50] = M),
      (t[51] = L))
    : (L = t[51]);
  let R;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = { id: `space`, content: (0, $.jsx)(`span`, {}), grow: !0 }), (t[52] = R))
    : (R = t[52]);
  let B;
  t[53] === g.length
    ? (B = t[54])
    : ((B = [{ priority: g.length, selector: `[data-file-comparison-label]` }]),
      (t[53] = g.length),
      (t[54] = B));
  let ee;
  t[55] !== r || t[56] !== B
    ? ((ee = { id: `leading-actions`, collapseSteps: B, content: r }), (t[55] = r), (t[56] = B), (t[57] = ee))
    : (ee = t[57]);
  let ne;
  t[58] === s ? (ne = t[59]) : ((ne = { id: `path-actions`, content: s }), (t[58] = s), (t[59] = ne));
  let V;
  t[60] !== l || t[61] !== N
    ? ((V = N == null && l == null ? null : (0, $.jsxs)(Ze, { children: [N, l] })),
      (t[60] = l),
      (t[61] = N),
      (t[62] = V))
    : (V = t[62]);
  let H;
  t[63] === V ? (H = t[64]) : ((H = { id: `file-actions`, content: V }), (t[63] = V), (t[64] = H));
  let U;
  t[65] !== L || t[66] !== ee || t[67] !== ne || t[68] !== H
    ? ((U = [L, R, ee, ne, H]), (t[65] = L), (t[66] = ee), (t[67] = ne), (t[68] = H), (t[69] = U))
    : (U = t[69]);
  let W;
  return (
    t[70] !== h || t[71] !== x || t[72] !== S || t[73] !== U
      ? ((W = (0, $.jsx)(h, { className: x, density: S, leading: U })),
        (t[70] = h),
        (t[71] = x),
        (t[72] = S),
        (t[73] = U),
        (t[74] = W))
      : (W = t[74]),
    W
  );
}
function Xe(e, t) {
  return { priority: t, selector: `[data-file-ancestor="${t}"]` };
}
function Ze(e) {
  let t = (0, Z.c)(38),
    { children: n } = e,
    r = ie(),
    [a, o] = (0, Q.useState)(!1),
    [c, l] = (0, Q.useState)(!1),
    u = (0, Q.useRef)(null),
    d = (0, Q.useRef)(!1),
    f = (0, Q.useRef)(null),
    p = (0, Q.useRef)(!1),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (e, t) => {
        let n = e.contentRect.width > 0 && e.contentRect.height > 0;
        if ((o(n), (f.current = t), n)) {
          l(!1);
          return;
        }
        let r = t.ownerDocument,
          i = r.activeElement,
          a = u.current;
        (p.current &&
          r.hasFocus() &&
          (t.contains(i) || i === r.body) &&
          a != null &&
          a.getClientRects().length > 0 &&
          a.focus(),
          (p.current = !1));
      }),
      (t[0] = m))
    : (m = t[0]);
  let h = P(m),
    g,
    _;
  (t[1] === a
    ? ((g = t[2]), (_ = t[3]))
    : ((g = () => {
        let e = f.current;
        if (!a || e == null) return;
        let t = e.ownerDocument;
        (d.current &&
          t.hasFocus() &&
          (t.activeElement === u.current || t.activeElement === t.body) &&
          e.getClientRects().length > 0 &&
          e.querySelector(`button:not(:disabled)`)?.focus(),
          (d.current = !1));
      }),
      (_ = [a]),
      (t[1] = a),
      (t[2] = g),
      (t[3] = _)),
    (0, Q.useLayoutEffect)(g, _));
  let v;
  t[4] === r
    ? (v = t[5])
    : ((v = r.formatMessage({
        id: `review.fileSource.controls`,
        defaultMessage: `File controls`,
        description: `Accessible label for the grouped actions above a workspace file`,
      })),
      (t[4] = r),
      (t[5] = v));
  let y = v,
    b,
    x;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = () => {
        p.current = !0;
      }),
      (x = (e) => {
        !e.currentTarget.contains(e.relatedTarget) &&
          (e.relatedTarget != null || e.currentTarget.getClientRects().length > 0) &&
          (p.current = !1);
      }),
      (t[6] = b),
      (t[7] = x))
    : ((b = t[6]), (x = t[7]));
  let S = a ? n : null,
    C;
  t[8] !== y || t[9] !== S
    ? ((C = (0, $.jsx)(s, { label: y, children: S })), (t[8] = y), (t[9] = S), (t[10] = C))
    : (C = t[10]);
  let w;
  t[11] !== h || t[12] !== C
    ? ((w = (0, $.jsx)(`div`, {
        ref: h,
        className: `hidden items-center gap-1.5 [@container_file-header_(min-width:625px)]:flex`,
        onFocusCapture: b,
        onBlurCapture: x,
        children: C,
      })),
      (t[11] = h),
      (t[12] = C),
      (t[13] = w))
    : (w = t[13]);
  let E, D, O;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => {
        d.current = !0;
      }),
      (D = (e) => {
        (e.relatedTarget != null || e.currentTarget.getClientRects().length > 0) && (d.current = !1);
      }),
      (O = (0, $.jsx)(i, {})),
      (t[14] = E),
      (t[15] = D),
      (t[16] = O))
    : ((E = t[14]), (D = t[15]), (O = t[16]));
  let k;
  t[17] === y
    ? (k = t[18])
    : ((k = (0, $.jsx)(L, {
        asChild: !0,
        children: (0, $.jsx)(T, {
          ref: u,
          className: `[@container_file-header_(min-width:625px)]:hidden`,
          "aria-label": y,
          uniform: !0,
          onFocus: E,
          onBlur: D,
          children: O,
        }),
      })),
      (t[17] = y),
      (t[18] = k));
  let A;
  t[19] !== y || t[20] !== c || t[21] !== k
    ? ((A = (0, $.jsx)(U, { tooltipContent: y, triggerPopupOpen: c, children: k })),
      (t[19] = y),
      (t[20] = c),
      (t[21] = k),
      (t[22] = A))
    : (A = t[22]);
  let j;
  t[23] === a
    ? (j = t[24])
    : ((j = (e) => {
        a && (e.preventDefault(), f.current?.querySelector(`button`)?.focus());
      }),
      (t[23] = a),
      (t[24] = j));
  let M = a ? null : n,
    N;
  t[25] === M
    ? (N = t[26])
    : ((N = (0, $.jsx)(`div`, { className: `flex flex-wrap items-center gap-1.5`, children: M })),
      (t[25] = M),
      (t[26] = N));
  let I;
  t[27] !== y || t[28] !== j || t[29] !== N
    ? ((I = (0, $.jsx)(H, {
        align: `end`,
        size: `content`,
        "aria-label": y,
        "data-viewer-density": `compact`,
        onCloseAutoFocus: j,
        children: N,
      })),
      (t[27] = y),
      (t[28] = j),
      (t[29] = N),
      (t[30] = I))
    : (I = t[30]);
  let R;
  t[31] !== c || t[32] !== A || t[33] !== I
    ? ((R = (0, $.jsxs)(F, { open: c, onOpenChange: l, children: [A, I] })),
      (t[31] = c),
      (t[32] = A),
      (t[33] = I),
      (t[34] = R))
    : (R = t[34]);
  let z;
  return (
    t[35] !== R || t[36] !== w
      ? ((z = (0, $.jsxs)($.Fragment, { children: [w, R] })), (t[35] = R), (t[36] = w), (t[37] = z))
      : (z = t[37]),
    z
  );
}
function Qe(e) {
  let t = (0, Z.c)(30),
    {
      activePath: n,
      directoryPath: r,
      hostId: i,
      shouldExpandActivePath: a,
      label: o,
      labelClassName: s,
      onSelectFile: c,
      preserveFolderSelection: l,
      root: u,
    } = e,
    [f, p] = (0, Q.useState)(!1),
    h;
  t[0] === u ? (h = t[1]) : ((h = N(u)), (t[0] = u), (t[1] = h));
  let g = a ? `workspace` : `file`,
    _;
  t[2] !== n || t[3] !== u
    ? ((_ = n == null ? u : d(u, ...n.split(`/`))), (t[2] = n), (t[3] = u), (t[4] = _))
    : (_ = t[4]);
  let v;
  t[5] === s
    ? (v = t[6])
    : ((v = m(
        s,
        `cursor-interaction outline-none hover:text-default focus-visible:ring-2 focus-visible:ring-ring`,
      )),
      (t[5] = s),
      (t[6] = v));
  let y;
  t[7] !== o || t[8] !== v
    ? ((y = (0, $.jsx)(L, {
        asChild: !0,
        children: (0, $.jsx)(`button`, { type: `button`, className: v, children: o }),
      })),
      (t[7] = o),
      (t[8] = v),
      (t[9] = y))
    : (y = t[9]);
  let b;
  t[10] !== i || t[11] !== h || t[12] !== g || t[13] !== _ || t[14] !== y
    ? ((b = (0, $.jsx)(K, { cwd: h, hostId: i, openMode: g, path: _, children: y })),
      (t[10] = i),
      (t[11] = h),
      (t[12] = g),
      (t[13] = _),
      (t[14] = y),
      (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] === c
    ? (x = t[17])
    : ((x = (e, t) => {
        (p(!1), c(e, t));
      }),
      (t[16] = c),
      (t[17] = x));
  let S;
  t[18] !== n || t[19] !== r || t[20] !== i || t[21] !== l || t[22] !== u || t[23] !== a || t[24] !== x
    ? ((S = (0, $.jsx)(H, {
        className: `h-80`,
        opaque: !0,
        sideOffset: 1,
        size: `large`,
        children: (0, $.jsx)($e, {
          activePath: n,
          directoryPath: r,
          hostId: i,
          shouldExpandActivePath: a,
          preserveFolderSelection: l,
          onSelectFile: x,
          root: u,
        }),
      })),
      (t[18] = n),
      (t[19] = r),
      (t[20] = i),
      (t[21] = l),
      (t[22] = u),
      (t[23] = a),
      (t[24] = x),
      (t[25] = S))
    : (S = t[25]);
  let C;
  return (
    t[26] !== f || t[27] !== b || t[28] !== S
      ? ((C = (0, $.jsxs)(F, { open: f, onOpenChange: p, children: [b, S] })),
        (t[26] = f),
        (t[27] = b),
        (t[28] = S),
        (t[29] = C))
      : (C = t[29]),
    C
  );
}
function $e(e) {
  let t = (0, Z.c)(41),
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
    ? ((l = n == null ? null : et(n, r)), (t[0] = n), (t[1] = r), (t[2] = l))
    : (l = t[2]);
  let u = l,
    [d, f] = (0, Q.useState)(u),
    p;
  t[3] !== u || t[4] !== a
    ? ((p = () => (a && u != null ? [u] : [])), (t[3] = u), (t[4] = a), (t[5] = p))
    : (p = t[5]);
  let [m, g] = (0, Q.useState)(p),
    _;
  if (t[6] !== r || t[7] !== m) {
    let e;
    (t[9] === r ? (e = t[10]) : ((e = (e) => tt(e, r)), (t[9] = r), (t[10] = e)),
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
  let { error: y, files: b, isLoading: x } = W(De, v),
    S;
  t[16] === s
    ? (S = t[17])
    : ((S = (e) => {
        g((t) => {
          let n = e;
          if (s) {
            let r = t.filter((t) => !e.includes(t));
            n = e.filter((e) => !r.some((t) => e.startsWith(`${t}/`)));
          }
          return rt(t, n) ? t : n;
        });
      }),
      (t[16] = s),
      (t[17] = S));
  let C = I(S),
    w;
  t[18] !== r || t[19] !== o || t[20] !== s || t[21] !== c
    ? ((w = (e) => {
        let t = e[0];
        (s && f(t ?? null), !(t == null || t.endsWith(`/`)) && o(h(c, tt(t, r)), { isPreview: !0 }));
      }),
      (t[18] = r),
      (t[19] = o),
      (t[20] = s),
      (t[21] = c),
      (t[22] = w))
    : (w = t[22]);
  let T = I(w);
  if (y != null) {
    let e;
    return (
      t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(oe.Message, {
            role: `alert`,
            tone: `error`,
            children: (0, $.jsx)(ce, {
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
        ? ((e = (0, $.jsx)(oe.Message, {
            role: `status`,
            children: (0, $.jsx)(ce, {
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
        ? ((e = (0, $.jsx)(oe.Message, {
            children: (0, $.jsx)(ce, {
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
  t[26] === c ? (E = t[27]) : ((E = N(c)), (t[26] = c), (t[27] = E));
  let D;
  if (t[28] !== r || t[29] !== b) {
    let e;
    (t[31] === r
      ? (e = t[32])
      : ((e = (e) => ({ displayPath: et(e, r), path: e.endsWith(`/`) ? e.slice(0, -1) : e })),
        (t[31] = r),
        (t[32] = e)),
      (D = b.map(e)),
      (t[28] = r),
      (t[29] = b),
      (t[30] = D));
  } else D = t[30];
  let O = s ? d : u,
    k;
  return (
    t[33] !== m || t[34] !== C || t[35] !== T || t[36] !== i || t[37] !== E || t[38] !== D || t[39] !== O
      ? ((k = (0, $.jsx)(`div`, {
          className: `h-full min-h-0 w-full`,
          children: (0, $.jsx)(Ae, {
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
        (t[40] = k))
      : (k = t[40]),
    k
  );
}
function et(e, t) {
  let n = t == null ? `` : `${t}/`;
  return e.slice(n.length);
}
function tt(e, t) {
  let n = e.endsWith(`/`) ? e.slice(0, -1) : e;
  return t == null ? n : `${t}/${n}`;
}
function nt(e) {
  return te(e ?? ``).match(/^\/?([a-z]:)(?:\/|$)/i)?.[1] ?? `/`;
}
function rt(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function it(e) {
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
var Z, Q, $;
function at() {
  return (at = e(() => {
    ((Z = S()),
      G(),
      g(),
      k(),
      se(),
      (Q = o()),
      D(),
      M(),
      E(),
      A(),
      le(),
      ae(),
      ke(),
      Je(),
      Oe(),
      je(),
      w(),
      V(),
      j(),
      x(),
      R(),
      O(),
      xe(),
      ($ = u()));
  }))();
}
export { Pe as a, Ue as i, at as n, q as o, Ie as r, Ne as s, Ye as t };
//# sourceMappingURL=review-file-source-breadcrumb-e388ffd5fb4f.js.map
