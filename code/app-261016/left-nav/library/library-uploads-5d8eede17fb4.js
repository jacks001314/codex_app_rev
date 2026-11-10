import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $4 as n,
  $St as r,
  BY as i,
  DB as a,
  FBt as o,
  FNt as s,
  IU as c,
  KH as l,
  LNt as u,
  MNt as d,
  NNt as f,
  OB as p,
  PBt as m,
  SO as h,
  TY as g,
  XOt as _,
  Y3 as v,
  Z3 as y,
  ZSt as b,
  e3 as x,
  e6 as S,
  iCt as C,
  kH as w,
  okt as T,
  tkt as E,
  vH as D,
  xO as ee,
  zY as O,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A3t as k,
  N3t as A,
  Nmt as j,
  P3t as M,
  T3t as N,
  Uxn as P,
  Wxn as F,
  Xfn as I,
  Yfn as L,
} from "./app-initial-ad16eaadf81f.js";
import { Tt as R, wt as z } from "./app-primary-3e00728c2a4c.js";
import { a as B, c as V, i as H, n as te, o as ne, t as U, u as re } from "./actions-5a805ebd2dda.js";
function ie(e) {
  let t = (0, W.c)(63),
    { items: n, onClose: r, onRemove: o, onRetry: s } = e,
    c = T(),
    l = (0, G.useId)(),
    u = (0, G.useId)(),
    [f, p] = (0, G.useState)(!1);
  if (n.length === 0) return null;
  let m;
  t[0] === n ? (m = t[1]) : ((m = n.filter(se)), (t[0] = n), (t[1] = m));
  let h = m.length,
    g;
  t[2] === n ? (g = t[3]) : ((g = n.some(oe)), (t[2] = n), (t[3] = g));
  let _ = g,
    y;
  t[4] === n.length
    ? (y = t[5])
    : ((y = (0, K.jsx)(E, {
        id: `appgenPage.cloudUpload.panel.title`,
        defaultMessage: `{count, plural, one {Uploading # file} other {Uploading # files}}`,
        description: `Title of the floating Library upload progress panel. The count is the number of files in the current panel, including files that are queued, uploading, completed, or failed`,
        values: { count: n.length },
      })),
      (t[4] = n.length),
      (t[5] = y));
  let b;
  t[6] !== y || t[7] !== l
    ? ((b = (0, K.jsx)(`h2`, { id: l, className: `min-w-0 truncate text-sm font-medium`, children: y })),
      (t[6] = y),
      (t[7] = l),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] !== h || t[10] !== c || t[11] !== n.length
    ? ((x = c.formatMessage(
        {
          id: `appgenPage.cloudUpload.panel.progressLabel`,
          defaultMessage: `{completedCount} of {totalCount} files uploaded`,
          description: `Accessible label for the floating Library upload panel's overall progress indicator. completedCount is the number of successfully uploaded files and totalCount is the total number of files in the panel`,
        },
        { completedCount: h, totalCount: n.length },
      )),
      (t[9] = h),
      (t[10] = c),
      (t[11] = n.length),
      (t[12] = x))
    : (x = t[12]);
  let S = (h / n.length) * 100,
    C;
  t[13] === S ? (C = t[14]) : ((C = (0, K.jsx)(ee, { percent: S, size: 14 })), (t[13] = S), (t[14] = C));
  let D;
  t[15] !== h || t[16] !== n.length
    ? ((D = (0, K.jsx)(`span`, {
        className: `tabular-nums`,
        children: (0, K.jsx)(E, {
          id: `appgenPage.cloudUpload.panel.progress`,
          defaultMessage: `{completedCount}/{totalCount}`,
          description: `Compact overall progress in the floating Library upload panel. completedCount is the number of successfully uploaded files and totalCount is the number of files in the panel`,
          values: { completedCount: h, totalCount: n.length },
        }),
      })),
      (t[15] = h),
      (t[16] = n.length),
      (t[17] = D))
    : (D = t[17]);
  let O;
  t[18] !== x || t[19] !== C || t[20] !== D
    ? ((O = (0, K.jsxs)(`div`, {
        "aria-label": x,
        className: `flex items-center gap-1.5 text-xs`,
        role: `img`,
        children: [C, D],
      })),
      (t[18] = x),
      (t[19] = C),
      (t[20] = D),
      (t[21] = O))
    : (O = t[21]);
  let k = !f,
    A;
  t[22] !== c || t[23] !== f
    ? ((A = f
        ? c.formatMessage({
            id: `appgenPage.cloudUpload.panel.expand`,
            defaultMessage: `Expand upload progress`,
            description: `Accessible label for the button that expands the floating Library upload progress panel to show individual files`,
          })
        : c.formatMessage({
            id: `appgenPage.cloudUpload.panel.collapse`,
            defaultMessage: `Collapse upload progress`,
            description: `Accessible label for the button that collapses the floating Library upload progress panel while keeping its overall progress visible`,
          })),
      (t[22] = c),
      (t[23] = f),
      (t[24] = A))
    : (A = t[24]);
  let j;
  t[25] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = () => p(ae)), (t[25] = j)) : (j = t[25]);
  let M = f && `rotate-180`,
    N;
  t[26] === M ? (N = t[27]) : ((N = d(M)), (t[26] = M), (t[27] = N));
  let P;
  t[28] === N ? (P = t[29]) : ((P = (0, K.jsx)(w, { className: N })), (t[28] = N), (t[29] = P));
  let F;
  t[30] !== u || t[31] !== k || t[32] !== A || t[33] !== P
    ? ((F = (0, K.jsx)(v, {
        "aria-controls": u,
        "aria-expanded": k,
        "aria-label": A,
        color: `ghostSecondary`,
        size: `iconMd`,
        onClick: j,
        children: P,
      })),
      (t[30] = u),
      (t[31] = k),
      (t[32] = A),
      (t[33] = P),
      (t[34] = F))
    : (F = t[34]);
  let I;
  t[35] !== _ || t[36] !== c || t[37] !== r
    ? ((I = _
        ? null
        : (0, K.jsx)(v, {
            "aria-label": c.formatMessage({
              id: `appgenPage.cloudUpload.panel.close`,
              defaultMessage: `Close upload progress`,
              description: `Accessible label for the button that dismisses the floating Library upload progress panel after all uploads finish`,
            }),
            color: `ghostSecondary`,
            size: `iconMd`,
            onClick: r,
            children: (0, K.jsx)(a, { asset: i }),
          })),
      (t[35] = _),
      (t[36] = c),
      (t[37] = r),
      (t[38] = I))
    : (I = t[38]);
  let L;
  t[39] !== F || t[40] !== I || t[41] !== O
    ? ((L = (0, K.jsxs)(`div`, { className: `flex shrink-0 items-center gap-2`, children: [O, F, I] })),
      (t[39] = F),
      (t[40] = I),
      (t[41] = O),
      (t[42] = L))
    : (L = t[42]);
  let R;
  t[43] !== L || t[44] !== b
    ? ((R = (0, K.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 border-b border-default px-4 py-3`,
        children: [b, L],
      })),
      (t[43] = L),
      (t[44] = b),
      (t[45] = R))
    : (R = t[45]);
  let z;
  if (t[46] !== n || t[47] !== o || t[48] !== s) {
    let e;
    (t[50] !== o || t[51] !== s
      ? ((e = (e) => (0, K.jsx)(ce, { item: e, onRemove: o, onRetry: s }, e.id)),
        (t[50] = o),
        (t[51] = s),
        (t[52] = e))
      : (e = t[52]),
      (z = n.map(e)),
      (t[46] = n),
      (t[47] = o),
      (t[48] = s),
      (t[49] = z));
  } else z = t[49];
  let B;
  t[53] !== f || t[54] !== u || t[55] !== z
    ? ((B = (0, K.jsx)(`div`, {
        id: u,
        className: `max-h-64 overflow-y-auto`,
        hidden: f,
        role: `list`,
        children: z,
      })),
      (t[53] = f),
      (t[54] = u),
      (t[55] = z),
      (t[56] = B))
    : (B = t[56]);
  let V;
  t[57] !== R || t[58] !== B
    ? ((V = (0, K.jsxs)(`div`, {
        className: `pointer-events-auto overflow-hidden rounded-xl border border-default bg-surface-elevated-secondary text-default shadow-lg`,
        children: [R, B],
      })),
      (t[57] = R),
      (t[58] = B),
      (t[59] = V))
    : (V = t[59]);
  let H;
  return (
    t[60] !== V || t[61] !== l
      ? ((H = (0, K.jsx)(`section`, {
          "aria-labelledby": l,
          className: `fixed inset-x-4 bottom-4 z-50 select-none sm:left-auto sm:w-96`,
          children: V,
        })),
        (t[60] = V),
        (t[61] = l),
        (t[62] = H))
      : (H = t[62]),
    H
  );
}
function ae(e) {
  return !e;
}
function oe(e) {
  return e.status === `queued` || e.status === `uploading` || e.status === `processing`;
}
function se(e) {
  return e.status === `success`;
}
function ce(e) {
  let r = (0, W.c)(44),
    { item: o, onRemove: s, onRetry: u } = e,
    f = T(),
    p,
    m;
  bb0: switch (o.status) {
    case `failed`: {
      let e;
      (r[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(c, { className: `text-chart-red` })), (r[0] = e))
        : (e = r[0]),
        (p = e));
      let t;
      (r[1] === o.errorMessage
        ? (t = r[2])
        : ((t =
            o.errorMessage ??
            (0, K.jsx)(E, {
              id: `appgenPage.cloudUpload.panel.failed`,
              defaultMessage: `Unable to upload`,
              description: `Status shown under an individual file in the floating Library upload progress panel when that file fails to upload`,
            })),
          (r[1] = o.errorMessage),
          (r[2] = t)),
        (m = t));
      break bb0;
    }
    case `queued`: {
      let e;
      (r[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(l, { className: `text-secondary` })), (r[3] = e))
        : (e = r[3]),
        (p = e));
      let t;
      (r[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, K.jsx)(E, {
            id: `appgenPage.cloudUpload.panel.queued`,
            defaultMessage: `Queued`,
            description: `Status shown under an individual file in the floating Library upload progress panel while it waits for an earlier file to finish uploading`,
          })),
          (r[4] = t))
        : (t = r[4]),
        (m = t));
      break bb0;
    }
    case `processing`: {
      let e;
      (r[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(t, { className: `icon-sm text-secondary` })), (r[5] = e))
        : (e = r[5]),
        (p = e));
      let n;
      (r[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, K.jsx)(E, {
            id: `appgenPage.cloudUpload.panel.processing`,
            defaultMessage: `Processing…`,
            description: `Status shown under an individual file in the floating Library upload progress panel after its bytes upload while its Library record is being processed`,
          })),
          (r[6] = n))
        : (n = r[6]),
        (m = n));
      break bb0;
    }
    case `success`: {
      let e;
      (r[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(D, { className: `text-chart-green` })), (r[7] = e))
        : (e = r[7]),
        (p = e));
      let t;
      (r[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, K.jsx)(E, {
            id: `appgenPage.cloudUpload.panel.uploaded`,
            defaultMessage: `Uploaded`,
            description: `Status shown under an individual file in the floating Library upload progress panel after the file is successfully added to the Library`,
          })),
          (r[8] = t))
        : (t = r[8]),
        (m = t));
      break bb0;
    }
    case `uploading`: {
      let e;
      (r[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(t, { className: `icon-sm text-secondary` })), (r[9] = e))
        : (e = r[9]),
        (p = e));
      let n;
      r[10] === o.progress ? (n = r[11]) : ((n = Math.round(o.progress)), (r[10] = o.progress), (r[11] = n));
      let i;
      (r[12] === n
        ? (i = r[13])
        : ((i = (0, K.jsx)(E, {
            id: `appgenPage.cloudUpload.panel.uploading`,
            defaultMessage: `Uploading… {progress}%`,
            description: `Status shown under an individual file in the floating Library upload progress panel while its bytes are uploading. progress is a whole-number percentage from 0 to 100`,
            values: { progress: n },
          })),
          (r[12] = n),
          (r[13] = i)),
        (m = i));
    }
  }
  let h;
  r[14] === p
    ? (h = r[15])
    : ((h = (0, K.jsx)(`div`, {
        className: `flex size-8 shrink-0 items-center justify-center rounded-lg border border-default`,
        children: p,
      })),
      (r[14] = p),
      (r[15] = h));
  let g;
  r[16] === o.fileName
    ? (g = r[17])
    : ((g = (0, K.jsx)(`div`, { className: `truncate text-sm`, children: o.fileName })),
      (r[16] = o.fileName),
      (r[17] = g));
  let _ = o.status === `failed` ? `whitespace-normal text-chart-red` : `truncate text-secondary`,
    y;
  r[18] === _ ? (y = r[19]) : ((y = d(`text-xs`, _)), (r[18] = _), (r[19] = y));
  let b;
  r[20] !== m || r[21] !== y
    ? ((b = (0, K.jsx)(`div`, { className: y, children: m })), (r[20] = m), (r[21] = y), (r[22] = b))
    : (b = r[22]);
  let x;
  r[23] !== g || r[24] !== b
    ? ((x = (0, K.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [g, b] })),
      (r[23] = g),
      (r[24] = b),
      (r[25] = x))
    : (x = r[25]);
  let S;
  r[26] !== f ||
  r[27] !== o.fileName ||
  r[28] !== o.id ||
  r[29] !== o.retryable ||
  r[30] !== o.status ||
  r[31] !== u
    ? ((S =
        o.status === `failed` && o.retryable
          ? (0, K.jsx)(v, {
              "aria-label": f.formatMessage(
                {
                  id: `appgenPage.cloudUpload.panel.retry`,
                  defaultMessage: `Retry uploading {fileName}`,
                  description: `Accessible label for the button that retries a failed file in the floating Library upload progress panel. fileName is the name of the failed file`,
                },
                { fileName: o.fileName },
              ),
              color: `ghostSecondary`,
              size: `iconMd`,
              onClick: () => u(o.id),
              children: (0, K.jsx)(a, { asset: n }),
            })
          : null),
      (r[26] = f),
      (r[27] = o.fileName),
      (r[28] = o.id),
      (r[29] = o.retryable),
      (r[30] = o.status),
      (r[31] = u),
      (r[32] = S))
    : (S = r[32]);
  let C;
  r[33] !== f || r[34] !== o.fileName || r[35] !== o.id || r[36] !== o.status || r[37] !== s
    ? ((C =
        o.status === `failed`
          ? (0, K.jsx)(v, {
              "aria-label": f.formatMessage(
                {
                  id: `appgenPage.cloudUpload.panel.remove`,
                  defaultMessage: `Remove failed upload {fileName}`,
                  description: `Accessible label for the button that removes a failed file from the floating Library upload progress panel without deleting any existing Library file. fileName is the name of the failed upload`,
                },
                { fileName: o.fileName },
              ),
              color: `ghostSecondary`,
              size: `iconMd`,
              onClick: () => s(o.id),
              children: (0, K.jsx)(a, { asset: i }),
            })
          : null),
      (r[33] = f),
      (r[34] = o.fileName),
      (r[35] = o.id),
      (r[36] = o.status),
      (r[37] = s),
      (r[38] = C))
    : (C = r[38]);
  let w;
  return (
    r[39] !== h || r[40] !== x || r[41] !== S || r[42] !== C
      ? ((w = (0, K.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-3 border-b border-default px-4 py-3 last:border-b-0`,
          role: `listitem`,
          children: [h, x, S, C],
        })),
        (r[39] = h),
        (r[40] = x),
        (r[41] = S),
        (r[42] = C),
        (r[43] = w))
      : (w = r[43]),
    w
  );
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = m()), x(), O(), f(), (G = o()), _(), y(), p(), g(), h(), S(), (K = u()));
  }))();
}
function le() {
  let e = (0, Y.c)(12),
    t = r(I),
    n = (0, X.useContext)(P)?.shellElement,
    i = C(re),
    a,
    o,
    s;
  e[0] === t
    ? ((a = e[1]), (o = e[2]), (s = e[3]))
    : ((a = () => U(t)),
      (o = (e) => U(t, e)),
      (s = (e) => void H(t, e)),
      (e[0] = t),
      (e[1] = a),
      (e[2] = o),
      (e[3] = s));
  let c;
  e[4] !== a || e[5] !== o || e[6] !== s || e[7] !== i
    ? ((c = (0, Q.jsx)(ie, { items: i, onClose: a, onRemove: o, onRetry: s })),
      (e[4] = a),
      (e[5] = o),
      (e[6] = s),
      (e[7] = i),
      (e[8] = c))
    : (c = e[8]);
  let l = c,
    u;
  return (
    e[9] !== l || e[10] !== n
      ? ((u = n == null ? l : (0, Z.createPortal)(l, n)), (e[9] = l), (e[10] = n), (e[11] = u))
      : (u = e[11]),
    u
  );
}
function ue(e) {
  let t = (0, Y.c)(12),
    { children: n } = e,
    i = r(L),
    a = C(ne),
    [o, s] = (0, X.useState)(!1),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = []), (t[0] = c)) : (c = t[0]);
  let l = (0, X.useRef)(c),
    u;
  t[1] !== a || t[2] !== i
    ? ((u = (e) => {
        if (
          N(e.dataTransfer) &&
          (e.preventDefault(),
          e.target instanceof Node &&
            e.currentTarget.contains(e.target) &&
            (e.stopPropagation(),
            e.type === `dragenter` ? l.current.push(e.target) : e.type === `drop` && (l.current = []),
            (e.dataTransfer.dropEffect = a ? `copy` : `none`),
            s(a && e.type !== `drop`),
            a && e.type === `drop`))
        ) {
          let t = A(e.dataTransfer).filter(fe).map(de);
          B(i, t);
        }
      }),
      (t[1] = a),
      (t[2] = i),
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
  t[5] !== a || t[6] !== o
    ? ((p = o && a && (0, Z.createPortal)((0, Q.jsx)(J, {}), document.body)),
      (t[5] = a),
      (t[6] = o),
      (t[7] = p))
    : (p = t[7]);
  let m;
  return (
    t[8] !== n || t[9] !== d || t[10] !== p
      ? ((m = (0, Q.jsxs)(`div`, {
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
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
function de(e) {
  let { file: t } = e;
  return t;
}
function fe(e) {
  let { isDirectory: t } = e;
  return !t;
}
function J() {
  let e = (0, Y.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Q.jsx)(z, { "aria-hidden": !0, focusable: `false` })), (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Q.jsx)(`h3`, {
        className: `text-2xl font-semibold`,
        children: (0, Q.jsx)(E, {
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
      ? ((r = (0, Q.jsxs)(`div`, {
          className: `pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 bg-surface/80 text-default select-none`,
          inert: !0,
          children: [
            t,
            n,
            (0, Q.jsx)(`h4`, {
              className: `w-2/3 text-center text-base font-normal`,
              children: (0, Q.jsx)(E, {
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
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = m()), b(), (X = o()), (Z = s()), _(), F(), k(), M(), j(), te(), V(), R(), q(), (Q = u()));
  }))();
}
export { $ as i, ue as n, le as r, J as t };
//# sourceMappingURL=library-uploads-5d8eede17fb4.js.map
