import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $U as n,
  $o as r,
  $st as i,
  Cj as a,
  DB as o,
  FBt as s,
  Go as c,
  Ho as l,
  IS as u,
  Ij as d,
  Jo as f,
  KOt as p,
  Ko as m,
  LNt as h,
  LS as g,
  MNt as _,
  NNt as v,
  NSt as y,
  OB as b,
  PBt as x,
  Pq as S,
  QU as C,
  Qo as w,
  Qst as T,
  SV as E,
  TY as D,
  Uo as O,
  Vo as k,
  Wo as A,
  XOt as j,
  Xo as M,
  YOt as N,
  Yo as P,
  Yst as F,
  ZSt as I,
  Zo as L,
  _A as R,
  _Z as z,
  au as B,
  bSt as V,
  bu as H,
  ck as U,
  ej as W,
  es as G,
  gA as ee,
  gp as te,
  hp as K,
  iCt as ne,
  lg as re,
  mTt as ie,
  ns as ae,
  okt as oe,
  ou as se,
  pTt as ce,
  qo as le,
  rj as ue,
  rk as de,
  tk as fe,
  tkt as q,
  ts as pe,
  uW as me,
  ug as he,
  vZ as ge,
  yu as _e,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $lt as ve,
  BFt as ye,
  BYn as be,
  GYn as xe,
  Glt as Se,
  HYn as Ce,
  JYn as we,
  KBr as Te,
  KYn as Ee,
  Kht as De,
  Klt as Oe,
  Lpn as ke,
  NYn as Ae,
  Nmt as je,
  Nx as Me,
  PYn as Ne,
  Pmt as Pe,
  Px as Fe,
  Qlt as Ie,
  SYn as Le,
  TYn as Re,
  Tan as ze,
  Uht as Be,
  Vpn as Ve,
  Wht as He,
  Xfn as Ue,
  Ylt as We,
  Ypn as J,
  _Xn as Ge,
  aat as Ke,
  bLr as qe,
  d as Je,
  eut as Ye,
  gXn as Xe,
  hXn as Ze,
  hen as Qe,
  iat as $e,
  mXn as et,
  pen as tt,
  u as nt,
  wLr as rt,
  wan as it,
  x0 as at,
  xYn as ot,
  y0 as st,
  zFt as ct,
} from "./app-initial-ad16eaadf81f.js";
import { n as lt, t as ut } from "./profile-avatar-bc7371feb0c0.js";
import { a as dt, t as ft } from "./timestamps-85bd12c0e1b2.js";
import { n as pt, t as mt } from "./library-provider-badge-54f8b706eeef.js";
import { i as ht, r as gt } from "./navigate-with-file-preview-dbdb40677abd.js";
function _t(e) {
  let n = (0, xt.c)(36),
    { node: r } = e,
    i = t(T),
    a = oe(),
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _;
  if (n[0] !== a || n[1] !== r.shared_by?.name || n[2] !== r.shared_via || n[3] !== i) {
    l = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let [e, ...t] = r.shared_via ?? [];
      if (e == null) {
        l = null;
        break bb0;
      }
      let v;
      n[16] === i
        ? (v = n[17])
        : ((v = function (e) {
            (e.stopPropagation(),
              !e.defaultPrevented &&
                e.button === 0 &&
                !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
                Ke(i, F));
          }),
          (n[16] = i),
          (n[17] = v));
      let y = v;
      ((c = `flex min-w-0 items-center gap-1`),
        (o = q),
        (h = `libraryNext.items.sharedByTeamsWithOverflow`),
        (g = `{hasSharer, select, true {<sharer>{name}</sharer> via <teams>{teamLink}</teams>} other {via <teams>{teamLink}</teams>}}`),
        (_ = `Single-line attribution in the Shared by column. hasSharer indicates whether name identifies the person who shared the item. teamLink contains the first linked team name and a button showing the count of additional teams granting access. The sharer and teams tags preserve truncation around those names.`),
        (d = !!r.shared_by?.name),
        (f = r.shared_by?.name),
        (p = bt),
        (m = yt),
        (s = (0, Y.jsxs)(V, {
          className: `group/team inline-flex max-w-full min-w-0 cursor-interaction items-center gap-1 align-bottom hover:text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring`,
          title: ``,
          to: `/settings/teams/${encodeURIComponent(e.id)}`,
          onClick: y,
          children: [
            (0, Y.jsx)(`span`, {
              className: `truncate underline decoration-dotted underline-offset-4`,
              children: e.name,
            }),
            t.length === 0
              ? (0, Y.jsx)(E, {
                  className: `opacity-0 group-hover/team:opacity-100 group-focus-visible/team:opacity-100 pointer-coarse:opacity-100`,
                })
              : null,
          ],
        })),
        (u =
          t.length > 0
            ? (0, Y.jsx)(fe, {
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
                    { count: t.length },
                  ),
                  onClick: vt,
                  children: (0, Y.jsx)(q, {
                    id: `libraryNext.items.sharedByTeamsMoreCount`,
                    defaultMessage: `+{count, number}`,
                    description: `Compact button showing how many additional teams grant access to a shared Library item`,
                    values: { count: t.length },
                  }),
                }),
                children: t.map((e) =>
                  (0, Y.jsx)(
                    de.Item,
                    {
                      asChild: !0,
                      onClick: y,
                      children: (0, Y.jsx)(V, {
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
    ((n[0] = a),
      (n[1] = r.shared_by?.name),
      (n[2] = r.shared_via),
      (n[3] = i),
      (n[4] = o),
      (n[5] = s),
      (n[6] = c),
      (n[7] = l),
      (n[8] = u),
      (n[9] = d),
      (n[10] = f),
      (n[11] = p),
      (n[12] = m),
      (n[13] = h),
      (n[14] = g),
      (n[15] = _));
  } else
    ((o = n[4]),
      (s = n[5]),
      (c = n[6]),
      (l = n[7]),
      (u = n[8]),
      (d = n[9]),
      (f = n[10]),
      (p = n[11]),
      (m = n[12]),
      (h = n[13]),
      (g = n[14]),
      (_ = n[15]));
  if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
  let v;
  n[18] !== s || n[19] !== u
    ? ((v = (0, Y.jsxs)(Y.Fragment, { children: [s, u] })), (n[18] = s), (n[19] = u), (n[20] = v))
    : (v = n[20]);
  let y;
  n[21] !== v || n[22] !== d || n[23] !== f || n[24] !== p || n[25] !== m
    ? ((y = { hasSharer: d, name: f, sharer: p, teams: m, teamLink: v }),
      (n[21] = v),
      (n[22] = d),
      (n[23] = f),
      (n[24] = p),
      (n[25] = m),
      (n[26] = y))
    : (y = n[26]);
  let b;
  n[27] !== o || n[28] !== y || n[29] !== h || n[30] !== g || n[31] !== _
    ? ((b = (0, Y.jsx)(o, { id: h, defaultMessage: g, description: _, values: y })),
      (n[27] = o),
      (n[28] = y),
      (n[29] = h),
      (n[30] = g),
      (n[31] = _),
      (n[32] = b))
    : (b = n[32]);
  let x;
  return (
    n[33] !== c || n[34] !== b
      ? ((x = (0, Y.jsx)(`span`, { className: c, children: b })), (n[33] = c), (n[34] = b), (n[35] = x))
      : (x = n[35]),
    x
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
    ((xt = x()), I(), j(), y(), U(), D(), i(), $e(), Te(), (Y = h()));
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
  let n = (0, Tt.c)(35),
    { urls: r, fallback: i } = e,
    a = t(Ue),
    o = (0, Et.useRef)(null),
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { once: !0, margin: `200px` }), (n[0] = s))
    : (s = n[0]);
  let c = ie(o, s),
    l;
  n[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = new Set()), (n[1] = l)) : (l = n[1]);
  let [u, d] = (0, Et.useState)(l),
    f;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = new Map()), (n[2] = f)) : (f = n[2]);
  let [p, m] = (0, Et.useState)(f),
    h;
  n[3] !== a.value.accountId || n[4] !== a.value.userId
    ? ((h = function (e) {
        return {
          cacheKey: [`library-api`, a.value.accountId, JSON.stringify(a.value.userId ?? null)],
          resolveAsset: async (t) =>
            /^data:image\/(?:avif|bmp|gif|jpeg|png|svg\+xml|webp|x-icon|vnd\.microsoft\.icon)(?:;[^,]*)?,/iu.test(
              e,
            )
              ? { kind: `available`, downloadUrl: e }
              : { kind: `available`, ...(Le(e) ? await Ce(t) : xe({ download_url: e })) },
          useDownloadUrlAsImageSrc: !0,
        };
      }),
      (n[3] = a.value.accountId),
      (n[4] = a.value.userId),
      (n[5] = h))
    : (h = n[5]);
  let g = h,
    v = r[0] ?? ``,
    y;
  n[6] !== g || n[7] !== v ? ((y = g(v)), (n[6] = g), (n[7] = v), (n[8] = y)) : (y = n[8]);
  let b;
  n[9] === c ? (b = n[10]) : ((b = { enabled: c }), (n[9] = c), (n[10] = b));
  let { src: x } = Re(r[0] ?? ``, y, b),
    S = r[1] ?? ``,
    C;
  n[11] !== g || n[12] !== S ? ((C = g(S)), (n[11] = g), (n[12] = S), (n[13] = C)) : (C = n[13]);
  let w;
  n[14] === c ? (w = n[15]) : ((w = { enabled: c }), (n[14] = c), (n[15] = w));
  let { src: T } = Re(r[1] ?? ``, C, w),
    E = r[2] ?? ``,
    D;
  n[16] !== g || n[17] !== E ? ((D = g(E)), (n[16] = g), (n[17] = E), (n[18] = D)) : (D = n[18]);
  let O;
  n[19] === c ? (O = n[20]) : ((O = { enabled: c }), (n[19] = c), (n[20] = O));
  let { src: k } = Re(r[2] ?? ``, D, O),
    A,
    j;
  n[21] !== p || n[22] !== u || n[23] !== x || n[24] !== T || n[25] !== k || n[26] !== r
    ? ((A = [x, T, k].flatMap((e, t) => (e == null || u.has(e) ? [] : [{ src: e, url: r[t] }]))),
      (j = A[0] == null ? 1 : (p.get(A[0].src) ?? 1)),
      (n[21] = p),
      (n[22] = u),
      (n[23] = x),
      (n[24] = T),
      (n[25] = k),
      (n[26] = r),
      (n[27] = A),
      (n[28] = j))
    : ((A = n[27]), (j = n[28]));
  let M = j,
    N;
  n[29] !== M || n[30] !== i || n[31] !== A
    ? ((N =
        A.length === 0
          ? i
          : (0, X.jsx)(`span`, {
              className: Ye.folderStack,
              style: { aspectRatio: M, width: `${44 * Math.min(1, 0.8 * M)}%` },
              children: A.map((e, t) => {
                let { src: n, url: r } = e;
                return (0, X.jsx)(
                  `img`,
                  {
                    className: _(
                      `size-full object-cover`,
                      [Ye.folderStackFront, Ye.folderStackMiddle, Ye.folderStackBack][t],
                    ),
                    alt: ``,
                    draggable: !1,
                    loading: `lazy`,
                    src: n,
                    onLoad: (e) => {
                      let { naturalWidth: t, naturalHeight: r } = e.currentTarget;
                      m((e) => new Map(e).set(n, t > 0 && r > 0 ? Math.max(0.5, t / r) : 1));
                    },
                    onError: () => d((e) => new Set([...e, n])),
                  },
                  r,
                );
              }).reverse(),
            })),
      (n[29] = M),
      (n[30] = i),
      (n[31] = A),
      (n[32] = N))
    : (N = n[32]);
  let P;
  return (
    n[33] === N
      ? (P = n[34])
      : ((P = (0, X.jsx)(`span`, {
          ref: o,
          className: `relative flex min-h-0 w-full flex-1 items-center justify-center`,
          children: N,
        })),
        (n[33] = N),
        (n[34] = P)),
    P
  );
}
var Tt, Et, X;
function Dt() {
  return (Dt = e(() => {
    ((Tt = x()), v(), ce(), I(), (Et = s()), be(), we(), ot(), je(), ve(), (X = h()));
  }))();
}
function Ot(e, t, n) {
  if (Ve(e)) return null;
  let r = et(e.node.id),
    i = n?.filter((e) => e.provider === r);
  if (i == null || i.length < 2) return null;
  if (e.search != null) {
    let t = Xe(e.node.external_account, r);
    return t == null ? null : { name: t };
  }
  if (t !== `suggested`) return null;
  let a = e.node.external_account?.key ?? W(e.node.id);
  if (a == null) return null;
  let o = i.find((e) => e.accountKey === a);
  if (o == null) return null;
  let s = o.accountLabel ?? Xe(e.node.external_account, r);
  return s == null ? (o.accountNumber == null ? null : { number: o.accountNumber }) : { name: s };
}
function kt() {
  return (kt = e(() => {
    (ue(), Ge(), ke());
  }))();
}
function At(e) {
  let t = (0, jt.c)(18),
    { timestamp: n, opened: r, relative: i, dateKind: a } = e,
    o = r !== void 0 && r,
    s = i !== void 0 && i,
    c = oe(),
    l = Qe();
  if (n == null) return `—`;
  if (a === `activity`) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, Z.jsx)(st, { dateString: n, dayBasis: `elapsed` })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  if (s || a === `modified-relative`) {
    if (l.getTime() - new Date(n).getTime() < 6e4) {
      let e;
      return (
        t[2] === o
          ? (e = t[3])
          : ((e = (0, Z.jsx)(q, {
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
      : ((e = (0, Z.jsx)(st, { dateString: n, dayBasis: `elapsed` })), (t[4] = n), (t[5] = e));
    let r;
    return (
      t[6] !== o || t[7] !== e
        ? ((r = (0, Z.jsx)(q, {
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
  let d;
  return (
    t[15] !== o || t[16] !== u
      ? ((d = (0, Z.jsx)(q, {
          id: `libraryNext.items.calendarActivity`,
          defaultMessage: `{opened, select, true {Opened {time}} other {Modified {time}}}`,
          description: `Suggested Library grid activity. opened distinguishes last opening from modification; time is a localized calendar label such as Aug 28 or Yesterday.`,
          values: { opened: o, time: u },
        })),
        (t[15] = o),
        (t[16] = u),
        (t[17] = d))
      : (d = t[17]),
    d
  );
}
var jt, Z;
function Mt() {
  return (Mt = e(() => {
    ((jt = x()), j(), dt(), at(), tt(), (Z = h()));
  }))();
}
function Nt(e, t, n) {
  let r = Me(e);
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
            ? (0, $.jsx)(ct, {
                children: (0, $.jsx)(q, {
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
      favoriteMarker: s,
      source: c,
      selection: l,
      selected: u,
      isDropTarget: d,
      titleAccessory: f,
      showSize: p,
      dateKind: m,
      reserveDisclosureSpace: h,
      selectionActive: g,
    } = e,
    v = d !== void 0 && d,
    y = p !== void 0 && p,
    b = m === void 0 ? `modified` : m,
    x = g !== void 0 && g,
    S = oe(),
    C = ne(Pe),
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    N,
    P;
  if (
    t[0] !== C ||
    t[1] !== b ||
    t[2] !== n ||
    t[3] !== S ||
    t[4] !== r ||
    t[5] !== h ||
    t[6] !== x ||
    t[7] !== c
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
      (w = We),
      t[21] !== n || t[22] !== r || t[23] !== x
        ? ((A = Nt(n, x, r)), (t[21] = n), (t[22] = r), (t[23] = x), (t[24] = A))
        : (A = t[24]),
      (j = i),
      (N = h),
      (P = c),
      t[25] !== n || t[26] !== S
        ? ((E = Be(He(n, S), n.node.library_artifact_type, S)), (t[25] = n), (t[26] = S), (t[27] = E))
        : (E = t[27]),
      t[28] === n
        ? ((D = t[29]), (O = t[30]))
        : ((D = (0, $.jsx)(Ht, { entry: n, size: `row` })),
          (O = Ve(n) ? void 0 : (0, $.jsx)(mt, { provider: J(n) })),
          (t[28] = n),
          (t[29] = D),
          (t[30] = O)),
      (k =
        e == null
          ? null
          : (0, $.jsx)(`span`, {
              className: _(
                `min-w-0 truncate text-secondary`,
                n.search == null &&
                  `opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100`,
              ),
              title: Vt(e, S),
              children: (0, $.jsx)(q, {
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
      (t[7] = c),
      (t[8] = w),
      (t[9] = T),
      (t[10] = E),
      (t[11] = D),
      (t[12] = O),
      (t[13] = k),
      (t[14] = A),
      (t[15] = j),
      (t[16] = N),
      (t[17] = P));
  } else
    ((w = t[8]),
      (T = t[9]),
      (E = t[10]),
      (D = t[11]),
      (O = t[12]),
      (k = t[13]),
      (A = t[14]),
      (j = t[15]),
      (N = t[16]),
      (P = t[17]));
  let F;
  t[31] !== n.node.is_shared || t[32] !== n.node.kind
    ? ((F =
        n.node.kind === `file` && n.node.is_shared
          ? (0, $.jsx)(o, { asset: M, className: `shrink-0 text-secondary` })
          : null),
      (t[31] = n.node.is_shared),
      (t[32] = n.node.kind),
      (t[33] = F))
    : (F = t[33]);
  let I;
  t[34] === n ? (I = t[35]) : ((I = (0, $.jsx)(Pt, { entry: n })), (t[34] = n), (t[35] = I));
  let L;
  t[36] !== s || t[37] !== F || t[38] !== I || t[39] !== k || t[40] !== f
    ? ((L = (0, $.jsxs)($.Fragment, { children: [k, s, F, f, I] })),
      (t[36] = s),
      (t[37] = F),
      (t[38] = I),
      (t[39] = k),
      (t[40] = f),
      (t[41] = L))
    : (L = t[41]);
  let R = b === `suggested`,
    z;
  t[42] !== b || t[43] !== n || t[44] !== R
    ? ((z = (0, $.jsx)(Ut, { entry: n, dateKind: b, relative: R })),
      (t[42] = b),
      (t[43] = n),
      (t[44] = R),
      (t[45] = z))
    : (z = t[45]);
  let B;
  t[46] !== b || t[47] !== n
    ? ((B = b === `shared` ? (0, $.jsx)(It, { entry: n }) : void 0), (t[46] = b), (t[47] = n), (t[48] = B))
    : (B = t[48]);
  let V = y ? T : void 0,
    H = b === `deleted`,
    U = !x && (n.node.library_artifact_type === `site` || n.site != null) && !Me(n) ? void 0 : i,
    W;
  return (
    t[49] !== w ||
    t[50] !== a ||
    t[51] !== v ||
    t[52] !== u ||
    t[53] !== l ||
    t[54] !== E ||
    t[55] !== D ||
    t[56] !== O ||
    t[57] !== L ||
    t[58] !== z ||
    t[59] !== B ||
    t[60] !== V ||
    t[61] !== H ||
    t[62] !== U ||
    t[63] !== A ||
    t[64] !== j ||
    t[65] !== N ||
    t[66] !== P
      ? ((W = (0, $.jsx)(w, {
          link: A,
          name: j,
          reserveDisclosureSpace: N,
          source: P,
          displayName: E,
          artwork: D,
          badge: O,
          favoriteMarker: L,
          activity: z,
          sharedBy: B,
          detail: V,
          sizeBeforeDate: H,
          onOpen: U,
          actions: a,
          selection: l,
          selected: u,
          isDropTarget: v,
        })),
        (t[49] = w),
        (t[50] = a),
        (t[51] = v),
        (t[52] = u),
        (t[53] = l),
        (t[54] = E),
        (t[55] = D),
        (t[56] = O),
        (t[57] = L),
        (t[58] = z),
        (t[59] = B),
        (t[60] = V),
        (t[61] = H),
        (t[62] = U),
        (t[63] = A),
        (t[64] = j),
        (t[65] = N),
        (t[66] = P),
        (t[67] = W))
      : (W = t[67]),
    W
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
        (0, $.jsx)(q, {
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
    r = oe();
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
      selection: s,
      selected: c,
      isDropTarget: l,
      titleAccessory: u,
      selectionActive: f,
      dateKind: p,
    } = e,
    m = l !== void 0 && l,
    h = f !== void 0 && f,
    g = p === void 0 ? `modified` : p,
    v = oe(),
    { node: y } = n,
    b = ne(Pe),
    x;
  if (
    t[0] !== b ||
    t[1] !== a ||
    t[2] !== g ||
    t[3] !== n ||
    t[4] !== v ||
    t[5] !== m ||
    t[6] !== y.cloud_doc_url ||
    t[7] !== y.file_extension ||
    t[8] !== y.is_shared ||
    t[9] !== y.kind ||
    t[10] !== y.library_artifact_type ||
    t[11] !== y.library_file_category ||
    t[12] !== y.mime_type ||
    t[13] !== y.name ||
    t[14] !== y.saved_entity ||
    t[15] !== y.thumbnail_url ||
    t[16] !== r ||
    t[17] !== i ||
    t[18] !== c ||
    t[19] !== s ||
    t[20] !== h ||
    t[21] !== u
  ) {
    let e = Ot(n, g, b),
      l = Bt(n, e, v),
      f = y.library_artifact_type === `site` || n.site != null,
      p;
    t[23] !== n || t[24] !== f || t[25] !== y.library_artifact_type || t[26] !== y.thumbnail_url
      ? ((p = f ? !!y.thumbnail_url : y.library_artifact_type !== `flashcards` && qt(n)),
        (t[23] = n),
        (t[24] = f),
        (t[25] = y.library_artifact_type),
        (t[26] = y.thumbnail_url),
        (t[27] = p))
      : (p = t[27]);
    let S = p,
      C = y.kind === `directory`,
      w = y.saved_entity != null,
      T = y.file_extension ? `${y.name}.${y.file_extension}` : y.name,
      E = y.mime_type ?? void 0,
      D = y.kind === `file` ? (y.cloud_doc_url ?? void 0) : void 0,
      O;
    t[28] !== T || t[29] !== E || t[30] !== D
      ? ((O = d({ fileName: T, mimeType: E, sourceUrl: D })),
        (t[28] = T),
        (t[29] = E),
        (t[30] = D),
        (t[31] = O))
      : (O = t[31]);
    let k = O,
      A =
        C ||
        (!w &&
          (k.category === `spreadsheet` ||
            k.category === `presentation` ||
            y.library_file_category === `video` ||
            f ||
            y.library_artifact_type === `site_preview`)),
      j;
    t[32] !== n || t[33] !== C
      ? ((j = C
          ? (0, $.jsx)(Ht, { entry: n, size: `row` })
          : (0, $.jsx)(Kt, { entry: n, style: `row`, showThumbnail: !1 })),
        (t[32] = n),
        (t[33] = C),
        (t[34] = j))
      : (j = t[34]);
    let N;
    t[35] !== n || t[36] !== v || t[37] !== y.library_artifact_type
      ? ((N = Be(He(n, v), y.library_artifact_type, v)),
        (t[35] = n),
        (t[36] = v),
        (t[37] = y.library_artifact_type),
        (t[38] = N))
      : (N = t[38]);
    let P;
    t[39] === N
      ? (P = t[40])
      : ((P = (0, $.jsx)(`span`, { className: `min-w-0 truncate`, children: N })), (t[39] = N), (t[40] = P));
    let F;
    t[41] !== n || t[42] !== w
      ? ((F = w && (0, $.jsx)(Wt, { entry: n })), (t[41] = n), (t[42] = w), (t[43] = F))
      : (F = t[43]);
    let I;
    t[44] === y.is_shared
      ? (I = t[45])
      : ((I = y.is_shared && (0, $.jsx)(o, { asset: M, className: `shrink-0 text-secondary` })),
        (t[44] = y.is_shared),
        (t[45] = I));
    let L;
    t[46] === n ? (L = t[47]) : ((L = (0, $.jsx)(Pt, { entry: n })), (t[46] = n), (t[47] = L));
    let R;
    t[48] !== j || t[49] !== P || t[50] !== F || t[51] !== I || t[52] !== L || t[53] !== u
      ? ((R = (0, $.jsxs)($.Fragment, { children: [j, P, F, I, u, L] })),
        (t[48] = j),
        (t[49] = P),
        (t[50] = F),
        (t[51] = I),
        (t[52] = L),
        (t[53] = u),
        (t[54] = R))
      : (R = t[54]);
    let z = R,
      B = (t, o, u) => {
        let d = o === void 0 ? S : o;
        return (0, $.jsxs)(Se, {
          link: Nt(n, h, r),
          name: l,
          square: !d || C,
          overlayHeader: w && d,
          landscape: A,
          documentHeader: !A && !w && y.library_file_category !== `image` ? z : void 0,
          header: A || w ? z : void 0,
          onOpen: !h && (n.node.library_artifact_type === `site` || n.site != null) && !Me(n) ? void 0 : i,
          actions: a?.map(zt),
          selection: s,
          selected: c,
          isDropTarget: m,
          selectionActive: h,
          badge: Ve(n) ? void 0 : (0, $.jsx)(mt, { provider: J(n), thumbnail: !0 }),
          caption: (0, $.jsx)($.Fragment, {
            children:
              e == null
                ? null
                : (0, $.jsx)(`div`, {
                    className: _(
                      `truncate ps-1 pt-2 text-xs text-secondary`,
                      n.search == null &&
                        `opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100`,
                    ),
                    title: Vt(e, v),
                    children:
                      e.name ?? (0, $.jsx)(q, { ...Zt.numberedAccount, values: { number: e.number } }),
                  }),
          }),
          children: [
            u,
            C &&
              (0, $.jsx)(Ct, {
                entry: n,
                fallback: (0, $.jsx)(Oe, { artwork: (0, $.jsx)(Ht, { entry: n, size: `card` }) }),
              }),
            !C && d && t,
            !C &&
              !d &&
              (0, $.jsx)(`span`, {
                className: `relative flex min-h-0 w-full flex-1`,
                children: (0, $.jsx)(Oe, {
                  artwork: (0, $.jsx)(Kt, { entry: n, style: `artwork`, showThumbnail: !1 }),
                }),
              }),
          ],
        });
      };
    ((x = S && !C ? (0, $.jsx)(Gt, { entry: n, size: `card`, renderCard: B }) : B()),
      (t[0] = b),
      (t[1] = a),
      (t[2] = g),
      (t[3] = n),
      (t[4] = v),
      (t[5] = m),
      (t[6] = y.cloud_doc_url),
      (t[7] = y.file_extension),
      (t[8] = y.is_shared),
      (t[9] = y.kind),
      (t[10] = y.library_artifact_type),
      (t[11] = y.library_file_category),
      (t[12] = y.mime_type),
      (t[13] = y.name),
      (t[14] = y.saved_entity),
      (t[15] = y.thumbnail_url),
      (t[16] = r),
      (t[17] = i),
      (t[18] = c),
      (t[19] = s),
      (t[20] = h),
      (t[21] = u),
      (t[22] = x));
  } else x = t[22];
  return x;
}
function zt(e) {
  let { key: t, component: n } = e;
  return (0, $.jsx)(Yt.Fragment, { children: n }, t);
}
function Bt(e, t, n) {
  let r = Ze(et(e.node.id));
  return t != null && r != null
    ? n.formatMessage(
        {
          id: `libraryNext.items.accountAccessibleName`,
          defaultMessage: `{name} · {provider} · {named, select, true {{account}} other {Account {number}}}`,
          description: `Accessible name for a connected Library item. name is the file or folder title and provider is a cloud storage brand. named is true when account is its nickname or email; otherwise number distinguishes unnamed accounts.`,
        },
        { name: He(e, n), provider: r, named: t.name != null, account: t.name, number: t.number },
      )
    : e.search != null && r != null
      ? n.formatMessage(
          {
            id: `libraryNext.items.sourceAccessibleName`,
            defaultMessage: `{name} · {provider}`,
            description: `Accessible name for a connected file or folder in Library search when no account label is shown. name is the file or folder title and provider is the cloud storage brand, such as Google Drive or Dropbox.`,
          },
          { name: He(e, n), provider: r },
        )
      : He(e, n);
}
function Vt(e, t) {
  return e.name ?? t.formatMessage(Zt.numberedAccount, { number: e.number });
}
function Ht(e) {
  let t = (0, Q.c)(28),
    { entry: r, size: i, fallback: a } = e,
    { node: s } = r;
  if (r.space != null) {
    let e = i === `row` ? 20 : 32,
      n;
    return (
      t[0] !== r.space.id || t[1] !== r.space.symbol || t[2] !== e
        ? ((n = (0, $.jsx)(it, {
            spaceId: r.space.id,
            symbol: r.space.symbol,
            loadMissingAppearance: !1,
            size: e,
          })),
          (t[0] = r.space.id),
          (t[1] = r.space.symbol),
          (t[2] = e),
          (t[3] = n))
        : (n = t[3]),
      n
    );
  }
  if (s.library_artifact_type === `site` || r.site != null) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(S, {})), (t[4] = e)) : (e = t[4]),
      e
    );
  }
  if (s.library_artifact_type === `flashcards`) {
    let e = i === `row` ? _e : pe,
      n;
    return (t[5] === e ? (n = t[6]) : ((n = (0, $.jsx)(o, { asset: e })), (t[5] = e), (t[6] = n)), n);
  }
  if (s.kind !== `directory` && !qt(r)) {
    let e = i === `row` ? `row` : `artwork`,
      n;
    return (
      t[7] !== r || t[8] !== e
        ? ((n = (0, $.jsx)(Kt, { entry: r, style: e })), (t[7] = r), (t[8] = e), (t[9] = n))
        : (n = t[9]),
      n
    );
  }
  if (
    s.kind !== `directory` &&
    (s.thumbnail_url || s.saved_entity?.display_data.image_url || s.library_file_category === `image`)
  ) {
    let e;
    return (
      t[10] !== r || t[11] !== a || t[12] !== i
        ? ((e = (0, $.jsx)(Gt, { entry: r, size: i, fallback: a })),
          (t[10] = r),
          (t[11] = a),
          (t[12] = i),
          (t[13] = e))
        : (e = t[13]),
      e
    );
  }
  if (s.kind === `directory`) {
    if (
      s.id === `library:collection:shared-with-me` ||
      /^external-gdrive:(?:account:[A-Za-z0-9_-]+:)?collection:shared-with-me$/u.test(s.id)
    ) {
      let e;
      return (
        t[14] === i
          ? (e = t[15])
          : ((e = i === `row` ? (0, $.jsx)(o, { asset: f }) : (0, $.jsx)(o, { asset: m })),
            (t[14] = i),
            (t[15] = e)),
        e
      );
    }
    if (Ve(r)) {
      let e;
      t[16] === r ? (e = t[17]) : ((e = J(r)), (t[16] = r), (t[17] = e));
      let n;
      return (
        t[18] !== i || t[19] !== e
          ? ((n = (0, $.jsx)(mt, { provider: e, standalone: i })), (t[18] = i), (t[19] = e), (t[20] = n))
          : (n = t[20]),
        n
      );
    }
    if (s.is_shared) {
      let e;
      return (
        t[21] === i
          ? (e = t[22])
          : ((e = i === `row` ? (0, $.jsx)(me, {}) : (0, $.jsx)(o, { asset: B })), (t[21] = i), (t[22] = e)),
        e
      );
    }
    let e;
    return (
      t[23] === i
        ? (e = t[24])
        : ((e = i === `row` ? (0, $.jsx)(C, {}) : (0, $.jsx)(n, {})), (t[23] = i), (t[24] = e)),
      e
    );
  }
  let c = i === `row` ? `row` : `artwork`,
    l;
  return (
    t[25] !== r || t[26] !== c
      ? ((l = (0, $.jsx)(Kt, { entry: r, style: c })), (t[25] = r), (t[26] = c), (t[27] = l))
      : (l = t[27]),
    l
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
                (0, $.jsx)(o, { asset: he, className: `shrink-0` }),
                (0, $.jsx)(p, { value: r.rating, minimumFractionDigits: 1, maximumFractionDigits: 1 }),
              ],
            })
          : null),
      (t[1] = r.rating),
      (t[2] = r.type),
      (t[3] = a))
    : (a = t[3]);
  let s = r.type === `product` && r.price,
    c;
  return (
    t[4] !== a || t[5] !== s
      ? ((c = (0, $.jsxs)(`span`, {
          className: `inline-flex shrink-0 items-center gap-1 opacity-60`,
          children: [i, a, s],
        })),
        (t[4] = a),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function Gt(e) {
  let n = (0, Q.c)(66),
    { entry: r, size: i, fallback: a, iconStyle: o, renderCard: s } = e,
    c = t(Ue),
    l = ne(qe),
    u = (0, Yt.useRef)(null),
    d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { once: !0, margin: `200px` }), (n[0] = d))
    : (d = n[0]);
  let f = ie(u, d),
    p = i === `card` && o == null && r.node.library_artifact_type === `site_preview`,
    m =
      (p ? r.node.thumbnail_preview_url : r.node.thumbnail_url) ??
      r.node.saved_entity?.display_data.image_url,
    h;
  n[1] === r ? (h = n[2]) : ((h = J(r)), (n[1] = r), (n[2] = h));
  let g = h,
    v =
      i === `card` &&
      r.node.kind === `file` &&
      r.node.library_file_category === `image` &&
      r.node.saved_entity == null &&
      (g === `native` || g === `native_shared`),
    [y, b] = (0, Yt.useState)(),
    [x, S] = (0, Yt.useState)(),
    C =
      !v &&
      m != null &&
      /^data:image\/(?:avif|bmp|gif|jpeg|png|svg\+xml|webp|x-icon|vnd\.microsoft\.icon)(?:;[^,]*)?,/iu.test(m)
        ? m
        : null,
    w = v ? r.node.id : (m ?? r.node.id),
    T;
  n[3] !== r.currentVersion ||
  n[4] !== r.node.file_id ||
  n[5] !== r.node.gizmo_id ||
  n[6] !== r.node.id ||
  n[7] !== r.node.kind ||
  n[8] !== r.node.mime_type ||
  n[9] !== r.node.name ||
  n[10] !== r.node.saved_entity ||
  n[11] !== r.node.thumbnail_preview_url ||
  n[12] !== r.node.updated_at ||
  n[13] !== v ||
  n[14] !== l ||
  n[15] !== c.value.accountId ||
  n[16] !== c.value.userId ||
  n[17] !== p ||
  n[18] !== m
    ? ((T = v
        ? gt({
            accountId: c.value.accountId,
            userId: l,
            file: {
              id: r.node.id,
              file_id: r.node.file_id ?? r.node.id,
              file_name: r.node.name,
              gizmo_id: r.node.gizmo_id,
              mime_type: r.node.mime_type,
            },
            currentVersion: r.currentVersion,
            modifiedAt: r.node.updated_at,
            useDownloadUrlAsImageSrc: !0,
          })
        : {
            cacheKey: [`library-api`, c.value.accountId, JSON.stringify(c.value.userId ?? null)],
            resolveAsset: async (e) =>
              p && m != null
                ? { kind: `available`, ...xe({ download_url: m }) }
                : m != null && Le(m)
                  ? { kind: `available`, ...(await Ce(e)) }
                  : m == null || (r.node.kind === `file` && r.node.saved_entity == null && Ee(m) == null)
                    ? {
                        kind: `available`,
                        ...(await Ae(r.node.id, {
                          fileId: r.node.file_id,
                          fileName: r.node.name,
                          mimeType: r.node.mime_type,
                          thumbnailUrl: m ?? null,
                          thumbnailPreviewUrl: r.node.thumbnail_preview_url ?? null,
                        })),
                      }
                    : { kind: `available`, ...xe({ download_url: m }) },
            useDownloadUrlAsImageSrc: !0,
          }),
      (n[3] = r.currentVersion),
      (n[4] = r.node.file_id),
      (n[5] = r.node.gizmo_id),
      (n[6] = r.node.id),
      (n[7] = r.node.kind),
      (n[8] = r.node.mime_type),
      (n[9] = r.node.name),
      (n[10] = r.node.saved_entity),
      (n[11] = r.node.thumbnail_preview_url),
      (n[12] = r.node.updated_at),
      (n[13] = v),
      (n[14] = l),
      (n[15] = c.value.accountId),
      (n[16] = c.value.userId),
      (n[17] = p),
      (n[18] = m),
      (n[19] = T))
    : (T = n[19]);
  let E = o != null || f,
    D;
  n[20] === E ? (D = n[21]) : ((D = { enabled: E }), (n[20] = E), (n[21] = D));
  let { src: O, isError: k } = Re(C == null ? w : ``, T, D),
    A = C ?? O,
    j = A == null ? k : A === y,
    M = A != null && x?.src === A;
  if (o != null) {
    let e;
    return (
      n[22] !== j || n[23] !== a || n[24] !== o || n[25] !== A
        ? ((e =
            A != null && !j
              ? (0, $.jsx)(`img`, {
                  className: _(
                    { artwork: `size-8`, card: `size-10`, row: `size-5`, "thumbnail-row": `size-4` }[o],
                    `shrink-0 object-contain`,
                    /^data:image\/svg\+xml[;,]/iu.test(A) && `dark:invert`,
                  ),
                  alt: ``,
                  draggable: !1,
                  src: A,
                  onError: () => b(A),
                })
              : (0, $.jsx)($.Fragment, { children: a })),
          (n[22] = j),
          (n[23] = a),
          (n[24] = o),
          (n[25] = A),
          (n[26] = e))
        : (e = n[26]),
      e
    );
  }
  let N = r.node.saved_entity?.entity_data?.type,
    P = i === `row`,
    F;
  n[27] !== r.node.height || n[28] !== r.node.width
    ? ((F = Jt(r.node.width, r.node.height)), (n[27] = r.node.height), (n[28] = r.node.width), (n[29] = F))
    : (F = n[29]);
  let I = F;
  (j || N === `place`
    ? (I = 1)
    : M &&
      (r.node.kind === `directory` ||
        r.node.library_file_category === `image` ||
        r.node.saved_entity != null) &&
      (I = x.aspectRatio),
    (r.node.library_artifact_type === `site_preview` ||
      r.node.library_artifact_type === `site` ||
      r.site != null) &&
      (I = 1.7777777777777777));
  let L = s == null ? u : void 0,
    R = P && `h-full`,
    z = !P && (r.node.library_file_category === `image` || N === `product`) && `min-h-24`,
    B = !j && (!M || N === `product`) && `bg-surface-tertiary`,
    V;
  n[30] !== B || n[31] !== R || n[32] !== z
    ? ((V = _(`relative flex w-full items-center justify-center`, R, z, B)),
      (n[30] = B),
      (n[31] = R),
      (n[32] = z),
      (n[33] = V))
    : (V = n[33]);
  let H;
  n[34] !== I || n[35] !== P
    ? ((H = P ? void 0 : { aspectRatio: I }), (n[34] = I), (n[35] = P), (n[36] = H))
    : (H = n[36]);
  let U;
  n[37] !== r || n[38] !== j || n[39] !== a || n[40] !== i
    ? ((U = j ? (a ?? (0, $.jsx)(Kt, { entry: r, style: i === `row` ? `thumbnail-row` : `artwork` })) : null),
      (n[37] = r),
      (n[38] = j),
      (n[39] = a),
      (n[40] = i),
      (n[41] = U))
    : (U = n[41]);
  let W;
  n[42] !== I ||
  n[43] !== N ||
  n[44] !== r.node.library_file_category ||
  n[45] !== j ||
  n[46] !== P ||
  n[47] !== M ||
  n[48] !== A
    ? ((W =
        A != null && !j
          ? (0, $.jsx)(`img`, {
              alt: ``,
              draggable: !1,
              src: A,
              onLoad: (e) => {
                S({ src: A, aspectRatio: Jt(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight) });
              },
              onError: () => b(A),
              className: _(
                `absolute inset-0 size-full`,
                N === `product` || (!P && r.node.library_file_category === `image` && I > 1)
                  ? `object-contain`
                  : `object-cover`,
                !M && `opacity-0`,
              ),
              loading: `lazy`,
            })
          : null),
      (n[42] = I),
      (n[43] = N),
      (n[44] = r.node.library_file_category),
      (n[45] = j),
      (n[46] = P),
      (n[47] = M),
      (n[48] = A),
      (n[49] = W))
    : (W = n[49]);
  let G;
  n[50] !== r.node.saved_entity || n[51] !== M || n[52] !== i || n[53] !== A
    ? ((G =
        A != null &&
        M &&
        i === `card` &&
        r.node.saved_entity != null &&
        (0, $.jsx)(`img`, {
          className: Ye.mediaHeaderBlur,
          "aria-hidden": !0,
          alt: ``,
          draggable: !1,
          src: A,
        })),
      (n[50] = r.node.saved_entity),
      (n[51] = M),
      (n[52] = i),
      (n[53] = A),
      (n[54] = G))
    : (G = n[54]);
  let ee;
  n[55] !== V || n[56] !== H || n[57] !== U || n[58] !== W || n[59] !== G || n[60] !== L
    ? ((ee = (0, $.jsxs)(`span`, { ref: L, className: V, style: H, children: [U, W, G] })),
      (n[55] = V),
      (n[56] = H),
      (n[57] = U),
      (n[58] = W),
      (n[59] = G),
      (n[60] = L),
      (n[61] = ee))
    : (ee = n[61]);
  let te = ee,
    K;
  return (
    n[62] !== j || n[63] !== te || n[64] !== s
      ? ((K = s
          ? s(
              te,
              !j,
              (0, $.jsx)(`span`, {
                ref: u,
                "aria-hidden": !0,
                className: `pointer-events-none absolute inset-0`,
              }),
            )
          : te),
        (n[62] = j),
        (n[63] = te),
        (n[64] = s),
        (n[65] = K))
      : (K = n[65]),
    K
  );
}
function Kt(e) {
  let t = (0, Q.c)(26),
    { entry: n, style: r, showThumbnail: i } = e,
    a = i === void 0 || i,
    s = n.node.file_extension,
    c = n.node.name,
    u = n.node.library_artifact_type,
    d = n.node.mime_type ?? void 0,
    f;
  t[0] === n ? (f = t[1]) : ((f = J(n)), (t[0] = n), (t[1] = f));
  let p = n.node.kind === `file` ? (n.node.cloud_doc_url ?? void 0) : void 0,
    m;
  t[2] !== n.node.file_extension ||
  t[3] !== n.node.id ||
  t[4] !== n.node.library_artifact_type ||
  t[5] !== n.node.name ||
  t[6] !== r ||
  t[7] !== d ||
  t[8] !== f ||
  t[9] !== p
    ? ((m = (0, $.jsx)(nt, {
        fileExtension: s,
        fileName: c,
        libraryArtifactType: u,
        mimeType: d,
        provider: f,
        mountedLibraryFileId: n.node.id,
        sourceUrl: p,
        style: r,
      })),
      (t[2] = n.node.file_extension),
      (t[3] = n.node.id),
      (t[4] = n.node.library_artifact_type),
      (t[5] = n.node.name),
      (t[6] = r),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m))
    : (m = t[10]);
  let h = m;
  if (r === `card` || r === `artwork` || r === `row`) {
    let e =
      n.node.saved_entity?.entity_data?.type ?? n.node.saved_entity?.saved_target.sidebar_params.category;
    if (e === `product`) {
      let e = r === `row` ? g : A,
        n;
      (t[11] === e ? (n = t[12]) : ((n = (0, $.jsx)(o, { asset: e })), (t[11] = e), (t[12] = n)), (h = n));
    } else if (e === `place`) {
      let e = r === `row` ? G : w,
        n;
      (t[13] === e ? (n = t[14]) : ((n = (0, $.jsx)(o, { asset: e })), (t[13] = e), (t[14] = n)), (h = n));
    } else if (n.node.library_artifact_type === `flashcards`) {
      let e = r === `row` ? _e : pe,
        n;
      (t[15] === e ? (n = t[16]) : ((n = (0, $.jsx)(o, { asset: e })), (t[15] = e), (t[16] = n)), (h = n));
    } else if (n.node.library_file_category === `video`) {
      let e = r === `row` ? te : l,
        n;
      (t[17] === e
        ? (n = t[18])
        : ((n = (0, $.jsx)(o, { asset: e, className: `text-file-video` })), (t[17] = e), (t[18] = n)),
        (h = n));
    } else if (
      n.node.library_artifact_type === `site_preview` ||
      n.node.library_artifact_type === `site` ||
      n.site != null
    ) {
      let e = r === `row` ? ge : R,
        n;
      (t[19] === e
        ? (n = t[20])
        : ((n = (0, $.jsx)(o, { asset: e, className: `text-purple` })), (t[19] = e), (t[20] = n)),
        (h = n));
    }
  }
  if (a && n.node.kind === `file` && !qt(n) && n.node.thumbnail_url) {
    let e = r === `card` || r === `artwork` ? `card` : `row`,
      i;
    return (
      t[21] !== n || t[22] !== h || t[23] !== r || t[24] !== e
        ? ((i = (0, $.jsx)(Gt, { entry: n, size: e, fallback: h, iconStyle: r })),
          (t[21] = n),
          (t[22] = h),
          (t[23] = r),
          (t[24] = e),
          (t[25] = i))
        : (i = t[25]),
      i
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
    ((Q = x()),
      a(),
      H(),
      ae(),
      se(),
      r(),
      L(),
      P(),
      le(),
      c(),
      u(),
      O(),
      z(),
      ee(),
      re(),
      K(),
      k(),
      v(),
      ce(),
      I(),
      (Yt = s()),
      j(),
      rt(),
      lt(),
      be(),
      we(),
      ye(),
      b(),
      D(),
      Ge(),
      Je(),
      De(),
      Ne(),
      ht(),
      pt(),
      ze(),
      St(),
      ot(),
      ke(),
      je(),
      Fe(),
      Dt(),
      kt(),
      Mt(),
      Ie(),
      ve(),
      ($ = h()),
      (Xt = `·`),
      (Zt = N({
        numberedAccount: {
          id: `libraryNext.items.numberedAccount`,
          defaultMessage: `Account {number}`,
          description: `Fallback label for a connected Library account without a nickname or email. number distinguishes accounts from the same cloud storage provider.`,
        },
      })));
  }))();
}
export { Lt as a, Mt as c, It as i, Ot as l, Rt as n, Qt as o, Ft as r, At as s, Ut as t, kt as u };
//# sourceMappingURL=library-item-b6e80d141813.js.map
