import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $j as r,
  AA as i,
  CM as a,
  Cot as o,
  DM as s,
  IDt as c,
  Ixt as l,
  Kat as u,
  MA as d,
  Mz as f,
  NA as p,
  Nz as m,
  Out as h,
  Pxt as g,
  RI as _,
  Sj as v,
  TI as y,
  TJ as ee,
  UI as b,
  VDt as te,
  Vj as ne,
  WR as x,
  XV as S,
  _Mt as re,
  _wt as ie,
  a2 as ae,
  aD as oe,
  ax as C,
  bz as se,
  cz as ce,
  dj as le,
  dk as w,
  gMt as ue,
  gj as de,
  gwt as T,
  hM as fe,
  hot as E,
  iD as D,
  iL as pe,
  jA as me,
  jDt as O,
  kI as he,
  lk as ge,
  lot as _e,
  o2 as ve,
  ox as ye,
  pM as be,
  qR as xe,
  qat as Se,
  rL as k,
  sz as Ce,
  t3 as we,
  vF as Te,
  vI as Ee,
  vzt as A,
  wot as De,
  xMt as j,
  xz as Oe,
  yF as ke,
  yI as Ae,
  yMt as je,
  yzt as M,
  zxt as Me,
} from "./app-shared-bbfeca5e5737.js";
import {
  FEr as Ne,
  PEr as Pe,
  _tn as Fe,
  eCr as Ie,
  eh as N,
  nh as P,
  tCr as F,
  vir as I,
  vtn as Le,
  yir as L,
} from "./app-initial-5851df3f6cb1.js";
import { n as Re, r as ze } from "./plan-implementation-request-0cd55f1ae7b1.js";
import { n as R, t as Be } from "./commit-84ced40b6cf4.js";
import { n as z, t as B } from "./pull-request-4cb305c7fdb2.js";
import { i as Ve, n as V, o as H, r as U, t as He } from "./floating-navigation-rail-2c6605aa8018.js";
function Ue(e) {
  let t = (0, K.c)(16),
    { children: n, railRef: r, prefersReducedMotion: i } = e,
    a = l(o),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { name: `toys.audio-visualizer` }), (t[0] = s))
    : (s = t[0]);
  let { isCapable: c } = Me(Pe, s),
    d = (0, q.useSyncExternalStore)(G, We, W),
    f = te(),
    p = u?.systemAudioSpectrum,
    m;
  t[1] !== f || t[2] !== a
    ? ((m = (e) => {
        a.get(E).warning(
          e
            ? f.formatMessage({
                id: `thread.navigationRail.audioPermissionDenied`,
                defaultMessage: `Allow system audio recording in System Settings to use the visualizer`,
                description: `Shown when macOS denies system audio capture permission for the conversation rail visualizer, directing the user to allow access in System Settings`,
              })
            : f.formatMessage({
                id: `thread.navigationRail.audioUnavailable`,
                defaultMessage: `Couldn’t start the visualizer`,
                description: `Shown when the conversation rail visualizer cannot capture system playback audio for a reason other than permission denial`,
              }),
        );
      }),
      (t[1] = f),
      (t[2] = a),
      (t[3] = m))
    : (m = t[3]);
  let h = (0, q.useEffectEvent)(m),
    g;
  t[4] === r
    ? (g = t[5])
    : ((g = (e) => {
        let t = r.current?.querySelectorAll(`[data-thread-user-message-navigation-item-id]`);
        t?.forEach((n, r) => {
          if (e == null) {
            n.style.removeProperty(`--navigation-rail-audio-level`);
            return;
          }
          let i = Math.floor((r * e.length) / t.length),
            a = Math.ceil(((r + 1) * e.length) / t.length);
          n.style.setProperty(`--navigation-rail-audio-level`, String(Math.max(...e.slice(i, a))));
        });
      }),
      (t[4] = r),
      (t[5] = g));
  let _ = (0, q.useEffectEvent)(g),
    v;
  t[6] !== c || t[7] !== h || t[8] !== _ || t[9] !== i || t[10] !== d
    ? ((v = () => {
        if (!c || !d || i || p == null) return;
        let e = !1,
          t,
          n = p.subscribe((n) => {
            if (!(e || n.type === `ready`)) {
              if (n.type === `error`) {
                (clearTimeout(t), _(null), h(n.reason === `permission-denied`));
                return;
              }
              (_(n.levels), clearTimeout(t), (t = setTimeout(() => _(null), 250)));
            }
          });
        return (
          n.catch(() => {
            e || h(!1);
          }),
          () => {
            ((e = !0), clearTimeout(t), n[Symbol.dispose](), _(null));
          }
        );
      }),
      (t[6] = c),
      (t[7] = h),
      (t[8] = _),
      (t[9] = i),
      (t[10] = d),
      (t[11] = v))
    : (v = t[11]);
  let y;
  return (
    t[12] !== c || t[13] !== i || t[14] !== d
      ? ((y = [c, d, i, p]), (t[12] = c), (t[13] = i), (t[14] = d), (t[15] = y))
      : (y = t[15]),
    (0, q.useEffect)(v, y),
    n
  );
}
function W() {
  return !1;
}
function We() {
  return !document.hidden;
}
function G(e) {
  return (
    document.addEventListener(`visibilitychange`, e),
    () => document.removeEventListener(`visibilitychange`, e)
  );
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = A()), g(), (q = M()), O(), Ne(), _e(), Se(), De());
  }))();
}
function Ge(e, t = []) {
  let n = new Map(t.flatMap((e) => e.itemIds.map((t) => [t, e.key]))),
    r = Array(e.length),
    i;
  for (let t = e.length - 1; t >= 0; --t) ((i = n.get(e[t]) ?? i), (r[t] = i));
  let a = Math.max(-1, ...t.map((e) => e.key)) + 1,
    o = new Set(),
    s = [];
  for (let [t, i] of e.entries()) {
    let e = n.get(i),
      c = s.at(-1);
    if (c == null || (e != null && e !== c.key) || (e == null && c.itemIds.length >= Y && r[t] !== c.key)) {
      let n = e != null && !o.has(e) ? e : a++;
      ((c = { key: n, startIndex: t, itemIds: [] }), s.push(c), o.add(n));
    }
    c.itemIds.push(i);
  }
  return s;
}
var Y;
function Ke() {
  return (Ke = e(() => {
    Y = 64;
  }))();
}
var qe, Je;
function Ye() {
  return (Ye = e(() => {
    (M(),
      (qe = j()),
      (Je = (e) =>
        (0, qe.jsxs)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, qe.jsx)(`path`, {
              d: `M9.12725 9.17656C9.39819 9.06319 9.7106 9.19089 9.82412 9.46172C9.93751 9.73275 9.80921 10.0444 9.53818 10.1578C8.54869 10.5718 7.63742 10.5982 6.65771 10.2359L6.46084 10.1578L6.36631 10.1062C6.16212 9.96683 6.07651 9.69872 6.17568 9.46172C6.27497 9.22478 6.52602 9.09763 6.76865 9.14531L6.87178 9.17656L7.01865 9.23438C7.74842 9.50658 8.38411 9.4874 9.12725 9.17656Z`,
              fill: `currentColor`,
            }),
            (0, qe.jsx)(`path`, {
              d: `M5.66631 5.66719C6.21851 5.66719 6.66618 6.11502 6.66631 6.66719C6.66631 7.21947 6.21859 7.66719 5.66631 7.66719C5.11416 7.66703 4.66631 7.21937 4.66631 6.66719C4.66644 6.11511 5.11424 5.66735 5.66631 5.66719Z`,
              fill: `currentColor`,
            }),
            (0, qe.jsx)(`path`, {
              d: `M10.3335 5.66719C10.8856 5.66735 11.3334 6.11511 11.3335 6.66719C11.3335 7.21937 10.8856 7.66703 10.3335 7.66719C9.78121 7.66719 9.3335 7.21947 9.3335 6.66719C9.33363 6.11502 9.78129 5.66719 10.3335 5.66719Z`,
              fill: `currentColor`,
            }),
            (0, qe.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M7.9999 1.46875C8.29372 1.46875 8.53193 1.70697 8.53193 2.00078V2.46875H10.4671C11.0181 2.46875 11.464 2.46824 11.8241 2.49766C12.1902 2.52761 12.5151 2.59109 12.8163 2.74453L12.9905 2.84219C13.3872 3.08547 13.7101 3.43468 13.9226 3.85156L13.9765 3.96563C14.0918 4.23459 14.1432 4.52333 14.1694 4.84375C14.1912 5.11055 14.1952 5.42422 14.1968 5.79297C14.5926 5.98867 14.8654 6.3958 14.8655 6.86719V7.86719C14.8655 8.3407 14.5899 8.74887 14.1913 8.94375C14.1852 9.3005 14.1746 9.61715 14.1515 9.9C14.1094 10.4152 14.0283 10.8547 13.8569 11.2539L13.7772 11.4227C13.4299 12.1041 12.8885 12.6662 12.2233 13.0391L12.0882 13.1117C11.6443 13.3378 11.1548 13.4378 10.5663 13.4859C9.98384 13.5335 9.258 13.5328 8.3335 13.5328H7.66709C6.74267 13.5328 6.01674 13.5335 5.43428 13.4859C4.91911 13.4438 4.47957 13.362 4.08037 13.1906L3.91162 13.1117C3.18452 12.7412 2.59312 12.1497 2.22256 11.4227C1.99632 10.9786 1.89644 10.4887 1.84834 9.9C1.82523 9.61715 1.81366 9.30051 1.80771 8.94375C1.40945 8.74874 1.13428 8.34045 1.13428 7.86719V6.86719C1.13438 6.3958 1.40723 5.98867 1.80303 5.79297C1.80434 5.42421 1.80857 5.11056 1.83037 4.84375C1.8603 4.47753 1.9238 4.15285 2.07725 3.85156C2.32 3.37519 2.70789 2.98726 3.18428 2.74453C3.4855 2.59117 3.81033 2.52758 4.17646 2.49766C4.53661 2.46825 4.98237 2.46875 5.5335 2.46875H7.46787V2.00078C7.46787 1.70697 7.70609 1.46875 7.9999 1.46875ZM5.5335 3.53281C4.96484 3.53281 4.56996 3.53355 4.26318 3.55859C3.9628 3.58314 3.79347 3.62862 3.66709 3.69297C3.39093 3.83369 3.16642 4.05823 3.02568 4.33438C2.96128 4.46078 2.91587 4.62992 2.89131 4.93047C2.86624 5.23728 2.86553 5.63195 2.86553 6.20078V7.66719C2.86553 8.60929 2.86606 9.28415 2.90928 9.81328C2.952 10.3362 3.03394 10.6701 3.171 10.9391C3.43957 11.4661 3.86815 11.8947 4.39521 12.1633L4.49912 12.2125C4.75035 12.3205 5.06357 12.3876 5.521 12.425C6.05008 12.4682 6.72516 12.4688 7.66709 12.4688H8.3335C9.27554 12.4688 9.95049 12.4682 10.4796 12.425C11.0023 12.3823 11.3364 12.3003 11.6054 12.1633L11.7983 12.0555C12.237 11.7863 12.5946 11.4002 12.8296 10.9391L12.878 10.8352C12.9861 10.5839 13.0539 10.2709 13.0913 9.81328C13.1345 9.28416 13.1351 8.60927 13.1351 7.66719V6.20078C13.1351 5.63197 13.1343 5.23728 13.1093 4.93047C13.0908 4.70493 13.0606 4.55329 13.0194 4.43828L12.9749 4.33438C12.8518 4.09269 12.6642 3.89027 12.4343 3.74922L12.3335 3.69297C12.2072 3.6286 12.0376 3.58317 11.7374 3.55859C11.4307 3.53353 11.0356 3.53281 10.4671 3.53281H5.5335Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  }))();
}
var Xe, Ze;
function Qe() {
  return (Qe = e(() => {
    ((Xe = `_preview_87m4b_1`), (Ze = { preview: Xe }));
  }))();
}
function $e(e) {
  let t = (0, X.c)(11),
    { components: r, item: i, onBookmarkChange: a } = e,
    o = te(),
    s;
  if (t[0] !== r || t[1] !== o || t[2] !== i || t[3] !== a) {
    let e = F(i.getLabel()),
      l = i.getPreview(),
      u = L(F(l.response)).trim(),
      d;
    if (i.previewState === `unavailable`) {
      let e;
      (t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(c, {
            id: `thread.userMessageNavigation.previewUnavailable`,
            defaultMessage: `Preview unavailable`,
            description: `Label shown when a historical user message preview could not be loaded in the floating thread navigation tooltip`,
          })),
          (t[5] = e))
        : (e = t[5]),
        (d = e));
    } else if (e.length === 0) {
      let e;
      (t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(c, {
            id: `thread.userMessageNavigation.noContent`,
            defaultMessage: `(No content)`,
            description: `Fallback label for an empty user message in the floating thread navigation tooltip`,
          })),
          (t[6] = e))
        : (e = t[6]),
        (d = e));
    } else if (ze(e)) {
      let e;
      (t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(c, {
            id: `codex.userMessage.implementPlan`,
            defaultMessage: `Yes, implement this plan`,
            description: `Display text for the synthetic implement-plan follow-up prompt`,
          })),
          (t[7] = e))
        : (e = t[7]),
        (d = e));
    } else {
      let n;
      (t[8] !== r.ExternalLinkIcon || t[9] !== e
        ? ((n = (0, Z.jsx)(lt, { ExternalLinkIcon: r.ExternalLinkIcon, label: e })),
          (t[8] = r.ExternalLinkIcon),
          (t[9] = e),
          (t[10] = n))
        : (n = t[10]),
        (d = n));
    }
    let p = i.isBookmarked === !0;
    ((s = (0, Z.jsx)(V, {
      "data-thread-user-message-navigation-tooltip-preview": !0,
      className: `overflow-hidden`,
      children:
        i.previewState === `loading`
          ? (0, Z.jsxs)(`div`, {
              className: `motion-safe:animate-pulse`,
              role: `status`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, Z.jsx)(c, {
                    id: `thread.userMessageNavigation.loadingPreview`,
                    defaultMessage: `Loading preview`,
                    description: `Accessible status announced while a user message and response preview loads in the floating thread navigation tooltip`,
                  }),
                }),
                (0, Z.jsxs)(`div`, {
                  "aria-hidden": !0,
                  className: `flex h-5 min-w-0 items-center gap-1.5`,
                  children: [
                    i.isHeartbeat
                      ? (0, Z.jsx)(`div`, { className: `size-3 shrink-0 rounded-full bg-text/10` })
                      : null,
                    (0, Z.jsx)(`div`, { className: `h-3 w-3/5 rounded bg-text/10` }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  "aria-hidden": !0,
                  className: `mt-1 flex flex-col`,
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: `flex h-5 items-center`,
                      children: (0, Z.jsx)(`div`, { className: `h-3 w-full rounded bg-text/10` }),
                    }),
                    (0, Z.jsx)(`div`, {
                      className: `flex h-5 items-center`,
                      children: (0, Z.jsx)(`div`, { className: `h-3 w-11/12 rounded bg-text/10` }),
                    }),
                    (0, Z.jsx)(`div`, {
                      className: `flex h-5 items-center`,
                      children: (0, Z.jsx)(`div`, { className: `h-3 w-4/5 rounded bg-text/10` }),
                    }),
                  ],
                }),
              ],
            })
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex min-w-0 items-center gap-1.5 font-medium`,
                  children: [
                    i.isHeartbeat
                      ? (0, Z.jsx)(S, { className: `text-codex-description`, "aria-hidden": !1 })
                      : null,
                    (0, Z.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: d }),
                    a == null
                      ? null
                      : (0, Z.jsx)(n, {
                          "aria-label": p
                            ? o.formatMessage({
                                id: `thread.userMessageNavigation.removeBookmark`,
                                defaultMessage: `Remove bookmark`,
                                description: `Accessible label for removing a bookmark from the conversation turn shown in the prompt rail hover preview`,
                              })
                            : o.formatMessage({
                                id: `thread.userMessageNavigation.bookmarkTurn`,
                                defaultMessage: `Bookmark turn`,
                                description: `Accessible label for bookmarking the conversation turn shown in the prompt rail hover preview`,
                              }),
                          "aria-pressed": p,
                          className: `shrink-0`,
                          color: p ? `ghostActive` : `ghostTertiary`,
                          disabled: i.bookmarkId === null && !p,
                          radius: `small`,
                          size: `inline`,
                          onClick: (e) => {
                            (e.stopPropagation(), a(i, !p));
                          },
                          children: (0, Z.jsx)(f, { asset: p ? C : ae }),
                        }),
                  ],
                }),
                u.length > 0
                  ? (0, Z.jsx)(r.Markdown, {
                      className: ue(
                        Ze.preview,
                        `mt-1 line-clamp-3 [&:has(table)]:[-webkit-line-clamp:unset]`,
                      ),
                      components: ft,
                      externalResourcePolicy: `restricted`,
                      pluginMentionPresentation: `text`,
                      textStyle: { kind: `small` },
                      children: u,
                    })
                  : null,
                l.outputs.length > 0
                  ? (0, Z.jsxs)(`div`, {
                      className: `mt-2 flex min-w-0 items-center gap-3 text-codex-description`,
                      children: [
                        l.outputs.slice(0, dt).map(et),
                        l.outputs.length > dt
                          ? (0, Z.jsx)(`span`, {
                              className: `shrink-0 tabular-nums`,
                              children: (0, Z.jsx)(c, {
                                id: `thread.userMessageNavigation.moreOutputs`,
                                defaultMessage: `+{count}`,
                                description: `Count of additional turn outputs hidden from the prompt rail tooltip preview`,
                                values: { count: l.outputs.length - dt },
                              }),
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            }),
    })),
      (t[0] = r),
      (t[1] = o),
      (t[2] = i),
      (t[3] = a),
      (t[4] = s));
  } else s = t[4];
  return s;
}
function et(e, t) {
  return (0, Z.jsx)(ot, { output: e }, `${e.type}:${e.label ?? t}`);
}
function tt(e) {
  let t = (0, X.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n ? (r = t[1]) : ((r = (0, Z.jsx)(Z.Fragment, { children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
function nt(e) {
  let t = (0, X.c)(2),
    { alt: n } = e,
    r;
  return (
    t[0] === n ? (r = t[1]) : ((r = (0, Z.jsx)(Z.Fragment, { children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
function rt(e) {
  let t = (0, X.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`table`, {
          className: `w-full table-fixed border-collapse text-sm leading-5`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function it(e) {
  let t = (0, X.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`th`, { className: `truncate text-start font-medium`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function at(e) {
  let t = (0, X.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`td`, { className: `truncate`, children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
function ot(e) {
  let t = (0, X.c)(9),
    { output: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = st(n)), (t[0] = n), (t[1] = r));
  let i;
  t[2] === n ? (i = t[3]) : ((i = ct(n)), (t[2] = n), (t[3] = i));
  let a;
  t[4] === i
    ? (a = t[5])
    : ((a = (0, Z.jsx)(`span`, { className: `max-w-36 truncate`, children: i })), (t[4] = i), (t[5] = a));
  let o;
  return (
    t[6] !== r || t[7] !== a
      ? ((o = (0, Z.jsxs)(`span`, { className: `flex min-w-0 items-center gap-1.5`, children: [r, a] })),
        (t[6] = r),
        (t[7] = a),
        (t[8] = o))
      : (o = t[8]),
    o
  );
}
function st(e) {
  switch (e.type) {
    case `app`:
      return (0, Z.jsx)(D, { className: `icon-sm shrink-0 text-chart-blue` });
    case `commit`:
      return (0, Z.jsx)(Be, { className: `icon-sm shrink-0` });
    case `file`:
      return (0, ut.createElement)(ge(e.label ?? void 0), { className: `icon-sm shrink-0` });
    case `google-drive`:
      return (0, Z.jsx)(k, { className: `icon-sm shrink-0` });
    case `image`:
      return (0, Z.jsx)(i, { className: `icon-sm shrink-0` });
    case `pull-request`:
      return (0, Z.jsx)(B, { className: `icon-sm shrink-0` });
    case `review`:
      return (0, Z.jsx)(Je, { className: `icon-sm shrink-0` });
    case `website`:
      return (0, Z.jsx)(d, { className: `icon-sm shrink-0` });
  }
}
function ct(e) {
  if (e.label != null) return e.label;
  switch (e.type) {
    case `app`:
      return (0, Z.jsx)(c, {
        id: `thread.userMessageNavigation.appOutput`,
        defaultMessage: `App preview`,
        description: `Fallback label for an app output in the prompt rail tooltip`,
      });
    case `commit`:
      return (0, Z.jsx)(c, {
        id: `thread.userMessageNavigation.commitOutput`,
        defaultMessage: `Commit`,
        description: `Label for a commit output in the prompt rail tooltip`,
      });
    case `file`:
      return (0, Z.jsx)(c, {
        id: `thread.userMessageNavigation.fileOutput`,
        defaultMessage: `File`,
        description: `Fallback label for a file output in the prompt rail tooltip`,
      });
    case `google-drive`:
      return (0, Z.jsx)(c, {
        id: `thread.userMessageNavigation.googleDriveOutput`,
        defaultMessage: `Google Drive`,
        description: `Fallback label for a Google Drive output in the prompt rail tooltip`,
      });
    case `image`:
      return (0, Z.jsx)(c, {
        id: `thread.userMessageNavigation.imageOutput`,
        defaultMessage: `Image`,
        description: `Label for a generated image output in the prompt rail tooltip`,
      });
    case `pull-request`:
      return (0, Z.jsx)(c, {
        id: `thread.userMessageNavigation.pullRequestOutput`,
        defaultMessage: `Pull request`,
        description: `Fallback label for a pull request output in the prompt rail tooltip`,
      });
    case `review`:
      return (0, Z.jsx)(c, {
        id: `thread.userMessageNavigation.reviewOutput`,
        defaultMessage: `Review`,
        description: `Fallback label for a review output in the prompt rail tooltip`,
      });
    case `website`:
      return (0, Z.jsx)(c, {
        id: `thread.userMessageNavigation.websiteOutput`,
        defaultMessage: `Web preview`,
        description: `Label for a website output in the prompt rail tooltip`,
      });
  }
}
function lt(e) {
  let t = (0, X.c)(3),
    { ExternalLinkIcon: n, label: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e = [],
      a = 0,
      o = 0;
    for (; a < r.length;) {
      let t = x(r, a);
      if (t == null) break;
      a = t.end;
      let i = s(t.label).trim(),
        c = xe(t.path),
        l,
        u = i,
        d;
      if (Ee(c) || Ae(c)) ((l = _(i) ?? D), (u = ne(i)));
      else if (i.startsWith(`$`)) {
        let e = fe(i);
        ((l = Fe(e.icon)), (u = e.displayLabel ?? Te(e.name)));
      } else {
        let e = y(c);
        if (e == null) continue;
        ((l = (0, Z.jsx)(n, { href: e })), (d = e));
      }
      (e.push(r.slice(o, t.start)),
        e.push((0, Z.jsx)(N, { className: `first:ps-0`, icon: l, title: d, children: u }, t.start)),
        (o = t.end));
    }
    (e.push(r.slice(o)), (i = (0, Z.jsx)(Z.Fragment, { children: e })), (t[0] = n), (t[1] = r), (t[2] = i));
  } else i = t[2];
  return i;
}
var X, ut, Z, dt, ft;
function pt() {
  return (pt = e(() => {
    ((X = A()),
      he(),
      ye(),
      ve(),
      re(),
      ke(),
      Ie(),
      (ut = M()),
      O(),
      Re(),
      b(),
      Le(),
      r(),
      a(),
      we(),
      U(),
      m(),
      ee(),
      I(),
      w(),
      oe(),
      R(),
      p(),
      pe(),
      me(),
      z(),
      Ye(),
      P(),
      be(),
      Qe(),
      (Z = j()),
      (dt = 2),
      (ft = { a: tt, code: tt, img: nt, table: rt, td: at, th: it }));
  }))();
}
function mt(e) {
  let t = (0, Dt.c)(10),
    {
      getScrollElement: n,
      items: r,
      prefersReducedMotion: i,
      tooltipComponents: a,
      tooltipPortalContainer: o,
      onBookmarkChange: s,
      onNavigationClick: c,
      onPreviewItem: l,
      onRevealItem: u,
    } = e,
    d = i !== void 0 && i;
  if (r.length < 4) return null;
  let f;
  return (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== s ||
    t[3] !== c ||
    t[4] !== l ||
    t[5] !== u ||
    t[6] !== d ||
    t[7] !== a ||
    t[8] !== o
      ? ((f = (0, $.jsx)(ht, {
          getScrollElement: n,
          items: r,
          prefersReducedMotion: d,
          tooltipComponents: a,
          tooltipPortalContainer: o,
          onBookmarkChange: s,
          onNavigationClick: c,
          onPreviewItem: l,
          onRevealItem: u,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = s),
        (t[3] = c),
        (t[4] = l),
        (t[5] = u),
        (t[6] = d),
        (t[7] = a),
        (t[8] = o),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
function ht(e) {
  let t = (0, Dt.c)(104),
    {
      getScrollElement: n,
      items: r,
      prefersReducedMotion: i,
      tooltipComponents: a,
      tooltipPortalContainer: o,
      onBookmarkChange: s,
      onNavigationClick: c,
      onPreviewItem: l,
      onRevealItem: u,
    } = e,
    d = r.at(-1)?.id ?? null,
    [f, p] = (0, Q.useState)(!1),
    m;
  t[0] === d ? (m = t[1]) : ((m = () => new Set(d == null ? [] : [d])), (t[0] = d), (t[1] = m));
  let [h, g] = (0, Q.useState)(m),
    [_, v] = (0, Q.useState)(!1),
    [y, ee] = (0, Q.useState)(null),
    [b, ne] = (0, Q.useState)(null),
    [x, S] = (0, Q.useState)(null),
    [re, ae] = (0, Q.useState)(!1),
    oe = (0, Q.useRef)(null),
    C = (0, Q.useRef)(null),
    se;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((se = new Set()), (t[2] = se)) : (se = t[2]);
  let ce = (0, Q.useRef)(se),
    w = (0, Q.useRef)(null),
    ue = (0, Q.useRef)(!1),
    de = (0, Q.useId)(),
    T = te(),
    fe;
  t[3] === r ? (fe = t[4]) : ((fe = r.map(vt).join(`\0`)), (t[3] = r), (t[4] = fe));
  let E = fe,
    D;
  t[5] !== E || t[6] !== r
    ? ((D = () => ({ itemIdsKey: E, groups: Ge(r.map(_t)) })), (t[5] = E), (t[6] = r), (t[7] = D))
    : (D = t[7]);
  let [pe, me] = (0, Q.useState)(D),
    O = pe.groups;
  pe.itemIdsKey !== E && ((O = Ge(r.map(gt), O)), me({ itemIdsKey: E, groups: O }));
  let he = b ?? y,
    ge;
  t[8] === he ? (ge = t[9]) : ((ge = (e) => e.id === he), (t[8] = he), (t[9] = ge));
  let _e = r.findIndex(ge),
    ve;
  t[10] !== h || t[11] !== r || t[12] !== d
    ? ((ve = r.find((e) => h.has(e.id))?.id ?? d), (t[10] = h), (t[11] = r), (t[12] = d), (t[13] = ve))
    : (ve = t[13]);
  let ye = ve,
    be;
  t[14] === l
    ? (be = t[15])
    : ((be = (e) => {
        l == null ||
          C.current != null ||
          ce.current.has(e.id) ||
          (ce.current.add(e.id),
          l(e)
            .then((t) => {
              t === !1 && ce.current.delete(e.id);
            })
            .catch(() => {
              ce.current.delete(e.id);
            }));
      }),
      (t[14] = l),
      (t[15] = be));
  let xe = Oe(be),
    Se;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = () => {
        w.current != null && (window.clearTimeout(w.current.timeoutId), (w.current = null));
      }),
      (t[16] = Se))
    : (Se = t[16]);
  let k = Oe(Se),
    we;
  t[17] !== k || t[18] !== xe || t[19] !== l
    ? ((we = (e) => {
        l != null &&
          C.current == null &&
          w.current?.itemId !== e.id &&
          (k(),
          !ce.current.has(e.id) &&
            (w.current = {
              itemId: e.id,
              timeoutId: window.setTimeout(() => {
                ((w.current = null), xe(e));
              }, jt),
            }));
      }),
      (t[17] = k),
      (t[18] = xe),
      (t[19] = l),
      (t[20] = we))
    : (we = t[20]);
  let Te = Oe(we),
    Ee,
    A;
  (t[21] === k
    ? ((Ee = t[22]), (A = t[23]))
    : ((Ee = () => k), (A = [k]), (t[21] = k), (t[22] = Ee), (t[23] = A)),
    (0, Q.useEffect)(Ee, A));
  let De;
  t[24] !== n || t[25] !== u || t[26] !== i
    ? ((De = async (e, t) => {
        let r = n();
        if (r == null) return;
        let a = t,
          o = bt(r, e.id);
        if (o == null && u != null) {
          if (t === `instant` && e.isLoaded === !1) return;
          (await u(e), (o = bt(r, e.id)), (a = `instant`));
        }
        (o?.scrollIntoView({ behavior: a, block: `start` }), wt(o, i));
      }),
      (t[24] = n),
      (t[25] = u),
      (t[26] = i),
      (t[27] = De))
    : (De = t[27]);
  let j = Oe(De),
    ke;
  t[28] !== j || t[29] !== c
    ? ((ke = (e) => (c?.(), j(e, `smooth`))), (t[28] = j), (t[29] = c), (t[30] = ke))
    : (ke = t[30]);
  let Ae = ke,
    je;
  t[31] === _
    ? (je = t[32])
    : ((je = (e) => {
        let t = C.current;
        t?.pointerId === e.pointerId &&
          ((C.current = null),
          ne(null),
          ee(_ ? t.itemId : null),
          t.pointerCaptureTarget.hasPointerCapture?.(e.pointerId) &&
            t.pointerCaptureTarget.releasePointerCapture?.(e.pointerId),
          _ || (S(null), ae(!1)),
          window.setTimeout(() => {
            ue.current = !1;
          }, 0));
      }),
      (t[31] = _),
      (t[32] = je));
  let M = Oe(je),
    Me,
    Ne;
  (t[33] !== n || t[34] !== E
    ? ((Me = () => {
        let e = n();
        if (e == null || typeof IntersectionObserver > `u`) return;
        let t = new Set(),
          r = new Map(),
          i = new Set(),
          a = E.length === 0 ? [] : E.split(`\0`),
          o = new Set(a),
          s = () => {
            let e = a.findIndex((e) => t.has(e));
            if (e === -1) return;
            let n = (0, Ot.default)(a, (e) => t.has(e)),
              r = new Set(a.slice(e, n + 1));
            g((e) => (e.size === r.size && [...e].every((e) => r.has(e)) ? e : r));
          },
          c = new IntersectionObserver(
            (e) => {
              for (let n of e) {
                if (!(n.target instanceof HTMLElement)) continue;
                let e = r.get(n.target);
                e != null && (n.isIntersecting ? t.add(e) : t.delete(e));
              }
              s();
            },
            { root: e, rootMargin: `-${At}px 0px 0px 0px` },
          ),
          l = () => {
            let n = new Set();
            for (let t of e.querySelectorAll(`[data-content-search-unit-key]`)) {
              let e = t.dataset.contentSearchUnitKey;
              if (e == null || !o.has(e)) continue;
              let a = t.closest(Mt),
                s = a == null || n.has(a) ? t : a;
              (n.add(s), r.set(s, e), i.has(s) || (c.observe(s), i.add(s)));
            }
            for (let e of i) {
              if (n.has(e)) continue;
              let a = r.get(e);
              (a != null && t.delete(a), r.delete(e), c.unobserve(e), i.delete(e));
            }
            s();
          },
          u = new MutationObserver((e) => {
            Tt(e) && l();
          });
        return (
          u.observe(e, { childList: !0, subtree: !0 }),
          l(),
          () => {
            (u.disconnect(), c.disconnect());
          }
        );
      }),
      (Ne = [n, E]),
      (t[33] = n),
      (t[34] = E),
      (t[35] = Me),
      (t[36] = Ne))
    : ((Me = t[35]), (Ne = t[36])),
    (0, Q.useEffect)(Me, Ne));
  let Pe = yt,
    Fe = Ue,
    Ie = ie,
    N;
  t[37] === T
    ? (N = t[38])
    : ((N = T.formatMessage({
        id: `thread.userMessageNavigation.ariaLabel`,
        defaultMessage: `User messages`,
        description: `Aria label for the floating thread navigation rail that jumps between user messages`,
      })),
      (t[37] = T),
      (t[38] = N));
  let P;
  t[39] !== f || t[40] !== i
    ? ((P = f || i ? !1 : { opacity: 0 }), (t[39] = f), (t[40] = i), (t[41] = P))
    : (P = t[41]);
  let F, I;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = { opacity: 1 }), (I = () => p(!0)), (t[42] = F), (t[43] = I))
    : ((F = t[42]), (I = t[43]));
  let Le = f || i ? 0 : 150 / 1e3,
    L;
  t[44] === Le ? (L = t[45]) : ((L = { duration: Le, ease: le }), (t[44] = Le), (t[45] = L));
  let Re = Ce,
    ze = s != null,
    R;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (e) => {
        (e || C.current == null) && (ae(e), e || S(null));
      }),
      (t[46] = R))
    : (R = t[46]);
  let Be = x?.button,
    z;
  t[47] !== r || t[48] !== x?.item
    ? ((z =
        r.find((e) => e.id === x?.item.id) ??
        r.find((e) => e.turnKey === x?.item.turnKey) ??
        x?.item ??
        r[0]),
      (t[47] = r),
      (t[48] = x?.item),
      (t[49] = z))
    : (z = t[49]);
  let B;
  t[50] !== s || t[51] !== z || t[52] !== a
    ? ((B = (0, $.jsx)($e, { components: a, item: z, onBookmarkChange: s })),
      (t[50] = s),
      (t[51] = z),
      (t[52] = a),
      (t[53] = B))
    : (B = t[53]);
  let Ve = b != null || void 0,
    V;
  t[54] !== k || t[55] !== r
    ? ((V = (e) => {
        if (e.button !== 0) return;
        let t = Ct(r, e.currentTarget, e.target instanceof Element ? e.target : null);
        t != null &&
          (k(),
          (ue.current = !1),
          v(!0),
          (C.current = { itemId: t.item.id, pointerCaptureTarget: t.button, pointerId: e.pointerId }),
          ne(t.item.id),
          S(t),
          ae(!0),
          t.button.setPointerCapture?.(e.pointerId));
      }),
      (t[54] = k),
      (t[55] = r),
      (t[56] = V))
    : (V = t[56]);
  let H;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = () => {
        v(!0);
      }),
      (t[57] = H))
    : (H = t[57]);
  let U;
  t[58] !== k || t[59] !== s
    ? ((U = () => {
        (k(), v(!1), ee(null), s == null && C.current == null && S(null));
      }),
      (t[58] = k),
      (t[59] = s),
      (t[60] = U))
    : (U = t[60]);
  let W;
  t[61] !== M || t[62] !== Te || t[63] !== j || t[64] !== r
    ? ((W = (e) => {
        let t = C.current;
        if (t == null) {
          let t = Ct(r, e.currentTarget, e.target instanceof Element ? e.target : null);
          (ee(t?.item.id ?? null), t != null && (Te(t.item), S((e) => (e?.item.id === t.item.id ? e : t))));
          return;
        }
        if (t.pointerId !== e.pointerId) return;
        if (e.buttons % 2 == 0) {
          M(e);
          return;
        }
        let n = e.currentTarget.getBoundingClientRect(),
          i = Ct(
            r,
            e.currentTarget,
            document.elementFromPoint(
              n.left + n.width / 2,
              Math.max(n.top, Math.min(e.clientY, n.bottom - 1)),
            ),
          );
        i != null &&
          i.item.id !== t.itemId &&
          ((C.current = { ...t, itemId: i.item.id }),
          ne(i.item.id),
          S(i),
          (ue.current = !0),
          j(i.item, `instant`));
      }),
      (t[61] = M),
      (t[62] = Te),
      (t[63] = j),
      (t[64] = r),
      (t[65] = W))
    : (W = t[65]);
  let We = O.map((e) =>
      (0, $.jsx)(
        `div`,
        {
          className: `flex w-9 shrink-0 flex-col [content-visibility:auto]`,
          style: { height: `calc(var(--spacing) * ${e.itemIds.length * 2.5})` },
          children: r.slice(e.startIndex, e.startIndex + e.itemIds.length).map((t, n) => {
            let r = Math.abs(e.startIndex + n - _e);
            return (0, $.jsx)(
              `button`,
              {
                "data-thread-user-message-navigation-item-id": t.id,
                "data-scrub-target": b === t.id || void 0,
                "aria-current": h.has(t.id) ? `true` : void 0,
                "aria-describedby": re && x?.item.id === t.id ? de : void 0,
                "aria-label": t.isBookmarked
                  ? T.formatMessage(
                      {
                        id: `thread.userMessageNavigation.jumpBookmarkedAriaLabel`,
                        defaultMessage: `Jump to user message {position}, bookmarked turn`,
                        description: `Aria label for a bookmarked turn in the floating thread user-message navigation rail`,
                      },
                      { position: e.startIndex + n + 1 },
                    )
                  : T.formatMessage(
                      {
                        id: `thread.userMessageNavigation.jumpAriaLabel`,
                        defaultMessage: `Jump to user message {position}`,
                        description: `Aria label for a row in the floating thread user-message navigation rail`,
                      },
                      { position: e.startIndex + n + 1 },
                    ),
                className: `flex h-2.5 w-9 shrink-0 cursor-interaction items-center outline-none`,
                type: `button`,
                onClick: (e) => {
                  if (ue.current) {
                    ue.current = !1;
                    return;
                  }
                  (S({ button: e.currentTarget, item: t }), ae(!0), Ae(t));
                },
                onFocus: (e) => {
                  (k(), xe(t), S({ button: e.currentTarget, item: t }), ae(!0));
                },
                onPointerEnter: () => {
                  (ee(t.id), Te(t));
                },
                children: (0, $.jsx)(He, {
                  bookmarked: t.isBookmarked,
                  neighborDistance: _e >= 0 && r <= 3 ? r : void 0,
                }),
              },
              t.id,
            );
          }),
        },
        e.key,
      ),
    ),
    G;
  t[66] === We
    ? (G = t[67])
    : ((G = (0, $.jsx)(`div`, { className: `flex flex-col`, children: We })), (t[66] = We), (t[67] = G));
  let K;
  t[68] !== M || t[69] !== Ve || t[70] !== V || t[71] !== H || t[72] !== U || t[73] !== W || t[74] !== G
    ? ((K = (0, $.jsx)(`div`, {
        ref: oe,
        "data-floating-navigation-rail-list": !0,
        "data-thread-user-message-navigation-rail-list": !0,
        "data-scrubbing": Ve,
        className: `vertical-scroll-fade-mask hide-scrollbar flex max-h-[min(70vh,40rem)] flex-col overflow-y-auto overscroll-contain [--edge-fade-distance:2.5rem]`,
        onLostPointerCapture: M,
        onPointerCancelCapture: M,
        onPointerDownCapture: V,
        onPointerEnter: H,
        onPointerLeave: U,
        onPointerMove: W,
        onPointerUpCapture: M,
        children: G,
      })),
      (t[68] = M),
      (t[69] = Ve),
      (t[70] = V),
      (t[71] = H),
      (t[72] = U),
      (t[73] = W),
      (t[74] = G),
      (t[75] = K))
    : (K = t[75]);
  let q;
  t[76] !== Re ||
  t[77] !== re ||
  t[78] !== ze ||
  t[79] !== R ||
  t[80] !== Be ||
  t[81] !== B ||
  t[82] !== K ||
  t[83] !== de ||
  t[84] !== o
    ? ((q = (0, $.jsx)(Re, {
        align: `center`,
        delayOpen: !0,
        interactive: ze,
        open: re,
        onOpenChange: R,
        portalContainer: o,
        positioningElement: Be,
        side: `right`,
        sideOffset: 0,
        skipDelayKey: `thread-user-message-navigation`,
        tooltipId: de,
        tooltipMaxWidth: `min(20rem, calc(100vw - 16px))`,
        variant: `floating-navigation-rail`,
        tooltipContent: B,
        children: K,
      })),
      (t[76] = Re),
      (t[77] = re),
      (t[78] = ze),
      (t[79] = R),
      (t[80] = Be),
      (t[81] = B),
      (t[82] = K),
      (t[83] = de),
      (t[84] = o),
      (t[85] = q))
    : (q = t[85]);
  let J;
  t[86] !== Ie.nav || t[87] !== N || t[88] !== P || t[89] !== F || t[90] !== I || t[91] !== L || t[92] !== q
    ? ((J = (0, $.jsx)(Ie.nav, {
        "aria-label": N,
        className: `absolute top-1/2 left-3 z-20 -translate-y-1/2 electron:left-4`,
        initial: P,
        animate: F,
        onAnimationComplete: I,
        transition: L,
        children: q,
      })),
      (t[86] = Ie.nav),
      (t[87] = N),
      (t[88] = P),
      (t[89] = F),
      (t[90] = I),
      (t[91] = L),
      (t[92] = q),
      (t[93] = J))
    : (J = t[93]);
  let Y;
  t[94] !== Fe || t[95] !== i || t[96] !== J
    ? ((Y = (0, $.jsx)(Fe, { railRef: oe, prefersReducedMotion: i, children: J })),
      (t[94] = Fe),
      (t[95] = i),
      (t[96] = J),
      (t[97] = Y))
    : (Y = t[97]);
  let Ke;
  return (
    t[98] !== Pe || t[99] !== ye || t[100] !== n || t[101] !== b || t[102] !== Y
      ? ((Ke = (0, $.jsx)(Pe, {
          getScrollElement: n,
          railListRef: oe,
          scrubRef: C,
          firstActiveItemId: ye,
          scrubbedItemId: b,
          children: Y,
        })),
        (t[98] = Pe),
        (t[99] = ye),
        (t[100] = n),
        (t[101] = b),
        (t[102] = Y),
        (t[103] = Ke))
      : (Ke = t[103]),
    Ke
  );
}
function gt(e) {
  return e.id;
}
function _t(e) {
  return e.id;
}
function vt(e) {
  return e.id;
}
function yt(e) {
  let t = (0, Dt.c)(21),
    {
      children: n,
      getScrollElement: r,
      railListRef: i,
      scrubRef: a,
      firstActiveItemId: o,
      scrubbedItemId: s,
    } = e,
    [c, l] = (0, Q.useState)(!1),
    [u, d] = (0, Q.useState)(null),
    f;
  t[0] !== o || t[1] !== i || t[2] !== a
    ? ((f = () => {
        a.current ?? xt(i.current, o);
      }),
      (t[0] = o),
      (t[1] = i),
      (t[2] = a),
      (t[3] = f))
    : (f = t[3]);
  let p = (0, Q.useEffectEvent)(f),
    m;
  t[4] !== r || t[5] !== p
    ? ((m = () => {
        let e = r(),
          t = e?.querySelector(`[data-thread-user-message-navigation-content]`) ?? null;
        if (e == null || t == null) return;
        let n = null,
          i = () => {
            n ??= window.requestAnimationFrame(() => {
              ((n = null), d(e.parentElement), l(Ve(e, t)), p());
            });
          },
          a = new ResizeObserver(i);
        (a.observe(e), a.observe(t));
        let o = new MutationObserver(i);
        return (
          o.observe(e.firstElementChild ?? e, { attributes: !0, attributeFilter: [`style`] }),
          window.addEventListener(`resize`, i),
          i(),
          () => {
            (n != null && window.cancelAnimationFrame(n),
              a.disconnect(),
              o.disconnect(),
              window.removeEventListener(`resize`, i));
          }
        );
      }),
      (t[4] = r),
      (t[5] = p),
      (t[6] = m))
    : (m = t[6]);
  let h;
  (t[7] === r ? (h = t[8]) : ((h = [r]), (t[7] = r), (t[8] = h)), (0, Q.useEffect)(m, h));
  let g;
  t[9] !== o || t[10] !== i || t[11] !== s
    ? ((g = () => {
        s ?? xt(i.current, o);
      }),
      (t[9] = o),
      (t[10] = i),
      (t[11] = s),
      (t[12] = g))
    : (g = t[12]);
  let _;
  if (
    (t[13] !== o || t[14] !== c || t[15] !== i || t[16] !== s
      ? ((_ = [o, c, i, s]), (t[13] = o), (t[14] = c), (t[15] = i), (t[16] = s), (t[17] = _))
      : (_ = t[17]),
    (0, Q.useLayoutEffect)(g, _),
    !c || u == null || typeof document > `u`)
  )
    return null;
  let v;
  return (
    t[18] !== n || t[19] !== u
      ? ((v = (0, kt.createPortal)(n, u)), (t[18] = n), (t[19] = u), (t[20] = v))
      : (v = t[20]),
    v
  );
}
function bt(e, t) {
  return e.querySelector(`[data-content-search-unit-key="${Et(t)}"]`);
}
function xt(e, t) {
  H(e, St(e, t));
}
function St(e, t) {
  return t == null || e == null
    ? null
    : e.querySelector(`[data-thread-user-message-navigation-item-id="${Et(t)}"]`);
}
function Ct(e, t, n) {
  let r = n?.closest(`[data-thread-user-message-navigation-item-id]`);
  if (r == null || !t.contains(r)) return null;
  let i = e.find((e) => e.id === r.dataset.threadUserMessageNavigationItemId);
  return i == null ? null : { button: r, item: i };
}
function wt(e, t) {
  (
    e?.querySelector(`[data-user-message-bubble]`) ?? e?.querySelector(`[data-composer-attachment-pill]`)
  )?.animate?.([{ backgroundColor: Pt }, { backgroundColor: Pt, offset: 0.35 }, { backgroundColor: Ft }], {
    duration: t ? 0 : de,
    easing: `cubic-bezier(0.23, 1, 0.32, 1)`,
  });
}
function Tt(e) {
  return e.some((e) =>
    [...e.addedNodes, ...e.removedNodes].some(
      (e) => e instanceof HTMLElement && (e.matches(Nt) || e.querySelector(Nt) != null),
    ),
  );
}
function Et(e) {
  return typeof CSS < `u` && CSS.escape != null ? CSS.escape(e) : e.replace(/"/g, `\\"`);
}
var Dt, Ot, Q, kt, $, At, jt, Mt, Nt, Pt, Ft;
function It() {
  return (It = e(() => {
    ((Dt = A()),
      T(),
      (Ot = t(h(), 1)),
      (Q = M()),
      (kt = je()),
      O(),
      U(),
      ce(),
      v(),
      se(),
      J(),
      Ke(),
      pt(),
      ($ = j()),
      (At = 16),
      (jt = 150),
      (Mt = `[data-turn-key]`),
      (Nt = `${Mt}, [data-content-search-turn-key]`),
      (Pt = `color-mix(in srgb, var(--color-text) 14%, transparent)`),
      (Ft = `color-mix(in srgb, var(--color-text) 5%, transparent)`));
  }))();
}
export { It as n, mt as t };
//# sourceMappingURL=thread-user-message-navigation-rail-62e0ef87d48f.js.map
