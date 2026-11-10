import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $g as t,
  $x as n,
  AJt as r,
  BT as i,
  CE as a,
  Cy as o,
  Dw as s,
  Dy as c,
  Ew as l,
  Ey as u,
  FC as d,
  HC as f,
  HS as p,
  Het as m,
  Hrn as h,
  I5 as g,
  IC as _,
  JS as v,
  KS as y,
  Ket as b,
  LS as x,
  MS as S,
  NC as C,
  NS as w,
  O6 as T,
  OS as E,
  Ow as D,
  PS as O,
  RT as k,
  SE as A,
  US as j,
  U_ as M,
  VC as N,
  W_ as P,
  Wrn as F,
  XS as I,
  Yrn as L,
  Zqt as R,
  _dn as z,
  _jt as B,
  bE as V,
  c8 as H,
  eS as U,
  e_ as W,
  ein as G,
  gjt as ee,
  jJt as te,
  jS as ne,
  kS as K,
  kw as q,
  mcn as re,
  my as ie,
  ncn as ae,
  p7 as oe,
  py as se,
  qS as ce,
  rcn as le,
  tC as ue,
  vdn as de,
  wE as fe,
  xy as pe,
  zS as me,
} from "./app-shared-7552fc8d5d82.js";
import { t as J } from "./format-bytes-9f828acaa58f.js";
import { n as he, t as ge } from "./cookies-95d008ce5873.js";
function _e(e) {
  switch (e) {
    case `macOS`:
      return h({
        id: `downloads.popover.showInFinder`,
        defaultMessage: `Show in Finder`,
        description: `Action that reveals a downloaded file in Finder`,
      });
    case `windows`:
      return h({
        id: `downloads.popover.showInFileExplorer`,
        defaultMessage: `Show in File Explorer`,
        description: `Action that reveals a downloaded file in File Explorer`,
      });
    case `linux`:
      return h({
        id: `downloads.popover.showInFileManager`,
        defaultMessage: `Show in File Manager`,
        description: `Action that reveals a downloaded file in the system file manager`,
      });
  }
}
function ve() {
  return (ve = e(() => {
    F();
  }))();
}
function ye(e) {
  let n = (0, Z.c)(19),
    {
      className: r,
      downloadsService: i,
      onError: o,
      platform: s,
      reducedMotion: c,
      snapshot: l,
    } = e,
    u = G(),
    [d, f] = (0, Ie.useState)(null);
  if (l == null) {
    let e;
    return (
      n[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(je, {
            icon: (0, Q.jsx)(a, { className: `icon-md` }),
            title: (0, Q.jsx)(L, {
              id: `downloads.popover.loading`,
              defaultMessage: `Loading downloads`,
              description: `Loading state title for downloads popover`,
            }),
          })),
          (n[0] = e))
        : (e = n[0]),
      e
    );
  }
  let p = l.downloads,
    m;
  if (n[1] !== p) {
    let e = p.filter(xe),
      t = p.filter(be);
    ((m = [...e, ...t]), (n[1] = p), (n[2] = m));
  } else m = n[2];
  let h = m,
    g;
  n[3] !== u || n[4] !== o
    ? ((g = async (e, t) => {
        (f(e.id),
          await (async () => {
            try {
              let e = await t();
              e.ok || o(Fe(u, e), `downloadsList.runDownloadAction`);
            } catch {
              o(Fe(u), `downloadsList.runDownloadAction`);
            }
          })().finally(() => {
            f(null);
          }));
      }),
      (n[3] = u),
      (n[4] = o),
      (n[5] = g))
    : (g = n[5]);
  let _ = g;
  if (p.length === 0) {
    let e;
    return (
      n[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(je, {
            icon: (0, Q.jsx)(t, {}),
            title: (0, Q.jsx)(L, {
              id: `downloads.popover.empty`,
              defaultMessage: `No downloads yet`,
              description: `Empty state title for downloads popover`,
            }),
            description: (0, Q.jsx)(L, {
              id: `downloads.popover.emptyDescription`,
              defaultMessage: `Files downloaded from the built-in browser will appear here`,
              description: `Empty state description for downloads popover`,
            }),
          })),
          (n[6] = e))
        : (e = n[6]),
      e
    );
  }
  let v;
  n[7] === r ? (v = n[8]) : ((v = ae(`flex min-h-0 flex-col gap-1`, r)), (n[7] = r), (n[8] = v));
  let y;
  n[9] !== i || n[10] !== h || n[11] !== d || n[12] !== s || n[13] !== c || n[14] !== _
    ? ((y = (0, Q.jsx)(Se, {
        downloads: h,
        downloadsService: i,
        pendingActionId: d,
        platform: s,
        reducedMotion: c,
        runDownloadAction: _,
      })),
      (n[9] = i),
      (n[10] = h),
      (n[11] = d),
      (n[12] = s),
      (n[13] = c),
      (n[14] = _),
      (n[15] = y))
    : (y = n[15]);
  let b;
  return (
    n[16] !== v || n[17] !== y
      ? ((b = (0, Q.jsx)(`div`, { className: v, children: y })),
        (n[16] = v),
        (n[17] = y),
        (n[18] = b))
      : (b = n[18]),
    b
  );
}
function be(e) {
  return !Le.has(e.status);
}
function xe(e) {
  return Le.has(e.status);
}
function Se(e) {
  let t = (0, Z.c)(15),
    {
      downloads: n,
      downloadsService: r,
      pendingActionId: i,
      platform: a,
      reducedMotion: o,
      runDownloadAction: s,
    } = e,
    c;
  if (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== o || t[5] !== s) {
    let e;
    (t[7] !== r || t[8] !== i || t[9] !== a || t[10] !== o || t[11] !== s
      ? ((e = (e) =>
          (0, Q.jsx)(
            Ce,
            {
              download: e,
              pending: i === e.id,
              platform: a,
              reducedMotion: o,
              onCancel: () => s(e, () => r.cancel({ id: e.id })),
              onOpen: () => s(e, () => r.open({ id: e.id })),
              onPause: () => s(e, () => r.pause({ id: e.id })),
              onRemove: () => s(e, () => r.removeFromHistory({ id: e.id })),
              onResume: () => s(e, () => r.resume({ id: e.id })),
              onShowInFolder: () => s(e, () => r.showInFolder({ id: e.id })),
            },
            e.id,
          )),
        (t[7] = r),
        (t[8] = i),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s),
        (t[12] = e))
      : (e = t[12]),
      (c = n.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c));
  } else c = t[6];
  let l;
  return (
    t[13] === c
      ? (l = t[14])
      : ((l = (0, Q.jsx)(Q.Fragment, { children: c })), (t[13] = c), (t[14] = l)),
    l
  );
}
function Ce(e) {
  let t = (0, Z.c)(68),
    {
      download: n,
      onCancel: r,
      onOpen: i,
      onPause: a,
      onRemove: o,
      onResume: s,
      onShowInFolder: c,
      pending: l,
      platform: u,
      reducedMotion: d,
    } = e,
    f = G(),
    p;
  t[0] === n.status ? (p = t[1]) : ((p = Le.has(n.status)), (t[0] = n.status), (t[1] = p));
  let m = p,
    h = n.status === `complete` && n.fileExists,
    g = h && !l,
    _;
  t[2] !== n.filename || t[3] !== f
    ? ((_ = f.formatMessage(
        {
          id: `downloads.popover.openDownload`,
          defaultMessage: `Open {filename}`,
          description: `Accessible label for a completed download row that opens the downloaded file`,
        },
        { filename: n.filename },
      )),
      (t[2] = n.filename),
      (t[3] = f),
      (t[4] = _))
    : (_ = t[4]);
  let v = _,
    b;
  t[5] !== g || t[6] !== i
    ? ((b = (e) => {
        !g || e.detail > 1 || i();
      }),
      (t[5] = g),
      (t[6] = i),
      (t[7] = b))
    : (b = t[7]);
  let x = b,
    S;
  t[8] !== n || t[9] !== r || t[10] !== i || t[11] !== o || t[12] !== c || t[13] !== u
    ? ((S = Oe({
        download: n,
        onCancel: r,
        onOpen: i,
        onRemove: o,
        onShowInFolder: c,
        platform: u,
      })),
      (t[8] = n),
      (t[9] = r),
      (t[10] = i),
      (t[11] = o),
      (t[12] = c),
      (t[13] = u),
      (t[14] = S))
    : (S = t[14]);
  let C = S,
    w;
  t[15] === n ? (w = t[16]) : ((w = (0, Q.jsx)(we, { download: n })), (t[15] = n), (t[16] = w));
  let T;
  t[17] === n.filename
    ? (T = t[18])
    : ((T = (0, Q.jsx)(`div`, { className: `truncate text-sm font-normal`, children: n.filename })),
      (t[17] = n.filename),
      (t[18] = T));
  let E;
  t[19] === n ? (E = t[20]) : ((E = (0, Q.jsx)(ke, { download: n })), (t[19] = n), (t[20] = E));
  let D;
  t[21] !== T || t[22] !== E
    ? ((D = (0, Q.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-0.5`, children: [T, E] })),
      (t[21] = T),
      (t[22] = E),
      (t[23] = D))
    : (D = t[23]);
  let O;
  t[24] !== n || t[25] !== d || t[26] !== m
    ? ((O = m ? (0, Q.jsx)(Te, { download: n, reducedMotion: d }) : null),
      (t[24] = n),
      (t[25] = d),
      (t[26] = m),
      (t[27] = O))
    : (O = t[27]);
  let k;
  t[28] !== D || t[29] !== O
    ? ((k = (0, Q.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [D, O] })),
      (t[28] = D),
      (t[29] = O),
      (t[30] = k))
    : (k = t[30]);
  let A;
  t[31] !== k || t[32] !== w
    ? ((A = (0, Q.jsxs)(Q.Fragment, { children: [w, k] })), (t[31] = k), (t[32] = w), (t[33] = A))
    : (A = t[33]);
  let j = A,
    M;
  t[34] !== h || t[35] !== x || t[36] !== v || t[37] !== l || t[38] !== j
    ? ((M = h
        ? (0, Q.jsx)(`button`, {
            type: `button`,
            className: `flex min-w-0 flex-1 cursor-interaction items-center gap-3 rounded-lg text-start outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            "aria-label": v,
            disabled: l,
            onClick: x,
            children: j,
          })
        : (0, Q.jsx)(`div`, { className: `flex min-w-0 flex-1 items-center gap-3`, children: j })),
      (t[34] = h),
      (t[35] = x),
      (t[36] = v),
      (t[37] = l),
      (t[38] = j),
      (t[39] = M))
    : (M = t[39]);
  let N;
  t[40] !== n.filename || t[41] !== f
    ? ((N = f.formatMessage(
        {
          id: `downloads.popover.revealFile`,
          defaultMessage: `Reveal {filename} in its folder`,
          description: `Accessible label for revealing a downloaded file in the system file manager`,
        },
        { filename: n.filename },
      )),
      (t[40] = n.filename),
      (t[41] = f),
      (t[42] = N))
    : (N = t[42]);
  let P;
  t[43] !== f || t[44] !== u
    ? ((P = f.formatMessage(_e(u))), (t[43] = f), (t[44] = u), (t[45] = P))
    : (P = t[45]);
  let F = !n.fileExists || l,
    I;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(H, {})), (t[46] = I))
    : (I = t[46]);
  let L;
  t[47] !== c || t[48] !== N || t[49] !== P || t[50] !== F
    ? ((L = (0, Q.jsx)(Y, {
        size: `toolbar`,
        ariaLabel: N,
        label: P,
        disabled: F,
        onClick: c,
        children: I,
      })),
      (t[47] = c),
      (t[48] = N),
      (t[49] = P),
      (t[50] = F),
      (t[51] = L))
    : (L = t[51]);
  let R;
  t[52] !== n || t[53] !== C || t[54] !== r || t[55] !== a || t[56] !== s || t[57] !== l
    ? ((R = (0, Q.jsx)(Ee, {
        download: n,
        menuItems: C,
        onCancel: r,
        onPause: a,
        onResume: s,
        pending: l,
      })),
      (t[52] = n),
      (t[53] = C),
      (t[54] = r),
      (t[55] = a),
      (t[56] = s),
      (t[57] = l),
      (t[58] = R))
    : (R = t[58]);
  let z;
  t[59] !== L || t[60] !== R
    ? ((z = (0, Q.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1`,
        children: [L, R],
      })),
      (t[59] = L),
      (t[60] = R),
      (t[61] = z))
    : (z = t[61]);
  let B;
  t[62] !== M || t[63] !== z
    ? ((B = (0, Q.jsxs)(`div`, {
        className: `group relative flex items-center gap-3 rounded-lg py-2 ps-2 pe-[calc(var(--spacing-panel-header-inset)-var(--app-menu-gutter,var(--spacing)))] select-none hover:bg-primary-ghost-hover`,
        children: [M, z],
      })),
      (t[62] = M),
      (t[63] = z),
      (t[64] = B))
    : (B = t[64]);
  let V;
  return (
    t[65] !== C || t[66] !== B
      ? ((V = (0, Q.jsx)(y, { items: C, children: B })), (t[65] = C), (t[66] = B), (t[67] = V))
      : (V = t[67]),
    V
  );
}
function we(e) {
  let t = (0, Z.c)(2),
    { download: n } = e,
    r = d(n.path || n.filename),
    i = r === `folder` ? C.document : C[r],
    a;
  return (
    t[0] === i
      ? (a = t[1])
      : ((a = (0, Q.jsx)(`div`, {
          className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-text/5 text-tertiary`,
          children: (0, Q.jsx)(i, { className: `icon-sm` }),
        })),
        (t[0] = i),
        (t[1] = a)),
    a
  );
}
function Te(e) {
  let t = (0, Z.c)(6),
    { download: n, reducedMotion: r } = e,
    i = n.status === `paused`,
    a = n.totalBytes > 0 ? Math.min(1, n.receivedBytes / n.totalBytes) : null,
    o;
  t[0] !== i || t[1] !== a || t[2] !== r
    ? ((o =
        a == null
          ? i
            ? null
            : (0, Q.jsx)(`div`, {
                className: `h-full w-1/3 animate-pulse rounded-full bg-text-info motion-reduce:animate-none`,
              })
          : (0, Q.jsx)(`div`, {
              className: ae(
                `h-full w-full origin-left rounded-full`,
                !r && `transition-[opacity,transform] duration-relaxed ease-linear`,
                i ? `bg-text-tertiary` : `bg-text-info`,
                a === 0 ? `opacity-0` : `opacity-100`,
              ),
              style: { transform: `scaleX(${Math.max(0.03, a)})` },
            })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === o
      ? (s = t[5])
      : ((s = (0, Q.jsx)(`div`, {
          className: `mt-1 h-1 overflow-hidden rounded-full bg-text/10`,
          children: o,
        })),
        (t[4] = o),
        (t[5] = s)),
    s
  );
}
function Ee(e) {
  let t = (0, Z.c)(44),
    { download: n, menuItems: r, onCancel: i, onPause: o, onResume: s, pending: c } = e,
    l = G(),
    u;
  t[0] !== n.filename || t[1] !== l
    ? ((u = l.formatMessage(
        {
          id: `downloads.popover.actionsForFile`,
          defaultMessage: `Download actions for {filename}`,
          description: `Accessible label for a download actions menu that identifies the downloaded file`,
        },
        { filename: n.filename },
      )),
      (t[0] = n.filename),
      (t[1] = l),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    f;
  t[3] === l
    ? (f = t[4])
    : ((f = l.formatMessage({
        id: `downloads.popover.cancel`,
        defaultMessage: `Stop downloading`,
        description: `Action that stops an active download`,
      })),
      (t[3] = l),
      (t[4] = f));
  let p = f,
    h;
  t[5] === l
    ? (h = t[6])
    : ((h = l.formatMessage({
        id: `downloads.popover.pause`,
        defaultMessage: `Pause`,
        description: `Action that pauses a download`,
      })),
      (t[5] = l),
      (t[6] = h));
  let _ = h,
    y;
  t[7] === l
    ? (y = t[8])
    : ((y = l.formatMessage({
        id: `downloads.popover.resume`,
        defaultMessage: `Resume`,
        description: `Action that resumes a paused download`,
      })),
      (t[7] = l),
      (t[8] = y));
  let b = y;
  if (c) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(a, { className: `icon-xs shrink-0` })), (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  if (n.status === `paused` && (n.canResume || n.canCancel)) {
    let e = !n.canResume,
      r;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(oe, {})), (t[10] = r))
      : (r = t[10]);
    let a;
    t[11] !== s || t[12] !== b || t[13] !== e
      ? ((a = (0, Q.jsx)(Y, { size: `toolbar`, label: b, disabled: e, onClick: s, children: r })),
        (t[11] = s),
        (t[12] = b),
        (t[13] = e),
        (t[14] = a))
      : (a = t[14]);
    let o = !n.canCancel,
      c;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, Q.jsx)(m, {})), (t[15] = c))
      : (c = t[15]);
    let l;
    t[16] !== i || t[17] !== p || t[18] !== o
      ? ((l = (0, Q.jsx)(Y, { size: `toolbar`, label: p, disabled: o, onClick: i, children: c })),
        (t[16] = i),
        (t[17] = p),
        (t[18] = o),
        (t[19] = l))
      : (l = t[19]);
    let u;
    return (
      t[20] !== l || t[21] !== a
        ? ((u = (0, Q.jsxs)(`div`, {
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
      ? ((r = (0, Q.jsx)(g, {})), (t[23] = r))
      : (r = t[23]);
    let a;
    t[24] !== o || t[25] !== _ || t[26] !== e
      ? ((a = (0, Q.jsx)(Y, { size: `toolbar`, label: _, disabled: e, onClick: o, children: r })),
        (t[24] = o),
        (t[25] = _),
        (t[26] = e),
        (t[27] = a))
      : (a = t[27]);
    let s = !n.canCancel,
      c;
    t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, Q.jsx)(m, {})), (t[28] = c))
      : (c = t[28]);
    let l;
    t[29] !== i || t[30] !== p || t[31] !== s
      ? ((l = (0, Q.jsx)(Y, { size: `toolbar`, label: p, disabled: s, onClick: i, children: c })),
        (t[29] = i),
        (t[30] = p),
        (t[31] = s),
        (t[32] = l))
      : (l = t[32]);
    let u;
    return (
      t[33] !== l || t[34] !== a
        ? ((u = (0, Q.jsxs)(`div`, {
            className: `flex shrink-0 items-center gap-1`,
            children: [a, l],
          })),
          (t[33] = l),
          (t[34] = a),
          (t[35] = u))
        : (u = t[35]),
      u
    );
  }
  let x;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(T, {})), (t[36] = x))
    : (x = t[36]);
  let S;
  t[37] === d
    ? (S = t[38])
    : ((S = (0, Q.jsx)(V, {
        type: `button`,
        color: `ghostTertiary`,
        size: `toolbar`,
        uniform: !0,
        "aria-label": d,
        children: x,
      })),
      (t[37] = d),
      (t[38] = S));
  let C;
  t[39] === r ? (C = t[40]) : ((C = r.map(De)), (t[39] = r), (t[40] = C));
  let w;
  return (
    t[41] !== S || t[42] !== C
      ? ((w = (0, Q.jsx)(v, { align: `end`, contentWidth: `menu`, triggerButton: S, children: C })),
        (t[41] = S),
        (t[42] = C),
        (t[43] = w))
      : (w = t[43]),
    w
  );
}
function De(e) {
  return e.type === `separator`
    ? (0, Q.jsx)(I.Separator, {}, e.id)
    : (0, Q.jsx)(
        I.Item,
        {
          disabled: e.enabled === !1,
          onSelect: e.onSelect,
          children:
            e.message == null ? e.id : (0, Q.jsx)(L, { ...e.message, values: e.messageValues }),
        },
        e.id,
      );
}
function Oe({ download: e, onCancel: t, onOpen: n, onRemove: r, onShowInFolder: i, platform: a }) {
  let o = [];
  return (
    e.status === `complete` &&
      o.push({
        id: `download-open`,
        message: h({
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
      message: _e(a),
      enabled: e.fileExists,
      onSelect: () => {
        i();
      },
    }),
    Le.has(e.status) &&
      o.push({
        id: `download-stop`,
        message: h({
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
        message: h({
          id: `downloads.popover.copyAddress`,
          defaultMessage: `Copy address`,
          description: `Action that copies the source URL of a download`,
        }),
        onSelect: () => {
          E(e.url);
        },
      },
      {
        id: `download-copy-path`,
        message: h({
          id: `downloads.popover.copyPath`,
          defaultMessage: `Copy path`,
          description: `Action that copies the local path of a download`,
        }),
        onSelect: () => {
          E(e.path);
        },
      },
    ),
    Re.has(e.status) &&
      o.push(
        { id: `download-remove-separator`, type: `separator` },
        {
          id: `download-remove`,
          message: h({
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
function Y(e) {
  let t = (0, Z.c)(11),
    { ariaLabel: n, children: r, disabled: i, label: a, onClick: o, size: s } = e,
    c = s === void 0 ? `icon` : s,
    l = n ?? a,
    u;
  t[0] === o
    ? (u = t[1])
    : ((u = () => {
        o();
      }),
      (t[0] = o),
      (t[1] = u));
  let d;
  t[2] !== r || t[3] !== i || t[4] !== c || t[5] !== l || t[6] !== u
    ? ((d = (0, Q.jsx)(V, {
        type: `button`,
        color: `ghostTertiary`,
        size: c,
        uniform: !0,
        "aria-label": l,
        disabled: i,
        onClick: u,
        children: r,
      })),
      (t[2] = r),
      (t[3] = i),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== a || t[9] !== d
      ? ((f = (0, Q.jsx)(k, { tooltipContent: a, children: d })),
        (t[8] = a),
        (t[9] = d),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
function ke(e) {
  let t = (0, Z.c)(8),
    { download: n } = e,
    r = G(),
    i = n.status === `failed` ? `text-danger` : `text-tertiary`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = ae(`flex min-w-0 items-center gap-1.5 text-xs`, i)), (t[0] = i), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r
    ? ((o = (0, Q.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, Q.jsx)(Ae, { download: n, intl: r }),
      })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, Q.jsx)(`div`, { className: a, children: o })), (t[5] = a), (t[6] = o), (t[7] = s))
      : (s = t[7]),
    s
  );
}
function Ae(e) {
  let t = (0, Z.c)(47),
    { download: n, intl: r } = e,
    i = ` ${ze} `;
  switch (n.status) {
    case `in_progress`: {
      let e;
      return (
        t[0] !== n || t[1] !== r
          ? ((e =
              n.totalBytes > 0
                ? (0, Q.jsxs)(Q.Fragment, { children: [Ne(n, r), i, X(n, r), i, Pe(n, r)] })
                : (0, Q.jsxs)(Q.Fragment, { children: [Ne(n, r), i, X(n, r)] })),
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
        ? ((e = (0, Q.jsx)(L, {
            id: `downloads.status.started`,
            defaultMessage: `Starting`,
            description: `Download status label`,
          })),
          (t[3] = e))
        : (e = t[3]);
      let a;
      t[4] !== n || t[5] !== r ? ((a = X(n, r)), (t[4] = n), (t[5] = r), (t[6] = a)) : (a = t[6]);
      let o;
      return (
        t[7] === a
          ? (o = t[8])
          : ((o = (0, Q.jsxs)(Q.Fragment, { children: [e, i, a] })), (t[7] = a), (t[8] = o)),
        o
      );
    }
    case `paused`: {
      let e;
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(L, {
            id: `downloads.status.paused`,
            defaultMessage: `Paused`,
            description: `Download status label`,
          })),
          (t[9] = e))
        : (e = t[9]);
      let a;
      t[10] !== n || t[11] !== r
        ? ((a = X(n, r)), (t[10] = n), (t[11] = r), (t[12] = a))
        : (a = t[12]);
      let o;
      return (
        t[13] === a
          ? (o = t[14])
          : ((o = (0, Q.jsxs)(Q.Fragment, { children: [e, i, a] })), (t[13] = a), (t[14] = o)),
        o
      );
    }
    case `failed`: {
      let e;
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(L, {
            id: `downloads.status.failed`,
            defaultMessage: `Download failed`,
            description: `Download status label`,
          })),
          (t[15] = e))
        : (e = t[15]);
      let a;
      t[16] !== n || t[17] !== r
        ? ((a = X(n, r)), (t[16] = n), (t[17] = r), (t[18] = a))
        : (a = t[18]);
      let o;
      t[19] !== n.updatedAtMs || t[20] !== r
        ? ((o = Me(n.updatedAtMs, r)), (t[19] = n.updatedAtMs), (t[20] = r), (t[21] = o))
        : (o = t[21]);
      let s;
      return (
        t[22] !== a || t[23] !== o
          ? ((s = (0, Q.jsxs)(Q.Fragment, { children: [e, i, a, i, o] })),
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
        ? ((e = (0, Q.jsx)(L, {
            id: `downloads.status.canceled`,
            defaultMessage: `Stopped`,
            description: `Download status label`,
          })),
          (t[25] = e))
        : (e = t[25]);
      let a;
      t[26] !== n || t[27] !== r
        ? ((a = n.receivedBytes > 0 ? (0, Q.jsxs)(Q.Fragment, { children: [i, X(n, r)] }) : null),
          (t[26] = n),
          (t[27] = r),
          (t[28] = a))
        : (a = t[28]);
      let o;
      t[29] !== n.updatedAtMs || t[30] !== r
        ? ((o = Me(n.updatedAtMs, r)), (t[29] = n.updatedAtMs), (t[30] = r), (t[31] = o))
        : (o = t[31]);
      let s;
      return (
        t[32] !== a || t[33] !== o
          ? ((s = (0, Q.jsxs)(Q.Fragment, { children: [e, a, i, o] })),
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
            ? (0, Q.jsx)(L, {
                id: `downloads.status.downloaded`,
                defaultMessage: `Downloaded`,
                description: `Status label for a completed download`,
              })
            : (0, Q.jsx)(L, {
                id: `downloads.status.missingFile`,
                defaultMessage: `File moved or deleted`,
                description: `Status label for a completed download whose file no longer exists`,
              })),
          (t[35] = n.fileExists),
          (t[36] = e));
      let a;
      t[37] !== n || t[38] !== r
        ? ((a = X(n, r)), (t[37] = n), (t[38] = r), (t[39] = a))
        : (a = t[39]);
      let o;
      t[40] !== n.updatedAtMs || t[41] !== r
        ? ((o = Me(n.updatedAtMs, r)), (t[40] = n.updatedAtMs), (t[41] = r), (t[42] = o))
        : (o = t[42]);
      let s;
      return (
        t[43] !== e || t[44] !== a || t[45] !== o
          ? ((s = (0, Q.jsxs)(Q.Fragment, { children: [e, i, a, i, o] })),
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
function je(e) {
  let t = (0, Z.c)(4),
    { description: n, icon: r, title: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = (0, Q.jsx)(M, { icon: r, title: i, description: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Me(e, t) {
  return t.formatTime(e, { hour: `numeric`, minute: `2-digit` });
}
function Ne(e, t) {
  let n = Math.max(1, (e.updatedAtMs - e.startedAtMs) / 1e3);
  return `${J(e.receivedBytes / n, t)}/s`;
}
function Pe(e, t) {
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
function X(e, t) {
  return e.status === `complete`
    ? J(e.receivedBytes, t)
    : e.totalBytes > 0
      ? t.formatMessage(
          {
            id: `downloads.status.progressSize`,
            defaultMessage: `{received} of {total}`,
            description: `Downloaded bytes and total bytes for an active download`,
          },
          { received: J(e.receivedBytes, t), total: J(e.totalBytes, t) },
        )
      : J(e.receivedBytes, t);
}
function Fe(e, t) {
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
var Z, Ie, Q, Le, Re, ze;
function Be() {
  return (Be = e(() => {
    ((Z = z()),
      le(),
      (Ie = de()),
      F(),
      A(),
      P(),
      ce(),
      ue(),
      b(),
      fe(),
      i(),
      _(),
      W(),
      K(),
      ve(),
      (Q = re()),
      (Le = new Set([`started`, `in_progress`, `paused`])),
      (Re = new Set([`canceled`, `complete`, `failed`])),
      (ze = `·`));
  }))();
}
function Ve(e, t) {
  let n = (0, He.c)(9),
    [r, i] = (0, Ue.useState)(null),
    [a, o] = (0, Ue.useState)(!1),
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
var He, Ue;
function We() {
  return (We = e(() => {
    ((He = z()), (Ue = de()));
  }))();
}
function Ge(e) {
  let t = (0, $e.c)(61),
    { browsingDataSettings: n, browsingHistory: r, onClose: i, onCleared: a, onError: o } = e,
    s = G(),
    [c, l] = (0, et.useState)(`lastHour`),
    u;
  t[0] === n
    ? (u = t[1])
    : ((u = () => new Set(rt.filter((e) => Ke(e, n)))), (t[0] = n), (t[1] = u));
  let [d, f] = (0, et.useState)(u),
    [m, h] = (0, et.useState)(!1),
    g;
  t[2] !== r || t[3] !== c
    ? ((g = (e) => {
        let { signal: t } = e;
        return R(r.getBrowsingDataSummary(c), t);
      }),
      (t[2] = r),
      (t[3] = c),
      (t[4] = g))
    : (g = t[4]);
  let _;
  t[5] === c ? (_ = t[6]) : ((_ = [`browser-browsing-data-summary`, c]), (t[5] = c), (t[6] = _));
  let v;
  t[7] !== g || t[8] !== _
    ? ((v = {
        queryFn: g,
        queryKey: _,
        refetchOnMount: `always`,
        retry: !1,
        staleTime: ee.FIVE_SECONDS,
      }),
      (t[7] = g),
      (t[8] = _),
      (t[9] = v))
    : (v = t[9]);
  let { data: y } = te(v),
    b;
  t[10] === d ? (b = t[11]) : ((b = nt.filter((e) => d.has(e))), (t[10] = d), (t[11] = b));
  let x = b,
    C;
  t[12] !== r ||
  t[13] !== x ||
  t[14] !== s ||
  t[15] !== m ||
  t[16] !== a ||
  t[17] !== i ||
  t[18] !== o ||
  t[19] !== c
    ? ((C = async () => {
        m ||
          x.length === 0 ||
          (h(!0),
          await (async () => {
            try {
              (await r.clearBrowsingData({ dataTypes: x, timeRange: c }), await a(x), i());
            } catch (e) {
              let t = e,
                n =
                  t instanceof Error &&
                  /policy|permission|prohibit|denied|not allowed|restricted/i.test(t.message)
                    ? t.message
                    : null;
              o(
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
      (t[12] = r),
      (t[13] = x),
      (t[14] = s),
      (t[15] = m),
      (t[16] = a),
      (t[17] = i),
      (t[18] = o),
      (t[19] = c),
      (t[20] = C))
    : (C = t[20]);
  let T = C,
    E;
  t[21] !== m || t[22] !== i
    ? ((E = (e) => {
        !e && !m && i();
      }),
      (t[21] = m),
      (t[22] = i),
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] === T
    ? (D = t[25])
    : ((D = (e) => {
        (e.preventDefault(), T());
      }),
      (t[24] = T),
      (t[25] = D));
  let k;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, $.jsx)(p, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(L, {
            id: `settings.browserUse.clearBrowsingData.accessibleTitle`,
            defaultMessage: `Clear browsing data`,
            description: `Accessible title for the clear browsing data dialog`,
          }),
        }),
      })),
      (t[26] = k))
    : (k = t[26]);
  let A;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsxs)(O, {
        children: [
          k,
          (0, $.jsx)(w, {
            title: (0, $.jsx)(L, {
              id: `settings.browserUse.clearBrowsingData.title`,
              defaultMessage: `Clear browsing data`,
              description: `Title for the clear browsing data dialog`,
            }),
          }),
        ],
      })),
      (t[27] = A))
    : (A = t[27]);
  let j;
  t[28] !== m || t[29] !== c
    ? ((j = tt.map((e) =>
        (0, $.jsx)(
          V,
          {
            "aria-pressed": c === e,
            color: c === e ? `primary` : `outline`,
            disabled: m,
            onClick: () => l(e),
            size: `toolbar`,
            children: Qe(e),
          },
          e,
        ),
      )),
      (t[28] = m),
      (t[29] = c),
      (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] === j
    ? (M = t[32])
    : ((M = (0, $.jsx)(`div`, { className: `flex gap-2 overflow-x-auto`, children: j })),
      (t[31] = j),
      (t[32] = M));
  let N;
  t[33] !== n || t[34] !== y || t[35] !== m || t[36] !== d
    ? ((N = nt.map((e) =>
        (0, $.jsx)(
          qe,
          {
            checked: d.has(e),
            dataType: e,
            disabled: m || !Ke(e, n),
            summary: y,
            onChange: (t) => {
              f((n) => {
                let r = new Set(n);
                return (t ? r.add(e) : r.delete(e), r);
              });
            },
          },
          e,
        ),
      )),
      (t[33] = n),
      (t[34] = y),
      (t[35] = m),
      (t[36] = d),
      (t[37] = N))
    : (N = t[37]);
  let P;
  t[38] === N ? (P = t[39]) : ((P = (0, $.jsx)(se, { children: N })), (t[38] = N), (t[39] = P));
  let F;
  t[40] !== M || t[41] !== P
    ? ((F = (0, $.jsxs)(O, { className: `gap-3`, children: [M, P] })),
      (t[40] = M),
      (t[41] = P),
      (t[42] = F))
    : (F = t[42]);
  let I;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the clear browsing data dialog`,
      })),
      (t[43] = I))
    : (I = t[43]);
  let z;
  t[44] !== m || t[45] !== i
    ? ((z = (0, $.jsx)(V, { color: `outline`, disabled: m, onClick: i, children: I })),
      (t[44] = m),
      (t[45] = i),
      (t[46] = z))
    : (z = t[46]);
  let B = x.length === 0,
    H;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.confirm`,
        defaultMessage: `Delete data`,
        description: `Button that deletes selected browsing data`,
      })),
      (t[47] = H))
    : (H = t[47]);
  let U;
  t[48] !== m || t[49] !== B
    ? ((U = (0, $.jsx)(V, { disabled: B, loading: m, type: `submit`, children: H })),
      (t[48] = m),
      (t[49] = B),
      (t[50] = U))
    : (U = t[50]);
  let W;
  t[51] !== z || t[52] !== U
    ? ((W = (0, $.jsx)(O, { children: (0, $.jsxs)(S, { children: [z, U] }) })),
      (t[51] = z),
      (t[52] = U),
      (t[53] = W))
    : (W = t[53]);
  let K;
  t[54] !== F || t[55] !== W || t[56] !== D
    ? ((K = (0, $.jsxs)(ne, { as: `form`, onSubmit: D, children: [A, F, W] })),
      (t[54] = F),
      (t[55] = W),
      (t[56] = D),
      (t[57] = K))
    : (K = t[57]);
  let q;
  return (
    t[58] !== K || t[59] !== E
      ? ((q = (0, $.jsx)(me, {
          open: !0,
          onOpenChange: E,
          showDialogClose: !1,
          size: `xwide`,
          children: K,
        })),
        (t[58] = K),
        (t[59] = E),
        (t[60] = q))
      : (q = t[60]),
    q
  );
}
function Ke(e, { dataRemovalPermitted: t }) {
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
function qe(e) {
  let t = (0, $e.c)(22),
    { checked: n, dataType: r, disabled: i, summary: a, onChange: o } = e,
    s = G(),
    c = `browser-clear-browsing-data-${r}`,
    l = i ? void 0 : `cursor-interaction`,
    d;
  t[0] !== n || t[1] !== i || t[2] !== c || t[3] !== o
    ? ((d = (e) =>
        (0, $.jsx)(`div`, {
          className: `relative`,
          children: (0, $.jsx)(u, { id: c, ...e, checked: n, disabled: i, onCheckedChange: o }),
        })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = c),
      (t[3] = o),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] !== r || t[6] !== s || t[7] !== a
    ? ((f = Je(r, a, s)), (t[5] = r), (t[6] = s), (t[7] = a), (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] === r ? (p = t[10]) : ((p = Xe(r)), (t[9] = r), (t[10] = p));
  let m;
  t[11] === r ? (m = t[12]) : ((m = Ze(r)), (t[11] = r), (t[12] = m));
  let h;
  t[13] !== d || t[14] !== f || t[15] !== p || t[16] !== m
    ? ((h = (0, $.jsx)(pe, { control: d, description: f, icon: p, label: m })),
      (t[13] = d),
      (t[14] = f),
      (t[15] = p),
      (t[16] = m),
      (t[17] = h))
    : (h = t[17]);
  let g;
  return (
    t[18] !== c || t[19] !== l || t[20] !== h
      ? ((g = (0, $.jsx)(`label`, { className: l, htmlFor: c, children: h })),
        (t[18] = c),
        (t[19] = l),
        (t[20] = h),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
function Je(e, t, n) {
  switch (e) {
    case `history`:
      return t == null
        ? void 0
        : t.history.siteCount === 0
          ? (0, $.jsx)(L, {
              id: `settings.browserUse.clearBrowsingData.historySummaryEmpty`,
              defaultMessage: `No sites visited`,
              description: `Summary shown when no sites were visited in the selected browsing-data deletion time range`,
            })
          : t.history.siteCount === 1
            ? (0, $.jsx)(L, {
                id: `settings.browserUse.clearBrowsingData.historySummaryOneSite`,
                defaultMessage: `From {firstSite}`,
                description: `Single site with browsing history in the selected deletion time range`,
                values: { firstSite: t.history.firstSite },
              })
            : (0, $.jsx)(L, {
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
        : (0, $.jsx)(L, {
            id: `settings.browserUse.clearBrowsingData.siteDataSummary`,
            defaultMessage: `Cookies currently stored for {siteCount, plural, =0 {no sites} one {# site} other {# sites}}`,
            description: `Current number of sites storing cookies in the browser profile, not a time-range-specific deletion estimate`,
            values: { siteCount: t.siteData.siteCount },
          });
    case `cache`:
      return t?.cache == null
        ? void 0
        : (0, $.jsx)(L, {
            id: `settings.browserUse.clearBrowsingData.cacheSummary`,
            defaultMessage: `Current cache size: {size}`,
            description: `Current total browser cache size, not a time-range-specific deletion estimate`,
            values: { size: Ye(t.cache.sizeBytes, n) },
          });
    case `downloads`:
      return t?.downloads == null
        ? void 0
        : (0, $.jsx)(L, {
            id: `settings.browserUse.clearBrowsingData.downloadsSummary`,
            defaultMessage: `{count, plural, =0 {No downloads} one {# download} other {# downloads}}`,
            description: `Number of completed download-history entries in the selected deletion time range`,
            values: { count: t.downloads.count },
          });
    case `formData`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.formDataSummary`,
        defaultMessage: `Saved names, addresses, and other form entries`,
        description: `Explanation of browser autofill information affected by deletion`,
      });
    case `siteSettings`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.siteSettingsSummary`,
        defaultMessage: `Website permissions and preferences`,
        description: `Explanation of website permissions and preferences affected by deletion`,
      });
  }
}
function Ye(e, t) {
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
function Xe(e) {
  switch (e) {
    case `history`:
      return (0, $.jsx)(D, { className: `icon-sm` });
    case `siteData`:
      return (0, $.jsx)(ge, { className: `icon-sm` });
    case `cache`:
      return (0, $.jsx)(l, { className: `icon-sm` });
    case `downloads`:
      return (0, $.jsx)(t, { className: `icon-sm` });
    case `formData`:
      return (0, $.jsx)(n, { className: `icon-sm` });
    case `siteSettings`:
      return (0, $.jsx)(N, { className: `icon-sm` });
  }
}
function Ze(e) {
  switch (e) {
    case `history`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.history`,
        defaultMessage: `Browsing history`,
        description: `Browsing history category in the clear browsing data dialog`,
      });
    case `siteData`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.siteData`,
        defaultMessage: `Cookies and site data`,
        description: `Cookies and site data category in the clear browsing data dialog`,
      });
    case `cache`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.cache`,
        defaultMessage: `Cached images and files`,
        description: `Cached images and files category in the clear browsing data dialog`,
      });
    case `downloads`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.downloads`,
        defaultMessage: `Download history`,
        description: `Download history category in the clear browsing data dialog`,
      });
    case `formData`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.formData`,
        defaultMessage: `Autofill form data`,
        description: `Autofill form data category in the clear browsing data dialog`,
      });
    case `siteSettings`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.siteSettings`,
        defaultMessage: `Site settings`,
        description: `Site settings category in the clear browsing data dialog`,
      });
  }
}
function Qe(e) {
  switch (e) {
    case `lastHour`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.lastHour`,
        defaultMessage: `Last hour`,
        description: `Browsing data time-range option for the previous hour`,
      });
    case `lastDay`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.lastDay`,
        defaultMessage: `Last 24 hours`,
        description: `Browsing data time-range option for the previous 24 hours`,
      });
    case `lastWeek`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.lastWeek`,
        defaultMessage: `Last 7 days`,
        description: `Browsing data time-range option for the previous 7 days`,
      });
    case `lastMonth`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.lastMonth`,
        defaultMessage: `Last 4 weeks`,
        description: `Browsing data time-range option for the previous 28 days`,
      });
    case `allTime`:
      return (0, $.jsx)(L, {
        id: `settings.browserUse.clearBrowsingData.allTime`,
        defaultMessage: `All time`,
        description: `Browsing data time-range option for all browser history`,
      });
  }
}
var $e, et, $, tt, nt, rt;
function it() {
  return (it = e(() => {
    (($e = z()),
      r(),
      (et = de()),
      F(),
      A(),
      c(),
      j(),
      x(),
      he(),
      W(),
      q(),
      s(),
      U(),
      f(),
      o(),
      ie(),
      B(),
      ($ = re()),
      (tt = [`lastHour`, `lastDay`, `lastWeek`, `lastMonth`, `allTime`]),
      (nt = [`history`, `siteData`, `cache`, `downloads`, `formData`, `siteSettings`]),
      (rt = [`history`, `siteData`, `cache`, `downloads`]));
  }))();
}
export {
  we as a,
  Te as c,
  _e as d,
  ve as f,
  Ve as i,
  ye as l,
  it as n,
  Y as o,
  We as r,
  ke as s,
  Ge as t,
  Be as u,
};
//# sourceMappingURL=browser-clear-browsing-data-dialog-view-26541e3e543b.js.map
