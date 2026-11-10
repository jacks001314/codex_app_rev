import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AHt as r,
  AMt as i,
  Amn as a,
  B6t as o,
  B7t as s,
  BD as c,
  CW as l,
  Cpn as u,
  Cq as d,
  D3t as f,
  DHt as p,
  EHt as m,
  F3t as h,
  FX as g,
  H4t as _,
  IX as v,
  JG as y,
  JU as b,
  Jrt as ee,
  KG as te,
  MHt as x,
  N3t as S,
  O3t as C,
  OHt as w,
  Opn as ne,
  QKt as T,
  QV as E,
  Spn as D,
  Sq as O,
  TJt as k,
  TW as A,
  U3t as j,
  XJ as M,
  Xrt as re,
  Yrt as ie,
  ZG as N,
  ZJ as P,
  ZV as ae,
  Zrt as oe,
  _Jt as F,
  a3t as I,
  d3t as L,
  dUt as R,
  e9t as z,
  eit as B,
  fUt as se,
  hEt as ce,
  hmn as V,
  iit as H,
  jHt as U,
  jXt as le,
  kMt as W,
  kXt as G,
  kmn as K,
  lUt as q,
  nUt as J,
  njt as ue,
  o3t as de,
  pJt as fe,
  q4t as pe,
  qKt as Y,
  qU as me,
  rTt as X,
  rUt as he,
  rit as ge,
  rjt as _e,
  s3t as ve,
  tit as ye,
  uUt as be,
  wJt as xe,
  zD as Se,
} from "./app-initial-f094ef01c64d.js";
import { BT as Ce, VT as we, ct as Te, lt as Ee } from "./app-primary-4c40d73a1074.js";
import {
  $ as De,
  H as Oe,
  J as ke,
  Q as Ae,
  U as je,
  a as Me,
  et as Ne,
  i as Pe,
  lt as Fe,
  n as Ie,
  o as Le,
  r as Re,
  t as ze,
  ut as Be,
} from "./git-branch-picker-dropdown-content-16bc93de7d03.js";
function Ve({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) {
  return JSON.stringify({ cwd: e ?? null, enabled: t, hostConfig: n, operationSource: r });
}
function He({
  cwd: e,
  enabled: t,
  hostConfig: n,
  operationSource: r,
  preserveRemoteRefs: i = !1,
  query: a,
}) {
  return JSON.stringify({
    cwd: e ?? null,
    enabled: t,
    hostConfig: n,
    operationSource: r,
    preserveRemoteRefs: i,
    query: a,
  });
}
var Ue,
  We,
  Ge = e(() => {
    (C(),
      de(),
      k(),
      p(),
      se(),
      be(),
      (Ue = j(
        I,
        ({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) =>
          R(e, q(n), n, r, { enabled: t }),
        { key: Ve },
      )),
      (We = j(
        I,
        (
          {
            cwd: e,
            enabled: t,
            hostConfig: n,
            operationSource: r,
            preserveRemoteRefs: i = !1,
            query: a,
          },
          { get: o },
        ) => {
          let s = o(Ue, { cwd: e, enabled: t, hostConfig: n, operationSource: r }).data;
          return m(
            `search-branches`,
            s,
            s == null
              ? null
              : { root: s.root, operationSource: r, preserveRemoteRefs: i, query: a, limit: 20 },
            q(n),
            n,
            { enabled: t, staleTime: xe.FIVE_SECONDS },
          );
        },
        { key: He },
      )));
  });
function Ke(e, t, n, i) {
  let a = (0, qe.c)(17),
    o;
  a[0] === i ? (o = a[1]) : ((o = i === void 0 ? {} : i), (a[0] = i), (a[1] = o));
  let s = o,
    c = e ?? ``,
    l;
  a[2] === c ? (l = a[3]) : ((l = z(c)), (a[2] = c), (a[3] = l));
  let u;
  a[4] === t ? (u = a[5]) : ((u = !1), (a[4] = t), (a[5] = u));
  let d;
  a[6] !== n || a[7] !== l || a[8] !== u
    ? ((d = { cwd: l, includeUntrackedFiles: u, operationSource: n }),
      (a[6] = n),
      (a[7] = l),
      (a[8] = u),
      (a[9] = d))
    : (d = a[9]);
  let f = d,
    p;
  a[10] === f ? (p = a[11]) : ((p = { ...f, includeUntrackedFiles: !0 }), (a[10] = f), (a[11] = p));
  let m = p,
    h;
  a[12] === m
    ? (h = a[13])
    : ((h = { method: `status-summary`, params: m }), (a[12] = m), (a[13] = h));
  let g;
  return (
    a[14] !== s || a[15] !== h
      ? ((g = { liveQuery: h, staleTime: 1 / 0, ...s }), (a[14] = s), (a[15] = h), (a[16] = g))
      : (g = a[16]),
    r(e, t, `status-summary`, f, n, g)
  );
}
var qe,
  Je = e(() => {
    ((qe = K()), o(), p());
  });
function Ye(e, t, n, i) {
  let a = (0, Qe.c)(4),
    o;
  a[0] === n
    ? (o = a[1])
    : ((o = (e) => {
        let { root: t } = e;
        return { operationSource: n, root: t, limit: 100 };
      }),
      (a[0] = n),
      (a[1] = o));
  let s;
  return (
    a[2] === i
      ? (s = a[3])
      : ((s = { liveQuery: Ze, select: Xe, staleTime: 1 / 0, ...i }), (a[2] = i), (a[3] = s)),
    r(e, t, `recent-branches`, o, n, s)
  );
}
function Xe(e) {
  return e.branches;
}
function Ze(e) {
  return { method: `recent-branches`, params: e };
}
var Qe,
  $e = e(() => {
    ((Qe = K()), p());
  });
function et(e, t) {
  let n = (0, tt.c)(16),
    r = f(),
    i = h(_e),
    a;
  n[0] === i ? (a = n[1]) : ((a = { retainRepoWatch: i }), (n[0] = i), (n[1] = a));
  let { data: o } = x(e, t, a),
    s = e?.cwd ?? null,
    c = e?.hostId ?? null,
    l;
  n[2] !== s || n[3] !== c
    ? ((l = [`vscode`, `git-checkout-branch`, s, c]), (n[2] = s), (n[3] = c), (n[4] = l))
    : (l = n[4]);
  let u;
  n[5] !== t || n[6] !== e
    ? ((u = async (n) => {
        if (e == null) throw Error(`Expected a repository target`);
        return fe(`git-checkout-branch`, {
          params: { ...n, cwd: e.cwd, hostId: e.hostId },
          source: t,
        });
      }),
      (n[5] = t),
      (n[6] = e),
      (n[7] = u))
    : (u = n[7]);
  let d;
  n[8] !== o || n[9] !== r || n[10] !== e
    ? ((d = (t) => {
        e != null &&
          o != null &&
          t?.status === `success` &&
          w(
            r,
            { commonDir: o.commonDir, root: o.root },
            { changeType: `head`, hostKey: q(e.hostConfig) },
          );
      }),
      (n[8] = o),
      (n[9] = r),
      (n[10] = e),
      (n[11] = d))
    : (d = n[11]);
  let p;
  return (
    n[12] !== l || n[13] !== u || n[14] !== d
      ? ((p = { mutationKey: l, mutationFn: u, networkMode: `always`, onSettled: d }),
        (n[12] = l),
        (n[13] = u),
        (n[14] = d),
        (n[15] = p))
      : (p = n[15]),
    L(p)
  );
}
var tt,
  nt = e(() => {
    ((tt = K()), ve(), C(), p(), be(), U(), ue(), F());
  });
function rt(e, t) {
  let n = (0, it.c)(16),
    r = f(),
    i = h(_e),
    a;
  n[0] === i ? (a = n[1]) : ((a = { retainRepoWatch: i }), (n[0] = i), (n[1] = a));
  let { data: o } = x(e, t, a),
    s = e?.cwd ?? null,
    c = e?.hostId ?? null,
    l;
  n[2] !== s || n[3] !== c
    ? ((l = [`vscode`, `git-create-branch`, s, c]), (n[2] = s), (n[3] = c), (n[4] = l))
    : (l = n[4]);
  let u;
  n[5] !== t || n[6] !== e
    ? ((u = async (n) => {
        if (e == null) throw Error(`Expected a repository target`);
        return fe(`git-create-branch`, {
          params: { ...n, cwd: e.cwd, hostId: e.hostId },
          source: t,
        });
      }),
      (n[5] = t),
      (n[6] = e),
      (n[7] = u))
    : (u = n[7]);
  let d;
  n[8] !== o || n[9] !== r || n[10] !== e
    ? ((d = (t, n, i) => {
        if (e != null && o != null) {
          let t = i.mode === `synced` ? `synced-branch` : `head`;
          w(r, o, { changeType: t, hostKey: q(e.hostConfig) });
        }
      }),
      (n[8] = o),
      (n[9] = r),
      (n[10] = e),
      (n[11] = d))
    : (d = n[11]);
  let p;
  return (
    n[12] !== l || n[13] !== u || n[14] !== d
      ? ((p = { mutationKey: l, mutationFn: u, networkMode: `always`, onSettled: d }),
        (n[12] = l),
        (n[13] = u),
        (n[14] = d),
        (n[15] = p))
      : (p = n[15]),
    L(p)
  );
}
var it,
  at = e(() => {
    ((it = K()), ve(), C(), p(), be(), U(), ue(), F());
  });
function ot({ disabled: e, hasNoCommits: t, statusSummary: n }) {
  return {
    branchSelectionDisabled: e,
    createAndCheckoutDisabled: t || e,
    uncommittedFileCount: st(n),
  };
}
function st(e) {
  return e?.type === `success`
    ? Math.max(e.stagedCount, e.unstagedCount) + (e.untrackedCount ?? 0)
    : 0;
}
var ct = e(() => {});
function lt(e) {
  let t = (0, vt.c)(96),
    {
      cwd: r,
      gitRoot: i,
      hostConfig: a,
      localConversationId: o,
      isLoading: s,
      isReadOnly: c,
      revalidateBranchSelection: l,
      renderWhileLoading: u,
      shouldShow: d,
      side: f,
      align: p,
      renderStaticBranch: m,
      detachedControl: h,
      renderControl: _,
      onOpenChange: v,
    } = e,
    y = s !== void 0 && s,
    b = c !== void 0 && c,
    ee = u !== void 0 && u,
    x = f === void 0 ? `top` : f,
    C = p === void 0 ? `end` : p,
    w = n(I),
    T = ne(),
    E = (0, Z.useRef)(!1),
    [D, O] = (0, Z.useState)(!1),
    [k, A] = (0, Z.useState)(!1),
    [j, M] = (0, Z.useState)(!1),
    [re, ie] = (0, Z.useState)(!1),
    [N, P] = (0, Z.useState)(!1),
    [ae, oe] = (0, Z.useState)(0),
    [F, L] = (0, Z.useState)(null),
    R;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = []), (t[0] = R)) : (R = t[0]);
  let [z, B] = (0, Z.useState)(R),
    [se, V] = (0, Z.useState)(`idle`),
    H;
  t[1] !== r || t[2] !== i || t[3] !== a
    ? ((H = i == null ? null : g({ cwd: r, hostConfig: a, root: i })),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = H))
    : (H = t[4]);
  let U = H,
    W;
  t[5] !== a || t[6] !== U
    ? ((W = U == null ? null : { cwd: U.cwd, hostConfig: a }), (t[5] = a), (t[6] = U), (t[7] = W))
    : (W = t[7]);
  let G;
  t[8] !== d || t[9] !== W
    ? ((G = { enabled: d, operationSource: $, lookup: W }), (t[8] = d), (t[9] = W), (t[10] = G))
    : (G = t[10]);
  let { data: K, isLoading: q } = S(Se, G),
    J = K?.branch?.trim() ?? null,
    ue = d && (J != null || K?.isDetached === !0),
    de;
  t[11] !== a || t[12] !== o
    ? ((de = o == null ? null : { hostId: a.id, threadId: o }),
      (t[11] = a),
      (t[12] = o),
      (t[13] = de))
    : (de = t[13]);
  let fe = S(ce, de),
    pe = N || se !== `idle`,
    Y = et(U, $),
    me = rt(U, $),
    X = Y.isPending || me.isPending,
    ge = T.formatMessage({
      id: `composer.footer.branchSwitch.tooltip`,
      defaultMessage: `Switch branch`,
      description: `Tooltip shown for controls that switch git branches`,
    }),
    _e;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = () => {
        O(!1);
      }),
      (t[14] = _e))
    : (_e = t[14]);
  let ve = _e,
    ye;
  t[15] === l
    ? (ye = t[16])
    : ((ye = async () => l == null || (await l())), (t[15] = l), (t[16] = ye));
  let be = ye,
    xe;
  t[17] !== T || t[18] !== w
    ? ((xe = (e) => {
        w.get(le).danger(
          T.formatMessage(
            {
              id: `composer.footer.branchSwitch.checkoutError`,
              defaultMessage: `Failed to switch branch: {message}`,
              description: `Toast shown when switching local branches from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[17] = T),
      (t[18] = w),
      (t[19] = xe))
    : (xe = t[19]);
  let Ce = xe,
    we;
  t[20] !== T || t[21] !== w
    ? ((we = (e) => {
        w.get(le).danger(
          T.formatMessage(
            {
              id: `composer.footer.branchSwitch.createBranchError`,
              defaultMessage: `Failed to create branch: {message}`,
              description: `Toast shown when creating a branch from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[20] = T),
      (t[21] = w),
      (t[22] = we))
    : (we = t[22]);
  let Te = we,
    Ee;
  t[23] === ve
    ? (Ee = t[24])
    : ((Ee = (e) => {
        let { errorType: t, conflictedPaths: n, nextAction: r } = e;
        return t === `blocked-by-working-tree-changes`
          ? ((E.current = !0), B(n ?? []), L(r), ve(), ie(!1), M(!0), !0)
          : !1;
      }),
      (t[23] = ve),
      (t[24] = Ee));
  let De = Ee,
    ke = async (e) => {
      if (!(X || U == null)) {
        if (e === J) {
          ve();
          return;
        }
        try {
          if (!(await be())) return;
          let t = await Y.mutateAsync({ branch: e });
          if (t.status === `error`) {
            if (
              De({
                errorType: t.errorType,
                conflictedPaths: t.conflictedPaths,
                nextAction: { type: `checkout`, branch: e },
              })
            )
              return;
            Ce(t.error);
            return;
          }
          (o != null && he(w, a.id, o, e, U.root), ve());
        } catch (e) {
          let t = e;
          Ce(t instanceof Error ? t.message : String(t));
        }
      }
    },
    Ae;
  t[25] !== be ||
  t[26] !== Y ||
  t[27] !== me ||
  t[28] !== a ||
  t[29] !== X ||
  t[30] !== o ||
  t[31] !== De ||
  t[32] !== U ||
  t[33] !== w ||
  t[34] !== Ce ||
  t[35] !== Te
    ? ((Ae = async (e) => {
        if (!(X || U == null))
          try {
            if (!(await be())) return;
            let t = await me.mutateAsync({ branch: e, mode: `worktree`, failIfExists: !0 });
            if (t.status === `error`) {
              Te(t.error);
              return;
            }
            if (!(await be())) return;
            let n = await Y.mutateAsync({ branch: e });
            if (n.status === `error`) {
              if (
                De({
                  errorType: n.errorType,
                  conflictedPaths: n.conflictedPaths,
                  nextAction: { type: `create-and-checkout`, branch: e },
                })
              )
                return;
              (Ce(n.error), ie(!1));
              return;
            }
            (o != null && he(w, a.id, o, e, U.root), ie(!1));
          } catch (e) {
            let t = e,
              n = t instanceof Error ? t.message : String(t);
            Te(n);
          }
      }),
      (t[25] = be),
      (t[26] = Y),
      (t[27] = me),
      (t[28] = a),
      (t[29] = X),
      (t[30] = o),
      (t[31] = De),
      (t[32] = U),
      (t[33] = w),
      (t[34] = Ce),
      (t[35] = Te),
      (t[36] = Ae))
    : (Ae = t[36]);
  let Ne = Ae,
    Pe;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = () => {
        (P(!1), V(`idle`), B([]), L(null));
      }),
      (t[37] = Pe))
    : (Pe = t[37]);
  let Fe = Pe,
    Ie;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (e) => {
        (M(e), e || (B([]), L(null)));
      }),
      (t[38] = Ie))
    : (Ie = t[38]);
  let Le = Ie,
    Re;
  t[39] !== U || t[40] !== w
    ? ((Re = () => {
        U != null && (w.set(je, Oe(U), ``), V(`idle`), oe(ut), M(!1), P(!0));
      }),
      (t[39] = U),
      (t[40] = w),
      (t[41] = Re))
    : (Re = t[41]);
  let ze = Re,
    Be;
  t[42] !== ke || t[43] !== Ne || t[44] !== Fe || t[45] !== F
    ? ((Be = (e) => {
        if (e === `success` && F != null) {
          let e = F;
          if ((Fe(), e.type === `checkout`)) {
            ke(e.branch);
            return;
          }
          Ne(e.branch);
          return;
        }
        V(e);
      }),
      (t[42] = ke),
      (t[43] = Ne),
      (t[44] = Fe),
      (t[45] = F),
      (t[46] = Be))
    : (Be = t[46]);
  let Ve = Be;
  if (!ue)
    return d && ee && (y || q)
      ? _({ currentBranch: void 0, disabled: !0, isPending: !0, switchTooltipText: ge })
      : null;
  if (U == null || b) return m?.({ currentBranch: J }) ?? null;
  if (J == null && h !== void 0) return h;
  let He = te,
    Ue;
  t[47] === v
    ? (Ue = t[48])
    : ((Ue = (e) => {
        (e && A(!0), O(e), v?.(e));
      }),
      (t[47] = v),
      (t[48] = Ue));
  let We;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (e) => {
        E.current && ((E.current = !1), e.preventDefault());
      }),
      (t[49] = We))
    : (We = t[49]);
  let Ge = _({ currentBranch: J, disabled: X, isPending: X, switchTooltipText: ge }),
    Ke;
  t[50] !== ke ||
  t[51] !== ve ||
  t[52] !== J ||
  t[53] !== k ||
  t[54] !== a ||
  t[55] !== X ||
  t[56] !== D ||
  t[57] !== U
    ? ((Ke = k
        ? (0, Q.jsx)(dt, {
            currentBranch: J,
            cwd: U.cwd,
            gitRoot: U.root,
            hostConfig: a,
            isOpen: D,
            disabled: X,
            onCheckout: ke,
            onClose: ve,
            onOpenCreate: () => {
              ((E.current = !0), ve(), ie(!0));
            },
          })
        : null),
      (t[50] = ke),
      (t[51] = ve),
      (t[52] = J),
      (t[53] = k),
      (t[54] = a),
      (t[55] = X),
      (t[56] = D),
      (t[57] = U),
      (t[58] = Ke))
    : (Ke = t[58]);
  let qe;
  t[59] !== He ||
  t[60] !== C ||
  t[61] !== D ||
  t[62] !== x ||
  t[63] !== Ue ||
  t[64] !== We ||
  t[65] !== Ge ||
  t[66] !== Ke
    ? ((qe = (0, Q.jsx)(He, {
        side: x,
        open: D,
        align: C,
        onOpenChange: Ue,
        onCloseAutoFocus: We,
        triggerButton: Ge,
        children: Ke,
      })),
      (t[59] = He),
      (t[60] = C),
      (t[61] = D),
      (t[62] = x),
      (t[63] = Ue),
      (t[64] = We),
      (t[65] = Ge),
      (t[66] = Ke),
      (t[67] = qe))
    : (qe = t[67]);
  let Je;
  t[68] !== fe || t[69] !== Ne || t[70] !== a || t[71] !== re || t[72] !== X || t[73] !== U
    ? ((Je = re
        ? (0, Q.jsx)(ft, {
            open: re,
            onOpenChange: ie,
            conversationTitle: fe,
            cwd: U.cwd,
            hostConfig: a,
            isPending: X,
            onSubmit: Ne,
          })
        : null),
      (t[68] = fe),
      (t[69] = Ne),
      (t[70] = a),
      (t[71] = re),
      (t[72] = X),
      (t[73] = U),
      (t[74] = Je))
    : (Je = t[74]);
  let Ye;
  t[75] !== z ||
  t[76] !== ze ||
  t[77] !== Le ||
  t[78] !== a ||
  t[79] !== j ||
  t[80] !== F?.branch ||
  t[81] !== U
    ? ((Ye = j
        ? (0, Q.jsx)(pt, {
            open: j,
            onOpenChange: Le,
            conflictFiles: z,
            cwd: U.cwd,
            hostConfig: a,
            targetBranch: F?.branch ?? null,
            onContinue: ze,
          })
        : null),
      (t[75] = z),
      (t[76] = ze),
      (t[77] = Le),
      (t[78] = a),
      (t[79] = j),
      (t[80] = F?.branch),
      (t[81] = U),
      (t[82] = Ye))
    : (Ye = t[82]);
  let Xe;
  t[83] !== ae ||
  t[84] !== Fe ||
  t[85] !== Ve ||
  t[86] !== pe ||
  t[87] !== N ||
  t[88] !== o ||
  t[89] !== U
    ? ((Xe =
        pe && U != null
          ? (0, Q.jsx)(
              Me,
              {
                open: N,
                onOpenChange: P,
                conversationId: o,
                target: U,
                onStatusChange: Ve,
                onRequestReset: Fe,
              },
              ae,
            )
          : null),
      (t[83] = ae),
      (t[84] = Fe),
      (t[85] = Ve),
      (t[86] = pe),
      (t[87] = N),
      (t[88] = o),
      (t[89] = U),
      (t[90] = Xe))
    : (Xe = t[90]);
  let Ze;
  return (
    t[91] !== qe || t[92] !== Je || t[93] !== Ye || t[94] !== Xe
      ? ((Ze = (0, Q.jsxs)(Q.Fragment, { children: [qe, Je, Ye, Xe] })),
        (t[91] = qe),
        (t[92] = Je),
        (t[93] = Ye),
        (t[94] = Xe),
        (t[95] = Ze))
      : (Ze = t[95]),
    Ze
  );
}
function ut(e) {
  return e + 1;
}
function dt(e) {
  let t = (0, vt.c)(61),
    {
      currentBranch: n,
      cwd: r,
      gitRoot: i,
      hostConfig: a,
      isOpen: o,
      disabled: s,
      onCheckout: c,
      onClose: l,
      onOpenCreate: f,
    } = e,
    p = ne(),
    [m, h] = (0, Z.useState)(``),
    g = d(m, 200),
    _;
  t[0] === o ? (_ = t[1]) : ((_ = { enabled: o }), (t[0] = o), (t[1] = _));
  let { data: v } = Ke(r, a, $, _),
    b;
  t[2] === o ? (b = t[3]) : ((b = { enabled: o }), (t[2] = o), (t[3] = b));
  let { data: ee, isLoading: te, isFetching: x, isError: C, refetch: w } = Ye(r, a, $, b),
    T = ee === void 0 ? [] : ee,
    E;
  t[4] === o ? (E = t[5]) : ((E = { enabled: o }), (t[4] = o), (t[5] = E));
  let { data: D } = we(r, a, $, E),
    O;
  t[6] === m ? (O = t[7]) : ((O = m.trim()), (t[6] = m), (t[7] = O));
  let k = O,
    A;
  t[8] === g ? (A = t[9]) : ((A = g.trim()), (t[8] = g), (t[9] = A));
  let j = A,
    M = k !== j,
    re = j.length > 0,
    ie;
  t[10] !== r || t[11] !== a || t[12] !== j || t[13] !== re
    ? ((ie = { cwd: r, hostConfig: a, operationSource: $, query: j, enabled: re }),
      (t[10] = r),
      (t[11] = a),
      (t[12] = j),
      (t[13] = re),
      (t[14] = ie))
    : (ie = t[14]);
  let { data: N, isFetching: P, isError: oe, refetch: F } = S(We, ie),
    I = N?.branches,
    L = gt({ branches: T, currentBranch: n, defaultBranch: D }),
    R = !te && !x && !C && T.length === 0,
    z;
  t[15] !== s || t[16] !== R || t[17] !== v
    ? ((z = ot({ disabled: s, hasNoCommits: R, statusSummary: v })),
      (t[15] = s),
      (t[16] = R),
      (t[17] = v),
      (t[18] = z))
    : (z = t[18]);
  let { branchSelectionDisabled: B, createAndCheckoutDisabled: se, uncommittedFileCount: ce } = z,
    V;
  t[19] !== R || t[20] !== p
    ? ((V = R
        ? p.formatMessage({
            id: `composer.footer.branchSwitch.createAndCheckout.disabledTooltip`,
            defaultMessage: `Commit changes to create and checkout a new branch`,
            description: `Tooltip shown when create-and-checkout branch action is disabled because the repository has no commits`,
          })
        : void 0),
      (t[19] = R),
      (t[20] = p),
      (t[21] = V))
    : (V = t[21]);
  let H = V,
    U;
  t[22] === i ? (U = t[23]) : ((U = Fe(i)), (t[22] = i), (t[23] = U));
  let le = te || (x && L.length === 0),
    W = M || P,
    G;
  t[24] === w
    ? (G = t[25])
    : ((G = () => {
        w();
      }),
      (t[24] = w),
      (t[25] = G));
  let K;
  t[26] === F
    ? (K = t[27])
    : ((K = () => {
        F();
      }),
      (t[26] = F),
      (t[27] = K));
  let q;
  t[28] === c
    ? (q = t[29])
    : ((q = (e) => {
        c(e);
      }),
      (t[28] = c),
      (t[29] = q));
  let J;
  t[30] !== n || t[31] !== ce
    ? ((J = (e) =>
        e === n && ce > 0
          ? (0, Q.jsx)(`span`, {
              className: `inline-flex items-center gap-1 text-xs text-tertiary`,
              children: (0, Q.jsx)(u, {
                id: `composer.footer.branchSwitch.uncommittedSummaryPrefix`,
                defaultMessage: `Uncommitted: {fileCount, plural, one {# file} other {# files}}`,
                description: `Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes`,
                values: { fileCount: ce },
              }),
            })
          : null),
      (t[30] = n),
      (t[31] = ce),
      (t[32] = J))
    : (J = t[32]);
  let ue;
  t[33] !== B ||
  t[34] !== n ||
  t[35] !== C ||
  t[36] !== oe ||
  t[37] !== c ||
  t[38] !== l ||
  t[39] !== L ||
  t[40] !== m ||
  t[41] !== I ||
  t[42] !== U ||
  t[43] !== le ||
  t[44] !== W ||
  t[45] !== G ||
  t[46] !== K ||
  t[47] !== q ||
  t[48] !== J
    ? ((ue = (0, Q.jsx)(ze, {
        branches: L,
        repositoryName: U,
        selectedBranch: n,
        disabled: B,
        isError: C,
        isLoading: le,
        isSearchError: oe,
        isSearchLoading: W,
        onClose: l,
        onRetry: G,
        onRetrySearch: K,
        onSearchQueryChange: h,
        onSelectCustomBranch: q,
        onSelectBranch: c,
        renderBranchSubText: J,
        searchedBranches: I,
        searchQuery: m,
      })),
      (t[33] = B),
      (t[34] = n),
      (t[35] = C),
      (t[36] = oe),
      (t[37] = c),
      (t[38] = l),
      (t[39] = L),
      (t[40] = m),
      (t[41] = I),
      (t[42] = U),
      (t[43] = le),
      (t[44] = W),
      (t[45] = G),
      (t[46] = K),
      (t[47] = q),
      (t[48] = J),
      (t[49] = ue))
    : (ue = t[49]);
  let de;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Q.jsx)(y.Separator, {})), (t[50] = de))
    : (de = t[50]);
  let fe;
  t[51] === f
    ? (fe = t[52])
    : ((fe = (e) => {
        (e.preventDefault(), f());
      }),
      (t[51] = f),
      (t[52] = fe));
  let pe;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, Q.jsx)(u, {
        id: `composer.footer.branchSwitch.createAndCheckout`,
        defaultMessage: `Create and checkout new branch…`,
        description: `Dropdown action label in the composer footer branch switcher to create and checkout a new branch`,
      })),
      (t[53] = pe))
    : (pe = t[53]);
  let Y;
  t[54] !== se || t[55] !== H || t[56] !== fe
    ? ((Y = (0, Q.jsx)(y.Item, {
        LeftIcon: ae,
        disabled: se,
        tooltipText: H,
        onSelect: fe,
        children: pe,
      })),
      (t[54] = se),
      (t[55] = H),
      (t[56] = fe),
      (t[57] = Y))
    : (Y = t[57]);
  let me;
  return (
    t[58] !== ue || t[59] !== Y
      ? ((me = (0, Q.jsxs)(Q.Fragment, { children: [ue, de, Y] })),
        (t[58] = ue),
        (t[59] = Y),
        (t[60] = me))
      : (me = t[60]),
    me
  );
}
function ft(e) {
  let t = (0, vt.c)(53),
    {
      open: n,
      onOpenChange: r,
      conversationTitle: i,
      cwd: a,
      hostConfig: o,
      isPending: c,
      onSubmit: d,
    } = e,
    f = ne(),
    p = T(s.branchPrefix),
    m;
  t[0] !== p || t[1] !== i
    ? ((m = M({ branchPrefix: p, conversationTitle: i })), (t[0] = p), (t[1] = i), (t[2] = m))
    : (m = t[2]);
  let [h, g] = (0, Z.useState)(m),
    _;
  t[3] === n ? (_ = t[4]) : ((_ = { enabled: n }), (t[3] = n), (t[4] = _));
  let { data: v, isLoading: y, isFetching: b, isError: te } = Ye(a, o, $, _),
    x,
    S,
    C,
    w;
  if (t[5] !== h || t[6] !== v) {
    x = v === void 0 ? [] : v;
    let e = gt({ branches: x, currentBranch: ``, defaultBranch: null });
    ((w = h.trim()),
      (S = w.endsWith(`/`)),
      (C = w.length > 0 && e.includes(w)),
      (t[5] = h),
      (t[6] = v),
      (t[7] = x),
      (t[8] = S),
      (t[9] = C),
      (t[10] = w));
  } else ((x = t[7]), (S = t[8]), (C = t[9]), (w = t[10]));
  let E = C,
    D = !y && !b && !te && x.length === 0,
    O = !c && !y && !b && !D && w.length > 0 && !S && !E,
    k;
  t[11] !== O || t[12] !== d || t[13] !== w
    ? ((k = (e) => {
        (e.preventDefault(), O && d(w));
      }),
      (t[11] = O),
      (t[12] = d),
      (t[13] = w),
      (t[14] = k))
    : (k = t[14]);
  let A;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(oe, {
        children: (0, Q.jsx)(re, {
          title: (0, Q.jsx)(ge, {
            children: (0, Q.jsx)(u, {
              id: `composer.footer.branchSwitch.createDialog.title`,
              defaultMessage: `Create and checkout branch`,
              description: `Title for dialog that creates and checks out a new branch from the composer footer`,
            }),
          }),
        }),
      })),
      (t[15] = A))
    : (A = t[15]);
  let j;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Q.jsx)(Re, {})), (t[16] = j))
    : (j = t[16]);
  let N;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        g(Ee(e.target.value));
      }),
      (t[17] = N))
    : (N = t[17]);
  let P;
  t[18] === f
    ? (P = t[19])
    : ((P = f.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.placeholder`,
        defaultMessage: `new-branch`,
        description: `Placeholder for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[18] = f),
      (t[19] = P));
  let ae;
  t[20] === f
    ? (ae = t[21])
    : ((ae = f.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.ariaLabel`,
        defaultMessage: `Branch name`,
        description: `Aria label for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[20] = f),
      (t[21] = ae));
  let F;
  t[22] !== h || t[23] !== ae || t[24] !== P
    ? ((F = (0, Q.jsx)(l, {
        autoFocus: !0,
        value: h,
        onChange: N,
        placeholder: P,
        "aria-label": ae,
      })),
      (t[22] = h),
      (t[23] = ae),
      (t[24] = P),
      (t[25] = F))
    : (F = t[25]);
  let I;
  t[26] !== E || t[27] !== S || t[28] !== c
    ? ((I = S
        ? (0, Q.jsx)(`p`, {
            className: `text-xs text-danger`,
            children: (0, Q.jsx)(u, {
              id: `composer.footer.branchSwitch.createDialog.trailingSlashError`,
              defaultMessage: `Branch name cannot end with “/”.`,
              description: `Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash`,
            }),
          })
        : E && !c
          ? (0, Q.jsx)(`p`, {
              className: `text-xs text-danger`,
              children: (0, Q.jsx)(u, {
                id: `composer.footer.branchSwitch.createDialog.branchExistsError`,
                defaultMessage: `Branch already exists.`,
                description: `Validation message shown in the create-and-checkout branch dialog when the entered branch already exists`,
              }),
            })
          : null),
      (t[26] = E),
      (t[27] = S),
      (t[28] = c),
      (t[29] = I))
    : (I = t[29]);
  let L;
  t[30] !== F || t[31] !== I
    ? ((L = (0, Q.jsxs)(oe, { className: `flex flex-col gap-2`, children: [j, F, I] })),
      (t[30] = F),
      (t[31] = I),
      (t[32] = L))
    : (L = t[32]);
  let R;
  t[33] === r
    ? (R = t[34])
    : ((R = () => {
        r(!1);
      }),
      (t[33] = r),
      (t[34] = R));
  let z;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Q.jsx)(u, {
        id: `composer.footer.branchSwitch.createDialog.close`,
        defaultMessage: `Close`,
        description: `Secondary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[35] = z))
    : (z = t[35]);
  let B;
  t[36] === R
    ? (B = t[37])
    : ((B = (0, Q.jsx)(W, { color: `secondary`, type: `button`, onClick: R, children: z })),
      (t[36] = R),
      (t[37] = B));
  let se = !O,
    ce;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, Q.jsx)(u, {
        id: `composer.footer.branchSwitch.createDialog.createAndCheckout`,
        defaultMessage: `Create and checkout`,
        description: `Primary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[38] = ce))
    : (ce = t[38]);
  let V;
  t[39] !== c || t[40] !== se
    ? ((V = (0, Q.jsx)(W, {
        color: `primary`,
        disabled: se,
        loading: c,
        type: `submit`,
        children: ce,
      })),
      (t[39] = c),
      (t[40] = se),
      (t[41] = V))
    : (V = t[41]);
  let H;
  t[42] !== B || t[43] !== V
    ? ((H = (0, Q.jsx)(oe, { children: (0, Q.jsxs)(ie, { children: [B, V] }) })),
      (t[42] = B),
      (t[43] = V),
      (t[44] = H))
    : (H = t[44]);
  let U;
  t[45] !== L || t[46] !== H || t[47] !== k
    ? ((U = (0, Q.jsxs)(ee, {
        as: `form`,
        "data-codex-branch-create-dialog": ``,
        onSubmit: k,
        children: [A, L, H],
      })),
      (t[45] = L),
      (t[46] = H),
      (t[47] = k),
      (t[48] = U))
    : (U = t[48]);
  let le;
  return (
    t[49] !== r || t[50] !== n || t[51] !== U
      ? ((le = (0, Q.jsx)(ye, { size: `feature`, open: n, onOpenChange: r, children: U })),
        (t[49] = r),
        (t[50] = n),
        (t[51] = U),
        (t[52] = le))
      : (le = t[52]),
    le
  );
}
function pt(e) {
  let t = (0, vt.c)(57),
    {
      open: n,
      onOpenChange: i,
      conflictFiles: a,
      cwd: o,
      hostConfig: s,
      targetBranch: c,
      onContinue: l,
    } = e,
    { data: d } = Ke(o, s, $),
    f;
  t[0] === o
    ? (f = t[1])
    : ((f = { cwd: o, includeUntrackedFiles: !1, operationSource: $, source: `staged` }),
      (t[0] = o),
      (t[1] = f));
  let p;
  t[2] === n
    ? (p = t[3])
    : ((p = { enabled: n, liveQuery: ht, staleTime: 1 / 0 }), (t[2] = n), (t[3] = p));
  let { data: m } = r(o, s, `review-summary`, f, $, p),
    h;
  t[4] === o
    ? (h = t[5])
    : ((h = { cwd: o, operationSource: $, source: `unstaged` }), (t[4] = o), (t[5] = h));
  let g;
  t[6] === n
    ? (g = t[7])
    : ((g = { enabled: n, liveQuery: mt, staleTime: 1 / 0 }), (t[6] = n), (t[7] = g));
  let { data: _ } = r(o, s, `review-summary`, h, $, g),
    v,
    y,
    b,
    te,
    x,
    S,
    C,
    w,
    ne,
    T,
    E;
  if (
    t[8] !== a ||
    t[9] !== l ||
    t[10] !== i ||
    t[11] !== n ||
    t[12] !== m ||
    t[13] !== d ||
    t[14] !== c ||
    t[15] !== _
  ) {
    let e = [m, _],
      r = De(e),
      o = r?.totalAdditions ?? 0,
      s = r?.totalDeletions ?? 0,
      f = o + s > 0,
      p = a.length > 0,
      h;
    t[27] === d ? (h = t[28]) : ((h = st(d)), (t[27] = d), (t[28] = h));
    let g = h;
    ((b = ye),
      (te = `feature`),
      (x = n),
      (S = i),
      (y = ee),
      (ne = `form`),
      t[29] === l
        ? (T = t[30])
        : ((T = (e) => {
            (e.preventDefault(), l());
          }),
          (t[29] = l),
          (t[30] = T)),
      t[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((E = (0, Q.jsx)(oe, {
            children: (0, Q.jsx)(re, {
              title: (0, Q.jsx)(ge, {
                children: (0, Q.jsx)(u, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.title`,
                  defaultMessage: `Commit changes to switch branch`,
                  description: `Title for dialog shown when branch switching is blocked by uncommitted changes`,
                }),
              }),
            }),
          })),
          (t[31] = E))
        : (E = t[31]),
      (v = oe),
      (C = `text-codex-description`),
      (w = p
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [
              (0, Q.jsx)(u, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix`,
                defaultMessage: `Your changes to the following files would be overwritten by checkout:`,
                description: `Message shown in the uncommitted changes dialog before listing files that block checkout`,
              }),
              (0, Q.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: a.map((t, n) => {
                  let r = Ae(t, e);
                  return (0, Q.jsxs)(
                    `div`,
                    {
                      className: `inline-flex items-center gap-1 text-default`,
                      children: [
                        (0, Q.jsx)(`span`, { children: t }),
                        r == null
                          ? null
                          : (0, Q.jsx)(me, {
                              className: `inline-flex align-middle`,
                              linesAdded: r.linesAdded,
                              linesRemoved: r.linesRemoved,
                            }),
                      ],
                    },
                    `${t}:${n}`,
                  );
                }),
              }),
              (0, Q.jsx)(u, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodySuffix`,
                defaultMessage: `Please commit your changes to continue`,
                description: `Message shown in the uncommitted changes dialog after listing files that block checkout`,
              }),
            ],
          })
        : f
          ? (0, Q.jsx)(`span`, {
              className: `inline-flex items-center gap-1 whitespace-nowrap`,
              children:
                c == null
                  ? (0, Q.jsx)(u, {
                      id: `composer.footer.branchSwitch.uncommittedDialog.body.withDiff.unknownBranch`,
                      defaultMessage: `Commit <diffStats></diffStats> changes in {fileCount, plural, one {# file} other {# files}} to check out the selected branch.`,
                      description: `Body text in the uncommitted changes dialog when diff stats are available but the target branch name is unavailable`,
                      values: {
                        fileCount: g,
                        diffStats: () =>
                          (0, Q.jsx)(me, {
                            className: `inline-flex align-middle`,
                            linesAdded: o,
                            linesRemoved: s,
                          }),
                      },
                    })
                  : (0, Q.jsx)(u, {
                      id: `composer.footer.branchSwitch.uncommittedDialog.body.withDiff.namedBranch`,
                      defaultMessage: `Commit <diffStats></diffStats> changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
                      description: `Body text in the uncommitted changes dialog when diff stats and the target branch name are available`,
                      values: {
                        fileCount: g,
                        branchName: c,
                        diffStats: () =>
                          (0, Q.jsx)(me, {
                            className: `inline-flex align-middle`,
                            linesAdded: o,
                            linesRemoved: s,
                          }),
                      },
                    }),
            })
          : c == null
            ? (0, Q.jsx)(u, {
                id: `composer.footer.branchSwitch.uncommittedDialog.body.noDiff.unknownBranch`,
                defaultMessage: `Commit changes in {fileCount, plural, one {# file} other {# files}} to check out the selected branch.`,
                description: `Body text in the uncommitted changes dialog when diff stats and the target branch name are unavailable`,
                values: { fileCount: g },
              })
            : (0, Q.jsx)(u, {
                id: `composer.footer.branchSwitch.uncommittedDialog.body.noDiff.namedBranch`,
                defaultMessage: `Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
                description: `Body text in the uncommitted changes dialog when diff stats are unavailable but the target branch name is available`,
                values: { fileCount: g, branchName: c },
              })),
      (t[8] = a),
      (t[9] = l),
      (t[10] = i),
      (t[11] = n),
      (t[12] = m),
      (t[13] = d),
      (t[14] = c),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b),
      (t[19] = te),
      (t[20] = x),
      (t[21] = S),
      (t[22] = C),
      (t[23] = w),
      (t[24] = ne),
      (t[25] = T),
      (t[26] = E));
  } else
    ((v = t[16]),
      (y = t[17]),
      (b = t[18]),
      (te = t[19]),
      (x = t[20]),
      (S = t[21]),
      (C = t[22]),
      (w = t[23]),
      (ne = t[24]),
      (T = t[25]),
      (E = t[26]));
  let D;
  t[32] !== v || t[33] !== C || t[34] !== w
    ? ((D = (0, Q.jsx)(v, { className: C, children: w })),
      (t[32] = v),
      (t[33] = C),
      (t[34] = w),
      (t[35] = D))
    : (D = t[35]);
  let O;
  t[36] === i
    ? (O = t[37])
    : ((O = () => {
        i(!1);
      }),
      (t[36] = i),
      (t[37] = O));
  let k;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(u, {
        id: `composer.footer.branchSwitch.uncommittedDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[38] = k))
    : (k = t[38]);
  let A;
  t[39] === O
    ? (A = t[40])
    : ((A = (0, Q.jsx)(W, { color: `secondary`, type: `button`, onClick: O, children: k })),
      (t[39] = O),
      (t[40] = A));
  let j;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Q.jsx)(W, {
        autoFocus: !0,
        color: `primary`,
        type: `submit`,
        children: (0, Q.jsx)(u, {
          id: `composer.footer.branchSwitch.uncommittedDialog.commit`,
          defaultMessage: `Commit and switch branch…`,
          description: `Primary button label in branch switching blocked dialog shown in the composer footer`,
        }),
      })),
      (t[41] = j))
    : (j = t[41]);
  let M;
  t[42] === A
    ? (M = t[43])
    : ((M = (0, Q.jsx)(oe, { children: (0, Q.jsxs)(ie, { children: [A, j] }) })),
      (t[42] = A),
      (t[43] = M));
  let N;
  t[44] !== y || t[45] !== D || t[46] !== M || t[47] !== ne || t[48] !== T || t[49] !== E
    ? ((N = (0, Q.jsxs)(y, { as: ne, onSubmit: T, children: [E, D, M] })),
      (t[44] = y),
      (t[45] = D),
      (t[46] = M),
      (t[47] = ne),
      (t[48] = T),
      (t[49] = E),
      (t[50] = N))
    : (N = t[50]);
  let P;
  return (
    t[51] !== b || t[52] !== te || t[53] !== x || t[54] !== S || t[55] !== N
      ? ((P = (0, Q.jsx)(b, { size: te, open: x, onOpenChange: S, children: N })),
        (t[51] = b),
        (t[52] = te),
        (t[53] = x),
        (t[54] = S),
        (t[55] = N),
        (t[56] = P))
      : (P = t[56]),
    P
  );
}
function mt(e) {
  return { method: `review-summary`, params: e };
}
function ht(e) {
  return { method: `review-summary`, params: e };
}
function gt({ branches: e, currentBranch: t, defaultBranch: n }) {
  let r = new Set(),
    i = [];
  return (
    _t(n, i, r),
    _t(t, i, r),
    e.forEach((e) => {
      _t(e, i, r);
    }),
    i
  );
}
function _t(e, t, n) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
var vt,
  Z,
  Q,
  $,
  yt = e(() => {
    ((vt = K()),
      C(),
      o(),
      (Z = t(a(), 1)),
      D(),
      X(),
      J(),
      i(),
      H(),
      B(),
      N(),
      A(),
      G(),
      b(),
      p(),
      Ge(),
      c(),
      v(),
      $e(),
      Ce(),
      Je(),
      nt(),
      at(),
      E(),
      Le(),
      ke(),
      Pe(),
      P(),
      Ie(),
      de(),
      Y(),
      Be(),
      O(),
      Ne(),
      ct(),
      Te(),
      (Q = V()),
      ($ = `composer_branch_switcher`));
  });
function bt(e, t) {
  return t?.trim() || St(e);
}
function xt(e) {
  return bt(e.configPath, e.type === `success` ? e.environment.name : null);
}
function St(e) {
  let t = pe(e),
    n = t.split(`/`).filter(Boolean);
  return n[n.length - 1] ?? t;
}
var Ct = e(() => {
  _();
});
export { $e as a, Ke as c, yt as i, We as l, Ct as n, Ye as o, lt as r, Je as s, xt as t, Ge as u };
//# sourceMappingURL=environment-labels-655533fc7a67.js.map
