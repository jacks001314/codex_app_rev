import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  A5t as r,
  AF as i,
  AMt as a,
  Amn as o,
  Cit as s,
  Cj as c,
  Cpn as l,
  D6t as u,
  Ej as d,
  Eln as f,
  F3t as p,
  FHt as m,
  Jit as h,
  Jmt as g,
  Kit as ee,
  Kpt as te,
  N3t as _,
  O as ne,
  O3t as v,
  O6t as y,
  OL as b,
  Opn as re,
  PHt as ie,
  QXt as ae,
  Qit as oe,
  Rpn as se,
  Sj as x,
  Spn as ce,
  Tj as le,
  Ust as S,
  Vst as ue,
  Xdt as C,
  Xst as w,
  YB as T,
  ZB as E,
  Zit as D,
  Zst as de,
  a3t as fe,
  e0t as pe,
  e2t as O,
  fWt as me,
  gWt as he,
  gjt as ge,
  hIt as k,
  hjt as _e,
  hmn as A,
  hz as ve,
  jXt as j,
  k as ye,
  kF as be,
  kL as xe,
  kMt as M,
  kXt as Se,
  kmn as N,
  lWt as Ce,
  mIt as P,
  mK as we,
  mNt as Te,
  mR as Ee,
  mjt as De,
  mz as Oe,
  nZt as ke,
  nln as F,
  o3t as Ae,
  pK as je,
  pNt as I,
  pR as Me,
  pWt as Ne,
  pjt as Pe,
  pmn as L,
  qmt as R,
  t2t as Fe,
  tmt as z,
  vlt as Ie,
  x$t as B,
  xit as V,
  zpn as H,
} from "./app-initial-f094ef01c64d.js";
import { KS as U, US as W, nw as G, rw as K } from "./app-primary-4c40d73a1074.js";
import { n as q, r as Le } from "./thread-scroll-controller-context-value-6a9e93eb1505.js";
import { n as Re, t as ze } from "./commit-2c0030d3a535.js";
import { n as Be, t as Ve } from "./pull-request-f6a81f1ccc2f.js";
var He,
  Ue,
  We,
  Ge,
  Ke = e(() => {
    ((He = `_Marker_1vbgy_2`),
      (Ue = `_BookmarkDot_1vbgy_2`),
      (We = `_MarkerLine_1vbgy_2`),
      (Ge = { Marker: He, BookmarkDot: Ue, MarkerLine: We }));
  });
function qe(e) {
  let t = (0, Ye.c)(17),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ className: n, bookmarked: a, hierarchyLevel: r, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = a !== void 0 && a,
    s;
  t[5] === n
    ? (s = t[6])
    : ((s = se(`flex h-0.5 w-[30px] items-center`, n)), (t[5] = n), (t[6] = s));
  let c;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, J.jsx)(`span`, { className: Ge.MarkerLine })), (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] === o
    ? (l = t[9])
    : ((l = o
        ? (0, J.jsx)(`span`, {
            "aria-hidden": !0,
            className: se(Ge.BookmarkDot, `size-0.5 rounded-full`),
          })
        : null),
      (t[8] = o),
      (t[9] = l));
  let u;
  t[10] !== r || t[11] !== l
    ? ((u = (0, J.jsxs)(`span`, {
        className: Ge.Marker,
        "data-hierarchy-level": r,
        children: [c, l],
      })),
      (t[10] = r),
      (t[11] = l),
      (t[12] = u))
    : (u = t[12]);
  let d;
  return (
    t[13] !== i || t[14] !== s || t[15] !== u
      ? ((d = (0, J.jsx)(`span`, { ...i, className: s, children: u })),
        (t[13] = i),
        (t[14] = s),
        (t[15] = u),
        (t[16] = d))
      : (d = t[16]),
    d
  );
}
function Je(e) {
  let t = (0, Ye.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = se(
        `w-80 max-w-[calc(100vw-1rem)] rounded-xl bg-surface-elevated-secondary/95 p-2 text-sm leading-5 text-default shadow-xl-spread ring-[0.5px] ring-border backdrop-blur-sm`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, J.jsx)(`div`, { ...r, className: i })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
var Ye,
  J,
  Xe = e(() => {
    ((Ye = N()), H(), Ke(), (J = A()));
  });
function Ze(e, t) {
  let n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect(),
    i = e.offsetWidth > 0 ? n.width / e.offsetWidth : 1;
  return (r.left - n.left) / (i > 0 ? i : 1) >= 48;
}
function Qe(e, t) {
  e == null ||
    t == null ||
    (t.offsetTop < e.scrollTop
      ? (e.scrollTop = t.offsetTop)
      : t.offsetTop + t.offsetHeight > e.scrollTop + e.clientHeight &&
        (e.scrollTop = t.offsetTop + t.offsetHeight - e.clientHeight + 1));
}
var $e = e(() => {});
function et(e) {
  let t = (0, rt.c)(16),
    { children: r, railRef: i, prefersReducedMotion: a } = e,
    o = n(fe),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { name: `toys.audio-visualizer` }), (t[0] = s))
    : (s = t[0]);
  let { isCapable: c } = _(Me, s),
    l = (0, it.useSyncExternalStore)(nt, tt),
    u = re(),
    d = Oe?.systemAudioSpectrum,
    f;
  t[1] !== u || t[2] !== o
    ? ((f = (e) => {
        o.get(j).warning(
          e
            ? u.formatMessage({
                id: `thread.navigationRail.audioPermissionDenied`,
                defaultMessage: `Allow system audio recording in System Settings to use the visualizer`,
                description: `Shown when macOS denies system audio capture permission for the conversation rail visualizer, directing the user to allow access in System Settings`,
              })
            : u.formatMessage({
                id: `thread.navigationRail.audioUnavailable`,
                defaultMessage: `Couldn’t start the visualizer`,
                description: `Shown when the conversation rail visualizer cannot capture system playback audio for a reason other than permission denial`,
              }),
        );
      }),
      (t[1] = u),
      (t[2] = o),
      (t[3] = f))
    : (f = t[3]);
  let p = (0, it.useEffectEvent)(f),
    m;
  t[4] === i
    ? (m = t[5])
    : ((m = (e) => {
        let t = i.current?.querySelectorAll(`[data-thread-user-message-navigation-item-id]`);
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
      (t[4] = i),
      (t[5] = m));
  let h = (0, it.useEffectEvent)(m),
    g;
  t[6] !== c || t[7] !== p || t[8] !== h || t[9] !== a || t[10] !== l
    ? ((g = () => {
        if (!c || !l || a || d == null) return;
        let e = !1,
          t,
          n = d.subscribe((n) => {
            if (!(e || n.type === `ready`)) {
              if (n.type === `error`) {
                (clearTimeout(t), h(null), p(n.reason === `permission-denied`));
                return;
              }
              (h(n.levels), clearTimeout(t), (t = setTimeout(() => h(null), 250)));
            }
          });
        return (
          n.catch(() => {
            e || p(!1);
          }),
          () => {
            ((e = !0), clearTimeout(t), n[Symbol.dispose](), h(null));
          }
        );
      }),
      (t[6] = c),
      (t[7] = p),
      (t[8] = h),
      (t[9] = a),
      (t[10] = l),
      (t[11] = g))
    : (g = t[11]);
  let ee;
  return (
    t[12] !== c || t[13] !== a || t[14] !== l
      ? ((ee = [c, l, a, d]), (t[12] = c), (t[13] = a), (t[14] = l), (t[15] = ee))
      : (ee = t[15]),
    (0, it.useEffect)(g, ee),
    r
  );
}
function tt() {
  return !document.hidden;
}
function nt(e) {
  return (
    document.addEventListener(`visibilitychange`, e),
    () => document.removeEventListener(`visibilitychange`, e)
  );
}
var rt,
  it,
  at = e(() => {
    ((rt = N()), v(), (it = t(o(), 1)), ce(), Ee(), Se(), ve(), Ae());
  }),
  ot,
  st,
  ct = e(() => {
    (o(),
      (ot = A()),
      (st = (e) =>
        (0, ot.jsx)(`svg`, {
          width: 18,
          height: 18,
          viewBox: `0 0 18 18`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, ot.jsx)(`path`, {
            d: `M5.5 1.5C3.84315 1.5 2.5 2.84314 2.5 4.5V14.8733C2.5 15.917 3.61716 16.5802 4.53342 16.0804L9 13.6441L13.4666 16.0804C14.3828 16.5802 15.5 15.917 15.5 14.8733V4.5C15.5 2.84315 14.1569 1.5 12.5 1.5H5.5Z`,
          }),
        })));
  }),
  lt,
  ut,
  dt = e(() => {
    (o(),
      (lt = A()),
      (ut = (e) =>
        (0, lt.jsx)(`svg`, {
          width: 18,
          height: 18,
          viewBox: `0 0 18 18`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, lt.jsx)(`path`, {
            d: `M5.5 1.5C3.84315 1.5 2.5 2.84314 2.5 4.5V14.8733C2.5 15.917 3.61716 16.5802 4.53342 16.0804L9 13.6441L13.4666 16.0804C14.3828 16.5802 15.5 15.917 15.5 14.8733V4.5C15.5 2.84315 14.1569 1.5 12.5 1.5H5.5Z`,
            stroke: `currentColor`,
            strokeLinejoin: `round`,
            strokeWidth: 1.5,
          }),
        })));
  }),
  Y,
  ft,
  pt = e(() => {
    (o(),
      (Y = A()),
      (ft = (e) =>
        (0, Y.jsxs)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, Y.jsx)(`path`, {
              d: `M9.12725 9.17656C9.39819 9.06319 9.7106 9.19089 9.82412 9.46172C9.93751 9.73275 9.80921 10.0444 9.53818 10.1578C8.54869 10.5718 7.63742 10.5982 6.65771 10.2359L6.46084 10.1578L6.36631 10.1062C6.16212 9.96683 6.07651 9.69872 6.17568 9.46172C6.27497 9.22478 6.52602 9.09763 6.76865 9.14531L6.87178 9.17656L7.01865 9.23438C7.74842 9.50658 8.38411 9.4874 9.12725 9.17656Z`,
              fill: `currentColor`,
            }),
            (0, Y.jsx)(`path`, {
              d: `M5.66631 5.66719C6.21851 5.66719 6.66618 6.11502 6.66631 6.66719C6.66631 7.21947 6.21859 7.66719 5.66631 7.66719C5.11416 7.66703 4.66631 7.21937 4.66631 6.66719C4.66644 6.11511 5.11424 5.66735 5.66631 5.66719Z`,
              fill: `currentColor`,
            }),
            (0, Y.jsx)(`path`, {
              d: `M10.3335 5.66719C10.8856 5.66735 11.3334 6.11511 11.3335 6.66719C11.3335 7.21937 10.8856 7.66703 10.3335 7.66719C9.78121 7.66719 9.3335 7.21947 9.3335 6.66719C9.33363 6.11502 9.78129 5.66719 10.3335 5.66719Z`,
              fill: `currentColor`,
            }),
            (0, Y.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M7.9999 1.46875C8.29372 1.46875 8.53193 1.70697 8.53193 2.00078V2.46875H10.4671C11.0181 2.46875 11.464 2.46824 11.8241 2.49766C12.1902 2.52761 12.5151 2.59109 12.8163 2.74453L12.9905 2.84219C13.3872 3.08547 13.7101 3.43468 13.9226 3.85156L13.9765 3.96563C14.0918 4.23459 14.1432 4.52333 14.1694 4.84375C14.1912 5.11055 14.1952 5.42422 14.1968 5.79297C14.5926 5.98867 14.8654 6.3958 14.8655 6.86719V7.86719C14.8655 8.3407 14.5899 8.74887 14.1913 8.94375C14.1852 9.3005 14.1746 9.61715 14.1515 9.9C14.1094 10.4152 14.0283 10.8547 13.8569 11.2539L13.7772 11.4227C13.4299 12.1041 12.8885 12.6662 12.2233 13.0391L12.0882 13.1117C11.6443 13.3378 11.1548 13.4378 10.5663 13.4859C9.98384 13.5335 9.258 13.5328 8.3335 13.5328H7.66709C6.74267 13.5328 6.01674 13.5335 5.43428 13.4859C4.91911 13.4438 4.47957 13.362 4.08037 13.1906L3.91162 13.1117C3.18452 12.7412 2.59312 12.1497 2.22256 11.4227C1.99632 10.9786 1.89644 10.4887 1.84834 9.9C1.82523 9.61715 1.81366 9.30051 1.80771 8.94375C1.40945 8.74874 1.13428 8.34045 1.13428 7.86719V6.86719C1.13438 6.3958 1.40723 5.98867 1.80303 5.79297C1.80434 5.42421 1.80857 5.11056 1.83037 4.84375C1.8603 4.47753 1.9238 4.15285 2.07725 3.85156C2.32 3.37519 2.70789 2.98726 3.18428 2.74453C3.4855 2.59117 3.81033 2.52758 4.17646 2.49766C4.53661 2.46825 4.98237 2.46875 5.5335 2.46875H7.46787V2.00078C7.46787 1.70697 7.70609 1.46875 7.9999 1.46875ZM5.5335 3.53281C4.96484 3.53281 4.56996 3.53355 4.26318 3.55859C3.9628 3.58314 3.79347 3.62862 3.66709 3.69297C3.39093 3.83369 3.16642 4.05823 3.02568 4.33438C2.96128 4.46078 2.91587 4.62992 2.89131 4.93047C2.86624 5.23728 2.86553 5.63195 2.86553 6.20078V7.66719C2.86553 8.60929 2.86606 9.28415 2.90928 9.81328C2.952 10.3362 3.03394 10.6701 3.171 10.9391C3.43957 11.4661 3.86815 11.8947 4.39521 12.1633L4.49912 12.2125C4.75035 12.3205 5.06357 12.3876 5.521 12.425C6.05008 12.4682 6.72516 12.4688 7.66709 12.4688H8.3335C9.27554 12.4688 9.95049 12.4682 10.4796 12.425C11.0023 12.3823 11.3364 12.3003 11.6054 12.1633L11.7983 12.0555C12.237 11.7863 12.5946 11.4002 12.8296 10.9391L12.878 10.8352C12.9861 10.5839 13.0539 10.2709 13.0913 9.81328C13.1345 9.28416 13.1351 8.60927 13.1351 7.66719V6.20078C13.1351 5.63197 13.1343 5.23728 13.1093 4.93047C13.0908 4.70493 13.0606 4.55329 13.0194 4.43828L12.9749 4.33438C12.8518 4.09269 12.6642 3.89027 12.4343 3.74922L12.3335 3.69297C12.2072 3.6286 12.0376 3.58317 11.7374 3.55859C11.4307 3.53353 11.0356 3.53281 10.4671 3.53281H5.5335Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  }),
  mt,
  ht,
  gt = e(() => {
    ((mt = `_preview_3gogw_1`), (ht = { preview: mt }));
  });
function _t(e) {
  let t = (0, X.c)(11),
    { components: n, item: r, onBookmarkChange: i } = e,
    a = re(),
    o;
  if (t[0] !== n || t[1] !== a || t[2] !== r || t[3] !== i) {
    let e = Fe(r.getLabel()),
      s = r.getPreview(),
      c = m(Fe(s.response)).trim(),
      u;
    if (r.previewState === `unavailable`) {
      let e;
      (t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(l, {
            id: `thread.userMessageNavigation.previewUnavailable`,
            defaultMessage: `Preview unavailable`,
            description: `Label shown when a historical user message preview could not be loaded in the floating thread navigation tooltip`,
          })),
          (t[5] = e))
        : (e = t[5]),
        (u = e));
    } else if (e.length === 0) {
      let e;
      (t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(l, {
            id: `thread.userMessageNavigation.noContent`,
            defaultMessage: `(No content)`,
            description: `Fallback label for an empty user message in the floating thread navigation tooltip`,
          })),
          (t[6] = e))
        : (e = t[6]),
        (u = e));
    } else if (ye(e)) {
      let e;
      (t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(l, {
            id: `codex.userMessage.implementPlan`,
            defaultMessage: `Yes, implement this plan`,
            description: `Display text for the synthetic implement-plan follow-up prompt`,
          })),
          (t[7] = e))
        : (e = t[7]),
        (u = e));
    } else {
      let r;
      (t[8] !== n.ExternalLinkIcon || t[9] !== e
        ? ((r = (0, Z.jsx)(Dt, { ExternalLinkIcon: n.ExternalLinkIcon, label: e })),
          (t[8] = n.ExternalLinkIcon),
          (t[9] = e),
          (t[10] = r))
        : (r = t[10]),
        (u = r));
    }
    let d = r.isBookmarked === !0;
    ((o = (0, Z.jsx)(Je, {
      "data-thread-user-message-navigation-tooltip-preview": !0,
      className: `overflow-hidden`,
      children:
        r.previewState === `loading`
          ? (0, Z.jsxs)(`div`, {
              className: `motion-safe:animate-pulse`,
              role: `status`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, Z.jsx)(l, {
                    id: `thread.userMessageNavigation.loadingPreview`,
                    defaultMessage: `Loading preview`,
                    description: `Accessible status announced while a user message and response preview loads in the floating thread navigation tooltip`,
                  }),
                }),
                (0, Z.jsxs)(`div`, {
                  "aria-hidden": !0,
                  className: `flex h-5 min-w-0 items-center gap-1.5`,
                  children: [
                    r.isHeartbeat
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
                    r.isHeartbeat
                      ? (0, Z.jsx)(Ie, { className: `text-codex-description`, "aria-hidden": !1 })
                      : null,
                    (0, Z.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: u }),
                    i == null
                      ? null
                      : (0, Z.jsx)(M, {
                          "aria-label": d
                            ? a.formatMessage({
                                id: `thread.userMessageNavigation.removeBookmark`,
                                defaultMessage: `Remove bookmark`,
                                description: `Accessible label for removing a bookmark from the conversation turn shown in the prompt rail hover preview`,
                              })
                            : a.formatMessage({
                                id: `thread.userMessageNavigation.bookmarkTurn`,
                                defaultMessage: `Bookmark turn`,
                                description: `Accessible label for bookmarking the conversation turn shown in the prompt rail hover preview`,
                              }),
                          "aria-pressed": d,
                          className: `shrink-0`,
                          color: d ? `ghostActive` : `ghostTertiary`,
                          disabled: r.bookmarkId === null && !d,
                          size: `iconSm`,
                          onClick: (e) => {
                            (e.stopPropagation(), i(r, !d));
                          },
                          children: d
                            ? (0, Z.jsx)(st, { "aria-hidden": !0 })
                            : (0, Z.jsx)(ut, { "aria-hidden": !0 }),
                        }),
                  ],
                }),
                c.length > 0
                  ? (0, Z.jsx)(n.Markdown, {
                      className: se(
                        ht.preview,
                        `mt-1 line-clamp-3 [&:has(table)]:[-webkit-line-clamp:unset]`,
                      ),
                      components: At,
                      externalResourcePolicy: `restricted`,
                      pluginMentionPresentation: `text`,
                      textStyle: { kind: `small` },
                      children: c,
                    })
                  : null,
                s.outputs.length > 0
                  ? (0, Z.jsxs)(`div`, {
                      className: `mt-2 flex min-w-0 items-center gap-3 text-codex-description`,
                      children: [
                        s.outputs.slice(0, kt).map(vt),
                        s.outputs.length > kt
                          ? (0, Z.jsx)(`span`, {
                              className: `shrink-0 tabular-nums`,
                              children: (0, Z.jsx)(l, {
                                id: `thread.userMessageNavigation.moreOutputs`,
                                defaultMessage: `+{count}`,
                                description: `Count of additional turn outputs hidden from the prompt rail tooltip preview`,
                                values: { count: s.outputs.length - kt },
                              }),
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            }),
    })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o));
  } else o = t[4];
  return o;
}
function vt(e, t) {
  return (0, Z.jsx)(wt, { output: e }, `${e.type}:${e.label ?? t}`);
}
function yt(e) {
  let t = (0, X.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(Z.Fragment, { children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
function bt(e) {
  let t = (0, X.c)(2),
    { alt: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(Z.Fragment, { children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
function xt(e) {
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
function St(e) {
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
function Ct(e) {
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
function wt(e) {
  let t = (0, X.c)(9),
    { output: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = Tt(n)), (t[0] = n), (t[1] = r));
  let i;
  t[2] === n ? (i = t[3]) : ((i = Et(n)), (t[2] = n), (t[3] = i));
  let a;
  t[4] === i
    ? (a = t[5])
    : ((a = (0, Z.jsx)(`span`, { className: `max-w-36 truncate`, children: i })),
      (t[4] = i),
      (t[5] = a));
  let o;
  return (
    t[6] !== r || t[7] !== a
      ? ((o = (0, Z.jsxs)(`span`, {
          className: `flex min-w-0 items-center gap-1.5`,
          children: [r, a],
        })),
        (t[6] = r),
        (t[7] = a),
        (t[8] = o))
      : (o = t[8]),
    o
  );
}
function Tt(e) {
  switch (e.type) {
    case `app`:
      return (0, Z.jsx)(x, { className: `icon-sm shrink-0 text-chart-blue` });
    case `commit`:
      return (0, Z.jsx)(ze, { className: `icon-sm shrink-0` });
    case `file`:
      return (0, Ot.createElement)(V(e.label ?? void 0), { className: `icon-sm shrink-0` });
    case `google-drive`:
      return (0, Z.jsx)(w, { className: `icon-sm shrink-0` });
    case `image`:
      return (0, Z.jsx)(R, { className: `icon-sm shrink-0` });
    case `pull-request`:
      return (0, Z.jsx)(Ve, { className: `icon-sm shrink-0` });
    case `review`:
      return (0, Z.jsx)(ft, { className: `icon-sm shrink-0` });
    case `website`:
      return (0, Z.jsx)(u, { className: `icon-sm shrink-0` });
  }
}
function Et(e) {
  if (e.label != null) return e.label;
  switch (e.type) {
    case `app`:
      return (0, Z.jsx)(l, {
        id: `thread.userMessageNavigation.appOutput`,
        defaultMessage: `App preview`,
        description: `Fallback label for an app output in the prompt rail tooltip`,
      });
    case `commit`:
      return (0, Z.jsx)(l, {
        id: `thread.userMessageNavigation.commitOutput`,
        defaultMessage: `Commit`,
        description: `Label for a commit output in the prompt rail tooltip`,
      });
    case `file`:
      return (0, Z.jsx)(l, {
        id: `thread.userMessageNavigation.fileOutput`,
        defaultMessage: `File`,
        description: `Fallback label for a file output in the prompt rail tooltip`,
      });
    case `google-drive`:
      return (0, Z.jsx)(l, {
        id: `thread.userMessageNavigation.googleDriveOutput`,
        defaultMessage: `Google Drive`,
        description: `Fallback label for a Google Drive output in the prompt rail tooltip`,
      });
    case `image`:
      return (0, Z.jsx)(l, {
        id: `thread.userMessageNavigation.imageOutput`,
        defaultMessage: `Image`,
        description: `Label for a generated image output in the prompt rail tooltip`,
      });
    case `pull-request`:
      return (0, Z.jsx)(l, {
        id: `thread.userMessageNavigation.pullRequestOutput`,
        defaultMessage: `Pull request`,
        description: `Fallback label for a pull request output in the prompt rail tooltip`,
      });
    case `review`:
      return (0, Z.jsx)(l, {
        id: `thread.userMessageNavigation.reviewOutput`,
        defaultMessage: `Review`,
        description: `Fallback label for a review output in the prompt rail tooltip`,
      });
    case `website`:
      return (0, Z.jsx)(l, {
        id: `thread.userMessageNavigation.websiteOutput`,
        defaultMessage: `Web preview`,
        description: `Label for a website output in the prompt rail tooltip`,
      });
  }
}
function Dt(e) {
  let t = (0, X.c)(3),
    { ExternalLinkIcon: n, label: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e = [],
      a = 0,
      o = 0;
    for (; a < r.length;) {
      let t = Ne(r, a);
      if (t == null) break;
      a = t.end;
      let i = me(t.label).trim(),
        s = he(t.path),
        c,
        l = i,
        u;
      if (Pe(s) || De(s)) ((c = ue(i) ?? x), (l = te(i)));
      else if (i.startsWith(`$`)) {
        let e = Te(i);
        ((c = le(e.icon)), (l = e.displayLabel ?? P(e.name)));
      } else {
        let e = ge(s);
        if (e == null) continue;
        ((c = (0, Z.jsx)(n, { href: e })), (u = e));
      }
      (e.push(r.slice(o, t.start)),
        e.push((0, Z.jsx)(T, { className: `first:ps-0`, icon: c, title: u, children: l }, t.start)),
        (o = t.end));
    }
    (e.push(r.slice(o)),
      (i = (0, Z.jsx)(Z.Fragment, { children: e })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i));
  } else i = t[2];
  return i;
}
var X,
  Ot,
  Z,
  kt,
  At,
  jt = e(() => {
    ((X = N()),
      _e(),
      H(),
      O(),
      (Ot = t(o(), 1)),
      ce(),
      ne(),
      S(),
      d(),
      z(),
      Ce(),
      a(),
      Xe(),
      C(),
      ie(),
      s(),
      c(),
      ct(),
      dt(),
      Re(),
      y(),
      de(),
      g(),
      Be(),
      pt(),
      E(),
      k(),
      I(),
      gt(),
      (Z = A()),
      (kt = 2),
      (At = { a: yt, code: yt, img: bt, table: xt, td: Ct, th: St }));
  });
function Mt(e) {
  let t = (0, Ht.c)(10),
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
      ? ((f = (0, $.jsx)(Nt, {
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
function Nt(e) {
  let t = (0, Ht.c)(111),
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
    p;
  t[0] === d ? (p = t[1]) : ((p = () => new Set(d == null ? [] : [d])), (t[0] = d), (t[1] = p));
  let [m, h] = (0, Q.useState)(p),
    [g, te] = (0, Q.useState)(!1),
    [_, ne] = (0, Q.useState)(null),
    [v, y] = (0, Q.useState)(null),
    [b, ie] = (0, Q.useState)(!1),
    [ae, se] = (0, Q.useState)(!1),
    [x, ce] = (0, Q.useState)(null),
    le = (0, Q.useRef)(null),
    S = (0, Q.useRef)(null),
    ue;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((ue = new Set()), (t[2] = ue)) : (ue = t[2]);
  let C = (0, Q.useRef)(ue),
    w = (0, Q.useRef)(null),
    T = (0, Q.useRef)(!1),
    E = (0, Q.useId)(),
    D = re(),
    de;
  t[3] === r ? (de = t[4]) : ((de = r.map(Pt).join(`\0`)), (t[3] = r), (t[4] = de));
  let fe = de,
    pe;
  t[5] !== m || t[6] !== r || t[7] !== d
    ? ((pe = r.find((e) => m.has(e.id))?.id ?? d), (t[5] = m), (t[6] = r), (t[7] = d), (t[8] = pe))
    : (pe = t[8]);
  let O = pe,
    me;
  t[9] === O
    ? (me = t[10])
    : ((me = () => {
        S.current ?? It(le.current, O);
      }),
      (t[9] = O),
      (t[10] = me));
  let he = (0, Q.useEffectEvent)(me),
    ge;
  t[11] === l
    ? (ge = t[12])
    : ((ge = (e) => {
        l == null ||
          S.current != null ||
          C.current.has(e.id) ||
          (C.current.add(e.id),
          l(e)
            .then((t) => {
              t === !1 && C.current.delete(e.id);
            })
            .catch(() => {
              C.current.delete(e.id);
            }));
      }),
      (t[11] = l),
      (t[12] = ge));
  let k = oe(ge),
    _e;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = () => {
        w.current != null && (window.clearTimeout(w.current.timeoutId), (w.current = null));
      }),
      (t[13] = _e))
    : (_e = t[13]);
  let A = oe(_e),
    ve;
  t[14] !== A || t[15] !== k || t[16] !== l
    ? ((ve = (e) => {
        l == null ||
          S.current != null ||
          w.current?.itemId === e.id ||
          (A(),
          !C.current.has(e.id) &&
            (w.current = {
              itemId: e.id,
              timeoutId: window.setTimeout(() => {
                ((w.current = null), k(e));
              }, Kt),
            }));
      }),
      (t[14] = A),
      (t[15] = k),
      (t[16] = l),
      (t[17] = ve))
    : (ve = t[17]);
  let j = oe(ve),
    ye,
    be;
  (t[18] === A
    ? ((ye = t[19]), (be = t[20]))
    : ((be = () => A), (ye = [A]), (t[18] = A), (t[19] = ye), (t[20] = be)),
    (0, Q.useEffect)(be, ye));
  let xe;
  t[21] !== n || t[22] !== u || t[23] !== i
    ? ((xe = async (e, t) => {
        let r = n();
        if (r == null) return;
        let a = Ft(r, e.id);
        if (a == null && u != null) {
          if (t === `instant` && e.isLoaded === !1) return;
          (await u(e), (a = Ft(r, e.id)), zt(a, i));
          return;
        }
        (a?.scrollIntoView({ behavior: t, block: `start` }), zt(a, i));
      }),
      (t[21] = n),
      (t[22] = u),
      (t[23] = i),
      (t[24] = xe))
    : (xe = t[24]);
  let M = oe(xe),
    Se;
  t[25] !== M || t[26] !== c
    ? ((Se = (e) => (c?.(), M(e, `smooth`))), (t[25] = M), (t[26] = c), (t[27] = Se))
    : (Se = t[27]);
  let N = Se,
    Ce;
  t[28] === g
    ? (Ce = t[29])
    : ((Ce = (e) => {
        let t = S.current;
        t?.pointerId === e.pointerId &&
          ((S.current = null),
          ne(null),
          t.pointerCaptureTarget.hasPointerCapture?.(e.pointerId) &&
            t.pointerCaptureTarget.releasePointerCapture?.(e.pointerId),
          g || (y(null), ie(!1)),
          window.setTimeout(() => {
            T.current = !1;
          }, 0));
      }),
      (t[28] = g),
      (t[29] = Ce));
  let P = oe(Ce),
    we;
  t[30] !== n || t[31] !== he
    ? ((we = () => {
        let e = n(),
          t = e?.querySelector(`[data-thread-user-message-navigation-content]`) ?? null;
        if (e == null || t == null) return;
        let r = null,
          i = () => {
            r ??= window.requestAnimationFrame(() => {
              ((r = null), ce(e.parentElement), se(Ze(e, t)), he());
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
            (r != null && window.cancelAnimationFrame(r),
              a.disconnect(),
              o.disconnect(),
              window.removeEventListener(`resize`, i));
          }
        );
      }),
      (t[30] = n),
      (t[31] = he),
      (t[32] = we))
    : (we = t[32]);
  let Te;
  (t[33] === n ? (Te = t[34]) : ((Te = [n]), (t[33] = n), (t[34] = Te)), (0, Q.useEffect)(we, Te));
  let Ee, De;
  (t[35] !== n || t[36] !== fe
    ? ((Ee = () => {
        let e = n();
        if (e == null || typeof IntersectionObserver > `u`) return;
        let t = new Set(),
          r = new Map(),
          i = new Set(),
          a = fe.length === 0 ? [] : fe.split(`\0`),
          o = new Set(a),
          s = () => {
            let e = a.findIndex((e) => t.has(e));
            if (e === -1) return;
            let n = (0, Ut.default)(a, (e) => t.has(e)),
              r = new Set(a.slice(e, n + 1));
            h((e) => (e.size === r.size && [...e].every((e) => r.has(e)) ? e : r));
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
            { root: e, rootMargin: `-${Gt}px 0px 0px 0px` },
          ),
          l = () => {
            let n = new Set();
            for (let t of e.querySelectorAll(`[data-content-search-unit-key]`)) {
              let e = t.dataset.contentSearchUnitKey;
              if (e == null || !o.has(e)) continue;
              let a = t.closest(qt),
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
            Bt(e) && l();
          });
        return (
          u.observe(e, { childList: !0, subtree: !0 }),
          l(),
          () => {
            (u.disconnect(), c.disconnect());
          }
        );
      }),
      (De = [n, fe]),
      (t[35] = n),
      (t[36] = fe),
      (t[37] = Ee),
      (t[38] = De))
    : ((Ee = t[37]), (De = t[38])),
    (0, Q.useEffect)(Ee, De));
  let Oe;
  t[39] !== O || t[40] !== _
    ? ((Oe = () => {
        _ ?? It(le.current, O);
      }),
      (t[39] = O),
      (t[40] = _),
      (t[41] = Oe))
    : (Oe = t[41]);
  let ke;
  if (
    (t[42] !== O || t[43] !== ae || t[44] !== _
      ? ((ke = [O, ae, _]), (t[42] = O), (t[43] = ae), (t[44] = _), (t[45] = ke))
      : (ke = t[45]),
    (0, Q.useLayoutEffect)(Oe, ke),
    !ae || x == null || typeof document > `u`)
  )
    return null;
  let F;
  t[46] === D
    ? (F = t[47])
    : ((F = D.formatMessage({
        id: `thread.userMessageNavigation.ariaLabel`,
        defaultMessage: `User messages`,
        description: `Aria label for the floating thread navigation rail that jumps between user messages`,
      })),
      (t[46] = D),
      (t[47] = F));
  let Ae;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = { opacity: 1 }), (t[48] = Ae))
    : (Ae = t[48]);
  let je;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = { opacity: 0 }), (t[49] = je))
    : (je = t[49]);
  let I;
  t[50] === i
    ? (I = t[51])
    : ((I = i ? { duration: 0 } : { duration: 0.15, ease: [0.23, 1, 0.32, 1] }),
      (t[50] = i),
      (t[51] = I));
  let Me = s != null,
    Ne;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = (e) => {
        (!e && S.current != null) || (ie(e), e || y(null));
      }),
      (t[52] = Ne))
    : (Ne = t[52]);
  let Pe = v?.button,
    L;
  t[53] !== r || t[54] !== v?.item
    ? ((L =
        r.find((e) => e.id === v?.item.id) ??
        r.find((e) => e.turnKey === v?.item.turnKey) ??
        v?.item ??
        r[0]),
      (t[53] = r),
      (t[54] = v?.item),
      (t[55] = L))
    : (L = t[55]);
  let R;
  t[56] !== s || t[57] !== L || t[58] !== a
    ? ((R = (0, $.jsx)(_t, { components: a, item: L, onBookmarkChange: s })),
      (t[56] = s),
      (t[57] = L),
      (t[58] = a),
      (t[59] = R))
    : (R = t[59]);
  let Fe = _ != null || void 0,
    z;
  t[60] !== A || t[61] !== r
    ? ((z = (e) => {
        if (e.button !== 0) return;
        let t = Rt(r, e.currentTarget, e.target instanceof Element ? e.target : null);
        t != null &&
          (A(),
          (T.current = !1),
          te(!0),
          (S.current = {
            itemId: t.item.id,
            pointerCaptureTarget: t.button,
            pointerId: e.pointerId,
          }),
          ne(t.item.id),
          y(t),
          ie(!0),
          t.button.setPointerCapture?.(e.pointerId));
      }),
      (t[60] = A),
      (t[61] = r),
      (t[62] = z))
    : (z = t[62]);
  let Ie;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = () => {
        te(!0);
      }),
      (t[63] = Ie))
    : (Ie = t[63]);
  let B;
  t[64] !== A || t[65] !== s
    ? ((B = () => {
        (A(), te(!1), s == null && S.current == null && y(null));
      }),
      (t[64] = A),
      (t[65] = s),
      (t[66] = B))
    : (B = t[66]);
  let V;
  t[67] !== P || t[68] !== j || t[69] !== M || t[70] !== r
    ? ((V = (e) => {
        let t = S.current;
        if (t == null) {
          let t = Rt(r, e.currentTarget, e.target instanceof Element ? e.target : null);
          t != null && (j(t.item), y((e) => (e?.item.id === t.item.id ? e : t)));
          return;
        }
        if (t.pointerId !== e.pointerId) return;
        if (e.buttons % 2 == 0) {
          P(e);
          return;
        }
        let n = e.currentTarget.getBoundingClientRect(),
          i = Rt(
            r,
            e.currentTarget,
            document.elementFromPoint(
              n.left + n.width / 2,
              Math.max(n.top, Math.min(e.clientY, n.bottom - 1)),
            ),
          );
        i == null ||
          i.item.id === t.itemId ||
          ((S.current = { ...t, itemId: i.item.id }),
          ne(i.item.id),
          y(i),
          (T.current = !0),
          M(i.item, `instant`));
      }),
      (t[67] = P),
      (t[68] = j),
      (t[69] = M),
      (t[70] = r),
      (t[71] = V))
    : (V = t[71]);
  let H;
  t[72] !== m ||
  t[73] !== A ||
  t[74] !== N ||
  t[75] !== j ||
  t[76] !== k ||
  t[77] !== D ||
  t[78] !== b ||
  t[79] !== r ||
  t[80] !== _ ||
  t[81] !== E ||
  t[82] !== v?.item
    ? ((H = r.map((e, t) =>
        (0, $.jsx)(
          `button`,
          {
            "data-thread-user-message-navigation-item-id": e.id,
            "data-scrub-target": _ === e.id || void 0,
            "aria-current": m.has(e.id) ? `true` : void 0,
            "aria-describedby": b && v?.item.id === e.id ? E : void 0,
            "aria-label": e.isBookmarked
              ? D.formatMessage(
                  {
                    id: `thread.userMessageNavigation.jumpBookmarkedAriaLabel`,
                    defaultMessage: `Jump to user message {position}, bookmarked turn`,
                    description: `Aria label for a bookmarked turn in the floating thread user-message navigation rail`,
                  },
                  { position: t + 1 },
                )
              : D.formatMessage(
                  {
                    id: `thread.userMessageNavigation.jumpAriaLabel`,
                    defaultMessage: `Jump to user message {position}`,
                    description: `Aria label for a row in the floating thread user-message navigation rail`,
                  },
                  { position: t + 1 },
                ),
            className: `flex h-2.5 w-9 shrink-0 cursor-interaction items-center outline-none`,
            type: `button`,
            onClick: (t) => {
              if (T.current) {
                T.current = !1;
                return;
              }
              (y({ button: t.currentTarget, item: e }), ie(!0), N(e));
            },
            onFocus: (t) => {
              (A(), k(e), y({ button: t.currentTarget, item: e }), ie(!0));
            },
            onPointerEnter: () => {
              j(e);
            },
            children: (0, $.jsx)(qe, { bookmarked: e.isBookmarked }),
          },
          e.id,
        ),
      )),
      (t[72] = m),
      (t[73] = A),
      (t[74] = N),
      (t[75] = j),
      (t[76] = k),
      (t[77] = D),
      (t[78] = b),
      (t[79] = r),
      (t[80] = _),
      (t[81] = E),
      (t[82] = v?.item),
      (t[83] = H))
    : (H = t[83]);
  let U;
  t[84] === H
    ? (U = t[85])
    : ((U = (0, $.jsx)(`div`, { className: `flex flex-col`, children: H })),
      (t[84] = H),
      (t[85] = U));
  let W;
  t[86] !== P || t[87] !== Fe || t[88] !== z || t[89] !== B || t[90] !== V || t[91] !== U
    ? ((W = (0, $.jsx)(`div`, {
        ref: le,
        "data-floating-navigation-rail-list": !0,
        "data-thread-user-message-navigation-rail-list": !0,
        "data-scrubbing": Fe,
        className: `vertical-scroll-fade-mask hide-scrollbar flex max-h-[min(70vh,40rem)] flex-col overflow-y-auto overscroll-contain [--edge-fade-distance:2.5rem]`,
        onLostPointerCapture: P,
        onPointerCancelCapture: P,
        onPointerDownCapture: z,
        onPointerEnter: Ie,
        onPointerLeave: B,
        onPointerMove: V,
        onPointerUpCapture: P,
        children: U,
      })),
      (t[86] = P),
      (t[87] = Fe),
      (t[88] = z),
      (t[89] = B),
      (t[90] = V),
      (t[91] = U),
      (t[92] = W))
    : (W = t[92]);
  let G;
  t[93] !== b ||
  t[94] !== Me ||
  t[95] !== Pe ||
  t[96] !== R ||
  t[97] !== W ||
  t[98] !== E ||
  t[99] !== o
    ? ((G = (0, $.jsx)(ee, {
        align: `center`,
        delayOpen: !0,
        interactive: Me,
        open: b,
        onOpenChange: Ne,
        portalContainer: o,
        positioningElement: Pe,
        side: `right`,
        sideOffset: 0,
        skipDelayKey: `thread-user-message-navigation`,
        tooltipId: E,
        tooltipMaxWidth: `min(20rem, calc(100vw - 16px))`,
        variant: `floating-navigation-rail`,
        tooltipContent: R,
        children: W,
      })),
      (t[93] = b),
      (t[94] = Me),
      (t[95] = Pe),
      (t[96] = R),
      (t[97] = W),
      (t[98] = E),
      (t[99] = o),
      (t[100] = G))
    : (G = t[100]);
  let K;
  t[101] !== F || t[102] !== I || t[103] !== G
    ? ((K = (0, $.jsx)(f.nav, {
        "aria-label": F,
        animate: Ae,
        className: `absolute top-1/2 left-3 z-20 -translate-y-1/2 electron:left-4`,
        initial: je,
        transition: I,
        children: G,
      })),
      (t[101] = F),
      (t[102] = I),
      (t[103] = G),
      (t[104] = K))
    : (K = t[104]);
  let q;
  t[105] !== i || t[106] !== K
    ? ((q = (0, $.jsx)(et, { railRef: le, prefersReducedMotion: i, children: K })),
      (t[105] = i),
      (t[106] = K),
      (t[107] = q))
    : (q = t[107]);
  let Le;
  return (
    t[108] !== x || t[109] !== q
      ? ((Le = (0, Wt.createPortal)(q, x)), (t[108] = x), (t[109] = q), (t[110] = Le))
      : (Le = t[110]),
    Le
  );
}
function Pt(e) {
  return e.id;
}
function Ft(e, t) {
  return e.querySelector(`[data-content-search-unit-key="${Vt(t)}"]`);
}
function It(e, t) {
  Qe(e, Lt(e, t));
}
function Lt(e, t) {
  return t == null || e == null
    ? null
    : e.querySelector(`[data-thread-user-message-navigation-item-id="${Vt(t)}"]`);
}
function Rt(e, t, n) {
  let r = n?.closest(`[data-thread-user-message-navigation-item-id]`);
  if (r == null || !t.contains(r)) return null;
  let i = e.find((e) => e.id === r.dataset.threadUserMessageNavigationItemId);
  return i == null ? null : { button: r, item: i };
}
function zt(e, t) {
  (
    e?.querySelector(`[data-user-message-bubble]`) ??
    e?.querySelector(`[data-composer-attachment-pill]`)
  )?.animate?.(
    [{ backgroundColor: Yt }, { backgroundColor: Yt, offset: 0.35 }, { backgroundColor: Xt }],
    {
      duration: t ? 0 : je,
      easing: `cubic-bezier(0.23, 1, 0.32, 1)`,
    },
  );
}
function Bt(e) {
  return e.some((e) =>
    [...e.addedNodes, ...e.removedNodes].some(
      (e) => e instanceof HTMLElement && (e.matches(Jt) || e.querySelector(Jt) != null),
    ),
  );
}
function Vt(e) {
  return typeof CSS < `u` && CSS.escape != null ? CSS.escape(e) : e.replace(/"/g, `\\"`);
}
var Ht,
  Ut,
  Q,
  Wt,
  $,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt = e(() => {
    ((Ht = N()),
      F(),
      (Ut = t(r(), 1)),
      (Q = t(o(), 1)),
      (Wt = t(L(), 1)),
      ce(),
      Xe(),
      $e(),
      h(),
      we(),
      D(),
      at(),
      jt(),
      ($ = A()),
      (Gt = 16),
      (Kt = 150),
      (qt = `[data-turn-key]`),
      (Jt = `${qt}, [data-content-search-turn-key]`),
      (Yt = `color-mix(in srgb, var(--color-text) 14%, transparent)`),
      (Xt = `color-mix(in srgb, var(--color-text) 5%, transparent)`));
  });
function Qt(e) {
  let t = (0, en.c)(5),
    { items: n, onBookmarkChange: r, onPreviewItem: i, onRevealItem: a } = e;
  if (n.length < 4) return null;
  let o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
      ? ((o = (0, nn.jsx)($t, {
          items: n,
          onBookmarkChange: r,
          onPreviewItem: i,
          onRevealItem: a,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function $t(e) {
  let t = (0, en.c)(11),
    { items: n, onBookmarkChange: r, onPreviewItem: i, onRevealItem: a } = e,
    { getScrollElement: o } = Le(),
    s = (0, tn.useContext)(be),
    c = p(ke),
    l = xe(),
    u;
  t[0] === c ? (u = t[1]) : ((u = () => c.logProductEvent(B, {})), (t[0] = c), (t[1] = u));
  let d;
  return (
    t[2] !== o ||
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== a ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== s
      ? ((d = (0, nn.jsx)(Mt, {
          getScrollElement: o,
          items: n,
          prefersReducedMotion: l,
          tooltipComponents: rn,
          tooltipPortalContainer: s,
          onBookmarkChange: r,
          onNavigationClick: u,
          onPreviewItem: i,
          onRevealItem: a,
        })),
        (t[2] = o),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = a),
        (t[7] = l),
        (t[8] = u),
        (t[9] = s),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var en, tn, nn, rn;
e(() => {
  ((en = N()),
    pe(),
    v(),
    (tn = t(o(), 1)),
    i(),
    K(),
    b(),
    W(),
    ae(),
    q(),
    Zt(),
    (nn = A()),
    (rn = { ExternalLinkIcon: G, Markdown: U }));
})();
export { Qt as AppThreadUserMessageNavigationRail };
//# sourceMappingURL=thread-user-message-navigation-rail-app-4703491a5992.js.map
