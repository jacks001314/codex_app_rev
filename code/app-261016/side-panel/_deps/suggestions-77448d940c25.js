import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as n, Qst as r, TNt as i, ZSt as a, yCt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as s,
  Mdn as c,
  OU as l,
  Odn as u,
  Olr as d,
  gLr as f,
  gur as p,
  hdn as m,
  kU as h,
  lpn as g,
  mlr as _,
  upn as v,
  vdn as y,
  wLr as b,
} from "./app-initial-ad16eaadf81f.js";
import { a as x, t as S } from "./state-d01a5a96b9cf.js";
import { n as C } from "./people-picks-972d817ff3d6.js";
var w;
function T() {
  return (T = e(() => {
    (a(),
      b(),
      g(),
      l(),
      _(),
      m(),
      n(),
      S(),
      (w = o(r, (e, { get: t }) => {
        let n = t(p);
        if (e == null || n == null || !t(d)) return { picks: [], isLoading: !1, isError: !1 };
        let r = t(s),
          i = t(f),
          a = [],
          o = new Map(),
          l = [],
          m = e.type === `space`,
          g = !1,
          _ = !1;
        if (e.type === `space`) l.push({ type: `space`, id: e.id });
        else if ((w(e.commenters), !v(e.id))) {
          let n = t(c, e.id),
            r = t(y, n),
            i = t(u, n);
          if (((m = r?.access.can_share === !0), i.isDriveBacked)) {
            l.push({ type: `page`, id: n });
            let e = r?.drive_space_id ?? i.space?.id;
            e != null && l.push({ type: `space`, id: e });
          }
        }
        for (let n of l) {
          let r = n.type === e.type && n.id === e.id ? e.sharing : void 0;
          if (r == null) {
            let e = t(h, n, { enabled: m });
            if (((g = e.isFetching || g), (_ = e.isError || _), e.data == null || e.isError)) continue;
            r = e.data;
          }
          let i = [],
            a = r.workspace_id == null && r.workspace_id !== void 0;
          if (r.owner.principal_type === `user`) {
            let e = r.owner.principal_id;
            i.push({
              id: e,
              account_user_id: a || e.includes(`__`) ? e : void 0,
              name: r.owner_display_name ?? null,
              email: null,
            });
          }
          for (let e of r.shares) {
            if (
              e.status !== `active` ||
              e.recipient.recipient_type !== `principal` ||
              e.recipient.principal_type !== `user`
            )
              continue;
            let t = e.recipient.principal_id;
            i.push({
              id: t,
              account_user_id: a || t.includes(`__`) ? t : void 0,
              name: e.recipient_display_name ?? null,
              email: e.recipient_email ?? null,
              avatar_url: e.recipient_avatar_url,
            });
          }
          w(i);
        }
        for (let e of o.values()) {
          let r = e.account_user_id ?? `${e.id}__${n.toLowerCase()}`,
            { data: i } = t(x, r, { enabled: !1 });
          (i?.id === e.id &&
            i.account_user_id === r &&
            ((e.name = e.name ?? i.name),
            (e.email = e.email ?? i.email),
            (e.avatar_url = e.avatar_url ?? i.avatar_url)),
            i !== void 0 && (e.name = e.name ?? ``));
        }
        let b = C(e.query ?? ``, a, { currentUserId: r, limit: 20, includeUnknownNames: !0 }),
          S = new Map();
        for (let e of b) {
          if (
            e.account_user_id != null &&
            (e.name != null || e.email != null) &&
            (S.set(e.id, { ...e, account_user_id: e.account_user_id }), e.name != null)
          )
            continue;
          let a = e.account_user_id ?? `${e.id}__${n.toLowerCase()}`,
            o = t(x, a);
          ((g =
            (o.isPending && r != null && i.status === `loaded` && i.structure === `workspace`) ||
            o.isFetching ||
            g),
            (_ = o.isError || _),
            o.data?.id === e.id &&
              o.data.account_user_id === a &&
              S.set(e.id, {
                ...o.data,
                name: o.data.name || e.name,
                email: o.data.email ?? e.email,
                avatar_url: o.data.avatar_url ?? e.avatar_url,
              }));
        }
        return {
          picks: a.map((e) =>
            e.flatMap(({ id: e }) => {
              let t = S.get(e);
              return t == null ? [] : [t];
            }),
          ),
          isLoading: g,
          isError: _,
        };
        function w(t) {
          let n = [];
          a.push(n);
          for (let r of t ?? []) {
            let t = r.id.split(`__`)[0];
            if (e?.excludeUserIds?.includes(t)) continue;
            let i = o.get(t);
            if (i != null)
              ((i.account_user_id = i.account_user_id ?? r.account_user_id),
                (i.name = i.name ?? r.name),
                (i.email = i.email ?? r.email),
                (i.avatar_url = i.avatar_url ?? r.avatar_url));
            else {
              let e = { ...r, id: t };
              (o.set(t, e), n.push(e));
            }
          }
        }
      })));
  }))();
}
function E(e) {
  let t = D(e == null ? void 0 : [e]);
  return [t?.slice(0, 1), t?.slice(1)];
}
function D(e) {
  if (e == null) return;
  let t = new Map();
  for (let n of e)
    for (let e of n.messages) {
      if (e.deletedAt != null || e.authorType === `agent`) continue;
      let { id: n, displayName: r } = e.author,
        i = n.split(`__`)[0];
      t.has(i) || t.set(i, { id: i, account_user_id: n, name: r === n || r === i ? null : r, email: null });
    }
  return [...t.values()];
}
var O, k, A;
function j() {
  return (j = e(() => {
    ((O = t(i(), 1)), (k = () => O.default), (A = () => void 0));
  }))();
}
export { k as a, A as i, D as n, T as o, j as r, w as s, E as t };
//# sourceMappingURL=suggestions-77448d940c25.js.map
