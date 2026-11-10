import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cat as t,
  Cot as n,
  Pxt as r,
  Tat as i,
  fSt as a,
  hot as o,
  iot as s,
  lot as c,
  oot as l,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bon as d,
  Cyn as f,
  DW as p,
  Dbn as m,
  EW as h,
  Evn as g,
  FFr as _,
  FQn as v,
  G4n as ee,
  GMr as te,
  H_n as ne,
  Her as re,
  I9n as ie,
  J4n as y,
  LTn as b,
  Obn as x,
  Qon as S,
  RTn as C,
  Ron as w,
  Rxr as T,
  Tvn as E,
  U9n as D,
  U_n as O,
  Ver as k,
  W4n as A,
  W_n as j,
  Wmr as M,
  XPr as N,
  Xan as P,
  YPr as F,
  Yan as I,
  Yon as L,
  Zan as R,
  aIr as z,
  a_n as B,
  b5t as V,
  byn as H,
  d7t as U,
  f7t as W,
  ftr as G,
  iFr as K,
  i_n as ae,
  isn as q,
  iz as J,
  lIr as oe,
  nsn as se,
  oIr as ce,
  o_n as le,
  pZn as ue,
  ptr as de,
  qmr as fe,
  ron as Y,
  rsn as pe,
  rz as me,
  s7t as he,
  son as ge,
  tNr as _e,
  u7t as ve,
  uIr as ye,
  ubr as be,
  v8n as xe,
  y5t as Se,
  yjn as Ce,
  zFr as X,
  zon as Z,
} from "./app-initial-5851df3f6cb1.js";
async function we(e, t, n, r) {
  let a = () => r() && !e.get(A) && !e.get(V, n) && (e.get(C) === `work` ? `chatgpt` : `codex`) === n;
  if (!e.get(Q) && a()) {
    e.set(Q, !0);
    try {
      if ((await Te(e, t, n, r), !a())) return;
      let o = await Ee(e, t, n);
      if (!a() || o == null) return;
      let s = H(e.get, o.threadKeys);
      if (U(s).length + o.chatGptConversationIds.length === 0) return;
      let c = e.get(_)?.pathname,
        l = c == null ? null : i(c)?.params.conversationId,
        u = l == null ? null : decodeURIComponent(l);
      y(e, he, {
        ...o,
        initialEntries: s,
        projectLabel: t.label,
        currentChatGptConversationId: u == null ? null : (e.get(ue, u) ?? u),
        onArchivedCurrentThread: () => {
          ye(e, `/`);
        },
        suggestedGroupLabel: t.label,
        canArchive: r,
      });
    } catch {
      r() &&
        e
          .get(o)
          .danger(
            e
              .get(ce)
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
  let i = e.get(d, n),
    a = e.get(fe),
    o = e.get(Z, { sidebarMode: n, chatGptSource: O(e, i) }),
    c = t.kind === `chatgpt-project` ? o.linkedLocalProjectIdByChatGptProjectId.get(t.id) : void 0,
    l = c != null || (t.kind !== `chatgpt-project` && i.source !== `chatgpt`),
    u =
      l &&
      (t.kind === `chats` ||
        t.kind === `custom` ||
        t.kind === `codex-project` ||
        (t.kind === `connection` && t.id === `cloud`)),
    f = e.get(J);
  t.kind === `codex-project`
    ? (f = e.get(le, t.id))
    : t.kind === `chatgpt-project` && c != null
      ? (f = e.get(p, { localProjectId: c, projectId: t.id }))
      : t.kind === `connection` && (f = e.get(B, t.id.startsWith(`host:`) ? t.id.slice(5) : s));
  let m = async (e) => {
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
    h = [e.query.getOrFetch(x)];
  if (
    (l &&
      (t.kind !== `connection` || t.id !== `cloud`) &&
      (a == null
        ? h.push(
            Promise.all(
              e.get(K).map(async (t) => {
                let n = F(e, t),
                  r = await T(
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
        : h.push(m(f))),
    u && e.get(te) != null && h.push(de(e, r)),
    i.enabled && (t.kind === `chats` || t.kind === `custom`))
  ) {
    let n = ne({
      usesCatalog: a != null,
      sourceHostId: e.get(g),
      flatConversationHistory: i.flatConversationHistory,
      conversationFilter: i.conversationFilter,
    });
    if (
      (n == null
        ? (i.conversationFilter !== `tasks` &&
            h.push(
              (async () => {
                for (
                  await e.query.getOrFetch(I, i.flatConversationHistory);
                  e.get(I, i.flatConversationHistory).hasNextPage;
                )
                  await e.get(I, i.flatConversationHistory).fetchNextPage({ throwOnError: !0 });
              })(),
            ),
          i.conversationFilter !== `chats` &&
            h.push(
              (async () => {
                for (
                  await e.query.getOrFetch(Y, i.flatConversationHistory);
                  e.get(Y, i.flatConversationHistory).hasNextPage;
                )
                  await e.get(Y, i.flatConversationHistory).fetchNextPage({ throwOnError: !0 });
              })(),
            ))
        : h.push(m(n)),
      t.kind === `custom`)
    ) {
      let n = (e.get(D).sections.find(({ id: e }) => e === t.id)?.itemKeys ?? []).flatMap((e) =>
        e.startsWith(`chatgpt:conversation:`) ? [e.slice(21)] : [],
      );
      n.length > 0 && h.push(e.query.getOrFetch(P, n));
    }
  }
  await Promise.all(h);
}
async function Ee(e, t, n) {
  let r = e.get(d, n),
    i = e.get(Z, { sidebarMode: n, chatGptSource: O(e, r) }),
    a = [],
    o = [];
  if (t.kind === `codex-project`) {
    let e = [...i.orderedPinnedProjectGroups, ...i.allCodexProjectGroups].find(
      ({ projectId: e }) => e === t.id,
    );
    if (e == null) return null;
    a = e.threadKeys;
  } else if (t.kind === `connection`) {
    let r = e.get(S, n).connectionGroups?.find(({ key: e }) => e === t.id);
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
    let r = await e.query.fetch(R, [t.id]),
      s = new Set(e.get(D).sections.flatMap(({ itemKeys: e }) => e));
    ((o = r
      .filter(
        (e) =>
          !e.is_starred &&
          !s.has(`chatgpt:conversation:${e.id}`) &&
          v(e.conversation_origin, n.conversationFilter),
      )
      .map(({ id: e }) => e)),
      (a = n.localThreadKeys));
  } else {
    let n = new Map();
    for (let e of [...i.orderedPinnedProjectGroups, ...i.allCodexProjectGroups])
      n.set(re(e.projectId), { source: `codex`, group: e });
    for (let e of i.chatGptProjectTargets) n.set(k(e.project.gizmo.id), e);
    let s = e.get(D),
      c = pe({
        conversationByKey: i.conversationByKey,
        pinnedKeys: new Set(i.layout.pinnedKeys),
        projectByKey: n,
        source: r.source,
        state: s,
      }).find(({ section: e }) => e.id === t.id);
    if (c == null) return null;
    let l = c.chatGptProjectIds.length === 0 ? void 0 : await e.query.fetch(R, c.chatGptProjectIds);
    ((o = se({
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
    (be(),
      r(),
      oe(),
      N(),
      xe(),
      _e(),
      m(),
      j(),
      Ce(),
      ge(),
      t(),
      ee(),
      c(),
      z(),
      X(),
      h(),
      u(),
      l(),
      M(),
      E(),
      W(),
      me(),
      G(),
      q(),
      ie(),
      L(),
      Se(),
      b(),
      ve(),
      ae(),
      f(),
      w(),
      (Q = a(n, !1)));
  }))();
}
$();
export { we as suggestSidebarGroupArchive };
//# sourceMappingURL=sidebar-archive-suggestion-5ee7f2fadde1.js.map
