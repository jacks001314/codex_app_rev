const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./space-root-setup-695df75e5121.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./page-menu-document-12e4530cb10b.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Pxt as n,
  Rpt as r,
  aSt as i,
  fPt as a,
  hot as o,
  hrt as s,
  lot as c,
  nSt as l,
  oSt as u,
  pPt as d,
  qut as f,
  rst as p,
  vrt as m,
  wot as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  $2 as g,
  B2 as _,
  Cnn as v,
  Dor as y,
  Dsn as b,
  Oor as ee,
  QMr as x,
  R2 as S,
  V2 as C,
  XMr as w,
  YMr as te,
  _B as T,
  aIr as E,
  bnn as D,
  csn as O,
  dB as k,
  dIn as A,
  e4 as ne,
  fB as j,
  fU as re,
  gB as ie,
  hU as M,
  iPr as N,
  lIr as P,
  mB as F,
  mU as I,
  oIr as L,
  osn as R,
  pB as z,
  pIn as B,
  pU as V,
  qsn as H,
  sIr as U,
  sPr as W,
  tNr as G,
  xsn as K,
  z2 as q,
} from "./app-initial-5851df3f6cb1.js";
async function J(e, t, n, i, a) {
  if ((i.throwIfAborted(), n.length === 0)) return [];
  let o = { type: `space`, id: t },
    s = n.map(({ recipient: e, label: t, secondaryLabel: n, roleId: r }) => ({
      action: `invite`,
      target: o,
      recipient: e,
      roleId: r,
      invitee: { id: z(e), label: t, secondaryLabel: n },
    })),
    c = new Map(),
    l = new Set(),
    u = (e) => {
      if (i.aborted || l.has(e)) return;
      l.add(e);
      let t = s.indexOf(e);
      a?.(t, c.get(e) ?? n[t].recipient);
    },
    d = [];
  if (
    (await e.queryClient
      .getMutationCache()
      .build(e.queryClient, {
        mutationKey: [`space`, `save-library-sharing`, e.get(w), e.get(y)],
        networkMode: `always`,
        mutationFn: async ({ changes: t }) => {
          (i.throwIfAborted(),
            await T(
              e,
              t,
              void 0,
              void 0,
              i,
              (e, t) => c.set(e, t.recipient),
              (e, t) => {
                d.push(
                  t.then(
                    () => u(e),
                    () => void 0,
                  ),
                );
              },
              (e, t) => {
                (c.set(e, t.recipient), u(e));
              },
            ));
        },
      })
      .execute({ changes: s }),
    await r(Promise.all(d), i),
    i.throwIfAborted(),
    l.size < s.length)
  )
    try {
      let t = await j(e, o, i, !0);
      (i.throwIfAborted(),
        k(t) &&
          s.forEach((e, r) => {
            let i = c.get(e) ?? n[r].recipient;
            t.shares.some((e) => ie(e, i) && e.role_id === n[r].roleId) && u(e);
          }));
    } catch {
      i.throwIfAborted();
    }
  return n.map((e, t) => {
    let n = c.get(s[t]) ?? e.recipient;
    return { ...e, recipient: n, status: l.has(s[t]) ? `shared` : `failed` };
  });
}
function Y() {
  return (Y = e(() => {
    (p(), G(), F(), K());
  }))();
}
function ae(e, { name: t, createSpace: n, invitations: r = [], appearance: i, resume: c }) {
  let l = e.get(y),
    u = e.get(w),
    d = e.get(te);
  if (l == null) throw Error(`space_account_unavailable`);
  if (c != null && (c.accountId !== l || c.userId !== u || c.space == null))
    throw Error(`space_setup_unavailable`);
  let p = e.get(x).accountUserId,
    m = c?.localPageId ?? `local-page-${crypto.randomUUID()}`;
  I(
    e,
    c ?? {
      accountId: l,
      userId: u,
      localPageId: m,
      name: t,
      backingType: `drive`,
      rootInitialization: `server`,
      appearance: i,
      invitations: r.map((e) => ({ ...e, status: `pending` })),
    },
  );
  let h = q(B(e), performance.now(), `space`, { surface: `electron`, emit: (t) => C(e, t) }),
    g = c?.space,
    _,
    v,
    S = !1,
    T = new AbortController(),
    E = () => e.get(M).find((e) => e.localPageId === m),
    k = (n) => {
      let r = {
        localPageId: m,
        accountId: l,
        userId: u,
        name: t,
        status: n,
        response: _,
        metrics: h,
        retry: j,
      };
      (e.set(X, m, r), _ != null && e.set(X, _.id, r));
    },
    A = () => {
      let { pathname: t, search: n } = e.get(U);
      e.get(y) !== l ||
        e.get(w) !== u ||
        (t === `/spaces/new` && new URLSearchParams(n).get(`creation`) === m) ||
        e
          .get(o)
          .warning(
            e
              .get(L)
              .formatMessage({
                id: `codex.space.sidebar.spaceSetupNeedsAttention`,
                defaultMessage: `Space setup needs attention`,
                description: `Toast displayed when a shared Space setup needs retry or recovery. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              }),
          );
    },
    j = () => {
      if (v != null) return v;
      if (S || T.signal.aborted)
        return Promise.reject(new DOMException(`Space creation cancelled`, `AbortError`));
      let r = ee(e, l, u, p, d),
        i = AbortSignal.any([T.signal, r.signal]),
        o = async () => {
          i.throwIfAborted();
          try {
            let r;
            (g == null
              ? ((r = await n(i, m)), h.creationRequestSucceeded())
              : (r = await e.get(O).mutateAsync({ requestBody: { name: t }, existingSpace: g, signal: i })),
              i.throwIfAborted(),
              (_ = r),
              (g = { spaceId: r.id, rootPageId: r.root_page_id }),
              h.savedIdentity());
          } catch (t) {
            (i.throwIfAborted(), (g = b(t) ?? g));
            let n = E();
            throw (
              g == null
                ? (t instanceof s && t.status >= 400 && t.status < 500 && ![408, 499].includes(t.status)) ||
                  (S = !0)
                : (h.savedIdentity(), n != null && I(e, { ...n, space: g })),
              h.fail(ne(t)),
              t
            );
          }
          let r = E(),
            o = r != null && r.rootInitialized !== !0 && r.rootInitialization !== `server`;
          (r != null && I(e, { ...r, space: g, rootInitialized: !o }),
            R(e, l, _),
            e.query.setData(H, _.id, _),
            o || h.rootInitialized(_.root_page_id),
            k(`creating`));
          let c = E()?.appearance,
            u = f(c?.emoji),
            d = u == null ? null : { kind: `icon`, value: u, color: D(c?.theme) ?? `black` };
          if (o || d != null) {
            let { completeSpaceRootSetup: t } = await a(
              async () => {
                let { completeSpaceRootSetup: e } = await import(`./space-root-setup-695df75e5121.js`);
                return { completeSpaceRootSetup: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            );
            i.throwIfAborted();
            let n = await t(e, _, d, o, i);
            (i.throwIfAborted(),
              (_ = {
                ...(e.query.getData(H, _.id) ?? _),
                symbol: n,
                can_edit_appearance: n == null && _.can_edit_appearance,
              }),
              e.query.setData(H, _.id, _),
              R(e, l, _));
            let r = E();
            (r != null && I(e, { ...r, rootInitialized: !0 }), o && h.rootInitialized(_.root_page_id));
          }
          if (d == null && c != null && _.can_edit_appearance === !0) {
            let t = await N.safePatch(`/spaces/v2/{space_id}/appearance`, {
              parameters: { path: { space_id: _.id } },
              requestBody: c,
              signal: i,
            });
            (i.throwIfAborted(),
              (_ = { ...(e.query.getData(H, _.id) ?? _), appearance: t }),
              e.query.setData(H, _.id, _),
              R(e, l, _));
          }
          let p = E();
          p != null && I(e, { ...p, appearance: void 0 });
          let v = E()?.invitations ?? [],
            y = v.filter((e) => e.status !== `shared`);
          if (y.length > 0) {
            let t = await J(e, _.id, y, i, (t, n) => {
              if (i.aborted) return;
              let r = E();
              if (r != null) {
                let i = v.indexOf(y[t]);
                I(e, {
                  ...r,
                  invitations: r.invitations.map((e, t) =>
                    t === i ? { ...e, recipient: n, status: `shared` } : e,
                  ),
                });
              }
            });
            i.throwIfAborted();
            let n = E();
            if (
              (n != null && I(e, { ...n, invitations: [...v.filter((e) => e.status === `shared`), ...t] }),
              t.some((e) => e.status === `failed`))
            )
              throw Error(`space_creation_invitations_incomplete`);
          }
          (re(e, m), k(`created`));
        };
      return (
        k(`creating`),
        (v = Promise.resolve()
          .then(() =>
            navigator.locks == null
              ? o()
              : navigator.locks.request(`space-setup:${JSON.stringify([l, u, m])}`, { signal: i }, o),
          )
          .catch((t) => {
            throw i.aborted
              ? (T.abort(),
                e.set(X, m, void 0),
                _ != null && e.set(X, _.id, void 0),
                h.cancel(`account_changed`),
                t)
              : (S ? e.set(X, m, void 0) : k(`error`), h.fail(), A(), t);
          })
          .finally(() => {
            (r.stop(), (v = void 0));
          })),
        v
      );
    };
  return (j().catch(() => {}), m);
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    (n(),
      p(),
      A(),
      P(),
      G(),
      c(),
      E(),
      K(),
      v(),
      h(),
      W(),
      m(),
      _(),
      g(),
      Y(),
      S(),
      V(),
      d(),
      (X = i(t, (e) => void 0)),
      (Z = l(t, (e, { get: t }) => {
        let n = t(X, e);
        return n?.accountId === t(y) && n?.userId === t(w) ? n : void 0;
      })),
      (Q = u(t, ({ get: e }) =>
        e(M).flatMap((t) => {
          let n = e(Z, t.localPageId);
          return n?.response != null && n.status !== `error`
            ? []
            : [
                {
                  id: t.localPageId,
                  name: t.name,
                  title: t.name,
                  backingType: t.backingType,
                  serverSpaceId: t.space?.spaceId,
                  status: n?.status ?? `error`,
                },
              ];
        }),
      )));
  }))();
}
export { ae as i, Z as n, Q as r, $ as t };
//# sourceMappingURL=space-1fd481862d3e.js.map
