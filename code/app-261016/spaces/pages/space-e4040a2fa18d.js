const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./space-root-setup-e71e232447d6.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./page-menu-document-f4e5cf204ea3.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $mt as t,
  $st as n,
  CCt as r,
  OFt as i,
  Pit as a,
  Qst as o,
  SCt as s,
  Vrt as c,
  ZSt as l,
  jit as u,
  kFt as d,
  qrt as f,
  rft as p,
  sct as m,
  yCt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AU as g,
  Air as _,
  BRr as v,
  C3 as ee,
  CIr as te,
  DU as y,
  DW as b,
  EU as x,
  EW as S,
  Mir as C,
  OU as w,
  OW as T,
  S3 as E,
  SIr as D,
  TU as O,
  VRr as k,
  Van as A,
  Vdn as j,
  Vzn as M,
  Wan as N,
  _ur as ne,
  bLr as re,
  c3 as ie,
  edn as P,
  gur as F,
  hdn as I,
  iRr as L,
  jU as R,
  kW as z,
  l3 as B,
  ndn as V,
  s3 as H,
  sRr as U,
  u3 as W,
  wLr as G,
  xdn as K,
  zzn as q,
} from "./app-initial-ad16eaadf81f.js";
async function J(e, n, r, i, a) {
  if ((i.throwIfAborted(), r.length === 0)) return [];
  let o = { type: `space`, id: n },
    s = r.map(({ recipient: e, label: t, secondaryLabel: n, roleId: r }) => ({
      action: `invite`,
      target: o,
      recipient: e,
      roleId: r,
      invitee: { id: y(e), label: t, secondaryLabel: n },
    })),
    c = new Map(),
    l = new Set(),
    u = (e) => {
      if (i.aborted || l.has(e)) return;
      l.add(e);
      let t = s.indexOf(e);
      a?.(t, c.get(e) ?? r[t].recipient);
    },
    d = [];
  if (
    (await e.queryClient
      .getMutationCache()
      .build(e.queryClient, {
        mutationKey: [`space`, `save-library-sharing`, e.get(v), e.get(F)],
        networkMode: `always`,
        mutationFn: async ({ changes: t }) => {
          (i.throwIfAborted(),
            await R(
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
    await t(Promise.all(d), i),
    i.throwIfAborted(),
    l.size < s.length)
  )
    try {
      let t = await x(e, o, i, !0);
      (i.throwIfAborted(),
        O(t) &&
          s.forEach((e, n) => {
            let i = c.get(e) ?? r[n].recipient;
            t.shares.some((e) => g(e, i) && e.role_id === r[n].roleId) && u(e);
          }));
    } catch {
      i.throwIfAborted();
    }
  return r.map((e, t) => {
    let n = c.get(s[t]) ?? e.recipient;
    return { ...e, recipient: n, status: l.has(s[t]) ? `shared` : `failed` };
  });
}
function Y() {
  return (Y = e(() => {
    (m(), G(), w(), I());
  }))();
}
function ae(e, { name: t, createSpace: n, invitations: r = [], appearance: a, resume: o }) {
  let s = e.get(F),
    c = e.get(v),
    l = e.get(re);
  if (s == null) throw Error(`space_account_unavailable`);
  if (o != null && (o.accountId !== s || o.userId !== c || o.space == null))
    throw Error(`space_setup_unavailable`);
  let d = e.get(k).accountUserId,
    m = o?.localPageId ?? `local-page-${crypto.randomUUID()}`;
  T(
    e,
    o ?? {
      accountId: s,
      userId: c,
      localPageId: m,
      name: t,
      backingType: `drive`,
      rootInitialization: `server`,
      appearance: a,
      invitations: r.map((e) => ({ ...e, status: `pending` })),
    },
  );
  let h = ie(M(e), performance.now(), `space`, { surface: `electron`, emit: (t) => W(e, t) }),
    g = o?.space,
    y,
    b,
    x = !1,
    C = new AbortController(),
    w = () => e.get(z).find((e) => e.localPageId === m),
    E = (n) => {
      let r = {
        localPageId: m,
        accountId: s,
        userId: c,
        name: t,
        status: n,
        response: y,
        metrics: h,
        retry: O,
      };
      (e.set(X, m, r), y != null && e.set(X, y.id, r));
    },
    D = () => {
      let { pathname: t, search: n } = e.get(_);
      e.get(F) !== s ||
        e.get(v) !== c ||
        (t === `/spaces/new` && new URLSearchParams(n).get(`creation`) === m) ||
        e
          .get(f)
          .warning(
            e
              .get(te)
              .formatMessage({
                id: `codex.space.sidebar.spaceSetupNeedsAttention`,
                defaultMessage: `Space setup needs attention`,
                description: `Toast displayed when a shared Space setup needs retry or recovery. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              }),
          );
    },
    O = () => {
      if (b != null) return b;
      if (x || C.signal.aborted)
        return Promise.reject(new DOMException(`Space creation cancelled`, `AbortError`));
      let r = ne(e, s, c, d, l),
        a = AbortSignal.any([C.signal, r.signal]),
        o = async () => {
          a.throwIfAborted();
          try {
            let r;
            (g == null
              ? ((r = await n(a, m)), h.creationRequestSucceeded())
              : (r = await e.get(V).mutateAsync({ requestBody: { name: t }, existingSpace: g, signal: a })),
              a.throwIfAborted(),
              (y = r),
              (g = { spaceId: r.id, rootPageId: r.root_page_id }),
              h.savedIdentity());
          } catch (t) {
            (a.throwIfAborted(), (g = K(t) ?? g));
            let n = w();
            throw (
              g == null
                ? (t instanceof u && t.status >= 400 && t.status < 500 && ![408, 499].includes(t.status)) ||
                  (x = !0)
                : (h.savedIdentity(), n != null && T(e, { ...n, space: g })),
              h.fail(ee(t)),
              t
            );
          }
          let r = w(),
            o = r != null && r.rootInitialized !== !0 && r.rootInitialization !== `server`;
          (r != null && T(e, { ...r, space: g, rootInitialized: !o }),
            P(e, s, y),
            e.query.setData(j, y.id, y),
            o || h.rootInitialized(y.root_page_id),
            E(`creating`));
          let c = w()?.appearance,
            l = p(c?.emoji),
            d = l == null ? null : { kind: `icon`, value: l, color: A(c?.theme) ?? `black` };
          if (o || d != null) {
            let { completeSpaceRootSetup: t } = await i(
              async () => {
                let { completeSpaceRootSetup: e } = await import(`./space-root-setup-e71e232447d6.js`);
                return { completeSpaceRootSetup: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            );
            a.throwIfAborted();
            let n = await t(e, y, d, o, a);
            (a.throwIfAborted(),
              (y = {
                ...(e.query.getData(j, y.id) ?? y),
                symbol: n,
                can_edit_appearance: n == null && y.can_edit_appearance,
              }),
              e.query.setData(j, y.id, y),
              P(e, s, y));
            let r = w();
            (r != null && T(e, { ...r, rootInitialized: !0 }), o && h.rootInitialized(y.root_page_id));
          }
          if (d == null && c != null && y.can_edit_appearance === !0) {
            let t = await L.safePatch(`/spaces/v2/{space_id}/appearance`, {
              parameters: { path: { space_id: y.id } },
              requestBody: c,
              signal: a,
            });
            (a.throwIfAborted(),
              (y = { ...(e.query.getData(j, y.id) ?? y), appearance: t }),
              e.query.setData(j, y.id, y),
              P(e, s, y));
          }
          let f = w();
          f != null && T(e, { ...f, appearance: void 0 });
          let _ = w()?.invitations ?? [],
            v = _.filter((e) => e.status !== `shared`);
          if (v.length > 0) {
            let t = await J(e, y.id, v, a, (t, n) => {
              if (a.aborted) return;
              let r = w();
              if (r != null) {
                let i = _.indexOf(v[t]);
                T(e, {
                  ...r,
                  invitations: r.invitations.map((e, t) =>
                    t === i ? { ...e, recipient: n, status: `shared` } : e,
                  ),
                });
              }
            });
            a.throwIfAborted();
            let n = w();
            if (
              (n != null && T(e, { ...n, invitations: [..._.filter((e) => e.status === `shared`), ...t] }),
              t.some((e) => e.status === `failed`))
            )
              throw Error(`space_creation_invitations_incomplete`);
          }
          (S(e, m), E(`created`));
        };
      return (
        E(`creating`),
        (b = Promise.resolve()
          .then(() =>
            navigator.locks == null
              ? o()
              : navigator.locks.request(`space-setup:${JSON.stringify([s, c, m])}`, { signal: a }, o),
          )
          .catch((t) => {
            throw a.aborted
              ? (C.abort(),
                e.set(X, m, void 0),
                y != null && e.set(X, y.id, void 0),
                h.cancel(`account_changed`),
                t)
              : (x ? e.set(X, m, void 0) : E(`error`), h.fail(), D(), t);
          })
          .finally(() => {
            (r.stop(), (b = void 0));
          })),
        b
      );
    };
  return (O().catch(() => {}), m);
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    (l(),
      m(),
      q(),
      C(),
      G(),
      c(),
      D(),
      I(),
      N(),
      n(),
      U(),
      a(),
      B(),
      E(),
      Y(),
      H(),
      b(),
      d(),
      (X = s(o, (e) => void 0)),
      (Z = h(o, (e, { get: t }) => {
        let n = t(X, e);
        return n?.accountId === t(F) && n?.userId === t(v) ? n : void 0;
      })),
      (Q = r(o, ({ get: e }) =>
        e(z).flatMap((t) => {
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
//# sourceMappingURL=space-e4040a2fa18d.js.map
