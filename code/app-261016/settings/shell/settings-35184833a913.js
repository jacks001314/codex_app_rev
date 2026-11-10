const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./secret-dialog-b93ac9458c38.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./targets-5fc9003b8270.js",
      "./entry-type-c9ae5f86f136.js",
      "./settings-configs-fc9555d3bbc1.js",
      "./validation-message-bccaffa8ccca.js",
      "./import-dialog-18c2e6f816a1.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  Bst as i,
  F3 as a,
  FBt as o,
  I3 as s,
  LNt as c,
  NSt as l,
  OFt as u,
  PBt as d,
  Qst as ee,
  USt as te,
  VSt as ne,
  Vrt as f,
  XOt as p,
  Y3 as re,
  Z3 as m,
  ZSt as h,
  ast as g,
  ew as ie,
  hst as ae,
  iCt as _,
  ist as oe,
  kFt as v,
  mst as y,
  qrt as se,
  qst as b,
  sw as ce,
  tkt as x,
  uw as S,
  zst as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as le,
  M1 as w,
  N1 as ue,
  VRr as de,
  _p as T,
  gp as fe,
  j1 as pe,
  wLr as E,
  zRr as me,
} from "./app-initial-ad16eaadf81f.js";
import { n as D, t as he } from "./settings-loading-row-1fcc5b514745.js";
import { n as O, t as ge } from "./entry-type-c9ae5f86f136.js";
import { n as k, t as A } from "./settings-configs-fc9555d3bbc1.js";
import { a as _e, c as j, n as ve, o as M, s as ye, t as be } from "./toolbar-da8b436f1d67.js";
function xe(e) {
  let t = (0, P.c)(4),
    { target: n } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, F.jsx)(x, {
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
        ? ((e = (0, F.jsx)(x, {
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
  return (t[2] === n.ids ? (r = t[3]) : ((r = (0, F.jsx)(N, { ids: n.ids })), (t[2] = n.ids), (t[3] = r)), r);
}
function N(e) {
  let t = (0, P.c)(12),
    { ids: n } = e,
    { data: r, isPending: i, isFetching: a, isError: o } = _(k),
    s = a || (i && !o),
    c;
  if (t[0] !== r || t[1] !== n || t[2] !== s) {
    let e;
    (t[4] !== r || t[5] !== s
      ? ((e = (e) => ({
          id: e,
          name:
            r?.find((t) => t.id === e)?.name ??
            (s
              ? (0, F.jsx)(x, {
                  id: `personalVault.targetLoading`,
                  defaultMessage: `Loading environment…`,
                  description: `Placeholder for a personal secret's assigned environment while the environment catalog is loading`,
                })
              : (0, F.jsx)(x, {
                  id: `personalVault.targetUnavailable`,
                  defaultMessage: `Unavailable environment`,
                  description: `Placeholder when a personal secret's assigned environment cannot be found or loaded; it may be inaccessible or deleted`,
                })),
        })),
        (t[4] = r),
        (t[5] = s),
        (t[6] = e))
      : (e = t[6]),
      (c = n.map(e)),
      (t[0] = r),
      (t[1] = n),
      (t[2] = s),
      (t[3] = c));
  } else c = t[3];
  let l = n.length - 1,
    u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, F.jsx)(x, {
        id: `personalVault.moreEnvironments`,
        defaultMessage: `+{count, plural, one {# more environment} other {# more environments}}`,
        description: `Number of additional environments assigned to a personal secret; hover or focus to see the full list`,
        values: { count: l },
      })),
      (t[7] = l),
      (t[8] = u));
  let d;
  return (
    t[9] !== c || t[10] !== u
      ? ((d = (0, F.jsx)(_e, { items: c, moreLabel: u })), (t[9] = c), (t[10] = u), (t[11] = d))
      : (d = t[11]),
    d
  );
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = d()), h(), p(), M(), A(), (F = c()));
  }))();
}
function L() {
  let e = (0, H.c)(4),
    t = _(me),
    n = _(le),
    { authLoading: r } = _(de),
    i = `${t}:${n}:${r}`,
    a = r ? null : t,
    o = r ? null : n,
    s;
  return (
    e[0] !== i || e[1] !== a || e[2] !== o
      ? ((s = (0, W.jsx)(R, { accountId: a, userId: o }, i)), (e[0] = i), (e[1] = a), (e[2] = o), (e[3] = s))
      : (s = e[3]),
    s
  );
}
function R(e) {
  let t = (0, H.c)(6),
    { accountId: n, userId: r } = e,
    i = ne(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = []), (t[0] = a)) : (a = t[0]);
  let [o, s] = (0, U.useState)(a),
    c;
  return (
    t[1] !== n || t[2] !== i.key || t[3] !== o || t[4] !== r
      ? ((c = (0, W.jsx)(z, { accountId: n, userId: r, recentEntries: o, onRecentEntriesChange: s }, i.key)),
        (t[1] = n),
        (t[2] = i.key),
        (t[3] = o),
        (t[4] = r),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function z(e) {
  let r = (0, H.c)(74),
    { accountId: i, userId: a, recentEntries: o, onRecentEntriesChange: s } = e,
    c = n(ee),
    l = ne(),
    u = te(),
    d = oe?.environmentConfigs,
    [f, p] = (0, U.useState)(`all`),
    [m, h] = (0, U.useState)(!1),
    [g, ie] = (0, U.useState)(``),
    _;
  r[0] === l.search
    ? (_ = r[1])
    : ((_ = () => {
        let e = new URLSearchParams(l.search),
          t = ue.safeParse({ type: e.get(`type`), name: e.get(`name`) });
        return d != null && t.success
          ? {
              secret: null,
              namespace: t.data.type === `env-var` ? `not_sensitive` : `sensitive`,
              deleting: !1,
              initialName: t.data.name,
            }
          : null;
      }),
      (r[0] = l.search),
      (r[1] = _));
  let [v, y] = (0, U.useState)(_),
    b;
  r[2] !== i || r[3] !== c || r[4] !== a
    ? ((b = async function (e, t) {
        let n = { secret: e, namespace: t, deleting: !1, loadingValue: t === `not_sensitive` };
        if ((y(n), t !== `not_sensitive` || d == null || i == null || a == null)) return;
        let r = await d.readPersonalEnvironmentVariable({ accountId: i, userId: a, id: e.id }).catch(Te);
        c.get(me) === i &&
          c.get(le) === a &&
          y((e) =>
            e === n
              ? { ...n, loadingValue: !1, savedValue: r?.ok ? r.data.value : void 0, valueReadFailed: !r?.ok }
              : e,
          );
      }),
      (r[2] = i),
      (r[3] = c),
      (r[4] = a),
      (r[5] = b))
    : (b = r[5]);
  let S = b,
    C;
  r[6] !== i || r[7] !== a
    ? ((C = Ee(i, a, `not_sensitive`)), (r[6] = i), (r[7] = a), (r[8] = C))
    : (C = r[8]);
  let {
      data: w,
      isPending: de,
      isError: T,
      isFetching: pe,
      hasNextPage: E,
      fetchNextPage: D,
      refetch: O,
    } = ae(C),
    k;
  r[9] !== i || r[10] !== a
    ? ((k = Ee(i, a, `sensitive`)), (r[9] = i), (r[10] = a), (r[11] = k))
    : (k = r[11]);
  let {
      data: A,
      isPending: _e,
      isError: j,
      isFetching: ve,
      hasNextPage: M,
      fetchNextPage: N,
      refetch: P,
    } = ae(k),
    F = f !== `sensitive`,
    I = f !== `not_sensitive`,
    L = (F && de) || (I && _e),
    R = (F && T) || (I && j),
    z = (F && pe) || (I && ve),
    B = (F && E) || (I && M),
    V;
  if (r[12] !== o || r[13] !== g || r[14] !== A?.pages || r[15] !== I || r[16] !== F || r[17] !== w?.pages) {
    let e = [...(F ? (w?.pages.flatMap(we) ?? []) : []), ...(I ? (A?.pages.flatMap(Ce) ?? []) : [])];
    ((V = [
      ...o
        .filter((e) => {
          let { namespace: t } = e;
          return t === `sensitive` ? I : F;
        })
        .map((t) => e.find((e) => e.namespace === t.namespace && e.secret.id === t.secret.id) ?? t),
      ...e
        .filter((e) => {
          let { secret: t, namespace: n } = e;
          return !o.some((e) => e.namespace === n && e.secret.id === t.id);
        })
        .sort(Se),
    ].filter((e) => {
      let { secret: t } = e;
      return (t.env_var ?? t.name).toLowerCase().includes(g.trim().toLowerCase());
    })),
      (r[12] = o),
      (r[13] = g),
      (r[14] = A?.pages),
      (r[15] = I),
      (r[16] = F),
      (r[17] = w?.pages),
      (r[18] = V));
  } else V = r[18];
  let G = V,
    ke = o[0] == null ? void 0 : `${o[0].namespace}:${o[0].secret.id}`,
    Ae = i != null && a != null,
    je = d == null || L || R,
    K,
    q;
  r[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (e) => {
        (y(null), p(e));
      }),
      (K = () => {
        (y(null), h(!0));
      }),
      (r[19] = K),
      (r[20] = q))
    : ((K = r[19]), (q = r[20]));
  let J;
  r[21] === f
    ? (J = r[22])
    : ((J =
        d == null
          ? void 0
          : () =>
              y({
                secret: null,
                namespace: f === `sensitive` ? `sensitive` : `not_sensitive`,
                deleting: !1,
              })),
      (r[21] = f),
      (r[22] = J));
  let Y;
  r[23] !== f || r[24] !== g || r[25] !== J || r[26] !== Ae || r[27] !== je
    ? ((Y = (0, W.jsx)(be, {
        signedIn: Ae,
        filter: f,
        searchQuery: g,
        importDisabled: je,
        onSearchQueryChange: ie,
        onFilterChange: q,
        onImport: K,
        onAdd: J,
      })),
      (r[23] = f),
      (r[24] = g),
      (r[25] = J),
      (r[26] = Ae),
      (r[27] = je),
      (r[28] = Y))
    : (Y = r[28]);
  let X;
  r[29] !== i ||
  r[30] !== S ||
  r[31] !== G ||
  r[32] !== N ||
  r[33] !== D ||
  r[34] !== B ||
  r[35] !== R ||
  r[36] !== z ||
  r[37] !== L ||
  r[38] !== M ||
  r[39] !== E ||
  r[40] !== P ||
  r[41] !== O ||
  r[42] !== g ||
  r[43] !== j ||
  r[44] !== v ||
  r[45] !== I ||
  r[46] !== F ||
  r[47] !== a ||
  r[48] !== T
    ? ((X =
        i == null || a == null
          ? (0, W.jsx)(fe, {
              layout: `settings-row`,
              children: (0, W.jsx)(x, {
                id: `personalVault.signIn`,
                defaultMessage: `Sign in to manage your personal vault`,
                description: `Prompt shown when the current user identity is unavailable`,
              }),
            })
          : (0, W.jsxs)(t, {
              children: [
                d != null && L
                  ? (0, W.jsx)(he, {
                      children: (0, W.jsx)(x, {
                        id: `personalVault.loading`,
                        defaultMessage: `Loading personal vault…`,
                        description: `Loading state for personal vault metadata`,
                      }),
                    })
                  : null,
                d == null || R
                  ? (0, W.jsx)(ce, {
                      label: (0, W.jsx)(x, {
                        id: `personalVault.loadError`,
                        defaultMessage: `Couldn’t load all personal vault entries`,
                        description: `Some or all personal vault entries failed to load`,
                      }),
                      control: (0, W.jsx)(re, {
                        color: `secondary`,
                        size: `compact`,
                        disabled: d == null || z,
                        onClick: () => void Promise.all([O(), P()]),
                        children: (0, W.jsx)(x, {
                          id: `personalVault.retry`,
                          defaultMessage: `Retry`,
                          description: `Retry loading personal vault metadata`,
                        }),
                      }),
                    })
                  : null,
                G.length === 0 && !L && !R && !B
                  ? (0, W.jsx)(fe, {
                      layout: `settings-row`,
                      children:
                        g.trim() === ``
                          ? (0, W.jsx)(x, {
                              id: `personalVault.emptyEntries`,
                              defaultMessage: `No entries yet`,
                              description: `There are no personal vault entries for the selected type filter`,
                            })
                          : (0, W.jsx)(x, {
                              id: `personalVault.noMatches`,
                              defaultMessage: `No matching entries`,
                              description: `No personal vault keys match the search and type filter`,
                            }),
                    })
                  : null,
                G.map((e) => {
                  let { secret: t, namespace: n } = e;
                  return (0, W.jsx)(
                    ce,
                    {
                      label: (0, W.jsx)(`span`, {
                        className: `font-mono select-text`,
                        children: t.env_var ?? t.name,
                      }),
                      description: (0, W.jsxs)(`div`, {
                        className: `flex flex-col gap-0.5`,
                        children: [
                          (0, W.jsx)(`span`, { children: (0, W.jsx)(ge, { namespace: n }) }),
                          (0, W.jsx)(xe, { target: t.target }),
                        ],
                      }),
                      control: (0, W.jsxs)(`div`, {
                        className: `flex min-w-0 flex-wrap items-center gap-2`,
                        children: [
                          (0, W.jsx)(re, {
                            color: `secondary`,
                            size: `compact`,
                            disabled: (n === `sensitive` ? j : T) || t.env_var == null || t.target == null,
                            loading: v?.secret === t && v.loadingValue,
                            onClick: () => void S(t, n),
                            children: (0, W.jsx)(x, {
                              id: `personalVault.edit`,
                              defaultMessage: `Edit`,
                              description: `Edit a personal secret key, value, or configuration targets`,
                            }),
                          }),
                          (0, W.jsx)(re, {
                            color: `danger`,
                            size: `compact`,
                            disabled: n === `sensitive` ? j : T,
                            onClick: () => y({ secret: t, namespace: n, deleting: !0 }),
                            children: (0, W.jsx)(x, {
                              id: `personalVault.delete`,
                              defaultMessage: `Delete`,
                              description: `Delete a personal secret`,
                            }),
                          }),
                        ],
                      }),
                    },
                    `${n}:${t.id}`,
                  );
                }),
                B
                  ? (0, W.jsx)(fe, {
                      layout: `settings-row`,
                      children: (0, W.jsx)(re, {
                        color: `secondary`,
                        size: `compact`,
                        loading: z,
                        onClick: () => void Promise.all([...(F && E ? [D()] : []), ...(I && M ? [N()] : [])]),
                        children: (0, W.jsx)(x, {
                          id: `personalVault.loadMoreEntries`,
                          defaultMessage: `Load more`,
                          description: `Load more personal vault entries matching the selected type filter`,
                        }),
                      }),
                    })
                  : null,
              ],
            })),
      (r[29] = i),
      (r[30] = S),
      (r[31] = G),
      (r[32] = N),
      (r[33] = D),
      (r[34] = B),
      (r[35] = R),
      (r[36] = z),
      (r[37] = L),
      (r[38] = M),
      (r[39] = E),
      (r[40] = P),
      (r[41] = O),
      (r[42] = g),
      (r[43] = j),
      (r[44] = v),
      (r[45] = I),
      (r[46] = F),
      (r[47] = a),
      (r[48] = T),
      (r[49] = X))
    : (X = r[49]);
  let Z;
  r[50] !== i ||
  r[51] !== l ||
  r[52] !== u ||
  r[53] !== s ||
  r[54] !== o ||
  r[55] !== P ||
  r[56] !== O ||
  r[57] !== c ||
  r[58] !== v ||
  r[59] !== a
    ? ((Z =
        v != null && !v.loadingValue && i != null && a != null
          ? (0, W.jsx)(
              De,
              {
                initialValue: v.savedValue,
                valueReadFailed: v.valueReadFailed,
                accountId: i,
                userId: a,
                initialNamespace: v.namespace,
                initialName: v.initialName,
                secret: v.secret,
                deleting: v.deleting,
                onClose: (e, t) => {
                  if (t != null) {
                    let n = o.filter((n) => n.namespace !== e || n.secret.id !== t.id);
                    v.deleting
                      ? s(n)
                      : v.secret == null
                        ? (s([{ secret: t, namespace: e }, ...n]),
                          ie(``),
                          p(`all`),
                          c
                            .get(se)
                            .success(
                              (0, W.jsx)(x, {
                                id: `personalVault.entryAdded`,
                                defaultMessage: `Added to personal vault`,
                                description: `Confirmation after successfully adding an environment variable or network secret to the personal vault`,
                              }),
                            ))
                        : s(
                            o.map((n) =>
                              n.namespace === e && n.secret.id === t.id ? { secret: t, namespace: e } : n,
                            ),
                          );
                  }
                  y(null);
                  let n = new URLSearchParams(l.search);
                  ((n.has(`type`) || n.has(`name`)) &&
                    (n.delete(`type`),
                    n.delete(`name`),
                    u({ ...l, search: n.toString() }, { replace: !0, state: l.state })),
                    e === `sensitive` ? P() : O());
                },
              },
              `${v.secret?.id}:${v.namespace}:${v.deleting}`,
            )
          : null),
      (r[50] = i),
      (r[51] = l),
      (r[52] = u),
      (r[53] = s),
      (r[54] = o),
      (r[55] = P),
      (r[56] = O),
      (r[57] = c),
      (r[58] = v),
      (r[59] = a),
      (r[60] = Z))
    : (Z = r[60]);
  let Q;
  r[61] !== i || r[62] !== f || r[63] !== m || r[64] !== P || r[65] !== O || r[66] !== a
    ? ((Q =
        m && i != null && a != null
          ? (0, W.jsx)(Oe, {
              accountId: i,
              userId: a,
              initialNamespace: f === `sensitive` ? `sensitive` : `not_sensitive`,
              onClose: (e) => {
                (h(!1), e === `sensitive` ? P() : O());
              },
            })
          : null),
      (r[61] = i),
      (r[62] = f),
      (r[63] = m),
      (r[64] = P),
      (r[65] = O),
      (r[66] = a),
      (r[67] = Q))
    : (Q = r[67]);
  let $;
  return (
    r[68] !== Y || r[69] !== X || r[70] !== Z || r[71] !== Q || r[72] !== ke
      ? (($ = (0, W.jsxs)(ye, {
          selectedTab: `personal-vault`,
          scrollResetKey: ke,
          stickyControls: Y,
          children: [X, Z, Q],
        })),
        (r[68] = Y),
        (r[69] = X),
        (r[70] = Z),
        (r[71] = Q),
        (r[72] = ke),
        (r[73] = $))
      : ($ = r[73]),
    $
  );
}
function Se(e, t) {
  return (e.secret.env_var ?? e.secret.name).localeCompare(t.secret.env_var ?? t.secret.name);
}
function Ce(e) {
  return e.secrets.map(B);
}
function B(e) {
  return { secret: e, namespace: `sensitive` };
}
function we(e) {
  return e.secrets.map(V);
}
function V(e) {
  return { secret: e, namespace: `not_sensitive` };
}
function Te() {
  return null;
}
function Ee(e, t, n) {
  let r = oe?.environmentConfigs;
  return {
    queryKey: [`personal-vault`, e, t, n],
    enabled: r != null && e != null && t != null,
    staleTime: C.FIVE_SECONDS,
    retry: !1,
    initialPageParam: void 0,
    getNextPageParam: (e) => e.next_cursor ?? void 0,
    queryFn: async ({ pageParam: i }) => {
      try {
        var a = b();
        if (r == null || e == null || t == null) throw Error(`Personal vault is unavailable`);
        let o = a.u(
          await r.requestPersonalSecrets({ accountId: e, userId: t, method: `GET`, namespace: n, cursor: i }),
        );
        if (!o.ok) throw Error(`Personal vault could not be loaded`);
        return w.parse(o.data);
      } catch (e) {
        a.e = e;
      } finally {
        a.d();
      }
    },
  };
}
var H, U, W, De, Oe;
function G() {
  return (G = e(() => {
    ((H = d()),
      y(),
      h(),
      pe(),
      (U = o()),
      p(),
      l(),
      E(),
      m(),
      T(),
      a(),
      f(),
      g(),
      r(),
      D(),
      S(),
      ie(),
      i(),
      j(),
      O(),
      I(),
      ve(),
      (W = c()),
      v(),
      (De = s(
        async () =>
          (
            await u(
              async () => {
                let { PersonalSecretDialog: e } = await import(`./secret-dialog-b93ac9458c38.js`);
                return { PersonalSecretDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
              import.meta.url,
            )
          ).PersonalSecretDialog,
      )),
      (Oe = s(
        async () =>
          (
            await u(
              async () => {
                let { PersonalSecretImportDialog: e } = await import(`./import-dialog-18c2e6f816a1.js`);
                return { PersonalSecretImportDialog: e };
              },
              __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url,
            )
          ).PersonalSecretImportDialog,
      )));
  }))();
}
G();
export { L as PersonalVaultSettings };
//# sourceMappingURL=settings-35184833a913.js.map
