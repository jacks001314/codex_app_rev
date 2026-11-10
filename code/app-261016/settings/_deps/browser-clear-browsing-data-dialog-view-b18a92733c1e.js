import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $O as r,
  Bk as i,
  Bst as a,
  DU as o,
  FBt as s,
  FD as c,
  HO as l,
  Hk as u,
  IK as d,
  IO as f,
  JO as p,
  JOt as m,
  JS as h,
  Jk as g,
  LNt as _,
  LO as v,
  MNt as y,
  Mst as b,
  NNt as x,
  NO as S,
  OS as C,
  OT as w,
  PBt as T,
  PD as E,
  PO as D,
  RO as O,
  Sj as k,
  TY as A,
  Uk as j,
  WO as M,
  XOt as N,
  Y3 as P,
  YS as F,
  Yk as I,
  Yst as L,
  Z3 as R,
  Zst as z,
  aK as B,
  bY as V,
  bj as H,
  ck as U,
  e6 as W,
  ek as G,
  ew as ee,
  jst as te,
  kS as ne,
  kT as re,
  nB as ie,
  okt as K,
  qO as ae,
  rB as oe,
  rk as se,
  sW as ce,
  sw as le,
  tit as ue,
  tk as de,
  tkt as q,
  uw as fe,
  xj as pe,
  yj as me,
  zO as he,
  zst as ge,
} from "./app-shared-2feb3d4c6fcc.js";
import { n as _e, t as ve } from "./download-file-manager-message-fc15b36f8c4f.js";
import { n as ye, t as be } from "./file-drag-685eeae8baab.js";
import { t as J } from "./format-bytes-9f828acaa58f.js";
import { n as xe, t as Se } from "./cookies-5f2da8ba7e30.js";
function Ce(e) {
  let n = (0, Z.c)(19),
    { className: r, downloadsService: i, onError: a, platform: o, reducedMotion: s, snapshot: c } = e,
    l = K(),
    [u, d] = (0, Be.useState)(null);
  if (c == null) {
    let e;
    return (
      n[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Fe, {
            icon: (0, Q.jsx)(t, { className: `icon-md` }),
            title: (0, Q.jsx)(q, {
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
  let f = c.downloads,
    p;
  if (n[1] !== f) {
    let e = f.filter(Te),
      t = f.filter(we);
    ((p = [...e, ...t]), (n[1] = f), (n[2] = p));
  } else p = n[2];
  let m = p,
    h;
  n[3] !== l || n[4] !== a
    ? ((h = async (e, t) => {
        (d(e.id),
          await (async () => {
            try {
              let e = await t();
              e.ok || a(ze(l, e), `downloadsList.runDownloadAction`);
            } catch {
              a(ze(l), `downloadsList.runDownloadAction`);
            }
          })().finally(() => {
            d(null);
          }));
      }),
      (n[3] = l),
      (n[4] = a),
      (n[5] = h))
    : (h = n[5]);
  let g = h;
  if (f.length === 0) {
    let e;
    return (
      n[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Fe, {
            icon: (0, Q.jsx)(C, {}),
            title: (0, Q.jsx)(q, {
              id: `downloads.popover.empty`,
              defaultMessage: `No downloads yet`,
              description: `Empty state title for downloads popover`,
            }),
            description: (0, Q.jsx)(q, {
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
  let _;
  n[7] === r ? (_ = n[8]) : ((_ = y(`flex min-h-0 flex-col gap-1`, r)), (n[7] = r), (n[8] = _));
  let v;
  n[9] !== i || n[10] !== m || n[11] !== u || n[12] !== o || n[13] !== s || n[14] !== g
    ? ((v = (0, Q.jsx)(Ee, {
        downloads: m,
        downloadsService: i,
        pendingActionId: u,
        platform: o,
        reducedMotion: s,
        runDownloadAction: g,
      })),
      (n[9] = i),
      (n[10] = m),
      (n[11] = u),
      (n[12] = o),
      (n[13] = s),
      (n[14] = g),
      (n[15] = v))
    : (v = n[15]);
  let b;
  return (
    n[16] !== _ || n[17] !== v
      ? ((b = (0, Q.jsx)(`div`, { className: _, children: v })), (n[16] = _), (n[17] = v), (n[18] = b))
      : (b = n[18]),
    b
  );
}
function we(e) {
  return !Ve.has(e.status);
}
function Te(e) {
  return Ve.has(e.status);
}
function Ee(e) {
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
            De,
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
    t[13] === c ? (l = t[14]) : ((l = (0, Q.jsx)(Q.Fragment, { children: c })), (t[13] = c), (t[14] = l)),
    l
  );
}
function De(e) {
  let t = (0, Z.c)(70),
    {
      download: n,
      onCancel: i,
      onOpen: a,
      onPause: o,
      onRemove: s,
      onResume: c,
      onShowInFolder: l,
      pending: u,
      platform: d,
      reducedMotion: f,
    } = e,
    p = K(),
    m;
  t[0] === n.status ? (m = t[1]) : ((m = Ve.has(n.status)), (t[0] = n.status), (t[1] = m));
  let h = m,
    g = n.status === `complete` && n.fileExists,
    _ = g && !u,
    v;
  t[2] !== n.filename || t[3] !== p
    ? ((v = p.formatMessage(
        {
          id: `downloads.popover.openDownload`,
          defaultMessage: `Open {filename}`,
          description: `Accessible label for a completed download row that opens the downloaded file`,
        },
        { filename: n.filename },
      )),
      (t[2] = n.filename),
      (t[3] = p),
      (t[4] = v))
    : (v = t[4]);
  let y = v,
    b;
  t[5] !== _ || t[6] !== a
    ? ((b = (e) => {
        !_ || e.detail > 1 || a();
      }),
      (t[5] = _),
      (t[6] = a),
      (t[7] = b))
    : (b = t[7]);
  let x = b,
    S;
  t[8] !== n || t[9] !== i || t[10] !== a || t[11] !== s || t[12] !== l || t[13] !== d
    ? ((S = Me({ download: n, onCancel: i, onOpen: a, onRemove: s, onShowInFolder: l, platform: d })),
      (t[8] = n),
      (t[9] = i),
      (t[10] = a),
      (t[11] = s),
      (t[12] = l),
      (t[13] = d),
      (t[14] = S))
    : (S = t[14]);
  let C = S,
    w;
  t[15] === n ? (w = t[16]) : ((w = (0, Q.jsx)(Oe, { download: n })), (t[15] = n), (t[16] = w));
  let T;
  t[17] === n.filename
    ? (T = t[18])
    : ((T = (0, Q.jsx)(`div`, { className: `truncate text-sm font-normal`, children: n.filename })),
      (t[17] = n.filename),
      (t[18] = T));
  let E;
  t[19] === n ? (E = t[20]) : ((E = (0, Q.jsx)(Ne, { download: n })), (t[19] = n), (t[20] = E));
  let D;
  t[21] !== T || t[22] !== E
    ? ((D = (0, Q.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-0.5`, children: [T, E] })),
      (t[21] = T),
      (t[22] = E),
      (t[23] = D))
    : (D = t[23]);
  let O;
  t[24] !== n || t[25] !== f || t[26] !== h
    ? ((O = h ? (0, Q.jsx)(ke, { download: n, reducedMotion: f }) : null),
      (t[24] = n),
      (t[25] = f),
      (t[26] = h),
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
  t[34] !== _ || t[35] !== g || t[36] !== n.path || t[37] !== x || t[38] !== y || t[39] !== u || t[40] !== j
    ? ((M = g
        ? (0, Q.jsx)(`button`, {
            type: `button`,
            className: `flex min-w-0 flex-1 cursor-interaction items-center gap-3 rounded-lg text-start outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            "aria-label": y,
            disabled: u,
            ...be({ enabled: _, file: { hostId: L, path: n.path }, onClick: x }),
            children: j,
          })
        : (0, Q.jsx)(`div`, { className: `flex min-w-0 flex-1 items-center gap-3`, children: j })),
      (t[34] = _),
      (t[35] = g),
      (t[36] = n.path),
      (t[37] = x),
      (t[38] = y),
      (t[39] = u),
      (t[40] = j),
      (t[41] = M))
    : (M = t[41]);
  let N;
  t[42] !== n.filename || t[43] !== p
    ? ((N = p.formatMessage(
        {
          id: `downloads.popover.revealFile`,
          defaultMessage: `Reveal {filename} in its folder`,
          description: `Accessible label for revealing a downloaded file in the system file manager`,
        },
        { filename: n.filename },
      )),
      (t[42] = n.filename),
      (t[43] = p),
      (t[44] = N))
    : (N = t[44]);
  let P;
  t[45] !== p || t[46] !== d
    ? ((P = p.formatMessage(ve(d))), (t[45] = p), (t[46] = d), (t[47] = P))
    : (P = t[47]);
  let F = !n.fileExists || u,
    I;
  t[48] === Symbol.for(`react.memo_cache_sentinel`) ? ((I = (0, Q.jsx)(ce, {})), (t[48] = I)) : (I = t[48]);
  let R;
  t[49] !== l || t[50] !== N || t[51] !== P || t[52] !== F
    ? ((R = (0, Q.jsx)(Y, { size: `toolbar`, ariaLabel: N, label: P, disabled: F, onClick: l, children: I })),
      (t[49] = l),
      (t[50] = N),
      (t[51] = P),
      (t[52] = F),
      (t[53] = R))
    : (R = t[53]);
  let z;
  t[54] !== n || t[55] !== C || t[56] !== i || t[57] !== o || t[58] !== c || t[59] !== u
    ? ((z = (0, Q.jsx)(Ae, { download: n, menuItems: C, onCancel: i, onPause: o, onResume: c, pending: u })),
      (t[54] = n),
      (t[55] = C),
      (t[56] = i),
      (t[57] = o),
      (t[58] = c),
      (t[59] = u),
      (t[60] = z))
    : (z = t[60]);
  let B;
  t[61] !== R || t[62] !== z
    ? ((B = (0, Q.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1`, children: [R, z] })),
      (t[61] = R),
      (t[62] = z),
      (t[63] = B))
    : (B = t[63]);
  let V;
  t[64] !== M || t[65] !== B
    ? ((V = (0, Q.jsxs)(`div`, {
        className: `group relative flex items-center gap-3 rounded-lg py-2 ps-2 pe-[calc(var(--spacing-panel-header-inset)-var(--app-menu-gutter,var(--spacing)))] select-none hover:bg-primary-ghost-hover`,
        children: [M, B],
      })),
      (t[64] = M),
      (t[65] = B),
      (t[66] = V))
    : (V = t[66]);
  let H;
  return (
    t[67] !== C || t[68] !== V
      ? ((H = (0, Q.jsx)(r, { items: C, children: V })), (t[67] = C), (t[68] = V), (t[69] = H))
      : (H = t[69]),
    H
  );
}
function Oe(e) {
  let t = (0, Z.c)(2),
    { download: n } = e,
    r = u(n.path || n.filename),
    a = r === `folder` ? i.document : i[r],
    o;
  return (
    t[0] === a
      ? (o = t[1])
      : ((o = (0, Q.jsx)(`div`, {
          className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-text/5 text-tertiary`,
          children: (0, Q.jsx)(a, { className: `icon-sm` }),
        })),
        (t[0] = a),
        (t[1] = o)),
    o
  );
}
function ke(e) {
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
              className: y(
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
function Ae(e) {
  let n = (0, Z.c)(44),
    { download: r, menuItems: i, onCancel: a, onPause: s, onResume: c, pending: l } = e,
    u = K(),
    f;
  n[0] !== r.filename || n[1] !== u
    ? ((f = u.formatMessage(
        {
          id: `downloads.popover.actionsForFile`,
          defaultMessage: `Download actions for {filename}`,
          description: `Accessible label for a download actions menu that identifies the downloaded file`,
        },
        { filename: r.filename },
      )),
      (n[0] = r.filename),
      (n[1] = u),
      (n[2] = f))
    : (f = n[2]);
  let p = f,
    m;
  n[3] === u
    ? (m = n[4])
    : ((m = u.formatMessage({
        id: `downloads.popover.cancel`,
        defaultMessage: `Stop downloading`,
        description: `Action that stops an active download`,
      })),
      (n[3] = u),
      (n[4] = m));
  let h = m,
    g;
  n[5] === u
    ? (g = n[6])
    : ((g = u.formatMessage({
        id: `downloads.popover.pause`,
        defaultMessage: `Pause`,
        description: `Action that pauses a download`,
      })),
      (n[5] = u),
      (n[6] = g));
  let _ = g,
    v;
  n[7] === u
    ? (v = n[8])
    : ((v = u.formatMessage({
        id: `downloads.popover.resume`,
        defaultMessage: `Resume`,
        description: `Action that resumes a paused download`,
      })),
      (n[7] = u),
      (n[8] = v));
  let y = v;
  if (l) {
    let e;
    return (
      n[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(t, { className: `icon-xs shrink-0` })), (n[9] = e))
        : (e = n[9]),
      e
    );
  }
  if (r.status === `paused` && (r.canResume || r.canCancel)) {
    let e = !r.canResume,
      t;
    n[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, Q.jsx)(d, {})), (n[10] = t)) : (t = n[10]);
    let i;
    n[11] !== c || n[12] !== y || n[13] !== e
      ? ((i = (0, Q.jsx)(Y, { size: `toolbar`, label: y, disabled: e, onClick: c, children: t })),
        (n[11] = c),
        (n[12] = y),
        (n[13] = e),
        (n[14] = i))
      : (i = n[14]);
    let o = !r.canCancel,
      s;
    n[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = (0, Q.jsx)(V, {})), (n[15] = s)) : (s = n[15]);
    let l;
    n[16] !== a || n[17] !== h || n[18] !== o
      ? ((l = (0, Q.jsx)(Y, { size: `toolbar`, label: h, disabled: o, onClick: a, children: s })),
        (n[16] = a),
        (n[17] = h),
        (n[18] = o),
        (n[19] = l))
      : (l = n[19]);
    let u;
    return (
      n[20] !== l || n[21] !== i
        ? ((u = (0, Q.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1`, children: [i, l] })),
          (n[20] = l),
          (n[21] = i),
          (n[22] = u))
        : (u = n[22]),
      u
    );
  }
  if ((r.status === `started` || r.status === `in_progress`) && (r.canPause || r.canCancel)) {
    let e = !r.canPause,
      t;
    n[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, Q.jsx)(B, {})), (n[23] = t)) : (t = n[23]);
    let i;
    n[24] !== s || n[25] !== _ || n[26] !== e
      ? ((i = (0, Q.jsx)(Y, { size: `toolbar`, label: _, disabled: e, onClick: s, children: t })),
        (n[24] = s),
        (n[25] = _),
        (n[26] = e),
        (n[27] = i))
      : (i = n[27]);
    let o = !r.canCancel,
      c;
    n[28] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = (0, Q.jsx)(V, {})), (n[28] = c)) : (c = n[28]);
    let l;
    n[29] !== a || n[30] !== h || n[31] !== o
      ? ((l = (0, Q.jsx)(Y, { size: `toolbar`, label: h, disabled: o, onClick: a, children: c })),
        (n[29] = a),
        (n[30] = h),
        (n[31] = o),
        (n[32] = l))
      : (l = n[32]);
    let u;
    return (
      n[33] !== l || n[34] !== i
        ? ((u = (0, Q.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1`, children: [i, l] })),
          (n[33] = l),
          (n[34] = i),
          (n[35] = u))
        : (u = n[35]),
      u
    );
  }
  let b;
  n[36] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = (0, Q.jsx)(o, {})), (n[36] = b)) : (b = n[36]);
  let x;
  n[37] === p
    ? (x = n[38])
    : ((x = (0, Q.jsx)(P, {
        type: `button`,
        color: `ghostTertiary`,
        size: `toolbar`,
        uniform: !0,
        "aria-label": p,
        children: b,
      })),
      (n[37] = p),
      (n[38] = x));
  let S;
  n[39] === i ? (S = n[40]) : ((S = i.map(je)), (n[39] = i), (n[40] = S));
  let C;
  return (
    n[41] !== x || n[42] !== S
      ? ((C = (0, Q.jsx)(de, { align: `end`, contentWidth: `menu`, triggerButton: x, children: S })),
        (n[41] = x),
        (n[42] = S),
        (n[43] = C))
      : (C = n[43]),
    C
  );
}
function je(e) {
  return e.type === `separator`
    ? (0, Q.jsx)(se.Separator, {}, e.id)
    : (0, Q.jsx)(
        se.Item,
        {
          disabled: e.enabled === !1,
          onSelect: e.onSelect,
          children: e.message == null ? e.id : (0, Q.jsx)(q, { ...e.message, values: e.messageValues }),
        },
        e.id,
      );
}
function Me({ download: e, onCancel: t, onOpen: n, onRemove: r, onShowInFolder: i, platform: a }) {
  let o = [];
  return (
    e.status === `complete` &&
      o.push({
        id: `download-open`,
        message: m({
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
      message: ve(a),
      enabled: e.fileExists,
      onSelect: () => {
        i();
      },
    }),
    Ve.has(e.status) &&
      o.push({
        id: `download-stop`,
        message: m({
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
        message: m({
          id: `downloads.popover.copyAddress`,
          defaultMessage: `Copy address`,
          description: `Action that copies the source URL of a download`,
        }),
        onSelect: () => {
          S(e.url);
        },
      },
      {
        id: `download-copy-path`,
        message: m({
          id: `downloads.popover.copyPath`,
          defaultMessage: `Copy path`,
          description: `Action that copies the local path of a download`,
        }),
        onSelect: () => {
          S(e.path);
        },
      },
    ),
    He.has(e.status) &&
      o.push(
        { id: `download-remove-separator`, type: `separator` },
        {
          id: `download-remove`,
          message: m({
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
    ? ((d = (0, Q.jsx)(P, {
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
      ? ((f = (0, Q.jsx)(ie, { tooltipContent: a, children: d })), (t[8] = a), (t[9] = d), (t[10] = f))
      : (f = t[10]),
    f
  );
}
function Ne(e) {
  let t = (0, Z.c)(8),
    { download: n } = e,
    r = K(),
    i = n.status === `failed` ? `text-danger` : `text-tertiary`,
    a;
  t[0] === i ? (a = t[1]) : ((a = y(`flex min-w-0 items-center gap-1.5 text-xs`, i)), (t[0] = i), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r
    ? ((o = (0, Q.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, Q.jsx)(Pe, { download: n, intl: r }),
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
function Pe(e) {
  let t = (0, Z.c)(47),
    { download: n, intl: r } = e,
    i = ` ${Ue} `;
  switch (n.status) {
    case `in_progress`: {
      let e;
      return (
        t[0] !== n || t[1] !== r
          ? ((e =
              n.totalBytes > 0
                ? (0, Q.jsxs)(Q.Fragment, { children: [Le(n, r), i, X(n, r), i, Re(n, r)] })
                : (0, Q.jsxs)(Q.Fragment, { children: [Le(n, r), i, X(n, r)] })),
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
        ? ((e = (0, Q.jsx)(q, {
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
        ? ((e = (0, Q.jsx)(q, {
            id: `downloads.status.paused`,
            defaultMessage: `Paused`,
            description: `Download status label`,
          })),
          (t[9] = e))
        : (e = t[9]);
      let a;
      t[10] !== n || t[11] !== r ? ((a = X(n, r)), (t[10] = n), (t[11] = r), (t[12] = a)) : (a = t[12]);
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
        ? ((e = (0, Q.jsx)(q, {
            id: `downloads.status.failed`,
            defaultMessage: `Download failed`,
            description: `Download status label`,
          })),
          (t[15] = e))
        : (e = t[15]);
      let a;
      t[16] !== n || t[17] !== r ? ((a = X(n, r)), (t[16] = n), (t[17] = r), (t[18] = a)) : (a = t[18]);
      let o;
      t[19] !== n.updatedAtMs || t[20] !== r
        ? ((o = Ie(n.updatedAtMs, r)), (t[19] = n.updatedAtMs), (t[20] = r), (t[21] = o))
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
        ? ((e = (0, Q.jsx)(q, {
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
        ? ((o = Ie(n.updatedAtMs, r)), (t[29] = n.updatedAtMs), (t[30] = r), (t[31] = o))
        : (o = t[31]);
      let s;
      return (
        t[32] !== a || t[33] !== o
          ? ((s = (0, Q.jsxs)(Q.Fragment, { children: [e, a, i, o] })), (t[32] = a), (t[33] = o), (t[34] = s))
          : (s = t[34]),
        s
      );
    }
    case `complete`: {
      let e;
      t[35] === n.fileExists
        ? (e = t[36])
        : ((e = n.fileExists
            ? (0, Q.jsx)(q, {
                id: `downloads.status.downloaded`,
                defaultMessage: `Downloaded`,
                description: `Status label for a completed download`,
              })
            : (0, Q.jsx)(q, {
                id: `downloads.status.missingFile`,
                defaultMessage: `File moved or deleted`,
                description: `Status label for a completed download whose file no longer exists`,
              })),
          (t[35] = n.fileExists),
          (t[36] = e));
      let a;
      t[37] !== n || t[38] !== r ? ((a = X(n, r)), (t[37] = n), (t[38] = r), (t[39] = a)) : (a = t[39]);
      let o;
      t[40] !== n.updatedAtMs || t[41] !== r
        ? ((o = Ie(n.updatedAtMs, r)), (t[40] = n.updatedAtMs), (t[41] = r), (t[42] = o))
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
function Fe(e) {
  let t = (0, Z.c)(4),
    { description: n, icon: r, title: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = (0, Q.jsx)(h, { icon: r, title: i, description: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Ie(e, t) {
  return t.formatTime(e, { hour: `numeric`, minute: `2-digit` });
}
function Le(e, t) {
  let n = Math.max(1, (e.updatedAtMs - e.startedAtMs) / 1e3);
  return `${J(e.receivedBytes / n, t)}/s`;
}
function Re(e, t) {
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
function ze(e, t) {
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
var Z, Be, Q, Ve, He, Ue;
function We() {
  return (We = e(() => {
    ((Z = T()),
      x(),
      (Be = s()),
      N(),
      R(),
      F(),
      G(),
      U(),
      A(),
      W(),
      oe(),
      ye(),
      j(),
      ne(),
      z(),
      D(),
      _e(),
      (Q = _()),
      (Ve = new Set([`started`, `in_progress`, `paused`])),
      (He = new Set([`canceled`, `complete`, `failed`])),
      (Ue = `·`));
  }))();
}
function Ge(e, t) {
  let n = (0, Ke.c)(9),
    [r, i] = (0, qe.useState)(null),
    [a, o] = (0, qe.useState)(!1),
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
var Ke, qe;
function Je() {
  return (Je = e(() => {
    ((Ke = T()), (qe = s()));
  }))();
}
function Ye(e) {
  let t = (0, rt.c)(61),
    { browsingDataSettings: r, browsingHistory: i, onClose: a, onCleared: o, onError: s } = e,
    c = K(),
    [l, u] = (0, it.useState)(`lastHour`),
    d;
  t[0] === r ? (d = t[1]) : ((d = () => new Set(st.filter((e) => Xe(e, r)))), (t[0] = r), (t[1] = d));
  let [p, m] = (0, it.useState)(d),
    [h, g] = (0, it.useState)(!1),
    _;
  t[2] !== i || t[3] !== l
    ? ((_ = (e) => {
        let { signal: t } = e;
        return ue(i.getBrowsingDataSummary(l), t);
      }),
      (t[2] = i),
      (t[3] = l),
      (t[4] = _))
    : (_ = t[4]);
  let y;
  t[5] === l ? (y = t[6]) : ((y = [`browser-browsing-data-summary`, l]), (t[5] = l), (t[6] = y));
  let x;
  t[7] !== _ || t[8] !== y
    ? ((x = { queryFn: _, queryKey: y, refetchOnMount: `always`, retry: !1, staleTime: ge.FIVE_SECONDS }),
      (t[7] = _),
      (t[8] = y),
      (t[9] = x))
    : (x = t[9]);
  let { data: S } = b(x),
    C;
  t[10] === p ? (C = t[11]) : ((C = ot.filter((e) => p.has(e))), (t[10] = p), (t[11] = C));
  let w = C,
    T;
  t[12] !== i ||
  t[13] !== w ||
  t[14] !== c ||
  t[15] !== h ||
  t[16] !== o ||
  t[17] !== a ||
  t[18] !== s ||
  t[19] !== l
    ? ((T = async () => {
        h ||
          w.length === 0 ||
          (g(!0),
          await (async () => {
            try {
              (await i.clearBrowsingData({ dataTypes: w, timeRange: l }), await o(w), a());
            } catch (e) {
              let t = e,
                n =
                  t instanceof Error &&
                  /policy|permission|prohibit|denied|not allowed|restricted/i.test(t.message)
                    ? t.message
                    : null;
              s(
                n == null
                  ? c.formatMessage({
                      id: `settings.browserUse.clearBrowsingData.error`,
                      defaultMessage: `Unable to clear browsing data`,
                      description: `Error shown when clearing browser data fails`,
                    })
                  : c.formatMessage(
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
            g(!1);
          }));
      }),
      (t[12] = i),
      (t[13] = w),
      (t[14] = c),
      (t[15] = h),
      (t[16] = o),
      (t[17] = a),
      (t[18] = s),
      (t[19] = l),
      (t[20] = T))
    : (T = t[20]);
  let E = T,
    D;
  t[21] !== h || t[22] !== a
    ? ((D = (e) => {
        !e && !h && a();
      }),
      (t[21] = h),
      (t[22] = a),
      (t[23] = D))
    : (D = t[23]);
  let k;
  t[24] === E
    ? (k = t[25])
    : ((k = (e) => {
        (e.preventDefault(), E());
      }),
      (t[24] = E),
      (t[25] = k));
  let A;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(ae, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(q, {
            id: `settings.browserUse.clearBrowsingData.accessibleTitle`,
            defaultMessage: `Clear browsing data`,
            description: `Accessible title for the clear browsing data dialog`,
          }),
        }),
      })),
      (t[26] = A))
    : (A = t[26]);
  let j;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsxs)(he, {
        children: [
          A,
          (0, $.jsx)(O, {
            title: (0, $.jsx)(q, {
              id: `settings.browserUse.clearBrowsingData.title`,
              defaultMessage: `Clear browsing data`,
              description: `Title for the clear browsing data dialog`,
            }),
          }),
        ],
      })),
      (t[27] = j))
    : (j = t[27]);
  let N;
  t[28] !== h || t[29] !== l
    ? ((N = at.map((e) =>
        (0, $.jsx)(
          P,
          {
            "aria-pressed": l === e,
            color: l === e ? `primary` : `outline`,
            disabled: h,
            onClick: () => u(e),
            size: `toolbar`,
            children: nt(e),
          },
          e,
        ),
      )),
      (t[28] = h),
      (t[29] = l),
      (t[30] = N))
    : (N = t[30]);
  let F;
  t[31] === N
    ? (F = t[32])
    : ((F = (0, $.jsx)(`div`, { className: `flex gap-2 overflow-x-auto`, children: N })),
      (t[31] = N),
      (t[32] = F));
  let I;
  t[33] !== r || t[34] !== S || t[35] !== h || t[36] !== p
    ? ((I = ot.map((e) =>
        (0, $.jsx)(
          Ze,
          {
            checked: p.has(e),
            dataType: e,
            disabled: h || !Xe(e, r),
            summary: S,
            onChange: (t) => {
              m((n) => {
                let r = new Set(n);
                return (t ? r.add(e) : r.delete(e), r);
              });
            },
          },
          e,
        ),
      )),
      (t[33] = r),
      (t[34] = S),
      (t[35] = h),
      (t[36] = p),
      (t[37] = I))
    : (I = t[37]);
  let L;
  t[38] === I ? (L = t[39]) : ((L = (0, $.jsx)(n, { children: I })), (t[38] = I), (t[39] = L));
  let R;
  t[40] !== F || t[41] !== L
    ? ((R = (0, $.jsxs)(he, { className: `gap-3`, children: [F, L] })), (t[40] = F), (t[41] = L), (t[42] = R))
    : (R = t[42]);
  let z;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the clear browsing data dialog`,
      })),
      (t[43] = z))
    : (z = t[43]);
  let B;
  t[44] !== h || t[45] !== a
    ? ((B = (0, $.jsx)(P, { color: `outline`, disabled: h, onClick: a, children: z })),
      (t[44] = h),
      (t[45] = a),
      (t[46] = B))
    : (B = t[46]);
  let V = w.length === 0,
    H;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.confirm`,
        defaultMessage: `Delete data`,
        description: `Button that deletes selected browsing data`,
      })),
      (t[47] = H))
    : (H = t[47]);
  let U;
  t[48] !== h || t[49] !== V
    ? ((U = (0, $.jsx)(P, { disabled: V, loading: h, type: `submit`, children: H })),
      (t[48] = h),
      (t[49] = V),
      (t[50] = U))
    : (U = t[50]);
  let W;
  t[51] !== B || t[52] !== U
    ? ((W = (0, $.jsx)(he, { children: (0, $.jsxs)(v, { children: [B, U] }) })),
      (t[51] = B),
      (t[52] = U),
      (t[53] = W))
    : (W = t[53]);
  let G;
  t[54] !== R || t[55] !== W || t[56] !== k
    ? ((G = (0, $.jsxs)(f, { as: `form`, onSubmit: k, children: [j, R, W] })),
      (t[54] = R),
      (t[55] = W),
      (t[56] = k),
      (t[57] = G))
    : (G = t[57]);
  let ee;
  return (
    t[58] !== G || t[59] !== D
      ? ((ee = (0, $.jsx)(M, { open: !0, onOpenChange: D, showDialogClose: !1, size: `xwide`, children: G })),
        (t[58] = G),
        (t[59] = D),
        (t[60] = ee))
      : (ee = t[60]),
    ee
  );
}
function Xe(e, { dataRemovalPermitted: t }) {
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
function Ze(e) {
  let t = (0, rt.c)(22),
    { checked: n, dataType: r, disabled: i, summary: a, onChange: o } = e,
    s = K(),
    c = `browser-clear-browsing-data-${r}`,
    l = i ? void 0 : `cursor-interaction`,
    u;
  t[0] !== n || t[1] !== i || t[2] !== c || t[3] !== o
    ? ((u = (e) =>
        (0, $.jsx)(`div`, {
          className: `relative`,
          children: (0, $.jsx)(w, { id: c, ...e, checked: n, disabled: i, onCheckedChange: o }),
        })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = c),
      (t[3] = o),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] !== r || t[6] !== s || t[7] !== a
    ? ((d = Qe(r, a, s)), (t[5] = r), (t[6] = s), (t[7] = a), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === r ? (f = t[10]) : ((f = et(r)), (t[9] = r), (t[10] = f));
  let p;
  t[11] === r ? (p = t[12]) : ((p = tt(r)), (t[11] = r), (t[12] = p));
  let m;
  t[13] !== u || t[14] !== d || t[15] !== f || t[16] !== p
    ? ((m = (0, $.jsx)(le, { control: u, description: d, icon: f, label: p })),
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
function Qe(e, t, n) {
  switch (e) {
    case `history`:
      return t == null
        ? void 0
        : t.history.siteCount === 0
          ? (0, $.jsx)(q, {
              id: `settings.browserUse.clearBrowsingData.historySummaryEmpty`,
              defaultMessage: `No sites visited`,
              description: `Summary shown when no sites were visited in the selected browsing-data deletion time range`,
            })
          : t.history.siteCount === 1
            ? (0, $.jsx)(q, {
                id: `settings.browserUse.clearBrowsingData.historySummaryOneSite`,
                defaultMessage: `From {firstSite}`,
                description: `Single site with browsing history in the selected deletion time range`,
                values: { firstSite: t.history.firstSite },
              })
            : (0, $.jsx)(q, {
                id: `settings.browserUse.clearBrowsingData.historySummary`,
                defaultMessage: `From {firstSite} + {additionalSites, plural, one {# site} other {# sites}}`,
                description: `Sites with browsing history in the selected deletion time range`,
                values: { additionalSites: t.history.siteCount - 1, firstSite: t.history.firstSite },
              });
    case `siteData`:
      return t?.siteData == null
        ? void 0
        : (0, $.jsx)(q, {
            id: `settings.browserUse.clearBrowsingData.siteDataSummary`,
            defaultMessage: `Cookies currently stored for {siteCount, plural, =0 {no sites} one {# site} other {# sites}}`,
            description: `Current number of sites storing cookies in the browser profile, not a time-range-specific deletion estimate`,
            values: { siteCount: t.siteData.siteCount },
          });
    case `cache`:
      return t?.cache == null
        ? void 0
        : (0, $.jsx)(q, {
            id: `settings.browserUse.clearBrowsingData.cacheSummary`,
            defaultMessage: `Current cache size: {size}`,
            description: `Current total browser cache size, not a time-range-specific deletion estimate`,
            values: { size: $e(t.cache.sizeBytes, n) },
          });
    case `downloads`:
      return t?.downloads == null
        ? void 0
        : (0, $.jsx)(q, {
            id: `settings.browserUse.clearBrowsingData.downloadsSummary`,
            defaultMessage: `{count, plural, =0 {No downloads} one {# download} other {# downloads}}`,
            description: `Number of completed download-history entries in the selected deletion time range`,
            values: { count: t.downloads.count },
          });
    case `formData`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.formDataSummary`,
        defaultMessage: `Saved names, addresses, and other form entries`,
        description: `Explanation of browser autofill information affected by deletion`,
      });
    case `siteSettings`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.siteSettingsSummary`,
        defaultMessage: `Website permissions and preferences`,
        description: `Explanation of website permissions and preferences affected by deletion`,
      });
  }
}
function $e(e, t) {
  if (e < 1024) return t.formatNumber(e, { style: `unit`, unit: `byte`, unitDisplay: `long` });
  let n = [`kilobyte`, `megabyte`, `gigabyte`, `terabyte`],
    r = e / 1024,
    i = 0;
  for (; r >= 1024 && i < n.length - 1;) ((r /= 1024), (i += 1));
  return t.formatNumber(r, { maximumFractionDigits: 1, style: `unit`, unit: n[i], unitDisplay: `short` });
}
function et(e) {
  switch (e) {
    case `history`:
      return (0, $.jsx)(pe, { className: `icon-sm` });
    case `siteData`:
      return (0, $.jsx)(Se, { className: `icon-sm` });
    case `cache`:
      return (0, $.jsx)(me, { className: `icon-sm` });
    case `downloads`:
      return (0, $.jsx)(C, { className: `icon-sm` });
    case `formData`:
      return (0, $.jsx)(E, { className: `icon-sm` });
    case `siteSettings`:
      return (0, $.jsx)(g, { className: `icon-sm` });
  }
}
function tt(e) {
  switch (e) {
    case `history`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.history`,
        defaultMessage: `Browsing history`,
        description: `Browsing history category in the clear browsing data dialog`,
      });
    case `siteData`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.siteData`,
        defaultMessage: `Cookies and site data`,
        description: `Cookies and site data category in the clear browsing data dialog`,
      });
    case `cache`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.cache`,
        defaultMessage: `Cached images and files`,
        description: `Cached images and files category in the clear browsing data dialog`,
      });
    case `downloads`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.downloads`,
        defaultMessage: `Download history`,
        description: `Download history category in the clear browsing data dialog`,
      });
    case `formData`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.formData`,
        defaultMessage: `Autofill form data`,
        description: `Autofill form data category in the clear browsing data dialog`,
      });
    case `siteSettings`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.siteSettings`,
        defaultMessage: `Site settings`,
        description: `Site settings category in the clear browsing data dialog`,
      });
  }
}
function nt(e) {
  switch (e) {
    case `lastHour`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.lastHour`,
        defaultMessage: `Last hour`,
        description: `Browsing data time-range option for the previous hour`,
      });
    case `lastDay`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.lastDay`,
        defaultMessage: `Last 24 hours`,
        description: `Browsing data time-range option for the previous 24 hours`,
      });
    case `lastWeek`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.lastWeek`,
        defaultMessage: `Last 7 days`,
        description: `Browsing data time-range option for the previous 7 days`,
      });
    case `lastMonth`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.lastMonth`,
        defaultMessage: `Last 4 weeks`,
        description: `Browsing data time-range option for the previous 28 days`,
      });
    case `allTime`:
      return (0, $.jsx)(q, {
        id: `settings.browserUse.clearBrowsingData.allTime`,
        defaultMessage: `All time`,
        description: `Browsing data time-range option for all browser history`,
      });
  }
}
var rt, it, $, at, ot, st;
function ct() {
  return (ct = e(() => {
    ((rt = T()),
      te(),
      (it = s()),
      N(),
      R(),
      re(),
      p(),
      l(),
      xe(),
      ne(),
      k(),
      H(),
      c(),
      I(),
      fe(),
      ee(),
      a(),
      ($ = _()),
      (at = [`lastHour`, `lastDay`, `lastWeek`, `lastMonth`, `allTime`]),
      (ot = [`history`, `siteData`, `cache`, `downloads`, `formData`, `siteSettings`]),
      (st = [`history`, `siteData`, `cache`, `downloads`]));
  }))();
}
export { Oe as a, ke as c, Ge as i, Ce as l, ct as n, Y as o, Je as r, Ne as s, Ye as t, We as u };
//# sourceMappingURL=browser-clear-browsing-data-dialog-view-b18a92733c1e.js.map
