const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./secret-dialog-28ef7dc83c1d.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./targets-491db353a53e.js",
      "./entry-type-6eeefc5c8bdc.js",
      "./settings-configs-7488cda7afdb.js",
      "./validation-message-e25ad070fad8.js",
      "./import-dialog-9932fcf3271e.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  Cot as r,
  Ext as i,
  Fat as a,
  IDt as o,
  Ixt as s,
  JC as c,
  Kat as l,
  Mot as u,
  Not as d,
  Pat as f,
  Pxt as p,
  Vxt as m,
  _xt as h,
  fPt as g,
  hot as ee,
  iw as _,
  jDt as v,
  lot as y,
  not as te,
  pPt as b,
  qC as ne,
  qat as re,
  t3 as x,
  tw as ie,
  vzt as S,
  wot as C,
  wxt as ae,
  xMt as w,
  yzt as T,
  z4 as E,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as oe,
  GQ as se,
  QMr as D,
  UQ as ce,
  WQ as O,
  XMr as le,
  hp as ue,
  mp as de,
  tNr as k,
} from "./app-initial-5851df3f6cb1.js";
import { n as A, t as fe } from "./settings-loading-row-bf72bf2df25d.js";
import { n as j, t as pe } from "./entry-type-6eeefc5c8bdc.js";
import { n as M, t as N } from "./settings-configs-7488cda7afdb.js";
import { a as me, c as P, n as he, o as F, s as ge, t as _e } from "./toolbar-a0209b4d281a.js";
function ve(e) {
  let t = (0, L.c)(4),
    { target: n } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, R.jsx)(o, {
            id: `personalVault.legacy`,
            defaultMessage: `Recreate this legacy secret to choose its key and environments`,
            description: `Legacy personal secrets have no binding and must be deleted and recreated`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n.type === `all_environment_configs`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, R.jsx)(o, {
            id: `personalVault.allTargets`,
            defaultMessage: `All environment configurations`,
            description: `A personal secret applies to all cloud environment configurations`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (t[2] === n.ids ? (r = t[3]) : ((r = (0, R.jsx)(I, { ids: n.ids })), (t[2] = n.ids), (t[3] = r)), r);
}
function I(e) {
  let t = (0, L.c)(12),
    { ids: n } = e,
    { data: r, isPending: i, isFetching: a, isError: s } = m(M),
    c = a || (i && !s),
    l;
  if (t[0] !== r || t[1] !== n || t[2] !== c) {
    let e;
    (t[4] !== r || t[5] !== c
      ? ((e = (e) => ({
          id: e,
          name:
            r?.find((t) => t.id === e)?.name ??
            (c
              ? (0, R.jsx)(o, {
                  id: `personalVault.targetLoading`,
                  defaultMessage: `Loading environment…`,
                  description: `Placeholder for a personal secret's assigned environment while the environment catalog is loading`,
                })
              : (0, R.jsx)(o, {
                  id: `personalVault.targetUnavailable`,
                  defaultMessage: `Unavailable environment`,
                  description: `Placeholder when a personal secret's assigned environment cannot be found or loaded; it may be inaccessible or deleted`,
                })),
        })),
        (t[4] = r),
        (t[5] = c),
        (t[6] = e))
      : (e = t[6]),
      (l = n.map(e)),
      (t[0] = r),
      (t[1] = n),
      (t[2] = c),
      (t[3] = l));
  } else l = t[3];
  let u = n.length - 1,
    d;
  t[7] === u
    ? (d = t[8])
    : ((d = (0, R.jsx)(o, {
        id: `personalVault.moreEnvironments`,
        defaultMessage: `+{count, plural, one {# more environment} other {# more environments}}`,
        description: `Number of additional environments assigned to a personal secret; hover or focus to see the full list`,
        values: { count: u },
      })),
      (t[7] = u),
      (t[8] = d));
  let f;
  return (
    t[9] !== l || t[10] !== d
      ? ((f = (0, R.jsx)(me, { items: l, moreLabel: d })), (t[9] = l), (t[10] = d), (t[11] = f))
      : (f = t[11]),
    f
  );
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = S()), p(), v(), F(), N(), (R = w()));
  }))();
}
function B() {
  let e = (0, G.c)(4),
    t = m(oe),
    n = m(le),
    { authLoading: r } = m(D),
    i = `${t}:${n}:${r}`,
    a = r ? null : t,
    o = r ? null : n,
    s;
  return (
    e[0] !== i || e[1] !== a || e[2] !== o
      ? ((s = (0, q.jsx)(V, { accountId: a, userId: o }, i)), (e[0] = i), (e[1] = a), (e[2] = o), (e[3] = s))
      : (s = e[3]),
    s
  );
}
function V(e) {
  let t = (0, G.c)(6),
    { accountId: n, userId: r } = e,
    i = ae(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = []), (t[0] = a)) : (a = t[0]);
  let [o, s] = (0, K.useState)(a),
    c;
  return (
    t[1] !== n || t[2] !== i.key || t[3] !== o || t[4] !== r
      ? ((c = (0, q.jsx)(H, { accountId: n, userId: r, recentEntries: o, onRecentEntriesChange: s }, i.key)),
        (t[1] = n),
        (t[2] = i.key),
        (t[3] = o),
        (t[4] = r),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function H(e) {
  let n = (0, G.c)(74),
    { accountId: a, userId: c, recentEntries: u, onRecentEntriesChange: f } = e,
    p = s(r),
    m = ae(),
    h = i(),
    g = l?.environmentConfigs,
    [_, v] = (0, K.useState)(`all`),
    [y, te] = (0, K.useState)(!1),
    [b, re] = (0, K.useState)(``),
    x;
  n[0] === m.search
    ? (x = n[1])
    : ((x = () => {
        let e = new URLSearchParams(m.search),
          t = se.safeParse({ type: e.get(`type`), name: e.get(`name`) });
        return g != null && t.success
          ? {
              secret: null,
              namespace: t.data.type === `env-var` ? `not_sensitive` : `sensitive`,
              deleting: !1,
              initialName: t.data.name,
            }
          : null;
      }),
      (n[0] = m.search),
      (n[1] = x));
  let [S, C] = (0, K.useState)(x),
    w;
  n[2] !== a || n[3] !== p || n[4] !== c
    ? ((w = async function (e, t) {
        let n = { secret: e, namespace: t, deleting: !1, loadingValue: t === `not_sensitive` };
        if ((C(n), t !== `not_sensitive` || g == null || a == null || c == null)) return;
        let r = await g.readPersonalEnvironmentVariable({ accountId: a, userId: c, id: e.id }).catch(Se);
        p.get(oe) === a &&
          p.get(le) === c &&
          C((e) =>
            e === n
              ? { ...n, loadingValue: !1, savedValue: r?.ok ? r.data.value : void 0, valueReadFailed: !r?.ok }
              : e,
          );
      }),
      (n[2] = a),
      (n[3] = p),
      (n[4] = c),
      (n[5] = w))
    : (w = n[5]);
  let T = w,
    E;
  n[6] !== a || n[7] !== c
    ? ((E = Ce(a, c, `not_sensitive`)), (n[6] = a), (n[7] = c), (n[8] = E))
    : (E = n[8]);
  let {
      data: D,
      isPending: ce,
      isError: O,
      isFetching: ue,
      hasNextPage: k,
      fetchNextPage: A,
      refetch: j,
    } = d(E),
    M;
  n[9] !== a || n[10] !== c
    ? ((M = Ce(a, c, `sensitive`)), (n[9] = a), (n[10] = c), (n[11] = M))
    : (M = n[11]);
  let {
      data: N,
      isPending: me,
      isError: P,
      isFetching: he,
      hasNextPage: F,
      fetchNextPage: I,
      refetch: L,
    } = d(M),
    R = _ !== `sensitive`,
    z = _ !== `not_sensitive`,
    B = (R && ce) || (z && me),
    V = (R && O) || (z && P),
    H = (R && ue) || (z && he),
    U = (R && k) || (z && F),
    W;
  if (n[12] !== u || n[13] !== b || n[14] !== N?.pages || n[15] !== z || n[16] !== R || n[17] !== D?.pages) {
    let e = [...(R ? (D?.pages.flatMap(xe) ?? []) : []), ...(z ? (N?.pages.flatMap(be) ?? []) : [])];
    ((W = [
      ...u
        .filter((e) => {
          let { namespace: t } = e;
          return t === `sensitive` ? z : R;
        })
        .map((t) => e.find((e) => e.namespace === t.namespace && e.secret.id === t.secret.id) ?? t),
      ...e
        .filter((e) => {
          let { secret: t, namespace: n } = e;
          return !u.some((e) => e.namespace === n && e.secret.id === t.id);
        })
        .sort(ye),
    ].filter((e) => {
      let { secret: t } = e;
      return (t.env_var ?? t.name).toLowerCase().includes(b.trim().toLowerCase());
    })),
      (n[12] = u),
      (n[13] = b),
      (n[14] = N?.pages),
      (n[15] = z),
      (n[16] = R),
      (n[17] = D?.pages),
      (n[18] = W));
  } else W = n[18];
  let J = W,
    Ee = u[0] == null ? void 0 : `${u[0].namespace}:${u[0].secret.id}`,
    De = a != null && c != null,
    Oe = g == null || B || V,
    ke,
    Ae;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (e) => {
        (C(null), v(e));
      }),
      (ke = () => {
        (C(null), te(!0));
      }),
      (n[19] = ke),
      (n[20] = Ae))
    : ((ke = n[19]), (Ae = n[20]));
  let Y;
  n[21] === _
    ? (Y = n[22])
    : ((Y =
        g == null
          ? void 0
          : () =>
              C({
                secret: null,
                namespace: _ === `sensitive` ? `sensitive` : `not_sensitive`,
                deleting: !1,
              })),
      (n[21] = _),
      (n[22] = Y));
  let X;
  n[23] !== _ || n[24] !== b || n[25] !== Y || n[26] !== De || n[27] !== Oe
    ? ((X = (0, q.jsx)(_e, {
        signedIn: De,
        filter: _,
        searchQuery: b,
        importDisabled: Oe,
        onSearchQueryChange: re,
        onFilterChange: Ae,
        onImport: ke,
        onAdd: Y,
      })),
      (n[23] = _),
      (n[24] = b),
      (n[25] = Y),
      (n[26] = De),
      (n[27] = Oe),
      (n[28] = X))
    : (X = n[28]);
  let Z;
  n[29] !== a ||
  n[30] !== T ||
  n[31] !== J ||
  n[32] !== I ||
  n[33] !== A ||
  n[34] !== U ||
  n[35] !== V ||
  n[36] !== H ||
  n[37] !== B ||
  n[38] !== F ||
  n[39] !== k ||
  n[40] !== L ||
  n[41] !== j ||
  n[42] !== b ||
  n[43] !== P ||
  n[44] !== S ||
  n[45] !== z ||
  n[46] !== R ||
  n[47] !== c ||
  n[48] !== O
    ? ((Z =
        a == null || c == null
          ? (0, q.jsx)(de, {
              layout: `settings-row`,
              children: (0, q.jsx)(o, {
                id: `personalVault.signIn`,
                defaultMessage: `Sign in to manage your personal vault`,
                description: `Prompt shown when the current user identity is unavailable`,
              }),
            })
          : (0, q.jsxs)(ne, {
              children: [
                g != null && B
                  ? (0, q.jsx)(fe, {
                      children: (0, q.jsx)(o, {
                        id: `personalVault.loading`,
                        defaultMessage: `Loading personal vault…`,
                        description: `Loading state for personal vault metadata`,
                      }),
                    })
                  : null,
                g == null || V
                  ? (0, q.jsx)(ie, {
                      label: (0, q.jsx)(o, {
                        id: `personalVault.loadError`,
                        defaultMessage: `Couldn’t load all personal vault entries`,
                        description: `Some or all personal vault entries failed to load`,
                      }),
                      control: (0, q.jsx)(t, {
                        color: `secondary`,
                        size: `compact`,
                        disabled: g == null || H,
                        onClick: () => void Promise.all([j(), L()]),
                        children: (0, q.jsx)(o, {
                          id: `personalVault.retry`,
                          defaultMessage: `Retry`,
                          description: `Retry loading personal vault metadata`,
                        }),
                      }),
                    })
                  : null,
                J.length === 0 && !B && !V && !U
                  ? (0, q.jsx)(de, {
                      layout: `settings-row`,
                      children:
                        b.trim() === ``
                          ? (0, q.jsx)(o, {
                              id: `personalVault.emptyEntries`,
                              defaultMessage: `No entries yet`,
                              description: `There are no personal vault entries for the selected type filter`,
                            })
                          : (0, q.jsx)(o, {
                              id: `personalVault.noMatches`,
                              defaultMessage: `No matching entries`,
                              description: `No personal vault keys match the search and type filter`,
                            }),
                    })
                  : null,
                J.map((e) => {
                  let { secret: n, namespace: r } = e;
                  return (0, q.jsx)(
                    ie,
                    {
                      label: (0, q.jsx)(`span`, {
                        className: `font-mono select-text`,
                        children: n.env_var ?? n.name,
                      }),
                      description: (0, q.jsxs)(`div`, {
                        className: `flex flex-col gap-0.5`,
                        children: [
                          (0, q.jsx)(`span`, { children: (0, q.jsx)(pe, { namespace: r }) }),
                          (0, q.jsx)(ve, { target: n.target }),
                        ],
                      }),
                      control: (0, q.jsxs)(`div`, {
                        className: `flex min-w-0 flex-wrap items-center gap-2`,
                        children: [
                          (0, q.jsx)(t, {
                            color: `secondary`,
                            size: `compact`,
                            disabled: (r === `sensitive` ? P : O) || n.env_var == null || n.target == null,
                            loading: S?.secret === n && S.loadingValue,
                            onClick: () => void T(n, r),
                            children: (0, q.jsx)(o, {
                              id: `personalVault.edit`,
                              defaultMessage: `Edit`,
                              description: `Edit a personal secret key, value, or configuration targets`,
                            }),
                          }),
                          (0, q.jsx)(t, {
                            color: `danger`,
                            size: `compact`,
                            disabled: r === `sensitive` ? P : O,
                            onClick: () => C({ secret: n, namespace: r, deleting: !0 }),
                            children: (0, q.jsx)(o, {
                              id: `personalVault.delete`,
                              defaultMessage: `Delete`,
                              description: `Delete a personal secret`,
                            }),
                          }),
                        ],
                      }),
                    },
                    `${r}:${n.id}`,
                  );
                }),
                U
                  ? (0, q.jsx)(de, {
                      layout: `settings-row`,
                      children: (0, q.jsx)(t, {
                        color: `secondary`,
                        size: `compact`,
                        loading: H,
                        onClick: () => void Promise.all([...(R && k ? [A()] : []), ...(z && F ? [I()] : [])]),
                        children: (0, q.jsx)(o, {
                          id: `personalVault.loadMoreEntries`,
                          defaultMessage: `Load more`,
                          description: `Load more personal vault entries matching the selected type filter`,
                        }),
                      }),
                    })
                  : null,
              ],
            })),
      (n[29] = a),
      (n[30] = T),
      (n[31] = J),
      (n[32] = I),
      (n[33] = A),
      (n[34] = U),
      (n[35] = V),
      (n[36] = H),
      (n[37] = B),
      (n[38] = F),
      (n[39] = k),
      (n[40] = L),
      (n[41] = j),
      (n[42] = b),
      (n[43] = P),
      (n[44] = S),
      (n[45] = z),
      (n[46] = R),
      (n[47] = c),
      (n[48] = O),
      (n[49] = Z))
    : (Z = n[49]);
  let Q;
  n[50] !== a ||
  n[51] !== m ||
  n[52] !== h ||
  n[53] !== f ||
  n[54] !== u ||
  n[55] !== L ||
  n[56] !== j ||
  n[57] !== p ||
  n[58] !== S ||
  n[59] !== c
    ? ((Q =
        S != null && !S.loadingValue && a != null && c != null
          ? (0, q.jsx)(
              we,
              {
                initialValue: S.savedValue,
                valueReadFailed: S.valueReadFailed,
                accountId: a,
                userId: c,
                initialNamespace: S.namespace,
                initialName: S.initialName,
                secret: S.secret,
                deleting: S.deleting,
                onClose: (e, t) => {
                  if (t != null) {
                    let n = u.filter((n) => n.namespace !== e || n.secret.id !== t.id);
                    S.deleting
                      ? f(n)
                      : S.secret == null
                        ? (f([{ secret: t, namespace: e }, ...n]),
                          re(``),
                          v(`all`),
                          p
                            .get(ee)
                            .success(
                              (0, q.jsx)(o, {
                                id: `personalVault.entryAdded`,
                                defaultMessage: `Added to personal vault`,
                                description: `Confirmation after successfully adding an environment variable or network secret to the personal vault`,
                              }),
                            ))
                        : f(
                            u.map((n) =>
                              n.namespace === e && n.secret.id === t.id ? { secret: t, namespace: e } : n,
                            ),
                          );
                  }
                  C(null);
                  let n = new URLSearchParams(m.search);
                  ((n.has(`type`) || n.has(`name`)) &&
                    (n.delete(`type`),
                    n.delete(`name`),
                    h({ ...m, search: n.toString() }, { replace: !0, state: m.state })),
                    e === `sensitive` ? L() : j());
                },
              },
              `${S.secret?.id}:${S.namespace}:${S.deleting}`,
            )
          : null),
      (n[50] = a),
      (n[51] = m),
      (n[52] = h),
      (n[53] = f),
      (n[54] = u),
      (n[55] = L),
      (n[56] = j),
      (n[57] = p),
      (n[58] = S),
      (n[59] = c),
      (n[60] = Q))
    : (Q = n[60]);
  let $;
  n[61] !== a || n[62] !== _ || n[63] !== y || n[64] !== L || n[65] !== j || n[66] !== c
    ? (($ =
        y && a != null && c != null
          ? (0, q.jsx)(Te, {
              accountId: a,
              userId: c,
              initialNamespace: _ === `sensitive` ? `sensitive` : `not_sensitive`,
              onClose: (e) => {
                (te(!1), e === `sensitive` ? L() : j());
              },
            })
          : null),
      (n[61] = a),
      (n[62] = _),
      (n[63] = y),
      (n[64] = L),
      (n[65] = j),
      (n[66] = c),
      (n[67] = $))
    : ($ = n[67]);
  let je;
  return (
    n[68] !== X || n[69] !== Z || n[70] !== Q || n[71] !== $ || n[72] !== Ee
      ? ((je = (0, q.jsxs)(ge, {
          selectedTab: `personal-vault`,
          scrollResetKey: Ee,
          stickyControls: X,
          children: [Z, Q, $],
        })),
        (n[68] = X),
        (n[69] = Z),
        (n[70] = Q),
        (n[71] = $),
        (n[72] = Ee),
        (n[73] = je))
      : (je = n[73]),
    je
  );
}
function ye(e, t) {
  return (e.secret.env_var ?? e.secret.name).localeCompare(t.secret.env_var ?? t.secret.name);
}
function be(e) {
  return e.secrets.map(U);
}
function U(e) {
  return { secret: e, namespace: `sensitive` };
}
function xe(e) {
  return e.secrets.map(W);
}
function W(e) {
  return { secret: e, namespace: `not_sensitive` };
}
function Se() {
  return null;
}
function Ce(e, t, n) {
  let r = l?.environmentConfigs;
  return {
    queryKey: [`personal-vault`, e, t, n],
    enabled: r != null && e != null && t != null,
    staleTime: f.FIVE_SECONDS,
    retry: !1,
    initialPageParam: void 0,
    getNextPageParam: (e) => e.next_cursor ?? void 0,
    queryFn: async ({ pageParam: i }) => {
      try {
        var a = te();
        if (r == null || e == null || t == null) throw Error(`Personal vault is unavailable`);
        let o = a.u(
          await r.requestPersonalSecrets({ accountId: e, userId: t, method: `GET`, namespace: n, cursor: i }),
        );
        if (!o.ok) throw Error(`Personal vault could not be loaded`);
        return O.parse(o.data);
      } catch (e) {
        a.e = e;
      } finally {
        a.d();
      }
    },
  };
}
var G, K, q, we, Te;
function J() {
  return (J = e(() => {
    ((G = S()),
      u(),
      p(),
      ce(),
      (K = T()),
      v(),
      h(),
      k(),
      x(),
      ue(),
      E(),
      y(),
      re(),
      C(),
      A(),
      _(),
      c(),
      a(),
      P(),
      j(),
      z(),
      he(),
      (q = w()),
      b(),
      (we = n(
        async () =>
          (
            await g(
              async () => {
                let { PersonalSecretDialog: e } = await import(`./secret-dialog-28ef7dc83c1d.js`);
                return { PersonalSecretDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
              import.meta.url,
            )
          ).PersonalSecretDialog,
      )),
      (Te = n(
        async () =>
          (
            await g(
              async () => {
                let { PersonalSecretImportDialog: e } = await import(`./import-dialog-9932fcf3271e.js`);
                return { PersonalSecretImportDialog: e };
              },
              __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url,
            )
          ).PersonalSecretImportDialog,
      )));
  }))();
}
J();
export { B as PersonalVaultSettings };
//# sourceMappingURL=settings-6a1a812f0cf4.js.map
