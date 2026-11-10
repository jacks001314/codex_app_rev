const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./version-preview-e30a8ba9285e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./snapshot-26295b9b71a7.js",
      "./document-2523b236390c.js",
      "./presentation-20e3999371ab.js",
      "./spreadsheet-f01a044561f7.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  Bst as i,
  F3 as a,
  FBt as o,
  HO as s,
  I3 as c,
  IO as l,
  JO as u,
  LNt as d,
  Mst as f,
  OFt as p,
  PBt as m,
  Qst as h,
  RO as g,
  WO as _,
  XOt as v,
  Y3 as y,
  Z3 as b,
  ZSt as x,
  e6 as S,
  jst as C,
  kFt as w,
  okt as T,
  qO as ee,
  tkt as E,
  zst as te,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  D7 as D,
  FXr as O,
  Jh as k,
  O7 as A,
  P6 as j,
  R6 as ne,
  SRn as re,
  X6 as ie,
  Z6 as ae,
  bRn as oe,
  cZr as se,
  lDn as ce,
  qh as le,
  sDn as ue,
  vh as M,
  xXr as N,
  yh as P,
} from "./app-initial-ad16eaadf81f.js";
import { n as F, t as I } from "./writing-block-theme-61c0ed2a12ed.js";
import { n as L, t as R } from "./writing-block-editor-styles-90146127a9c9.js";
import { n as z, t as B } from "./checkboxes-894c9e9cf353.js";
import { O as V, k as H, n as U, t as W } from "./preview-3690797c434b.js";
import { n as de, t as fe } from "./editor.module-9d0afa74ff72.js";
import { i as pe, n as me, r as he, t as ge } from "./images-8ae6089f5332.js";
import { n as _e, t as ve } from "./checkpoint-99fd81089ab5.js";
function ye(e) {
  let t = (0, G.c)(33),
    { update: r, pageId: i } = e,
    a = n(h),
    o = T(),
    s = (0, K.useId)(),
    c;
  t[0] === s ? (c = t[1]) : ((c = () => new V(s)), (t[0] = s), (t[1] = c));
  let [l] = (0, K.useState)(c),
    [u] = (0, K.useState)(Se),
    [d] = (0, K.useState)(xe),
    f;
  t[2] === r ? (f = t[3]) : ((f = () => Ce(r)), (t[2] = r), (t[3] = f));
  let [p] = (0, K.useState)(f);
  if (p == null) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(`p`, {
            role: `alert`,
            children: (0, q.jsx)(E, {
              id: `codex.page.versions.invalidDocument`,
              defaultMessage: `This version could not be displayed`,
              description: `Error when saved Page content is not a valid document`,
            }),
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let m, g;
  t[5] !== o.formatMessage || t[6] !== p.units
    ? ((m = ie(o.formatMessage)),
      (g = j(m.parse(``), p.units, m)),
      (t[5] = o.formatMessage),
      (t[6] = p.units),
      (t[7] = m),
      (t[8] = g))
    : ((m = t[7]), (g = t[8]));
  let _ = g,
    v;
  t[9] === p.title
    ? (v = t[10])
    : ((v = (0, q.jsx)(`h1`, { className: `text-xl font-semibold`, children: p.title })),
      (t[9] = p.title),
      (t[10] = v));
  let y;
  t[11] !== l ||
  t[12] !== _ ||
  t[13] !== u ||
  t[14] !== o ||
  t[15] !== m ||
  t[16] !== d ||
  t[17] !== i ||
  t[18] !== a
    ? ((y = (0, q.jsx)(`div`, {
        ref: (e) => {
          if (e == null) return;
          let t = W(e, _, {
            pageLinks: { scope: a, pageId: i, intl: o, icons: d },
            checkboxes: l,
            onOpenLink: be,
            plugins: [d.createPlugin(m.schema()), u.plugin],
          });
          return () => t.destroy();
        },
        className: `${L.root} px-0`,
        style: F,
      })),
      (t[11] = l),
      (t[12] = _),
      (t[13] = u),
      (t[14] = o),
      (t[15] = m),
      (t[16] = d),
      (t[17] = i),
      (t[18] = a),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] === l ? (b = t[21]) : ((b = (0, q.jsx)(B, { editable: !1, registry: l })), (t[20] = l), (t[21] = b));
  let x;
  t[22] === d ? (x = t[23]) : ((x = (0, q.jsx)(M, { registry: d })), (t[22] = d), (t[23] = x));
  let S;
  t[24] !== u || t[25] !== i
    ? ((S = (0, q.jsx)(ge, { pageId: i, registry: u })), (t[24] = u), (t[25] = i), (t[26] = S))
    : (S = t[26]);
  let C;
  return (
    t[27] !== v || t[28] !== y || t[29] !== b || t[30] !== x || t[31] !== S
      ? ((C = (0, q.jsxs)(`div`, {
          className: `${fe.PageDocumentTheme} flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-panel`,
          children: [v, y, b, x, S],
        })),
        (t[27] = v),
        (t[28] = y),
        (t[29] = b),
        (t[30] = x),
        (t[31] = S),
        (t[32] = C))
      : (C = t[32]),
    C
  );
}
function be(e, t) {
  re({ event: e, href: t, initiator: `markdown_link_click`, openTarget: `external-browser` });
}
function xe() {
  return new le();
}
function Se() {
  return new he();
}
function Ce(e) {
  let t = new N();
  try {
    return (O(t, e), A(t));
  } catch {
    return null;
  } finally {
    t.destroy();
  }
}
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = m()),
      R(),
      I(),
      x(),
      (K = o()),
      v(),
      se(),
      oe(),
      P(),
      k(),
      D(),
      z(),
      H(),
      ne(),
      ae(),
      U(),
      pe(),
      me(),
      r(),
      de(),
      (q = d()));
  }))();
}
function we(e) {
  let n = (0, X.c)(40),
    { accountId: r, pageId: i, selection: a, streamKind: o, documentType: s, onClose: c } = e,
    u = a.kind === `checkpoint` ? a.checkpointId : `current`,
    d;
  n[0] !== r || n[1] !== i || n[2] !== o || n[3] !== u
    ? ((d = [`space`, `page-version-content`, r, i, o, u]),
      (n[0] = r),
      (n[1] = i),
      (n[2] = o),
      (n[3] = u),
      (n[4] = d))
    : (d = n[4]);
  let p = a.kind === `checkpoint`,
    m;
  n[5] !== i || n[6] !== a.checkpointId || n[7] !== a.kind || n[8] !== o
    ? ((m = (e) => {
        let { signal: t } = e;
        if (a.kind !== `checkpoint`) throw Error(`No checkpoint selected`);
        return ve({ pageId: i, checkpointId: a.checkpointId, streamKind: o, signal: t });
      }),
      (n[5] = i),
      (n[6] = a.checkpointId),
      (n[7] = a.kind),
      (n[8] = o),
      (n[9] = m))
    : (m = n[9]);
  let h;
  n[10] !== d || n[11] !== p || n[12] !== m
    ? ((h = { queryKey: d, enabled: p, queryFn: m, staleTime: 1 / 0, gcTime: te.FIVE_MINUTES, retry: !1 }),
      (n[10] = d),
      (n[11] = p),
      (n[12] = m),
      (n[13] = h))
    : (h = n[13]);
  let { data: v, isPending: y, isError: b, refetch: x } = f(h),
    S = a.kind === `current` ? a.update : v,
    C;
  n[14] === c
    ? (C = n[15])
    : ((C = (e) => {
        e || c();
      }),
      (n[14] = c),
      (n[15] = C));
  let w;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { "aria-describedby": void 0 }), (n[16] = w))
    : (w = n[16]);
  let T;
  n[17] !== a.kind || n[18] !== a.sequence
    ? ((T = (0, Z.jsx)(g, {
        title: (0, Z.jsx)(ee, {
          className: `contents`,
          children:
            a.kind === `current`
              ? (0, Z.jsx)(E, {
                  id: `codex.page.versions.current`,
                  defaultMessage: `Current version`,
                  description: `The current live Page document captured when its version preview was opened`,
                })
              : (0, Z.jsx)(E, {
                  id: `codex.page.versions.checkpoint`,
                  defaultMessage: `Checkpoint #{sequence}`,
                  description: `Saved Page checkpoint identified by its document sequence number`,
                  values: { sequence: a.sequence },
                }),
        }),
      })),
      (n[17] = a.kind),
      (n[18] = a.sequence),
      (n[19] = T))
    : (T = n[19]);
  let D;
  n[20] !== s || n[21] !== c || n[22] !== i || n[23] !== S
    ? ((D =
        S == null
          ? null
          : (0, Z.jsxs)(ue, {
              name: `PageVersionPreview`,
              fallback: Te,
              children: [
                s === `page` ? (0, Z.jsx)(ye, { pageId: i, update: S }) : null,
                s !== `page` && s !== `unsupported`
                  ? (0, Z.jsx)(Q, { pageId: i, update: S, documentType: s })
                  : null,
                s === `unsupported` ? (0, Z.jsx)(Y, { onRetry: c }) : null,
              ],
            })),
      (n[20] = s),
      (n[21] = c),
      (n[22] = i),
      (n[23] = S),
      (n[24] = D))
    : (D = n[24]);
  let O;
  n[25] !== b || n[26] !== x || n[27] !== S
    ? ((O =
        S == null && b
          ? (0, Z.jsx)(Y, {
              onRetry: () => {
                x();
              },
            })
          : null),
      (n[25] = b),
      (n[26] = x),
      (n[27] = S),
      (n[28] = O))
    : (O = n[28]);
  let k;
  n[29] !== y || n[30] !== S
    ? ((k =
        S == null && y
          ? (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-codex-description`,
              role: `status`,
              children: [
                (0, Z.jsx)(t, { className: `icon-xs` }),
                (0, Z.jsx)(E, {
                  id: `codex.page.versions.loadingPreview`,
                  defaultMessage: `Loading version…`,
                  description: `Status while downloading and verifying a historical Page checkpoint`,
                }),
              ],
            })
          : null),
      (n[29] = y),
      (n[30] = S),
      (n[31] = k))
    : (k = n[31]);
  let A;
  n[32] !== O || n[33] !== k || n[34] !== T || n[35] !== D
    ? ((A = (0, Z.jsxs)(l, { size: `full`, children: [T, D, O, k] })),
      (n[32] = O),
      (n[33] = k),
      (n[34] = T),
      (n[35] = D),
      (n[36] = A))
    : (A = n[36]);
  let j;
  return (
    n[37] !== A || n[38] !== C
      ? ((j = (0, Z.jsx)(_, {
          open: !0,
          size: `xxxwideTall`,
          onOpenChange: C,
          contentProps: w,
          children: A,
        })),
        (n[37] = A),
        (n[38] = C),
        (n[39] = j))
      : (j = n[39]),
    j
  );
}
function Te(e) {
  return (0, Z.jsx)(Y, { onRetry: () => e.resetError() });
}
function Y(e) {
  let t = (0, X.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(E, {
        id: `codex.page.versions.previewError`,
        defaultMessage: `Could not load this version`,
        description: `Error when a saved Page checkpoint is unavailable or cannot be verified`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(E, {
        id: `codex.page.versions.retry`,
        defaultMessage: `Try again`,
        description: `Retry loading Page version history or a historical checkpoint after a failure`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3`,
          role: `alert`,
          children: [r, (0, Z.jsx)(y, { color: `secondary`, size: `compact`, onClick: n, children: i })],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = m()),
      C(),
      v(),
      b(),
      u(),
      s(),
      ce(),
      a(),
      S(),
      i(),
      _e(),
      J(),
      (Z = d()),
      w(),
      (Q = c(
        async () =>
          (
            await p(
              async () => {
                let { NativePageVersionPreview: e } = await import(`./version-preview-e30a8ba9285e.js`);
                return { NativePageVersionPreview: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
              import.meta.url,
            )
          ).NativePageVersionPreview,
        {
          fallback: (0, Z.jsx)(`span`, {
            role: `status`,
            children: (0, Z.jsx)(E, {
              id: `codex.page.versions.loadingPreview`,
              defaultMessage: `Loading version…`,
              description: `Status while downloading and verifying a historical Page checkpoint`,
            }),
          }),
          errorFallback: ({ documentType: e }) =>
            (0, Z.jsx)(`span`, {
              role: `alert`,
              children: (0, Z.jsx)(E, {
                id: `codex.page.versions.nativeLoadError.byDocumentType`,
                values: { documentType: e },
                defaultMessage: `{documentType, select, granola_presentation {Could not open this preview. Reopen the slide to try again} granola_workbook {Could not open this preview. Reopen the sheet to try again} other {Could not open this preview. Reopen the page to try again}}`,
                description: `Error when the native version preview interface could not be loaded. documentType selects slide, sheet, or page for the current document.`,
              }),
            }),
        },
      )));
  }))();
}
$();
export { we as PageVersionDialog };
//# sourceMappingURL=dialog-dc5e14b02beb.js.map
