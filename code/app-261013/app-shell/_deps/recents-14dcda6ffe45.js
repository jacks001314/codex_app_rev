import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as n,
  ADt as r,
  ASt as i,
  CPt as a,
  Cat as o,
  Cot as s,
  EPt as c,
  Fat as l,
  Ixt as u,
  LLt as d,
  Mot as f,
  Not as ee,
  Pat as te,
  Pxt as p,
  RLt as ne,
  SPt as re,
  TLt as m,
  Vxt as ie,
  _It as ae,
  dA as h,
  fLt as g,
  fSt as _,
  hpt as v,
  jDt as y,
  jSt as b,
  mA as x,
  nSt as oe,
  oIt as se,
  oSt as S,
  pLt as C,
  rst as w,
  sMt as T,
  uA as ce,
  vzt as le,
  wot as ue,
  xLt as E,
  xMt as de,
  xat as D,
  yzt as O,
  zxt as fe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $I as k,
  $Sr as A,
  A0t as j,
  Bkr as pe,
  CFr as M,
  Cp as N,
  Ear as me,
  Ep as he,
  FEr as ge,
  GMr as _e,
  GUn as P,
  ITr as ve,
  KKn as ye,
  KUn as be,
  NDr as F,
  NTr as xe,
  OPr as I,
  PEr as Se,
  QI as Ce,
  Qjr as we,
  UKn as L,
  Vkr as Te,
  Vpr as R,
  XMr as Ee,
  Xar as De,
  Xqn as z,
  Xtn as Oe,
  Yan as B,
  Ymr as V,
  ZSr as ke,
  ZZn as Ae,
  Zjr as je,
  Zsn as H,
  Ztn as Me,
  _Tr as Ne,
  _Yn as U,
  aIr as Pe,
  aNr as W,
  aun as G,
  bFr as K,
  eNr as Fe,
  ean as Ie,
  ehn as Le,
  ehr as q,
  fUn as Re,
  gTr as ze,
  hln as Be,
  iNr as Ve,
  ihn as He,
  jPr as Ue,
  kPr as We,
  mln as Ge,
  nJn as Ke,
  oIr as qe,
  oun as Je,
  pOr as Ye,
  rJn as Xe,
  rNr as Ze,
  rYr as Qe,
  rcn as $e,
  ron as et,
  son as tt,
  tNr as J,
  tan as nt,
  uUn as rt,
  vYn as it,
  wvn as at,
  xFr as ot,
  xsn as st,
  xvn as ct,
  yjn as lt,
  zpr as ut,
} from "./app-initial-5851df3f6cb1.js";
import { t as Y } from "./content-reference-markers-9ae518f3b777.js";
import { n as dt, t as ft } from "./cached-page-metadata-7a5a83af28c7.js";
function pt(e) {
  let t =
    e.library_provider ??
    L(`library_item_id` in e ? e.library_item_id : e.directory_id) ??
    (`file_id` in e ? L(e.file_id) : null) ??
    e.provider;
  return t != null && t !== `native`
    ? t
    : e.access_kind === `shared` || (`directory_id` in e && e.directory_id.startsWith(`library:shared-`))
      ? `native_shared`
      : `native`;
}
function mt({ payload: e }) {
  if (!(`library_item_id` in e) && !(`directory_id` in e)) return null;
  let t = `library_item_id` in e ? e.library_item_id : e.directory_id,
    n = pt(e);
  return { provider: n, accountKey: e.external_account?.key ?? (n === L(t) ? h(t) : null) };
}
function X() {
  return (X = e(() => {
    (x(), ye());
  }))();
}
function ht({ items: e, search: t, searchFilter: n, itemKeys: r }) {
  let i = [];
  if (!t || e == null || r?.length === 0) return i;
  let a = t.toLowerCase(),
    o = new Set();
  for (let { item: t, conversationMessages: s } of e) {
    if (n !== `all` && t.source_key !== St[n]) continue;
    let e = t.title.toLowerCase().includes(a),
      c =
        (!(`conversation_id` in t.payload) || t.match_kind !== `title`) &&
        t.snippet?.toLowerCase().includes(a),
      l = s?.findLast(({ text: e }) => e.toLowerCase().includes(a));
    if (!e && !c && l == null) continue;
    let u = Z(t);
    if (!(o.has(u) || (r != null && !r.includes(u)))) {
      if ((o.add(u), `conversation_id` in t.payload)) {
        let { conversation_id: n } = t.payload,
          r = l?.id ?? t.payload.message_id,
          a = l == null && e;
        i.push({
          ...t,
          id: a || r == null ? `conversation:${n}:title` : `conversation:${n}:message:${r}`,
          match_kind: a ? `title` : `content`,
          snippet: a ? null : (l?.text ?? t.snippet),
          payload: { ...t.payload, message_id: a ? null : r },
        });
      } else i.push({ ...t, match_kind: e ? `title` : `content` });
      if (i.length === 2) break;
    }
  }
  return i;
}
function gt(e, t, n, r, i = !1) {
  let a = e.get(Ue);
  if (
    n == null ||
    r == null ||
    e.get(Ye) !== n ||
    e.get(Ee) !== r ||
    a == null ||
    a.getDynamicConfig(`383746455`).get(`disable_local_indexing`, !1)
  )
    return;
  let o = K(Q, void 0),
    s = Date.now();
  (i &&
    e.set(
      xt,
      t
        .filter((e) => e.source_type === `space` && e.payload.kind === `space_page`)
        .slice(0, yt)
        .map((e) => ({ accountId: n, userId: r, cachedAt: s, item: e })),
    ),
    M(Q, {
      entries: Object.fromEntries(
        t.map((e) => {
          let t = JSON.stringify([n, r, e.source_type === `library` ? Z(e) : `${e.source_key}:${e.id}`]);
          return [t, vt(e) ? { value: { ...o?.[t], accountId: n, userId: r, cachedAt: s, item: e } } : null];
        }),
      ),
      maxEntries: yt,
    }),
    e.set(bt, K(Q, void 0)));
}
function Z(e) {
  let t = `library_file` in e.payload ? e.payload.library_file : e.payload;
  if (`conversation_id` in t) return `conversation:${t.conversation_id}`;
  if (t.kind === `space_page`) return `page:${t.page_id}`;
  let n =
      `library_item_id` in t
        ? `library:${t.library_item_id}`
        : `${e.source_key}:${`project_id` in t ? t.project_id : e.id}`,
    r = mt({ ...e, payload: t });
  return r == null || ((r.provider === `native` || r.provider === `native_shared`) && r.accountKey == null)
    ? n
    : JSON.stringify([r.provider, r.accountKey, n]);
}
function _t(e, t, n, r) {
  if (n == null || r == null || e.get(Ye) !== n || e.get(Ee) !== r) return;
  let i = K(Q, void 0);
  (M(Q, {
    entries: Object.fromEntries(
      Object.entries(i ?? {})
        .filter(([, e]) => e.accountId === n && e.userId === r && Z(e.item) === `library:${t}`)
        .map(([e]) => [e, null]),
    ),
  }),
    e.set(bt, K(Q, void 0)));
}
function vt(e) {
  let t = e.payload;
  return e.source_type === `dot_messages` || e.source_type === `space` || t.kind === `space_page`
    ? !1
    : e.source_type !== `library` ||
        (`library_item_id` in t &&
          t.library_artifact_type !== `site` &&
          t.external_account == null &&
          pt(t) === `native` &&
          (t.provider == null || t.provider === `native`) &&
          L(t.library_item_id) == null &&
          L(t.file_id) == null);
}
var Q, yt, bt, xt, St;
function Ct() {
  return (Ct = e(() => {
    (p(),
      z(),
      ke(),
      J(),
      ye(),
      ue(),
      I(),
      ot(),
      Ze(),
      j(),
      lt(),
      F(),
      X(),
      (Q = `chatgpt-search-results-v2`),
      (yt = 500),
      (bt = Ve(Q, void 0)),
      (xt = _(s, [])),
      (St = {
        chats: `conversation`,
        images: `library:image`,
        documents: `library:document`,
        pages: `space`,
        projects: `project`,
      }));
  }))();
}
var wt, Tt, Et, Dt, Ot;
function kt() {
  return (kt = e(() => {
    ((wt = t(T(), 1)),
      p(),
      J(),
      ue(),
      je(),
      ot(),
      F(),
      tt(),
      Ct(),
      (Tt = 4),
      (Et = S(s, ({ get: e }) => {
        let t = e(Ye),
          n = e(Ee);
        if (t == null || n == null) return [];
        let r = e(bt) ?? K(`chatgpt-search-results-v2`, void 0),
          i = e(B, !0, { enabled: !1 }).data,
          a = new Set(i?.pages.flatMap((e) => e.items.map((e) => e.id)));
        return [...Object.values(r ?? {}).filter(({ item: e }) => vt(e)), ...e(xt)].filter(
          ({ accountId: e, userId: r, item: i }) =>
            e === t && r === n && (!(`conversation_id` in i.payload) || a.has(i.payload.conversation_id)),
        );
      })),
      (Dt = S(s, ({ get: e }) =>
        e(Et).toSorted(
          (e, t) =>
            (t.item.update_time ?? 0) - (e.item.update_time ?? 0) || t.item.id.localeCompare(e.item.id),
        ),
      )),
      (Ot = S(s, ({ get: e }) =>
        !e(Fe) || (e(we, `383746455`)?.get(`disable_recent_files`, !0) ?? !0)
          ? []
          : (0, wt.default)(
              e(Et)
                .filter(({ item: e }) => e.source_type === `library`)
                .sort(
                  (e, t) =>
                    (t.item.update_time ?? 0) - (e.item.update_time ?? 0) ||
                    (t.cachedAt ?? 0) - (e.cachedAt ?? 0),
                ),
              ({ item: e }) => Z(e),
            )
              .slice(0, Tt)
              .map(({ item: e }) => e),
      )));
  }))();
}
var At, jt;
function Mt() {
  return (Mt = e(() => {
    (p(),
      Pe(),
      ue(),
      dt(),
      Ge(),
      Le(),
      Ce(),
      st(),
      Me(),
      (At = S(s, ({ get: e }) => {
        let t = e($e, { enabled: !1 }).data;
        if (t == null) return;
        let n = new Set(t.items.map((e) => e.root_page_id));
        return He(
          e(H)?.items ?? [],
          e(k)?.flatMap(({ pageId: t }) => {
            let n = e(ft, t);
            return n == null ? [] : [n];
          }) ?? [],
        ).flatMap((e) =>
          Be(e.page_id) || n.has(e.page_id) || e.access.can_read === !1 || e.deleted_at != null
            ? []
            : [
                {
                  pageId: e.page_id,
                  title: e.title ?? ``,
                  documentType: e.document_type,
                  updatedAt: e.updated_at,
                  searchPayload: { kind: `space_page`, page_id: e.page_id },
                },
              ],
        );
      })),
      (jt = oe(s, ({ search: e, limit: t }, { get: n }) => {
        let r = n(qe);
        return (
          n(At)
            ?.toSorted(
              (e, t) =>
                Date.parse(t.updatedAt ?? ``) - Date.parse(e.updatedAt ?? ``) ||
                e.pageId.localeCompare(t.pageId),
            )
            .flatMap((t) => {
              if (t.title.trim()) return [];
              let n = r.formatMessage(Oe(t.documentType));
              return n.toLocaleLowerCase().includes(e.trim().toLocaleLowerCase())
                ? [
                    {
                      id: t.pageId,
                      source_type: `space`,
                      source_key: `space`,
                      title: n,
                      update_time: Date.parse(t.updatedAt ?? ``) / 1e3,
                      match_kind: `title`,
                      payload: { kind: `space_page`, page_id: t.pageId },
                    },
                  ]
                : [];
            })
            .slice(0, t) ?? []
        );
      })));
  }))();
}
function Nt(e) {
  let t = A(e).replace(/\uE200(?:filecite|cite)\uE202[^\uE200\uE201]*$/, ``),
    n = ``,
    r = 0,
    i = [];
  for (let e = 0; e < t.length; e++) {
    let a = t[e];
    if (a === `\\`) {
      e++;
      continue;
    }
    if (
      a ===
        `
` ||
      a === `\r`
    ) {
      i.length = 0;
      continue;
    }
    if (a === `[`) {
      i.push(e);
      continue;
    }
    if (a !== `]`) continue;
    let o = i.pop();
    if (o == null) continue;
    let s = t.startsWith(`(<sandbox:`, e + 1),
      c = s ? `(<sandbox:` : `(sandbox:`;
    if (!t.startsWith(c, e + 1)) continue;
    let l = e + 1 + c.length,
      u;
    if (s) {
      let e = t.slice(l).search(/[>\r\n]/);
      ((u = e < 0 ? t.length : l + e), t[u] === `>` && u++);
    } else u = Xe(t, l).endIndex;
    t[u] === `)` && u++;
    let d = t[o - 1] === `!` ? o - 1 : o;
    ((n += t.slice(r, d) + t.slice(o + 1, e)), (r = u), (i.length = 0), (e = u - 1));
  }
  return (n + t.slice(r)).replace(/[ \t]{2,}/g, ` `).trim();
}
function Pt() {
  return (Pt = e(() => {
    (Ke(), Y());
  }))();
}
function Ft(e, t, n, r) {
  let { payload: i } = e,
    a = {
      rawItem: e,
      title: e.source_type === `conversation` ? (P(e.title) ?? n) : e.title.trim(),
      updateTime: e.update_time,
      snippet: e.snippet == null ? e.snippet : Nt(e.snippet),
    },
    o,
    s = `/library`;
  if (`conversation_id` in i) {
    if (
      ((o = {
        ...a,
        kind: `conversation`,
        conversationId: i.conversation_id,
        nodeId: i.message_id,
        isArchived: i.is_archived,
        thumbnailUrl: i.thumbnail_url,
      }),
      (s = D(i.conversation_id)),
      t.trim().length > 0)
    ) {
      let e = new URLSearchParams({ src: `history_search` });
      (i.message_id && (e.set(`messageId`, i.message_id), e.set(`historySearchQuery`, t.trim())),
        (s += `?${e}`));
    }
  } else if (`library_item_id` in i) {
    let e = It(i),
      n = pt(i);
    if (n === `native_shared` && !r) return null;
    ((o = {
      ...a,
      kind: `library_file`,
      libraryFileId: i.library_item_id,
      fileId: i.file_id,
      fileName: i.file_name,
      gizmoId: i.gizmo_id,
      fileExtension: i.file_extension,
      mimeType: i.mime_type,
      libraryProvider: e,
      sourceUrl: e == null ? void 0 : i.cloud_doc_url,
      libraryArtifactType: i.library_artifact_type,
      libraryFileCategory: i.library_file_category,
      state: i.state,
      isShared: n === `native_shared`,
      thumbnailUrl: i.thumbnail_url,
    }),
      (s =
        n === `native_shared`
          ? `/library/share/${encodeURIComponent(i.library_item_id)}`
          : n === `native`
            ? r
              ? `/library/file/${encodeURIComponent(i.library_item_id)}`
              : null
            : `/library?search=${encodeURIComponent(t)}`));
  } else if (`library_file` in i)
    ((o = {
      ...a,
      kind: `site`,
      projectId: i.project_id,
      liveUrl: i.live_url,
      thumbnailUrl: i.library_file.thumbnail_url,
    }),
      i.live_url != null && /^https?:\/\//i.test(i.live_url) && (s = i.live_url));
  else if (`directory_id` in i) {
    if (!r) return null;
    ((o = { ...a, kind: `library_folder`, directoryId: i.directory_id }),
      (s = `/library/d/${encodeURIComponent(i.directory_id)}?entry_point=global_search`));
  } else if (`project_id` in i)
    ((o = {
      ...a,
      kind: `project`,
      projectId: i.project_id,
      emoji: i.emoji,
      theme: i.theme,
      isSharedProject: i.is_shared,
    }),
      (s = xe(i.project_id)));
  else if (i.kind === `dot_message`) ((o = { ...a, kind: `dot_message` }), (s = Lt(i)));
  else if (i.kind === `space_page`)
    ((o = { ...a, kind: `space_page` }), (s = `/space/${encodeURIComponent(i.page_id)}`));
  else if (i.kind === `space_file`)
    ((o = { ...a, kind: `space_file` }), (s = `/library/file/${encodeURIComponent(i.file_id)}`));
  else return null;
  return { item: o, query: t, href: s };
}
function It(e) {
  let t = [e.library_item_id, e.file_id].map((e) => e.replace(/^file-library:/u, ``)),
    n = t.map(N).find((e) => e != null)?.provider;
  if (n == null && t.some((e) => e.startsWith(`external-`))) return null;
  let r = ce({ libraryProvider: e.library_provider ?? e.provider });
  return n == null ||
    r === n ||
    (e.library_provider == null && (r == null || (r === `sharepoint` && n === `onedrive`)))
    ? (n ?? r)
    : null;
}
function Lt(e) {
  let t = new URLSearchParams({ roomId: e.room_id, messageId: e.message_id });
  return `${ze(e.thread_id)}?${t}`;
}
function Rt() {
  return (Rt = e(() => {
    (x(), be(), ve(), X(), o(), he(), Ne(), Pt());
  }))();
}
function zt({ searchItems: e }) {
  return e.flatMap((e) => {
    let t = e.title.trim() || null,
      n = e.snippet == null ? e.snippet : Nt(e.snippet);
    return e.payload.kind === `dot_message`
      ? [
          {
            kind: `dot`,
            item: e,
            href: Lt(e.payload),
            title: t,
            searchTitle: t ?? ``,
            updatedAt: (e.update_time ?? 0) * 1e3,
            searchPreview: n == null ? null : { kind: `contentMatch`, snippet: n },
          },
        ]
      : `conversation_id` in e.payload
        ? [
            {
              kind: `chatgpt`,
              conversationId: e.payload.conversation_id,
              isArchived: e.payload.is_archived,
              thumbnailUrl: e.payload.thumbnail_url,
              snippet: n,
              title: t,
              searchTitle: t ?? e.payload.conversation_id,
              updatedAt: (e.update_time ?? 0) * 1e3,
              searchPreview:
                e.match_kind === `content` && n != null ? { kind: `contentMatch`, snippet: n } : null,
            },
          ]
        : [];
  });
}
function Bt() {
  return (Bt = e(() => {
    (Pt(), Rt());
  }))();
}
var Vt;
function Ht() {
  return (Ht = e(() => {
    Vt = class {
      operation;
      snapshot = { scopeKey: ``, pages: [] };
      listeners = new Set();
      getSnapshot = () => this.snapshot;
      subscribe = (e) => (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e);
        }
      );
      publish(e) {
        ((this.snapshot = e), this.listeners.forEach((e) => e()));
      }
      start(e, t, n, r) {
        if (this.operation?.scopeKey !== e || this.operation.parentSignal !== t) {
          this.operation != null && this.clear(this.operation.scopeKey);
          let n = new AbortController(),
            r = () => {
              this.operation?.controller === n && this.clear(e);
            };
          ((this.operation = {
            scopeKey: e,
            parentSignal: t,
            controller: n,
            removeAbortListener: () => t.removeEventListener(`abort`, r),
          }),
            t.addEventListener(`abort`, r, { once: !0 }),
            this.publish({ scopeKey: e, pages: [] }));
        }
        let i = this.operation,
          a = crypto.randomUUID(),
          o = () => this.operation === i && !i.controller.signal.aborted;
        t.aborted && this.clear(e);
        let s = (t, i) => {
          if (!o()) return;
          let s = { index: r, attemptId: a, inputCursor: n, items: t, exhausted: i };
          this.publish({
            scopeKey: e,
            pages: [...this.snapshot.pages.filter((e) => e.attemptId !== a), s].sort(
              (e, t) => e.index - t.index,
            ),
          });
        };
        return {
          attemptId: a,
          signal: i.controller.signal,
          isCurrent: o,
          publish: (e) => s(e),
          complete: (e, t) => s(e, t),
          discard: () => {
            o() && this.clear(e);
          },
        };
      }
      acknowledge(e) {
        let t = this.snapshot.pages.filter(
          (t) => !e.some((e) => e.attemptId === t.attemptId && e.inputCursor === t.inputCursor),
        );
        t.length !== this.snapshot.pages.length &&
          (t.length === 0 && (this.operation?.removeAbortListener(), (this.operation = void 0)),
          this.publish({ ...this.snapshot, pages: t }));
      }
      clear(e) {
        let t = this.operation;
        t?.scopeKey === e &&
          ((this.operation = void 0),
          t.removeAbortListener(),
          t.controller.abort(),
          this.publish({ scopeKey: e, pages: [] }));
      }
    };
  }))();
}
async function Ut(e, t, n) {
  try {
    if (
      (n.throwIfAborted(),
      e.headers.get(`content-type`)?.split(`;`)[0]?.trim().toLowerCase() !== `text/event-stream`)
    ) {
      let t = await e.json();
      return (n.throwIfAborted(), G.parse(t));
    }
    if (e.body == null) throw new Wt();
    let r = !1;
    for await (let i of v(
      e.body,
      n,
      (e) => {
        r = e.length > 0;
      },
      (e) => {
        let t = r ? e : void 0;
        return ((r = !1), t);
      },
    )) {
      if ((n.throwIfAborted(), i.event !== `progress` && i.event !== `complete`)) throw new Wt();
      let e = G.parse(JSON.parse(m().parse(i.data)));
      if (i.event === `complete`) return e;
      t(e);
    }
    throw new Wt();
  } catch {
    throw (n.throwIfAborted(), new Wt());
  } finally {
    e.body?.cancel().catch(() => void 0);
  }
}
var Wt;
function Gt() {
  return (Gt = e(() => {
    (w(),
      c(),
      Je(),
      (Wt = class extends Error {
        constructor() {
          (super(`Global Search response did not complete.`), (this.name = `GlobalSearchStreamError`));
        }
      }));
  }))();
}
function Kt(e) {
  let t = (0, gn.c)(138),
    {
      connectionScopeKey: n,
      enabled: r,
      eventLogger: a,
      externalAccountKeys: o,
      includeFolders: c,
      includeSpace: l,
      libraryProviders: d,
      limit: f,
      search: p,
      searchFilter: ne,
      searchScope: re,
    } = e,
    m = c !== void 0 && c,
    ae = l !== void 0 && l,
    h = d === void 0 ? [`native`] : d,
    g = ne === void 0 ? `all` : ne,
    _ = re === void 0 ? `conversation` : re,
    v = u(s),
    y = ie(Ye),
    b = ie(_e),
    x = ie(Ee),
    oe;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((oe = { name: `chatgpt` }), (t[0] = oe)) : (oe = t[0]);
  let se = fe(Se, oe).isCapable,
    S = ie(Re),
    C = fe(_ === `all` ? We : null, `2426493371`) === !0,
    [w] = (0, $.useState)(pn),
    [T] = (0, $.useState)(fn),
    ce = (0, $.useSyncExternalStore)(w.subscribe, w.getSnapshot, w.getSnapshot),
    le = fe(We, `703400933`),
    ue = ie(ut),
    E =
      le &&
      ue &&
      (_ === `conversation` || (_ === `all` && h.includes(`native`) && (g === `all` || g === `chats`))),
    de;
  t[1] === p ? (de = t[2]) : ((de = p.trim()), (t[1] = p), (t[2] = de));
  let D = de,
    O = nt(D, _n),
    k = r && se,
    A = O === D,
    j = a?.searchSessionId ?? null,
    pe = _ === `space` ? `all` : _,
    M = ae && (_ === `space` || (_ === `all` && (g === `all` || g === `pages`) && h.includes(`native`))),
    N = fe(M ? We : null, `1442582935`) === !0 ? `title_and_content` : void 0,
    me;
  t[3] !== f || t[4] !== D
    ? ((me = { search: D, limit: f }), (t[3] = f), (t[4] = D), (t[5] = me))
    : (me = t[5]);
  let he = fe(k && M && D.length > 0 ? jt : null, me),
    ge = mn({
      externalAccountKeys: o,
      includeFolders: m,
      includeDotMessages: E,
      includeLibrary: S,
      includeSpace: M,
      libraryProviders: h,
      limit: f,
      pageSearchTarget: N,
      query: D,
      searchFilter: g,
      searchScope: _,
    }),
    P = JSON.stringify([y, b, x, n, _, g, ge, ...(C ? [j, k, !0] : [])]),
    ve,
    ye;
  (t[6] !== w || t[7] !== P || t[8] !== C
    ? ((ye = () => () => {
        C && w.clear(P);
      }),
      (ve = [w, P, C]),
      (t[6] = w),
      (t[7] = P),
      (t[8] = C),
      (t[9] = ve),
      (t[10] = ye))
    : ((ve = t[9]), (ye = t[10])),
    (0, $.useLayoutEffect)(ye, ve));
  let be;
  t[11] !== o || t[12] !== S || t[13] !== h || t[14] !== _
    ? ((be = (e) => {
        if (_ !== `all`) return !0;
        let t = mt(e);
        if (t != null) {
          if (!S) return !1;
          let { provider: e, accountKey: n } = t,
            r = o?.[e];
          return (
            e !== `unknown` &&
            h.includes(e) &&
            (e === `onedrive` || r == null || (n != null && r.includes(n)))
          );
        }
        return h.includes(`native`);
      }),
      (t[11] = o),
      (t[12] = S),
      (t[13] = h),
      (t[14] = _),
      (t[15] = be))
    : (be = t[15]);
  let F = be,
    xe;
  t[16] !== E || t[17] !== M || t[18] !== S || t[19] !== g || t[20] !== _
    ? ((xe = (e) =>
        (e.source_type !== `dot_messages` || E) &&
        ((_ !== `space` && g !== `pages`) ||
          (e.source_type === `space` && e.payload.kind === `space_page`)) &&
        (e.source_type !== `space` ||
          (M && (e.payload.kind === `space_page` || (e.payload.kind === `space_file` && S)))) &&
        (_ !== `all` ||
          g === `all` ||
          (g === `chats` && e.source_type === `dot_messages`) ||
          e.source_key === St[g])),
      (t[16] = E),
      (t[17] = M),
      (t[18] = S),
      (t[19] = g),
      (t[20] = _),
      (t[21] = xe))
    : (xe = t[21]);
  let I = xe,
    Ce;
  _ === `space` ? (Ce = te.THIRTY_SECONDS) : (E || M || n != null || o != null) && (Ce = 0);
  let we = k && A && (_ !== `all` || j != null) && O.length > 0,
    L,
    R;
  t[22] === C
    ? ((L = t[23]), (R = t[24]))
    : ((L = (e, t, n, r) => {
        let i = e.responses.at(-1)?.cursor,
          a = t.flatMap(dn).slice(0, -1);
        if (!(
          i == null ||
          r.some((e) => (typeof e == `string` ? e : e?.cursor) === i) ||
          a.some((e) => e.cursor === i)
        ))
          return C ? { cursor: i, index: t.length } : i;
      }),
      (R = C ? { cursor: null, index: 0 } : null),
      (t[22] = C),
      (t[23] = L),
      (t[24] = R));
  let z;
  t[25] !== E || t[26] !== _
    ? ((z = (e) => (_ === `conversation` && !E ? e : void 0)), (t[25] = E), (t[26] = _), (t[27] = z))
    : (z = t[27]);
  let Oe;
  t[28] !== y ||
  t[29] !== b ||
  t[30] !== O ||
  t[31] !== a ||
  t[32] !== pe ||
  t[33] !== E ||
  t[34] !== M ||
  t[35] !== S ||
  t[36] !== F ||
  t[37] !== I ||
  t[38] !== N ||
  t[39] !== w ||
  t[40] !== P ||
  t[41] !== ge ||
  t[42] !== v ||
  t[43] !== g ||
  t[44] !== _ ||
  t[45] !== j ||
  t[46] !== C ||
  t[47] !== T ||
  t[48] !== x
    ? ((Oe = async (e) => {
        let { client: t, pageParam: n, queryKey: r, signal: o } = e,
          s = typeof n == `string` ? n : (n?.cursor ?? null),
          c = () =>
            (_ === `conversation` && !E) ||
            ((_ !== `all` || v.get(Re) === S) &&
              v.get(Ye) === y &&
              v.get(_e) === b &&
              v.get(Ee) === x &&
              (_ !== `all` || a?.searchSessionId === j) &&
              (!M || (v.get(De) && v.get(We, `1442582935`) === (N === `title_and_content`))) &&
              (!E || (v.get(We, `703400933`) && v.get(ut))) &&
              (!C || (v.get(We, `2426493371`) && v.get(Se, { name: `chatgpt` }).isCapable)));
        if (o.aborted || !c()) throw new i();
        let l = _ === `conversation` || ge.source_requests?.length !== 0,
          u = performance.now(),
          d = a?.issueQuery(O, P, pe, g, l && t.getQueryData(r) == null ? u : void 0) ?? null;
        if (_ === `all` && d == null) throw new i();
        let f = C ? w.start(P, o, s, typeof n == `object` && n ? n.index : 0) : void 0;
        return (async () => {
          let e = [],
            t = new Set(s == null ? [] : [s]),
            n = s;
          for (let r = 0; r < vn; r++) {
            let r;
            try {
              r = await hn({
                cursor: n,
                request: ge,
                queryId: d?.searchQueryId,
                searchScope: _,
                signal: f?.signal ?? o,
                onResponse:
                  f == null
                    ? void 0
                    : () => {
                        T.receivedResponses.add(o);
                      },
                onProgress:
                  f == null
                    ? void 0
                    : (t) => {
                        if (!f.isCurrent() || !c()) {
                          f.discard();
                          return;
                        }
                        f.publish([...e.flatMap(un), ...t.items]);
                      },
              });
            } catch (e) {
              let t = e;
              throw (
                !o.aborted &&
                  !(t instanceof i) &&
                  !(t instanceof Error && t.name === `AbortError`) &&
                  c() &&
                  v.get(Se, { name: `chatgpt` }).isCapable &&
                  a?.logQueryError(d, t),
                t
              );
            }
            if (o.aborted || f?.signal.aborted || !c()) throw new i();
            if (
              (_ === `all` && v.get(Se, { name: `chatgpt` }).isCapable && gt(v, r.items, y, x, M),
              e.push(r),
              _ === `conversation` ||
                r.items.some((e) => I(e) && F(e)) ||
                !r.cursor ||
                (_ !== `space` && r.partial_results) ||
                t.has(r.cursor))
            )
              break;
            (f?.publish(e.flatMap(ln)), (n = r.cursor), t.add(n));
          }
          if (v.get(Se, { name: `chatgpt` }).isCapable) {
            let t = e.at(-1);
            a?.logResultsReceived(
              d,
              {
                items: e.flatMap(cn),
                source_statuses: e.flatMap(sn),
                partial_results: e.some(on),
                cursor:
                  t?.cursor === s || e.slice(0, -1).some((e) => e.cursor === t?.cursor) ? null : t?.cursor,
              },
              performance.now() - u,
              l && s == null,
            );
          }
          if (f != null) {
            let t = e.at(-1)?.cursor;
            return (
              f.complete(e.flatMap(an), t == null || t === s || e.slice(0, -1).some((e) => e.cursor === t)),
              { responses: e, search: O, attemptId: f.attemptId, inputCursor: s }
            );
          }
          return { responses: e, search: O };
        })().catch((e) => {
          throw (
            f?.discard(),
            e instanceof Error && T.receivedResponses.has(o) && T.nonRetryableErrors.add(e),
            e
          );
        });
      }),
      (t[28] = y),
      (t[29] = b),
      (t[30] = O),
      (t[31] = a),
      (t[32] = pe),
      (t[33] = E),
      (t[34] = M),
      (t[35] = S),
      (t[36] = F),
      (t[37] = I),
      (t[38] = N),
      (t[39] = w),
      (t[40] = P),
      (t[41] = ge),
      (t[42] = v),
      (t[43] = g),
      (t[44] = _),
      (t[45] = j),
      (t[46] = C),
      (t[47] = T),
      (t[48] = x),
      (t[49] = Oe))
    : (Oe = t[49]);
  let B;
  t[50] !== y ||
  t[51] !== b ||
  t[52] !== n ||
  t[53] !== O ||
  t[54] !== o ||
  t[55] !== E ||
  t[56] !== m ||
  t[57] !== M ||
  t[58] !== S ||
  t[59] !== h ||
  t[60] !== f ||
  t[61] !== N ||
  t[62] !== g ||
  t[63] !== _ ||
  t[64] !== j ||
  t[65] !== C ||
  t[66] !== D ||
  t[67] !== x
    ? ((B =
        _ !== `conversation` || E
          ? [
              `chatgpt-global-search`,
              _,
              y,
              x,
              j,
              O,
              D,
              f,
              m,
              h.join(`,`),
              g,
              b,
              M,
              N ?? null,
              E,
              JSON.stringify(o) ?? null,
              n ?? null,
              S,
              ...(C ? [`streaming`] : []),
            ]
          : [`command-menu-chatgpt-global-search`, O, f]),
      (t[50] = y),
      (t[51] = b),
      (t[52] = n),
      (t[53] = O),
      (t[54] = o),
      (t[55] = E),
      (t[56] = m),
      (t[57] = M),
      (t[58] = S),
      (t[59] = h),
      (t[60] = f),
      (t[61] = N),
      (t[62] = g),
      (t[63] = _),
      (t[64] = j),
      (t[65] = C),
      (t[66] = D),
      (t[67] = x),
      (t[68] = B))
    : (B = t[68]);
  let V, ke;
  t[69] === _
    ? ((V = t[70]), (ke = t[71]))
    : ((V = _ === `space` ? { retry: !1 } : {}),
      (ke = (e) =>
        _ === `conversation` || (_ === `space` && e.state.data?.pages.some(tn)) ? te.THIRTY_SECONDS : 0),
      (t[69] = _),
      (t[70] = V),
      (t[71] = ke));
  let Ae;
  t[72] !== C || t[73] !== T
    ? ((Ae = C
        ? {
            retry: (e, t) =>
              !T.nonRetryableErrors.has(t) && !(t instanceof i) && t.name !== `AbortError` && Te(e, t),
          }
        : {}),
      (t[72] = C),
      (t[73] = T),
      (t[74] = Ae))
    : (Ae = t[74]);
  let je;
  t[75] !== Ce ||
  t[76] !== we ||
  t[77] !== L ||
  t[78] !== R ||
  t[79] !== z ||
  t[80] !== Oe ||
  t[81] !== B ||
  t[82] !== V ||
  t[83] !== ke ||
  t[84] !== Ae
    ? ((je = {
        enabled: we,
        getNextPageParam: L,
        initialPageParam: R,
        placeholderData: z,
        queryFn: Oe,
        queryKey: B,
        gcTime: Ce,
        ...V,
        staleTime: ke,
        ...Ae,
      }),
      (t[75] = Ce),
      (t[76] = we),
      (t[77] = L),
      (t[78] = R),
      (t[79] = z),
      (t[80] = Oe),
      (t[81] = B),
      (t[82] = V),
      (t[83] = ke),
      (t[84] = Ae),
      (t[85] = je))
    : (je = t[85]);
  let {
      data: H,
      isError: Me,
      isPending: Ne,
      isFetching: U,
      isFetchingNextPage: Pe,
      isFetchNextPageError: W,
      fetchNextPage: G,
      hasNextPage: K,
      refetch: Fe,
    } = ee(je),
    Ie,
    Le;
  (t[86] !== H || t[87] !== w || t[88] !== C
    ? ((Ie = () => {
        C && H != null && w.acknowledge(H.pages);
      }),
      (Le = [H, w, C]),
      (t[86] = H),
      (t[87] = w),
      (t[88] = C),
      (t[89] = Ie),
      (t[90] = Le))
    : ((Ie = t[89]), (Le = t[90])),
    (0, $.useEffect)(Ie, Le));
  let q = H?.pages[0]?.search === D,
    ze;
  t[91] === P ? (ze = t[92]) : ((ze = { queryIdentity: P, keys: null }), (t[91] = P), (t[92] = ze));
  let [Be, Ve] = (0, $.useState)(ze),
    He = C || !!he?.length,
    Ue = He && Be.queryIdentity === P ? Be.keys : null,
    Ge = ht({
      items:
        ie(_ === `all` && k && D.length > 0 ? Dt : null)?.filter((e) => {
          let { item: t } = e;
          return (!q || t.source_type !== `space`) && I(t) && F(t);
        }) ?? null,
      search: D,
      searchFilter: g,
      itemKeys: Ue ?? void 0,
    }),
    Ke = Ue ?? [...Ge, ...(he ?? [])].map(Z);
  !He && Be.keys != null
    ? Ve({ queryIdentity: P, keys: null })
    : He && (Be.queryIdentity !== P || Be.keys !== Ke) && Ve({ queryIdentity: P, keys: Ke });
  let qe = new Map([...Ge, ...(he ?? [])].map(en)),
    Je = Ke.flatMap((e) => {
      let t = qe.get(e);
      return t == null ? [] : [t];
    }),
    Xe;
  t[93] === H?.pages
    ? (Xe = t[94])
    : ((Xe = H?.pages.flatMap($t).flatMap(Qt).findLast(Zt)), (t[93] = H?.pages), (t[94] = Xe));
  let Ze = Xe,
    Qe = H?.pages.at(-1)?.responses.at(-1),
    $e = q ? H.pages.map(Yt) : [];
  if (C && ce.scopeKey === P)
    for (let e of ce.pages) (($e[e.index] = [...e.items]), e.exhausted && ($e.length = e.index + 1));
  let et = k && D.length > 0 ? $e.flat().filter(I).filter(F) : [],
    tt = et,
    J;
  t[95] === Symbol.for(`react.memo_cache_sentinel`) ? ((J = []), (t[95] = J)) : (J = t[95]);
  let rt = J;
  if (_ !== `conversation`) {
    let e = new Map();
    for (let t of et) {
      let n = Z(t);
      e.has(n) || e.set(n, t);
    }
    rt = [...Je, ...(he ?? [])].filter((t) => !e.has(Z(t)));
    let t = new Set();
    tt = [
      ...Ke.flatMap((t) => {
        let n = e.get(t),
          r = qe.get(t),
          i =
            n != null && r?.update_time != null && n.update_time != null && r.update_time > n.update_time
              ? { ...n, title: r.title, update_time: r.update_time }
              : (n ?? r);
        return i == null ? [] : [i];
      }),
      ...et,
      ...(he ?? []),
    ].filter((e) => {
      let n = Z(e);
      return !t.has(n) && (t.add(n), !0);
    });
  }
  let it = M && q && (Ze?.status !== `ok` || (Ze.incomplete_reasons?.length ?? 0) > 0),
    at =
      k &&
      D.length > 0 &&
      Je.length === 0 &&
      !he?.length &&
      (!A || Ne || (U && !Pe && (_ === `space` || !q))),
    ot = k && D.length > 0 && A && Me && !U,
    st = k && q && !W && (!C || !U) && K,
    ct = k && q && Pe,
    lt = _ !== `conversation` && Qe != null && !Qe.items.some((e) => I(e) && F(e)),
    Y;
  t[96] !== k ||
  t[97] !== G ||
  t[98] !== K ||
  t[99] !== W ||
  t[100] !== U ||
  t[101] !== Pe ||
  t[102] !== A ||
  t[103] !== C ||
  t[104] !== D
    ? ((Y = () => {
        k && A && D.length > 0 && K && !W && !Pe && (!C || !U) && G();
      }),
      (t[96] = k),
      (t[97] = G),
      (t[98] = K),
      (t[99] = W),
      (t[100] = U),
      (t[101] = Pe),
      (t[102] = A),
      (t[103] = C),
      (t[104] = D),
      (t[105] = Y))
    : (Y = t[105]);
  let dt;
  t[106] !== k ||
  t[107] !== G ||
  t[108] !== W ||
  t[109] !== Fe ||
  t[110] !== A ||
  t[111] !== C ||
  t[112] !== D
    ? ((dt = () => {
        k && A && D.length > 0 && (C && W ? G() : Fe());
      }),
      (t[106] = k),
      (t[107] = G),
      (t[108] = W),
      (t[109] = Fe),
      (t[110] = A),
      (t[111] = C),
      (t[112] = D),
      (t[113] = dt))
    : (dt = t[113]);
  let ft;
  t[114] !== k ||
  t[115] !== H ||
  t[116] !== a ||
  t[117] !== pe ||
  t[118] !== q ||
  t[119] !== P ||
  t[120] !== g ||
  t[121] !== D
    ? ((ft = (e, t, n) => {
        if (!k || H == null || !q) return;
        let r = H.pages
          .flatMap(qt)
          .find((t) => `conversation_id` in t.payload && t.payload.conversation_id === e);
        r != null &&
          a?.logResultOpen({
            globalIndex: t,
            item: r,
            openInNewTab: n,
            search: D,
            searchFilter: g,
            searchScope: pe,
            queryIdentity: P,
          });
      }),
      (t[114] = k),
      (t[115] = H),
      (t[116] = a),
      (t[117] = pe),
      (t[118] = q),
      (t[119] = P),
      (t[120] = g),
      (t[121] = D),
      (t[122] = ft))
    : (ft = t[122]);
  let pt = zt({ searchItems: tt }),
    X;
  return (
    t[123] !== rt ||
    t[124] !== P ||
    t[125] !== tt ||
    t[126] !== C ||
    t[127] !== it ||
    t[128] !== at ||
    t[129] !== ot ||
    t[130] !== st ||
    t[131] !== ct ||
    t[132] !== lt ||
    t[133] !== Y ||
    t[134] !== dt ||
    t[135] !== ft ||
    t[136] !== pt
      ? ((X = {
          queryIdentity: P,
          streamingEnabled: C,
          spaceSearchIncomplete: it,
          contentSearchPending: at,
          contentSearchError: ot,
          hasNextPage: st,
          isFetchingNextPage: ct,
          shouldLoadMoreManually: lt,
          loadNextPage: Y,
          retryContentSearch: dt,
          logResultOpen: ft,
          searchResults: pt,
          searchItems: tt,
          localSearchItems: rt,
        }),
        (t[123] = rt),
        (t[124] = P),
        (t[125] = tt),
        (t[126] = C),
        (t[127] = it),
        (t[128] = at),
        (t[129] = ot),
        (t[130] = st),
        (t[131] = ct),
        (t[132] = lt),
        (t[133] = Y),
        (t[134] = dt),
        (t[135] = ft),
        (t[136] = pt),
        (t[137] = X))
      : (X = t[137]),
    X
  );
}
function qt(e) {
  return e.responses.flatMap(Jt);
}
function Jt(e) {
  return e.items;
}
function Yt(e) {
  return e.responses.flatMap(Xt);
}
function Xt(e) {
  return e.items;
}
function Zt(e) {
  return e.source_key === `space`;
}
function Qt(e) {
  return e.source_statuses ?? [];
}
function $t(e) {
  return e.responses;
}
function en(e) {
  return [Z(e), e];
}
function tn(e) {
  return e.responses.some(nn);
}
function nn(e) {
  return e.items.some(rn);
}
function rn(e) {
  return e.payload.kind === `space_page`;
}
function an(e) {
  return e.items;
}
function on(e) {
  return e.partial_results;
}
function sn(e) {
  return e.source_statuses ?? [];
}
function cn(e) {
  return e.items;
}
function ln(e) {
  return e.items;
}
function un(e) {
  return e.items;
}
function dn(e) {
  return e.responses;
}
function fn() {
  return { receivedResponses: new WeakSet(), nonRetryableErrors: new WeakSet() };
}
function pn() {
  return new Vt();
}
function mn({
  includeDotMessages: e,
  externalAccountKeys: t,
  includeFolders: n,
  includeLibrary: r,
  includeSpace: i,
  libraryProviders: a,
  limit: o,
  pageSearchTarget: s,
  query: c,
  searchFilter: l,
  searchScope: u,
}) {
  let d = [];
  if (u === `all`) {
    let i = a.filter(
        (e) => e === `native` || e === `native_shared` || e === `onedrive` || t?.[e]?.length !== 0,
      ),
      o = Object.fromEntries(
        [`google_drive`, `box`, `dropbox`, `sharepoint`].flatMap((e) => {
          let n = t?.[e];
          return i.includes(e) && n?.length ? [[e, n]] : [];
        }),
      );
    if (
      (a.includes(`native`) &&
        (l === `all` || l === `chats`) &&
        (d.push({ type: `conversation` }), e && d.push({ type: `dot_messages` })),
      a.includes(`native`) && (l === `all` || l === `projects`) && d.push({ type: `project` }),
      r && i.length > 0 && (l === `all` || l === `images` || l === `documents`))
    ) {
      let e = n ? [`image`, `document`, `folder`] : [`image`, `document`];
      (l === `images` ? (e = [`image`]) : l === `documents` && (e = [`document`]),
        d.push({
          type: `library`,
          filters: {
            lanes: e,
            library_providers: i,
            external_account_keys: Object.keys(o).length > 0 ? o : void 0,
          },
        }));
    }
  }
  return (
    u === `conversation` && (d.push({ type: `conversation` }), e && d.push({ type: `dot_messages` })),
    i &&
      d.push({
        type: `space`,
        filters: {},
        include_files: u === `space` || l === `pages` ? !1 : void 0,
        page_search_target: s,
      }),
    { entrypoint: `global_search`, limit: o, query: c, source_requests: d }
  );
}
async function hn({
  cursor: e,
  request: t,
  queryId: n,
  searchScope: r,
  signal: i,
  onProgress: o,
  onResponse: s,
}) {
  let c = U();
  try {
    if (r !== `conversation` && t.source_requests?.length === 0)
      return { items: [], cursor: null, partial_results: !1, source_statuses: [] };
    let l;
    if (o != null) {
      let r = await V.postResponse(`/global/search`, {
        requestBody: { ...t, cursor: e, query_id: n },
        signal: i,
        additionalHeaders: { Accept: `text/event-stream` },
      });
      (s?.(), (l = await Ut(r, o, i)));
    } else
      l = await (r !== `conversation` || t.source_requests?.some((e) => e.type === `dot_messages`)
        ? V.safePost(`/global/search`, { requestBody: { ...t, cursor: e, query_id: n }, signal: i })
        : V.safeGet(`/global/search`, {
            parameters: {
              query: { cursor: e, limit: t.limit, query: t.query, query_id: n, sources: [`conversation`] },
            },
            signal: i,
          }));
    return (
      a.debug(`chatgpt_global_search_resolved`, {
        safe: {
          durationMs: Math.max(0, Math.round(U() - c)),
          itemCount: l.items.length,
          limit: t.limit,
          source: r,
        },
      }),
      l
    );
  } catch (e) {
    throw (
      i?.aborted !== !0 &&
        a.warning(`chatgpt_global_search_failed`, {
          safe: { durationMs: Math.max(0, Math.round(U() - c)), limit: t.limit, source: r },
          sensitive: { error: e },
        }),
      e
    );
  }
}
var gn, $, _n, vn;
function yn() {
  return (yn = e(() => {
    ((gn = le()),
      b(),
      f(),
      p(),
      ($ = O()),
      ge(),
      J(),
      it(),
      q(),
      rt(),
      R(),
      me(),
      Mt(),
      ue(),
      I(),
      re(),
      pe(),
      l(),
      Ie(),
      Bt(),
      F(),
      Ct(),
      kt(),
      X(),
      Ht(),
      Gt(),
      (_n = 250),
      (vn = 5));
  }))();
}
var bn;
function xn() {
  return (xn = e(() => {
    (y(),
      (bn = r({
        pageOpenFailed: {
          id: `codex.chatGptSearch.pageOpenFailed`,
          defaultMessage: `Unable to open this page`,
          description: `Toast when a Page selected from global search cannot be opened in its Space`,
        },
        dialogDescriptionWithSpaces: {
          id: `codex.chatGptSearch.dialogDescriptionWithSpaces`,
          defaultMessage: `Search your chats, projects, images, documents, and spaces`,
          description: `Visually hidden description for global search when Pages and files in Spaces are included. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        },
        spaceFile: {
          id: `codex.chatGptSearch.spaceFile`,
          defaultMessage: `File in Space`,
          description: `Result-type label beside a file found in a Space in global search. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        },
      })));
  }))();
}
function Sn(e) {
  let t = (0, Cn.c)(20),
    { highlightClassName: n, query: r, multiline: i, shouldAdjustStart: a, text: o } = e,
    s = i !== void 0 && i,
    c = a !== void 0 && a;
  if (r.length === 0) {
    let e;
    return (
      t[0] === o ? (e = t[1]) : ((e = (0, Tn.jsx)(`span`, { children: o })), (t[0] = o), (t[1] = e)),
      e
    );
  }
  let l = o;
  if (c) {
    let e;
    t[2] !== r || t[3] !== o
      ? ((e = o.toLowerCase().indexOf(r.toLowerCase())), (t[2] = r), (t[3] = o), (t[4] = e))
      : (e = t[4]);
    let n = e;
    if (n !== -1) {
      let e = Math.max(n - En, 0),
        r;
      (t[5] !== e || t[6] !== o
        ? ((r = e === 0 ? o : `…${o.substring(e)}`), (t[5] = e), (t[6] = o), (t[7] = r))
        : (r = t[7]),
        (l = r));
    }
  }
  let u = s ? void 0 : `block truncate`,
    d = l,
    f;
  if (t[8] !== n || t[9] !== l || t[10] !== r) {
    let e;
    t[12] === r ? (e = t[13]) : ((e = (0, wn.default)(r)), (t[12] = r), (t[13] = e));
    let i;
    (t[14] !== n || t[15] !== r
      ? ((i = (e, t) =>
          (0, Tn.jsx)(
            `span`,
            { className: e.toLowerCase() === r.toLowerCase() ? n : void 0, children: e },
            t,
          )),
        (t[14] = n),
        (t[15] = r),
        (t[16] = i))
      : (i = t[16]),
      (f = d.split(RegExp(`(${e})`, `gi`)).map(i)),
      (t[8] = n),
      (t[9] = l),
      (t[10] = r),
      (t[11] = f));
  } else f = t[11];
  let ee;
  return (
    t[17] !== u || t[18] !== f
      ? ((ee = (0, Tn.jsx)(`span`, { className: u, children: f })), (t[17] = u), (t[18] = f), (t[19] = ee))
      : (ee = t[19]),
    ee
  );
}
var Cn, wn, Tn, En;
function Dn() {
  return (Dn = e(() => {
    ((Cn = le()), (wn = t(Qe(), 1)), (Tn = de()), (En = 8));
  }))();
}
function On(e, t, n, r) {
  let i = e.get(Bn);
  if (i == null || (!n && t.source_key === `library:folder`)) return;
  let a = In.safeParse({ ...t, match_kind: `title` });
  if (!a.success) return;
  let o = a.data;
  M(`${An}:${i}`, {
    entries: { [JSON.stringify([o.source_key, o.id])]: { value: { item: o, isLocalResult: r } } },
    maxEntries: jn,
  });
}
var kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn;
function Un() {
  return (Un = e(() => {
    ((kn = t(T(), 1)),
      p(),
      c(),
      J(),
      lt(),
      F(),
      tt(),
      rt(),
      ye(),
      ue(),
      at(),
      I(),
      ot(),
      Ze(),
      (An = `chatgpt-search-recent-items-v1`),
      (jn = 10),
      (Mn = 3),
      (Nn = m()
        .min(1)
        .refine((e) => L(e) == null)),
      (Pn = C({ id: m().min(1), title: m(), update_time: g().nullish(), match_kind: n(`title`) })),
      (Fn = C({
        access_kind: n(`owned`).nullish(),
        parent_directory_id: m().nullish(),
        is_shared: ae().nullish(),
        provider: n(`native`).nullish(),
      }).refine((e) => e.access_kind === `owned` || e.is_shared !== !0)),
      (In = d([
        Pn.extend({
          source_type: n(`conversation`),
          source_key: n(`conversation`),
          payload: C({
            kind: n(`conversation`).default(`conversation`),
            conversation_id: m().min(1),
            message_id: m().nullish(),
            is_archived: ae().optional(),
          }),
        }),
        Pn.extend({
          source_type: n(`project`),
          source_key: n(`project`),
          payload: C({
            kind: n(`project`).default(`project`),
            project_id: m().min(1),
            emoji: m().nullish(),
            theme: m().nullish(),
            is_shared: ae(),
          }),
        }),
        Pn.extend({
          source_type: n(`library`),
          source_key: se([`library:image`, `library:document`]),
          payload: Fn.safeExtend({
            kind: n(`library_file`).default(`library_file`),
            library_item_id: Nn,
            file_id: Nn,
            file_name: m(),
            gizmo_id: m().nullish(),
            mime_type: m().nullish(),
            file_extension: m().nullish(),
            file_size_bytes: g().nullish(),
            cloud_doc_url: m().nullish(),
            library_artifact_type: m()
              .nullish()
              .refine((e) => e !== `site`),
            library_file_category: se([`image`, `video`, `audio`, `pdf`, `text`, `other`]),
            state: se([`created`, `indexing`, `ready`, `failed`]),
            thumbnail_url: m().nullish(),
          }),
        }),
        Pn.extend({
          source_type: n(`library`),
          source_key: n(`library:folder`),
          payload: Fn.safeExtend({ kind: n(`library_folder`).default(`library_folder`), directory_id: Nn }),
        }),
      ]).transform((e) => {
        switch (e.payload.kind) {
          case `conversation`:
            e.id = e.payload.conversation_id;
            break;
          case `project`:
            e.id = e.payload.project_id;
            break;
          case `library_file`:
            e.id = e.payload.library_item_id;
            break;
          case `library_folder`:
            e.id = e.payload.directory_id;
        }
        return e;
      })),
      (Ln = C({ item: In, isLocalResult: ae() })),
      (Rn = E(m(), ne()).transform((e) =>
        Object.values(e)
          .reverse()
          .flatMap((e) => {
            let t = Ln.safeParse(e);
            return t.success ? [t.data] : [];
          })
          .slice(0, jn),
      )),
      (zn = W((e) => `${An}:${e}`, void 0)),
      (Bn = S(s, ({ get: e }) => {
        let t = e(_e),
          n = e(Ee);
        return !e(Fe) || !t || !n ? null : JSON.stringify([n, t, e(Ye)]);
      })),
      (Vn = S(s, ({ get: e }) => {
        let { data: t } = e(B, !0, { enabled: !1 }),
          { data: n } = e(et, !0, { enabled: !1 });
        if (t != null || n != null)
          return (0, kn.default)(
            [...(t?.pages.flatMap((e) => e.items) ?? []), ...(n?.pages.flatMap((e) => e.items) ?? [])]
              .map((t) => ({
                conversation: t,
                recencyAt: ct({
                  clientRecencyAt: e(Ae, t.id),
                  createTime: t.create_time,
                  updateTime: t.update_time,
                }),
              }))
              .sort((e, t) => t.recencyAt - e.recencyAt),
            ({ conversation: e }) => e.id,
          );
      })),
      (Hn = S(s, ({ get: e }) => {
        let t = e(Bn);
        if (t == null) return null;
        let n = e(Re) && e(We, `1453178174`);
        return (Rn.safeParse(e(zn, t)).data ?? [])
          .filter(({ item: e }) => n || e.source_key !== `library:folder`)
          .slice(0, Mn);
      })));
  }))();
}
export {
  Z as _,
  Sn as a,
  pt as b,
  bn as c,
  Rt as d,
  Ft as f,
  kt as g,
  Ot as h,
  On as i,
  yn as l,
  At as m,
  Hn as n,
  Dn as o,
  Mt as p,
  Un as r,
  xn as s,
  Vn as t,
  Kt as u,
  Ct as v,
  X as x,
  _t as y,
};
//# sourceMappingURL=recents-14dcda6ffe45.js.map
