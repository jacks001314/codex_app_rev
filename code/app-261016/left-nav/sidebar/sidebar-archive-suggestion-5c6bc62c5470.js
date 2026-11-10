import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Got as n,
  Qst as r,
  Uot as i,
  Vrt as a,
  Yst as o,
  ZSt as s,
  Zst as c,
  kCt as l,
  qrt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as d,
  $rr as f,
  A5n as p,
  B1n as m,
  B9t as h,
  BG as g,
  CIr as _,
  D5n as ee,
  Dxn as te,
  E5n as ne,
  Eyn as re,
  FBr as ie,
  IBr as ae,
  Iir as v,
  Jln as y,
  Kun as b,
  Lir as x,
  Men as S,
  Mir as C,
  Mun as w,
  Nen as T,
  Nir as E,
  Nun as D,
  OSn as O,
  Oen as k,
  Oxn as A,
  Pun as j,
  Qun as M,
  RCn as N,
  SIr as P,
  TSn as F,
  Tyn as I,
  Uun as L,
  V9t as R,
  VG as z,
  VPn as B,
  WBr as V,
  Xln as H,
  Xun as U,
  Xvr as W,
  Ycr as G,
  Yln as oe,
  Zun as K,
  aB as q,
  c2n as se,
  drr as J,
  eer as ce,
  eir as le,
  hbn as ue,
  iB as de,
  irr as fe,
  jen as pe,
  mbn as Y,
  mwr as me,
  nun as X,
  oEr as he,
  okn as ge,
  oun as _e,
  pbn as ve,
  qvr as ye,
  skn as be,
  wLr as xe,
  wyn as Se,
  zCn as Z,
  zRr as Ce,
} from "./app-initial-ad16eaadf81f.js";
async function we(e, t, r, i) {
  let a = () => i() && !e.get(ne) && !e.get(R, r) && (e.get(be) === `work` ? `chatgpt` : `codex`) === r;
  if (!e.get(Q) && a()) {
    e.set(Q, !0);
    try {
      if ((await Te(e, t, r, i), !a())) return;
      let o = await Ee(e, t, r);
      if (!a() || o == null) return;
      let s = F(e.get, o.threadKeys);
      if (S(s).length + o.chatGptConversationIds.length === 0) return;
      let c = e.get(G)?.pathname,
        l = c == null ? null : n(c)?.params.conversationId,
        u = l == null ? null : decodeURIComponent(l);
      p(e, k, {
        ...o,
        initialEntries: s,
        projectLabel: t.label,
        currentChatGptConversationId: u == null ? null : (e.get(m, u) ?? u),
        onArchivedCurrentThread: () => {
          E(e, `/`);
        },
        suggestedGroupLabel: t.label,
        canArchive: i,
      });
    } catch {
      i() &&
        e
          .get(u)
          .danger(
            e
              .get(_)
              .formatMessage(
                {
                  id: `sidebarElectron.archiveSuggestion.loadError`,
                  defaultMessage: `Couldn't load all chats in {groupName}`,
                  description: `Error shown when the remaining chats in a sidebar group cannot all be loaded for a bulk archive suggestion`,
                },
                { groupName: t.label },
              ),
            { errorAnalytics: { toastId: `sidebarArchiveSuggestion.loadError` } },
          );
    } finally {
      e.set(Q, !1);
    }
  }
}
async function Te(e, t, n, r) {
  let i = e.get(j, n),
    a = e.get(W),
    s = e.get(D, { sidebarMode: n, chatGptSource: Y(e, i) }),
    c = t.kind === `chatgpt-project` ? s.linkedLocalProjectIdByChatGptProjectId.get(t.id) : void 0,
    l = c != null || (t.kind !== `chatgpt-project` && i.source !== `chatgpt`),
    u =
      l &&
      (t.kind === `chats` ||
        t.kind === `custom` ||
        t.kind === `codex-project` ||
        (t.kind === `connection` && t.id === `cloud`)),
    d = e.get(q);
  t.kind === `codex-project`
    ? (d = e.get(re, t.id))
    : t.kind === `chatgpt-project` && c != null
      ? (d = e.get(z, { localProjectId: c, projectId: t.id }))
      : t.kind === `connection` && (d = e.get(I, t.id.startsWith(`host:`) ? t.id.slice(5) : o));
  let f = async (e) => {
      if (a != null && e != null)
        for (await a.ensurePage(e, 100); a.getPageState(e).hasMore;) {
          let t = [e, ...(e.materializationScopes ?? [])],
            n = t.reduce((e, t) => e + (a.getEntries(t)?.length ?? 0), 0);
          if (
            (await a.loadMore(e, 100),
            a.getPageState(e).hasMore && t.reduce((e, t) => e + (a.getEntries(t)?.length ?? 0), 0) <= n)
          )
            throw Error(`Sidebar history did not finish loading`);
        }
    },
    p = [e.query.getOrFetch(Z)];
  if (
    (l &&
      (t.kind !== `connection` || t.id !== `cloud`) &&
      (a == null
        ? p.push(
            Promise.all(
              e.get(V).map(async (t) => {
                let n = ie(e, t),
                  r = await he(
                    {
                      sendRequest: (e, t, r) => n.sendRequest(e, t, r),
                      recentConversationsSortKey: `updated_at`,
                    },
                    { modelProviders: null },
                  );
                await n.observeCatalogThreads(r);
              }),
            ),
          )
        : p.push(f(d))),
    u && e.get(Ce) != null && p.push(x(e, r)),
    i.enabled && (t.kind === `chats` || t.kind === `custom`))
  ) {
    let n = ve({
      usesCatalog: a != null,
      sourceHostId: e.get(A),
      flatConversationHistory: i.flatConversationHistory,
      conversationFilter: i.conversationFilter,
    });
    if (
      (n == null
        ? (i.conversationFilter !== `tasks` &&
            p.push(
              (async () => {
                for (
                  await e.query.getOrFetch(y, i.flatConversationHistory);
                  e.get(y, i.flatConversationHistory).hasNextPage;
                )
                  await e.get(y, i.flatConversationHistory).fetchNextPage({ throwOnError: !0 });
              })(),
            ),
          i.conversationFilter !== `chats` &&
            p.push(
              (async () => {
                for (
                  await e.query.getOrFetch(X, i.flatConversationHistory);
                  e.get(X, i.flatConversationHistory).hasNextPage;
                )
                  await e.get(X, i.flatConversationHistory).fetchNextPage({ throwOnError: !0 });
              })(),
            ))
        : p.push(f(n)),
      t.kind === `custom`)
    ) {
      let n = (e.get(J).sections.find(({ id: e }) => e === t.id)?.itemKeys ?? []).flatMap((e) =>
        e.startsWith(`chatgpt:conversation:`) ? [e.slice(21)] : [],
      );
      n.length > 0 && p.push(e.query.getOrFetch(oe, n));
    }
  }
  await Promise.all(p);
}
async function Ee(e, t, n) {
  let r = e.get(j, n),
    i = e.get(D, { sidebarMode: n, chatGptSource: Y(e, r) }),
    a = [],
    o = [];
  if (t.kind === `codex-project`) {
    let e = [...i.orderedPinnedProjectGroups, ...i.allCodexProjectGroups].find(
      ({ projectId: e }) => e === t.id,
    );
    if (e == null) return null;
    a = e.threadKeys;
  } else if (t.kind === `connection`) {
    let r = e.get(b, n).connectionGroups?.find(({ key: e }) => e === t.id);
    if (r == null) return null;
    a = r.threadKeys;
  } else if (t.kind === `chats`)
    for (let e of i.layout.chatKeys) {
      let t = i.conversationByKey.get(e);
      t?.source === `codex`
        ? a.push(t.threadKey)
        : t?.source === `chatgpt` && t.target.kind !== `optimistic` && o.push(t.target.conversationId);
    }
  else if (t.kind === `chatgpt-project`) {
    let n = i.chatGptProjectTargets.find(({ project: e }) => e.gizmo.id === t.id);
    if (n == null) return null;
    let r = await e.query.fetch(H, [t.id]),
      s = new Set(e.get(J).sections.flatMap(({ itemKeys: e }) => e));
    ((o = r
      .filter(
        (e) =>
          !e.is_starred &&
          !s.has(`chatgpt:conversation:${e.id}`) &&
          se(e.conversation_origin, n.conversationFilter),
      )
      .map(({ id: e }) => e)),
      (a = n.localThreadKeys));
  } else {
    let n = new Map();
    for (let e of [...i.orderedPinnedProjectGroups, ...i.allCodexProjectGroups])
      n.set(le(e.projectId), { source: `codex`, group: e });
    for (let e of i.chatGptProjectTargets) n.set(f(e.project.gizmo.id), e);
    let s = e.get(J),
      c = K({
        conversationByKey: i.conversationByKey,
        pinnedKeys: new Set(i.layout.pinnedKeys),
        projectByKey: n,
        source: r.source,
        state: s,
      }).find(({ section: e }) => e.id === t.id);
    if (c == null) return null;
    let l = c.chatGptProjectIds.length === 0 ? void 0 : await e.query.fetch(H, c.chatGptProjectIds);
    ((o = U({
      conversationFilter: r.conversationFilter,
      projectConversations: l,
      section: c,
      allCustomSectionItemKeys: s.sections.flatMap(({ itemKeys: e }) => e),
    })),
      (a = c.threadKeys));
  }
  return { threadKeys: [...new Set(a)], chatGptConversationIds: [...new Set(o)] };
}
var Q;
function $() {
  return ($ = e(() => {
    (me(),
      s(),
      C(),
      ae(),
      ce(),
      xe(),
      N(),
      ue(),
      B(),
      _e(),
      i(),
      ee(),
      a(),
      P(),
      d(),
      g(),
      t(),
      c(),
      ye(),
      te(),
      T(),
      de(),
      v(),
      M(),
      fe(),
      L(),
      h(),
      ge(),
      pe(),
      Se(),
      O(),
      w(),
      (Q = l(r, !1)));
  }))();
}
$();
export { we as suggestSidebarGroupArchive };
//# sourceMappingURL=sidebar-archive-suggestion-5c6bc62c5470.js.map
