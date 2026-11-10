const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./version-preview-abce65fc65e1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./snapshot-7d3edd47ebe2.js",
      "./document-c6f04e376b44.js",
      "./presentation-c2faa0e77c2e.js",
      "./spreadsheet-b1cd26f1820c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  Cot as r,
  Fat as i,
  IDt as a,
  Ixt as o,
  Pat as s,
  Pxt as c,
  VDt as l,
  Xot as u,
  Yot as d,
  _O as f,
  cO as p,
  fO as m,
  fPt as h,
  i3 as g,
  jDt as _,
  mO as v,
  oO as y,
  pPt as b,
  r3 as x,
  t3 as S,
  vO as C,
  vzt as w,
  wot as T,
  xMt as E,
  yzt as D,
  z4 as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  $m as k,
  D3 as A,
  DGr as j,
  Dh as M,
  HCn as ee,
  JPn as N,
  O3 as te,
  Oh as ne,
  Qm as re,
  VGr as ie,
  WCn as ae,
  XPn as oe,
  a5 as se,
  d3 as ce,
  h3 as le,
  i5 as ue,
  mKr as P,
} from "./app-initial-5851df3f6cb1.js";
import { n as F, t as I } from "./writing-block-theme-61c0ed2a12ed.js";
import { n as L, t as R } from "./writing-block-editor-styles-90146127a9c9.js";
import { n as z, t as B } from "./checkboxes-e2ffcb23d363.js";
import { O as V, k as H, n as U, t as de } from "./preview-3e5329112556.js";
import { n as fe, t as pe } from "./editor.module-79b8a30b4fbe.js";
import { i as me, n as he, r as ge, t as _e } from "./images-7c1b1f09d7e2.js";
import { n as ve, t as ye } from "./checkpoint-1ecd1fe25b9c.js";
function be(e) {
  let t = (0, W.c)(33),
    { update: n, pageId: i } = e,
    s = o(r),
    c = l(),
    u = (0, G.useId)(),
    d;
  t[0] === u ? (d = t[1]) : ((d = () => new V(u)), (t[0] = u), (t[1] = d));
  let [f] = (0, G.useState)(d),
    [p] = (0, G.useState)(Ce),
    [m] = (0, G.useState)(Se),
    h;
  t[2] === n ? (h = t[3]) : ((h = () => we(n)), (t[2] = n), (t[3] = h));
  let [g] = (0, G.useState)(h);
  if (g == null) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(`p`, {
            role: `alert`,
            children: (0, K.jsx)(a, {
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
  let _, v;
  t[5] !== c.formatMessage || t[6] !== g.units
    ? ((_ = A(c.formatMessage)),
      (v = ce(_.parse(``), g.units, _)),
      (t[5] = c.formatMessage),
      (t[6] = g.units),
      (t[7] = _),
      (t[8] = v))
    : ((_ = t[7]), (v = t[8]));
  let y = v,
    b;
  t[9] === g.title
    ? (b = t[10])
    : ((b = (0, K.jsx)(`h1`, { className: `text-xl font-semibold`, children: g.title })),
      (t[9] = g.title),
      (t[10] = b));
  let x;
  t[11] !== f ||
  t[12] !== y ||
  t[13] !== p ||
  t[14] !== c ||
  t[15] !== _ ||
  t[16] !== m ||
  t[17] !== i ||
  t[18] !== s
    ? ((x = (0, K.jsx)(`div`, {
        ref: (e) => {
          if (e == null) return;
          let t = de(e, y, {
            pageLinks: { scope: s, pageId: i, intl: c, icons: m },
            checkboxes: f,
            onOpenLink: xe,
            plugins: [m.createPlugin(_.schema()), p.plugin],
          });
          return () => t.destroy();
        },
        className: `${L.root} px-0`,
        style: F,
      })),
      (t[11] = f),
      (t[12] = y),
      (t[13] = p),
      (t[14] = c),
      (t[15] = _),
      (t[16] = m),
      (t[17] = i),
      (t[18] = s),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] === f ? (S = t[21]) : ((S = (0, K.jsx)(B, { editable: !1, registry: f })), (t[20] = f), (t[21] = S));
  let C;
  t[22] === m ? (C = t[23]) : ((C = (0, K.jsx)(re, { registry: m })), (t[22] = m), (t[23] = C));
  let w;
  t[24] !== p || t[25] !== i
    ? ((w = (0, K.jsx)(_e, { pageId: i, registry: p })), (t[24] = p), (t[25] = i), (t[26] = w))
    : (w = t[26]);
  let T;
  return (
    t[27] !== b || t[28] !== x || t[29] !== S || t[30] !== C || t[31] !== w
      ? ((T = (0, K.jsxs)(`div`, {
          className: `${pe.PageDocumentTheme} flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-panel`,
          children: [b, x, S, C, w],
        })),
        (t[27] = b),
        (t[28] = x),
        (t[29] = S),
        (t[30] = C),
        (t[31] = w),
        (t[32] = T))
      : (T = t[32]),
    T
  );
}
function xe(e, t) {
  oe({ event: e, href: t, initiator: `markdown_link_click`, openTarget: `external-browser` });
}
function Se() {
  return new M();
}
function Ce() {
  return new ge();
}
function we(e) {
  let t = new j();
  try {
    return (ie(t, e), se(t));
  } catch {
    return null;
  } finally {
    t.destroy();
  }
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = w()),
      R(),
      I(),
      c(),
      (G = D()),
      _(),
      P(),
      N(),
      k(),
      ne(),
      ue(),
      z(),
      H(),
      le(),
      te(),
      U(),
      me(),
      he(),
      T(),
      fe(),
      (K = E()));
  }))();
}
function Te(e) {
  let t = (0, X.c)(40),
    { accountId: n, pageId: r, selection: i, streamKind: o, documentType: c, onClose: l } = e,
    d = i.kind === `checkpoint` ? i.checkpointId : `current`,
    m;
  t[0] !== n || t[1] !== r || t[2] !== o || t[3] !== d
    ? ((m = [`space`, `page-version-content`, n, r, o, d]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = d),
      (t[4] = m))
    : (m = t[4]);
  let h = i.kind === `checkpoint`,
    g;
  t[5] !== r || t[6] !== i.checkpointId || t[7] !== i.kind || t[8] !== o
    ? ((g = (e) => {
        let { signal: t } = e;
        if (i.kind !== `checkpoint`) throw Error(`No checkpoint selected`);
        return ye({ pageId: r, checkpointId: i.checkpointId, streamKind: o, signal: t });
      }),
      (t[5] = r),
      (t[6] = i.checkpointId),
      (t[7] = i.kind),
      (t[8] = o),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== m || t[11] !== h || t[12] !== g
    ? ((_ = { queryKey: m, enabled: h, queryFn: g, staleTime: 1 / 0, gcTime: s.FIVE_MINUTES, retry: !1 }),
      (t[10] = m),
      (t[11] = h),
      (t[12] = g),
      (t[13] = _))
    : (_ = t[13]);
  let { data: b, isPending: S, isError: C, refetch: w } = u(_),
    T = i.kind === `current` ? i.update : b,
    E;
  t[14] === l
    ? (E = t[15])
    : ((E = (e) => {
        e || l();
      }),
      (t[14] = l),
      (t[15] = E));
  let D;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { "aria-describedby": void 0 }), (t[16] = D))
    : (D = t[16]);
  let O;
  t[17] !== i.kind || t[18] !== i.sequence
    ? ((O = (0, Z.jsx)(p, {
        title: (0, Z.jsx)(f, {
          className: `contents`,
          children:
            i.kind === `current`
              ? (0, Z.jsx)(a, {
                  id: `codex.page.versions.current`,
                  defaultMessage: `Current version`,
                  description: `The current live Page document captured when its version preview was opened`,
                })
              : (0, Z.jsx)(a, {
                  id: `codex.page.versions.checkpoint`,
                  defaultMessage: `Checkpoint #{sequence}`,
                  description: `Saved Page checkpoint identified by its document sequence number`,
                  values: { sequence: i.sequence },
                }),
        }),
      })),
      (t[17] = i.kind),
      (t[18] = i.sequence),
      (t[19] = O))
    : (O = t[19]);
  let k;
  t[20] !== c || t[21] !== l || t[22] !== r || t[23] !== T
    ? ((k =
        T == null
          ? null
          : (0, Z.jsxs)(ee, {
              name: `PageVersionPreview`,
              fallback: J,
              children: [
                c === `page` ? (0, Z.jsx)(be, { pageId: r, update: T }) : null,
                c !== `page` && c !== `unsupported`
                  ? (0, Z.jsx)(Q, { pageId: r, update: T, documentType: c })
                  : null,
                c === `unsupported` ? (0, Z.jsx)(Y, { onRetry: l }) : null,
              ],
            })),
      (t[20] = c),
      (t[21] = l),
      (t[22] = r),
      (t[23] = T),
      (t[24] = k))
    : (k = t[24]);
  let A;
  t[25] !== C || t[26] !== w || t[27] !== T
    ? ((A =
        T == null && C
          ? (0, Z.jsx)(Y, {
              onRetry: () => {
                w();
              },
            })
          : null),
      (t[25] = C),
      (t[26] = w),
      (t[27] = T),
      (t[28] = A))
    : (A = t[28]);
  let j;
  t[29] !== S || t[30] !== T
    ? ((j =
        T == null && S
          ? (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-codex-description`,
              role: `status`,
              children: [
                (0, Z.jsx)(x, { className: `icon-xs` }),
                (0, Z.jsx)(a, {
                  id: `codex.page.versions.loadingPreview`,
                  defaultMessage: `Loading version…`,
                  description: `Status while downloading and verifying a historical Page checkpoint`,
                }),
              ],
            })
          : null),
      (t[29] = S),
      (t[30] = T),
      (t[31] = j))
    : (j = t[31]);
  let M;
  t[32] !== A || t[33] !== j || t[34] !== O || t[35] !== k
    ? ((M = (0, Z.jsxs)(y, { size: `full`, children: [O, k, A, j] })),
      (t[32] = A),
      (t[33] = j),
      (t[34] = O),
      (t[35] = k),
      (t[36] = M))
    : (M = t[36]);
  let N;
  return (
    t[37] !== M || t[38] !== E
      ? ((N = (0, Z.jsx)(v, {
          open: !0,
          size: `xxxwideTall`,
          onOpenChange: E,
          contentProps: D,
          children: M,
        })),
        (t[37] = M),
        (t[38] = E),
        (t[39] = N))
      : (N = t[39]),
    N
  );
}
function J(e) {
  return (0, Z.jsx)(Y, { onRetry: () => e.resetError() });
}
function Y(e) {
  let n = (0, X.c)(4),
    { onRetry: r } = e,
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(a, {
        id: `codex.page.versions.previewError`,
        defaultMessage: `Could not load this version`,
        description: `Error when a saved Page checkpoint is unavailable or cannot be verified`,
      })),
      (n[0] = i))
    : (i = n[0]);
  let o;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(a, {
        id: `codex.page.versions.retry`,
        defaultMessage: `Try again`,
        description: `Retry loading Page version history or a historical checkpoint after a failure`,
      })),
      (n[1] = o))
    : (o = n[1]);
  let s;
  return (
    n[2] === r
      ? (s = n[3])
      : ((s = (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3`,
          role: `alert`,
          children: [i, (0, Z.jsx)(t, { color: `secondary`, size: `compact`, onClick: r, children: o })],
        })),
        (n[2] = r),
        (n[3] = s)),
    s
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = w()),
      d(),
      _(),
      S(),
      C(),
      m(),
      ae(),
      O(),
      g(),
      i(),
      ve(),
      q(),
      (Z = E()),
      b(),
      (Q = n(
        async () =>
          (
            await h(
              async () => {
                let { NativePageVersionPreview: e } = await import(`./version-preview-abce65fc65e1.js`);
                return { NativePageVersionPreview: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
              import.meta.url,
            )
          ).NativePageVersionPreview,
        {
          fallback: (0, Z.jsx)(`span`, {
            role: `status`,
            children: (0, Z.jsx)(a, {
              id: `codex.page.versions.loadingPreview`,
              defaultMessage: `Loading version…`,
              description: `Status while downloading and verifying a historical Page checkpoint`,
            }),
          }),
          errorFallback: ({ documentType: e }) =>
            (0, Z.jsx)(`span`, {
              role: `alert`,
              children: (0, Z.jsx)(a, {
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
export { Te as PageVersionDialog };
//# sourceMappingURL=dialog-b0c94bbe938a.js.map
