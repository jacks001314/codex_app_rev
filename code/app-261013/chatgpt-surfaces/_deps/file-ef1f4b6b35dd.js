const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./private-source-follow-up-f5aee4c8e9ae.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./source-app-availability-7cce636e07b6.js",
      "./question-input-3e04d46e5157.js",
      "./hosted-template-result-ca98998c06b4.js",
      "./entry-bcd44f5f7343.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  $x as r,
  Ak as i,
  B4 as a,
  BA as o,
  CPt as s,
  Dat as c,
  EPt as l,
  Eat as u,
  Ew as d,
  HA as f,
  IDt as p,
  Ixt as ee,
  Kat as m,
  PA as h,
  Pxt as g,
  RLt as _,
  SI as v,
  SPt as y,
  TJ as b,
  TLt as x,
  Trt as S,
  Tw as te,
  UA as ne,
  VDt as re,
  WA as C,
  YA as w,
  ZA as T,
  Zxt as E,
  _xt as ie,
  bI as ae,
  cz as D,
  eS as oe,
  eU as se,
  fLt as O,
  fPt as k,
  fSt as ce,
  frt as A,
  hot as le,
  hrt as ue,
  i3 as j,
  jDt as M,
  jk as de,
  lot as fe,
  nSt as pe,
  pIt as N,
  pLt as P,
  pPt as F,
  qA as me,
  qat as he,
  r3 as ge,
  sz as _e,
  t3 as ve,
  tU as ye,
  vxt as I,
  vzt as be,
  xI as xe,
  xMt as L,
  xrt as Se,
  yMt as Ce,
  yzt as we,
  z4 as Te,
  zA as Ee,
  zxt as De,
} from "./app-shared-bbfeca5e5737.js";
import {
  $f as Oe,
  A3t as ke,
  AGn as Ae,
  Cwr as je,
  DGn as Me,
  DOn as Ne,
  Dur as Pe,
  ELn as Fe,
  Ep as Ie,
  Eur as Le,
  Fl as Re,
  G6t as R,
  GLn as ze,
  HXn as z,
  IGn as B,
  Il as Be,
  Mp as Ve,
  NZn as He,
  Np as Ue,
  QDr as We,
  RLn as Ge,
  SWn as Ke,
  Sjn as qe,
  Sqn as Je,
  ULn as Ye,
  VGn as V,
  WGn as Xe,
  XDr as Ze,
  Xl as Qe,
  Ymr as H,
  Zl as $e,
  _Pn as et,
  _u as tt,
  bIt as nt,
  bS as rt,
  bWn as it,
  bl as at,
  cp as U,
  eOr as ot,
  ehr as st,
  ep as W,
  fWn as G,
  fft as ct,
  gu as lt,
  gwr as K,
  iZn as ut,
  inr as q,
  ip as dt,
  jGn as ft,
  jp as pt,
  kGn as mt,
  nFn as ht,
  nc as J,
  np as gt,
  pWn as _t,
  pZn as vt,
  pft as yt,
  rc as bt,
  rnr as xt,
  sp as St,
  tFn as Ct,
  tc as wt,
  tp as Tt,
  uPn as Et,
  vIt as Dt,
  vPn as Ot,
  vl as kt,
  wOn as At,
  wp as jt,
  xqn as Mt,
  xwr as Nt,
  yIt as Pt,
  yS as Ft,
  yjn as It,
  zZn as Lt,
} from "./app-initial-5851df3f6cb1.js";
import { n as Rt, r as zt } from "./chatgpt-artifact-interaction-analytics-a06882245677.js";
import { n as Bt, t as Y } from "./citation-pill-feee232e708d.js";
import { a as Vt, r as Ht, t as Ut } from "./fallback-5d67e3271b11.js";
import { n as Wt, t as Gt } from "./chatgpt-google-file-title-query-1294bbdf2af9.js";
import { i as Kt, n as qt, r as Jt, t as Yt } from "./inline-link-aa89c0848eb0.js";
import { i as Xt, n as Zt, r as Qt, t as $t } from "./hover-card-9545e4d8488c.js";
import { n as en, t as tn } from "./source-app-availability-7cce636e07b6.js";
var nn;
function rn() {
  return (rn = e(() => {
    (l(),
      (nn = P({
        type: n(`file`),
        id: x().min(1),
        name: x().min(1),
        connector_id: x().min(1),
        start_idx: O().optional(),
        cloud_doc_url: x().nullish(),
        extra: P({ cloud_doc_url: x().nullish() }).nullish(),
        snippet: x().nullish(),
        medical_file_reference: P({
          source_label: x().min(1),
          journal_name: x().nullish(),
          authors_display: x().nullish(),
          publication_year: x().nullish(),
          source_url: x().nullish(),
          journal_homepage_url: x().nullish(),
          source_icon_url: x().nullish(),
          doi: x().nullish(),
        }),
        drug_file_reference: _().nullish(),
      }).refine(
        (e) =>
          !e.cloud_doc_url &&
          !e.extra?.cloud_doc_url &&
          !e.medical_file_reference?.journal_name &&
          !e.medical_file_reference?.authors_display &&
          !e.medical_file_reference?.publication_year &&
          !e.medical_file_reference?.source_url &&
          !e.medical_file_reference?.journal_homepage_url &&
          !e.medical_file_reference?.source_icon_url &&
          !e.medical_file_reference?.doi &&
          e.drug_file_reference == null,
      )));
  }))();
}
function an(e, t) {
  let n = [],
    r = new Map(),
    i = new Map(),
    a = new Map();
  for (let o of t ?? []) {
    let t = [];
    for (let { webMetadata: a, ...s } of sn(e, o)) {
      let e = r.get(s.sourceKey);
      if (e == null)
        ((e = { ...s, number: n.length + 1 }),
          n.push(e),
          r.set(e.sourceKey, e),
          a != null && i.set(e.sourceKey, a));
      else if (a != null) {
        let t = i.get(e.sourceKey);
        t != null &&
          ((t.title = t.title ?? a.title),
          (t.sourceName = t.sourceName ?? a.sourceName),
          (t.attribution = t.attribution ?? a.attribution),
          (e.title = t.title ?? e.title),
          (e.sourceName = t.sourceName ?? t.attribution ?? dn(e.url)),
          (e.displayLabel = t.attribution ?? e.sourceName ?? e.title),
          (e.authors = e.authors ?? s.authors),
          (e.dateDisplay = e.dateDisplay ?? s.dateDisplay),
          (e.snippet = e.snippet ?? s.snippet));
      }
      t.includes(e) || t.push(e);
    }
    a.set(o, t);
  }
  return { sources: n, sourcesByReference: a };
}
function on(e, t, n, r, i) {
  let a = t?.[n];
  if (a == null || a.style === `hidden` || sn(e, a).length === 0) return;
  let o = (e) => (r == null ? i : r[e]),
    s = o(n),
    c = t?.[n - 1];
  if (c != null && c.style !== `hidden` && s != null && o(n - 1) === s && sn(e, c).length > 0 && mn(c, a))
    return { isLeading: !1, sources: [] };
  let l = an(e, t),
    u = new Set(),
    d = a;
  for (let e = n; ; e += 1) {
    for (let e of l.sourcesByReference.get(d) ?? []) u.add(e);
    let n = t?.[e + 1];
    if (
      n == null ||
      n.style === `hidden` ||
      s == null ||
      o(e + 1) !== s ||
      !l.sourcesByReference.get(n)?.length ||
      !mn(d, n)
    )
      break;
    d = n;
  }
  return { isLeading: !0, sources: [...u] };
}
function sn(e, t) {
  if (t.type === `file`) {
    if (nn.safeParse(t).success) return [];
    let n = gn.safeParse(t);
    if (!n.success) return [];
    let r = n.data,
      i = r.medical_file_reference,
      a = r.drug_file_reference;
    if (i == null && a == null) return [];
    let o = r.cloud_doc_url ?? r.extra?.cloud_doc_url ?? i?.source_url ?? i?.journal_homepage_url,
      s = un(o),
      c = a == null ? (i?.journal_name ?? i?.source_label) : `U.S. National Library of Medicine: DailyMed`,
      l = a == null ? (i?.source_label ?? c) : `DailyMed`,
      u = e.formatMessage({
        id: `clinicalCitation.sourceFallback`,
        defaultMessage: `Source`,
        description: `Fallback label for a clinical citation with no title, publisher, or URL`,
      }),
      d = r.title ?? r.name ?? a?.title ?? l ?? c ?? dn(o) ?? u,
      f = c ?? dn(o) ?? d;
    return [
      {
        sourceKey: `file:${r.id.toLowerCase()}`,
        title: d,
        displayLabel: l ?? f,
        sourceName: f,
        dateDisplay: a == null ? i?.publication_year : pn(e, a.effective_time),
        authors: i?.authors_display,
        doi: i?.doi,
        url: s,
        iconUrl: un(i?.source_icon_url ?? i?.source_url ?? i?.journal_homepage_url ?? o),
        snippet: r.snippet,
      },
    ];
  }
  if (t.type === `webpage` || t.type === `webpage_extended`) {
    let n = cn(e, t);
    return n == null ? [] : [n];
  }
  if (t.type !== `grouped_webpages` || t.style === `hidden` || t.status === `loading` || t.status === `error`)
    return [];
  let n = vn.safeParse(t);
  return n.success
    ? n.data.items.flatMap((t) =>
        [t, ...(t.supporting_websites ?? [])].flatMap((t) => {
          let n = cn(e, t);
          return n == null ? [] : [n];
        }),
      )
    : [];
}
function cn(e, t) {
  let n = _n.safeParse(t);
  if (!n.success) return;
  let r = n.data,
    i = un(r.url);
  if (i == null) return;
  let a = r.source_name ?? r.attribution ?? dn(i);
  return {
    webMetadata: { title: r.title, sourceName: r.source_name, attribution: r.attribution },
    sourceKey: `url:${i.toLowerCase()}`,
    title: r.title ?? i,
    displayLabel: r.attribution ?? a ?? r.title ?? i,
    sourceName: a,
    authors: ln(r.authors),
    dateDisplay: r.pub_date == null ? void 0 : fn(e, new Date(r.pub_date * 1e3)),
    url: i,
    iconUrl: i,
    snippet: r.snippet,
  };
}
function ln(e) {
  let t = e?.map((e) => e.trim()).filter(Boolean);
  if (t?.length) return t.length === 1 ? t[0] : t.length === 2 ? `${t[0]} & ${t[1]}` : `${t[0]}, et al.`;
}
function un(e) {
  if (!(e == null || /^file:\/\//i.test(e))) {
    try {
      if (new URL(e).hostname === `localhost`) return;
    } catch {}
    return w(e);
  }
}
function dn(e) {
  if (e != null)
    try {
      return new URL(e).hostname.replace(`www.`, ``);
    } catch {
      return e;
    }
}
function fn(e, t) {
  return Number.isNaN(t.getTime())
    ? void 0
    : new Intl.DateTimeFormat(e.locale, { year: `numeric`, month: `short`, day: `numeric` }).format(t);
}
function pn(e, t) {
  let n = t?.match(/^(\d{4})-?(\d{2})-?(\d{2})$/);
  if (n == null) return t;
  let r = Number(n[1]),
    i = Number(n[2]),
    a = Number(n[3]),
    o = new Date(r, i - 1, a);
  return o.getFullYear() === r && o.getMonth() === i - 1 && o.getDate() === a ? fn(e, o) : t;
}
function mn(e, t) {
  return (
    typeof e.start_idx == `number` &&
    typeof e.end_idx == `number` &&
    typeof t.start_idx == `number` &&
    typeof t.end_idx == `number` &&
    t.start_idx - e.end_idx <= 1
  );
}
var X, hn, gn, _n, vn;
function yn() {
  return (yn = e(() => {
    (l(),
      rn(),
      T(),
      (X = x()
        .trim()
        .nullish()
        .transform((e) => e || void 0)),
      (hn = P({
        journal_name: X,
        source_label: X,
        authors_display: X,
        publication_year: X,
        source_url: X,
        journal_homepage_url: X,
        source_icon_url: X,
        doi: X,
      })),
      (gn = P({
        id: x().trim().min(1),
        title: X,
        name: X,
        snippet: X,
        cloud_doc_url: X,
        extra: P({ cloud_doc_url: X }).nullish(),
        medical_file_reference: hn.nullish(),
        drug_file_reference: P({ title: X, effective_time: X }).nullish(),
      })),
      (_n = P({
        url: x().trim().min(1),
        title: X,
        source_name: X,
        authors: N(x().catch(``)).nullish(),
        attribution: X,
        pub_date: O().nullish(),
        snippet: X,
      })),
      (vn = P({ items: N(P({ supporting_websites: N(_()).nullish() }).loose()) })));
  }))();
}
async function bn(e, t) {
  try {
    let { post: n } = await H.safeGet(`/share/post/resolve/{post_id}`, {
      parameters: { path: { post_id: encodeURIComponent(e) } },
      signal: t,
    });
    return { status: `ready`, post: n };
  } catch (e) {
    if ((t?.throwIfAborted(), !(e instanceof ue))) throw e;
    let n = e.diagnosticError;
    if (n instanceof Se) {
      let t = P({ message: x().optional(), reason: x().optional(), code: x().optional() }).safeParse(
        n.detail,
      ).data;
      if (n.jsonError === `no_permission` || (e.status === 403 && t?.message === `no_permission`))
        return { status: `unavailable`, reason: `workspace` };
      if (t?.reason === `deleted` || t?.code === `shared_post_deleted`)
        return { status: `unavailable`, reason: `deleted` };
    }
    if (e.status >= 500) throw e;
    return { status: `unavailable`, reason: `not_found` };
  }
}
function xn() {
  return (xn = e(() => {
    (l(), S(), A(), st());
  }))();
}
function Sn(e, t) {
  let n = e.attachments[0],
    r;
  if (n?.kind === `media_generation`) {
    if (e.attachments.length !== 1 || n.output_blocked || n.asset_pointer == null || n.messages == null)
      return null;
    let t = n.asset_pointer.split(`?`)[0],
      i = n.messages;
    if (
      !i.some(
        (e, n) =>
          e.author.role === `assistant` &&
          typeof e.recipient == `string` &&
          i
            .slice(n + 1)
            .some(
              (n) =>
                n.author.role === `tool` &&
                n.author.name === e.recipient &&
                n.content.content_type === `multimodal_text` &&
                n.content.parts.some(
                  (e) =>
                    typeof e != `string` &&
                    `content_type` in e &&
                    e.content_type === `image_asset_pointer` &&
                    e.asset_pointer.split(`?`)[0] === t,
                ),
            ),
      )
    )
      return null;
    r = i;
  } else if (
    e.attachments.length > 0 &&
    e.attachments.every(
      (e) => (e.kind === `message_slice` || e.kind === `deep_research`) && e.messages.length > 0,
    )
  )
    r = e.attachments.flatMap((e) =>
      e.kind === `message_slice` || e.kind === `deep_research` ? e.messages : [],
    );
  else return null;
  let i = { id: `y-root`, message: null, parent: null, children: [] },
    a = [i],
    o = new Set([i.id]);
  for (let e of r) {
    if (!e.id || o.has(e.id)) return null;
    (o.add(e.id), (i.children = [e.id]));
    let t = { id: e.id, message: e, parent: i.id, children: [] };
    (a.push(t), (i = t));
  }
  return {
    conversation_id: t,
    current_node: i.id,
    mapping: Object.fromEntries(a.map((e) => [e.id, e])),
    linear_conversation: a,
    title: null,
    moderation_results: [],
    moderation_state: {},
    has_user_editable_context: !1,
    is_public: !1,
    is_indexable: !1,
    continue_conversation_url: ``,
  };
}
function Cn() {
  return (Cn = e(() => {}))();
}
function wn(e, t, n) {
  let r = Sn(t, n);
  return r == null ? null : (qe(e, { conversation: r, conversationId: n, post: t }), n);
}
function Tn(e, t, n) {
  let r = t.attachments[0]?.kind,
    i = { post_id: t.id, is_authenticated: n };
  (r != null && (i.attachment_type = r),
    e.get(ot).logEventWithStatsig?.(`chatgpt_share_post_download_clicked`, i),
    We(e, Dt, {
      actionType: Pt.CHATGPT_SHARED_POST_RECEIVER_ACTION_TYPE_DOWNLOAD_CLICKED,
      postId: t.id,
      attachmentKind: r,
      legacyStatsigEventName: `chatgpt_share_post_download_clicked`,
    }));
}
var En, Dn, On, kn;
function An() {
  return (An = e(() => {
    (nt(),
      g(),
      ie(),
      Ze(),
      je(),
      Je(),
      It(),
      xn(),
      (En = E(K, (e, { scope: t }) => {
        let n = I(`/s/:postId`, t.value.pathname)?.params.postId;
        return {
          enabled: n != null && !n.startsWith(`cx_`) && e != null && !e.isLoading,
          queryKey: [`chatgpt-shared-post`, n, e?.userId, e?.accountId],
          queryFn: ({ signal: e }) => (n == null ? Promise.resolve(null) : bn(n, e)),
          gcTime: 0,
          staleTime: 0,
          retry: !1,
          refetchInterval: (e) => {
            let t = e.state.data;
            return t?.status === `ready` &&
              t.post.attachments.some(
                (e) =>
                  e.kind === `message_slice` &&
                  e.messages.some((e) =>
                    Object.values(Mt(e.metadata)?.widgets ?? {}).some(
                      (e) => typeof e?.poll_id == `string` && e.lifecycle === `published`,
                    ),
                  ),
              )
              ? 5e3
              : !1;
          },
        };
      })),
      (Dn = pe(K, (e, { get: t, scope: n }) => {
        if (e == null || e.isLoading || I(`/s/:postId`, n.value.pathname) == null) return null;
        let { data: r, isError: i } = t(En, e);
        return r?.status === `ready` && !i ? r.post : null;
      })),
      (On = ce(K, [])),
      (kn = ce(K, () => null)));
  }))();
}
function jn(e) {
  return V(e.name) ?? V(e.file_name) ?? z(e);
}
function Mn(e) {
  let t = V(e.id);
  return t == null ? null : `https://chatgpt.com/library/d/${encodeURIComponent(t)}`;
}
function Nn(e) {
  return (
    e.type === `file` &&
    e.source === `my_files` &&
    e.api_tool_source === `files/list` &&
    e.library_file_id === null &&
    V(e.id) != null &&
    jn(e) != null
  );
}
function Pn() {
  return (Pn = e(() => {
    ut();
  }))();
}
function Fn(e) {
  let t = (0, Rn.c)(34),
    { reference: n } = e,
    r = ee(K),
    i = bt(),
    a = (0, zn.useContext)(Qe) === `restricted`,
    o;
  t[0] === n.name ? (o = t[1]) : ((o = V(n.name)), (t[0] = n.name), (t[1] = o));
  let s = o,
    c = Mn(n),
    l = (0, zn.useRef)(null),
    u = i?.savedContentResponse,
    d = i?.shouldBlockExternalEgress === !0,
    f = u != null && c != null && !d ? v(c) : null,
    p;
  t[2] !== f || t[3] !== u || t[4] !== r
    ? ((p = () => {
        Be(r, l, u, f);
      }),
      (t[2] = f),
      (t[3] = u),
      (t[4] = r),
      (t[5] = p))
    : (p = t[5]);
  let m = (0, zn.useEffectEvent)(p),
    h;
  t[6] === m
    ? (h = t[7])
    : ((h = () => {
        m();
      }),
      (t[6] = m),
      (t[7] = h));
  let g = f?.id,
    _ = f?.kind,
    y = u?.conversationId,
    b = u?.responseId,
    x = u?.savedContentBackend,
    S;
  if (
    (t[8] !== g || t[9] !== _ || t[10] !== y || t[11] !== b || t[12] !== x
      ? ((S = [g, _, y, b, x]), (t[8] = g), (t[9] = _), (t[10] = y), (t[11] = b), (t[12] = x), (t[13] = S))
      : (S = t[13]),
    (0, zn.useEffect)(h, S),
    s == null || c == null)
  ) {
    let e;
    return (
      t[14] === n ? (e = t[15]) : ((e = (0, Z.jsx)(Ut, { reference: n })), (t[14] = n), (t[15] = e)),
      e
    );
  }
  let te;
  t[16] !== f || t[17] !== c || t[18] !== d || t[19] !== s || t[20] !== a || t[21] !== u || t[22] !== r
    ? ((te = d
        ? (0, Z.jsx)(Y, {
            ariaLabel: s,
            disabled: !0,
            icon: (0, Z.jsx)(se, {}),
            isTerminalInline: !0,
            label: s,
            testId: `chatgpt-library-folder-citation`,
            variant: `file`,
            onClick: In,
          })
        : (0, Z.jsx)(Y, {
            ariaLabel: s,
            href: c,
            icon: (0, Z.jsx)(se, {}),
            isTerminalInline: !0,
            label: s,
            requiresConfirmation: a,
            testId: `chatgpt-library-folder-citation`,
            variant: `file`,
            onActivate: () => {
              Be(r, l, u, f, !0);
            },
          })),
      (t[16] = f),
      (t[17] = c),
      (t[18] = d),
      (t[19] = s),
      (t[20] = a),
      (t[21] = u),
      (t[22] = r),
      (t[23] = te))
    : (te = t[23]);
  let ne = te,
    re;
  t[24] !== s || t[25] !== n ? ((re = Ln(n, s)), (t[24] = s), (t[25] = n), (t[26] = re)) : (re = t[26]);
  let C = re;
  if (C == null) return ne;
  let w;
  t[27] !== ne || t[28] !== C.prefix || t[29] !== C.suffix
    ? ((w = (0, Z.jsxs)(Z.Fragment, { children: [C.prefix, ne, C.suffix] })),
      (t[27] = ne),
      (t[28] = C.prefix),
      (t[29] = C.suffix),
      (t[30] = w))
    : (w = t[30]);
  let T = w,
    E;
  return (
    t[31] !== T || t[32] !== C.isInlineCode
      ? ((E = C.isInlineCode ? (0, Z.jsx)(`code`, { children: T }) : T),
        (t[31] = T),
        (t[32] = C.isInlineCode),
        (t[33] = E))
      : (E = t[33]),
    E
  );
}
function In() {}
function Ln(e, t) {
  let n = V(e.matched_text),
    r = V(e.library_path);
  if (n == null || r == null) return null;
  let i = n.match(/^`+/)?.[0],
    a = i != null && n.endsWith(i),
    o = a ? n.slice(i.length, -i.length) : n,
    s = r.split(`/`).filter(Boolean);
  if (s.length < 2 || s.at(-1) !== t) return null;
  let c = s.join(`/`);
  if (
    !new Set([
      `/${c}`,
      c,
      `/${c}/`,
      `${c}/`,
      `Library/${c}`,
      ...[` / `, ` > `, ` → `, ` › `].map((e) => s.join(e)),
    ]).has(o)
  )
    return null;
  let l = o.lastIndexOf(t);
  return { isInlineCode: a, prefix: o.slice(0, l), suffix: o.slice(l + t.length) };
}
var Rn, zn, Z;
function Bn() {
  return (Bn = e(() => {
    ((Rn = be()), ae(), g(), (zn = we()), b(), Bt(), $e(), Re(), je(), J(), Vt(), Pn(), (Z = L()));
  }))();
}
function Vn(e) {
  let t = (0, Un.c)(29),
    { source: n } = e,
    r = ee(K),
    i = bt(),
    [a, o] = (0, Wn.useState)(``),
    [s, c] = (0, Wn.useState)(!1),
    l = (0, Wn.useContext)(Qe),
    u;
  t[0] !== l || t[1] !== r.value
    ? ((u = Nt(r.value) != null && l !== `restricted`), (t[0] = l), (t[1] = r.value), (t[2] = u))
    : (u = t[2]);
  let d = u,
    f = De(d ? en : null, n.connector_id),
    p = !d || !f,
    m;
  t[3] !== p || t[4] !== s || t[5] !== a || t[6] !== n || t[7] !== i
    ? ((m =
        !p &&
        i != null &&
        !i.isReadOnly &&
        !i.shouldBlockExternalEgress &&
        !i.renderRestrictedWidgets &&
        !i.renderRestrictedModelResponses
          ? (0, Gn.jsx)(
              Kn,
              { source: n, question: a, onQuestionChange: o, turn: i, pending: s, onPendingChange: c },
              n.id,
            )
          : void 0),
      (t[3] = p),
      (t[4] = s),
      (t[5] = a),
      (t[6] = n),
      (t[7] = i),
      (t[8] = m))
    : (m = t[8]);
  let h = n.snippet ?? void 0,
    g;
  t[9] !== n.name || t[10] !== h
    ? ((g = { title: n.name, body: h }), (t[9] = n.name), (t[10] = h), (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] !== n.name || t[13] !== g
    ? ((_ = { title: n.name, hoverCard: g }), (t[12] = n.name), (t[13] = g), (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] === n.connector_id
    ? (v = t[16])
    : ((v = (0, Gn.jsx)(Qt, { appId: n.connector_id })), (t[15] = n.connector_id), (t[16] = v));
  let y = n.medical_file_reference?.source_label ?? n.name,
    b;
  t[17] !== p || t[18] !== n.name || t[19] !== v || t[20] !== y
    ? ((b = (0, Gn.jsx)(Y, {
        ariaLabel: n.name,
        disabled: p,
        icon: v,
        label: y,
        variant: `file`,
        testId: `chatgpt-private-source-citation`,
        onClick: Hn,
      })),
      (t[17] = p),
      (t[18] = n.name),
      (t[19] = v),
      (t[20] = y),
      (t[21] = b))
    : (b = t[21]);
  let x;
  return (
    t[22] !== p || t[23] !== s || t[24] !== n.connector_id || t[25] !== m || t[26] !== _ || t[27] !== b
      ? ((x = (0, Gn.jsx)($t, {
          disabled: p,
          openOnClick: !0,
          closeOnTriggerClick: !1,
          keepOpen: s,
          followUp: m,
          metadata: _,
          sourceAppId: n.connector_id,
          children: b,
        })),
        (t[22] = p),
        (t[23] = s),
        (t[24] = n.connector_id),
        (t[25] = m),
        (t[26] = _),
        (t[27] = b),
        (t[28] = x))
      : (x = t[28]),
    x
  );
}
function Hn(e) {
  return e.currentTarget.focus();
}
var Un, Wn, Gn, Kn;
function qn() {
  return (qn = e(() => {
    ((Un = be()),
      g(),
      (Wn = we()),
      Te(),
      Bt(),
      $e(),
      Zt(),
      tn(),
      Xt(),
      je(),
      J(),
      (Gn = L()),
      F(),
      (Kn = a(
        async () =>
          (
            await k(
              async () => {
                let { PrivateSourceFollowUp: e } = await import(`./private-source-follow-up-f5aee4c8e9ae.js`);
                return { PrivateSourceFollowUp: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
              import.meta.url,
            )
          ).PrivateSourceFollowUp,
      )));
  }))();
}
function Jn(e) {
  let t = (0, or.c)(19),
    n = bt(),
    r;
  t[0] === e.reference ? (r = t[1]) : ((r = nn.safeParse(e.reference)), (t[0] = e.reference), (t[1] = r));
  let i = r;
  if (i.success) {
    let e;
    return (
      t[2] === i.data
        ? (e = t[3])
        : ((e = (0, $.jsx)(Vn, { source: i.data }, i.data.id)), (t[2] = i.data), (t[3] = e)),
      e
    );
  }
  if (e.reference.type === `library_folder` || Nn(e.reference)) {
    let n;
    return (
      t[4] === e.reference
        ? (n = t[5])
        : ((n = (0, $.jsx)(Fn, { reference: e.reference })), (t[4] = e.reference), (t[5] = n)),
      n
    );
  }
  if (e.reference.type === `file_navlist`) {
    let n;
    return (t[6] === e ? (n = t[7]) : ((n = (0, $.jsx)(ir, { ...e })), (t[6] = e), (t[7] = n)), n);
  }
  let a = e.presentation === `template` ? `auto` : e.presentation,
    o;
  t[8] !== e || t[9] !== a
    ? ((o = (0, $.jsx)(Xn, { ...e, presentation: a })), (t[8] = e), (t[9] = a), (t[10] = o))
    : (o = t[10]);
  let s = o;
  if (
    (e.presentation === `template` || e.reference.codex_file_citation_authoritative !== !0) &&
    jn(e.reference)?.toLowerCase() === `skill.zip` &&
    (V(e.reference.sandbox_path) != null || V(e.reference.matched_text)?.includes(`sandbox:`) === !0) &&
    n != null &&
    !n.isStreaming &&
    !n.shouldBlockExternalEgress
  ) {
    let n;
    t[11] !== s || t[12] !== e.reference
      ? ((n = (0, $.jsx)(cr, { reference: e.reference, fallback: s })),
        (t[11] = s),
        (t[12] = e.reference),
        (t[13] = n))
      : (n = t[13]);
    let r;
    return (
      t[14] !== s || t[15] !== n
        ? ((r = (0, $.jsx)(Q.Suspense, { fallback: s, children: n })), (t[14] = s), (t[15] = n), (t[16] = r))
        : (r = t[16]),
      r
    );
  }
  if (
    e.reference.type === `file` &&
    (e.presentation == null || e.presentation === `auto`) &&
    V(e.reference.sandbox_path) == null &&
    !V(e.reference.link_markdown)?.includes(`sandbox:`)
  ) {
    let e;
    return (t[17] === s ? (e = t[18]) : ((e = (0, $.jsx)(Yn, { children: s })), (t[17] = s), (t[18] = e)), e);
  }
  return s;
}
function Yn(e) {
  let { children: t } = e,
    n = bt(),
    r = De(He, n?.conversationId ?? null);
  return r != null && !Ge(r) ? null : t;
}
function Xn(e) {
  let n = (0, or.c)(46),
    {
      children: a,
      contentReferenceIndex: o,
      fileNavigationIndex: l,
      presentation: u,
      reference: d,
      showSaveAs: h,
    } = e,
    g = u === void 0 ? `auto` : u,
    _ = h === void 0 || h,
    y = ee(K),
    b = re(),
    x = bt(),
    S = wt(x, o)?.messageId ?? x?.messageId,
    w = (0, Q.useContext)(Le),
    T = (0, Q.useContext)(Qe) === `restricted`,
    [E, ie] = (0, Q.useState)(),
    ae = (0, Q.useRef)(null),
    D = E != null,
    oe = w?.accountId ?? null,
    se = w?.userId ?? null,
    O;
  n[0] !== d.cloud_doc_url ||
  n[1] !== d.codex_file_citation_authoritative ||
  n[2] !== T ||
  n[3] !== x?.shouldBlockExternalEgress
    ? ((O =
        x?.shouldBlockExternalEgress === !1 && !T && d.codex_file_citation_authoritative === !0
          ? V(d.cloud_doc_url)
          : null),
      (n[0] = d.cloud_doc_url),
      (n[1] = d.codex_file_citation_authoritative),
      (n[2] = T),
      (n[3] = x?.shouldBlockExternalEgress),
      (n[4] = O))
    : (O = n[4]);
  let k;
  n[5] !== oe || n[6] !== se || n[7] !== O
    ? ((k = { accountId: oe, userId: se, url: O }), (n[5] = oe), (n[6] = se), (n[7] = O), (n[8] = k))
    : (k = n[8]);
  let { data: ce } = De(Gt, k),
    A = ce ?? jn(d),
    ue = d.source_type === `library_folder`,
    j = Me(d, { fileName: A ?? void 0, messageId: S }),
    M = x?.conversationId,
    de = c(y.value.pathname)?.params.sharedConversationId,
    fe = M == null ? null : y.get(Lt, M);
  de != null && de === M && (fe = de);
  let pe = y.get(Dn, w)?.id,
    N = ft(d),
    P = j != null && x?.shouldBlockExternalEgress === !0,
    F =
      j != null &&
      A != null &&
      !P &&
      rt({
        fileName: j.type === `mounted-library` ? (j.sourceFileName ?? A) : A,
        mimeType: j.type === `mounted-library` ? (j.mimeType ?? N) : N,
        mountedLibraryFileId: j.type === `mounted-library` ? j.mountedLibraryFileId : void 0,
      }),
    he = j?.type === `mounted-library` || (A != null && _t(A, N)),
    ve =
      j != null &&
      ((!F && j.type === `mounted-library` && fe == null && pe == null) || Oe({ browserPreview: he })),
    I = !P && (F || ve),
    be =
      m?.latex != null &&
      g === `artifact-row` &&
      A != null &&
      xt(A) === `tex` &&
      I &&
      x?.isReadOnly !== !0 &&
      fe == null &&
      pe == null,
    { data: L } = De(lr, { conversationId: M, messageId: x?.messageId, target: j }, { enabled: be }),
    Se = be && L != null,
    Ce = _ && F && gt(),
    we = Jt(d),
    Te = {
      fileName: A ?? void 0,
      mimeType: mt(d) ?? (j?.type === `mounted-library` ? (j.mimeType ?? void 0) : void 0),
      mountedLibraryFileId: j?.type === `mounted-library` ? j.mountedLibraryFileId : void 0,
      sourceMimeType: Ae(d),
      sourceUrl: we ?? void 0,
    },
    je = d.source_type === `library_folder` ? Mn(d) : we,
    Pe = je != null && x?.shouldBlockExternalEgress === !0,
    Fe = Pe ? null : je,
    Ie = j == null || A == null ? null : St(j, A, N),
    Re = Ie == null ? null : jt(Ie)?.sourceUrl,
    R = P || Pe ? null : (Re ?? (F ? null : Fe)),
    z = x?.savedContentResponse,
    B = null;
  z != null &&
    A != null &&
    (I || R != null) &&
    j?.type !== `mounted-library` &&
    (d.source_type === `library_folder` && R != null
      ? (B = v(R))
      : j != null && `libraryFileId` in j && (B = xe(j.libraryFileId)));
  let Ve = (0, Q.useEffectEvent)(() => {
      Be(y, ae, z, B);
    }),
    Ue;
  n[9] === Ve
    ? (Ue = n[10])
    : ((Ue = () => {
        Ve();
      }),
      (n[9] = Ve),
      (n[10] = Ue));
  let We = B?.id,
    Ge = B?.kind,
    Ke = z?.conversationId,
    qe = z?.responseId,
    Je = z?.savedContentBackend,
    Ye;
  if (
    (n[11] !== Ke || n[12] !== qe || n[13] !== Je || n[14] !== We || n[15] !== Ge
      ? ((Ye = [We, Ge, Ke, qe, Je]),
        (n[11] = Ke),
        (n[12] = qe),
        (n[13] = Je),
        (n[14] = We),
        (n[15] = Ge),
        (n[16] = Ye))
      : (Ye = n[16]),
    (0, Q.useEffect)(Ue, Ye),
    A == null)
  ) {
    let e;
    return (
      n[17] === d ? (e = n[18]) : ((e = (0, $.jsx)(Ut, { reference: d })), (n[17] = d), (n[18] = e)),
      e
    );
  }
  let Ze = () => {
      Be(y, ae, z, B, !0);
    },
    H = (e, t, n) => {
      if (D || j == null) return;
      e === `opening` && Ze();
      let r = it(A);
      (e === `saving` &&
        M != null &&
        r != null &&
        zt(y, {
          action: ke.CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD,
          importKind: r,
          isEditing: !1,
          source: {
            conversationId: M,
            byteSource: `chatgpt`,
            sharedConversationId: fe,
            artifactInteractionExcluded: pe != null,
            target: j,
          },
          originatingTurn:
            x?.turnId == null ? void 0 : { turnId: x.turnId, inputMessageId: null, messageId: S ?? null },
        }),
        ie(e));
      let i = !0,
        a = () => {
          i && ((i = !1), ie(void 0));
        },
        c = {
          conversationId: y.get(vt, M ?? null) ?? M,
          fileName: A,
          gizmoId: M == null ? null : y.get(He, M),
          sharedConversationId: fe,
          mimeType: N,
          postId: pe,
          target: j,
        };
      (e === `saving`
        ? dt(y, c)
        : Tt(y, {
            ...c,
            messageId: wt(x, o)?.messageId,
            connectedFileIntent: `open`,
            interaction: t,
            isAccessBlocked: (e) => Ne(e, M),
            browserPreview: he,
            onClose:
              n == null
                ? void 0
                : () => {
                    (a(), n());
                  },
            downloadFallback: F && !ve,
            tabKey: `${x?.messageId ?? `message`}:${String(o)}:${A}${l == null ? `` : `:${String(l)}`}`,
          })
      )
        .catch((t) => {
          (e === `opening` && i && n != null && ((0, sr.flushSync)(a), n()),
            s.warning(`ChatGPT content reference file action failed`, { safe: {}, sensitive: { error: t } }),
            y
              .get(le)
              .danger(
                (0, $.jsx)(p, {
                  id: `file-tile.download-failed`,
                  defaultMessage: `Failed to download file. Please try again later.`,
                  description: `Error toast when opening or downloading a file from a ChatGPT message fails`,
                }),
                { errorAnalytics: { toastId: e === `saving` ? `file_download_failed` : `unknown` } },
              ));
        })
        .finally(a);
    },
    $e = (e) => {
      I && (e.preventDefault(), H(`opening`, e));
    },
    nt;
  if (g === `artifact-row` && F) {
    let e;
    (n[19] === b
      ? (e = n[20])
      : ((e = b.formatMessage({
          id: `chatgpt.artifacts.resource_row.download_file.label`,
          defaultMessage: `Download file`,
          description: `Tooltip and accessibility label for the icon-only download button in an artifact file card beneath a ChatGPT response. It appears when desktop users hover over or focus the row and remains visible on touch devices. Activating the button downloads the file. Short, space-limited action label for end users.`,
        })),
        (n[19] = b),
        (n[20] = e)),
      (nt = e));
  } else
    Ce &&
      (nt = b.formatMessage(
        {
          id: `chatgpt.contentReferences.file.saveAs.ariaLabel`,
          defaultMessage: `Save {fileName} as…`,
          description: `Accessible label and tooltip for saving a generated ChatGPT file to a user-selected location. The fileName placeholder is the displayed file name.`,
        },
        { fileName: A },
      ));
  let at =
      nt == null
        ? null
        : (0, $.jsx)(_e, {
            tooltipContent: nt,
            children: (0, $.jsx)(t, {
              "aria-label": nt,
              color: g === `artifact-row` ? `ghostActive` : `ghost`,
              disabled: D,
              loading: E === `saving`,
              radius: g === `artifact-row` ? `large` : `default`,
              size: g === `artifact-row` ? `imageToolbar` : `toolbar`,
              uniform: !0,
              onClick: (e) => {
                (e.stopPropagation(), H(`saving`));
              },
              children:
                E !== `saving` &&
                (0, $.jsx)(r, {
                  "aria-hidden": !0,
                  className: g === `artifact-row` ? `icon-base` : `icon-sm`,
                }),
            }),
          }),
    U;
  if (
    (I && Ie != null
      ? (U = D
          ? b.formatMessage(
              {
                id: `chatgpt.contentReferences.file.openingConnectedFile.ariaLabel`,
                defaultMessage: `Opening {fileName}`,
                description: `Accessible label for a connected-provider file reference while it is opening in the preferred browser or the file preview. The fileName placeholder is the displayed file name.`,
              },
              { fileName: A },
            )
          : b.formatMessage(
              {
                id: `chatgpt.contentReferences.file.openConnectedFile.ariaLabel`,
                defaultMessage: `Open {fileName}`,
                description: `Accessible label for a connected-provider file reference. Activating it opens the file in the preferred browser on Desktop or the file preview on the web. The fileName placeholder is the displayed file name.`,
              },
              { fileName: A },
            ))
      : I
        ? (U =
            ve && D
              ? b.formatMessage(
                  {
                    id: `chatgpt.contentReferences.file.openingPreview.ariaLabel`,
                    defaultMessage: `Opening preview of {fileName}`,
                    description: `Accessible label for a disabled ChatGPT file reference card while its file is being prepared for the right-side preview panel. The fileName placeholder is the displayed file name.`,
                  },
                  { fileName: A },
                )
              : ve
                ? b.formatMessage(
                    {
                      id: `chatgpt.contentReferences.file.openPreview.ariaLabel`,
                      defaultMessage: `Open preview of {fileName}`,
                      description: `Accessible label for a ChatGPT file reference card that downloads the file and opens it in the right-side preview panel. The fileName placeholder is the displayed file name.`,
                    },
                    { fileName: A },
                  )
                : D
                  ? b.formatMessage(
                      {
                        id: `chatgpt.contentReferences.file.downloading.ariaLabel`,
                        defaultMessage: `Downloading {fileName}`,
                        description: `Accessible label for a disabled ChatGPT file reference card while its file download is pending. The fileName placeholder is the displayed file name.`,
                      },
                      { fileName: A },
                    )
                  : b.formatMessage(
                      {
                        id: `chatgpt.contentReferences.file.download.ariaLabel`,
                        defaultMessage: `Download {fileName}`,
                        description: `Accessible label for a ChatGPT file reference card that downloads a file attached to a response. The fileName placeholder is the displayed file name.`,
                      },
                      { fileName: A },
                    ))
        : P &&
          (U = ve
            ? b.formatMessage(
                {
                  id: `chatgpt.contentReferences.file.previewBlocked.ariaLabel`,
                  defaultMessage: `Preview of {fileName} unavailable in lockdown mode`,
                  description: `Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file for the right-side preview panel. The fileName placeholder is the displayed file name.`,
                },
                { fileName: A },
              )
            : b.formatMessage(
                {
                  id: `chatgpt.contentReferences.file.downloadBlocked.ariaLabel`,
                  defaultMessage: `Download {fileName} unavailable in lockdown mode`,
                  description: `Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file. The fileName placeholder is the displayed file name.`,
                },
                { fileName: A },
              )),
    g !== `artifact-row` && g !== `file-tile`)
  ) {
    let e = d.codex_file_citation_authoritative !== !0 && er(d),
      t =
        d.codex_file_citation_authoritative !== !0 &&
        a == null &&
        !e &&
        (tr(d) || Ie != null || (x?.conversationOrigin === `tpp` && V(d.library_file_id) != null)),
      r =
        a == null
          ? (V(Xe(d.codex_file_citation_attributes)?.label) ??
            V(Xe(d.codex_file_citation_attributes)?.title) ??
            A)
          : te(a);
    e ? (r = $n(d, A)) : t && (r = Ee(rr(A)));
    let o = (0, $.jsx)(`span`, {
      style: f,
      children: (0, $.jsx)(i, { ...Te, "aria-hidden": !0, size: 16, style: ne }),
    });
    if (t) {
      let e = (e) => {
          if (!I) return;
          e.preventDefault();
          let t = e.currentTarget;
          H(F && ht(e) ? `saving` : `opening`, e, () => {
            requestAnimationFrame(() => {
              t.isConnected && document.activeElement === document.body && t.focus({ preventScroll: !0 });
            });
          });
        },
        t = {
          ref: (e) => {
            if (e != null)
              return tt(e, {
                text: [A, r, R, ...an(b, [d]).sources.flatMap(Zn)].join(` `),
                highlight: ze() ? `block` : `auto`,
              });
          },
          ariaLabel: U ?? A,
          icon: o,
          isTerminalInline: !0,
          label: r,
          testId: `chatgpt-library-file-citation`,
        },
        i;
      i =
        R == null
          ? I
            ? (0, $.jsx)(Y, { ...t, disabled: D, variant: `file`, onClick: e })
            : (0, $.jsx)(Y, { ...t, disabled: !0, variant: `file`, onClick: () => H(`opening`) })
          : (0, $.jsx)(Y, {
              ...t,
              href: R,
              onActivate: Ze,
              requiresConfirmation: T,
              showHoverActions: Re != null,
              tooltipContent: A,
              variant: `file`,
              onUnmodifiedClick: e,
            });
      let a = R == null ? (0, $.jsx)(_e, { tooltipContent: A, children: i }) : i,
        s;
      return (
        n[21] === a
          ? (s = n[22])
          : ((s = (0, $.jsx)(`span`, { className: `inline-flex items-center gap-1`, children: a })),
            (n[21] = a),
            (n[22] = s)),
        s
      );
    }
    if (d.codex_file_citation_authoritative === !0 || a != null || e || x?.conversationOrigin === `tpp`) {
      let e =
          R == null
            ? (0, $.jsxs)(kt, {
                className: `inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-info hover:decoration-inherit`,
                reference: { path: A },
                ariaBusy: D,
                ariaLabel: U ?? A,
                cwd: null,
                disabled: D || !I,
                enableWorkspaceFileActions: !1,
                hostId: x?.hostId,
                label: r,
                tooltipText: A,
                onOpen: (e, t) => {
                  I && H(F && ht(t) ? `saving` : `opening`, t);
                },
                children: [o, a ?? r],
              })
            : (0, $.jsxs)(Yt, {
                className: `inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-info hover:decoration-inherit`,
                href: R,
                onActivate: Ze,
                "aria-busy": D,
                "aria-label": U ?? A,
                tooltipContent: A,
                showHoverActions: Re != null,
                onUnmodifiedClick: $e,
                children: [o, a ?? r],
              }),
        t;
      return (
        n[23] === e
          ? (t = n[24])
          : ((t = (0, $.jsx)(`span`, { className: `inline-flex items-center gap-1`, children: e })),
            (n[23] = e),
            (n[24] = t)),
        t
      );
    }
  }
  let ot = me({ fileName: A, mimeType: nr(d), sourceUrl: we ?? void 0 }),
    st = xt(A)?.toUpperCase(),
    W = null;
  R == null
    ? I
      ? (W = (0, $.jsx)(`button`, {
          "aria-busy": D,
          "aria-label": U,
          className:
            g === `artifact-row`
              ? `absolute inset-0 cursor-interaction bg-transparent hover:bg-text/5 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait`
              : `absolute inset-0 cursor-interaction bg-transparent hover:bg-background-primary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait`,
          disabled: D,
          onClick: (e) => H(F && ht(e) ? `saving` : `opening`, e),
          type: `button`,
        }))
      : (P || Pe) &&
        (W = (0, $.jsx)(`button`, {
          "aria-disabled": !0,
          "aria-label": U ?? A,
          className: `absolute inset-0 bg-transparent`,
          disabled: !0,
          type: `button`,
        }))
    : (W = (0, $.jsx)(Yt, {
        "data-testid": ue ? `chatgpt-library-folder-navigation` : void 0,
        className:
          g === `artifact-row`
            ? `absolute inset-0 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`
            : `absolute inset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
        href: R,
        onActivate: Ze,
        "aria-busy": D,
        tooltipContent: A,
        showHoverActions: Re != null,
        onUnmodifiedClick: $e,
        children: (0, $.jsx)(`span`, { className: `sr-only`, children: A }),
      }));
  let G;
  if (D) {
    let e;
    (n[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(ge, { className: `icon-xs shrink-0 text-text/70`, "aria-hidden": !0 })), (n[25] = e))
      : (e = n[25]),
      (G = e));
  } else if (at != null) {
    let e = `pointer-events-auto`;
    g === `artifact-row`
      ? (e = `pointer-events-none relative z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100`)
      : g === `file-tile` &&
        (e = `pointer-events-none absolute end-1.5 top-1.5 z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100`);
    let t;
    (n[26] !== at || n[27] !== e
      ? ((t = (0, $.jsx)(`span`, { className: e, children: at })), (n[26] = at), (n[27] = e), (n[28] = t))
      : (t = n[28]),
      (G = t));
  }
  if (Se) {
    let e;
    n[29] === L?.originalSource
      ? (e = n[30])
      : ((e = L?.originalSource
          ? (0, $.jsx)(p, {
              id: `chatgpt.artifacts.resource_row.open_original_source.description`,
              defaultMessage: `Edits are saved to the original workspace file, not this Library copy`,
              description: `Explains that the original-source action opens a separate workspace file, and editing it does not update the uploaded Library copy`,
            })
          : void 0),
        (n[29] = L?.originalSource),
        (n[30] = e));
    let r;
    (n[31] === L?.originalSource
      ? (r = n[32])
      : ((r = L?.originalSource
          ? (0, $.jsx)(p, {
              id: `chatgpt.artifacts.resource_row.open_original_source`,
              defaultMessage: `Open original source`,
              description: `Opens the original LaTeX workspace file that was uploaded to create this separate Library copy`,
            })
          : (0, $.jsx)(p, {
              id: `chatgpt.artifacts.resource_row.open_latex_editor`,
              defaultMessage: `Open LaTeX editor`,
              description: `Opens this conversation's local LaTeX source in the built-in editor with a live PDF preview`,
            })),
        (n[31] = L?.originalSource),
        (n[32] = r)),
      (G = (0, $.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, $.jsx)(_e, {
            tooltipContent: e,
            children: (0, $.jsx)(t, {
              className: `pointer-events-auto`,
              color: `primary`,
              disabled: D,
              size: `toolbar`,
              onClick: () => {
                L?.originalSource ? yt(y, L.file.path, { hostId: L.file.hostId }) : H(`opening`);
              },
              children: r,
            }),
          }),
          G,
        ],
      })));
  }
  let ct = st,
    lt = `default`;
  g === `artifact-row`
    ? ((ct =
        Se && !L?.originalSource
          ? (0, $.jsx)(p, {
              id: `chatgpt.artifacts.resource_row.latex_file_type`,
              defaultMessage: `LaTeX document · Editable source`,
              description: `Identifies an editable LaTeX source file owned by this conversation's workspace`,
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`span`, {
                  className: `group-focus-within/resource-row:hidden group-hover/resource-row:hidden`,
                  children: (0, $.jsx)(p, { ...C(ot.category, ot.iconKey) }),
                }),
                (0, $.jsx)(`span`, {
                  className: `hidden group-focus-within/resource-row:inline group-hover/resource-row:inline`,
                  "data-markdown-copy": `exclude`,
                  children: (0, $.jsx)(p, {
                    id: `chatgpt.artifacts.resource_row.open_file.label`,
                    defaultMessage: `Open file`,
                    description: `Hover and keyboard-focus subtitle in a file-card row under a ChatGPT response. It tells the end user that activating the row opens the file preview. This is a short, space-limited action label.`,
                  }),
                }),
              ],
            })),
      (lt = Se ? `default` : `artifact-list`))
    : g === `file-tile` &&
      ((ct = ue
        ? (0, $.jsx)(p, {
            id: `chatgpt.file_navigation.folder.label`,
            defaultMessage: `Folder`,
            description: `Type label shown under a Library folder in a navigation result card`,
          })
        : (Qn(d) ?? (0, $.jsx)(p, { ...C(ot.category, ot.iconKey) }))),
      (lt = `file-tile`));
  let ut =
      g === `file-tile`
        ? (0, $.jsx)(`span`, {
            className: `flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl`,
            children: ue
              ? (0, $.jsx)(ye, { "aria-hidden": !0 })
              : (0, $.jsx)(i, { ...Te, "aria-hidden": !0, size: 24 }),
          })
        : (0, $.jsx)(i, { ...Te, "aria-hidden": !0, className: `shrink-0`, size: 24 }),
    q;
  n[33] !== A || n[34] !== lt || n[35] !== ct || n[36] !== ut || n[37] !== G
    ? ((q = (0, $.jsx)(et, {
        className: `pointer-events-none relative z-10`,
        icon: ut,
        subtitle: ct,
        title: A,
        titleTooltip: A,
        trailing: G,
        variant: lt,
      })),
      (n[33] = A),
      (n[34] = lt),
      (n[35] = ct),
      (n[36] = ut),
      (n[37] = G),
      (n[38] = q))
    : (q = n[38]);
  let pt;
  n[39] !== W || n[40] !== q
    ? ((pt = (0, $.jsxs)(`span`, { className: `group/resource-row relative`, children: [W, q] })),
      (n[39] = W),
      (n[40] = q),
      (n[41] = pt))
    : (pt = n[41]);
  let J = pt;
  if (g === `artifact-row`) return J;
  if (g === `file-tile`) {
    let e;
    return (
      n[42] === J
        ? (e = n[43])
        : ((e = (0, $.jsx)(Et, { as: `span`, variant: `file-tile`, children: J })), (n[42] = J), (n[43] = e)),
      e
    );
  }
  let Ct;
  return (
    n[44] === J
      ? (Ct = n[45])
      : ((Ct = (0, $.jsx)(Et, { as: `span`, className: `mt-3`, children: J })), (n[44] = J), (n[45] = Ct)),
    Ct
  );
}
function Zn(e) {
  return [e.displayLabel, e.sourceName];
}
function Qn(e) {
  let t = e.source_type ?? e.source;
  if (t !== `my_files` && t !== `google_drive`) return null;
  let n = V(e.description) ?? V(e.snippet);
  return n?.startsWith(`/`) === !0 ? n : null;
}
function $n(e, t) {
  return o({ fileName: t, matchedText: V(e.matched_text) ?? void 0 });
}
function er(e) {
  return e.source === `my_files` && V(e.library_file_id) != null && !tr(e);
}
function tr(e) {
  if (V(Xe(e.fff_metadata)?.file_reference_type) === `file_citation`) return !0;
  let t = V(e.matched_text)?.trim().toLowerCase();
  return t?.startsWith(`filecite`) === !0 || t?.startsWith(`[citefilecite`) === !0;
}
function nr(e) {
  return V(e.source_mime_type) ?? V(e.mounted_library_mime_type) ?? V(e.mime_type) ?? void 0;
}
function rr(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function ir(e) {
  let t = (0, or.c)(12),
    { contentReferenceIndex: n, reference: r } = e,
    i,
    a,
    o;
  if (t[0] !== n || t[1] !== r) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = (Array.isArray(r.items) ? r.items : []).flatMap(ar);
      if (e.length === 0) {
        let e;
        (t[5] === r ? (e = t[6]) : ((e = (0, $.jsx)(Ht, { reference: r })), (t[5] = r), (t[6] = e)), (o = e));
        break bb0;
      }
      i = `not-prose m-0 mt-6 flex list-none flex-wrap gap-2 p-0`;
      let s;
      (t[7] === n
        ? (s = t[8])
        : ((s = (e, t) =>
            (0, $.jsx)(
              `li`,
              {
                className: `m-0 p-0`,
                children: (0, $.jsx)(Jn, {
                  contentReferenceIndex: n,
                  fileNavigationIndex: t,
                  presentation: `file-tile`,
                  reference: e,
                }),
              },
              `${e.name}:${String(t)}`,
            )),
          (t[7] = n),
          (t[8] = s)),
        (a = e.map(s)));
    }
    ((t[0] = n), (t[1] = r), (t[2] = i), (t[3] = a), (t[4] = o));
  } else ((i = t[2]), (a = t[3]), (o = t[4]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s;
  return (
    t[9] !== i || t[10] !== a
      ? ((s = (0, $.jsx)(`ul`, { className: i, children: a })), (t[9] = i), (t[10] = a), (t[11] = s))
      : (s = t[11]),
    s
  );
}
function ar(e) {
  let t = Xe(e),
    n = t == null ? null : jn(t);
  return t == null || n == null ? [] : [{ ...t, name: n, type: `file` }];
}
var or, Q, sr, $, cr, lr;
function ur() {
  return (ur = e(() => {
    ((or = be()),
      h(),
      ae(),
      R(),
      Ye(),
      g(),
      (Q = we()),
      (sr = Ce()),
      M(),
      Ke(),
      Pe(),
      Ue(),
      lt(),
      ve(),
      b(),
      Te(),
      Ot(),
      j(),
      fe(),
      D(),
      q(),
      de(),
      oe(),
      Ft(),
      Ie(),
      Bt(),
      d(),
      $e(),
      Ct(),
      at(),
      Re(),
      yn(),
      ct(),
      he(),
      je(),
      y(),
      G(),
      B(),
      Wt(),
      Fe(),
      It(),
      J(),
      At(),
      Rt(),
      U(),
      W(),
      u(),
      An(),
      Kt(),
      Vt(),
      Pn(),
      qt(),
      Bn(),
      qn(),
      rn(),
      ($ = L()),
      F(),
      (cr = a(
        async () => {
          let [{ HostedTemplateResult: e }, { loadSkillData: t }] = await Promise.all([
              k(
                () => import(`./hosted-template-result-ca98998c06b4.js`),
                __vite__mapDeps([8, 1, 2, 3, 4, 5]),
                import.meta.url,
              ),
              k(
                () => import(`./entry-bcd44f5f7343.js`),
                __vite__mapDeps([9, 4, 1, 2, 3, 5]),
                import.meta.url,
              ),
            ]),
            n = await t();
          return (t) => (0, $.jsx)(e, { ...t, skillData: n });
        },
        { suspendToParent: !0, errorFallback: ({ fallback: e }) => e },
      )),
      (lr = E(K, ({ conversationId: e, messageId: t, target: n }, { scope: r }) => ({
        queryKey: [`latex-card-workspace-file`, e, t, n],
        staleTime: 0,
        retry: !1,
        queryFn: async () => {
          if (n != null) {
            let i = await Ve(r, e, n);
            if (i != null && xt(i.path) === `tex`) return { file: i, originalSource: !1 };
            let a = await pt(r, e, t, n);
            return a == null ? null : { file: a, originalSource: !0 };
          }
          return null;
        },
      }))));
  }))();
}
export {
  wn as a,
  Dn as c,
  kn as d,
  Sn as f,
  yn as g,
  on as h,
  Pn as i,
  On as l,
  an as m,
  ur as n,
  An as o,
  Cn as p,
  jn as r,
  Tn as s,
  Jn as t,
  En as u,
};
//# sourceMappingURL=file-ef1f4b6b35dd.js.map
