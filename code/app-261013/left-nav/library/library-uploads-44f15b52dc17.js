import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BJ as n,
  GD as r,
  IDt as i,
  Ixt as a,
  KD as o,
  Mz as s,
  NV as c,
  Nz as l,
  Pxt as u,
  SV as d,
  TJ as f,
  VDt as p,
  Vxt as m,
  XV as h,
  _Mt as g,
  gMt as _,
  i3 as v,
  jDt as y,
  n4 as b,
  r3 as x,
  t3 as S,
  t4 as C,
  vzt as w,
  xMt as T,
  yMt as E,
  yzt as D,
  zH as O,
  zJ as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  Hvn as A,
  Jxt as j,
  Qxt as M,
  Uxt as N,
  Vvn as P,
  Zxt as F,
  eln as I,
  tln as L,
  wpt as R,
} from "./app-initial-5851df3f6cb1.js";
import { Ct as z, wt as B } from "./app-primary-fe8a450b3b04.js";
import { a as V, c as H, i as U, n as ee, o as te, t as W, u as ne } from "./actions-370de4b5bf69.js";
function re(e) {
  let a = (0, G.c)(63),
    { items: o, onClose: l, onRemove: u, onRetry: d } = e,
    f = p(),
    m = (0, K.useId)(),
    h = (0, K.useId)(),
    [g, v] = (0, K.useState)(!1);
  if (o.length === 0) return null;
  let y;
  a[0] === o ? (y = a[1]) : ((y = o.filter(oe)), (a[0] = o), (a[1] = y));
  let b = y.length,
    x;
  a[2] === o ? (x = a[3]) : ((x = o.some(ae)), (a[2] = o), (a[3] = x));
  let S = x,
    C;
  a[4] === o.length
    ? (C = a[5])
    : ((C = (0, q.jsx)(i, {
        id: `appgenPage.cloudUpload.panel.title`,
        defaultMessage: `{count, plural, one {Uploading # file} other {Uploading # files}}`,
        description: `Title of the floating Library upload progress panel. The count is the number of files in the current panel, including files that are queued, uploading, completed, or failed`,
        values: { count: o.length },
      })),
      (a[4] = o.length),
      (a[5] = C));
  let w;
  a[6] !== C || a[7] !== m
    ? ((w = (0, q.jsx)(`h2`, { id: m, className: `min-w-0 truncate text-sm font-medium`, children: C })),
      (a[6] = C),
      (a[7] = m),
      (a[8] = w))
    : (w = a[8]);
  let T;
  a[9] !== b || a[10] !== f || a[11] !== o.length
    ? ((T = f.formatMessage(
        {
          id: `appgenPage.cloudUpload.panel.progressLabel`,
          defaultMessage: `{completedCount} of {totalCount} files uploaded`,
          description: `Accessible label for the floating Library upload panel's overall progress indicator. completedCount is the number of successfully uploaded files and totalCount is the total number of files in the panel`,
        },
        { completedCount: b, totalCount: o.length },
      )),
      (a[9] = b),
      (a[10] = f),
      (a[11] = o.length),
      (a[12] = T))
    : (T = a[12]);
  let E = (b / o.length) * 100,
    D;
  a[13] === E ? (D = a[14]) : ((D = (0, q.jsx)(r, { percent: E, size: 14 })), (a[13] = E), (a[14] = D));
  let O;
  a[15] !== b || a[16] !== o.length
    ? ((O = (0, q.jsx)(`span`, {
        className: `tabular-nums`,
        children: (0, q.jsx)(i, {
          id: `appgenPage.cloudUpload.panel.progress`,
          defaultMessage: `{completedCount}/{totalCount}`,
          description: `Compact overall progress in the floating Library upload panel. completedCount is the number of successfully uploaded files and totalCount is the number of files in the panel`,
          values: { completedCount: b, totalCount: o.length },
        }),
      })),
      (a[15] = b),
      (a[16] = o.length),
      (a[17] = O))
    : (O = a[17]);
  let k;
  a[18] !== T || a[19] !== D || a[20] !== O
    ? ((k = (0, q.jsxs)(`div`, {
        "aria-label": T,
        className: `flex items-center gap-1.5 text-xs`,
        role: `img`,
        children: [D, O],
      })),
      (a[18] = T),
      (a[19] = D),
      (a[20] = O),
      (a[21] = k))
    : (k = a[21]);
  let A = !g,
    j;
  a[22] !== f || a[23] !== g
    ? ((j = g
        ? f.formatMessage({
            id: `appgenPage.cloudUpload.panel.expand`,
            defaultMessage: `Expand upload progress`,
            description: `Accessible label for the button that expands the floating Library upload progress panel to show individual files`,
          })
        : f.formatMessage({
            id: `appgenPage.cloudUpload.panel.collapse`,
            defaultMessage: `Collapse upload progress`,
            description: `Accessible label for the button that collapses the floating Library upload progress panel while keeping its overall progress visible`,
          })),
      (a[22] = f),
      (a[23] = g),
      (a[24] = j))
    : (j = a[24]);
  let M;
  a[25] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = () => v(ie)), (a[25] = M)) : (M = a[25]);
  let N = g && `rotate-180`,
    P;
  a[26] === N ? (P = a[27]) : ((P = _(N)), (a[26] = N), (a[27] = P));
  let F;
  a[28] === P ? (F = a[29]) : ((F = (0, q.jsx)(c, { className: P })), (a[28] = P), (a[29] = F));
  let I;
  a[30] !== h || a[31] !== A || a[32] !== j || a[33] !== F
    ? ((I = (0, q.jsx)(t, {
        "aria-controls": h,
        "aria-expanded": A,
        "aria-label": j,
        color: `ghostSecondary`,
        size: `iconMd`,
        onClick: M,
        children: F,
      })),
      (a[30] = h),
      (a[31] = A),
      (a[32] = j),
      (a[33] = F),
      (a[34] = I))
    : (I = a[34]);
  let L;
  a[35] !== S || a[36] !== f || a[37] !== l
    ? ((L = S
        ? null
        : (0, q.jsx)(t, {
            "aria-label": f.formatMessage({
              id: `appgenPage.cloudUpload.panel.close`,
              defaultMessage: `Close upload progress`,
              description: `Accessible label for the button that dismisses the floating Library upload progress panel after all uploads finish`,
            }),
            color: `ghostSecondary`,
            size: `iconMd`,
            onClick: l,
            children: (0, q.jsx)(s, { asset: n }),
          })),
      (a[35] = S),
      (a[36] = f),
      (a[37] = l),
      (a[38] = L))
    : (L = a[38]);
  let R;
  a[39] !== I || a[40] !== L || a[41] !== k
    ? ((R = (0, q.jsxs)(`div`, { className: `flex shrink-0 items-center gap-2`, children: [k, I, L] })),
      (a[39] = I),
      (a[40] = L),
      (a[41] = k),
      (a[42] = R))
    : (R = a[42]);
  let z;
  a[43] !== R || a[44] !== w
    ? ((z = (0, q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 border-b border-default px-4 py-3`,
        children: [w, R],
      })),
      (a[43] = R),
      (a[44] = w),
      (a[45] = z))
    : (z = a[45]);
  let B;
  if (a[46] !== o || a[47] !== u || a[48] !== d) {
    let e;
    (a[50] !== u || a[51] !== d
      ? ((e = (e) => (0, q.jsx)(se, { item: e, onRemove: u, onRetry: d }, e.id)),
        (a[50] = u),
        (a[51] = d),
        (a[52] = e))
      : (e = a[52]),
      (B = o.map(e)),
      (a[46] = o),
      (a[47] = u),
      (a[48] = d),
      (a[49] = B));
  } else B = a[49];
  let V;
  a[53] !== g || a[54] !== h || a[55] !== B
    ? ((V = (0, q.jsx)(`div`, {
        id: h,
        className: `max-h-64 overflow-y-auto`,
        hidden: g,
        role: `list`,
        children: B,
      })),
      (a[53] = g),
      (a[54] = h),
      (a[55] = B),
      (a[56] = V))
    : (V = a[56]);
  let H;
  a[57] !== z || a[58] !== V
    ? ((H = (0, q.jsxs)(`div`, {
        className: `pointer-events-auto overflow-hidden rounded-xl border border-default bg-surface-elevated-secondary text-default shadow-lg`,
        children: [z, V],
      })),
      (a[57] = z),
      (a[58] = V),
      (a[59] = H))
    : (H = a[59]);
  let U;
  return (
    a[60] !== H || a[61] !== m
      ? ((U = (0, q.jsx)(`section`, {
          "aria-labelledby": m,
          className: `fixed inset-x-4 bottom-4 z-50 select-none sm:left-auto sm:w-96`,
          children: H,
        })),
        (a[60] = H),
        (a[61] = m),
        (a[62] = U))
      : (U = a[62]),
    U
  );
}
function ie(e) {
  return !e;
}
function ae(e) {
  return e.status === `queued` || e.status === `uploading` || e.status === `processing`;
}
function oe(e) {
  return e.status === `success`;
}
function se(e) {
  let r = (0, G.c)(44),
    { item: a, onRemove: o, onRetry: c } = e,
    l = p(),
    u,
    f;
  bb0: switch (a.status) {
    case `failed`: {
      let e;
      (r[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(O, { className: `text-chart-red` })), (r[0] = e))
        : (e = r[0]),
        (u = e));
      let t;
      (r[1] === a.errorMessage
        ? (t = r[2])
        : ((t =
            a.errorMessage ??
            (0, q.jsx)(i, {
              id: `appgenPage.cloudUpload.panel.failed`,
              defaultMessage: `Unable to upload`,
              description: `Status shown under an individual file in the floating Library upload progress panel when that file fails to upload`,
            })),
          (r[1] = a.errorMessage),
          (r[2] = t)),
        (f = t));
      break bb0;
    }
    case `queued`: {
      let e;
      (r[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(h, { className: `text-secondary` })), (r[3] = e))
        : (e = r[3]),
        (u = e));
      let t;
      (r[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, q.jsx)(i, {
            id: `appgenPage.cloudUpload.panel.queued`,
            defaultMessage: `Queued`,
            description: `Status shown under an individual file in the floating Library upload progress panel while it waits for an earlier file to finish uploading`,
          })),
          (r[4] = t))
        : (t = r[4]),
        (f = t));
      break bb0;
    }
    case `processing`: {
      let e;
      (r[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(x, { className: `icon-sm text-secondary` })), (r[5] = e))
        : (e = r[5]),
        (u = e));
      let t;
      (r[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, q.jsx)(i, {
            id: `appgenPage.cloudUpload.panel.processing`,
            defaultMessage: `Processing…`,
            description: `Status shown under an individual file in the floating Library upload progress panel after its bytes upload while its Library record is being processed`,
          })),
          (r[6] = t))
        : (t = r[6]),
        (f = t));
      break bb0;
    }
    case `success`: {
      let e;
      (r[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(d, { className: `text-chart-green` })), (r[7] = e))
        : (e = r[7]),
        (u = e));
      let t;
      (r[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, q.jsx)(i, {
            id: `appgenPage.cloudUpload.panel.uploaded`,
            defaultMessage: `Uploaded`,
            description: `Status shown under an individual file in the floating Library upload progress panel after the file is successfully added to the Library`,
          })),
          (r[8] = t))
        : (t = r[8]),
        (f = t));
      break bb0;
    }
    case `uploading`: {
      let e;
      (r[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(x, { className: `icon-sm text-secondary` })), (r[9] = e))
        : (e = r[9]),
        (u = e));
      let t;
      r[10] === a.progress ? (t = r[11]) : ((t = Math.round(a.progress)), (r[10] = a.progress), (r[11] = t));
      let n;
      (r[12] === t
        ? (n = r[13])
        : ((n = (0, q.jsx)(i, {
            id: `appgenPage.cloudUpload.panel.uploading`,
            defaultMessage: `Uploading… {progress}%`,
            description: `Status shown under an individual file in the floating Library upload progress panel while its bytes are uploading. progress is a whole-number percentage from 0 to 100`,
            values: { progress: t },
          })),
          (r[12] = t),
          (r[13] = n)),
        (f = n));
    }
  }
  let m;
  r[14] === u
    ? (m = r[15])
    : ((m = (0, q.jsx)(`div`, {
        className: `flex size-8 shrink-0 items-center justify-center rounded-lg border border-default`,
        children: u,
      })),
      (r[14] = u),
      (r[15] = m));
  let g;
  r[16] === a.fileName
    ? (g = r[17])
    : ((g = (0, q.jsx)(`div`, { className: `truncate text-sm`, children: a.fileName })),
      (r[16] = a.fileName),
      (r[17] = g));
  let v = a.status === `failed` ? `whitespace-normal text-chart-red` : `truncate text-secondary`,
    y;
  r[18] === v ? (y = r[19]) : ((y = _(`text-xs`, v)), (r[18] = v), (r[19] = y));
  let b;
  r[20] !== f || r[21] !== y
    ? ((b = (0, q.jsx)(`div`, { className: y, children: f })), (r[20] = f), (r[21] = y), (r[22] = b))
    : (b = r[22]);
  let S;
  r[23] !== g || r[24] !== b
    ? ((S = (0, q.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [g, b] })),
      (r[23] = g),
      (r[24] = b),
      (r[25] = S))
    : (S = r[25]);
  let w;
  r[26] !== l ||
  r[27] !== a.fileName ||
  r[28] !== a.id ||
  r[29] !== a.retryable ||
  r[30] !== a.status ||
  r[31] !== c
    ? ((w =
        a.status === `failed` && a.retryable
          ? (0, q.jsx)(t, {
              "aria-label": l.formatMessage(
                {
                  id: `appgenPage.cloudUpload.panel.retry`,
                  defaultMessage: `Retry uploading {fileName}`,
                  description: `Accessible label for the button that retries a failed file in the floating Library upload progress panel. fileName is the name of the failed file`,
                },
                { fileName: a.fileName },
              ),
              color: `ghostSecondary`,
              size: `iconMd`,
              onClick: () => c(a.id),
              children: (0, q.jsx)(s, { asset: C }),
            })
          : null),
      (r[26] = l),
      (r[27] = a.fileName),
      (r[28] = a.id),
      (r[29] = a.retryable),
      (r[30] = a.status),
      (r[31] = c),
      (r[32] = w))
    : (w = r[32]);
  let T;
  r[33] !== l || r[34] !== a.fileName || r[35] !== a.id || r[36] !== a.status || r[37] !== o
    ? ((T =
        a.status === `failed`
          ? (0, q.jsx)(t, {
              "aria-label": l.formatMessage(
                {
                  id: `appgenPage.cloudUpload.panel.remove`,
                  defaultMessage: `Remove failed upload {fileName}`,
                  description: `Accessible label for the button that removes a failed file from the floating Library upload progress panel without deleting any existing Library file. fileName is the name of the failed upload`,
                },
                { fileName: a.fileName },
              ),
              color: `ghostSecondary`,
              size: `iconMd`,
              onClick: () => o(a.id),
              children: (0, q.jsx)(s, { asset: n }),
            })
          : null),
      (r[33] = l),
      (r[34] = a.fileName),
      (r[35] = a.id),
      (r[36] = a.status),
      (r[37] = o),
      (r[38] = T))
    : (T = r[38]);
  let E;
  return (
    r[39] !== m || r[40] !== S || r[41] !== w || r[42] !== T
      ? ((E = (0, q.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-3 border-b border-default px-4 py-3 last:border-b-0`,
          role: `listitem`,
          children: [m, S, w, T],
        })),
        (r[39] = m),
        (r[40] = S),
        (r[41] = w),
        (r[42] = T),
        (r[43] = E))
      : (E = r[43]),
    E
  );
}
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = w()), b(), k(), g(), (K = D()), y(), S(), l(), f(), o(), v(), (q = T()));
  }))();
}
function ce() {
  let e = (0, X.c)(12),
    t = a(L),
    n = (0, Z.useContext)(P)?.shellElement,
    r = m(ne),
    i,
    o,
    s;
  e[0] === t
    ? ((i = e[1]), (o = e[2]), (s = e[3]))
    : ((i = () => W(t)),
      (o = (e) => W(t, e)),
      (s = (e) => void U(t, e)),
      (e[0] = t),
      (e[1] = i),
      (e[2] = o),
      (e[3] = s));
  let c;
  e[4] !== i || e[5] !== o || e[6] !== s || e[7] !== r
    ? ((c = (0, $.jsx)(re, { items: r, onClose: i, onRemove: o, onRetry: s })),
      (e[4] = i),
      (e[5] = o),
      (e[6] = s),
      (e[7] = r),
      (e[8] = c))
    : (c = e[8]);
  let l = c,
    u;
  return (
    e[9] !== l || e[10] !== n
      ? ((u = n == null ? l : (0, Q.createPortal)(l, n)), (e[9] = l), (e[10] = n), (e[11] = u))
      : (u = e[11]),
    u
  );
}
function le(e) {
  let t = (0, X.c)(12),
    { children: n } = e,
    r = a(I),
    i = m(te),
    [o, s] = (0, Z.useState)(!1),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = []), (t[0] = c)) : (c = t[0]);
  let l = (0, Z.useRef)(c),
    u;
  t[1] !== i || t[2] !== r
    ? ((u = (e) => {
        if (
          N(e.dataTransfer) &&
          (e.preventDefault(),
          e.target instanceof Node &&
            e.currentTarget.contains(e.target) &&
            (e.stopPropagation(),
            e.type === `dragenter` ? l.current.push(e.target) : e.type === `drop` && (l.current = []),
            (e.dataTransfer.dropEffect = i ? `copy` : `none`),
            s(i && e.type !== `drop`),
            i && e.type === `drop`))
        ) {
          let t = F(e.dataTransfer).filter(de).map(ue);
          V(r, t);
        }
      }),
      (t[1] = i),
      (t[2] = r),
      (t[3] = u))
    : (u = t[3]);
  let d = u,
    f;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (e) => {
        if (!(e.target instanceof Node) || !e.currentTarget.contains(e.target)) return;
        let t = l.current.filter((t) => e.currentTarget.contains(t)),
          n = t.indexOf(e.target);
        (n !== -1 && t.splice(n, 1),
          (l.current = t),
          t.length === 0 &&
            !(e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) &&
            s(!1));
      }),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] !== i || t[6] !== o
    ? ((p = o && i && (0, Q.createPortal)((0, $.jsx)(Y, {}), document.body)),
      (t[5] = i),
      (t[6] = o),
      (t[7] = p))
    : (p = t[7]);
  let h;
  return (
    t[8] !== n || t[9] !== d || t[10] !== p
      ? ((h = (0, $.jsxs)(`div`, {
          className: `relative h-full min-h-0`,
          onDragEnterCapture: d,
          onDragOverCapture: d,
          onDropCapture: d,
          onDragLeaveCapture: f,
          children: [n, p],
        })),
        (t[8] = n),
        (t[9] = d),
        (t[10] = p),
        (t[11] = h))
      : (h = t[11]),
    h
  );
}
function ue(e) {
  let { file: t } = e;
  return t;
}
function de(e) {
  let { isDirectory: t } = e;
  return !t;
}
function Y() {
  let e = (0, X.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(z, { "aria-hidden": !0, focusable: `false` })), (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(`h3`, {
        className: `text-2xl font-semibold`,
        children: (0, $.jsx)(i, {
          id: `libraryNext.upload.dragInstructions`,
          defaultMessage: `Add anything`,
          description: `Heading displayed while dragging files over the Library, inviting the user to upload them`,
        }),
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsxs)(`div`, {
          className: `pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 bg-surface/80 text-default select-none`,
          inert: !0,
          children: [
            t,
            n,
            (0, $.jsx)(`h4`, {
              className: `w-2/3 text-center text-base font-normal`,
              children: (0, $.jsx)(i, {
                id: `libraryNext.upload.dropPrompt`,
                defaultMessage: `Drop any file here to add it to your library`,
                description: `Instruction under the heading in the Library file drag overlay explaining where dropped files will be saved`,
              }),
            }),
          ],
        })),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
var X, Z, Q, $;
function fe() {
  return (fe = e(() => {
    ((X = w()), u(), (Z = D()), (Q = E()), y(), A(), j(), M(), R(), ee(), H(), B(), J(), ($ = T()));
  }))();
}
export { fe as i, le as n, ce as r, Y as t };
//# sourceMappingURL=library-uploads-44f15b52dc17.js.map
