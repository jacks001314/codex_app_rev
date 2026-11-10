import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $x as n,
  AA as r,
  AH as i,
  AO as a,
  CO as o,
  Fat as s,
  HT as c,
  IDt as l,
  JC as u,
  MA as d,
  NA as f,
  Pat as p,
  SO as m,
  TJ as h,
  TO as g,
  VDt as _,
  VT as v,
  Xot as y,
  Yot as b,
  _Mt as x,
  _O as S,
  _k as C,
  bJ as w,
  bS as T,
  cG as E,
  cO as D,
  ck as O,
  cz as k,
  dU as A,
  dk as j,
  eS as M,
  fO as N,
  gMt as P,
  gk as F,
  i3 as I,
  iO as L,
  iot as R,
  iw as z,
  jA as B,
  jDt as V,
  kDt as H,
  lO as U,
  mO as ee,
  oD as W,
  oO as te,
  oot as G,
  qC as ne,
  r3 as K,
  rO as q,
  sD as re,
  sO as ie,
  sz as ae,
  t3 as oe,
  tw as se,
  uk as ce,
  vO as le,
  vzt as ue,
  xMt as de,
  xO as fe,
  yS as pe,
  yzt as me,
  zG as he,
  znt as ge,
} from "./app-shared-bbfeca5e5737.js";
import { n as _e, t as ve } from "./download-file-manager-message-b11c6f057796.js";
import { n as ye, t as be } from "./file-drag-cacc6048a9f7.js";
import { t as J } from "./format-bytes-9f828acaa58f.js";
import { n as xe, t as Se } from "./cookies-2dc3370d7066.js";
function Ce(e) {
  let t = (0, Z.c)(19),
    { className: r, downloadsService: i, onError: a, platform: o, reducedMotion: s, snapshot: c } = e,
    u = _(),
    [d, f] = (0, Be.useState)(null);
  if (c == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Fe, {
            icon: (0, Q.jsx)(K, { className: `icon-md` }),
            title: (0, Q.jsx)(l, {
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
  let p = c.downloads,
    m;
  if (t[1] !== p) {
    let e = p.filter(Te),
      n = p.filter(we);
    ((m = [...e, ...n]), (t[1] = p), (t[2] = m));
  } else m = t[2];
  let h = m,
    g;
  t[3] !== u || t[4] !== a
    ? ((g = async (e, t) => {
        (f(e.id),
          await (async () => {
            try {
              let e = await t();
              e.ok || a(ze(u, e), `downloadsList.runDownloadAction`);
            } catch {
              a(ze(u), `downloadsList.runDownloadAction`);
            }
          })().finally(() => {
            f(null);
          }));
      }),
      (t[3] = u),
      (t[4] = a),
      (t[5] = g))
    : (g = t[5]);
  let v = g;
  if (p.length === 0) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Fe, {
            icon: (0, Q.jsx)(n, {}),
            title: (0, Q.jsx)(l, {
              id: `downloads.popover.empty`,
              defaultMessage: `No downloads yet`,
              description: `Empty state title for downloads popover`,
            }),
            description: (0, Q.jsx)(l, {
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
  let y;
  t[7] === r ? (y = t[8]) : ((y = P(`flex min-h-0 flex-col gap-1`, r)), (t[7] = r), (t[8] = y));
  let b;
  t[9] !== i || t[10] !== h || t[11] !== d || t[12] !== o || t[13] !== s || t[14] !== v
    ? ((b = (0, Q.jsx)(Ee, {
        downloads: h,
        downloadsService: i,
        pendingActionId: d,
        platform: o,
        reducedMotion: s,
        runDownloadAction: v,
      })),
      (t[9] = i),
      (t[10] = h),
      (t[11] = d),
      (t[12] = o),
      (t[13] = s),
      (t[14] = v),
      (t[15] = b))
    : (b = t[15]);
  let x;
  return (
    t[16] !== y || t[17] !== b
      ? ((x = (0, Q.jsx)(`div`, { className: y, children: b })), (t[16] = y), (t[17] = b), (t[18] = x))
      : (x = t[18]),
    x
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
    f = _(),
    p;
  t[0] === n.status ? (p = t[1]) : ((p = Ve.has(n.status)), (t[0] = n.status), (t[1] = p));
  let m = p,
    h = n.status === `complete` && n.fileExists,
    g = h && !l,
    v;
  t[2] !== n.filename || t[3] !== f
    ? ((v = f.formatMessage(
        {
          id: `downloads.popover.openDownload`,
          defaultMessage: `Open {filename}`,
          description: `Accessible label for a completed download row that opens the downloaded file`,
        },
        { filename: n.filename },
      )),
      (t[2] = n.filename),
      (t[3] = f),
      (t[4] = v))
    : (v = t[4]);
  let y = v,
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
    ? ((S = Me({ download: n, onCancel: r, onOpen: i, onRemove: o, onShowInFolder: c, platform: u })),
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
  t[24] !== n || t[25] !== d || t[26] !== m
    ? ((O = m ? (0, Q.jsx)(ke, { download: n, reducedMotion: d }) : null),
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
  let j;
  t[31] !== k || t[32] !== w
    ? ((j = (0, Q.jsxs)(Q.Fragment, { children: [w, k] })), (t[31] = k), (t[32] = w), (t[33] = j))
    : (j = t[33]);
  let M = j,
    N;
  t[34] !== g || t[35] !== h || t[36] !== n.path || t[37] !== x || t[38] !== y || t[39] !== l || t[40] !== M
    ? ((N = h
        ? (0, Q.jsx)(`button`, {
            type: `button`,
            className: `flex min-w-0 flex-1 cursor-interaction items-center gap-3 rounded-lg text-start outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            "aria-label": y,
            disabled: l,
            ...be({ enabled: g, file: { hostId: R, path: n.path }, onClick: x }),
            children: M,
          })
        : (0, Q.jsx)(`div`, { className: `flex min-w-0 flex-1 items-center gap-3`, children: M })),
      (t[34] = g),
      (t[35] = h),
      (t[36] = n.path),
      (t[37] = x),
      (t[38] = y),
      (t[39] = l),
      (t[40] = M),
      (t[41] = N))
    : (N = t[41]);
  let P;
  t[42] !== n.filename || t[43] !== f
    ? ((P = f.formatMessage(
        {
          id: `downloads.popover.revealFile`,
          defaultMessage: `Reveal {filename} in its folder`,
          description: `Accessible label for revealing a downloaded file in the system file manager`,
        },
        { filename: n.filename },
      )),
      (t[42] = n.filename),
      (t[43] = f),
      (t[44] = P))
    : (P = t[44]);
  let F;
  t[45] !== f || t[46] !== u
    ? ((F = f.formatMessage(ve(u))), (t[45] = f), (t[46] = u), (t[47] = F))
    : (F = t[47]);
  let I = !n.fileExists || l,
    L;
  t[48] === Symbol.for(`react.memo_cache_sentinel`) ? ((L = (0, Q.jsx)(A, {})), (t[48] = L)) : (L = t[48]);
  let z;
  t[49] !== c || t[50] !== P || t[51] !== F || t[52] !== I
    ? ((z = (0, Q.jsx)(Y, { size: `toolbar`, ariaLabel: P, label: F, disabled: I, onClick: c, children: L })),
      (t[49] = c),
      (t[50] = P),
      (t[51] = F),
      (t[52] = I),
      (t[53] = z))
    : (z = t[53]);
  let B;
  t[54] !== n || t[55] !== C || t[56] !== r || t[57] !== a || t[58] !== s || t[59] !== l
    ? ((B = (0, Q.jsx)(Ae, { download: n, menuItems: C, onCancel: r, onPause: a, onResume: s, pending: l })),
      (t[54] = n),
      (t[55] = C),
      (t[56] = r),
      (t[57] = a),
      (t[58] = s),
      (t[59] = l),
      (t[60] = B))
    : (B = t[60]);
  let V;
  t[61] !== z || t[62] !== B
    ? ((V = (0, Q.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1`, children: [z, B] })),
      (t[61] = z),
      (t[62] = B),
      (t[63] = V))
    : (V = t[63]);
  let H;
  t[64] !== N || t[65] !== V
    ? ((H = (0, Q.jsxs)(`div`, {
        className: `group relative flex items-center gap-3 rounded-lg py-2 ps-2 pe-[calc(var(--spacing-panel-header-inset)-var(--app-menu-gutter,var(--spacing)))] select-none hover:bg-primary-ghost-hover`,
        children: [N, V],
      })),
      (t[64] = N),
      (t[65] = V),
      (t[66] = H))
    : (H = t[66]);
  let U;
  return (
    t[67] !== C || t[68] !== H
      ? ((U = (0, Q.jsx)(fe, { items: C, children: H })), (t[67] = C), (t[68] = H), (t[69] = U))
      : (U = t[69]),
    U
  );
}
function Oe(e) {
  let t = (0, Z.c)(2),
    { download: n } = e,
    r = ce(n.path || n.filename),
    i = r === `folder` ? O.document : O[r],
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
              className: P(
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
    { download: r, menuItems: a, onCancel: s, onPause: c, onResume: l, pending: u } = e,
    d = _(),
    f;
  n[0] !== r.filename || n[1] !== d
    ? ((f = d.formatMessage(
        {
          id: `downloads.popover.actionsForFile`,
          defaultMessage: `Download actions for {filename}`,
          description: `Accessible label for a download actions menu that identifies the downloaded file`,
        },
        { filename: r.filename },
      )),
      (n[0] = r.filename),
      (n[1] = d),
      (n[2] = f))
    : (f = n[2]);
  let p = f,
    m;
  n[3] === d
    ? (m = n[4])
    : ((m = d.formatMessage({
        id: `downloads.popover.cancel`,
        defaultMessage: `Stop downloading`,
        description: `Action that stops an active download`,
      })),
      (n[3] = d),
      (n[4] = m));
  let h = m,
    g;
  n[5] === d
    ? (g = n[6])
    : ((g = d.formatMessage({
        id: `downloads.popover.pause`,
        defaultMessage: `Pause`,
        description: `Action that pauses a download`,
      })),
      (n[5] = d),
      (n[6] = g));
  let v = g,
    y;
  n[7] === d
    ? (y = n[8])
    : ((y = d.formatMessage({
        id: `downloads.popover.resume`,
        defaultMessage: `Resume`,
        description: `Action that resumes a paused download`,
      })),
      (n[7] = d),
      (n[8] = y));
  let b = y;
  if (u) {
    let e;
    return (
      n[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(K, { className: `icon-xs shrink-0` })), (n[9] = e))
        : (e = n[9]),
      e
    );
  }
  if (r.status === `paused` && (r.canResume || r.canCancel)) {
    let e = !r.canResume,
      t;
    n[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, Q.jsx)(he, {})), (n[10] = t)) : (t = n[10]);
    let i;
    n[11] !== l || n[12] !== b || n[13] !== e
      ? ((i = (0, Q.jsx)(Y, { size: `toolbar`, label: b, disabled: e, onClick: l, children: t })),
        (n[11] = l),
        (n[12] = b),
        (n[13] = e),
        (n[14] = i))
      : (i = n[14]);
    let a = !r.canCancel,
      o;
    n[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = (0, Q.jsx)(w, {})), (n[15] = o)) : (o = n[15]);
    let c;
    n[16] !== s || n[17] !== h || n[18] !== a
      ? ((c = (0, Q.jsx)(Y, { size: `toolbar`, label: h, disabled: a, onClick: s, children: o })),
        (n[16] = s),
        (n[17] = h),
        (n[18] = a),
        (n[19] = c))
      : (c = n[19]);
    let u;
    return (
      n[20] !== c || n[21] !== i
        ? ((u = (0, Q.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1`, children: [i, c] })),
          (n[20] = c),
          (n[21] = i),
          (n[22] = u))
        : (u = n[22]),
      u
    );
  }
  if ((r.status === `started` || r.status === `in_progress`) && (r.canPause || r.canCancel)) {
    let e = !r.canPause,
      t;
    n[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, Q.jsx)(E, {})), (n[23] = t)) : (t = n[23]);
    let i;
    n[24] !== c || n[25] !== v || n[26] !== e
      ? ((i = (0, Q.jsx)(Y, { size: `toolbar`, label: v, disabled: e, onClick: c, children: t })),
        (n[24] = c),
        (n[25] = v),
        (n[26] = e),
        (n[27] = i))
      : (i = n[27]);
    let a = !r.canCancel,
      o;
    n[28] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = (0, Q.jsx)(w, {})), (n[28] = o)) : (o = n[28]);
    let l;
    n[29] !== s || n[30] !== h || n[31] !== a
      ? ((l = (0, Q.jsx)(Y, { size: `toolbar`, label: h, disabled: a, onClick: s, children: o })),
        (n[29] = s),
        (n[30] = h),
        (n[31] = a),
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
  let x;
  n[36] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = (0, Q.jsx)(i, {})), (n[36] = x)) : (x = n[36]);
  let S;
  n[37] === p
    ? (S = n[38])
    : ((S = (0, Q.jsx)(t, {
        type: `button`,
        color: `ghostTertiary`,
        size: `toolbar`,
        uniform: !0,
        "aria-label": p,
        children: x,
      })),
      (n[37] = p),
      (n[38] = S));
  let C;
  n[39] === a ? (C = n[40]) : ((C = a.map(je)), (n[39] = a), (n[40] = C));
  let T;
  return (
    n[41] !== S || n[42] !== C
      ? ((T = (0, Q.jsx)(o, { align: `end`, contentWidth: `menu`, triggerButton: S, children: C })),
        (n[41] = S),
        (n[42] = C),
        (n[43] = T))
      : (T = n[43]),
    T
  );
}
function je(e) {
  return e.type === `separator`
    ? (0, Q.jsx)(g.Separator, {}, e.id)
    : (0, Q.jsx)(
        g.Item,
        {
          disabled: e.enabled === !1,
          onSelect: e.onSelect,
          children: e.message == null ? e.id : (0, Q.jsx)(l, { ...e.message, values: e.messageValues }),
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
      message: ve(a),
      enabled: e.fileExists,
      onSelect: () => {
        i();
      },
    }),
    Ve.has(e.status) &&
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
          q(e.url);
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
          q(e.path);
        },
      },
    ),
    He.has(e.status) &&
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
function Y(e) {
  let n = (0, Z.c)(11),
    { ariaLabel: r, children: i, disabled: a, label: o, onClick: s, size: c } = e,
    l = c === void 0 ? `icon` : c,
    u = r ?? o,
    d;
  n[0] === s
    ? (d = n[1])
    : ((d = () => {
        s();
      }),
      (n[0] = s),
      (n[1] = d));
  let f;
  n[2] !== i || n[3] !== a || n[4] !== l || n[5] !== u || n[6] !== d
    ? ((f = (0, Q.jsx)(t, {
        type: `button`,
        color: `ghostTertiary`,
        size: l,
        uniform: !0,
        "aria-label": u,
        disabled: a,
        onClick: d,
        children: i,
      })),
      (n[2] = i),
      (n[3] = a),
      (n[4] = l),
      (n[5] = u),
      (n[6] = d),
      (n[7] = f))
    : (f = n[7]);
  let p;
  return (
    n[8] !== o || n[9] !== f
      ? ((p = (0, Q.jsx)(ae, { tooltipContent: o, children: f })), (n[8] = o), (n[9] = f), (n[10] = p))
      : (p = n[10]),
    p
  );
}
function Ne(e) {
  let t = (0, Z.c)(8),
    { download: n } = e,
    r = _(),
    i = n.status === `failed` ? `text-danger` : `text-tertiary`,
    a;
  t[0] === i ? (a = t[1]) : ((a = P(`flex min-w-0 items-center gap-1.5 text-xs`, i)), (t[0] = i), (t[1] = a));
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
        ? ((e = (0, Q.jsx)(l, {
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
        ? ((e = (0, Q.jsx)(l, {
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
        ? ((e = (0, Q.jsx)(l, {
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
        ? ((e = (0, Q.jsx)(l, {
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
            ? (0, Q.jsx)(l, {
                id: `downloads.status.downloaded`,
                defaultMessage: `Downloaded`,
                description: `Status label for a completed download`,
              })
            : (0, Q.jsx)(l, {
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
      ? ((a = (0, Q.jsx)(pe, { icon: r, title: i, description: n })),
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
    ((Z = ue()),
      x(),
      (Be = me()),
      V(),
      oe(),
      T(),
      m(),
      a(),
      h(),
      I(),
      k(),
      ye(),
      j(),
      M(),
      G(),
      L(),
      _e(),
      (Q = de()),
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
    ((Ke = ue()), (qe = me()));
  }))();
}
function Ye(e) {
  let n = (0, rt.c)(61),
    { browsingDataSettings: r, browsingHistory: i, onClose: a, onCleared: o, onError: s } = e,
    c = _(),
    [u, d] = (0, it.useState)(`lastHour`),
    f;
  n[0] === r ? (f = n[1]) : ((f = () => new Set(st.filter((e) => Xe(e, r)))), (n[0] = r), (n[1] = f));
  let [m, h] = (0, it.useState)(f),
    [g, v] = (0, it.useState)(!1),
    b;
  n[2] !== i || n[3] !== u
    ? ((b = (e) => {
        let { signal: t } = e;
        return ge(i.getBrowsingDataSummary(u), t);
      }),
      (n[2] = i),
      (n[3] = u),
      (n[4] = b))
    : (b = n[4]);
  let x;
  n[5] === u ? (x = n[6]) : ((x = [`browser-browsing-data-summary`, u]), (n[5] = u), (n[6] = x));
  let C;
  n[7] !== b || n[8] !== x
    ? ((C = { queryFn: b, queryKey: x, refetchOnMount: `always`, retry: !1, staleTime: p.FIVE_SECONDS }),
      (n[7] = b),
      (n[8] = x),
      (n[9] = C))
    : (C = n[9]);
  let { data: w } = y(C),
    T;
  n[10] === m ? (T = n[11]) : ((T = ot.filter((e) => m.has(e))), (n[10] = m), (n[11] = T));
  let E = T,
    O;
  n[12] !== i ||
  n[13] !== E ||
  n[14] !== c ||
  n[15] !== g ||
  n[16] !== o ||
  n[17] !== a ||
  n[18] !== s ||
  n[19] !== u
    ? ((O = async () => {
        g ||
          E.length === 0 ||
          (v(!0),
          await (async () => {
            try {
              (await i.clearBrowsingData({ dataTypes: E, timeRange: u }), await o(E), a());
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
            v(!1);
          }));
      }),
      (n[12] = i),
      (n[13] = E),
      (n[14] = c),
      (n[15] = g),
      (n[16] = o),
      (n[17] = a),
      (n[18] = s),
      (n[19] = u),
      (n[20] = O))
    : (O = n[20]);
  let k = O,
    A;
  n[21] !== g || n[22] !== a
    ? ((A = (e) => {
        !e && !g && a();
      }),
      (n[21] = g),
      (n[22] = a),
      (n[23] = A))
    : (A = n[23]);
  let j;
  n[24] === k
    ? (j = n[25])
    : ((j = (e) => {
        (e.preventDefault(), k());
      }),
      (n[24] = k),
      (n[25] = j));
  let M;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(S, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(l, {
            id: `settings.browserUse.clearBrowsingData.accessibleTitle`,
            defaultMessage: `Clear browsing data`,
            description: `Accessible title for the clear browsing data dialog`,
          }),
        }),
      })),
      (n[26] = M))
    : (M = n[26]);
  let N;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsxs)(U, {
        children: [
          M,
          (0, $.jsx)(D, {
            title: (0, $.jsx)(l, {
              id: `settings.browserUse.clearBrowsingData.title`,
              defaultMessage: `Clear browsing data`,
              description: `Title for the clear browsing data dialog`,
            }),
          }),
        ],
      })),
      (n[27] = N))
    : (N = n[27]);
  let P;
  n[28] !== g || n[29] !== u
    ? ((P = at.map((e) =>
        (0, $.jsx)(
          t,
          {
            "aria-pressed": u === e,
            color: u === e ? `primary` : `outline`,
            disabled: g,
            onClick: () => d(e),
            size: `toolbar`,
            children: nt(e),
          },
          e,
        ),
      )),
      (n[28] = g),
      (n[29] = u),
      (n[30] = P))
    : (P = n[30]);
  let F;
  n[31] === P
    ? (F = n[32])
    : ((F = (0, $.jsx)(`div`, { className: `flex gap-2 overflow-x-auto`, children: P })),
      (n[31] = P),
      (n[32] = F));
  let I;
  n[33] !== r || n[34] !== w || n[35] !== g || n[36] !== m
    ? ((I = ot.map((e) =>
        (0, $.jsx)(
          Ze,
          {
            checked: m.has(e),
            dataType: e,
            disabled: g || !Xe(e, r),
            summary: w,
            onChange: (t) => {
              h((n) => {
                let r = new Set(n);
                return (t ? r.add(e) : r.delete(e), r);
              });
            },
          },
          e,
        ),
      )),
      (n[33] = r),
      (n[34] = w),
      (n[35] = g),
      (n[36] = m),
      (n[37] = I))
    : (I = n[37]);
  let L;
  n[38] === I ? (L = n[39]) : ((L = (0, $.jsx)(ne, { children: I })), (n[38] = I), (n[39] = L));
  let R;
  n[40] !== F || n[41] !== L
    ? ((R = (0, $.jsxs)(U, { className: `gap-3`, children: [F, L] })), (n[40] = F), (n[41] = L), (n[42] = R))
    : (R = n[42]);
  let z;
  n[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the clear browsing data dialog`,
      })),
      (n[43] = z))
    : (z = n[43]);
  let B;
  n[44] !== g || n[45] !== a
    ? ((B = (0, $.jsx)(t, { color: `outline`, disabled: g, onClick: a, children: z })),
      (n[44] = g),
      (n[45] = a),
      (n[46] = B))
    : (B = n[46]);
  let V = E.length === 0,
    H;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.confirm`,
        defaultMessage: `Delete data`,
        description: `Button that deletes selected browsing data`,
      })),
      (n[47] = H))
    : (H = n[47]);
  let W;
  n[48] !== g || n[49] !== V
    ? ((W = (0, $.jsx)(t, { disabled: V, loading: g, type: `submit`, children: H })),
      (n[48] = g),
      (n[49] = V),
      (n[50] = W))
    : (W = n[50]);
  let G;
  n[51] !== B || n[52] !== W
    ? ((G = (0, $.jsx)(U, { children: (0, $.jsxs)(ie, { children: [B, W] }) })),
      (n[51] = B),
      (n[52] = W),
      (n[53] = G))
    : (G = n[53]);
  let K;
  n[54] !== R || n[55] !== G || n[56] !== j
    ? ((K = (0, $.jsxs)(te, { as: `form`, onSubmit: j, children: [N, R, G] })),
      (n[54] = R),
      (n[55] = G),
      (n[56] = j),
      (n[57] = K))
    : (K = n[57]);
  let q;
  return (
    n[58] !== K || n[59] !== A
      ? ((q = (0, $.jsx)(ee, { open: !0, onOpenChange: A, showDialogClose: !1, size: `xwide`, children: K })),
        (n[58] = K),
        (n[59] = A),
        (n[60] = q))
      : (q = n[60]),
    q
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
    s = _(),
    c = `browser-clear-browsing-data-${r}`,
    l = i ? void 0 : `cursor-interaction`,
    u;
  t[0] !== n || t[1] !== i || t[2] !== c || t[3] !== o
    ? ((u = (e) =>
        (0, $.jsx)(`div`, {
          className: `relative`,
          children: (0, $.jsx)(v, { id: c, ...e, checked: n, disabled: i, onCheckedChange: o }),
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
    ? ((m = (0, $.jsx)(se, { control: u, description: d, icon: f, label: p })),
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
          ? (0, $.jsx)(l, {
              id: `settings.browserUse.clearBrowsingData.historySummaryEmpty`,
              defaultMessage: `No sites visited`,
              description: `Summary shown when no sites were visited in the selected browsing-data deletion time range`,
            })
          : t.history.siteCount === 1
            ? (0, $.jsx)(l, {
                id: `settings.browserUse.clearBrowsingData.historySummaryOneSite`,
                defaultMessage: `From {firstSite}`,
                description: `Single site with browsing history in the selected deletion time range`,
                values: { firstSite: t.history.firstSite },
              })
            : (0, $.jsx)(l, {
                id: `settings.browserUse.clearBrowsingData.historySummary`,
                defaultMessage: `From {firstSite} + {additionalSites, plural, one {# site} other {# sites}}`,
                description: `Sites with browsing history in the selected deletion time range`,
                values: { additionalSites: t.history.siteCount - 1, firstSite: t.history.firstSite },
              });
    case `siteData`:
      return t?.siteData == null
        ? void 0
        : (0, $.jsx)(l, {
            id: `settings.browserUse.clearBrowsingData.siteDataSummary`,
            defaultMessage: `Cookies currently stored for {siteCount, plural, =0 {no sites} one {# site} other {# sites}}`,
            description: `Current number of sites storing cookies in the browser profile, not a time-range-specific deletion estimate`,
            values: { siteCount: t.siteData.siteCount },
          });
    case `cache`:
      return t?.cache == null
        ? void 0
        : (0, $.jsx)(l, {
            id: `settings.browserUse.clearBrowsingData.cacheSummary`,
            defaultMessage: `Current cache size: {size}`,
            description: `Current total browser cache size, not a time-range-specific deletion estimate`,
            values: { size: $e(t.cache.sizeBytes, n) },
          });
    case `downloads`:
      return t?.downloads == null
        ? void 0
        : (0, $.jsx)(l, {
            id: `settings.browserUse.clearBrowsingData.downloadsSummary`,
            defaultMessage: `{count, plural, =0 {No downloads} one {# download} other {# downloads}}`,
            description: `Number of completed download-history entries in the selected deletion time range`,
            values: { count: t.downloads.count },
          });
    case `formData`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.formDataSummary`,
        defaultMessage: `Saved names, addresses, and other form entries`,
        description: `Explanation of browser autofill information affected by deletion`,
      });
    case `siteSettings`:
      return (0, $.jsx)(l, {
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
      return (0, $.jsx)(d, { className: `icon-sm` });
    case `siteData`:
      return (0, $.jsx)(Se, { className: `icon-sm` });
    case `cache`:
      return (0, $.jsx)(r, { className: `icon-sm` });
    case `downloads`:
      return (0, $.jsx)(n, { className: `icon-sm` });
    case `formData`:
      return (0, $.jsx)(W, { className: `icon-sm` });
    case `siteSettings`:
      return (0, $.jsx)(F, { className: `icon-sm` });
  }
}
function tt(e) {
  switch (e) {
    case `history`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.history`,
        defaultMessage: `Browsing history`,
        description: `Browsing history category in the clear browsing data dialog`,
      });
    case `siteData`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.siteData`,
        defaultMessage: `Cookies and site data`,
        description: `Cookies and site data category in the clear browsing data dialog`,
      });
    case `cache`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.cache`,
        defaultMessage: `Cached images and files`,
        description: `Cached images and files category in the clear browsing data dialog`,
      });
    case `downloads`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.downloads`,
        defaultMessage: `Download history`,
        description: `Download history category in the clear browsing data dialog`,
      });
    case `formData`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.formData`,
        defaultMessage: `Autofill form data`,
        description: `Autofill form data category in the clear browsing data dialog`,
      });
    case `siteSettings`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.siteSettings`,
        defaultMessage: `Site settings`,
        description: `Site settings category in the clear browsing data dialog`,
      });
  }
}
function nt(e) {
  switch (e) {
    case `lastHour`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.lastHour`,
        defaultMessage: `Last hour`,
        description: `Browsing data time-range option for the previous hour`,
      });
    case `lastDay`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.lastDay`,
        defaultMessage: `Last 24 hours`,
        description: `Browsing data time-range option for the previous 24 hours`,
      });
    case `lastWeek`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.lastWeek`,
        defaultMessage: `Last 7 days`,
        description: `Browsing data time-range option for the previous 7 days`,
      });
    case `lastMonth`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.lastMonth`,
        defaultMessage: `Last 4 weeks`,
        description: `Browsing data time-range option for the previous 28 days`,
      });
    case `allTime`:
      return (0, $.jsx)(l, {
        id: `settings.browserUse.clearBrowsingData.allTime`,
        defaultMessage: `All time`,
        description: `Browsing data time-range option for all browser history`,
      });
  }
}
var rt, it, $, at, ot, st;
function ct() {
  return (ct = e(() => {
    ((rt = ue()),
      b(),
      (it = me()),
      V(),
      oe(),
      c(),
      le(),
      N(),
      xe(),
      M(),
      f(),
      B(),
      re(),
      C(),
      z(),
      u(),
      s(),
      ($ = de()),
      (at = [`lastHour`, `lastDay`, `lastWeek`, `lastMonth`, `allTime`]),
      (ot = [`history`, `siteData`, `cache`, `downloads`, `formData`, `siteSettings`]),
      (st = [`history`, `siteData`, `cache`, `downloads`]));
  }))();
}
export { Oe as a, ke as c, Ge as i, Ce as l, ct as n, Y as o, Je as r, Ne as s, Ye as t, We as u };
//# sourceMappingURL=browser-clear-browsing-data-dialog-view-380dcf867bd3.js.map
