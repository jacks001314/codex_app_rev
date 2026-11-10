const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-a5737eeeef79.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
      "./app-primary-4c40d73a1074.js",
      "./app-primary-d815831c9bad.css",
      "./cookies-35a81e307103.js",
      "./query-9d5dcdeccdca.js",
      "./history-7a399655a3e6.js",
      "./google-chrome-38e9ab83c385.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  BV as a,
  Byt as o,
  Cit as s,
  Cpn as c,
  D6t as l,
  Fj as u,
  G3t as d,
  GG as f,
  Hat as p,
  Hu as m,
  IXt as h,
  Ij as g,
  JG as _,
  Jit as v,
  Jmt as y,
  Jrt as b,
  KG as x,
  Kit as S,
  Lyt as C,
  MMt as w,
  N3t as T,
  O3t as E,
  O6t as D,
  OL as O,
  Oit as k,
  Opn as A,
  RWt as j,
  Rpn as M,
  Ryt as N,
  Sit as P,
  Spn as F,
  TJt as I,
  U3t as L,
  Uat as R,
  V3t as z,
  Vat as B,
  Vu as ee,
  WG as te,
  WXt as ne,
  X4t as re,
  Xrt as ie,
  Xu as ae,
  Y4t as V,
  Yrt as oe,
  ZG as se,
  Zrt as ce,
  _Rt as le,
  _mn as ue,
  a3t as de,
  aYt as fe,
  bit as pe,
  bpn as H,
  cYt as me,
  dit as he,
  eit as ge,
  fit as _e,
  gRt as ve,
  gmn as ye,
  hmn as be,
  hz as xe,
  iit as Se,
  jMt as Ce,
  jXt as we,
  kL as Te,
  kMt as U,
  kXt as Ee,
  kit as De,
  kmn as W,
  m1 as Oe,
  mz as G,
  nH as ke,
  nV as Ae,
  o3t as je,
  p1 as Me,
  qmt as Ne,
  qu as Pe,
  rV as Fe,
  rit as Ie,
  sYt as Le,
  tH as Re,
  tit as ze,
  wJt as Be,
  xRt as Ve,
  yRt as He,
  zV as Ue,
  zpn as We,
  zyt as Ge,
} from "./app-initial-f094ef01c64d.js";
import { Gs as Ke, Ks as qe, Ws as Je, qs as Ye } from "./app-primary-4c40d73a1074.js";
import { n as Xe, t as Ze } from "./compact-empty-state-9a2953b7acb0.js";
import { n as Qe, r as $e, s as et, t as tt } from "./cookies-35a81e307103.js";
import { n as nt, t as K } from "./format-bytes-12269d1f155b.js";
import { n as rt, t as it } from "./availability-99f8b82618ec.js";
function at(e) {
  switch (e) {
    case `macOS`:
      return H({
        id: `downloads.popover.showInFinder`,
        defaultMessage: `Show in Finder`,
        description: `Action that reveals a downloaded file in Finder`,
      });
    case `windows`:
      return H({
        id: `downloads.popover.showInFileExplorer`,
        defaultMessage: `Show in File Explorer`,
        description: `Action that reveals a downloaded file in File Explorer`,
      });
    case `linux`:
      return H({
        id: `downloads.popover.showInFileManager`,
        defaultMessage: `Show in File Manager`,
        description: `Action that reveals a downloaded file in the system file manager`,
      });
  }
}
var ot = e(() => {
  F();
});
function st(e) {
  let t = (0, Y.c)(17),
    { className: r, downloadsService: i, snapshot: a } = e,
    o = n(de),
    s = A(),
    [l, u] = (0, wt.useState)(null);
  if (a == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(yt, {
            icon: (0, X.jsx)(Ce, { className: `icon-md` }),
            title: (0, X.jsx)(c, {
              id: `downloads.popover.loading`,
              defaultMessage: `Loading downloads`,
              description: `Loading state title for downloads popover`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let d = a.downloads,
    f;
  if (t[1] !== d) {
    let e = d.filter(lt),
      n = d.filter(ct);
    ((f = [...e, ...n]), (t[1] = d), (t[2] = f));
  } else f = t[2];
  let p = f,
    m;
  t[3] !== s || t[4] !== o
    ? ((m = async (e, t) => {
        (u(e.id),
          await (async () => {
            try {
              let e = await t();
              e.ok || o.get(we).danger(Ct(s, e));
            } catch {
              o.get(we).danger(Ct(s));
            }
          })().finally(() => {
            u(null);
          }));
      }),
      (t[3] = s),
      (t[4] = o),
      (t[5] = m))
    : (m = t[5]);
  let h = m;
  if (d.length === 0) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(yt, {
            icon: (0, X.jsx)(Re, {}),
            title: (0, X.jsx)(c, {
              id: `downloads.popover.empty`,
              defaultMessage: `No downloads yet`,
              description: `Empty state title for downloads popover`,
            }),
            description: (0, X.jsx)(c, {
              id: `downloads.popover.emptyDescription`,
              defaultMessage: `Files downloaded from the built-in browser will appear here`,
              description: `Empty state description for downloads popover`,
            }),
          })),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let g;
  t[7] === r ? (g = t[8]) : ((g = M(`flex min-h-0 flex-col gap-1`, r)), (t[7] = r), (t[8] = g));
  let _;
  t[9] !== i || t[10] !== p || t[11] !== l || t[12] !== h
    ? ((_ = (0, X.jsx)(ut, {
        downloads: p,
        downloadsService: i,
        pendingActionId: l,
        runDownloadAction: h,
      })),
      (t[9] = i),
      (t[10] = p),
      (t[11] = l),
      (t[12] = h),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  return (
    t[14] !== g || t[15] !== _
      ? ((v = (0, X.jsx)(`div`, { className: g, children: _ })),
        (t[14] = g),
        (t[15] = _),
        (t[16] = v))
      : (v = t[16]),
    v
  );
}
function ct(e) {
  return !Z.has(e.status);
}
function lt(e) {
  return Z.has(e.status);
}
function ut(e) {
  let t = (0, Y.c)(11),
    { downloads: n, downloadsService: r, pendingActionId: i, runDownloadAction: a } = e,
    o;
  if (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a) {
    let e;
    (t[5] !== r || t[6] !== i || t[7] !== a
      ? ((e = (e) =>
          (0, X.jsx)(
            dt,
            {
              download: e,
              pending: i === e.id,
              onCancel: () => a(e, () => r.cancel({ id: e.id })),
              onOpen: () => a(e, () => r.open({ id: e.id })),
              onPause: () => a(e, () => r.pause({ id: e.id })),
              onRemove: () => a(e, () => r.removeFromHistory({ id: e.id })),
              onResume: () => a(e, () => r.resume({ id: e.id })),
              onShowInFolder: () => a(e, () => r.showInFolder({ id: e.id })),
            },
            e.id,
          )),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a),
        (t[8] = e))
      : (e = t[8]),
      (o = n.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o));
  } else o = t[4];
  let s;
  return (
    t[9] === o
      ? (s = t[10])
      : ((s = (0, X.jsx)(X.Fragment, { children: o })), (t[9] = o), (t[10] = s)),
    s
  );
}
function dt(e) {
  let t = (0, Y.c)(52),
    {
      download: n,
      onCancel: r,
      onOpen: i,
      onPause: a,
      onRemove: s,
      onResume: c,
      onShowInFolder: l,
      pending: u,
    } = e,
    d = A(),
    { platform: f } = o(),
    p;
  t[0] === n.status ? (p = t[1]) : ((p = Z.has(n.status)), (t[0] = n.status), (t[1] = p));
  let m = p,
    h = n.status === `complete` && n.fileExists,
    g = h && !u,
    _;
  t[2] !== n.filename || t[3] !== d
    ? ((_ = d.formatMessage(
        {
          id: `downloads.popover.openDownload`,
          defaultMessage: `Open {filename}`,
          description: `Accessible label for a completed download row that opens the downloaded file`,
        },
        { filename: n.filename },
      )),
      (t[2] = n.filename),
      (t[3] = d),
      (t[4] = _))
    : (_ = t[4]);
  let v = _,
    y;
  t[5] !== g || t[6] !== i
    ? ((y = (e) => {
        !g || e.detail > 1 || i();
      }),
      (t[5] = g),
      (t[6] = i),
      (t[7] = y))
    : (y = t[7]);
  let b = y,
    x;
  t[8] !== n || t[9] !== r || t[10] !== i || t[11] !== s || t[12] !== l || t[13] !== f
    ? ((x = gt({
        download: n,
        onCancel: r,
        onOpen: i,
        onRemove: s,
        onShowInFolder: l,
        platform: f,
      })),
      (t[8] = n),
      (t[9] = r),
      (t[10] = i),
      (t[11] = s),
      (t[12] = l),
      (t[13] = f),
      (t[14] = x))
    : (x = t[14]);
  let S = x,
    C;
  t[15] === n ? (C = t[16]) : ((C = (0, X.jsx)(ft, { download: n })), (t[15] = n), (t[16] = C));
  let w;
  t[17] === n.filename
    ? (w = t[18])
    : ((w = (0, X.jsx)(`div`, { className: `truncate text-sm font-normal`, children: n.filename })),
      (t[17] = n.filename),
      (t[18] = w));
  let T;
  t[19] === n ? (T = t[20]) : ((T = (0, X.jsx)(_t, { download: n })), (t[19] = n), (t[20] = T));
  let E;
  t[21] !== w || t[22] !== T
    ? ((E = (0, X.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-0.5`, children: [w, T] })),
      (t[21] = w),
      (t[22] = T),
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] !== n || t[25] !== m
    ? ((D = m ? (0, X.jsx)(pt, { download: n }) : null), (t[24] = n), (t[25] = m), (t[26] = D))
    : (D = t[26]);
  let O;
  t[27] !== E || t[28] !== D
    ? ((O = (0, X.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [E, D] })),
      (t[27] = E),
      (t[28] = D),
      (t[29] = O))
    : (O = t[29]);
  let k;
  t[30] !== O || t[31] !== C
    ? ((k = (0, X.jsxs)(X.Fragment, { children: [C, O] })), (t[30] = O), (t[31] = C), (t[32] = k))
    : (k = t[32]);
  let j = k,
    M;
  t[33] !== h || t[34] !== b || t[35] !== v || t[36] !== u || t[37] !== j
    ? ((M = h
        ? (0, X.jsx)(`button`, {
            type: `button`,
            className: `flex min-w-0 flex-1 cursor-interaction items-center gap-3 rounded-lg text-start outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            "aria-label": v,
            disabled: u,
            onClick: b,
            children: j,
          })
        : (0, X.jsx)(`div`, { className: `flex min-w-0 flex-1 items-center gap-3`, children: j })),
      (t[33] = h),
      (t[34] = b),
      (t[35] = v),
      (t[36] = u),
      (t[37] = j),
      (t[38] = M))
    : (M = t[38]);
  let N;
  t[39] !== n || t[40] !== S || t[41] !== r || t[42] !== a || t[43] !== c || t[44] !== u
    ? ((N = (0, X.jsx)(`div`, {
        className: `shrink-0`,
        children: (0, X.jsx)(mt, {
          download: n,
          menuItems: S,
          onCancel: r,
          onPause: a,
          onResume: c,
          pending: u,
        }),
      })),
      (t[39] = n),
      (t[40] = S),
      (t[41] = r),
      (t[42] = a),
      (t[43] = c),
      (t[44] = u),
      (t[45] = N))
    : (N = t[45]);
  let P;
  t[46] !== M || t[47] !== N
    ? ((P = (0, X.jsxs)(`div`, {
        className: `group relative flex items-center gap-3 rounded-lg px-2 py-2 select-none hover:bg-primary-ghost-hover`,
        children: [M, N],
      })),
      (t[46] = M),
      (t[47] = N),
      (t[48] = P))
    : (P = t[48]);
  let F;
  return (
    t[49] !== S || t[50] !== P
      ? ((F = (0, X.jsx)(te, { items: S, children: P })), (t[49] = S), (t[50] = P), (t[51] = F))
      : (F = t[51]),
    F
  );
}
function ft(e) {
  let t = (0, Y.c)(2),
    { download: n } = e,
    r = P(n.path || n.filename),
    i = r === `folder` ? pe.document : pe[r],
    a;
  return (
    t[0] === i
      ? (a = t[1])
      : ((a = (0, X.jsx)(`div`, {
          className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-text/5 text-tertiary`,
          children: (0, X.jsx)(i, { className: `icon-sm` }),
        })),
        (t[0] = i),
        (t[1] = a)),
    a
  );
}
function pt(e) {
  let t = (0, Y.c)(6),
    { download: n } = e,
    r = n.status === `paused`,
    i = n.totalBytes > 0 ? Math.min(1, n.receivedBytes / n.totalBytes) : null,
    a = Te(),
    o;
  t[0] !== r || t[1] !== i || t[2] !== a
    ? ((o =
        i == null
          ? r
            ? null
            : (0, X.jsx)(`div`, {
                className: `h-full w-1/3 animate-pulse rounded-full bg-text-info motion-reduce:animate-none`,
              })
          : (0, X.jsx)(`div`, {
              className: M(
                `h-full w-full origin-left rounded-full`,
                !a && `transition-[opacity,transform] duration-relaxed ease-linear`,
                r ? `bg-text-tertiary` : `bg-text-info`,
                i === 0 ? `opacity-0` : `opacity-100`,
              ),
              style: { transform: `scaleX(${Math.max(0.03, i)})` },
            })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === o
      ? (s = t[5])
      : ((s = (0, X.jsx)(`div`, {
          className: `mt-1 h-1 overflow-hidden rounded-full bg-text/10`,
          children: o,
        })),
        (t[4] = o),
        (t[5] = s)),
    s
  );
}
function mt(e) {
  let t = (0, Y.c)(44),
    { download: n, menuItems: r, onCancel: i, onPause: a, onResume: o, pending: s } = e,
    c = A(),
    l;
  t[0] !== n.filename || t[1] !== c
    ? ((l = c.formatMessage(
        {
          id: `downloads.popover.actionsForFile`,
          defaultMessage: `Download actions for {filename}`,
          description: `Accessible label for a download actions menu that identifies the downloaded file`,
        },
        { filename: n.filename },
      )),
      (t[0] = n.filename),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] === c
    ? (d = t[4])
    : ((d = c.formatMessage({
        id: `downloads.popover.cancel`,
        defaultMessage: `Stop downloading`,
        description: `Action that stops an active download`,
      })),
      (t[3] = c),
      (t[4] = d));
  let f = d,
    p;
  t[5] === c
    ? (p = t[6])
    : ((p = c.formatMessage({
        id: `downloads.popover.pause`,
        defaultMessage: `Pause`,
        description: `Action that pauses a download`,
      })),
      (t[5] = c),
      (t[6] = p));
  let m = p,
    h;
  t[7] === c
    ? (h = t[8])
    : ((h = c.formatMessage({
        id: `downloads.popover.resume`,
        defaultMessage: `Resume`,
        description: `Action that resumes a paused download`,
      })),
      (t[7] = c),
      (t[8] = h));
  let g = h;
  if (s) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(Ce, { className: `icon-xs shrink-0` })), (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  if (n.status === `paused` && (n.canResume || n.canCancel)) {
    let e = !n.canResume,
      r;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(Je, { className: `icon-sm` })), (t[10] = r))
      : (r = t[10]);
    let a;
    t[11] !== o || t[12] !== g || t[13] !== e
      ? ((a = (0, X.jsx)(q, { label: g, disabled: e, onClick: o, children: r })),
        (t[11] = o),
        (t[12] = g),
        (t[13] = e),
        (t[14] = a))
      : (a = t[14]);
    let s = !n.canCancel,
      c;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, X.jsx)(he, { className: `icon-sm` })), (t[15] = c))
      : (c = t[15]);
    let l;
    t[16] !== i || t[17] !== f || t[18] !== s
      ? ((l = (0, X.jsx)(q, { label: f, disabled: s, onClick: i, children: c })),
        (t[16] = i),
        (t[17] = f),
        (t[18] = s),
        (t[19] = l))
      : (l = t[19]);
    let u;
    return (
      t[20] !== l || t[21] !== a
        ? ((u = (0, X.jsxs)(`div`, {
            className: `flex shrink-0 items-center gap-1`,
            children: [a, l],
          })),
          (t[20] = l),
          (t[21] = a),
          (t[22] = u))
        : (u = t[22]),
      u
    );
  }
  if ((n.status === `started` || n.status === `in_progress`) && (n.canPause || n.canCancel)) {
    let e = !n.canPause,
      r;
    t[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(qe, { className: `icon-sm` })), (t[23] = r))
      : (r = t[23]);
    let o;
    t[24] !== a || t[25] !== m || t[26] !== e
      ? ((o = (0, X.jsx)(q, { label: m, disabled: e, onClick: a, children: r })),
        (t[24] = a),
        (t[25] = m),
        (t[26] = e),
        (t[27] = o))
      : (o = t[27]);
    let s = !n.canCancel,
      c;
    t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, X.jsx)(he, { className: `icon-sm` })), (t[28] = c))
      : (c = t[28]);
    let l;
    t[29] !== i || t[30] !== f || t[31] !== s
      ? ((l = (0, X.jsx)(q, { label: f, disabled: s, onClick: i, children: c })),
        (t[29] = i),
        (t[30] = f),
        (t[31] = s),
        (t[32] = l))
      : (l = t[32]);
    let u;
    return (
      t[33] !== l || t[34] !== o
        ? ((u = (0, X.jsxs)(`div`, {
            className: `flex shrink-0 items-center gap-1`,
            children: [o, l],
          })),
          (t[33] = l),
          (t[34] = o),
          (t[35] = u))
        : (u = t[35]),
      u
    );
  }
  let _;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(Ue, { className: `icon-sm` })), (t[36] = _))
    : (_ = t[36]);
  let v;
  t[37] === u
    ? (v = t[38])
    : ((v = (0, X.jsx)(U, {
        type: `button`,
        color: `ghostTertiary`,
        size: `icon`,
        uniform: !0,
        className: `!bg-transparent`,
        "aria-label": u,
        children: _,
      })),
      (t[37] = u),
      (t[38] = v));
  let y;
  t[39] === r ? (y = t[40]) : ((y = r.map(ht)), (t[39] = r), (t[40] = y));
  let b;
  return (
    t[41] !== v || t[42] !== y
      ? ((b = (0, X.jsx)(x, { align: `end`, contentWidth: `menu`, triggerButton: v, children: y })),
        (t[41] = v),
        (t[42] = y),
        (t[43] = b))
      : (b = t[43]),
    b
  );
}
function ht(e) {
  return e.type === `separator`
    ? (0, X.jsx)(_.Separator, {}, e.id)
    : (0, X.jsx)(
        _.Item,
        {
          disabled: e.enabled === !1,
          onSelect: e.onSelect,
          children:
            e.message == null ? e.id : (0, X.jsx)(c, { ...e.message, values: e.messageValues }),
        },
        e.id,
      );
}
function gt({ download: e, onCancel: t, onOpen: n, onRemove: r, onShowInFolder: i, platform: a }) {
  let o = [];
  return (
    e.status === `complete` &&
      o.push({
        id: `download-open`,
        message: H({
          id: `downloads.popover.open`,
          defaultMessage: `Open`,
          description: `Action that opens a downloaded file`,
        }),
        enabled: e.fileExists,
        onSelect: () => {
          n();
        },
      }),
    o.push({
      id: `download-show-in-folder`,
      message: at(a),
      enabled: e.fileExists,
      onSelect: () => {
        i();
      },
    }),
    Z.has(e.status) &&
      o.push({
        id: `download-stop`,
        message: H({
          id: `downloads.popover.stop`,
          defaultMessage: `Stop`,
          description: `Action that stops an active download`,
        }),
        enabled: e.canCancel,
        onSelect: () => {
          t();
        },
      }),
    o.push(
      {
        id: `download-copy-address`,
        message: H({
          id: `downloads.popover.copyAddress`,
          defaultMessage: `Copy address`,
          description: `Action that copies the source URL of a download`,
        }),
        onSelect: () => {
          Me(e.url);
        },
      },
      {
        id: `download-copy-path`,
        message: H({
          id: `downloads.popover.copyPath`,
          defaultMessage: `Copy path`,
          description: `Action that copies the local path of a download`,
        }),
        onSelect: () => {
          Me(e.path);
        },
      },
    ),
    Tt.has(e.status) &&
      o.push(
        { id: `download-remove-separator`, type: `separator` },
        {
          id: `download-remove`,
          message: H({
            id: `downloads.popover.remove`,
            defaultMessage: `Remove from list`,
            description: `Action that removes a download from the downloads history`,
          }),
          onSelect: () => {
            r();
          },
        },
      ),
    o
  );
}
function q(e) {
  let t = (0, Y.c)(10),
    { children: n, disabled: r, label: i, onClick: a } = e,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = () => {
        a();
      }),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== o
    ? ((s = (0, X.jsx)(U, {
        type: `button`,
        color: `ghostTertiary`,
        size: `icon`,
        uniform: !0,
        "aria-label": i,
        disabled: r,
        onClick: o,
        children: n,
      })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== i || t[8] !== s
      ? ((c = (0, X.jsx)(S, { tooltipContent: i, children: s })),
        (t[7] = i),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function _t(e) {
  let t = (0, Y.c)(8),
    { download: n } = e,
    r = A(),
    i = n.status === `failed` ? `text-danger` : `text-tertiary`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = M(`flex min-w-0 items-center gap-1.5 text-xs`, i)), (t[0] = i), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r
    ? ((o = (0, X.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, X.jsx)(vt, { download: n, intl: r }),
      })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, X.jsx)(`div`, { className: a, children: o })), (t[5] = a), (t[6] = o), (t[7] = s))
      : (s = t[7]),
    s
  );
}
function vt(e) {
  let t = (0, Y.c)(47),
    { download: n, intl: r } = e,
    i = ` ${Et} `;
  switch (n.status) {
    case `in_progress`: {
      let e;
      return (
        t[0] !== n || t[1] !== r
          ? ((e =
              n.totalBytes > 0
                ? (0, X.jsxs)(X.Fragment, { children: [xt(n, r), i, J(n, r), i, St(n, r)] })
                : (0, X.jsxs)(X.Fragment, { children: [xt(n, r), i, J(n, r)] })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `started`: {
      let e;
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(c, {
            id: `downloads.status.started`,
            defaultMessage: `Starting`,
            description: `Download status label`,
          })),
          (t[3] = e))
        : (e = t[3]);
      let a;
      t[4] !== n || t[5] !== r ? ((a = J(n, r)), (t[4] = n), (t[5] = r), (t[6] = a)) : (a = t[6]);
      let o;
      return (
        t[7] === a
          ? (o = t[8])
          : ((o = (0, X.jsxs)(X.Fragment, { children: [e, i, a] })), (t[7] = a), (t[8] = o)),
        o
      );
    }
    case `paused`: {
      let e;
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(c, {
            id: `downloads.status.paused`,
            defaultMessage: `Paused`,
            description: `Download status label`,
          })),
          (t[9] = e))
        : (e = t[9]);
      let a;
      t[10] !== n || t[11] !== r
        ? ((a = J(n, r)), (t[10] = n), (t[11] = r), (t[12] = a))
        : (a = t[12]);
      let o;
      return (
        t[13] === a
          ? (o = t[14])
          : ((o = (0, X.jsxs)(X.Fragment, { children: [e, i, a] })), (t[13] = a), (t[14] = o)),
        o
      );
    }
    case `failed`: {
      let e;
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(c, {
            id: `downloads.status.failed`,
            defaultMessage: `Download failed`,
            description: `Download status label`,
          })),
          (t[15] = e))
        : (e = t[15]);
      let a;
      t[16] !== n || t[17] !== r
        ? ((a = J(n, r)), (t[16] = n), (t[17] = r), (t[18] = a))
        : (a = t[18]);
      let o;
      t[19] !== n.updatedAtMs || t[20] !== r
        ? ((o = bt(n.updatedAtMs, r)), (t[19] = n.updatedAtMs), (t[20] = r), (t[21] = o))
        : (o = t[21]);
      let s;
      return (
        t[22] !== a || t[23] !== o
          ? ((s = (0, X.jsxs)(X.Fragment, { children: [e, i, a, i, o] })),
            (t[22] = a),
            (t[23] = o),
            (t[24] = s))
          : (s = t[24]),
        s
      );
    }
    case `canceled`: {
      let e;
      t[25] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(c, {
            id: `downloads.status.canceled`,
            defaultMessage: `Stopped`,
            description: `Download status label`,
          })),
          (t[25] = e))
        : (e = t[25]);
      let a;
      t[26] !== n || t[27] !== r
        ? ((a = n.receivedBytes > 0 ? (0, X.jsxs)(X.Fragment, { children: [i, J(n, r)] }) : null),
          (t[26] = n),
          (t[27] = r),
          (t[28] = a))
        : (a = t[28]);
      let o;
      t[29] !== n.updatedAtMs || t[30] !== r
        ? ((o = bt(n.updatedAtMs, r)), (t[29] = n.updatedAtMs), (t[30] = r), (t[31] = o))
        : (o = t[31]);
      let s;
      return (
        t[32] !== a || t[33] !== o
          ? ((s = (0, X.jsxs)(X.Fragment, { children: [e, a, i, o] })),
            (t[32] = a),
            (t[33] = o),
            (t[34] = s))
          : (s = t[34]),
        s
      );
    }
    case `complete`: {
      let e;
      t[35] === n.fileExists
        ? (e = t[36])
        : ((e = n.fileExists
            ? (0, X.jsx)(c, {
                id: `downloads.status.downloaded`,
                defaultMessage: `Downloaded`,
                description: `Status label for a completed download`,
              })
            : (0, X.jsx)(c, {
                id: `downloads.status.missingFile`,
                defaultMessage: `File moved or deleted`,
                description: `Status label for a completed download whose file no longer exists`,
              })),
          (t[35] = n.fileExists),
          (t[36] = e));
      let a;
      t[37] !== n || t[38] !== r
        ? ((a = J(n, r)), (t[37] = n), (t[38] = r), (t[39] = a))
        : (a = t[39]);
      let o;
      t[40] !== n.updatedAtMs || t[41] !== r
        ? ((o = bt(n.updatedAtMs, r)), (t[40] = n.updatedAtMs), (t[41] = r), (t[42] = o))
        : (o = t[42]);
      let s;
      return (
        t[43] !== e || t[44] !== a || t[45] !== o
          ? ((s = (0, X.jsxs)(X.Fragment, { children: [e, i, a, i, o] })),
            (t[43] = e),
            (t[44] = a),
            (t[45] = o),
            (t[46] = s))
          : (s = t[46]),
        s
      );
    }
  }
}
function yt(e) {
  let t = (0, Y.c)(4),
    { description: n, icon: r, title: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = (0, X.jsx)(Ze, { icon: r, title: i, description: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function bt(e, t) {
  return t.formatTime(e, { hour: `numeric`, minute: `2-digit` });
}
function xt(e, t) {
  let n = Math.max(1, (e.updatedAtMs - e.startedAtMs) / 1e3);
  return `${K(e.receivedBytes / n, t)}/s`;
}
function St(e, t) {
  if (e.receivedBytes <= 0)
    return t.formatMessage({
      id: `downloads.status.remainingStarting`,
      defaultMessage: `starting`,
      description: `Remaining download time while speed is not known yet`,
    });
  if (e.totalBytes <= e.receivedBytes)
    return t.formatMessage({
      id: `downloads.status.remainingNow`,
      defaultMessage: `now`,
      description: `Remaining download time when the download is nearly done`,
    });
  let n = Math.max(1, (e.updatedAtMs - e.startedAtMs) / 1e3),
    r = e.receivedBytes / n,
    i = Math.ceil((e.totalBytes - e.receivedBytes) / r);
  if (i < 60)
    return t.formatMessage(
      {
        id: `downloads.status.remainingSeconds`,
        defaultMessage: `{seconds}s`,
        description: `Short remaining download time in seconds`,
      },
      { seconds: i },
    );
  let a = Math.ceil(i / 60);
  return a < 60
    ? t.formatMessage(
        {
          id: `downloads.status.remainingMinutes`,
          defaultMessage: `{minutes}m`,
          description: `Short remaining download time in minutes`,
        },
        { minutes: a },
      )
    : t.formatMessage(
        {
          id: `downloads.status.remainingHours`,
          defaultMessage: `{hours}h`,
          description: `Short remaining download time in hours`,
        },
        { hours: Math.ceil(a / 60) },
      );
}
function J(e, t) {
  return e.status === `complete`
    ? K(e.receivedBytes, t)
    : e.totalBytes > 0
      ? t.formatMessage(
          {
            id: `downloads.status.progressSize`,
            defaultMessage: `{received} of {total}`,
            description: `Downloaded bytes and total bytes for an active download`,
          },
          { received: K(e.receivedBytes, t), total: K(e.totalBytes, t) },
        )
      : K(e.receivedBytes, t);
}
function Ct(e, t) {
  if (t == null)
    return e.formatMessage({
      id: `downloads.action.genericError`,
      defaultMessage: `Unable to complete the download action`,
      description: `Generic error shown when a download action fails`,
    });
  switch (t.reason) {
    case `download-not-pausable`:
      return e.formatMessage({
        id: `downloads.action.pauseError`,
        defaultMessage: `This download cannot be paused`,
        description: `Error shown when a download cannot be paused`,
      });
    case `download-not-removable`:
      return e.formatMessage({
        id: `downloads.action.removeError`,
        defaultMessage: `Active downloads cannot be removed`,
        description: `Error shown when an active download cannot be removed from history`,
      });
    case `download-not-resumable`:
      return e.formatMessage({
        id: `downloads.action.resumeError`,
        defaultMessage: `This download cannot be resumed`,
        description: `Error shown when a download cannot be resumed`,
      });
    case `missing-download`:
      return e.formatMessage({
        id: `downloads.action.missingError`,
        defaultMessage: `This download is no longer available`,
        description: `Error shown when a download no longer exists`,
      });
    case `open-failed`:
      return e.formatMessage({
        id: `downloads.action.openError`,
        defaultMessage: `Unable to open the downloaded file`,
        description: `Error shown when a downloaded file cannot be opened`,
      });
    case `show-in-folder-failed`:
      return e.formatMessage({
        id: `downloads.action.showInFolderError`,
        defaultMessage: `Unable to show the downloaded file in its folder`,
        description: `Error shown when a downloaded file cannot be revealed in its folder`,
      });
  }
}
var Y,
  wt,
  X,
  Z,
  Tt,
  Et,
  Dt = e(() => {
    ((Y = W()),
      We(),
      E(),
      (wt = t(i(), 1)),
      F(),
      r(),
      Xe(),
      f(),
      se(),
      w(),
      Ee(),
      v(),
      s(),
      Ge(),
      O(),
      ke(),
      Ye(),
      Ke(),
      a(),
      _e(),
      je(),
      Oe(),
      nt(),
      ot(),
      (X = be()),
      (Z = new Set([`started`, `in_progress`, `paused`])),
      (Tt = new Set([`canceled`, `complete`, `failed`])),
      (Et = `·`));
  }),
  Ot,
  kt,
  At = e(() => {
    ((Ot = t(i(), 1)),
      ue(),
      (kt = (0, Ot.lazy)(async () => ({
        default: (
          await ye(
            async () => {
              let { BrowserProfileImportDialogModal: e } = await import(`./dialog-a5737eeeef79.js`);
              return { BrowserProfileImportDialogModal: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
            import.meta.url,
          )
        ).BrowserProfileImportDialogModal,
      }))));
  });
function jt(e, t, n, r) {
  if (t == null || !e.get(rt)) return !1;
  if (p(e, kt)) return !0;
  let i = r ?? crypto.randomUUID();
  return (et(e, n, i), R(e, kt, { entryPoint: n, flowId: i, service: t }), !0);
}
var Mt = e(() => {
  (B(), $e(), it(), At());
});
function Nt(e) {
  if (e == null) return null;
  let { pathname: t, search: n } = ne(e);
  if (t == null) return null;
  let r = le({ pathname: t, routeTemplate: t, search: n });
  switch (r.routeKind) {
    case `client-local-thread`:
    case `local-thread`:
    case `chatgpt-thread`:
    case `remote-thread`: {
      let t = He(r);
      return t == null ? null : { conversationId: t, path: e };
    }
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return null;
  }
}
function Pt(e) {
  return `${e.url}\0${e.visitTime}`;
}
function Ft(e) {
  return `${e.url}\0${new Date(e.visitTime).toDateString()}`;
}
function It(e) {
  let t = new Map();
  for (let n of e) {
    let e = new Date(n.visitTime).toDateString(),
      r = t.get(e);
    r == null ? t.set(e, { entries: [n], key: e, visitTime: n.visitTime }) : r.entries.push(n);
  }
  return Array.from(t.values());
}
function Lt(e, t) {
  return (0, Rt.default)(
    e.filter((e) => t.has(Pt(e))).map(({ url: e, visitTime: t }) => ({ url: e, visitTime: t })),
    Ft,
  );
}
var Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut = e(() => {
    ((Rt = t(j(), 1)),
      E(),
      h(),
      xe(),
      re(),
      je(),
      Ve(),
      I(),
      (zt = 100),
      (Bt = z(ve, (e, { queryClient: t }) => ({
        enabled: G?.browsingHistory != null,
        getNextPageParam: (e, t) => {
          if (e.length !== zt) return;
          let n = e.at(-1);
          if (n == null) return;
          let r = n.visitTime + 1;
          return {
            endTime: r,
            offset: t.reduce((e, t) => e + t.filter((e) => e.visitTime < r).length, 0),
          };
        },
        initialPageParam: { endTime: void 0, offset: 0 },
        queryFn: ({ pageParam: t, signal: n }) => {
          let r = G?.browsingHistory;
          if (r == null) throw Error(`Browser history is unavailable`);
          let i = { maxResults: zt, offset: t.offset, startTime: 0, text: e };
          return V(r.searchHistory(t.endTime == null ? i : { ...i, endTime: t.endTime }), n);
        },
        placeholderData: (e) =>
          e ??
          t
            .getQueriesData({ queryKey: [`browser-browsing-history`] })
            .sort(
              ([e], [n]) =>
                (t.getQueryState(n)?.dataUpdatedAt ?? 0) - (t.getQueryState(e)?.dataUpdatedAt ?? 0),
            )
            .find(([, e]) => e != null)?.[1],
        queryKey: [`browser-browsing-history`, e],
        refetchOnMount: `always`,
        retry: !1,
        select: (e) => e.pages.flat(),
        staleTime: Be.FIVE_SECONDS,
      }))),
      (Vt = d(ve, () => ({
        enabled: G?.browsingHistory != null,
        queryFn: ({ signal: e }) => {
          let t = G?.browsingHistory;
          if (t == null) throw Error(`Browser history is unavailable`);
          return V(t.getBrowsingDataSettings(), e);
        },
        queryKey: [`browser-browsing-data-settings`],
        refetchOnMount: `always`,
        retry: !1,
        staleTime: Be.FIVE_SECONDS,
      }))),
      (Ht = L(de, (e) => ({
        enabled: G?.browsingHistory != null,
        queryFn: ({ signal: t }) => {
          let n = G?.browsingHistory;
          if (n == null) throw Error(`Browser history is unavailable`);
          return V(n.getBrowsingDataSummary(e), t);
        },
        queryKey: [`browser-browsing-data-summary`, e],
        refetchOnMount: `always`,
        retry: !1,
        staleTime: Be.FIVE_SECONDS,
      }))));
  });
function Wt(e) {
  let t = (0, Qt.c)(52),
    { browsingDataSettings: r, browsingHistory: i, onClose: a } = e,
    o = n(de),
    s = A(),
    [l, u] = (0, Q.useState)(`lastHour`),
    d;
  t[0] === r
    ? (d = t[1])
    : ((d = () => new Set(tn.filter((e) => Gt(e, r)))), (t[0] = r), (t[1] = d));
  let [f, p] = (0, Q.useState)(d),
    [m, h] = (0, Q.useState)(!1),
    { data: g } = T(Ht, l),
    _;
  t[2] === f ? (_ = t[3]) : ((_ = en.filter((e) => f.has(e))), (t[2] = f), (t[3] = _));
  let v = _,
    y;
  t[4] !== i || t[5] !== v || t[6] !== s || t[7] !== m || t[8] !== a || t[9] !== o || t[10] !== l
    ? ((y = async () => {
        m ||
          v.length === 0 ||
          (h(!0),
          await (async () => {
            try {
              (await i.clearBrowsingData({ dataTypes: v, timeRange: l }),
                await Promise.all([
                  o.queryClient.invalidateQueries({ queryKey: [`browser-browsing-history`] }),
                  ...(v.includes(`downloads`)
                    ? [o.queryClient.invalidateQueries({ queryKey: [`browser-download-history`] })]
                    : []),
                ]),
                a());
            } catch (e) {
              let t = e,
                n =
                  t instanceof Error &&
                  /policy|permission|prohibit|denied|not allowed|restricted/i.test(t.message)
                    ? t.message
                    : null;
              o.get(we).danger(
                n == null
                  ? s.formatMessage({
                      id: `settings.browserUse.clearBrowsingData.error`,
                      defaultMessage: `Unable to clear browsing data`,
                      description: `Error shown when clearing browser data fails`,
                    })
                  : s.formatMessage(
                      {
                        id: `settings.browserUse.clearBrowsingData.policyError`,
                        defaultMessage: `Unable to clear browsing data: {error}`,
                        description: `Policy error shown when browser data deletion is restricted`,
                      },
                      { error: n },
                    ),
              );
            }
          })().finally(() => {
            h(!1);
          }));
      }),
      (t[4] = i),
      (t[5] = v),
      (t[6] = s),
      (t[7] = m),
      (t[8] = a),
      (t[9] = o),
      (t[10] = l),
      (t[11] = y))
    : (y = t[11]);
  let x = y,
    S;
  t[12] !== m || t[13] !== a
    ? ((S = (e) => {
        !e && !m && a();
      }),
      (t[12] = m),
      (t[13] = a),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] === x
    ? (C = t[16])
    : ((C = (e) => {
        (e.preventDefault(), x());
      }),
      (t[15] = x),
      (t[16] = C));
  let w;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(Ie, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(c, {
            id: `settings.browserUse.clearBrowsingData.accessibleTitle`,
            defaultMessage: `Clear browsing data`,
            description: `Accessible title for the clear browsing data dialog`,
          }),
        }),
      })),
      (t[17] = w))
    : (w = t[17]);
  let E;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsxs)(ce, {
        children: [
          w,
          (0, $.jsx)(ie, {
            title: (0, $.jsx)(c, {
              id: `settings.browserUse.clearBrowsingData.title`,
              defaultMessage: `Clear browsing data`,
              description: `Title for the clear browsing data dialog`,
            }),
          }),
        ],
      })),
      (t[18] = E))
    : (E = t[18]);
  let D;
  t[19] !== m || t[20] !== l
    ? ((D = $t.map((e) =>
        (0, $.jsx)(
          U,
          {
            "aria-pressed": l === e,
            color: l === e ? `primary` : `outline`,
            disabled: m,
            onClick: () => u(e),
            size: `toolbar`,
            children: Zt(e),
          },
          e,
        ),
      )),
      (t[19] = m),
      (t[20] = l),
      (t[21] = D))
    : (D = t[21]);
  let O;
  t[22] === D
    ? (O = t[23])
    : ((O = (0, $.jsx)(`div`, { className: `flex gap-2 overflow-x-auto`, children: D })),
      (t[22] = D),
      (t[23] = O));
  let k;
  t[24] !== r || t[25] !== g || t[26] !== m || t[27] !== f
    ? ((k = en.map((e) =>
        (0, $.jsx)(
          Kt,
          {
            checked: f.has(e),
            dataType: e,
            disabled: m || !Gt(e, r),
            summary: g,
            onChange: (t) => {
              p((n) => {
                let r = new Set(n);
                return (t ? r.add(e) : r.delete(e), r);
              });
            },
          },
          e,
        ),
      )),
      (t[24] = r),
      (t[25] = g),
      (t[26] = m),
      (t[27] = f),
      (t[28] = k))
    : (k = t[28]);
  let j;
  t[29] === k ? (j = t[30]) : ((j = (0, $.jsx)(ee, { children: k })), (t[29] = k), (t[30] = j));
  let M;
  t[31] !== j || t[32] !== O
    ? ((M = (0, $.jsxs)(ce, { className: `gap-3`, children: [O, j] })),
      (t[31] = j),
      (t[32] = O),
      (t[33] = M))
    : (M = t[33]);
  let N;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the clear browsing data dialog`,
      })),
      (t[34] = N))
    : (N = t[34]);
  let P;
  t[35] !== m || t[36] !== a
    ? ((P = (0, $.jsx)(U, { color: `outline`, disabled: m, onClick: a, children: N })),
      (t[35] = m),
      (t[36] = a),
      (t[37] = P))
    : (P = t[37]);
  let F = v.length === 0,
    I;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.confirm`,
        defaultMessage: `Delete data`,
        description: `Button that deletes selected browsing data`,
      })),
      (t[38] = I))
    : (I = t[38]);
  let L;
  t[39] !== m || t[40] !== F
    ? ((L = (0, $.jsx)(U, { disabled: F, loading: m, type: `submit`, children: I })),
      (t[39] = m),
      (t[40] = F),
      (t[41] = L))
    : (L = t[41]);
  let R;
  t[42] !== P || t[43] !== L
    ? ((R = (0, $.jsx)(ce, { children: (0, $.jsxs)(oe, { children: [P, L] }) })),
      (t[42] = P),
      (t[43] = L),
      (t[44] = R))
    : (R = t[44]);
  let z;
  t[45] !== M || t[46] !== R || t[47] !== C
    ? ((z = (0, $.jsxs)(b, { as: `form`, onSubmit: C, children: [E, M, R] })),
      (t[45] = M),
      (t[46] = R),
      (t[47] = C),
      (t[48] = z))
    : (z = t[48]);
  let B;
  return (
    t[49] !== z || t[50] !== S
      ? ((B = (0, $.jsx)(ze, {
          open: !0,
          onOpenChange: S,
          showDialogClose: !1,
          size: `xwide`,
          children: z,
        })),
        (t[49] = z),
        (t[50] = S),
        (t[51] = B))
      : (B = t[51]),
    B
  );
}
function Gt(e, { dataRemovalPermitted: t }) {
  switch (e) {
    case `history`:
      return t.history;
    case `downloads`:
      return t.downloads;
    case `siteData`:
    case `cache`:
    case `formData`:
    case `siteSettings`:
      return !0;
  }
}
function Kt(e) {
  let t = (0, Qt.c)(22),
    { checked: n, dataType: r, disabled: i, summary: a, onChange: o } = e,
    s = A(),
    c = `browser-clear-browsing-data-${r}`,
    l = i ? void 0 : `cursor-interaction`,
    u;
  t[0] !== n || t[1] !== i || t[2] !== c || t[3] !== o
    ? ((u = (e) =>
        (0, $.jsx)(`div`, {
          className: `relative`,
          children: (0, $.jsx)(Ae, { id: c, ...e, checked: n, disabled: i, onCheckedChange: o }),
        })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = c),
      (t[3] = o),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] !== r || t[6] !== s || t[7] !== a
    ? ((d = qt(r, a, s)), (t[5] = r), (t[6] = s), (t[7] = a), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === r ? (f = t[10]) : ((f = Yt(r)), (t[9] = r), (t[10] = f));
  let p;
  t[11] === r ? (p = t[12]) : ((p = Xt(r)), (t[11] = r), (t[12] = p));
  let m;
  t[13] !== u || t[14] !== d || t[15] !== f || t[16] !== p
    ? ((m = (0, $.jsx)(Pe, { control: u, description: d, icon: f, label: p })),
      (t[13] = u),
      (t[14] = d),
      (t[15] = f),
      (t[16] = p),
      (t[17] = m))
    : (m = t[17]);
  let h;
  return (
    t[18] !== c || t[19] !== l || t[20] !== m
      ? ((h = (0, $.jsx)(`label`, { className: l, htmlFor: c, children: m })),
        (t[18] = c),
        (t[19] = l),
        (t[20] = m),
        (t[21] = h))
      : (h = t[21]),
    h
  );
}
function qt(e, t, n) {
  switch (e) {
    case `history`:
      return t == null
        ? void 0
        : t.history.siteCount === 0
          ? (0, $.jsx)(c, {
              id: `settings.browserUse.clearBrowsingData.historySummaryEmpty`,
              defaultMessage: `No sites visited`,
              description: `Summary shown when no sites were visited in the selected browsing-data deletion time range`,
            })
          : t.history.siteCount === 1
            ? (0, $.jsx)(c, {
                id: `settings.browserUse.clearBrowsingData.historySummaryOneSite`,
                defaultMessage: `From {firstSite}`,
                description: `Single site with browsing history in the selected deletion time range`,
                values: { firstSite: t.history.firstSite },
              })
            : (0, $.jsx)(c, {
                id: `settings.browserUse.clearBrowsingData.historySummary`,
                defaultMessage: `From {firstSite} + {additionalSites, plural, one {# site} other {# sites}}`,
                description: `Sites with browsing history in the selected deletion time range`,
                values: {
                  additionalSites: t.history.siteCount - 1,
                  firstSite: t.history.firstSite,
                },
              });
    case `siteData`:
      return t?.siteData == null
        ? void 0
        : (0, $.jsx)(c, {
            id: `settings.browserUse.clearBrowsingData.siteDataSummary`,
            defaultMessage: `Cookies currently stored for {siteCount, plural, =0 {no sites} one {# site} other {# sites}}`,
            description: `Current number of sites storing cookies in the browser profile, not a time-range-specific deletion estimate`,
            values: { siteCount: t.siteData.siteCount },
          });
    case `cache`:
      return t?.cache == null
        ? void 0
        : (0, $.jsx)(c, {
            id: `settings.browserUse.clearBrowsingData.cacheSummary`,
            defaultMessage: `Current cache size: {size}`,
            description: `Current total browser cache size, not a time-range-specific deletion estimate`,
            values: { size: Jt(t.cache.sizeBytes, n) },
          });
    case `downloads`:
      return t?.downloads == null
        ? void 0
        : (0, $.jsx)(c, {
            id: `settings.browserUse.clearBrowsingData.downloadsSummary`,
            defaultMessage: `{count, plural, =0 {No downloads} one {# download} other {# downloads}}`,
            description: `Number of completed download-history entries in the selected deletion time range`,
            values: { count: t.downloads.count },
          });
    case `formData`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.formDataSummary`,
        defaultMessage: `Saved names, addresses, and other form entries`,
        description: `Explanation of browser autofill information affected by deletion`,
      });
    case `siteSettings`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.siteSettingsSummary`,
        defaultMessage: `Website permissions and preferences`,
        description: `Explanation of website permissions and preferences affected by deletion`,
      });
  }
}
function Jt(e, t) {
  if (e < 1024) return t.formatNumber(e, { style: `unit`, unit: `byte`, unitDisplay: `long` });
  let n = [`kilobyte`, `megabyte`, `gigabyte`, `terabyte`],
    r = e / 1024,
    i = 0;
  for (; r >= 1024 && i < n.length - 1;) ((r /= 1024), (i += 1));
  return t.formatNumber(r, {
    maximumFractionDigits: 1,
    style: `unit`,
    unit: n[i],
    unitDisplay: `short`,
  });
}
function Yt(e) {
  switch (e) {
    case `history`:
      return (0, $.jsx)(l, { className: `icon-sm` });
    case `siteData`:
      return (0, $.jsx)(tt, { className: `icon-sm` });
    case `cache`:
      return (0, $.jsx)(Ne, { className: `icon-sm` });
    case `downloads`:
      return (0, $.jsx)(Re, { className: `icon-sm` });
    case `formData`:
      return (0, $.jsx)(u, { className: `icon-sm` });
    case `siteSettings`:
      return (0, $.jsx)(k, { className: `icon-sm` });
  }
}
function Xt(e) {
  switch (e) {
    case `history`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.history`,
        defaultMessage: `Browsing history`,
        description: `Browsing history category in the clear browsing data dialog`,
      });
    case `siteData`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.siteData`,
        defaultMessage: `Cookies and site data`,
        description: `Cookies and site data category in the clear browsing data dialog`,
      });
    case `cache`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.cache`,
        defaultMessage: `Cached images and files`,
        description: `Cached images and files category in the clear browsing data dialog`,
      });
    case `downloads`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.downloads`,
        defaultMessage: `Download history`,
        description: `Download history category in the clear browsing data dialog`,
      });
    case `formData`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.formData`,
        defaultMessage: `Autofill form data`,
        description: `Autofill form data category in the clear browsing data dialog`,
      });
    case `siteSettings`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.siteSettings`,
        defaultMessage: `Site settings`,
        description: `Site settings category in the clear browsing data dialog`,
      });
  }
}
function Zt(e) {
  switch (e) {
    case `lastHour`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.lastHour`,
        defaultMessage: `Last hour`,
        description: `Browsing data time-range option for the previous hour`,
      });
    case `lastDay`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.lastDay`,
        defaultMessage: `Last 24 hours`,
        description: `Browsing data time-range option for the previous 24 hours`,
      });
    case `lastWeek`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.lastWeek`,
        defaultMessage: `Last 7 days`,
        description: `Browsing data time-range option for the previous 7 days`,
      });
    case `lastMonth`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.lastMonth`,
        defaultMessage: `Last 4 weeks`,
        description: `Browsing data time-range option for the previous 28 days`,
      });
    case `allTime`:
      return (0, $.jsx)(c, {
        id: `settings.browserUse.clearBrowsingData.allTime`,
        defaultMessage: `All time`,
        description: `Browsing data time-range option for all browser history`,
      });
  }
}
var Qt,
  Q,
  $,
  $t,
  en,
  tn,
  nn = e(() => {
    ((Qt = W()),
      E(),
      (Q = t(i(), 1)),
      F(),
      r(),
      Fe(),
      Se(),
      ge(),
      Ee(),
      Qe(),
      ke(),
      D(),
      y(),
      g(),
      De(),
      je(),
      ae(),
      m(),
      Ut(),
      ($ = be()),
      ($t = [`lastHour`, `lastDay`, `lastWeek`, `lastMonth`, `allTime`]),
      (en = [`history`, `siteData`, `cache`, `downloads`, `formData`, `siteSettings`]),
      (tn = [`history`, `siteData`, `cache`, `downloads`]));
  });
function rn(e, t) {
  let n = (0, an.c)(9),
    [r, i] = (0, on.useState)(null),
    [a, o] = (0, on.useState)(!1),
    s;
  n[0] !== e || n[1] !== a || n[2] !== t
    ? ((s = async () => {
        e == null ||
          a ||
          (o(!0),
          await (async () => {
            try {
              i(await e.getBrowsingDataSettings());
            } catch (e) {
              let n = e;
              t(n instanceof Error ? n : null);
            }
          })().finally(() => {
            o(!1);
          }));
      }),
      (n[0] = e),
      (n[1] = a),
      (n[2] = t),
      (n[3] = s))
    : (s = n[3]);
  let c = s,
    l;
  n[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = () => i(null)), (n[4] = l)) : (l = n[4]);
  let u;
  return (
    n[5] !== r || n[6] !== a || n[7] !== c
      ? ((u = { browsingDataSettings: r, close: l, isOpening: a, open: c }),
        (n[5] = r),
        (n[6] = a),
        (n[7] = c),
        (n[8] = u))
      : (u = n[8]),
    u
  );
}
var an,
  on,
  sn = e(() => {
    ((an = W()), (on = t(i(), 1)));
  });
function cn(e) {
  let t = (0, ln.c)(11),
    { hostId: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = { featureName: `in_app_browser`, hostId: n }), (t[0] = n), (t[1] = r));
  let i = N(r),
    a = Le(`2982604767`),
    o = me(`2982604767`),
    s = i.enabled && !i.isLoading,
    c;
  t[2] !== i.isLoading || t[3] !== s
    ? ((c = { enabled: s, isLoading: i.isLoading }), (t[2] = i.isLoading), (t[3] = s), (t[4] = c))
    : (c = t[4]);
  let l = c,
    u = l.enabled && a,
    d = i.isLoading || o,
    f;
  t[5] !== u || t[6] !== d
    ? ((f = { enabled: u, isLoading: d }), (t[5] = u), (t[6] = d), (t[7] = f))
    : (f = t[7]);
  let p;
  return (
    t[8] !== l || t[9] !== f
      ? ((p = {
          contactInfo: l,
          downloads: l,
          extensions: f,
          history: l,
          passwordManager: l,
          siteSettings: l,
        }),
        (t[8] = l),
        (t[9] = f),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
var ln,
  un = e(() => {
    ((ln = W()), C(), fe());
  });
export {
  at as C,
  Dt as S,
  ft as _,
  Wt as a,
  pt as b,
  Bt as c,
  Nt as d,
  Lt as f,
  jt as g,
  Mt as h,
  rn as i,
  Pt as l,
  Ut as m,
  cn as n,
  nn as o,
  It as p,
  sn as r,
  Vt as s,
  un as t,
  Ft as u,
  q as v,
  ot as w,
  st as x,
  _t as y,
};
//# sourceMappingURL=browser-use-settings-visibility-4d900196f919.js.map
