import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $A as n,
  $Rt as r,
  $St as i,
  $st as a,
  Amt as o,
  Bst as s,
  CCt as c,
  CNt as l,
  FBt as u,
  HFt as d,
  LNt as f,
  LRt as ee,
  NLt as p,
  ORt as te,
  PBt as m,
  Qst as h,
  RFt as g,
  SLt as _,
  Uot as v,
  VRt as y,
  Vot as b,
  XCt as x,
  XOt as ne,
  YCt as re,
  YOt as ie,
  ZSt as S,
  ezt as C,
  hRt as w,
  hst as ae,
  iCt as oe,
  kRt as T,
  mst as se,
  nCt as ce,
  rj as le,
  sct as ue,
  yCt as E,
  zFt as de,
  zst as fe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AZn as D,
  Abn as O,
  BRr as pe,
  CIr as k,
  CLr as A,
  C_n as j,
  Cxn as M,
  DKn as N,
  Ebn as me,
  Exn as P,
  FL as he,
  GQn as F,
  Gdn as ge,
  H_r as _e,
  Hcn as I,
  IL as ve,
  ILr as ye,
  IMr as be,
  Ibn as xe,
  Jln as Se,
  LLr as L,
  Lbn as Ce,
  Mbn as we,
  Mkr as R,
  Nbn as Te,
  Nkr as Ee,
  Obn as De,
  Op as Oe,
  Pbn as z,
  Q$r as B,
  Rbn as V,
  Rlr as ke,
  SIr as H,
  Tp as U,
  Ucn as Ae,
  VPn as W,
  WQn as G,
  W_r as K,
  Zdn as je,
  Zkr as q,
  _Xn as Me,
  _an as Ne,
  bIr as J,
  cqn as Pe,
  dPr as Fe,
  eAr as Y,
  hDr as X,
  hdn as Ie,
  iRr as Le,
  jLr as Re,
  jbn as ze,
  kKn as Be,
  kLr as Z,
  kZn as Ve,
  kbn as He,
  lBr as Ue,
  lpn as We,
  lqn as Ge,
  mXn as Ke,
  mlr as qe,
  nMr as Je,
  njr as Ye,
  nmn as Xe,
  nun as Ze,
  oun as Qe,
  tjr as $e,
  tmn as et,
  tyr as tt,
  uBr as nt,
  uPr as rt,
  upn as it,
  van as at,
  w0n as ot,
  wLr as st,
  xIr as ct,
  y_n as lt,
  zLr as ut,
  zRr as dt,
} from "./app-initial-ad16eaadf81f.js";
import { t as ft } from "./content-reference-markers-3636d17c94e6.js";
import { n as pt, t as mt } from "./cached-page-metadata-4ec7d429eb36.js";
var Q, ht, gt, _t, vt;
function yt() {
  return (yt = e(() => {
    ((Q = t(l(), 1)),
      S(),
      st(),
      a(),
      J(),
      L(),
      Je(),
      Qe(),
      z(),
      (ht = 4),
      (gt = c(h, ({ get: e }) => {
        let t = e(be),
          n = e(pe);
        if (t == null || n == null) return [];
        let r = e(O) ?? ye(`chatgpt-search-results-v2`, void 0),
          i = e(Se, !0, { enabled: !1 }).data,
          a = new Set(i?.pages.flatMap((e) => e.items.map((e) => e.id)));
        return [...Object.values(r ?? {}).filter(({ item: e }) => ze(e)), ...e(He)].filter(
          ({ accountId: e, userId: r, item: i }) =>
            e === t && r === n && (!(`conversation_id` in i.payload) || a.has(i.payload.conversation_id)),
        );
      })),
      (_t = c(h, ({ get: e }) =>
        e(gt).toSorted(
          (e, t) =>
            (t.item.update_time ?? 0) - (e.item.update_time ?? 0) || t.item.id.localeCompare(e.item.id),
        ),
      )),
      (vt = c(h, ({ get: e }) =>
        !e(A) || (e(ct, `383746455`)?.get(`disable_recent_files`, !0) ?? !0)
          ? []
          : (0, Q.default)(
              e(gt)
                .filter(({ item: e }) => e.source_type === `library`)
                .sort(
                  (e, t) =>
                    (t.item.update_time ?? 0) - (e.item.update_time ?? 0) ||
                    (t.cachedAt ?? 0) - (e.cachedAt ?? 0),
                ),
              ({ item: e }) => Te(e),
            )
              .slice(0, ht)
              .map(({ item: e }) => e),
      )));
  }))();
}
var bt, xt;
function St() {
  return (St = e(() => {
    (S(),
      H(),
      a(),
      pt(),
      We(),
      lt(),
      he(),
      Ie(),
      at(),
      (bt = c(h, ({ get: e }) => {
        let t = e(je, { enabled: !1 }).data;
        if (t == null) return;
        let n = new Set(t.items.map((e) => e.root_page_id));
        return j(
          e(ge)?.items ?? [],
          e(ve)?.flatMap(({ pageId: t }) => {
            let n = e(mt, t);
            return n == null ? [] : [n];
          }) ?? [],
        ).flatMap((e) =>
          it(e.page_id) || n.has(e.page_id) || e.access.can_read === !1 || e.deleted_at != null
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
      (xt = E(h, ({ search: e, limit: t }, { get: n }) => {
        let r = n(k);
        return (
          n(bt)
            ?.toSorted(
              (e, t) =>
                Date.parse(t.updatedAt ?? ``) - Date.parse(e.updatedAt ?? ``) ||
                e.pageId.localeCompare(t.pageId),
            )
            .flatMap((t) => {
              if (t.title.trim()) return [];
              let n = r.formatMessage(Ne(t.documentType));
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
function Ct(e) {
  let t = X(e).replace(/\uE200(?:filecite|cite)\uE202[^\uE200\uE201]*$/, ``),
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
    } else u = D(t, l).endIndex;
    t[u] === `)` && u++;
    let d = t[o - 1] === `!` ? o - 1 : o;
    ((n += t.slice(r, d) + t.slice(o + 1, e)), (r = u), (i.length = 0), (e = u - 1));
  }
  return (n + t.slice(r)).replace(/[ \t]{2,}/g, ` `).trim();
}
function wt() {
  return (wt = e(() => {
    (Ve(), ft());
  }))();
}
function Tt(e, t, n, r) {
  let { payload: i } = e,
    a = {
      rawItem: e,
      title: e.source_type === `conversation` ? (Pe(e.title) ?? n) : e.title.trim(),
      updateTime: e.update_time,
      snippet: e.snippet == null ? e.snippet : Ct(e.snippet),
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
      (s = b(i.conversation_id)),
      t.trim().length > 0)
    ) {
      let e = new URLSearchParams({ src: `history_search` });
      (i.message_id && (e.set(`messageId`, i.message_id), e.set(`historySearchQuery`, t.trim())),
        (s += `?${e}`));
    }
  } else if (`library_item_id` in i) {
    let e = Et(i),
      n = Ce(i);
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
      (s = q(i.project_id)));
  else if (i.kind === `dot_message`) ((o = { ...a, kind: `dot_message` }), (s = Dt(i)));
  else if (i.kind === `space_page`)
    ((o = { ...a, kind: `space_page` }), (s = `/space/${encodeURIComponent(i.page_id)}`));
  else if (i.kind === `space_file`)
    ((o = { ...a, kind: `space_file` }), (s = `/library/file/${encodeURIComponent(i.file_id)}`));
  else return null;
  return { item: o, query: t, href: s };
}
function Et(e) {
  let t = [e.library_item_id, e.file_id].map((e) => e.replace(/^file-library:/u, ``)),
    r = t.map(U).find((e) => e != null)?.provider;
  if (r == null && t.some((e) => e.startsWith(`external-`))) return null;
  let i = n({ libraryProvider: e.library_provider ?? e.provider });
  return r == null ||
    i === r ||
    (e.library_provider == null && (i == null || (i === `sharepoint` && r === `onedrive`)))
    ? (r ?? i)
    : null;
}
function Dt(e) {
  let t = new URLSearchParams({ roomId: e.room_id, messageId: e.message_id });
  return `${R(e.thread_id)}?${t}`;
}
function Ot() {
  return (Ot = e(() => {
    (le(), Ge(), Y(), V(), v(), Oe(), Ee(), wt());
  }))();
}
function kt({ searchItems: e }) {
  return e.flatMap((e) => {
    let t = e.title.trim() || null,
      n = e.snippet == null ? e.snippet : Ct(e.snippet);
    return e.payload.kind === `dot_message`
      ? [
          {
            kind: `dot`,
            item: e,
            href: Dt(e.payload),
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
function At() {
  return (At = e(() => {
    (wt(), Ot());
  }))();
}
var jt;
function Mt() {
  return (Mt = e(() => {
    jt = class {
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
async function Nt(e, t, n) {
  try {
    if (
      (n.throwIfAborted(),
      e.headers.get(`content-type`)?.split(`;`)[0]?.trim().toLowerCase() !== `text/event-stream`)
    ) {
      let t = await e.json();
      return (n.throwIfAborted(), et.parse(t));
    }
    if (e.body == null) throw new Pt();
    let r = !1;
    for await (let i of o(
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
      if ((n.throwIfAborted(), i.event !== `progress` && i.event !== `complete`)) throw new Pt();
      let e = et.parse(JSON.parse(y().parse(i.data)));
      if (i.event === `complete`) return e;
      t(e);
    }
    throw new Pt();
  } catch {
    throw (n.throwIfAborted(), new Pt());
  } finally {
    e.body?.cancel().catch(() => void 0);
  }
}
var Pt;
function Ft() {
  return (Ft = e(() => {
    (ue(),
      d(),
      Xe(),
      (Pt = class extends Error {
        constructor() {
          (super(`Global Search response did not complete.`), (this.name = `GlobalSearchStreamError`));
        }
      }));
  }))();
}
function It(e) {
  let t = (0, on.c)(138),
    {
      connectionScopeKey: n,
      enabled: r,
      eventLogger: a,
      externalAccountKeys: o,
      includeFolders: s,
      includeSpace: c,
      libraryProviders: l,
      limit: u,
      search: d,
      searchFilter: f,
      searchScope: ee,
    } = e,
    p = s !== void 0 && s,
    te = c !== void 0 && c,
    m = l === void 0 ? [`native`] : l,
    g = f === void 0 ? `all` : f,
    _ = ee === void 0 ? `conversation` : ee,
    v = i(h),
    y = oe(be),
    b = oe(dt),
    x = oe(pe),
    ne;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((ne = { name: `chatgpt` }), (t[0] = ne)) : (ne = t[0]);
  let ie = ce($e, ne).isCapable,
    S = oe(Be),
    C = ce(_ === `all` ? nt : null, `2426493371`) === !0,
    [w] = (0, $.useState)(nn),
    [T] = (0, $.useState)(tn),
    se = (0, $.useSyncExternalStore)(w.subscribe, w.getSnapshot, w.getSnapshot),
    le = ce(nt, `703400933`),
    ue = oe(_e),
    E =
      le &&
      ue &&
      (_ === `conversation` || (_ === `all` && m.includes(`native`) && (g === `all` || g === `chats`))),
    de;
  t[1] === d ? (de = t[2]) : ((de = d.trim()), (t[1] = d), (t[2] = de));
  let D = de,
    O = Ae(D, sn),
    k = r && ie,
    A = O === D,
    j = a?.searchSessionId ?? null,
    M = _ === `space` ? `all` : _,
    N = te && (_ === `space` || (_ === `all` && (g === `all` || g === `pages`) && m.includes(`native`))),
    P = ce(N ? nt : null, `1442582935`) === !0 ? `title_and_content` : void 0,
    he;
  t[3] !== u || t[4] !== D
    ? ((he = { search: D, limit: u }), (t[3] = u), (t[4] = D), (t[5] = he))
    : (he = t[5]);
  let F = ce(k && N && D.length > 0 ? xt : null, he),
    ge = rn({
      externalAccountKeys: o,
      includeFolders: p,
      includeDotMessages: E,
      includeLibrary: S,
      includeSpace: N,
      libraryProviders: m,
      limit: u,
      pageSearchTarget: P,
      query: D,
      searchFilter: g,
      searchScope: _,
    }),
    I = JSON.stringify([y, b, x, n, _, g, ge, ...(C ? [j, k, !0] : [])]),
    ve,
    ye;
  (t[6] !== w || t[7] !== I || t[8] !== C
    ? ((ye = () => () => {
        C && w.clear(I);
      }),
      (ve = [w, I, C]),
      (t[6] = w),
      (t[7] = I),
      (t[8] = C),
      (t[9] = ve),
      (t[10] = ye))
    : ((ve = t[9]), (ye = t[10])),
    (0, $.useLayoutEffect)(ye, ve));
  let Se;
  t[11] !== o || t[12] !== S || t[13] !== m || t[14] !== _
    ? ((Se = (e) => {
        if (_ !== `all`) return !0;
        let t = xe(e);
        if (t != null) {
          if (!S) return !1;
          let { provider: e, accountKey: n } = t,
            r = o?.[e];
          return (
            e !== `unknown` &&
            m.includes(e) &&
            (e === `onedrive` || r == null || (n != null && r.includes(n)))
          );
        }
        return m.includes(`native`);
      }),
      (t[11] = o),
      (t[12] = S),
      (t[13] = m),
      (t[14] = _),
      (t[15] = Se))
    : (Se = t[15]);
  let L = Se,
    Ce;
  t[16] !== E || t[17] !== N || t[18] !== S || t[19] !== g || t[20] !== _
    ? ((Ce = (e) =>
        (e.source_type !== `dot_messages` || E) &&
        ((_ !== `space` && g !== `pages`) ||
          (e.source_type === `space` && e.payload.kind === `space_page`)) &&
        (e.source_type !== `space` ||
          (N && (e.payload.kind === `space_page` || (e.payload.kind === `space_file` && S)))) &&
        (_ !== `all` ||
          g === `all` ||
          (g === `chats` && e.source_type === `dot_messages`) ||
          e.source_key === me[g])),
      (t[16] = E),
      (t[17] = N),
      (t[18] = S),
      (t[19] = g),
      (t[20] = _),
      (t[21] = Ce))
    : (Ce = t[21]);
  let R = Ce,
    Ee;
  _ === `space` ? (Ee = fe.THIRTY_SECONDS) : (E || N || n != null || o != null) && (Ee = 0);
  let Oe = k && A && (_ !== `all` || j != null) && O.length > 0,
    z,
    B;
  t[22] === C
    ? ((z = t[23]), (B = t[24]))
    : ((z = (e, t, n, r) => {
        let i = e.responses.at(-1)?.cursor,
          a = t.flatMap(en).slice(0, -1);
        if (!(
          i == null ||
          r.some((e) => (typeof e == `string` ? e : e?.cursor) === i) ||
          a.some((e) => e.cursor === i)
        ))
          return C ? { cursor: i, index: t.length } : i;
      }),
      (B = C ? { cursor: null, index: 0 } : null),
      (t[22] = C),
      (t[23] = z),
      (t[24] = B));
  let V;
  t[25] !== E || t[26] !== _
    ? ((V = (e) => (_ === `conversation` && !E ? e : void 0)), (t[25] = E), (t[26] = _), (t[27] = V))
    : (V = t[27]);
  let H;
  t[28] !== y ||
  t[29] !== b ||
  t[30] !== O ||
  t[31] !== a ||
  t[32] !== M ||
  t[33] !== E ||
  t[34] !== N ||
  t[35] !== S ||
  t[36] !== L ||
  t[37] !== R ||
  t[38] !== P ||
  t[39] !== w ||
  t[40] !== I ||
  t[41] !== ge ||
  t[42] !== v ||
  t[43] !== g ||
  t[44] !== _ ||
  t[45] !== j ||
  t[46] !== C ||
  t[47] !== T ||
  t[48] !== x
    ? ((H = async (e) => {
        let { client: t, pageParam: n, queryKey: r, signal: i } = e,
          o = typeof n == `string` ? n : (n?.cursor ?? null),
          s = () =>
            (_ === `conversation` && !E) ||
            ((_ !== `all` || v.get(Be) === S) &&
              v.get(be) === y &&
              v.get(dt) === b &&
              v.get(pe) === x &&
              (_ !== `all` || a?.searchSessionId === j) &&
              (!N || (v.get(ke) && v.get(nt, `1442582935`) === (P === `title_and_content`))) &&
              (!E || (v.get(nt, `703400933`) && v.get(_e))) &&
              (!C || (v.get(nt, `2426493371`) && v.get($e, { name: `chatgpt` }).isCapable)));
        if (i.aborted || !s()) throw new re();
        let c = _ === `conversation` || ge.source_requests?.length !== 0,
          l = performance.now(),
          u = a?.issueQuery(O, I, M, g, c && t.getQueryData(r) == null ? l : void 0) ?? null;
        if (_ === `all` && u == null) throw new re();
        let d = C ? w.start(I, i, o, typeof n == `object` && n ? n.index : 0) : void 0;
        return (async () => {
          let e = [],
            t = new Set(o == null ? [] : [o]),
            n = o;
          for (let r = 0; r < cn; r++) {
            let r;
            try {
              r = await an({
                cursor: n,
                request: ge,
                queryId: u?.searchQueryId,
                searchScope: _,
                signal: d?.signal ?? i,
                onResponse:
                  d == null
                    ? void 0
                    : () => {
                        T.receivedResponses.add(i);
                      },
                onProgress:
                  d == null
                    ? void 0
                    : (t) => {
                        if (!d.isCurrent() || !s()) {
                          d.discard();
                          return;
                        }
                        d.publish([...e.flatMap($t), ...t.items]);
                      },
              });
            } catch (e) {
              let t = e;
              throw (
                !i.aborted &&
                  !(t instanceof re) &&
                  !(t instanceof Error && t.name === `AbortError`) &&
                  s() &&
                  v.get($e, { name: `chatgpt` }).isCapable &&
                  a?.logQueryError(u, t),
                t
              );
            }
            if (i.aborted || d?.signal.aborted || !s()) throw new re();
            if (
              (_ === `all` && v.get($e, { name: `chatgpt` }).isCapable && De(v, r.items, y, x, N),
              e.push(r),
              _ === `conversation` ||
                r.items.some((e) => R(e) && L(e)) ||
                !r.cursor ||
                (_ !== `space` && r.partial_results) ||
                t.has(r.cursor))
            )
              break;
            (d?.publish(e.flatMap(Qt)), (n = r.cursor), t.add(n));
          }
          if (v.get($e, { name: `chatgpt` }).isCapable) {
            let t = e.at(-1);
            a?.logResultsReceived(
              u,
              {
                items: e.flatMap(Zt),
                source_statuses: e.flatMap(Xt),
                partial_results: e.some(Yt),
                cursor:
                  t?.cursor === o || e.slice(0, -1).some((e) => e.cursor === t?.cursor) ? null : t?.cursor,
              },
              performance.now() - l,
              c && o == null,
            );
          }
          if (d != null) {
            let t = e.at(-1)?.cursor;
            return (
              d.complete(e.flatMap(Jt), t == null || t === o || e.slice(0, -1).some((e) => e.cursor === t)),
              { responses: e, search: O, attemptId: d.attemptId, inputCursor: o }
            );
          }
          return { responses: e, search: O };
        })().catch((e) => {
          throw (
            d?.discard(),
            e instanceof Error && T.receivedResponses.has(i) && T.nonRetryableErrors.add(e),
            e
          );
        });
      }),
      (t[28] = y),
      (t[29] = b),
      (t[30] = O),
      (t[31] = a),
      (t[32] = M),
      (t[33] = E),
      (t[34] = N),
      (t[35] = S),
      (t[36] = L),
      (t[37] = R),
      (t[38] = P),
      (t[39] = w),
      (t[40] = I),
      (t[41] = ge),
      (t[42] = v),
      (t[43] = g),
      (t[44] = _),
      (t[45] = j),
      (t[46] = C),
      (t[47] = T),
      (t[48] = x),
      (t[49] = H))
    : (H = t[49]);
  let U;
  t[50] !== y ||
  t[51] !== b ||
  t[52] !== n ||
  t[53] !== O ||
  t[54] !== o ||
  t[55] !== E ||
  t[56] !== p ||
  t[57] !== N ||
  t[58] !== S ||
  t[59] !== m ||
  t[60] !== u ||
  t[61] !== P ||
  t[62] !== g ||
  t[63] !== _ ||
  t[64] !== j ||
  t[65] !== C ||
  t[66] !== D ||
  t[67] !== x
    ? ((U =
        _ !== `conversation` || E
          ? [
              `chatgpt-global-search`,
              _,
              y,
              x,
              j,
              O,
              D,
              u,
              p,
              m.join(`,`),
              g,
              b,
              N,
              P ?? null,
              E,
              JSON.stringify(o) ?? null,
              n ?? null,
              S,
              ...(C ? [`streaming`] : []),
            ]
          : [`command-menu-chatgpt-global-search`, O, u]),
      (t[50] = y),
      (t[51] = b),
      (t[52] = n),
      (t[53] = O),
      (t[54] = o),
      (t[55] = E),
      (t[56] = p),
      (t[57] = N),
      (t[58] = S),
      (t[59] = m),
      (t[60] = u),
      (t[61] = P),
      (t[62] = g),
      (t[63] = _),
      (t[64] = j),
      (t[65] = C),
      (t[66] = D),
      (t[67] = x),
      (t[68] = U))
    : (U = t[68]);
  let W, G;
  t[69] === _
    ? ((W = t[70]), (G = t[71]))
    : ((W = _ === `space` ? { retry: !1 } : {}),
      (G = (e) =>
        _ === `conversation` || (_ === `space` && e.state.data?.pages.some(Gt)) ? fe.THIRTY_SECONDS : 0),
      (t[69] = _),
      (t[70] = W),
      (t[71] = G));
  let K;
  t[72] !== C || t[73] !== T
    ? ((K = C
        ? {
            retry: (e, t) =>
              !T.nonRetryableErrors.has(t) && !(t instanceof re) && t.name !== `AbortError` && Fe(e, t),
          }
        : {}),
      (t[72] = C),
      (t[73] = T),
      (t[74] = K))
    : (K = t[74]);
  let je;
  t[75] !== Ee ||
  t[76] !== Oe ||
  t[77] !== z ||
  t[78] !== B ||
  t[79] !== V ||
  t[80] !== H ||
  t[81] !== U ||
  t[82] !== W ||
  t[83] !== G ||
  t[84] !== K
    ? ((je = {
        enabled: Oe,
        getNextPageParam: z,
        initialPageParam: B,
        placeholderData: V,
        queryFn: H,
        queryKey: U,
        gcTime: Ee,
        ...W,
        staleTime: G,
        ...K,
      }),
      (t[75] = Ee),
      (t[76] = Oe),
      (t[77] = z),
      (t[78] = B),
      (t[79] = V),
      (t[80] = H),
      (t[81] = U),
      (t[82] = W),
      (t[83] = G),
      (t[84] = K),
      (t[85] = je))
    : (je = t[85]);
  let {
      data: q,
      isError: Me,
      isPending: Ne,
      isFetching: J,
      isFetchingNextPage: Pe,
      isFetchNextPageError: Y,
      fetchNextPage: X,
      hasNextPage: Ie,
      refetch: Le,
    } = ae(je),
    Re,
    ze;
  (t[86] !== q || t[87] !== w || t[88] !== C
    ? ((Re = () => {
        C && q != null && w.acknowledge(q.pages);
      }),
      (ze = [q, w, C]),
      (t[86] = q),
      (t[87] = w),
      (t[88] = C),
      (t[89] = Re),
      (t[90] = ze))
    : ((Re = t[89]), (ze = t[90])),
    (0, $.useEffect)(Re, ze));
  let Z = q?.pages[0]?.search === D,
    Ve;
  t[91] === I ? (Ve = t[92]) : ((Ve = { queryIdentity: I, keys: null }), (t[91] = I), (t[92] = Ve));
  let [He, Ue] = (0, $.useState)(Ve),
    We = C || !!F?.length,
    Ge = We && He.queryIdentity === I ? He.keys : null,
    Ke = we({
      items:
        oe(_ === `all` && k && D.length > 0 ? _t : null)?.filter((e) => {
          let { item: t } = e;
          return (!Z || t.source_type !== `space`) && R(t) && L(t);
        }) ?? null,
      search: D,
      searchFilter: g,
      itemKeys: Ge ?? void 0,
    }),
    qe = Ge ?? [...Ke, ...(F ?? [])].map(Te);
  !We && He.keys != null
    ? Ue({ queryIdentity: I, keys: null })
    : We && (He.queryIdentity !== I || He.keys !== qe) && Ue({ queryIdentity: I, keys: qe });
  let Je = new Map([...Ke, ...(F ?? [])].map(Wt)),
    Ye = qe.flatMap((e) => {
      let t = Je.get(e);
      return t == null ? [] : [t];
    }),
    Xe;
  t[93] === q?.pages
    ? (Xe = t[94])
    : ((Xe = q?.pages.flatMap(Ut).flatMap(Ht).findLast(Vt)), (t[93] = q?.pages), (t[94] = Xe));
  let Ze = Xe,
    Qe = q?.pages.at(-1)?.responses.at(-1),
    et = Z ? q.pages.map(zt) : [];
  if (C && se.scopeKey === I)
    for (let e of se.pages) ((et[e.index] = [...e.items]), e.exhausted && (et.length = e.index + 1));
  let tt = k && D.length > 0 ? et.flat().filter(R).filter(L) : [],
    rt = tt,
    it;
  t[95] === Symbol.for(`react.memo_cache_sentinel`) ? ((it = []), (t[95] = it)) : (it = t[95]);
  let at = it;
  if (_ !== `conversation`) {
    let e = new Map();
    for (let t of tt) {
      let n = Te(t);
      e.has(n) || e.set(n, t);
    }
    at = [...Ye, ...(F ?? [])].filter((t) => !e.has(Te(t)));
    let t = new Set();
    rt = [
      ...qe.flatMap((t) => {
        let n = e.get(t),
          r = Je.get(t),
          i =
            n != null && r?.update_time != null && n.update_time != null && r.update_time > n.update_time
              ? { ...n, title: r.title, update_time: r.update_time }
              : (n ?? r);
        return i == null ? [] : [i];
      }),
      ...tt,
      ...(F ?? []),
    ].filter((e) => {
      let n = Te(e);
      return !t.has(n) && (t.add(n), !0);
    });
  }
  let ot = N && Z && (Ze?.status !== `ok` || (Ze.incomplete_reasons?.length ?? 0) > 0),
    st =
      k && D.length > 0 && Ye.length === 0 && !F?.length && (!A || Ne || (J && !Pe && (_ === `space` || !Z))),
    ct = k && D.length > 0 && A && Me && !J,
    lt = k && Z && !Y && (!C || !J) && Ie,
    ut = k && Z && Pe,
    ft = _ !== `conversation` && Qe != null && !Qe.items.some((e) => R(e) && L(e)),
    pt;
  t[96] !== k ||
  t[97] !== X ||
  t[98] !== Ie ||
  t[99] !== Y ||
  t[100] !== J ||
  t[101] !== Pe ||
  t[102] !== A ||
  t[103] !== C ||
  t[104] !== D
    ? ((pt = () => {
        k && A && D.length > 0 && Ie && !Y && !Pe && (!C || !J) && X();
      }),
      (t[96] = k),
      (t[97] = X),
      (t[98] = Ie),
      (t[99] = Y),
      (t[100] = J),
      (t[101] = Pe),
      (t[102] = A),
      (t[103] = C),
      (t[104] = D),
      (t[105] = pt))
    : (pt = t[105]);
  let mt;
  t[106] !== k ||
  t[107] !== X ||
  t[108] !== Y ||
  t[109] !== Le ||
  t[110] !== A ||
  t[111] !== C ||
  t[112] !== D
    ? ((mt = () => {
        k && A && D.length > 0 && (C && Y ? X() : Le());
      }),
      (t[106] = k),
      (t[107] = X),
      (t[108] = Y),
      (t[109] = Le),
      (t[110] = A),
      (t[111] = C),
      (t[112] = D),
      (t[113] = mt))
    : (mt = t[113]);
  let Q;
  t[114] !== k ||
  t[115] !== q ||
  t[116] !== a ||
  t[117] !== M ||
  t[118] !== Z ||
  t[119] !== I ||
  t[120] !== g ||
  t[121] !== D
    ? ((Q = (e, t, n) => {
        if (!k || q == null || !Z) return;
        let r = q.pages
          .flatMap(Lt)
          .find((t) => `conversation_id` in t.payload && t.payload.conversation_id === e);
        r != null &&
          a?.logResultOpen({
            globalIndex: t,
            item: r,
            openInNewTab: n,
            search: D,
            searchFilter: g,
            searchScope: M,
            queryIdentity: I,
          });
      }),
      (t[114] = k),
      (t[115] = q),
      (t[116] = a),
      (t[117] = M),
      (t[118] = Z),
      (t[119] = I),
      (t[120] = g),
      (t[121] = D),
      (t[122] = Q))
    : (Q = t[122]);
  let ht = kt({ searchItems: rt }),
    gt;
  return (
    t[123] !== at ||
    t[124] !== I ||
    t[125] !== rt ||
    t[126] !== C ||
    t[127] !== ot ||
    t[128] !== st ||
    t[129] !== ct ||
    t[130] !== lt ||
    t[131] !== ut ||
    t[132] !== ft ||
    t[133] !== pt ||
    t[134] !== mt ||
    t[135] !== Q ||
    t[136] !== ht
      ? ((gt = {
          queryIdentity: I,
          streamingEnabled: C,
          spaceSearchIncomplete: ot,
          contentSearchPending: st,
          contentSearchError: ct,
          hasNextPage: lt,
          isFetchingNextPage: ut,
          shouldLoadMoreManually: ft,
          loadNextPage: pt,
          retryContentSearch: mt,
          logResultOpen: Q,
          searchResults: ht,
          searchItems: rt,
          localSearchItems: at,
        }),
        (t[123] = at),
        (t[124] = I),
        (t[125] = rt),
        (t[126] = C),
        (t[127] = ot),
        (t[128] = st),
        (t[129] = ct),
        (t[130] = lt),
        (t[131] = ut),
        (t[132] = ft),
        (t[133] = pt),
        (t[134] = mt),
        (t[135] = Q),
        (t[136] = ht),
        (t[137] = gt))
      : (gt = t[137]),
    gt
  );
}
function Lt(e) {
  return e.responses.flatMap(Rt);
}
function Rt(e) {
  return e.items;
}
function zt(e) {
  return e.responses.flatMap(Bt);
}
function Bt(e) {
  return e.items;
}
function Vt(e) {
  return e.source_key === `space`;
}
function Ht(e) {
  return e.source_statuses ?? [];
}
function Ut(e) {
  return e.responses;
}
function Wt(e) {
  return [Te(e), e];
}
function Gt(e) {
  return e.responses.some(Kt);
}
function Kt(e) {
  return e.items.some(qt);
}
function qt(e) {
  return e.payload.kind === `space_page`;
}
function Jt(e) {
  return e.items;
}
function Yt(e) {
  return e.partial_results;
}
function Xt(e) {
  return e.source_statuses ?? [];
}
function Zt(e) {
  return e.items;
}
function Qt(e) {
  return e.items;
}
function $t(e) {
  return e.items;
}
function en(e) {
  return e.responses;
}
function tn() {
  return { receivedResponses: new WeakSet(), nonRetryableErrors: new WeakSet() };
}
function nn() {
  return new jt();
}
function rn({
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
async function an({
  cursor: e,
  request: t,
  queryId: n,
  searchScope: r,
  signal: i,
  onProgress: a,
  onResponse: o,
}) {
  let s = G();
  try {
    if (r !== `conversation` && t.source_requests?.length === 0)
      return { items: [], cursor: null, partial_results: !1, source_statuses: [] };
    let c;
    if (a != null) {
      let r = await Le.postResponse(`/global/search`, {
        requestBody: { ...t, cursor: e, query_id: n },
        signal: i,
        additionalHeaders: { Accept: `text/event-stream` },
      });
      (o?.(), (c = await Nt(r, a, i)));
    } else
      c = await (r !== `conversation` || t.source_requests?.some((e) => e.type === `dot_messages`)
        ? Le.safePost(`/global/search`, { requestBody: { ...t, cursor: e, query_id: n }, signal: i })
        : Le.safeGet(`/global/search`, {
            parameters: {
              query: { cursor: e, limit: t.limit, query: t.query, query_id: n, sources: [`conversation`] },
            },
            signal: i,
          }));
    return (
      de.debug(`chatgpt_global_search_resolved`, {
        safe: {
          durationMs: Math.max(0, Math.round(G() - s)),
          itemCount: c.items.length,
          limit: t.limit,
          source: r,
        },
      }),
      c
    );
  } catch (e) {
    throw (
      i?.aborted !== !0 &&
        de.warning(`chatgpt_global_search_failed`, {
          safe: { durationMs: Math.max(0, Math.round(G() - s)), limit: t.limit, source: r },
          sensitive: { error: e },
        }),
      e
    );
  }
}
var on, $, sn, cn;
function ln() {
  return (ln = e(() => {
    ((on = m()),
      x(),
      se(),
      S(),
      ($ = u()),
      Ye(),
      st(),
      F(),
      tt(),
      N(),
      K(),
      qe(),
      St(),
      a(),
      Ue(),
      g(),
      rt(),
      s(),
      I(),
      At(),
      Je(),
      z(),
      yt(),
      V(),
      Mt(),
      Ft(),
      (sn = 250),
      (cn = 5));
  }))();
}
var un;
function dn() {
  return (dn = e(() => {
    (ne(),
      (un = ie({
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
function fn(e) {
  let t = (0, mn.c)(16),
    { highlightClassName: n, query: r, multiline: i, shouldAdjustStart: a, text: o } = e,
    s = i !== void 0 && i,
    c = a !== void 0 && a,
    l,
    u,
    d;
  if (t[0] !== n || t[1] !== s || t[2] !== r || t[3] !== c || t[4] !== o) {
    d = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = c ? pn(o, r) : o;
      if (r.length === 0) {
        d = (0, gn.jsx)(`span`, { children: e });
        break bb0;
      }
      l = s ? void 0 : `block truncate`;
      let i;
      t[8] === r ? (i = t[9]) : ((i = (0, hn.default)(r)), (t[8] = r), (t[9] = i));
      let a;
      (t[10] !== n || t[11] !== r
        ? ((a = (e, t) =>
            (0, gn.jsx)(
              `span`,
              { className: e.toLowerCase() === r.toLowerCase() ? n : void 0, children: e },
              t,
            )),
          (t[10] = n),
          (t[11] = r),
          (t[12] = a))
        : (a = t[12]),
        (u = e.split(RegExp(`(${i})`, `gi`)).map(a)));
    }
    ((t[0] = n), (t[1] = s), (t[2] = r), (t[3] = c), (t[4] = o), (t[5] = l), (t[6] = u), (t[7] = d));
  } else ((l = t[5]), (u = t[6]), (d = t[7]));
  if (d !== Symbol.for(`react.early_return_sentinel`)) return d;
  let f;
  return (
    t[13] !== l || t[14] !== u
      ? ((f = (0, gn.jsx)(`span`, { className: l, children: u })), (t[13] = l), (t[14] = u), (t[15] = f))
      : (f = t[15]),
    f
  );
}
function pn(e, t) {
  let n = e.toLowerCase().indexOf(t.toLowerCase()),
    r = Math.max(n - _n, 0),
    i = e.charCodeAt(r);
  r > 0 && i >= 56320 && i <= 57343 && r--;
  let a = r > 0 ? `…` : ``,
    o = 0;
  for (let t of e.slice(r)) {
    if (o === vn) return `${a}…`;
    ((a += t), o++);
  }
  return a;
}
var mn, hn, gn, _n, vn;
function yn() {
  return (yn = e(() => {
    ((mn = m()), (hn = t(B(), 1)), (gn = f()), (_n = 8), (vn = 600));
  }))();
}
function bn(e, t, n, r) {
  let i = e.get(Mn);
  if (i == null || (!n && t.source_key === `library:folder`)) return;
  let a = On.safeParse({ ...t, match_kind: `title` });
  if (!a.success) return;
  let o = a.data;
  ut(`${Sn}:${i}`, {
    entries: { [JSON.stringify([o.source_key, o.id])]: { value: { item: o, isLocalResult: r } } },
    maxEntries: Cn,
  });
}
var xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn;
function Fn() {
  return (Fn = e(() => {
    ((xn = t(l(), 1)),
      S(),
      d(),
      st(),
      W(),
      Je(),
      Qe(),
      N(),
      Me(),
      a(),
      P(),
      Ue(),
      L(),
      Z(),
      (Sn = `chatgpt-search-recent-items-v1`),
      (Cn = 10),
      (wn = 3),
      (Tn = y()
        .min(1)
        .refine((e) => Ke(e) == null)),
      (En = T({ id: y().min(1), title: y(), update_time: te().nullish(), match_kind: w(`title`) })),
      (Dn = T({
        access_kind: w(`owned`).nullish(),
        parent_directory_id: y().nullish(),
        is_shared: p().nullish(),
        provider: w(`native`).nullish(),
      }).refine((e) => e.access_kind === `owned` || e.is_shared !== !0)),
      (On = r([
        En.extend({
          source_type: w(`conversation`),
          source_key: w(`conversation`),
          payload: T({
            kind: w(`conversation`).default(`conversation`),
            conversation_id: y().min(1),
            message_id: y().nullish(),
            is_archived: p().optional(),
          }),
        }),
        En.extend({
          source_type: w(`project`),
          source_key: w(`project`),
          payload: T({
            kind: w(`project`).default(`project`),
            project_id: y().min(1),
            emoji: y().nullish(),
            theme: y().nullish(),
            is_shared: p(),
          }),
        }),
        En.extend({
          source_type: w(`library`),
          source_key: _([`library:image`, `library:document`]),
          payload: Dn.safeExtend({
            kind: w(`library_file`).default(`library_file`),
            library_item_id: Tn,
            file_id: Tn,
            file_name: y(),
            gizmo_id: y().nullish(),
            mime_type: y().nullish(),
            file_extension: y().nullish(),
            file_size_bytes: te().nullish(),
            cloud_doc_url: y().nullish(),
            library_artifact_type: y()
              .nullish()
              .refine((e) => e !== `site`),
            library_file_category: _([`image`, `video`, `audio`, `pdf`, `text`, `other`]),
            state: _([`created`, `indexing`, `ready`, `failed`]),
            thumbnail_url: y().nullish(),
          }),
        }),
        En.extend({
          source_type: w(`library`),
          source_key: w(`library:folder`),
          payload: Dn.safeExtend({ kind: w(`library_folder`).default(`library_folder`), directory_id: Tn }),
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
      (kn = T({ item: On, isLocalResult: p() })),
      (An = ee(y(), C()).transform((e) =>
        Object.values(e)
          .reverse()
          .flatMap((e) => {
            let t = kn.safeParse(e);
            return t.success ? [t.data] : [];
          })
          .slice(0, Cn),
      )),
      (jn = Re((e) => `${Sn}:${e}`, void 0)),
      (Mn = c(h, ({ get: e }) => {
        let t = e(dt),
          n = e(pe);
        return !e(A) || !t || !n ? null : JSON.stringify([n, t, e(be)]);
      })),
      (Nn = c(h, ({ get: e }) => {
        let { data: t } = e(Se, !0, { enabled: !1 }),
          { data: n } = e(Ze, !0, { enabled: !1 });
        if (t != null || n != null)
          return (0, xn.default)(
            [...(t?.pages.flatMap((e) => e.items) ?? []), ...(n?.pages.flatMap((e) => e.items) ?? [])]
              .map((t) => ({
                conversation: t,
                recencyAt: M({
                  clientRecencyAt: e(ot, t.id),
                  createTime: t.create_time,
                  updateTime: t.update_time,
                }),
              }))
              .sort((e, t) => t.recencyAt - e.recencyAt),
            ({ conversation: e }) => e.id,
          );
      })),
      (Pn = c(h, ({ get: e }) => {
        let t = e(Mn);
        if (t == null) return null;
        let n = e(Be) && e(nt, `1453178174`);
        return (An.safeParse(e(jn, t)).data ?? [])
          .filter(({ item: e }) => n || e.source_key !== `library:folder`)
          .slice(0, wn);
      })));
  }))();
}
export {
  fn as a,
  un as c,
  Ot as d,
  Tt as f,
  yt as g,
  vt as h,
  bn as i,
  ln as l,
  bt as m,
  Pn as n,
  yn as o,
  St as p,
  Fn as r,
  dn as s,
  Nn as t,
  It as u,
};
//# sourceMappingURL=recents-b9b12fa68a1e.js.map
