import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  AO as n,
  Bf as r,
  CO as i,
  Co as a,
  Cot as o,
  DDt as s,
  EB as c,
  Eo as l,
  Fl as u,
  IDt as d,
  Il as f,
  Ixt as p,
  JCt as m,
  LK as h,
  Mh as g,
  Mz as _,
  Nz as v,
  PA as y,
  Pxt as b,
  Rk as x,
  Sl as S,
  So as C,
  TJ as w,
  TO as T,
  To as E,
  VDt as D,
  Vxt as O,
  YCt as k,
  _Mt as A,
  _o as j,
  _xt as M,
  bo as N,
  cS as P,
  dA as F,
  do as I,
  fo as L,
  gMt as R,
  gX as z,
  go as B,
  hX as V,
  ho as H,
  iot as U,
  ixt as W,
  jDt as G,
  jh as K,
  mA as q,
  mU as ee,
  mo as te,
  nU as ne,
  po as re,
  qA as ie,
  sS as ae,
  tU as oe,
  vo as se,
  vzt as ce,
  wo as le,
  wot as ue,
  xMt as de,
  xl as fe,
  xo as pe,
  yo as me,
  yzt as he,
  zf as ge,
  zk as _e,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Gn as ve,
  Bct as ye,
  Fmt as be,
  GKn as xe,
  Hln as Se,
  J5t as Ce,
  Jct as we,
  K5t as Te,
  KKn as Ee,
  Kln as De,
  MRt as Oe,
  Mmt as ke,
  N$ as Ae,
  NRt as je,
  Nmt as Me,
  QGn as Ne,
  Rrt as Pe,
  SKn as Fe,
  Tpt as Ie,
  UKn as Le,
  Vct as Re,
  WKn as ze,
  Wct as Be,
  YMr as Ve,
  Yct as He,
  _Kn as Ue,
  cx as We,
  d as Ge,
  dKn as Ke,
  eun as J,
  inn as qe,
  j$ as Je,
  nKn as Ye,
  oFr as Xe,
  qct as Ze,
  rnn as Qe,
  sx as $e,
  tNr as et,
  tln as tt,
  u as nt,
  uKn as rt,
  wKn as it,
  wpt as at,
  xKn as ot,
  yKn as st,
  zrt as ct,
} from "./app-initial-5851df3f6cb1.js";
import { n as lt, t as ut } from "./profile-avatar-90effac925f0.js";
import { a as dt, t as ft } from "./timestamps-85bd12c0e1b2.js";
import { n as pt, t as mt } from "./library-provider-badge-82157c3113b0.js";
import { i as ht, r as gt } from "./navigate-with-file-preview-4ede5b1e5bdb.js";
function _t(e) {
  let t = (0, xt.c)(36),
    { node: n } = e,
    r = p(o),
    a = D(),
    s,
    l,
    u,
    f,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x;
  if (t[0] !== a || t[1] !== n.shared_by?.name || t[2] !== n.shared_via || t[3] !== r) {
    f = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let [e, ...o] = n.shared_via ?? [];
      if (e == null) {
        f = null;
        break bb0;
      }
      let p;
      t[16] === r
        ? (p = t[17])
        : ((p = function (e) {
            (e.stopPropagation(),
              !e.defaultPrevented &&
                e.button === 0 &&
                !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
                ct(r, U));
          }),
          (t[16] = r),
          (t[17] = p));
      let S = p;
      ((u = `flex min-w-0 items-center gap-1`),
        (s = d),
        (y = `libraryNext.items.sharedByTeamsWithOverflow`),
        (b = `{hasSharer, select, true {<sharer>{name}</sharer> via <teams>{teamLink}</teams>} other {via <teams>{teamLink}</teams>}}`),
        (x = `Single-line attribution in the Shared by column. hasSharer indicates whether name identifies the person who shared the item. teamLink contains the first linked team name and a button showing the count of additional teams granting access. The sharer and teams tags preserve truncation around those names.`),
        (h = !!n.shared_by?.name),
        (g = n.shared_by?.name),
        (_ = bt),
        (v = yt),
        (l = (0, Y.jsxs)(W, {
          className: `group/team inline-flex max-w-full min-w-0 cursor-interaction items-center gap-1 align-bottom hover:text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring`,
          title: ``,
          to: `/settings/teams/${encodeURIComponent(e.id)}`,
          onClick: S,
          children: [
            (0, Y.jsx)(`span`, {
              className: `truncate underline decoration-dotted underline-offset-4`,
              children: e.name,
            }),
            o.length === 0
              ? (0, Y.jsx)(c, {
                  className: `opacity-0 group-hover/team:opacity-100 group-focus-visible/team:opacity-100 pointer-coarse:opacity-100`,
                })
              : null,
          ],
        })),
        (m =
          o.length > 0
            ? (0, Y.jsx)(i, {
                align: `end`,
                contentWidth: `menu`,
                triggerButton: (0, Y.jsx)(`button`, {
                  className: `shrink-0 cursor-interaction hover:text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring`,
                  type: `button`,
                  title: ``,
                  "aria-label": a.formatMessage(
                    {
                      id: `libraryNext.items.sharedByTeamsMoreLabel`,
                      defaultMessage: `Show {count, plural, one {# more team} other {# more teams}}`,
                      description: `Accessible label for the button that opens a menu of additional teams granting access to a shared Library item`,
                    },
                    { count: o.length },
                  ),
                  onClick: vt,
                  children: (0, Y.jsx)(d, {
                    id: `libraryNext.items.sharedByTeamsMoreCount`,
                    defaultMessage: `+{count, number}`,
                    description: `Compact button showing how many additional teams grant access to a shared Library item`,
                    values: { count: o.length },
                  }),
                }),
                children: o.map((e) =>
                  (0, Y.jsx)(
                    T.Item,
                    {
                      asChild: !0,
                      onClick: S,
                      children: (0, Y.jsx)(W, {
                        to: `/settings/teams/${encodeURIComponent(e.id)}`,
                        children: e.name,
                      }),
                    },
                    e.id,
                  ),
                ),
              })
            : null));
    }
    ((t[0] = a),
      (t[1] = n.shared_by?.name),
      (t[2] = n.shared_via),
      (t[3] = r),
      (t[4] = s),
      (t[5] = l),
      (t[6] = u),
      (t[7] = f),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x));
  } else
    ((s = t[4]),
      (l = t[5]),
      (u = t[6]),
      (f = t[7]),
      (m = t[8]),
      (h = t[9]),
      (g = t[10]),
      (_ = t[11]),
      (v = t[12]),
      (y = t[13]),
      (b = t[14]),
      (x = t[15]));
  if (f !== Symbol.for(`react.early_return_sentinel`)) return f;
  let S;
  t[18] !== l || t[19] !== m
    ? ((S = (0, Y.jsxs)(Y.Fragment, { children: [l, m] })), (t[18] = l), (t[19] = m), (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] !== S || t[22] !== h || t[23] !== g || t[24] !== _ || t[25] !== v
    ? ((C = { hasSharer: h, name: g, sharer: _, teams: v, teamLink: S }),
      (t[21] = S),
      (t[22] = h),
      (t[23] = g),
      (t[24] = _),
      (t[25] = v),
      (t[26] = C))
    : (C = t[26]);
  let w;
  t[27] !== s || t[28] !== C || t[29] !== y || t[30] !== b || t[31] !== x
    ? ((w = (0, Y.jsx)(s, { id: y, defaultMessage: b, description: x, values: C })),
      (t[27] = s),
      (t[28] = C),
      (t[29] = y),
      (t[30] = b),
      (t[31] = x),
      (t[32] = w))
    : (w = t[32]);
  let E;
  return (
    t[33] !== u || t[34] !== w
      ? ((E = (0, Y.jsx)(`span`, { className: u, children: w })), (t[33] = u), (t[34] = w), (t[35] = E))
      : (E = t[35]),
    E
  );
}
function vt(e) {
  return e.stopPropagation();
}
function yt(e) {
  return (0, Y.jsx)(`span`, { className: `flex min-w-0 items-center gap-1`, children: e });
}
function bt(e) {
  return (0, Y.jsx)(`span`, { className: `min-w-0 truncate`, children: e });
}
var xt, Y;
function St() {
  return (St = e(() => {
    ((xt = ce()), b(), G(), M(), n(), w(), ue(), Pe(), Xe(), (Y = de()));
  }))();
}
function Ct(e) {
  let t = (0, Tt.c)(8),
    { entry: n, fallback: r } = e,
    i;
  t[0] !== n.node.thumbnail_url || t[1] !== n.node.thumbnail_urls
    ? ((i = n.node.thumbnail_urls ?? (n.node.thumbnail_url ? [n.node.thumbnail_url] : [])),
      (t[0] = n.node.thumbnail_url),
      (t[1] = n.node.thumbnail_urls),
      (t[2] = i))
    : (i = t[2]);
  let a = i;
  if (a.length === 0) {
    let e;
    return (
      t[3] === r
        ? (e = t[4])
        : ((e = (0, X.jsx)(`span`, {
            className: `relative flex min-h-0 w-full flex-1 items-center justify-center`,
            children: r,
          })),
          (t[3] = r),
          (t[4] = e)),
      e
    );
  }
  let o;
  return (
    t[5] !== r || t[6] !== a
      ? ((o = (0, X.jsx)(wt, { urls: a, fallback: r })), (t[5] = r), (t[6] = a), (t[7] = o))
      : (o = t[7]),
    o
  );
}
function wt(e) {
  let t = (0, Tt.c)(35),
    { urls: n, fallback: r } = e,
    i = p(tt),
    a = (0, Et.useRef)(null),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { once: !0, margin: `200px` }), (t[0] = o))
    : (o = t[0]);
  let s = k(a, o),
    c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = new Set()), (t[1] = c)) : (c = t[1]);
  let [l, u] = (0, Et.useState)(c),
    d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = new Map()), (t[2] = d)) : (d = t[2]);
  let [f, m] = (0, Et.useState)(d),
    h;
  t[3] !== i.value.accountId || t[4] !== i.value.userId
    ? ((h = function (e) {
        return {
          cacheKey: [`library-api`, i.value.accountId, JSON.stringify(i.value.userId ?? null)],
          resolveAsset: async (t) =>
            /^data:image\/(?:avif|bmp|gif|jpeg|png|svg\+xml|webp|x-icon|vnd\.microsoft\.icon)(?:;[^,]*)?,/iu.test(
              e,
            )
              ? { kind: `available`, downloadUrl: e }
              : { kind: `available`, ...(ve(e) ? await st(t) : ot({ download_url: e })) },
          useDownloadUrlAsImageSrc: !0,
        };
      }),
      (t[3] = i.value.accountId),
      (t[4] = i.value.userId),
      (t[5] = h))
    : (h = t[5]);
  let g = h,
    _ = n[0] ?? ``,
    v;
  t[6] !== g || t[7] !== _ ? ((v = g(_)), (t[6] = g), (t[7] = _), (t[8] = v)) : (v = t[8]);
  let y;
  t[9] === s ? (y = t[10]) : ((y = { enabled: s }), (t[9] = s), (t[10] = y));
  let { src: b } = Ye(n[0] ?? ``, v, y),
    x = n[1] ?? ``,
    S;
  t[11] !== g || t[12] !== x ? ((S = g(x)), (t[11] = g), (t[12] = x), (t[13] = S)) : (S = t[13]);
  let C;
  t[14] === s ? (C = t[15]) : ((C = { enabled: s }), (t[14] = s), (t[15] = C));
  let { src: w } = Ye(n[1] ?? ``, S, C),
    T = n[2] ?? ``,
    E;
  t[16] !== g || t[17] !== T ? ((E = g(T)), (t[16] = g), (t[17] = T), (t[18] = E)) : (E = t[18]);
  let D;
  t[19] === s ? (D = t[20]) : ((D = { enabled: s }), (t[19] = s), (t[20] = D));
  let { src: O } = Ye(n[2] ?? ``, E, D),
    A,
    j;
  t[21] !== f || t[22] !== l || t[23] !== b || t[24] !== w || t[25] !== O || t[26] !== n
    ? ((A = [b, w, O].flatMap((e, t) => (e == null || l.has(e) ? [] : [{ src: e, url: n[t] }]))),
      (j = A[0] == null ? 1 : (f.get(A[0].src) ?? 1)),
      (t[21] = f),
      (t[22] = l),
      (t[23] = b),
      (t[24] = w),
      (t[25] = O),
      (t[26] = n),
      (t[27] = A),
      (t[28] = j))
    : ((A = t[27]), (j = t[28]));
  let M = j,
    N;
  t[29] !== M || t[30] !== r || t[31] !== A
    ? ((N =
        A.length === 0
          ? r
          : (0, X.jsx)(`span`, {
              className: He.folderStack,
              style: { aspectRatio: M, width: `${44 * Math.min(1, 0.8 * M)}%` },
              children: A.map((e, t) => {
                let { src: n, url: r } = e;
                return (0, X.jsx)(
                  `img`,
                  {
                    className: R(
                      `size-full object-cover`,
                      [He.folderStackFront, He.folderStackMiddle, He.folderStackBack][t],
                    ),
                    alt: ``,
                    draggable: !1,
                    loading: `lazy`,
                    src: n,
                    onLoad: (e) => {
                      let { naturalWidth: t, naturalHeight: r } = e.currentTarget;
                      m((e) => new Map(e).set(n, t > 0 && r > 0 ? Math.max(0.5, t / r) : 1));
                    },
                    onError: () => u((e) => new Set([...e, n])),
                  },
                  r,
                );
              }).reverse(),
            })),
      (t[29] = M),
      (t[30] = r),
      (t[31] = A),
      (t[32] = N))
    : (N = t[32]);
  let P;
  return (
    t[33] === N
      ? (P = t[34])
      : ((P = (0, X.jsx)(`span`, {
          ref: a,
          className: `relative flex min-h-0 w-full flex-1 items-center justify-center`,
          children: N,
        })),
        (t[33] = N),
        (t[34] = P)),
    P
  );
}
var Tt, Et, X;
function Dt() {
  return (Dt = e(() => {
    ((Tt = ce()), A(), m(), b(), (Et = he()), Ue(), it(), Ne(), at(), we(), (X = de()));
  }))();
}
function Ot(e, t, n) {
  if (De(e)) return null;
  let r = Le(e.node.id),
    i = n?.filter((e) => e.provider === r);
  if (i == null || i.length < 2) return null;
  if (e.search != null) {
    let t = xe(e.node.external_account, r);
    return t == null ? null : { name: t };
  }
  if (t !== `suggested`) return null;
  let a = e.node.external_account?.key ?? F(e.node.id);
  if (a == null) return null;
  let o = i.find((e) => e.accountKey === a);
  if (o == null) return null;
  let s = o.accountLabel ?? xe(e.node.external_account, r);
  return s == null ? (o.accountNumber == null ? null : { number: o.accountNumber }) : { name: s };
}
function kt() {
  return (kt = e(() => {
    (q(), Ee(), Se());
  }))();
}
function At(e) {
  let t = (0, jt.c)(18),
    { timestamp: n, opened: r, relative: i, dateKind: a } = e,
    o = r !== void 0 && r,
    s = i !== void 0 && i,
    c = D(),
    l = Ce();
  if (n == null) return `—`;
  if (a === `activity`) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, Z.jsx)(Je, { dateString: n, dayBasis: `elapsed` })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  if (s || a === `modified-relative`) {
    if (l.getTime() - new Date(n).getTime() < 6e4) {
      let e;
      return (
        t[2] === o
          ? (e = t[3])
          : ((e = (0, Z.jsx)(d, {
              id: `libraryNext.items.relativeActivityJustNow`,
              defaultMessage: `{opened, select, true {Opened just now} other {Modified just now}}`,
              description: `Library activity from less than a minute ago. opened distinguishes the user opening the item from the item being modified.`,
              values: { opened: o },
            })),
            (t[2] = o),
            (t[3] = e)),
        e
      );
    }
    let e;
    t[4] === n
      ? (e = t[5])
      : ((e = (0, Z.jsx)(Je, { dateString: n, dayBasis: `elapsed` })), (t[4] = n), (t[5] = e));
    let r;
    return (
      t[6] !== o || t[7] !== e
        ? ((r = (0, Z.jsx)(d, {
            id: `libraryNext.items.relativeActivity`,
            defaultMessage: `{opened, select, true {Opened {time} ago} other {Modified {time} ago}}`,
            description: `Suggested Library list activity. opened distinguishes last opening from modification; time is an abbreviated elapsed duration such as 2h.`,
            values: { opened: o, time: e },
          })),
          (t[6] = o),
          (t[7] = e),
          (t[8] = r))
        : (r = t[8]),
      r
    );
  }
  let u;
  if (t[9] !== c || t[10] !== l || t[11] !== n) {
    let e = new Date(n),
      r = ft(l, e);
    (r === 0
      ? (u = c.formatTime(e, { hour: `numeric`, minute: `2-digit` }))
      : r === 1
        ? t[13] === c
          ? (u = t[14])
          : ((u = c.formatRelativeTime(-1, `day`, { numeric: `auto` })),
            c.locale.startsWith(`en`) && (u = u.charAt(0).toUpperCase() + u.slice(1)),
            (t[13] = c),
            (t[14] = u))
        : (u =
            r > 0 && r <= l.getDay()
              ? c.formatDate(e, { weekday: `long` })
              : c.formatDate(e, {
                  month: `short`,
                  day: `numeric`,
                  year: e.getFullYear() === l.getFullYear() ? void 0 : `numeric`,
                })),
      (t[9] = c),
      (t[10] = l),
      (t[11] = n),
      (t[12] = u));
  } else u = t[12];
  if (a !== `suggested`) return u;
  let f;
  return (
    t[15] !== o || t[16] !== u
      ? ((f = (0, Z.jsx)(d, {
          id: `libraryNext.items.calendarActivity`,
          defaultMessage: `{opened, select, true {Opened {time}} other {Modified {time}}}`,
          description: `Suggested Library grid activity. opened distinguishes last opening from modification; time is a localized calendar label such as Aug 28 or Yesterday.`,
          values: { opened: o, time: u },
        })),
        (t[15] = o),
        (t[16] = u),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
var jt, Z;
function Mt() {
  return (Mt = e(() => {
    ((jt = ce()), G(), dt(), Ae(), Te(), (Z = de()));
  }))();
}
function Nt(e, t, n) {
  let r = $e(e);
  return !t && r ? { href: r, initiator: `sites_library`, onActivate: n } : void 0;
}
function Pt(e) {
  let t = (0, Q.c)(2),
    { entry: n } = e,
    r;
  return (
    t[0] === n.node.site_metadata?.status
      ? (r = t[1])
      : ((r =
          n.node.site_metadata?.status === `suspended`
            ? (0, $.jsx)(Oe, {
                children: (0, $.jsx)(d, {
                  id: `appgenPage.disabledBadge`,
                  defaultMessage: `Disabled`,
                  description: `Status badge shown next to a site name when the site is disabled`,
                }),
              })
            : null),
        (t[0] = n.node.site_metadata?.status),
        (t[1] = r)),
    r
  );
}
function Ft(e) {
  let t = (0, Q.c)(68),
    {
      entry: n,
      onLinkActivate: r,
      onOpen: i,
      actions: a,
      favoriteMarker: o,
      source: s,
      selection: c,
      selected: l,
      isDropTarget: u,
      titleAccessory: f,
      showSize: p,
      dateKind: m,
      reserveDisclosureSpace: h,
      selectionActive: g,
    } = e,
    v = u !== void 0 && u,
    y = p !== void 0 && p,
    b = m === void 0 ? `modified` : m,
    x = g !== void 0 && g,
    S = D(),
    C = O(Ie),
    w,
    T,
    E,
    k,
    A,
    j,
    M,
    P,
    F,
    I;
  if (
    t[0] !== C ||
    t[1] !== b ||
    t[2] !== n ||
    t[3] !== S ||
    t[4] !== r ||
    t[5] !== h ||
    t[6] !== x ||
    t[7] !== s
  ) {
    let e = Ot(n, b, C),
      i = Bt(n, e, S),
      a;
    (t[18] !== n.node.file_size_bytes || t[19] !== n.node.kind
      ? ((a = n.node.kind === `file` ? (0, $.jsx)(Lt, { bytes: n.node.file_size_bytes }) : `—`),
        (t[18] = n.node.file_size_bytes),
        (t[19] = n.node.kind),
        (t[20] = a))
      : (a = t[20]),
      (T = a),
      (w = Be),
      t[21] !== n || t[22] !== r || t[23] !== x
        ? ((M = Nt(n, x, r)), (t[21] = n), (t[22] = r), (t[23] = x), (t[24] = M))
        : (M = t[24]),
      (P = i),
      (F = h),
      (I = s),
      t[25] !== n || t[26] !== S
        ? ((E = ke(Me(n, S), n.node.library_artifact_type, S)), (t[25] = n), (t[26] = S), (t[27] = E))
        : (E = t[27]),
      t[28] === n
        ? ((k = t[29]), (A = t[30]))
        : ((k = (0, $.jsx)(Ht, { entry: n, size: `row` })),
          (A = De(n) ? void 0 : (0, $.jsx)(mt, { provider: J(n) })),
          (t[28] = n),
          (t[29] = k),
          (t[30] = A)),
      (j =
        e == null
          ? null
          : (0, $.jsx)(`span`, {
              className: R(
                `min-w-0 truncate text-secondary`,
                n.search == null &&
                  `opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100`,
              ),
              title: Vt(e, S),
              children: (0, $.jsx)(d, {
                id: `libraryNext.items.accountAttribution`,
                defaultMessage: `· {named, select, true {{account}} other {Account {number}}}`,
                description: `Connected account attribution beside a Library item's name. named is true when account is its nickname or email; otherwise number distinguishes unnamed accounts. Keep the leading separator.`,
                values: { named: e.name != null, account: e.name, number: e.number },
              }),
            })),
      (t[0] = C),
      (t[1] = b),
      (t[2] = n),
      (t[3] = S),
      (t[4] = r),
      (t[5] = h),
      (t[6] = x),
      (t[7] = s),
      (t[8] = w),
      (t[9] = T),
      (t[10] = E),
      (t[11] = k),
      (t[12] = A),
      (t[13] = j),
      (t[14] = M),
      (t[15] = P),
      (t[16] = F),
      (t[17] = I));
  } else
    ((w = t[8]),
      (T = t[9]),
      (E = t[10]),
      (k = t[11]),
      (A = t[12]),
      (j = t[13]),
      (M = t[14]),
      (P = t[15]),
      (F = t[16]),
      (I = t[17]));
  let L;
  t[31] !== n.node.is_shared || t[32] !== n.node.kind
    ? ((L =
        n.node.kind === `file` && n.node.is_shared
          ? (0, $.jsx)(_, { asset: N, className: `shrink-0 text-secondary` })
          : null),
      (t[31] = n.node.is_shared),
      (t[32] = n.node.kind),
      (t[33] = L))
    : (L = t[33]);
  let z;
  t[34] === n ? (z = t[35]) : ((z = (0, $.jsx)(Pt, { entry: n })), (t[34] = n), (t[35] = z));
  let B;
  t[36] !== o || t[37] !== L || t[38] !== z || t[39] !== j || t[40] !== f
    ? ((B = (0, $.jsxs)($.Fragment, { children: [j, o, L, f, z] })),
      (t[36] = o),
      (t[37] = L),
      (t[38] = z),
      (t[39] = j),
      (t[40] = f),
      (t[41] = B))
    : (B = t[41]);
  let V = b === `suggested`,
    H;
  t[42] !== b || t[43] !== n || t[44] !== V
    ? ((H = (0, $.jsx)(Ut, { entry: n, dateKind: b, relative: V })),
      (t[42] = b),
      (t[43] = n),
      (t[44] = V),
      (t[45] = H))
    : (H = t[45]);
  let U;
  t[46] !== b || t[47] !== n
    ? ((U = b === `shared` ? (0, $.jsx)(It, { entry: n }) : void 0), (t[46] = b), (t[47] = n), (t[48] = U))
    : (U = t[48]);
  let W = y ? T : void 0,
    G = b === `deleted`,
    K = !x && (n.node.library_artifact_type === `site` || n.site != null) && !$e(n) ? void 0 : i,
    q;
  return (
    t[49] !== w ||
    t[50] !== a ||
    t[51] !== v ||
    t[52] !== l ||
    t[53] !== c ||
    t[54] !== E ||
    t[55] !== k ||
    t[56] !== A ||
    t[57] !== B ||
    t[58] !== H ||
    t[59] !== U ||
    t[60] !== W ||
    t[61] !== G ||
    t[62] !== K ||
    t[63] !== M ||
    t[64] !== P ||
    t[65] !== F ||
    t[66] !== I
      ? ((q = (0, $.jsx)(w, {
          link: M,
          name: P,
          reserveDisclosureSpace: F,
          source: I,
          displayName: E,
          artwork: k,
          badge: A,
          favoriteMarker: B,
          activity: H,
          sharedBy: U,
          detail: W,
          sizeBeforeDate: G,
          onOpen: K,
          actions: a,
          selection: c,
          selected: l,
          isDropTarget: v,
        })),
        (t[49] = w),
        (t[50] = a),
        (t[51] = v),
        (t[52] = l),
        (t[53] = c),
        (t[54] = E),
        (t[55] = k),
        (t[56] = A),
        (t[57] = B),
        (t[58] = H),
        (t[59] = U),
        (t[60] = W),
        (t[61] = G),
        (t[62] = K),
        (t[63] = M),
        (t[64] = P),
        (t[65] = F),
        (t[66] = I),
        (t[67] = q))
      : (q = t[67]),
    q
  );
}
function It(e) {
  let t = (0, Q.c)(11),
    { entry: n } = e,
    r = n.node.shared_by,
    i;
  t[0] === r?.name
    ? (i = t[1])
    : ((i =
        r?.name ||
        (0, $.jsx)(d, {
          id: `libraryNext.items.unknownSharedBy`,
          defaultMessage: `—`,
          description: `Fallback in the Library Shared by column when the name of the person who shared the file or folder is unavailable`,
        })),
      (t[0] = r?.name),
      (t[1] = i));
  let a = i;
  if (n.node.shared_via?.length) {
    let e;
    (t[2] === n.node ? (e = t[3]) : ((e = (0, $.jsx)(_t, { node: n.node })), (t[2] = n.node), (t[3] = e)),
      (a = e));
  }
  let o;
  t[4] === r
    ? (o = t[5])
    : ((o = r?.name
        ? (0, $.jsx)(ut, { avatarUrl: r.avatar_url, colorKey: r.user_id, name: r.name, size: `response` })
        : null),
      (t[4] = r),
      (t[5] = o));
  let s;
  t[6] === a
    ? (s = t[7])
    : ((s = (0, $.jsx)(`span`, { className: `min-w-0 truncate`, children: a })), (t[6] = a), (t[7] = s));
  let c;
  return (
    t[8] !== o || t[9] !== s
      ? ((c = (0, $.jsxs)($.Fragment, { children: [o, s] })), (t[8] = o), (t[9] = s), (t[10] = c))
      : (c = t[10]),
    c
  );
}
function Lt(e) {
  let t = (0, Q.c)(4),
    { bytes: n } = e,
    r = D();
  if (n == null || !Number.isFinite(n) || n < 0) return `-`;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = [`B`, `KB`, `MB`, `GB`, `TB`]), (t[0] = i))
    : (i = t[0]);
  let a = i,
    o = n,
    s = 0;
  for (; o >= 1024 && s < a.length - 1;) ((o /= 1024), (s += 1));
  let c;
  return (
    t[1] !== r || t[2] !== o
      ? ((c = r.formatNumber(
          o,
          Number.isInteger(o)
            ? { maximumFractionDigits: 0 }
            : { minimumSignificantDigits: 3, maximumSignificantDigits: 3 },
        )),
        (t[1] = r),
        (t[2] = o),
        (t[3] = c))
      : (c = t[3]),
    `${c} ${a[s]}`
  );
}
function Rt(e) {
  let t = (0, Q.c)(55),
    {
      entry: n,
      onLinkActivate: r,
      onOpen: i,
      actions: a,
      selection: o,
      selected: s,
      isDropTarget: c,
      titleAccessory: l,
      selectionActive: u,
      dateKind: f,
    } = e,
    p = c !== void 0 && c,
    m = u !== void 0 && u,
    h = f === void 0 ? `modified` : f,
    g = D(),
    { node: v } = n,
    y = O(Ie),
    b;
  if (
    t[0] !== y ||
    t[1] !== a ||
    t[2] !== h ||
    t[3] !== n ||
    t[4] !== g ||
    t[5] !== p ||
    t[6] !== v.cloud_doc_url ||
    t[7] !== v.file_extension ||
    t[8] !== v.is_shared ||
    t[9] !== v.kind ||
    t[10] !== v.library_artifact_type ||
    t[11] !== v.library_file_category ||
    t[12] !== v.mime_type ||
    t[13] !== v.name ||
    t[14] !== v.saved_entity ||
    t[15] !== v.thumbnail_url ||
    t[16] !== r ||
    t[17] !== i ||
    t[18] !== s ||
    t[19] !== o ||
    t[20] !== m ||
    t[21] !== l
  ) {
    let e = Ot(n, h, y),
      c = Bt(n, e, g),
      u = v.library_artifact_type === `site` || n.site != null,
      f;
    t[23] !== n || t[24] !== u || t[25] !== v.library_artifact_type || t[26] !== v.thumbnail_url
      ? ((f = u ? !!v.thumbnail_url : v.library_artifact_type !== `flashcards` && qt(n)),
        (t[23] = n),
        (t[24] = u),
        (t[25] = v.library_artifact_type),
        (t[26] = v.thumbnail_url),
        (t[27] = f))
      : (f = t[27]);
    let x = f,
      S = v.kind === `directory`,
      C = v.saved_entity != null,
      w = v.file_extension ? `${v.name}.${v.file_extension}` : v.name,
      T = v.mime_type ?? void 0,
      E = v.kind === `file` ? (v.cloud_doc_url ?? void 0) : void 0,
      D;
    t[28] !== w || t[29] !== T || t[30] !== E
      ? ((D = ie({ fileName: w, mimeType: T, sourceUrl: E })),
        (t[28] = w),
        (t[29] = T),
        (t[30] = E),
        (t[31] = D))
      : (D = t[31]);
    let O = D,
      k =
        S ||
        (!C &&
          (O.category === `spreadsheet` ||
            O.category === `presentation` ||
            v.library_file_category === `video` ||
            u ||
            v.library_artifact_type === `site_preview`)),
      A;
    t[32] !== n || t[33] !== S
      ? ((A = S
          ? (0, $.jsx)(Ht, { entry: n, size: `row` })
          : (0, $.jsx)(Kt, { entry: n, style: `row`, showThumbnail: !1 })),
        (t[32] = n),
        (t[33] = S),
        (t[34] = A))
      : (A = t[34]);
    let j;
    t[35] !== n || t[36] !== g || t[37] !== v.library_artifact_type
      ? ((j = ke(Me(n, g), v.library_artifact_type, g)),
        (t[35] = n),
        (t[36] = g),
        (t[37] = v.library_artifact_type),
        (t[38] = j))
      : (j = t[38]);
    let M;
    t[39] === j
      ? (M = t[40])
      : ((M = (0, $.jsx)(`span`, { className: `min-w-0 truncate`, children: j })), (t[39] = j), (t[40] = M));
    let P;
    t[41] !== n || t[42] !== C
      ? ((P = C && (0, $.jsx)(Wt, { entry: n })), (t[41] = n), (t[42] = C), (t[43] = P))
      : (P = t[43]);
    let F;
    t[44] === v.is_shared
      ? (F = t[45])
      : ((F = v.is_shared && (0, $.jsx)(_, { asset: N, className: `shrink-0 text-secondary` })),
        (t[44] = v.is_shared),
        (t[45] = F));
    let I;
    t[46] === n ? (I = t[47]) : ((I = (0, $.jsx)(Pt, { entry: n })), (t[46] = n), (t[47] = I));
    let L;
    t[48] !== A || t[49] !== M || t[50] !== P || t[51] !== F || t[52] !== I || t[53] !== l
      ? ((L = (0, $.jsxs)($.Fragment, { children: [A, M, P, F, l, I] })),
        (t[48] = A),
        (t[49] = M),
        (t[50] = P),
        (t[51] = F),
        (t[52] = I),
        (t[53] = l),
        (t[54] = L))
      : (L = t[54]);
    let z = L,
      B = (t, l, u) => {
        let f = l === void 0 ? x : l;
        return (0, $.jsxs)(ye, {
          link: Nt(n, m, r),
          name: c,
          square: !f || S,
          overlayHeader: C && f,
          landscape: k,
          documentHeader: !k && !C && v.library_file_category !== `image` ? z : void 0,
          header: k || C ? z : void 0,
          onOpen: !m && (n.node.library_artifact_type === `site` || n.site != null) && !$e(n) ? void 0 : i,
          actions: a?.map(zt),
          selection: o,
          selected: s,
          isDropTarget: p,
          selectionActive: m,
          badge: De(n) ? void 0 : (0, $.jsx)(mt, { provider: J(n), thumbnail: !0 }),
          caption: (0, $.jsx)($.Fragment, {
            children:
              e == null
                ? null
                : (0, $.jsx)(`div`, {
                    className: R(
                      `truncate ps-1 pt-2 text-xs text-secondary`,
                      n.search == null &&
                        `opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100`,
                    ),
                    title: Vt(e, g),
                    children:
                      e.name ?? (0, $.jsx)(d, { ...Zt.numberedAccount, values: { number: e.number } }),
                  }),
          }),
          children: [
            u,
            S &&
              (0, $.jsx)(Ct, {
                entry: n,
                fallback: (0, $.jsx)(Re, { artwork: (0, $.jsx)(Ht, { entry: n, size: `card` }) }),
              }),
            !S && f && t,
            !S &&
              !f &&
              (0, $.jsx)(`span`, {
                className: `relative flex min-h-0 w-full flex-1`,
                children: (0, $.jsx)(Re, {
                  artwork: (0, $.jsx)(Kt, { entry: n, style: `artwork`, showThumbnail: !1 }),
                }),
              }),
          ],
        });
      };
    ((b = x && !S ? (0, $.jsx)(Gt, { entry: n, size: `card`, renderCard: B }) : B()),
      (t[0] = y),
      (t[1] = a),
      (t[2] = h),
      (t[3] = n),
      (t[4] = g),
      (t[5] = p),
      (t[6] = v.cloud_doc_url),
      (t[7] = v.file_extension),
      (t[8] = v.is_shared),
      (t[9] = v.kind),
      (t[10] = v.library_artifact_type),
      (t[11] = v.library_file_category),
      (t[12] = v.mime_type),
      (t[13] = v.name),
      (t[14] = v.saved_entity),
      (t[15] = v.thumbnail_url),
      (t[16] = r),
      (t[17] = i),
      (t[18] = s),
      (t[19] = o),
      (t[20] = m),
      (t[21] = l),
      (t[22] = b));
  } else b = t[22];
  return b;
}
function zt(e) {
  let { key: t, component: n } = e;
  return (0, $.jsx)(Yt.Fragment, { children: n }, t);
}
function Bt(e, t, n) {
  let r = ze(Le(e.node.id));
  return t != null && r != null
    ? n.formatMessage(
        {
          id: `libraryNext.items.accountAccessibleName`,
          defaultMessage: `{name} · {provider} · {named, select, true {{account}} other {Account {number}}}`,
          description: `Accessible name for a connected Library item. name is the file or folder title and provider is a cloud storage brand. named is true when account is its nickname or email; otherwise number distinguishes unnamed accounts.`,
        },
        { name: Me(e, n), provider: r, named: t.name != null, account: t.name, number: t.number },
      )
    : e.search != null && r != null
      ? n.formatMessage(
          {
            id: `libraryNext.items.sourceAccessibleName`,
            defaultMessage: `{name} · {provider}`,
            description: `Accessible name for a connected file or folder in Library search when no account label is shown. name is the file or folder title and provider is the cloud storage brand, such as Google Drive or Dropbox.`,
          },
          { name: Me(e, n), provider: r },
        )
      : Me(e, n);
}
function Vt(e, t) {
  return e.name ?? t.formatMessage(Zt.numberedAccount, { number: e.number });
}
function Ht(e) {
  let t = (0, Q.c)(28),
    { entry: n, size: r, fallback: i } = e,
    { node: a } = n;
  if (n.space != null) {
    let e = r === `row` ? 20 : 32,
      i;
    return (
      t[0] !== n.space.id || t[1] !== n.space.symbol || t[2] !== e
        ? ((i = (0, $.jsx)(Qe, {
            spaceId: n.space.id,
            symbol: n.space.symbol,
            loadMissingAppearance: !1,
            size: e,
          })),
          (t[0] = n.space.id),
          (t[1] = n.space.symbol),
          (t[2] = e),
          (t[3] = i))
        : (i = t[3]),
      i
    );
  }
  if (a.library_artifact_type === `site` || n.site != null) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(h, {})), (t[4] = e)) : (e = t[4]),
      e
    );
  }
  if (a.library_artifact_type === `flashcards`) {
    let e = r === `row` ? u : E,
      n;
    return (t[5] === e ? (n = t[6]) : ((n = (0, $.jsx)(_, { asset: e })), (t[5] = e), (t[6] = n)), n);
  }
  if (a.kind !== `directory` && !qt(n)) {
    let e = r === `row` ? `row` : `artwork`,
      i;
    return (
      t[7] !== n || t[8] !== e
        ? ((i = (0, $.jsx)(Kt, { entry: n, style: e })), (t[7] = n), (t[8] = e), (t[9] = i))
        : (i = t[9]),
      i
    );
  }
  if (
    a.kind !== `directory` &&
    (a.thumbnail_url || a.saved_entity?.display_data.image_url || a.library_file_category === `image`)
  ) {
    let e;
    return (
      t[10] !== n || t[11] !== i || t[12] !== r
        ? ((e = (0, $.jsx)(Gt, { entry: n, size: r, fallback: i })),
          (t[10] = n),
          (t[11] = i),
          (t[12] = r),
          (t[13] = e))
        : (e = t[13]),
      e
    );
  }
  if (a.kind === `directory`) {
    if (
      a.id === `library:collection:shared-with-me` ||
      /^external-gdrive:(?:account:[A-Za-z0-9_-]+:)?collection:shared-with-me$/u.test(a.id)
    ) {
      let e;
      return (
        t[14] === r
          ? (e = t[15])
          : ((e = r === `row` ? (0, $.jsx)(_, { asset: se }) : (0, $.jsx)(_, { asset: B })),
            (t[14] = r),
            (t[15] = e)),
        e
      );
    }
    if (De(n)) {
      let e;
      t[16] === n ? (e = t[17]) : ((e = J(n)), (t[16] = n), (t[17] = e));
      let i;
      return (
        t[18] !== r || t[19] !== e
          ? ((i = (0, $.jsx)(mt, { provider: e, standalone: r })), (t[18] = r), (t[19] = e), (t[20] = i))
          : (i = t[20]),
        i
      );
    }
    if (a.is_shared) {
      let e;
      return (
        t[21] === r
          ? (e = t[22])
          : ((e = r === `row` ? (0, $.jsx)(ee, {}) : (0, $.jsx)(_, { asset: fe })), (t[21] = r), (t[22] = e)),
        e
      );
    }
    let e;
    return (
      t[23] === r
        ? (e = t[24])
        : ((e = r === `row` ? (0, $.jsx)(oe, {}) : (0, $.jsx)(ne, {})), (t[23] = r), (t[24] = e)),
      e
    );
  }
  let o = r === `row` ? `row` : `artwork`,
    s;
  return (
    t[25] !== n || t[26] !== o
      ? ((s = (0, $.jsx)(Kt, { entry: n, style: o })), (t[25] = n), (t[26] = o), (t[27] = s))
      : (s = t[27]),
    s
  );
}
function Ut(e) {
  let t = (0, Q.c)(7),
    { entry: n, relative: r, dateKind: i } = e,
    a = r !== void 0 && r,
    o = n.node.updated_at ?? n.node.file_upload_time,
    s;
  t[0] === n ? (s = t[1]) : ((s = J(n)), (t[0] = n), (t[1] = s));
  let c = s,
    l =
      i === `suggested` &&
      n.lastUsedAt != null &&
      ((c !== `native` && c !== `native_shared`) || o == null || n.lastUsedAt > o),
    u = l ? n.lastUsedAt : o;
  i === `activity` && n.node.library_artifact_type === `page` && n.lastUsedAt !== void 0
    ? (u = n.lastUsedAt)
    : i === `shared`
      ? (u = n.node.shared_at)
      : i === `deleted`
        ? (u = n.node.trashed_at)
        : i === `saved` && (u = n.favorite?.created_at);
  let d;
  return (
    t[2] !== i || t[3] !== l || t[4] !== a || t[5] !== u
      ? ((d = (0, $.jsx)(At, { timestamp: u, opened: l, relative: a, dateKind: i })),
        (t[2] = i),
        (t[3] = l),
        (t[4] = a),
        (t[5] = u),
        (t[6] = d))
      : (d = t[6]),
    d
  );
}
function Wt(e) {
  let t = (0, Q.c)(7),
    { entry: n } = e,
    r = n.node.saved_entity?.entity_data;
  if (r == null || (r.type === `place` && r.rating == null) || (r.type === `product` && !r.price))
    return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`span`, { "aria-hidden": `true`, children: Xt })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== r.rating || t[2] !== r.type
    ? ((a =
        r.type === `place` && r.rating != null
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(_, { asset: g, className: `shrink-0` }),
                (0, $.jsx)(s, { value: r.rating, minimumFractionDigits: 1, maximumFractionDigits: 1 }),
              ],
            })
          : null),
      (t[1] = r.rating),
      (t[2] = r.type),
      (t[3] = a))
    : (a = t[3]);
  let o = r.type === `product` && r.price,
    c;
  return (
    t[4] !== a || t[5] !== o
      ? ((c = (0, $.jsxs)(`span`, {
          className: `inline-flex shrink-0 items-center gap-1 opacity-60`,
          children: [i, a, o],
        })),
        (t[4] = a),
        (t[5] = o),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function Gt(e) {
  let t = (0, Q.c)(66),
    { entry: n, size: r, fallback: i, iconStyle: a, renderCard: o } = e,
    s = p(tt),
    c = O(Ve),
    l = (0, Yt.useRef)(null),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { once: !0, margin: `200px` }), (t[0] = u))
    : (u = t[0]);
  let d = k(l, u),
    f = r === `card` && a == null && n.node.library_artifact_type === `site_preview`,
    m =
      (f ? n.node.thumbnail_preview_url : n.node.thumbnail_url) ??
      n.node.saved_entity?.display_data.image_url,
    h;
  t[1] === n ? (h = t[2]) : ((h = J(n)), (t[1] = n), (t[2] = h));
  let g = h,
    _ =
      r === `card` &&
      n.node.kind === `file` &&
      n.node.library_file_category === `image` &&
      n.node.saved_entity == null &&
      (g === `native` || g === `native_shared`),
    [v, y] = (0, Yt.useState)(),
    [b, x] = (0, Yt.useState)(),
    S =
      !_ &&
      m != null &&
      /^data:image\/(?:avif|bmp|gif|jpeg|png|svg\+xml|webp|x-icon|vnd\.microsoft\.icon)(?:;[^,]*)?,/iu.test(m)
        ? m
        : null,
    C = _ ? n.node.id : (m ?? n.node.id),
    w;
  t[3] !== n.currentVersion ||
  t[4] !== n.node.file_id ||
  t[5] !== n.node.gizmo_id ||
  t[6] !== n.node.id ||
  t[7] !== n.node.kind ||
  t[8] !== n.node.mime_type ||
  t[9] !== n.node.name ||
  t[10] !== n.node.saved_entity ||
  t[11] !== n.node.thumbnail_preview_url ||
  t[12] !== n.node.updated_at ||
  t[13] !== _ ||
  t[14] !== c ||
  t[15] !== s.value.accountId ||
  t[16] !== s.value.userId ||
  t[17] !== f ||
  t[18] !== m
    ? ((w = _
        ? gt({
            accountId: s.value.accountId,
            userId: c,
            file: {
              id: n.node.id,
              file_id: n.node.file_id ?? n.node.id,
              file_name: n.node.name,
              gizmo_id: n.node.gizmo_id,
              mime_type: n.node.mime_type,
            },
            currentVersion: n.currentVersion,
            modifiedAt: n.node.updated_at,
            useDownloadUrlAsImageSrc: !0,
          })
        : {
            cacheKey: [`library-api`, s.value.accountId, JSON.stringify(s.value.userId ?? null)],
            resolveAsset: async (e) =>
              f && m != null
                ? { kind: `available`, ...ot({ download_url: m }) }
                : m != null && ve(m)
                  ? { kind: `available`, ...(await st(e)) }
                  : m == null || (n.node.kind === `file` && n.node.saved_entity == null && Fe(m) == null)
                    ? {
                        kind: `available`,
                        ...(await rt(n.node.id, {
                          fileId: n.node.file_id,
                          fileName: n.node.name,
                          mimeType: n.node.mime_type,
                          thumbnailUrl: m ?? null,
                          thumbnailPreviewUrl: n.node.thumbnail_preview_url ?? null,
                        })),
                      }
                    : { kind: `available`, ...ot({ download_url: m }) },
            useDownloadUrlAsImageSrc: !0,
          }),
      (t[3] = n.currentVersion),
      (t[4] = n.node.file_id),
      (t[5] = n.node.gizmo_id),
      (t[6] = n.node.id),
      (t[7] = n.node.kind),
      (t[8] = n.node.mime_type),
      (t[9] = n.node.name),
      (t[10] = n.node.saved_entity),
      (t[11] = n.node.thumbnail_preview_url),
      (t[12] = n.node.updated_at),
      (t[13] = _),
      (t[14] = c),
      (t[15] = s.value.accountId),
      (t[16] = s.value.userId),
      (t[17] = f),
      (t[18] = m),
      (t[19] = w))
    : (w = t[19]);
  let T = a != null || d,
    E;
  t[20] === T ? (E = t[21]) : ((E = { enabled: T }), (t[20] = T), (t[21] = E));
  let { src: D, isError: A } = Ye(S == null ? C : ``, w, E),
    j = S ?? D,
    M = j == null ? A : j === v,
    N = j != null && b?.src === j;
  if (a != null) {
    let e;
    return (
      t[22] !== M || t[23] !== i || t[24] !== a || t[25] !== j
        ? ((e =
            j != null && !M
              ? (0, $.jsx)(`img`, {
                  className: R(
                    { artwork: `size-8`, card: `size-10`, row: `size-5`, "thumbnail-row": `size-4` }[a],
                    `shrink-0 object-contain`,
                    /^data:image\/svg\+xml[;,]/iu.test(j) && `dark:invert`,
                  ),
                  alt: ``,
                  draggable: !1,
                  src: j,
                  onError: () => y(j),
                })
              : (0, $.jsx)($.Fragment, { children: i })),
          (t[22] = M),
          (t[23] = i),
          (t[24] = a),
          (t[25] = j),
          (t[26] = e))
        : (e = t[26]),
      e
    );
  }
  let P = n.node.saved_entity?.entity_data?.type,
    F = r === `row`,
    I;
  t[27] !== n.node.height || t[28] !== n.node.width
    ? ((I = Jt(n.node.width, n.node.height)), (t[27] = n.node.height), (t[28] = n.node.width), (t[29] = I))
    : (I = t[29]);
  let L = I;
  (M || P === `place`
    ? (L = 1)
    : N &&
      (n.node.kind === `directory` ||
        n.node.library_file_category === `image` ||
        n.node.saved_entity != null) &&
      (L = b.aspectRatio),
    (n.node.library_artifact_type === `site_preview` ||
      n.node.library_artifact_type === `site` ||
      n.site != null) &&
      (L = 1.7777777777777777));
  let z = o == null ? l : void 0,
    B = F && `h-full`,
    V = !F && (n.node.library_file_category === `image` || P === `product`) && `min-h-24`,
    H = !M && (!N || P === `product`) && `bg-surface-tertiary`,
    U;
  t[30] !== H || t[31] !== B || t[32] !== V
    ? ((U = R(`relative flex w-full items-center justify-center`, B, V, H)),
      (t[30] = H),
      (t[31] = B),
      (t[32] = V),
      (t[33] = U))
    : (U = t[33]);
  let W;
  t[34] !== L || t[35] !== F
    ? ((W = F ? void 0 : { aspectRatio: L }), (t[34] = L), (t[35] = F), (t[36] = W))
    : (W = t[36]);
  let G;
  t[37] !== n || t[38] !== M || t[39] !== i || t[40] !== r
    ? ((G = M ? (i ?? (0, $.jsx)(Kt, { entry: n, style: r === `row` ? `thumbnail-row` : `artwork` })) : null),
      (t[37] = n),
      (t[38] = M),
      (t[39] = i),
      (t[40] = r),
      (t[41] = G))
    : (G = t[41]);
  let K;
  t[42] !== L ||
  t[43] !== P ||
  t[44] !== n.node.library_file_category ||
  t[45] !== M ||
  t[46] !== F ||
  t[47] !== N ||
  t[48] !== j
    ? ((K =
        j != null && !M
          ? (0, $.jsx)(`img`, {
              alt: ``,
              draggable: !1,
              src: j,
              onLoad: (e) => {
                x({ src: j, aspectRatio: Jt(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight) });
              },
              onError: () => y(j),
              className: R(
                `absolute inset-0 size-full`,
                P === `product` || (!F && n.node.library_file_category === `image` && L > 1)
                  ? `object-contain`
                  : `object-cover`,
                !N && `opacity-0`,
              ),
              loading: `lazy`,
            })
          : null),
      (t[42] = L),
      (t[43] = P),
      (t[44] = n.node.library_file_category),
      (t[45] = M),
      (t[46] = F),
      (t[47] = N),
      (t[48] = j),
      (t[49] = K))
    : (K = t[49]);
  let q;
  t[50] !== n.node.saved_entity || t[51] !== N || t[52] !== r || t[53] !== j
    ? ((q =
        j != null &&
        N &&
        r === `card` &&
        n.node.saved_entity != null &&
        (0, $.jsx)(`img`, {
          className: He.mediaHeaderBlur,
          "aria-hidden": !0,
          alt: ``,
          draggable: !1,
          src: j,
        })),
      (t[50] = n.node.saved_entity),
      (t[51] = N),
      (t[52] = r),
      (t[53] = j),
      (t[54] = q))
    : (q = t[54]);
  let ee;
  t[55] !== U || t[56] !== W || t[57] !== G || t[58] !== K || t[59] !== q || t[60] !== z
    ? ((ee = (0, $.jsxs)(`span`, { ref: z, className: U, style: W, children: [G, K, q] })),
      (t[55] = U),
      (t[56] = W),
      (t[57] = G),
      (t[58] = K),
      (t[59] = q),
      (t[60] = z),
      (t[61] = ee))
    : (ee = t[61]);
  let te = ee,
    ne;
  return (
    t[62] !== M || t[63] !== te || t[64] !== o
      ? ((ne = o
          ? o(
              te,
              !M,
              (0, $.jsx)(`span`, {
                ref: l,
                "aria-hidden": !0,
                className: `pointer-events-none absolute inset-0`,
              }),
            )
          : te),
        (t[62] = M),
        (t[63] = te),
        (t[64] = o),
        (t[65] = ne))
      : (ne = t[65]),
    ne
  );
}
function Kt(e) {
  let t = (0, Q.c)(26),
    { entry: n, style: i, showThumbnail: a } = e,
    o = a === void 0 || a,
    s = n.node.file_extension,
    c = n.node.name,
    l = n.node.library_artifact_type,
    d = n.node.mime_type ?? void 0,
    f;
  t[0] === n ? (f = t[1]) : ((f = J(n)), (t[0] = n), (t[1] = f));
  let p = n.node.kind === `file` ? (n.node.cloud_doc_url ?? void 0) : void 0,
    m;
  t[2] !== n.node.file_extension ||
  t[3] !== n.node.id ||
  t[4] !== n.node.library_artifact_type ||
  t[5] !== n.node.name ||
  t[6] !== i ||
  t[7] !== d ||
  t[8] !== f ||
  t[9] !== p
    ? ((m = (0, $.jsx)(nt, {
        fileExtension: s,
        fileName: c,
        libraryArtifactType: l,
        mimeType: d,
        provider: f,
        mountedLibraryFileId: n.node.id,
        sourceUrl: p,
        style: i,
      })),
      (t[2] = n.node.file_extension),
      (t[3] = n.node.id),
      (t[4] = n.node.library_artifact_type),
      (t[5] = n.node.name),
      (t[6] = i),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m))
    : (m = t[10]);
  let h = m;
  if (i === `card` || i === `artwork` || i === `row`) {
    let e =
      n.node.saved_entity?.entity_data?.type ?? n.node.saved_entity?.saved_target.sidebar_params.category;
    if (e === `product`) {
      let e = i === `row` ? P : te,
        n;
      (t[11] === e ? (n = t[12]) : ((n = (0, $.jsx)(_, { asset: e })), (t[11] = e), (t[12] = n)), (h = n));
    } else if (e === `place`) {
      let e = i === `row` ? le : C,
        n;
      (t[13] === e ? (n = t[14]) : ((n = (0, $.jsx)(_, { asset: e })), (t[13] = e), (t[14] = n)), (h = n));
    } else if (n.node.library_artifact_type === `flashcards`) {
      let e = i === `row` ? u : E,
        n;
      (t[15] === e ? (n = t[16]) : ((n = (0, $.jsx)(_, { asset: e })), (t[15] = e), (t[16] = n)), (h = n));
    } else if (n.node.library_file_category === `video`) {
      let e = i === `row` ? r : L,
        n;
      (t[17] === e
        ? (n = t[18])
        : ((n = (0, $.jsx)(_, { asset: e, className: `text-file-video` })), (t[17] = e), (t[18] = n)),
        (h = n));
    } else if (
      n.node.library_artifact_type === `site_preview` ||
      n.node.library_artifact_type === `site` ||
      n.site != null
    ) {
      let e = i === `row` ? z : _e,
        n;
      (t[19] === e
        ? (n = t[20])
        : ((n = (0, $.jsx)(_, { asset: e, className: `text-purple` })), (t[19] = e), (t[20] = n)),
        (h = n));
    }
  }
  if (o && n.node.kind === `file` && !qt(n) && n.node.thumbnail_url) {
    let e = i === `card` || i === `artwork` ? `card` : `row`,
      r;
    return (
      t[21] !== n || t[22] !== h || t[23] !== i || t[24] !== e
        ? ((r = (0, $.jsx)(Gt, { entry: n, size: e, fallback: h, iconStyle: i })),
          (t[21] = n),
          (t[22] = h),
          (t[23] = i),
          (t[24] = e),
          (t[25] = r))
        : (r = t[25]),
      r
    );
  }
  return h;
}
function qt({ node: e }) {
  return (
    e.library_file_category === `image` ||
    (e.library_artifact_type === `site_preview` && !!e.thumbnail_preview_url) ||
    (e.saved_entity != null && !!(e.thumbnail_url ?? e.saved_entity.display_data.image_url))
  );
}
function Jt(e, t) {
  return e == null || t == null || e <= 0 || t <= 0 ? 1 : Math.max(1 / 2, e / t);
}
var Q, Yt, $, Xt, Zt;
function Qt() {
  return (Qt = e(() => {
    ((Q = ce()),
      y(),
      f(),
      l(),
      S(),
      a(),
      pe(),
      me(),
      j(),
      H(),
      ae(),
      re(),
      V(),
      x(),
      K(),
      ge(),
      I(),
      A(),
      m(),
      b(),
      (Yt = he()),
      G(),
      et(),
      lt(),
      Ue(),
      it(),
      je(),
      v(),
      w(),
      Ee(),
      Ge(),
      be(),
      Ke(),
      ht(),
      pt(),
      qe(),
      St(),
      Ne(),
      Se(),
      at(),
      We(),
      Dt(),
      kt(),
      Mt(),
      Ze(),
      we(),
      ($ = de()),
      (Xt = `·`),
      (Zt = t({
        numberedAccount: {
          id: `libraryNext.items.numberedAccount`,
          defaultMessage: `Account {number}`,
          description: `Fallback label for a connected Library account without a nickname or email. number distinguishes accounts from the same cloud storage provider.`,
        },
      })));
  }))();
}
export { Lt as a, Mt as c, It as i, Ot as l, Rt as n, Qt as o, Ft as r, At as s, Ut as t, kt as u };
//# sourceMappingURL=library-item-a06d7f108fc4.js.map
