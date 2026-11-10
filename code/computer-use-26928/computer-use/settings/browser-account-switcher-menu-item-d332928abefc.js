import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Ot as t,
  A5t as n,
  ADt as r,
  CE as i,
  E3 as a,
  EE as o,
  FDt as s,
  Fun as c,
  HS as l,
  Ket as u,
  LS as d,
  MS as f,
  Mun as p,
  NS as m,
  O5t as h,
  PS as g,
  Qun as _,
  S7 as v,
  SE as y,
  TE as ee,
  US as b,
  VS as x,
  Wrn as S,
  Wun as C,
  XS as w,
  Xc as T,
  Y5 as E,
  Yc as D,
  Yrn as O,
  _5t as k,
  _Rt as A,
  _dn as j,
  a5 as te,
  ast as ne,
  bE as re,
  bkt as M,
  bun as N,
  cMt as P,
  d5t as F,
  dJt as ie,
  fE as I,
  fJt as ae,
  iKt as oe,
  ist as se,
  jS as ce,
  lC as le,
  mcn as L,
  nKt as ue,
  okt as R,
  pE as de,
  pMt as fe,
  qun as z,
  sC as B,
  tC as pe,
  tdn as me,
  tkt as he,
  uMt as ge,
  vdn as V,
  vun as _e,
  wE as ve,
  wkt as H,
  yRt as ye,
  yun as be,
  z3 as xe,
  zS as Se,
} from "./app-shared-7552fc8d5d82.js";
import {
  AO as Ce,
  BO as we,
  C3 as Te,
  FX as Ee,
  GO as U,
  HD as De,
  IO as W,
  MO as Oe,
  NO as ke,
  OO as G,
  PX as Ae,
  RO as je,
  S3 as Me,
  UO as Ne,
  VD as Pe,
  d3t as Fe,
  f3t as K,
  kO as Ie,
  m3t as q,
  p3t as J,
  z8t as Le,
} from "./app-initial-3916b423772b.js";
import { gs as Re, ys as ze } from "./app-primary-7b889402e22e.js";
import { a as Be, i as Ve } from "./logout-engine-f18fa83948b6.js";
import {
  a as He,
  i as Ue,
  n as We,
  o as Ge,
  r as Ke,
  s as qe,
  t as Je,
  u as Ye,
} from "./workspace-24f1c3d6229e.js";
import { i as Xe, n as Ze, r as Qe, t as $e } from "./workspace-type-label-d42ad230fd58.js";
import { i as et, r as tt } from "./login-analytics-204717fa347d.js";
import {
  a as nt,
  i as rt,
  n as it,
  o as at,
  r as ot,
  t as st,
} from "./workspace-identifier-d779dfef91b3.js";
var ct, lt;
function ut() {
  return (ut = e(() => {
    (V(),
      (ct = L()),
      (lt = (e) =>
        (0, ct.jsxs)(`svg`, {
          width: 36,
          height: 36,
          viewBox: `0 0 36 36`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, ct.jsx)(`circle`, {
              cx: 18,
              cy: 18,
              r: 16,
              stroke: `currentColor`,
              strokeWidth: 3,
            }),
            (0, ct.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `m7.358 14.641 5.056-5.055A2 2 0 0 1 13.828 9h8.343a2 2 0 0 1 1.414.586l5.056 5.055a2 2 0 0 1 .055 2.771l-9.226 9.996a2 2 0 0 1-2.94 0l-9.227-9.996a2 2 0 0 1 .055-2.77Zm6.86-1.939-.426 1.281a2.07 2.07 0 0 1-1.31 1.31l-1.28.426a.296.296 0 0 0 0 .561l1.28.428a2.07 2.07 0 0 1 1.31 1.309l.427 1.28c.09.27.471.27.56 0l.428-1.28a2.07 2.07 0 0 1 1.309-1.31l1.281-.427a.296.296 0 0 0 0-.56l-1.281-.428a2.07 2.07 0 0 1-1.309-1.309l-.427-1.28a.296.296 0 0 0-.561 0z`,
              fill: `currentColor`,
            }),
          ],
        })));
  }))();
}
function dt(e) {
  let r = (0, Z.c)(59),
    {
      currentAccount: a,
      currentAccountLabel: o,
      currentAccounts: c,
      currentEmail: l,
      currentUserId: u,
      currentUserImageUrl: d,
      currentUserName: f,
    } = e,
    p = n(ie),
    m = k(`/`),
    h = k(`/workspace/deactivated`),
    g = a?.id ?? null,
    _;
  r[0] === a?.structure
    ? (_ = r[1])
    : ((_ = a?.structure?.toLowerCase()), (r[0] = a?.structure), (r[1] = _));
  let y = _ === `personal`,
    b = a == null || y,
    x = Te(b ? d : (a?.profile_picture_url ?? null)),
    S = fe(),
    C = !ge(rn) || Et(),
    [T, A] = (0, Q.useState)(() => (C && c != null ? Pt() : [])),
    [j, ne] = (0, Q.useState)(null),
    [re, N] = (0, Q.useState)(!1),
    [P, F] = (0, Q.useState)(!1),
    [I, ae] = (0, Q.useState)(null),
    [ce, le] = (0, Q.useState)(!1),
    [L, ue] = (0, Q.useState)(null),
    R = c != null,
    de = Ke(c),
    z = R && C && jt(c),
    B = R
      ? Nt({
          canAddAccountSwitchSession: z,
          currentEmail: l,
          currentSessionToken: j,
          currentUserId: u,
          currentUserImageUrl: d,
          currentUserName: f,
          currentWorkspaces: de,
          sessions: T,
        })
      : [],
    pe = (e, t) => {
      let n = e === void 0 ? de : e,
        r = t === void 0 ? z : t;
      return !C || !R
        ? Promise.resolve()
        : (F(!0),
          M(async () => {
            let e = await fetch(Yt, {
              cache: `no-store`,
              credentials: `include`,
              headers: { [$t]: Yt, [en]: Yt },
              signal: AbortSignal.timeout(tn),
            });
            if (!e.ok) return;
            let t = await e.json().catch(_t),
              i = sn.safeParse(t);
            if (!i.success) return;
            let a = Pt(),
              o = r ? It(a, i.data, n, d, f) : At(a, i.data);
            (ne(i.data.sessionToken), A(o), r && Ft(o));
          })
            .catch(gt)
            .finally(() => {
              F(!1);
            }));
    },
    me = (0, Q.useEffectEvent)(() => {
      queueMicrotask(() => {
        pe();
      });
    }),
    he;
  (r[2] !== z || r[3] !== c || r[4] !== C
    ? ((he = [z, c, C]), (r[2] = z), (r[3] = c), (r[4] = C), (r[5] = he))
    : (he = r[5]),
    (0, Q.useEffect)(() => {
      C && c != null && me();
    }, he));
  let V;
  r[6] === a?.name ? (V = r[7]) : ((V = a?.name?.trim() || null), (r[6] = a?.name), (r[7] = V));
  let _e = V,
    ve = (b ? u : a?.id) ?? void 0,
    H;
  r[8] === b
    ? (H = r[9])
    : ((H = b ? void 0 : (0, $.jsx)(lt, { className: `size-5` })), (r[8] = b), (r[9] = H));
  let ye = b ? f : _e,
    xe;
  r[10] !== x || r[11] !== ve || r[12] !== H || r[13] !== ye
    ? ((xe = (0, $.jsx)(Ae, {
        alt: ``,
        colorKey: ve,
        fallback: H,
        name: ye,
        size: `response`,
        src: x,
      })),
      (r[10] = x),
      (r[11] = ve),
      (r[12] = H),
      (r[13] = ye),
      (r[14] = xe))
    : (xe = r[14]);
  let Se = xe,
    Ce = a?.plan_type === `quorum` ? (f ?? _e) : _e,
    we = b ? (f ?? o) : (Ce ?? o),
    Ee = (c?.accounts?.length ?? 0) > 1,
    U;
  r[15] !== a || r[16] !== Ee
    ? ((U = (0, $.jsx)(yt, { account: a, hasMultipleWorkspaces: Ee })),
      (r[15] = a),
      (r[16] = Ee),
      (r[17] = U))
    : (U = r[17]);
  let De;
  r[18] !== we || r[19] !== U || r[20] !== Se
    ? ((De = { label: we, subtitle: U, icon: Se }),
      (r[18] = we),
      (r[19] = U),
      (r[20] = Se),
      (r[21] = De))
    : (De = r[21]);
  let W = De;
  if (!C) {
    let e;
    return (
      r[22] === W
        ? (e = r[23])
        : ((e = (0, $.jsx)(vt, { disabled: !0, workspaceIdentity: W })), (r[22] = W), (r[23] = e)),
      e
    );
  }
  let Oe;
  r[24] !== l ||
  r[25] !== j ||
  r[26] !== u ||
  r[27] !== g ||
  r[28] !== y ||
  r[29] !== m ||
  r[30] !== h ||
  r[31] !== p ||
  r[32] !== A ||
  r[33] !== S ||
  r[34] !== I
    ? ((Oe = (e, n) => {
        let r = Bt(e, n);
        if (
          I != null ||
          (!n.isDeactivated && n.canAccessWithSession !== !1 && Vt(e, n, j, u, l, g, y))
        )
          return Promise.resolve();
        (le(!1), ue(null), ae(r));
        let i = Y(e, j, u, l),
          a = i ? `workspace_switcher` : `account_switcher`,
          o = He(n.isDeactivated ? h : m);
        if ((Tt({ scope: p, action: `triggered`, session: e, switchFlow: a, workspace: n }), i)) {
          let r = Ue(S),
            i = t({ showLoadingScreen: !0 });
          return Ye(n, r, o)
            .then(async (t) => {
              let { willRedirect: r } = t;
              (Tt({ scope: p, action: `succeeded`, session: e, switchFlow: a, workspace: n }),
                r || (await Ge(o)));
            })
            .catch((e) => {
              (be.error(`Browser workspace switch failed`, {
                safe: { switchFlow: a },
                sensitive: { error: e },
              }),
                e instanceof We &&
                  ue(
                    `${e.message} Connect to an approved network or contact your workspace admin.`,
                  ),
                le(!0),
                ae(null));
            })
            .finally(i);
        }
        let s = t({ showLoadingScreen: !0 });
        return Ct(e, n.workspaceAccountId)
          .then(
            () => (
              Tt({ scope: p, action: `succeeded`, session: e, switchFlow: a, workspace: n }),
              Ge(o)
            ),
          )
          .catch((e) => {
            (be.error(`Browser saved account switch failed`, {
              safe: { switchFlow: a },
              sensitive: { error: e },
            }),
              A(Pt()),
              le(!0),
              ae(null));
          })
          .finally(s);
      }),
      (r[24] = l),
      (r[25] = j),
      (r[26] = u),
      (r[27] = g),
      (r[28] = y),
      (r[29] = m),
      (r[30] = h),
      (r[31] = p),
      (r[32] = A),
      (r[33] = S),
      (r[34] = I),
      (r[35] = Oe))
    : (Oe = r[35]);
  let ke = Oe,
    G = null;
  if (L != null) {
    let e;
    (r[36] === L
      ? (e = r[37])
      : ((e = (0, $.jsx)(w.Item, { disabled: !0, children: L })), (r[36] = L), (r[37] = e)),
      (G = e));
  } else if (ce) {
    let e;
    (r[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(w.Item, {
          disabled: !0,
          children: (0, $.jsx)(O, {
            id: `codex.profileDropdown.switchAccountFailed`,
            defaultMessage: `Couldn’t switch accounts. Try again`,
            description: `Error shown in the account switcher submenu when changing to another ChatGPT account fails`,
          }),
        })),
        (r[38] = e))
      : (e = r[38]),
      (G = e));
  }
  let je = B.length === 2 && B.every(ht),
    Me = (e, t) => {
      let n = Vt(e, t, j, u, l, g, y),
        r = Bt(e, t),
        a = t.isPersonalWorkspace ? null : t.workspaceName?.trim();
      je && (a = e.name?.trim() || a);
      let o = t.isPersonalWorkspace ? (t.workspaceImageUrl ?? e.userImageUrl) : t.workspaceImageUrl,
        d = !t.isDeactivated && t.canAccessWithSession === !1,
        f = Y(e, j, u, l) ? c?.accounts?.find((e) => e.id === t.workspaceAccountId) : void 0,
        p =
          t.isDeactivated === !0 &&
          f?.structure === `workspace` &&
          f.account_user_role === `account-owner` &&
          s(f.plan_type) &&
          f.can_access_with_session !== !1,
        m = je ? (0, $.jsx)($.Fragment, { children: Gt(e) }) : null;
      t.isDeactivated
        ? (m = (0, $.jsx)(O, {
            id: `codex.profileDropdown.deactivatedWorkspace`,
            defaultMessage: `Deactivated`,
            description: `Secondary label for a saved workspace that requires recovery before it can be used`,
          }))
        : d &&
          (m = (0, $.jsx)(O, {
            id: `codex.profileDropdown.inaccessibleWorkspace`,
            defaultMessage: `Sign in to access`,
            description: `Secondary label for a workspace that the current ChatGPT session cannot access`,
          }));
      let h = X(e).filter(mt).map(pt),
        _ =
          !re || je || t.isPersonalWorkspace || t.isDeactivated
            ? void 0
            : ot(S, t.workspaceAccountId, t.workspaceName?.trim() ?? ``, h);
      _ != null &&
        (m = (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(st, {
              workspaceId: t.workspaceAccountId,
              shortId: _,
              sameNameWorkspaceIds: h
                .filter((e) => e.name === (t.workspaceName?.trim() ?? ``))
                .map(ft),
              accountId: Y(e, j, u, l) ? g : null,
            }),
            m != null && (0, $.jsxs)($.Fragment, { children: [(0, $.jsx)(`br`, {}), m] }),
          ],
        }));
      let v = t.isDeactivated
          ? (0, $.jsx)(te, {})
          : (0, $.jsx)(bt, {
              colorKey: t.isPersonalWorkspace ? (e.userId ?? void 0) : t.workspaceAccountId,
              imageUrl: o,
              isPersonalWorkspace: !!t.isPersonalWorkspace,
              name: e.name ?? a ?? Gt(e),
            }),
        b = I === r,
        x;
      b ? (x = (0, $.jsx)(i, { className: `icon-base` })) : d && (x = (0, $.jsx)(ee, { asset: D }));
      let C = (0, $.jsx)(`span`, {
          className: `whitespace-nowrap`,
          children:
            a ||
            (t.isPersonalWorkspace
              ? (0, $.jsx)(O, {
                  id: `codex.profileDropdown.personalAccountTitle`,
                  defaultMessage: `Personal account`,
                  description: `Label for a personal account`,
                })
              : (0, $.jsx)(O, {
                  id: `codex.profileDropdown.defaultAccountTitle`,
                  defaultMessage: `Default account`,
                  description: `Fallback label when a non-personal account has no display name`,
                })),
        }),
        T = x ?? (n ? (0, $.jsx)(ee, { asset: se }) : void 0);
      return (0, $.jsx)(
        w.Item,
        {
          disabled: I != null,
          leftIcon: v,
          onSelect: () => {
            ke(e, t);
          },
          rightIcon: T,
          rightText: p
            ? (0, $.jsx)(O, {
                id: `codex.profileDropdown.reactivateWorkspace`,
                defaultMessage: `Reactivate`,
                description: `Action in the account switcher that opens recovery for a deactivated Business workspace owned by the signed-in user`,
              })
            : void 0,
          SubText: m,
          children: C,
        },
        r,
      );
    },
    Ne = vt,
    Pe = (e) => {
      (N(e), e && pe());
    },
    Fe = B.map((e, t) =>
      (0, $.jsxs)(
        Q.Fragment,
        {
          children: [
            !je &&
              (0, $.jsxs)($.Fragment, {
                children: [
                  t > 0 && (0, $.jsx)(w.Separator, {}),
                  (0, $.jsx)(w.Item, {
                    variant: `label`,
                    leftIcon: (0, $.jsx)(E, {}),
                    children:
                      Gt(e) ||
                      (0, $.jsx)(O, {
                        id: `codex.profileDropdown.unnamedAccount`,
                        defaultMessage: `Account`,
                        description: `Fallback label for a saved ChatGPT account without an email address or display name`,
                      }),
                  }),
                ],
              }),
            X(e).map((t) => Me(e, t)),
          ],
        },
        zt(e),
      ),
    ),
    K;
  r[39] !== R || r[40] !== P || r[41] !== B
    ? ((K =
        (P || !R) && B.length === 0
          ? (0, $.jsx)(w.Item, {
              disabled: !0,
              children: (0, $.jsx)(O, {
                id: `codex.profileDropdown.loadingAccounts`,
                defaultMessage: `Loading accounts…`,
                description: `Temporary account switcher submenu label while saved ChatGPT accounts are loading`,
              }),
            })
          : null),
      (r[39] = R),
      (r[40] = P),
      (r[41] = B),
      (r[42] = K))
    : (K = r[42]);
  let Ie;
  r[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (0, $.jsx)(ln, { placement: `account` })), (r[43] = Ie))
    : (Ie = r[43]);
  let q;
  r[44] !== z || r[45] !== j || r[46] !== p || r[47] !== T || r[48] !== B || r[49] !== A
    ? ((q = z
        ? (0, $.jsxs)($.Fragment, {
            children: [
              B.length > 0 ? (0, $.jsx)(w.Separator, {}) : null,
              (0, $.jsx)(w.Item, {
                leftIcon: (0, $.jsx)(v, {}),
                onSelect: () => {
                  if (T.length < Qt) {
                    qt(p);
                    return;
                  }
                  oe(p, xt, {
                    accounts: T,
                    currentSessionToken: j,
                    onSessionsChanged: () => {
                      A(Pt());
                    },
                  });
                },
                children: (0, $.jsx)(O, {
                  id: `codex.profileDropdown.addAccount`,
                  defaultMessage: `Add account`,
                  description: `Account switcher submenu item that starts login to add another ChatGPT account`,
                }),
              }),
            ],
          })
        : null),
      (r[44] = z),
      (r[45] = j),
      (r[46] = p),
      (r[47] = T),
      (r[48] = B),
      (r[49] = A),
      (r[50] = q))
    : (q = r[50]);
  let J;
  return (
    r[51] !== Ne ||
    r[52] !== G ||
    r[53] !== Pe ||
    r[54] !== Fe ||
    r[55] !== K ||
    r[56] !== q ||
    r[57] !== W
      ? ((J = (0, $.jsxs)(Ne, {
          workspaceIdentity: W,
          onOpenChange: Pe,
          children: [Fe, K, G, Ie, q],
        })),
        (r[51] = Ne),
        (r[52] = G),
        (r[53] = Pe),
        (r[54] = Fe),
        (r[55] = K),
        (r[56] = q),
        (r[57] = W),
        (r[58] = J))
      : (J = r[58]),
    J
  );
}
function ft(e) {
  return e.id;
}
function pt(e) {
  return { id: e.workspaceAccountId, name: e.workspaceName?.trim() ?? `` };
}
function mt(e) {
  return !e.isPersonalWorkspace && !e.isDeactivated;
}
function ht(e) {
  return X(e).length === 1;
}
function gt() {}
function _t() {
  return null;
}
function vt(e) {
  let t = (0, Z.c)(23),
    { children: n, disabled: r, open: i, onOpenChange: a, workspaceIdentity: o } = e;
  if (r !== void 0 && r) {
    let e;
    t[0] === o.subtitle
      ? (e = t[1])
      : ((e = (0, $.jsx)($.Fragment, { children: o.subtitle })), (t[0] = o.subtitle), (t[1] = e));
    let n;
    return (
      t[2] !== e || t[3] !== o.icon || t[4] !== o.label
        ? ((n = (0, $.jsx)(w.Item, {
            className: `opacity-100`,
            disabled: !0,
            leftIcon: o.icon,
            SubText: e,
            children: o.label,
          })),
          (t[2] = e),
          (t[3] = o.icon),
          (t[4] = o.label),
          (t[5] = n))
        : (n = t[5]),
      n
    );
  }
  let s;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(xe, { className: `text-tertiary`, "data-rtl-flip": `` })), (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === o.label
    ? (c = t[8])
    : ((c = (0, $.jsx)(`span`, { className: `truncate`, children: o.label })),
      (t[7] = o.label),
      (t[8] = c));
  let l;
  t[9] === o.subtitle
    ? (l = t[10])
    : ((l = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-xs leading-dense text-tertiary`,
        children: o.subtitle,
      })),
      (t[9] = o.subtitle),
      (t[10] = l));
  let u;
  t[11] !== c || t[12] !== l
    ? ((u = (0, $.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 flex-col`,
        "data-testid": `workspace-switcher-trigger`,
        children: [c, l],
      })),
      (t[11] = c),
      (t[12] = l),
      (t[13] = u))
    : (u = t[13]);
  let d;
  t[14] !== u || t[15] !== o.icon
    ? ((d = (0, $.jsx)(B, { leftIcon: o.icon, trailingContent: s, children: u })),
      (t[14] = u),
      (t[15] = o.icon),
      (t[16] = d))
    : (d = t[16]);
  let f;
  return (
    t[17] !== n || t[18] !== a || t[19] !== i || t[20] !== d || t[21] !== o.label
      ? ((f = (0, $.jsx)(w.FlyoutSubmenuItem, {
          align: `end`,
          contentSurface: `opaque`,
          contentWidth: `panel`,
          label: o.label,
          open: i,
          triggerContent: d,
          onOpenChange: a,
          children: n,
        })),
        (t[17] = n),
        (t[18] = a),
        (t[19] = i),
        (t[20] = d),
        (t[21] = o.label),
        (t[22] = f))
      : (f = t[22]),
    f
  );
}
function yt(e) {
  let t = (0, Z.c)(9),
    { account: n, hasMultipleWorkspaces: r } = e;
  if (n == null) return null;
  if (n.structure.toLowerCase() === `personal`) {
    if (r) {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(O, {
              id: `navigation.switchAccounts.personalAccountWorkspaceName`,
              defaultMessage: `Personal account`,
              description: `Label shown for personal account rows in the switch accounts workspace list`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    switch (n.plan_type) {
      case `free`: {
        let e;
        return (
          t[1] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(O, { ...Qe.free })), (t[1] = e))
            : (e = t[1]),
          e
        );
      }
      case `go`: {
        let e;
        return (
          t[2] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(O, { ...Qe.go })), (t[2] = e))
            : (e = t[2]),
          e
        );
      }
      case `plus`: {
        let e;
        return (
          t[3] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(O, { ...Qe.plus })), (t[3] = e))
            : (e = t[3]),
          e
        );
      }
      case `pro`:
      case `promax`:
      case `prolite`: {
        let e;
        return (
          t[4] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(O, { ...Qe.pro })), (t[4] = e))
            : (e = t[4]),
          e
        );
      }
      default:
        return null;
    }
  }
  let i;
  t[5] === n ? (i = t[6]) : ((i = $e(n)), (t[5] = n), (t[6] = i));
  let a = i,
    o;
  return (
    t[7] === a
      ? (o = t[8])
      : ((o = a == null ? null : (0, $.jsx)(O, { ...a })), (t[7] = a), (t[8] = o)),
    o
  );
}
function bt(e) {
  let t = (0, Z.c)(7),
    { colorKey: n, imageUrl: r, isPersonalWorkspace: i, name: a } = e,
    o = Te(r),
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = i ? void 0 : (0, $.jsx)(nt, { size: `response` })), (t[0] = i), (t[1] = s));
  let c;
  return (
    t[2] !== n || t[3] !== a || t[4] !== o || t[5] !== s
      ? ((c = (0, $.jsx)(Ae, {
          alt: ``,
          colorKey: n,
          fallback: s,
          name: a,
          referrerPolicy: `no-referrer`,
          size: `response`,
          src: o,
        })),
        (t[2] = n),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function xt(e) {
  let t = (0, Z.c)(49),
    { accounts: n, currentSessionToken: r, onClose: i, onSessionsChanged: o } = e,
    [s, c] = (0, Q.useState)(n[0]?.sessionToken ?? null),
    [u, d] = (0, Q.useState)(!1),
    [p, h] = (0, Q.useState)(!1),
    _;
  if (t[0] !== n || t[1] !== s) {
    let e;
    (t[3] === s ? (e = t[4]) : ((e = (e) => e.sessionToken === s), (t[3] = s), (t[4] = e)),
      (_ = n.find(e)),
      (t[0] = n),
      (t[1] = s),
      (t[2] = _));
  } else _ = t[2];
  let v = _,
    y;
  t[5] !== r || t[6] !== u || t[7] !== i || t[8] !== o || t[9] !== v
    ? ((y = () =>
        v == null || u
          ? Promise.resolve()
          : (d(!0),
            h(!1),
            St({ currentSessionToken: r, session: v })
              .then(() => {
                i();
              })
              .catch(() => {
                (o(), h(!0), d(!1));
              }))),
      (t[5] = r),
      (t[6] = u),
      (t[7] = i),
      (t[8] = o),
      (t[9] = v),
      (t[10] = y))
    : (y = t[10]);
  let ee = y,
    b;
  t[11] !== u || t[12] !== i
    ? ((b = (e) => {
        !e && !u && i();
      }),
      (t[11] = u),
      (t[12] = i),
      (t[13] = b))
    : (b = t[13]);
  let S;
  t[14] === ee
    ? (S = t[15])
    : ((S = (e) => {
        (e.preventDefault(), ee());
      }),
      (t[14] = ee),
      (t[15] = S));
  let C;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(l, {
        asChild: !0,
        children: (0, $.jsx)(`span`, {
          children: (0, $.jsx)(O, {
            id: `codex.profileDropdown.accountSwitcherLogout.title`,
            defaultMessage: `Choose an account to log out`,
            description: `Title of the dialog shown when adding a third saved ChatGPT account`,
          }),
        }),
      })),
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(g, {
        children: (0, $.jsx)(m, {
          title: C,
          subtitle: (0, $.jsx)(x, {
            children: (0, $.jsx)(O, {
              id: `codex.profileDropdown.accountSwitcherLogout.description`,
              defaultMessage: `You’re already logged in to two accounts. Log out of one to add a new account.`,
              description: `Description of the dialog shown when adding a third saved ChatGPT account`,
            }),
          }),
        }),
      })),
      (t[17] = w))
    : (w = t[17]);
  let T;
  if (t[18] !== n || t[19] !== u || t[20] !== s) {
    let e;
    (t[22] !== u || t[23] !== s
      ? ((e = (e) => {
          let t = e.sessionToken === s;
          return (0, $.jsxs)(
            re,
            {
              className: `w-full`,
              type: `button`,
              color: t ? `secondary` : `ghostActive`,
              size: `dialog`,
              "aria-pressed": t,
              disabled: u,
              onClick: () => {
                c(e.sessionToken);
              },
              children: [
                (0, $.jsx)(a, { className: t ? void 0 : `invisible` }),
                (0, $.jsx)(`span`, {
                  className: `min-w-0 truncate`,
                  children:
                    Gt(e) ??
                    (0, $.jsx)(O, {
                      id: `codex.profileDropdown.unnamedAccount`,
                      defaultMessage: `Account`,
                      description: `Fallback label for a saved ChatGPT account without an email address or display name`,
                    }),
                }),
              ],
            },
            zt(e),
          );
        }),
        (t[22] = u),
        (t[23] = s),
        (t[24] = e))
      : (e = t[24]),
      (T = n.map(e)),
      (t[18] = n),
      (t[19] = u),
      (t[20] = s),
      (t[21] = T));
  } else T = t[21];
  let E;
  t[25] === T
    ? (E = t[26])
    : ((E = (0, $.jsx)(`div`, { className: `flex flex-col gap-1`, children: T })),
      (t[25] = T),
      (t[26] = E));
  let D;
  t[27] === p
    ? (D = t[28])
    : ((D = p
        ? (0, $.jsx)(`p`, {
            role: `alert`,
            className: `mt-3 text-sm text-danger`,
            children: (0, $.jsx)(O, {
              id: `codex.profileDropdown.accountSwitcherLogout.failed`,
              defaultMessage: `Couldn’t log out this account. Try again`,
              description: `Error shown when the selected saved account cannot be logged out before adding another account`,
            }),
          })
        : null),
      (t[27] = p),
      (t[28] = D));
  let k;
  t[29] !== E || t[30] !== D
    ? ((k = (0, $.jsxs)(g, { children: [E, D] })), (t[29] = E), (t[30] = D), (t[31] = k))
    : (k = t[31]);
  let A;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(O, {
        id: `codex.profileDropdown.accountSwitcherLogout.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the add-account replacement dialog`,
      })),
      (t[32] = A))
    : (A = t[32]);
  let j;
  t[33] !== u || t[34] !== i
    ? ((j = (0, $.jsx)(re, {
        color: `ghost`,
        type: `button`,
        disabled: u,
        onClick: i,
        children: A,
      })),
      (t[33] = u),
      (t[34] = i),
      (t[35] = j))
    : (j = t[35]);
  let te = u || v == null,
    ne;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, $.jsx)(O, {
        id: `codex.profileDropdown.accountSwitcherLogout.confirm`,
        defaultMessage: `Log out and continue`,
        description: `Button that logs out the selected saved account before adding another account`,
      })),
      (t[36] = ne))
    : (ne = t[36]);
  let M;
  t[37] === te
    ? (M = t[38])
    : ((M = (0, $.jsx)(re, { color: `danger`, type: `submit`, disabled: te, children: ne })),
      (t[37] = te),
      (t[38] = M));
  let N;
  t[39] !== j || t[40] !== M
    ? ((N = (0, $.jsx)(g, { children: (0, $.jsxs)(f, { children: [j, M] }) })),
      (t[39] = j),
      (t[40] = M),
      (t[41] = N))
    : (N = t[41]);
  let P;
  t[42] !== k || t[43] !== N || t[44] !== S
    ? ((P = (0, $.jsxs)(ce, { as: `form`, onSubmit: S, children: [w, k, N] })),
      (t[42] = k),
      (t[43] = N),
      (t[44] = S),
      (t[45] = P))
    : (P = t[45]);
  let F;
  return (
    t[46] !== P || t[47] !== b
      ? ((F = (0, $.jsx)(Se, { open: !0, onOpenChange: b, size: `narrow`, children: P })),
        (t[46] = P),
        (t[47] = b),
        (t[48] = F))
      : (F = t[48]),
    F
  );
}
function St({ currentSessionToken: e, session: n }) {
  let r = t(),
    i = Dt(n, e);
  return (async () => {
    if (i == null) throw Error(`Failed to stage add-account logout continuation.`);
    if (
      (await Ve(),
      !we(i) ||
        (await M(async () => {
          if (!Ne(i)) throw (Oe(i), Error(`Add-account logout continuation was replaced.`));
        }),
        !je(i)))
    )
      throw (ke(i), Error(`Add-account logout continuation was replaced.`));
    if (!(await U(i, () => Pe(() => {}))))
      throw Error(`Add-account logout continuation was replaced.`);
    let e = new URL(`/auth/logout`, window.location.origin);
    (e.searchParams.set(`account_switch_action`, `logout`), window.location.assign(e.toString()));
  })().catch((e) => {
    throw (r(), i != null && ke(i), e);
  });
}
async function Ct(e, t = X(e)[0]?.workspaceAccountId) {
  return (
    await Ve(),
    M(async () => {
      try {
        await wt(e, t);
      } catch (t) {
        throw (kt(e.sessionToken), t);
      }
    })
  );
}
async function wt(e, t = X(e)[0]?.workspaceAccountId) {
  let n = await fetch(Xt, {
    method: `POST`,
    credentials: `include`,
    headers: { "Content-Type": `application/json`, [Zt]: e.sessionToken, [$t]: Xt, [en]: Xt },
    body: JSON.stringify({ workspaceAccountId: t }),
  });
  if (!n.ok) {
    let e = await n.text();
    throw Error(e || `Failed to switch accounts.`);
  }
}
function Tt({ scope: e, action: t, session: n, switchFlow: r, workspace: i }) {
  ye(e, K, {
    actionType:
      t === `triggered`
        ? Fe.CHATGPT_ACCOUNT_SWITCHER_ACTION_TYPE_SWITCH_TRIGGERED
        : Fe.CHATGPT_ACCOUNT_SWITCHER_ACTION_TYPE_SWITCH_SUCCEEDED,
    sourceType:
      r === `workspace_switcher`
        ? J.CHATGPT_ACCOUNT_SWITCHER_SOURCE_TYPE_WORKSPACE_SWITCHER
        : J.CHATGPT_ACCOUNT_SWITCHER_SOURCE_TYPE_ACCOUNT_SWITCHER_MENU,
    switchFlowType:
      r === `workspace_switcher`
        ? q.CHATGPT_ACCOUNT_SWITCHER_SWITCH_FLOW_TYPE_WORKSPACE_SWITCHER
        : q.CHATGPT_ACCOUNT_SWITCHER_SWITCH_FLOW_TYPE_ACCOUNT_SWITCHER,
    targetWorkspaceAccountId: i.workspaceAccountId,
    toUserId: n.userId ?? void 0,
  });
}
function Et() {
  let e = H(G);
  return (
    e === `logout_switch` ||
    e === `logout_all` ||
    e?.startsWith(`logout_switch_`) === !0 ||
    e?.startsWith(`logout_all_`) === !0
  );
}
function Dt(e, t) {
  let n = e.sessionToken === nn ? t : e.sessionToken;
  if (n == null) return null;
  let r = Ot(e),
    i = window.crypto.randomUUID(),
    a = r == null ? `logout_switch` : `logout_switch_` + r,
    o = new URL(window.location.href),
    s = o.pathname + o.search + o.hash,
    c = {
      flowId: i,
      pendingResume: a,
      pendingAction: Ie,
      pendingCallbackUrl: s,
      storedSessionToken: e.sessionToken,
      selectedSessionToken: n,
      selectedWorkspaceAccountId: X(e)[0]?.workspaceAccountId,
    };
  return Ce(c) ? c : null;
}
function Ot(e) {
  if (e.email != null) return e.email;
  if (e.phoneNumber == null) return null;
  let t = e.phoneNumber.replace(/\D/g, ``);
  return t.length > 0 ? t : null;
}
function kt(e) {
  let t = Pt().filter((t) => t.sessionToken !== e);
  return (Ft(t), t);
}
function At(e, t) {
  let n = e.filter((e) => Y(e, t.sessionToken, t.user?.id ?? null, t.user?.email ?? null));
  return (n.length !== e.length && Ft(n), n);
}
function jt(e) {
  return !(e?.accounts ?? []).some((e) => {
    if (!Mt(e.plan_type)) return !1;
    let t = cn.safeParse(e);
    return (
      !t.success || (t.data.enable_account_switching ?? t.data.enableAccountSwitching ?? !1) === !1
    );
  });
}
function Mt(e) {
  return [
    `business`,
    `enterprise_cbp_usage_based`,
    `enterprise_cbp_automation`,
    `hc`,
    `finserv`,
    `law`,
    `ent26`,
    `enterprise`,
  ].includes(e);
}
function Nt({
  canAddAccountSwitchSession: e,
  currentEmail: t,
  currentSessionToken: n,
  currentUserId: r,
  currentUserImageUrl: i,
  currentUserName: a,
  currentWorkspaces: o,
  sessions: s,
}) {
  let c = s.find((e) => Y(e, n, r, t)),
    l = c;
  o.length > 0 &&
    (l =
      c == null
        ? {
            authProvider: null,
            email: Wt(t),
            lastLoggedInAt: null,
            name: a,
            phoneNumber: null,
            sessionToken: nn,
            userId: r,
            userImageUrl: i,
            workspaces: o,
          }
        : {
            ...c,
            name: a ?? c.name,
            userImageUrl: i ?? c.userImageUrl,
            sessionToken: nn,
            workspaces: o,
          });
  let u = s.filter((e) => e !== c);
  return e ? (l == null ? u : [l, ...u]) : l == null ? [] : [l];
}
function Pt() {
  try {
    let e = window.localStorage.getItem(Jt);
    if (e == null) return [];
    let t = JSON.parse(e);
    return Array.isArray(t)
      ? Lt(
          t.flatMap((e) => {
            let t = on.safeParse(e);
            return t.success
              ? [
                  {
                    ...t.data,
                    authProvider: t.data.authProvider ?? null,
                    email: Wt(t.data.email),
                    lastLoggedInAt: t.data.lastLoggedInAt ?? null,
                    name: t.data.name ?? null,
                    phoneNumber: t.data.phoneNumber ?? null,
                    sessionToken: t.data.sessionToken,
                    userId: t.data.userId ?? null,
                    userImageUrl: t.data.userImageUrl ?? null,
                    workspaces: Ut(t.data.workspaces, t.data.userId ?? null),
                  },
                ]
              : [];
          }),
        )
      : [];
  } catch {
    return [];
  }
}
function Ft(e) {
  try {
    window.localStorage.setItem(Jt, JSON.stringify(Lt(e)));
  } catch {}
}
function It(e, t, n, r, i) {
  let a = { email: Wt(t.user?.email), sessionToken: t.sessionToken, userId: t.user?.id ?? null },
    o = e.find((e) => Rt(e, a)),
    s = {
      ...o,
      authProvider: t.authProvider ?? o?.authProvider ?? null,
      email: a.email ?? o?.email ?? null,
      lastLoggedInAt: Date.now(),
      name: i ?? t.user?.name ?? o?.name ?? null,
      phoneNumber: t.user?.phone_number ?? o?.phoneNumber ?? null,
      sessionToken: t.sessionToken,
      userId: a.userId ?? o?.userId ?? null,
      userImageUrl: r ?? t.user?.image ?? o?.userImageUrl ?? null,
      workspaces: n.length > 0 ? Ht(n) : (o?.workspaces ?? []),
    };
  return Lt([...e.filter((e) => !Rt(e, a)), s]);
}
function Lt(e) {
  let t = [...e].sort((e, t) => (t.lastLoggedInAt ?? -1) - (e.lastLoggedInAt ?? -1)),
    n = [];
  for (let e of t) if (!n.some((t) => Rt(t, e)) && (n.push(e), n.length === Qt)) break;
  return n;
}
function Rt(e, t) {
  return e.sessionToken === t.sessionToken
    ? !0
    : e.userId != null && t.userId != null
      ? e.userId === t.userId
      : e.email != null && t.email != null && e.email === t.email;
}
function zt(e) {
  return e.userId == null
    ? e.email == null
      ? `token:${e.sessionToken}`
      : `email:${e.email}`
    : `user:${e.userId}`;
}
function Bt(e, t) {
  return `${e.sessionToken}:${t.workspaceAccountId}`;
}
function Y(e, t, n, r) {
  if (e.sessionToken === nn) return !0;
  if (t != null) return e.sessionToken === t;
  if (n != null && e.userId != null) return e.userId === n;
  let i = Wt(r);
  return i != null && e.email === i;
}
function Vt(e, t, n, r, i, a, o) {
  return Y(e, n, r, i)
    ? a == null
      ? o && t.isPersonalWorkspace === !0
      : t.workspaceAccountId === a
    : !1;
}
function Ht(e) {
  return e.map((e) => ({
    workspaceAccountId: e.workspaceAccountId,
    workspaceName: e.workspaceName,
    workspaceImageUrl: e.workspaceImageUrl,
    isPersonalWorkspace: e.isPersonalWorkspace,
    isDeactivated: e.isDeactivated,
  }));
}
function Ut(e, t) {
  if (!Array.isArray(e)) return [];
  let n = new Set(),
    r = !1,
    i = [],
    a = [];
  for (let o of e) {
    let e = an.safeParse(o);
    if (!e.success || n.has(e.data.workspaceAccountId)) continue;
    n.add(e.data.workspaceAccountId);
    let s =
      e.data.isPersonalWorkspace === !0 ||
      e.data.workspaceAccountId === `personal` ||
      (t != null && e.data.workspaceAccountId === t);
    if (s && r) continue;
    let c = {
      isDeactivated: e.data.isDeactivated === !0,
      isPersonalWorkspace: s,
      workspaceAccountId: e.data.workspaceAccountId,
      workspaceImageUrl: e.data.workspaceImageUrl ?? null,
      workspaceName: e.data.workspaceName?.trim() || null,
    };
    s ? ((r = !0), i.push(c)) : a.push(c);
  }
  return [...a, ...i];
}
function X(e) {
  return e.workspaces.length > 0
    ? e.workspaces
    : [
        {
          canAccessWithSession: !0,
          isDeactivated: !1,
          isPersonalWorkspace: !0,
          workspaceAccountId: Je,
          workspaceImageUrl: null,
          workspaceName: null,
        },
      ];
}
function Wt(e) {
  return typeof e == `string` && e.trim().length > 0 ? e.trim().toLowerCase() : null;
}
function Gt(e) {
  if (e.email != null) return e.email;
  let t = Kt(e.phoneNumber);
  return t == null ? e.name : e.name == null ? t : e.name + ` (` + t + `)`;
}
function Kt(e) {
  if (e == null) return null;
  let t = e.replace(/\D/g, ``);
  return t.length === 0 ? null : `***` + t.slice(-4).padStart(4, `*`);
}
async function qt(e, t = window.location.href) {
  let n = new URL(`/`, window.location.origin);
  try {
    let e = new URL(t, window.location.origin);
    e.origin === window.location.origin && (n = e);
  } catch {}
  (n.searchParams.set(`account_switch`, `true`),
    n.searchParams.set(`account_switch_login`, `add_account`));
  let r = he(`login`);
  (r.searchParams.set(`next`, `${n.pathname}${n.search}${n.hash}`),
    await et(e),
    window.location.assign(r.toString()));
}
var Z, Q, $, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln;
function un() {
  return (un = e(() => {
    ((Z = j()),
      Re(),
      Le(),
      ne(),
      T(),
      h(),
      (Q = V()),
      S(),
      F(),
      N(),
      R(),
      De(),
      Me(),
      Be(),
      Ee(),
      y(),
      b(),
      d(),
      pe(),
      o(),
      u(),
      I(),
      le(),
      ue(),
      ve(),
      Xe(),
      Ze(),
      ut(),
      A(),
      ae(),
      P(),
      _e(),
      r(),
      W(),
      tt(),
      qe(),
      at(),
      rt(),
      it(),
      ($ = L()),
      (Jt = `oai/apps/accountSwitchSessions`),
      (Yt = `/api/auth/session`),
      (Xt = `/account-switch/switch`),
      (Zt = `OAI-Account-Switch-Session-Token`),
      (Qt = 2),
      ($t = `X-OpenAI-Target-Path`),
      (en = `X-OpenAI-Target-Route`),
      (tn = 1e4),
      (nn = `__current_account_session__`),
      (rn = `3605919906`),
      (an = C({
        isDeactivated: c().optional(),
        isPersonalWorkspace: c().optional(),
        workspaceAccountId: _().min(1),
        workspaceImageUrl: _().nullable().optional(),
        workspaceName: _().nullable().optional(),
      })),
      (on = C({
        authProvider: _().nullable().optional(),
        email: _().nullable().optional(),
        lastLoggedInAt: z().nullable().optional(),
        name: _().nullable().optional(),
        phoneNumber: _().nullable().optional(),
        sessionToken: _().min(1),
        userId: _().nullable().optional(),
        userImageUrl: _().nullable().optional(),
        workspaces: p(me()).optional(),
      })),
      (sn = C({
        authProvider: _().nullable().optional(),
        sessionToken: _().min(1),
        user: C({
          email: _().nullable().optional(),
          id: _().optional(),
          image: _().nullable().optional(),
          name: _().nullable().optional(),
          phone_number: _().nullable().optional(),
        })
          .nullable()
          .optional(),
      })),
      (cn = C({
        enable_account_switching: c().optional(),
        enableAccountSwitching: c().optional(),
      })),
      (ln = de(ze)));
  }))();
}
export { un as n, dt as t };
//# sourceMappingURL=browser-account-switcher-menu-item-d332928abefc.js.map
