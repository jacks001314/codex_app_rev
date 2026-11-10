const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./docx-preview-panel-7d038fc9f715.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
      "./app-primary-4c40d73a1074.js",
      "./app-primary-d815831c9bad.css",
      "./presentation-annotation-cursor-coachmark-ede276f159dd.js",
      "./artifact-originating-turn-1d99e170e424.js",
      "./artifact-preview-header-abbff5f8a3ae.js",
      "./github-file-url-de7160c14b01.js",
      "./use-target-apps-964e2197265b.js",
      "./codex-analytics-attribution-fe4d0bf2f484.js",
      "./artifact-annotation-batch-controls-b9f12cd27bf6.js",
      "./artifact-preview-status-ce3d7c794ec8.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AJ as r,
  AMt as i,
  Amn as a,
  B4t as o,
  B6t as s,
  BO as c,
  CQ as l,
  Cit as u,
  Cpn as d,
  Cyt as f,
  Dmt as p,
  F3t as m,
  GV as h,
  H4t as g,
  I3t as _,
  IXt as v,
  JXt as y,
  KIt as b,
  KL as x,
  KV as S,
  KYt as C,
  LX as w,
  MMt as T,
  N3t as E,
  O3t as ee,
  OW as D,
  Opn as te,
  RX as O,
  Rpn as ne,
  S3t as re,
  Spn as ie,
  Syt as ae,
  TJt as oe,
  U3t as k,
  _Mt as se,
  _Q as A,
  _Rt as j,
  _mn as M,
  a3t as N,
  aYt as ce,
  bI as le,
  e4t as P,
  f5t as F,
  fxt as I,
  gMt as L,
  gRt as ue,
  gmn as R,
  hMt as de,
  hmn as z,
  hz as fe,
  i3t as pe,
  jJ as me,
  jMt as he,
  jXt as ge,
  kMt as B,
  kW as V,
  kXt as H,
  kmn as U,
  kmt as _e,
  lW as W,
  mxt as G,
  mz as K,
  nI as ve,
  nR as ye,
  o3t as be,
  oI as xe,
  qIt as Se,
  qL as Ce,
  r3t as we,
  s3t as Te,
  sW as Ee,
  sYt as De,
  tR as Oe,
  vMt as ke,
  wJt as Ae,
  xI as je,
  xRt as Me,
  xit as Ne,
  zJ as Pe,
  zO as Fe,
  zpn as Ie,
} from "./app-initial-f094ef01c64d.js";
import {
  Ao as Le,
  Do as Re,
  Ji as ze,
  L as Be,
  Oo as Ve,
  R as He,
  ao as Ue,
  bE as We,
  d as Ge,
  f as Ke,
  fs as qe,
  gC as Je,
  gn as Ye,
  jo as Xe,
  lo as Ze,
  no as Qe,
  ps as $e,
  qi as et,
  so as tt,
  to as nt,
  vC as rt,
  vE as it,
  vn as at,
} from "./app-primary-4c40d73a1074.js";
import {
  a as ot,
  i as st,
  o as ct,
  r as lt,
  s as ut,
  t as dt,
} from "./artifact-tab-content.electron-f96c26739383.js";
import { p as ft } from "./pdf-dc559eb66b2a.js";
import { n as pt, t as mt } from "./artifact-tab-content-shell-4199cd330d98.js";
import { i as ht, n as gt, r as _t } from "./surface-572ba2609efa.js";
import { n as vt, t as yt } from "./right-panel-composer-overlay-7bbacd6f9f94.js";
import { n as bt, t as xt } from "./use-chatgpt-composer-controller-f59d12db17ed.js";
import { i as St, n as Ct, r as wt, t as Tt } from "./library-file-preview-kind-2b10eb692a6f.js";
import {
  a as Et,
  i as Dt,
  n as Ot,
  r as kt,
  t as At,
} from "./library-file-download-379f2e28fa84.js";
import {
  a as jt,
  c as Mt,
  i as Nt,
  n as Pt,
  o as Ft,
  r as It,
  t as Lt,
} from "./use-pdf-pager-4c5c1a42c12a.js";
function Rt(e) {
  return { fsPath: e.path, label: e.name, path: e.path };
}
async function zt(e, t, n) {
  let r = await e.prepareFilePreview({ sourcePath: t });
  return n.aborted ? (await e.releaseFilePreview(r), n.throwIfAborted(), r) : r;
}
var Bt = e(() => {});
function Vt(e) {
  let t = (0, Kt.c)(32),
    { cloudPreviewRenderer: n, item: r, onClose: i } = e,
    a;
  a = r.kind === `cloud-file` ? r.cloudFile.name : r.kind === `file` ? r.file.name : r.image.name;
  let o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, q.jsx)(D, {
        className: `h-full`,
        children: (0, q.jsx)(d, {
          id: `appgenPage.cloudFilePreview.unavailable`,
          defaultMessage: `This file can't be previewed`,
          description: `Message shown when a Library file preview is unavailable`,
        }),
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] !== a || t[2] !== i
    ? ((s = (0, q.jsx)(Gt, { assetName: a, onClose: i, children: o })),
      (t[1] = a),
      (t[2] = i),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l;
  if (r.kind === `file`) {
    let e;
    (t[4] !== r || t[5] !== i
      ? ((e = (0, q.jsx)(Ut, { item: r, onClose: i })), (t[4] = r), (t[5] = i), (t[6] = e))
      : (e = t[6]),
      (l = e));
  } else if (r.kind === `cloud-file`) {
    let e;
    (t[7] !== n || t[8] !== c || t[9] !== r || t[10] !== i
      ? ((e = n?.({ item: r, onClose: i }) ?? c),
        (t[7] = n),
        (t[8] = c),
        (t[9] = r),
        (t[10] = i),
        (t[11] = e))
      : (e = t[11]),
      (l = e));
  } else {
    let e = r.image.name,
      n = r.image.name,
      a = r.image.path,
      o = r.image.path,
      s;
    t[12] === r.image.desktopPath
      ? (s = t[13])
      : ((s = ae(r.image.desktopPath)), (t[12] = r.image.desktopPath), (t[13] = s));
    let c;
    t[14] !== r.image.name || t[15] !== r.image.path || t[16] !== s
      ? ((c = { image: { filename: n, id: a, localPath: o, src: s }, kind: `image` }),
        (t[14] = r.image.name),
        (t[15] = r.image.path),
        (t[16] = s),
        (t[17] = c))
      : (c = t[17]);
    let u = r.image.name,
      d;
    t[18] === r.image.desktopPath
      ? (d = t[19])
      : ((d = ae(r.image.desktopPath)), (t[18] = r.image.desktopPath), (t[19] = d));
    let f;
    t[20] !== r.image.name || t[21] !== d
      ? ((f = (0, q.jsx)(h, {
          alt: u,
          inline: !0,
          open: !0,
          src: d,
          zoomControlsPlacement: `header`,
          onOpenChange: Ht,
        })),
        (t[20] = r.image.name),
        (t[21] = d),
        (t[22] = f))
      : (f = t[22]);
    let p;
    (t[23] !== r.image.name || t[24] !== i || t[25] !== f || t[26] !== c
      ? ((p = (0, q.jsx)(Wt, { assetName: e, previewAttachment: c, onClose: i, children: f })),
        (t[23] = r.image.name),
        (t[24] = i),
        (t[25] = f),
        (t[26] = c),
        (t[27] = p))
      : (p = t[27]),
      (l = p));
  }
  let u;
  return (
    t[28] !== l || t[29] !== c || t[30] !== r.id
      ? ((u = (0, q.jsx)(x, {
          name: `LibraryFilePreview`,
          resetKey: r.id,
          fallback: c,
          children: l,
        })),
        (t[28] = l),
        (t[29] = c),
        (t[30] = r.id),
        (t[31] = u))
      : (u = t[31]),
    u
  );
}
function Ht() {}
function Ut(e) {
  let t = (0, Kt.c)(21),
    { item: n, onClose: r } = e,
    { data: i, isError: a } = E(Jt, n.file.path),
    o = i?.previewPath,
    s,
    c;
  (t[0] === o
    ? ((s = t[1]), (c = t[2]))
    : ((s = () => {
        if (o != null)
          return () => {
            K.libraryFiles?.releaseFilePreview({ previewPath: o });
          };
      }),
      (c = [o]),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c)),
    (0, qt.useEffect)(s, c));
  let l;
  t[3] === n.file.path ? (l = t[4]) : ((l = b(n.file.path)), (t[3] = n.file.path), (t[4] = l));
  let u = l,
    f;
  if (a) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(D, {
          className: `h-full`,
          children: (0, q.jsx)(d, {
            id: `appgenPage.filePreview.unavailable`,
            defaultMessage: `This file is unavailable`,
            description: `Message shown when a Library file can't be read securely for preview`,
          }),
        })),
        (t[5] = e))
      : (e = t[5]),
      (f = e));
  } else if (o == null) {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(D, {
          className: `h-full`,
          children: (0, q.jsx)(d, {
            id: `appgenPage.filePreview.loading`,
            defaultMessage: `Loading preview…`,
            description: `Loading message shown while preparing a Library file preview`,
          }),
        })),
        (t[6] = e))
      : (e = t[6]),
      (f = e));
  } else if (u == null) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(D, {
          className: `h-full`,
          children: (0, q.jsx)(d, {
            id: `appgenPage.filePreview.unsupported`,
            defaultMessage: `This file can't be previewed`,
            description: `Message shown when a Library file preview is unavailable`,
          }),
        })),
        (t[7] = e))
      : (e = t[7]),
      (f = e));
  } else {
    let e;
    (t[8] !== n.file.name || t[9] !== u.artifactType || t[10] !== u.importKind || t[11] !== o
      ? ((e = (0, q.jsx)(mt, {
          artifactType: u.artifactType,
          chromeMode: `standalone`,
          hostId: P,
          importKind: u.importKind,
          path: o,
          title: n.file.name,
        })),
        (t[8] = n.file.name),
        (t[9] = u.artifactType),
        (t[10] = u.importKind),
        (t[11] = o),
        (t[12] = e))
      : (e = t[12]),
      (f = e));
  }
  let p;
  t[13] !== n.file || t[14] !== o
    ? ((p = o == null ? void 0 : { file: Rt(n.file), kind: `file` }),
      (t[13] = n.file),
      (t[14] = o),
      (t[15] = p))
    : (p = t[15]);
  let m;
  return (
    t[16] !== f || t[17] !== n.file.name || t[18] !== r || t[19] !== p
      ? ((m = (0, q.jsx)(Wt, {
          assetName: n.file.name,
          previewAttachment: p,
          onClose: r,
          children: f,
        })),
        (t[16] = f),
        (t[17] = n.file.name),
        (t[18] = r),
        (t[19] = p),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function Wt(e) {
  let t = (0, Kt.c)(12),
    { assetName: n, children: i, onClose: a, previewAttachment: o } = e,
    s = te(),
    c = y(),
    l;
  t[0] !== c || t[1] !== a
    ? ((l = (e, t) => {
        (a(), c(F(e), { state: t }));
      }),
      (t[0] = c),
      (t[1] = a),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] !== u || t[4] !== s || t[5] !== o
    ? ((d =
        o == null
          ? null
          : (0, q.jsx)(_, {
              scope: r,
              value: me(o),
              children: (0, q.jsx)(yt, {
                children: (0, q.jsx)(qe, {
                  children: (0, q.jsx)(Be, {
                    composerLayoutMode: `auto-single-line`,
                    composerModeAvailability: it,
                    defaultCwd: `~`,
                    selectedProject: null,
                    hideRunLocationDropdownOverride: !0,
                    onLocalConversationCreated: u,
                    placeholderText: s.formatMessage({
                      id: `appgenPage.filePreview.composerPlaceholder`,
                      defaultMessage: `Ask about this file`,
                      description: `Placeholder for the composer beneath a Library file preview`,
                    }),
                    showWorkspaceDropdownInUtilityBar: !1,
                  }),
                }),
              }),
            })),
      (t[3] = u),
      (t[4] = s),
      (t[5] = o),
      (t[6] = d))
    : (d = t[6]);
  let f;
  return (
    t[7] !== n || t[8] !== i || t[9] !== a || t[10] !== d
      ? ((f = (0, q.jsx)(Gt, { assetName: n, bottomContent: d, onClose: a, children: i })),
        (t[7] = n),
        (t[8] = i),
        (t[9] = a),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function Gt(e) {
  let t = (0, Kt.c)(28),
    { assetName: n, bottomContent: r, children: i, endContent: a, onClose: o } = e,
    s = te(),
    c;
  t[0] === o ? (c = t[1]) : ((c = () => o()), (t[0] = o), (t[1] = c));
  let l = (0, qt.useEffectEvent)(c),
    u;
  t[2] === l
    ? (u = t[3])
    : ((u = () => {
        let e = (e) => {
          e.key === `Escape` &&
            queueMicrotask(() => {
              e.defaultPrevented || l();
            });
        };
        return (
          window.addEventListener(`keydown`, e, { capture: !0 }),
          () => window.removeEventListener(`keydown`, e, { capture: !0 })
        );
      }),
      (t[2] = l),
      (t[3] = u));
  let d;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = []), (t[4] = d)) : (d = t[4]),
    (0, qt.useEffect)(u, d));
  let f;
  t[5] === s
    ? (f = t[6])
    : ((f = s.formatMessage({
        id: `appgenPage.filePreview.close`,
        defaultMessage: `Close preview`,
        description: `Accessible label for closing a Library file preview`,
      })),
      (t[5] = s),
      (t[6] = f));
  let p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, q.jsx)(de, { asset: ke })), (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== o || t[9] !== f
    ? ((m = (0, q.jsx)(B, {
        "aria-label": f,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        onClick: o,
        children: p,
      })),
      (t[8] = o),
      (t[9] = f),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === n
    ? (h = t[12])
    : ((h = (0, q.jsx)(`div`, {
        className: `truncate text-sm font-medium text-default`,
        children: n,
      })),
      (t[11] = n),
      (t[12] = h));
  let g;
  t[13] !== m || t[14] !== h
    ? ((g = (0, q.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [m, h] })),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g))
    : (g = t[15]);
  let _;
  t[16] !== a || t[17] !== g
    ? ((_ = (0, q.jsxs)(`div`, {
        className: `flex h-toolbar shrink-0 items-center justify-between gap-4 border-b border-subtle px-3`,
        children: [g, a],
      })),
      (t[16] = a),
      (t[17] = g),
      (t[18] = _))
    : (_ = t[18]);
  let v = r == null ? `h-full` : `h-[calc(100%_-_var(--right-panel-composer-overlay-reserve,0px))]`,
    y;
  t[19] === v ? (y = t[20]) : ((y = ne(`min-h-0`, v)), (t[19] = v), (t[20] = y));
  let b;
  t[21] !== i || t[22] !== y
    ? ((b = (0, q.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, q.jsx)(`div`, { className: y, children: i }),
      })),
      (t[21] = i),
      (t[22] = y),
      (t[23] = b))
    : (b = t[23]);
  let x;
  return (
    t[24] !== r || t[25] !== b || t[26] !== _
      ? ((x = (0, q.jsxs)(`div`, {
          className: `relative flex h-full min-h-0 flex-col bg-surface`,
          children: [_, b, r],
        })),
        (t[24] = r),
        (t[25] = b),
        (t[26] = _),
        (t[27] = x))
      : (x = t[27]),
    x
  );
}
var Kt,
  qt,
  q,
  Jt,
  Yt = e(() => {
    ((Kt = U()),
      se(),
      Ie(),
      ee(),
      s(),
      (qt = t(a(), 1)),
      ie(),
      v(),
      pt(),
      Se(),
      He(),
      $e(),
      We(),
      i(),
      Ce(),
      L(),
      V(),
      S(),
      fe(),
      be(),
      Pe(),
      C(),
      vt(),
      f(),
      Bt(),
      (q = z()),
      (Jt = k(N, (e) => ({
        gcTime: 0,
        queryKey: [`library-file-preview`, e],
        queryFn: ({ signal: t }) => {
          let n = K.libraryFiles;
          if (n == null) throw Error(`Library file previews are unavailable`);
          return zt(n, e, t);
        },
        refetchOnMount: `always`,
        retry: !1,
        staleTime: 0,
      }))));
  });
function Xt(e) {
  let t = (0, Zt.c)(27),
    { bytes: n, fileId: r, importKind: i, onDownload: a, title: o } = e,
    [s, c] = (0, Qt.useState)(!1),
    l = ut(),
    u = i === `docx` && !l,
    f = !u,
    p;
  t[0] !== n || t[1] !== i
    ? ((p = () => ot(n, i)), (t[0] = n), (t[1] = i), (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] !== n.byteLength || t[4] !== r || t[5] !== i
    ? ((m = [`library-artifact-preview`, r, i, n.byteLength]),
      (t[3] = n.byteLength),
      (t[4] = r),
      (t[5] = i),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] !== f || t[8] !== p || t[9] !== m
    ? ((h = { enabled: f, queryFn: p, queryKey: m, staleTime: Ae.FIVE_MINUTES }),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h))
    : (h = t[10]);
  let { data: g, isError: _, isLoading: v } = re(h),
    y = `library://${r}/${o}`;
  if (u) {
    let e = `${r}:${n.byteLength}`,
      i;
    return (
      t[11] !== n || t[12] !== y || t[13] !== e || t[14] !== o
        ? ((i = (0, J.jsx)(Qt.Suspense, {
            fallback: null,
            children: (0, J.jsx)(
              $t,
              {
                annotationBatchingEnabled: !1,
                bytes: n,
                disableAnnotations: !0,
                disableFileActions: !0,
                hostId: `library`,
                path: y,
                title: o,
              },
              e,
            ),
          })),
          (t[11] = n),
          (t[12] = y),
          (t[13] = e),
          (t[14] = o),
          (t[15] = i))
        : (i = t[15]),
      i
    );
  }
  if (v) {
    let e;
    return (
      t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(D, {
            className: `h-full`,
            children: (0, J.jsx)(d, {
              id: `libraryArtifactPreview.loading`,
              defaultMessage: `Loading preview`,
              description: `Status text while a Library Office file preview loads`,
            }),
          })),
          (t[16] = e))
        : (e = t[16]),
      e
    );
  }
  if (_ || g == null) {
    let e;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(d, {
          id: `libraryArtifactPreview.error`,
          defaultMessage: `Unable to render preview`,
          description: `Placeholder text when a Library Office file cannot be rendered`,
        })),
        (t[17] = e))
      : (e = t[17]);
    let n;
    t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, J.jsx)(d, {
          id: `libraryFilePreview.downloadUnsupported`,
          defaultMessage: `Download file`,
          description: `Button label to download an unsupported Library file`,
        })),
        (t[18] = n))
      : (n = t[18]);
    let r;
    return (
      t[19] === a
        ? (r = t[20])
        : ((r = (0, J.jsxs)(D, {
            className: `h-full flex-col gap-3`,
            children: [e, (0, J.jsx)(B, { color: `outline`, onClick: a, children: n })],
          })),
          (t[19] = a),
          (t[20] = r)),
      r
    );
  }
  let b;
  return (
    t[21] !== s || t[22] !== i || t[23] !== g || t[24] !== y || t[25] !== o
      ? ((b = (0, J.jsx)(dt, {
          annotationBatchingEnabled: !1,
          artifactKind: g.kind,
          commentsSidebarOpen: s,
          disableAnnotations: !0,
          disableFileActions: !0,
          hostId: `library`,
          importKind: i,
          onCommentsSidebarOpenChange: c,
          parsedArtifact: g,
          path: y,
          title: o,
        })),
        (t[21] = s),
        (t[22] = i),
        (t[23] = g),
        (t[24] = y),
        (t[25] = o),
        (t[26] = b))
      : (b = t[26]),
    b
  );
}
var Zt,
  Qt,
  J,
  $t,
  en = e(() => {
    ((Zt = U()),
      Te(),
      (Qt = t(a(), 1)),
      ie(),
      i(),
      V(),
      ct(),
      oe(),
      st(),
      lt(),
      (J = z()),
      M(),
      ($t = (0, Qt.lazy)(async () => {
        let { DocxPreviewPanel: e } = await R(
          async () => {
            let { DocxPreviewPanel: e } = await import(`./docx-preview-panel-7d038fc9f715.js`);
            return { DocxPreviewPanel: e };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
          import.meta.url,
        );
        return { default: e };
      })));
  });
function tn(e) {
  let t = (0, Z.c)(34),
    {
      file: n,
      imagePreviewIsError: r,
      imagePreviewIsPending: i,
      previewKind: a,
      onDownload: o,
      onRetryImagePreview: s,
    } = e;
  if (a === `image` && n.file_size_bytes != null && n.file_size_bytes > 41943040) {
    let e;
    return (
      t[0] !== n || t[1] !== o
        ? ((e = (0, Q.jsx)(un, { file: n, onDownload: o })), (t[0] = n), (t[1] = o), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (a === `image` && n.file_size_bytes == null) {
    let e;
    t[3] === o ? (e = t[4]) : ((e = (0, Q.jsx)(X, { onDownload: o })), (t[3] = o), (t[4] = e));
    let r;
    return (
      t[5] !== n || t[6] !== e
        ? ((r = (0, Q.jsx)(Y, { file: n, action: e })), (t[5] = n), (t[6] = e), (t[7] = r))
        : (r = t[7]),
      r
    );
  }
  if (a === `image` && !i && !r) return null;
  if (a === `image` && i) {
    let e;
    return (
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(ln, {})), (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  if (a === `image`) {
    let e;
    t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, {
          id: `libraryFilePreview.retryImage`,
          defaultMessage: `Retry preview`,
          description: `Button label to retry loading an image preview`,
        })),
        (t[9] = e))
      : (e = t[9]);
    let r;
    t[10] === s
      ? (r = t[11])
      : ((r = (0, Q.jsx)(B, { color: `outline`, onClick: s, children: e })),
        (t[10] = s),
        (t[11] = r));
    let i;
    return (
      t[12] !== n || t[13] !== r
        ? ((i = (0, Q.jsx)(Y, { file: n, action: r })), (t[12] = n), (t[13] = r), (t[14] = i))
        : (i = t[14]),
      i
    );
  }
  switch (a) {
    case `artifact`: {
      let e;
      return (
        t[15] !== n || t[16] !== o
          ? ((e = (0, Q.jsx)(nn, { file: n, onDownload: o })),
            (t[15] = n),
            (t[16] = o),
            (t[17] = e))
          : (e = t[17]),
        e
      );
    }
    case `html`:
    case `markdown`: {
      let e;
      return (
        t[18] !== n || t[19] !== o || t[20] !== a
          ? ((e = (0, Q.jsx)(sn, { file: n, renderMode: a, onDownload: o })),
            (t[18] = n),
            (t[19] = o),
            (t[20] = a),
            (t[21] = e))
          : (e = t[21]),
        e
      );
    }
    case `pdf`: {
      let e;
      return (
        t[22] !== n || t[23] !== o
          ? ((e = (0, Q.jsx)(rn, { file: n, onDownload: o })),
            (t[22] = n),
            (t[23] = o),
            (t[24] = e))
          : (e = t[24]),
        e
      );
    }
    case `text`: {
      let e;
      return (
        t[25] !== n || t[26] !== o
          ? ((e = (0, Q.jsx)(sn, { file: n, renderMode: `text`, onDownload: o })),
            (t[25] = n),
            (t[26] = o),
            (t[27] = e))
          : (e = t[27]),
        e
      );
    }
    case `unsupported`:
  }
  let c;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(d, {
        id: `libraryFilePreview.downloadUnsupported`,
        defaultMessage: `Download file`,
        description: `Button label to download an unsupported Library file`,
      })),
      (t[28] = c))
    : (c = t[28]);
  let l;
  t[29] === o
    ? (l = t[30])
    : ((l = (0, Q.jsx)(B, { color: `outline`, onClick: o, children: c })),
      (t[29] = o),
      (t[30] = l));
  let u;
  return (
    t[31] !== n || t[32] !== l
      ? ((u = (0, Q.jsx)(Y, { file: n, action: l })), (t[31] = n), (t[32] = l), (t[33] = u))
      : (u = t[33]),
    u
  );
}
function nn(e) {
  let t = (0, Z.c)(34),
    { file: r, onDownload: i } = e,
    a = n(N),
    o;
  t[0] === r ? (o = t[1]) : ((o = Ct(r)), (t[0] = r), (t[1] = o));
  let s = o,
    c = r.file_size_bytes != null && r.file_size_bytes > 41943040,
    l = s != null && !c,
    u;
  t[2] !== r || t[3] !== a
    ? ((u = (e) => {
        let { signal: t } = e;
        return kt(a.get(I), r, t);
      }),
      (t[2] = r),
      (t[3] = a),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] !== r.current_version_number || t[6] !== r.file_id || t[7] !== r.id
    ? ((d = [`library-file-preview-artifact`, r.id, r.file_id, r.current_version_number]),
      (t[5] = r.current_version_number),
      (t[6] = r.file_id),
      (t[7] = r.id),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== l || t[10] !== u || t[11] !== d
    ? ((f = { enabled: l, queryFn: u, queryKey: d, staleTime: Ae.FIVE_MINUTES }),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f))
    : (f = t[12]);
  let { data: p, dataUpdatedAt: m, isError: h, isLoading: g } = re(f);
  if (c) {
    let e;
    return (
      t[13] !== r || t[14] !== i
        ? ((e = (0, Q.jsx)(un, { file: r, onDownload: i })), (t[13] = r), (t[14] = i), (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  if (s == null) {
    let e;
    t[16] === i ? (e = t[17]) : ((e = (0, Q.jsx)(X, { onDownload: i })), (t[16] = i), (t[17] = e));
    let n;
    return (
      t[18] !== r || t[19] !== e
        ? ((n = (0, Q.jsx)(Y, { file: r, action: e })), (t[18] = r), (t[19] = e), (t[20] = n))
        : (n = t[20]),
      n
    );
  }
  if (g) {
    let e;
    return (
      t[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(ln, {})), (t[21] = e))
        : (e = t[21]),
      e
    );
  }
  if (h || p == null) {
    let e;
    t[22] === i ? (e = t[23]) : ((e = (0, Q.jsx)(X, { onDownload: i })), (t[22] = i), (t[23] = e));
    let n;
    return (
      t[24] !== r || t[25] !== e
        ? ((n = (0, Q.jsx)(Y, { file: r, action: e })), (t[24] = r), (t[25] = e), (t[26] = n))
        : (n = t[26]),
      n
    );
  }
  let _ = `${r.id}:${r.file_id}:${r.current_version_number ?? ``}:${m}`,
    v;
  return (
    t[27] !== p ||
    t[28] !== r.file_name ||
    t[29] !== r.id ||
    t[30] !== s ||
    t[31] !== i ||
    t[32] !== _
      ? ((v = (0, Q.jsx)(fn, {
          children: (0, Q.jsx)(
            Xt,
            { bytes: p, fileId: r.id, importKind: s, onDownload: i, title: r.file_name },
            _,
          ),
        })),
        (t[27] = p),
        (t[28] = r.file_name),
        (t[29] = r.id),
        (t[30] = s),
        (t[31] = i),
        (t[32] = _),
        (t[33] = v))
      : (v = t[33]),
    v
  );
}
function rn(e) {
  let t = (0, Z.c)(22),
    { file: r, onDownload: i } = e,
    a = n(N),
    o = r.file_size_bytes != null && r.file_size_bytes > 41943040,
    s = !o,
    c;
  t[0] !== r || t[1] !== a
    ? ((c = (e) => {
        let { signal: t } = e;
        return Ot(a.get(I), r, t);
      }),
      (t[0] = r),
      (t[1] = a),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== r.file_id || t[4] !== r.id
    ? ((l = [`library-file-preview-pdf`, r.id, r.file_id]),
      (t[3] = r.file_id),
      (t[4] = r.id),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] !== s || t[7] !== c || t[8] !== l
    ? ((u = { enabled: s, queryFn: c, queryKey: l, staleTime: Ae.FIVE_MINUTES }),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u))
    : (u = t[9]);
  let { data: d, isError: f, isLoading: p } = re(u);
  if (o) {
    let e;
    return (
      t[10] !== r || t[11] !== i
        ? ((e = (0, Q.jsx)(un, { file: r, onDownload: i })), (t[10] = r), (t[11] = i), (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  if (p) {
    let e;
    return (
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(ln, {})), (t[13] = e))
        : (e = t[13]),
      e
    );
  }
  if (f || d == null) {
    let e;
    t[14] === i ? (e = t[15]) : ((e = (0, Q.jsx)(X, { onDownload: i })), (t[14] = i), (t[15] = e));
    let n;
    return (
      t[16] !== r || t[17] !== e
        ? ((n = (0, Q.jsx)(Y, { file: r, action: e })), (t[16] = r), (t[17] = e), (t[18] = n))
        : (n = t[18]),
      n
    );
  }
  let m;
  return (
    t[19] !== r.id || t[20] !== d
      ? ((m = (0, Q.jsx)(an, { blob: d }, r.id)), (t[19] = r.id), (t[20] = d), (t[21] = m))
      : (m = t[21]),
    m
  );
}
function an(e) {
  let t = (0, Z.c)(25),
    { blob: n } = e,
    [r, i] = (0, mn.useState)(null),
    {
      canGoToNextPage: a,
      canGoToPreviousPage: o,
      goToNextPage: s,
      goToPreviousPage: c,
      handlePdfLoadSuccess: l,
      numPages: u,
      pageNumber: d,
      showPager: f,
    } = Pt(),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (e) => {
        let t = Math.floor(e.contentRect.width);
        i((e) => (e === t ? e : t));
      }),
      (t[0] = p))
    : (p = t[0]);
  let m = W(p),
    h;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(dn, {})), (t[1] = h))
    : (h = t[1]);
  let g, _;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(dn, {})), (_ = (0, Q.jsx)(dn, {})), (t[2] = g), (t[3] = _))
    : ((g = t[2]), (_ = t[3]));
  let v = r != null && r > 0 ? r : void 0,
    y;
  t[4] !== d || t[5] !== v
    ? ((y = (0, Q.jsx)(Ft, {
        className: `overflow-hidden rounded-sm shadow-sm`,
        pageNumber: d,
        width: v,
        renderAnnotationLayer: !1,
        renderTextLayer: !1,
      })),
      (t[4] = d),
      (t[5] = v),
      (t[6] = y))
    : (y = t[6]);
  let b;
  t[7] !== n || t[8] !== l || t[9] !== y
    ? ((b = (0, Q.jsx)(x, {
        name: `LibraryPdfPreview`,
        fallback: h,
        children: (0, Q.jsx)(Mt, {
          file: n,
          loading: null,
          onLoadSuccess: l,
          error: g,
          noData: _,
          children: y,
        }),
      })),
      (t[7] = n),
      (t[8] = l),
      (t[9] = y),
      (t[10] = b))
    : (b = t[10]);
  let S;
  t[11] !== m || t[12] !== b
    ? ((S = (0, Q.jsx)(`div`, {
        className: `min-h-0 w-full flex-1 overflow-auto rounded-lg bg-surface/90 p-4 shadow-lg`,
        children: (0, Q.jsx)(`div`, {
          ref: m,
          className: `mx-auto w-full max-w-full`,
          children: b,
        }),
      })),
      (t[11] = m),
      (t[12] = b),
      (t[13] = S))
    : (S = t[13]);
  let C;
  t[14] !== a ||
  t[15] !== o ||
  t[16] !== s ||
  t[17] !== c ||
  t[18] !== u ||
  t[19] !== d ||
  t[20] !== f
    ? ((C = f
        ? (0, Q.jsx)(It, {
            canGoToNextPage: a,
            canGoToPreviousPage: o,
            currentPage: d,
            totalPages: u ?? 1,
            onNextPage: s,
            onPreviousPage: c,
          })
        : null),
      (t[14] = a),
      (t[15] = o),
      (t[16] = s),
      (t[17] = c),
      (t[18] = u),
      (t[19] = d),
      (t[20] = f),
      (t[21] = C))
    : (C = t[21]);
  let w;
  return (
    t[22] !== S || t[23] !== C
      ? ((w = (0, Q.jsxs)(`div`, {
          className: `group/pdf-preview relative m-auto flex h-full min-h-0 w-[min(52rem,calc(100vw-4rem))] max-w-full flex-col items-center gap-3`,
          onPointerDown: on,
          children: [S, C],
        })),
        (t[22] = S),
        (t[23] = C),
        (t[24] = w))
      : (w = t[24]),
    w
  );
}
function on(e) {
  e.stopPropagation();
}
function sn(e) {
  let t = (0, Z.c)(28),
    { file: r, renderMode: i, onDownload: a } = e,
    o = n(N),
    s = r.file_size_bytes != null && r.file_size_bytes > 41943040,
    c = !s,
    l;
  t[0] !== r || t[1] !== o
    ? ((l = (e) => {
        let { signal: t } = e;
        return Dt(o.get(I), r, t);
      }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== r.file_id || t[4] !== r.id
    ? ((u = [`library-file-preview-text`, r.id, r.file_id]),
      (t[3] = r.file_id),
      (t[4] = r.id),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== c || t[7] !== l || t[8] !== u
    ? ((d = { enabled: c, queryFn: l, queryKey: u, staleTime: Ae.FIVE_MINUTES }),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d))
    : (d = t[9]);
  let { data: f, isError: p, isLoading: m } = re(d);
  if (s) {
    let e;
    return (
      t[10] !== r || t[11] !== a
        ? ((e = (0, Q.jsx)(un, { file: r, onDownload: a })), (t[10] = r), (t[11] = a), (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  if (m) {
    let e;
    return (
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(ln, {})), (t[13] = e))
        : (e = t[13]),
      e
    );
  }
  if (p || f == null) {
    let e;
    t[14] === a ? (e = t[15]) : ((e = (0, Q.jsx)(X, { onDownload: a })), (t[14] = a), (t[15] = e));
    let n;
    return (
      t[16] !== r || t[17] !== e
        ? ((n = (0, Q.jsx)(Y, { file: r, action: e })), (t[16] = r), (t[17] = e), (t[18] = n))
        : (n = t[18]),
      n
    );
  }
  if (i === `html` && f.length <= 5e6) {
    let e;
    t[19] === r.file_name
      ? (e = t[20])
      : ((e = { path: r.file_name }), (t[19] = r.file_name), (t[20] = e));
    let n;
    return (
      t[21] !== r.file_name || t[22] !== e || t[23] !== f
        ? ((n = (0, Q.jsx)(`div`, {
            className: `relative h-full w-full overflow-y-auto`,
            children: (0, Q.jsx)(Je, {
              attributes: e,
              embeddedHtml: f,
              presentation: `code-preview`,
              title: r.file_name,
            }),
          })),
          (t[21] = r.file_name),
          (t[22] = e),
          (t[23] = f),
          (t[24] = n))
        : (n = t[24]),
      n
    );
  }
  let h;
  return (
    t[25] !== i || t[26] !== f
      ? ((h =
          i === `markdown`
            ? (0, Q.jsx)(gt, {
                background: `normal`,
                className: `m-auto max-h-full w-[min(64rem,calc(100vw-4rem))] max-w-full text-start shadow-lg`,
                overflow: `auto`,
                children: (0, Q.jsx)(_t, { enableMetadataPreview: !0, markdown: f }),
              })
            : (0, Q.jsx)(`pre`, {
                className: `m-auto max-h-full w-[min(64rem,calc(100vw-4rem))] max-w-full overflow-auto rounded-lg bg-surface/90 p-6 text-start font-mono text-sm whitespace-pre-wrap text-default shadow-lg`,
                dir: `ltr`,
                onPointerDown: cn,
                children: f,
              })),
        (t[25] = i),
        (t[26] = f),
        (t[27] = h))
      : (h = t[27]),
    h
  );
}
function cn(e) {
  e.stopPropagation();
}
function ln() {
  let e = (0, Z.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Q.jsx)(he, {})), (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col items-center justify-center gap-3 text-default`,
          children: [
            t,
            (0, Q.jsx)(`div`, {
              role: `status`,
              className: `text-sm text-codex-description`,
              children: (0, Q.jsx)(d, {
                id: `libraryFilePreview.loading`,
                defaultMessage: `Loading preview`,
                description: `Status text while a Library file preview loads`,
              }),
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function un(e) {
  let t = (0, Z.c)(7),
    { file: n, onDownload: r } = e,
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(d, {
        id: `libraryFilePreview.tooLargeTitle`,
        defaultMessage: `File too large to preview`,
        description: `Title for Library file previews that exceed the rich preview size limit`,
      })),
      (a = (0, Q.jsx)(d, {
        id: `libraryFilePreview.tooLargeDescription`,
        defaultMessage: `You can still download or attach this file to ChatGPT`,
        description: `Description for Library file previews that exceed the rich preview size limit`,
      })),
      (t[0] = i),
      (t[1] = a))
    : ((i = t[0]), (a = t[1]));
  let o;
  t[2] === r ? (o = t[3]) : ((o = (0, Q.jsx)(X, { onDownload: r })), (t[2] = r), (t[3] = o));
  let s;
  return (
    t[4] !== n || t[5] !== o
      ? ((s = (0, Q.jsx)(Y, { file: n, title: i, description: a, action: o })),
        (t[4] = n),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function dn() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(D, {
          className: `h-full min-h-32`,
          children: (0, Q.jsx)(d, {
            id: `libraryFilePreview.pdfError`,
            defaultMessage: `Unable to render PDF preview`,
            description: `Placeholder text when PDF content cannot be rendered`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Y(e) {
  let t = (0, Z.c)(23),
    { file: n, action: r, description: i, title: a } = e,
    o;
  t[0] !== n.file_name || t[1] !== n.mime_type
    ? ((o = (0, mn.createElement)(Ne(n.file_name, n.mime_type ?? ``), {
        className: `icon-lg text-secondary`,
      })),
      (t[0] = n.file_name),
      (t[1] = n.mime_type),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === o
    ? (s = t[4])
    : ((s = (0, Q.jsx)(`div`, {
        className: `flex size-16 items-center justify-center rounded-2xl bg-text/10`,
        children: o,
      })),
      (t[3] = o),
      (t[4] = s));
  let c;
  t[5] === n.file_name
    ? (c = t[6])
    : ((c = (0, Q.jsx)(`div`, {
        className: `max-w-full truncate text-base font-medium`,
        children: n.file_name,
      })),
      (t[5] = n.file_name),
      (t[6] = c));
  let l;
  t[7] === a
    ? (l = t[8])
    : ((l =
        a ??
        (0, Q.jsx)(d, {
          id: `libraryFilePreview.unsupportedTitle`,
          defaultMessage: `Preview not available`,
          description: `Title for unsupported Library file preview types`,
        })),
      (t[7] = a),
      (t[8] = l));
  let u;
  t[9] === l
    ? (u = t[10])
    : ((u = (0, Q.jsx)(`div`, { className: `text-sm text-codex-description`, children: l })),
      (t[9] = l),
      (t[10] = u));
  let f;
  t[11] === i
    ? (f = t[12])
    : ((f =
        i ??
        (0, Q.jsx)(d, {
          id: `libraryFilePreview.unsupportedDescription`,
          defaultMessage: `This file type can be downloaded or attached to ChatGPT`,
          description: `Description for unsupported Library file preview types`,
        })),
      (t[11] = i),
      (t[12] = f));
  let p;
  t[13] === f
    ? (p = t[14])
    : ((p = (0, Q.jsx)(`div`, { className: `text-sm text-codex-description`, children: f })),
      (t[13] = f),
      (t[14] = p));
  let m;
  t[15] !== c || t[16] !== u || t[17] !== p
    ? ((m = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [c, u, p] })),
      (t[15] = c),
      (t[16] = u),
      (t[17] = p),
      (t[18] = m))
    : (m = t[18]);
  let h;
  return (
    t[19] !== r || t[20] !== s || t[21] !== m
      ? ((h = (0, Q.jsx)(`div`, {
          className: `flex h-full min-h-0 items-center justify-center px-6 text-default`,
          children: (0, Q.jsxs)(`div`, {
            className: `flex max-w-sm flex-col items-center gap-4 text-center`,
            children: [s, m, r],
          }),
        })),
        (t[19] = r),
        (t[20] = s),
        (t[21] = m),
        (t[22] = h))
      : (h = t[22]),
    h
  );
}
function fn(e) {
  let t = (0, Z.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`div`, {
          className: `m-auto h-[min(72vh,48rem)] w-[min(70rem,calc(100vw-4rem))] max-w-full overflow-hidden rounded-lg bg-surface/90 shadow-lg`,
          onPointerDown: pn,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function pn(e) {
  e.stopPropagation();
}
function X(e) {
  let t = (0, Z.c)(3),
    { onDownload: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(d, {
        id: `libraryFilePreview.downloadUnsupported`,
        defaultMessage: `Download file`,
        description: `Button label to download an unsupported Library file`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Q.jsx)(B, { color: `outline`, onClick: n, children: r })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var Z,
  mn,
  Q,
  hn,
  gn,
  _n = e(() => {
    ((Z = U()),
      Te(),
      ee(),
      (mn = t(a(), 1)),
      ie(),
      jt(),
      G(),
      i(),
      Ce(),
      V(),
      T(),
      Nt(),
      Lt(),
      u(),
      ht(),
      Ee(),
      be(),
      oe(),
      rt(),
      en(),
      Et(),
      St(),
      (Q = z()),
      (hn = 40 * 1024 * 1024),
      (gn = new URL(
        `` + new URL(`pdf.worker.min-2ac0aeeaff32.mjs`, import.meta.url).href,
        `` + import.meta.url,
      ).toString()),
      ft.workerSrc !== gn && (ft.workerSrc = gn));
  }),
  vn = e(() => {});
function yn(e) {
  let t = (0, Tn.c)(67),
    { googleWorkspaceIframePreviewEnabled: r, item: i, onClose: a } = e,
    o = n(N),
    s = te(),
    c = o.get(I),
    l = r ?? !1,
    u = wn(i.cloudFile),
    f;
  t[0] !== i.cloudFile.fileId ||
  t[1] !== i.cloudFile.mimeType ||
  t[2] !== i.cloudFile.provider ||
  t[3] !== i.cloudFile.sourceUrl ||
  t[4] !== l
    ? ((f =
        l && i.cloudFile.provider === `google_drive`
          ? Tt({
              fileId: i.cloudFile.fileId,
              mimeType: i.cloudFile.mimeType,
              sourceUrl: i.cloudFile.sourceUrl,
            })
          : null),
      (t[0] = i.cloudFile.fileId),
      (t[1] = i.cloudFile.mimeType),
      (t[2] = i.cloudFile.provider),
      (t[3] = i.cloudFile.sourceUrl),
      (t[4] = l),
      (t[5] = f))
    : (f = t[5]);
  let p = f,
    m = i.cloudFile.provider === `google_drive`,
    h = m && p == null,
    {
      data: g,
      isError: _,
      isFetching: v,
      isLoading: y,
      refetch: b,
    } = re({
      enabled: m,
      queryFn: (e) => {
        let { signal: t } = e;
        return tt(
          c,
          { file_id: u.file_id, file_name: u.file_name, mime_type: u.mime_type },
          { indexForRetrieval: !0, signal: t },
        );
      },
      queryKey: [
        `library-google-drive-preview-materialization`,
        u.id,
        u.file_id,
        i.cloudFile.currentVersion,
        i.cloudFile.modifiedAt,
      ],
      retry: !1,
      staleTime: Ae.FIVE_MINUTES,
    }),
    x =
      g == null
        ? u
        : {
            ...u,
            file_id: g.file_id,
            file_name: g.file_name,
            file_size_bytes: g.file_size_bytes,
            mime_type: g.mime_type,
            provider: void 0,
          },
    S = !h || g != null,
    C = wt(x),
    w = nt(i.cloudFile, De(!1)),
    T = C === `image`,
    [E, ee] = (0, En.useState)(null),
    D;
  t[6] === x.id
    ? (D = t[7])
    : ((D = [`library-file-preview-image`, x.id]), (t[6] = x.id), (t[7] = D));
  let O;
  t[8] !== c || t[9] !== x
    ? ((O = () => Qe(c, x, { showInline: !0 })), (t[8] = c), (t[9] = x), (t[10] = O))
    : (O = t[10]);
  let ne;
  t[11] !== D || t[12] !== O
    ? ((ne = { cacheKey: D, getDownloadRequest: O }), (t[11] = D), (t[12] = O), (t[13] = ne))
    : (ne = t[13]);
  let {
      dataUrl: ie,
      src: ae,
      isError: oe,
      isLoading: k,
      refetch: se,
    } = _e(T && S ? x.file_id : ``, ne),
    A;
  t[14] !== c || t[15] !== x || t[16] !== s || t[17] !== o
    ? ((A = async () => {
        try {
          await At(c, x);
        } catch {
          o.get(ge).danger(
            s.formatMessage({
              id: `libraryFilePreview.downloadError`,
              defaultMessage: `Unable to download file`,
              description: `Toast shown when downloading a Library file from the preview fails`,
            }),
          );
        }
      }),
      (t[14] = c),
      (t[15] = x),
      (t[16] = s),
      (t[17] = o),
      (t[18] = A))
    : (A = t[18]);
  let j = A,
    M = oe || E === x.id,
    ce = S && T && !k && !M,
    le = _ ? `unsupported` : C,
    P;
  t[19] === j
    ? (P = t[20])
    : ((P = () => {
        j();
      }),
      (t[19] = j),
      (t[20] = P));
  let F;
  t[21] === se
    ? (F = t[22])
    : ((F = () => {
        (ee(null), se());
      }),
      (t[21] = se),
      (t[22] = F));
  let L;
  t[23] !== x || t[24] !== M || t[25] !== k || t[26] !== le || t[27] !== P || t[28] !== F
    ? ((L = (0, $.jsx)(tn, {
        file: x,
        imagePreviewIsError: M,
        imagePreviewIsPending: k,
        previewKind: le,
        onDownload: P,
        onRetryImagePreview: F,
      })),
      (t[23] = x),
      (t[24] = M),
      (t[25] = k),
      (t[26] = le),
      (t[27] = P),
      (t[28] = F),
      (t[29] = L))
    : (L = t[29]);
  let ue = L,
    R = ue;
  if (p != null) {
    let e;
    (t[30] !== x.file_name || t[31] !== p
      ? ((e = (0, $.jsx)(`iframe`, {
          className: `h-full w-full border-0 bg-surface`,
          referrerPolicy: `no-referrer`,
          sandbox: `allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation`,
          src: p,
          title: x.file_name,
        })),
        (t[30] = x.file_name),
        (t[31] = p),
        (t[32] = e))
      : (e = t[32]),
      (R = e));
  } else if (y) {
    let e;
    (t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(ln, {})), (t[33] = e))
      : (e = t[33]),
      (R = e));
  } else if (ce) {
    let e = ae ?? Dn,
      n;
    t[34] === x.id ? (n = t[35]) : ((n = () => ee(x.id)), (t[34] = x.id), (t[35] = n));
    let r;
    (t[36] !== x.file_name || t[37] !== e || t[38] !== n
      ? ((r = (0, $.jsx)(`div`, {
          className: `flex h-full items-center justify-center p-6`,
          children: (0, $.jsx)(`img`, {
            alt: x.file_name,
            className: `max-h-full max-w-full rounded-lg object-contain shadow-lg`,
            src: e,
            onError: n,
          }),
        })),
        (t[36] = x.file_name),
        (t[37] = e),
        (t[38] = n),
        (t[39] = r))
      : (r = t[39]),
      (R = r));
  } else if (w != null && !T) {
    let e;
    (t[40] === ue
      ? (e = t[41])
      : ((e = (0, $.jsxs)($.Fragment, {
          children: [null, (0, $.jsx)($.Fragment, { children: ue })],
        })),
        (t[40] = ue),
        (t[41] = e)),
      (R = e));
  }
  let z = M ? null : ie,
    fe;
  t[42] !== x || t[43] !== a || t[44] !== z
    ? ((fe = (0, $.jsx)(bn, { file: x, imageDataUrl: z, onClose: a }, x.id)),
      (t[42] = x),
      (t[43] = a),
      (t[44] = z),
      (t[45] = fe))
    : (fe = t[45]);
  let pe = fe;
  if (m && g == null) {
    let e;
    (t[46] !== _ || t[47] !== v || t[48] !== b
      ? ((e = _
          ? (0, $.jsx)(`div`, {
              className: `mx-auto w-[min(48rem,calc(100vw-2rem))] max-w-full p-3`,
              children: (0, $.jsx)(Fe, {
                ariaLive: `polite`,
                content: (0, $.jsx)(d, {
                  id: `libraryFilePreview.materializationError`,
                  defaultMessage: `Unable to prepare this file`,
                  description: `Error shown at the bottom of a Google Drive file preview when the file cannot be prepared for attachment to a new ChatGPT or Codex conversation`,
                }),
                isPrimaryCtaDisabled: v,
                primaryCtaText: (0, $.jsx)(d, {
                  id: `libraryFilePreview.materializationRetry`,
                  defaultMessage: `Retry`,
                  description: `Button in a Google Drive file preview that retries preparing the file for attachment to a new ChatGPT or Codex conversation`,
                }),
                role: `status`,
                type: `error`,
                onPrimaryCtaClick: () => {
                  b();
                },
              }),
            })
          : null),
        (t[46] = _),
        (t[47] = v),
        (t[48] = b),
        (t[49] = e))
      : (e = t[49]),
      (pe = e));
  }
  let me = x.file_name,
    he = pe,
    V;
  t[50] === s
    ? (V = t[51])
    : ((V = s.formatMessage({
        id: `libraryFilePreview.download`,
        defaultMessage: `Download file`,
        description: `Aria label for downloading a file from the Library file preview`,
      })),
      (t[50] = s),
      (t[51] = V));
  let H;
  t[52] === j
    ? (H = t[53])
    : ((H = () => {
        j();
      }),
      (t[52] = j),
      (t[53] = H));
  let U;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(de, { asset: Oe })), (t[54] = U))
    : (U = t[54]);
  let W;
  t[55] !== V || t[56] !== H
    ? ((W = (0, $.jsx)(B, {
        "aria-label": V,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        onClick: H,
        children: U,
      })),
      (t[55] = V),
      (t[56] = H),
      (t[57] = W))
    : (W = t[57]);
  let G;
  t[58] !== null || t[59] !== W
    ? ((G = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [null, W] })),
      (t[58] = null),
      (t[59] = W),
      (t[60] = G))
    : (G = t[60]);
  let K;
  return (
    t[61] !== pe || t[62] !== R || t[63] !== x.file_name || t[64] !== a || t[65] !== G
      ? ((K = (0, $.jsx)(Gt, {
          assetName: me,
          bottomContent: he,
          endContent: G,
          onClose: a,
          children: R,
        })),
        (t[61] = pe),
        (t[62] = R),
        (t[63] = x.file_name),
        (t[64] = a),
        (t[65] = G),
        (t[66] = K))
      : (K = t[66]),
    K
  );
}
function bn(e) {
  let t = (0, Tn.c)(11),
    { file: n, imageDataUrl: i, onClose: a } = e,
    s = m(je),
    c;
  t[0] !== n.file_name || t[1] !== n.id || t[2] !== i
    ? ((c = me(
        i == null
          ? {
              file: { fsPath: n.file_name, label: o(n.file_name), path: n.file_name },
              kind: `file`,
              libraryFileId: n.id,
            }
          : {
              image: { filename: o(n.file_name), id: n.id, src: i },
              kind: `image`,
              libraryFileId: n.id,
            },
      )),
      (t[0] = n.file_name),
      (t[1] = n.id),
      (t[2] = i),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] !== n || t[5] !== a || t[6] !== s
    ? ((l =
        s === `codex`
          ? (0, $.jsx)(qe, {
              placement: { kind: `home` },
              children: (0, $.jsx)(Sn, { file: n, onClose: a }),
            })
          : (0, $.jsx)(xn, { file: n, onClose: a })),
      (t[4] = n),
      (t[5] = a),
      (t[6] = s),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== c || t[9] !== l
      ? ((u = (0, $.jsx)(yt, {
          children: (0, $.jsx)(_, {
            scope: ue,
            value: On,
            children: (0, $.jsx)(_, { scope: r, value: c, children: l }),
          }),
        })),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function xn(e) {
  let t = (0, Tn.c)(20),
    { file: n, onClose: r } = e,
    i = m(xe),
    a = m(O),
    o = m(l),
    s = te(),
    c = bt(),
    u;
  t[0] !== c || t[1] !== i
    ? ((u = { homeComposerController: c, homeComposerMode: i }), (t[0] = c), (t[1] = i), (t[2] = u))
    : (u = t[2]);
  let d = Ke(u);
  if (d == null) return null;
  let f = i === `work` && d.runLocationState.effectiveLocation === `local`,
    p;
  t[3] !== c ||
  t[4] !== n ||
  t[5] !== i ||
  t[6] !== d ||
  t[7] !== o ||
  t[8] !== s ||
  t[9] !== r ||
  t[10] !== f
    ? ((p = f
        ? (0, $.jsx)(Sn, { composerController: c, file: n, onClose: r, workMode: !0 })
        : (0, $.jsx)(et, {
            ...d.composerProps,
            className: `mx-auto w-[min(48rem,calc(100vw-2rem))] max-w-full`,
            composerController: c,
            errorClassName: `p-3`,
            hiddenAttachments: [
              {
                id: n.file_id,
                libraryFileId: n.id,
                mimeType: n.mime_type ?? null,
                name: n.file_name,
                size: n.file_size_bytes ?? void 0,
                source: `library`,
              },
            ],
            homeLeadingControl:
              i === `work`
                ? (0, $.jsx)(Le, {
                    conversationId: null,
                    disableCustomPermissions: !0,
                    disableDefaultPermissions: !0,
                    hostId: o,
                  })
                : void 0,
            placeholder: s.formatMessage({
              id: `libraryFilePreview.composerPlaceholder`,
              defaultMessage: `Ask about this file`,
              description: `Placeholder for the ChatGPT composer inside the Library file preview`,
            }),
            showFilePicker: !1,
            onSubmitAccepted: (e) => {
              (d.composerProps.onSubmitAccepted?.(e), r());
            },
          })),
      (t[3] = c),
      (t[4] = n),
      (t[5] = i),
      (t[6] = d),
      (t[7] = o),
      (t[8] = s),
      (t[9] = r),
      (t[10] = f),
      (t[11] = p))
    : (p = t[11]);
  let h = p,
    g;
  t[12] !== c || t[13] !== i || t[14] !== d || t[15] !== a?.projectId
    ? ((g =
        i === `work`
          ? {
              chrome: {
                actionBarControls: (0, $.jsx)(Ve, {
                  projectId: a?.projectId ?? null,
                  subtleHover: !0,
                }),
                actionBarPosition: `below`,
                actionBarTrailingControls: (0, $.jsx)($.Fragment, {
                  children: (0, $.jsx)(Re, {
                    cloudUsesLocalExecutor: d.workCloudUsesLocalExecutor,
                    isLocalExecutorStarting: d.isWorkLocalExecutorStarting,
                    runLocationState: d.runLocationState,
                    onRunLocationChange: d.setWorkRunLocation,
                  }),
                }),
                actionBarVisible: !0,
                className: `mx-auto w-[min(48rem,calc(100vw-2rem))] max-w-full`,
                composerController: c,
              },
              kind: `home`,
              overlayPlacement: `top`,
            }
          : { kind: `home` }),
      (t[12] = c),
      (t[13] = i),
      (t[14] = d),
      (t[15] = a?.projectId),
      (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== h || t[18] !== g
      ? ((_ = (0, $.jsx)(qe, { placement: g, children: h })), (t[17] = h), (t[18] = g), (t[19] = _))
      : (_ = t[19]),
    _
  );
}
function Sn(e) {
  let t = (0, Tn.c)(21),
    { composerController: r, file: i, onClose: a, surfacePlacement: s, workMode: c } = e,
    l = c !== void 0 && c,
    u = n(N),
    f = te(),
    p = y(),
    h = m(O),
    g = (0, En.useRef)(null),
    _ = i.file_size_bytes == null || i.file_size_bytes > 41943040,
    v,
    b;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => () => {
        g.current?.abort();
      }),
      (b = []),
      (t[0] = v),
      (t[1] = b))
    : ((v = t[0]), (b = t[1])),
    (0, En.useEffect)(v, b));
  let x;
  t[2] === _
    ? (x = t[3])
    : ((x = _
        ? (0, $.jsx)(Fe, {
            ariaLive: `polite`,
            content: (0, $.jsx)(d, {
              id: `libraryFilePreview.localFileSizeLimit`,
              defaultMessage: `Local tasks require a known file size of {maximumFileSize, number} MB or less. Use ChatGPT or download this file`,
              description: `Warning shown when a Library file has no size metadata or exceeds the local-task size limit; users can still attach the file to ChatGPT or download it`,
              values: { maximumFileSize: hn / 1048576 },
            }),
            role: `status`,
            type: `warning`,
          })
        : void 0),
      (t[2] = _),
      (t[3] = x));
  let S;
  t[4] === f
    ? (S = t[5])
    : ((S = f.formatMessage({
        id: `libraryFilePreview.composerPlaceholder`,
        defaultMessage: `Ask about this file`,
        description: `Placeholder for the ChatGPT composer inside the Library file preview`,
      })),
      (t[4] = f),
      (t[5] = S));
  let C;
  t[6] !== i || t[7] !== u
    ? ((C = async (e) => {
        let { fileAttachments: t, hostId: n } = e,
          r = new AbortController();
        g.current = r;
        let a = u.get(I),
          s =
            i.current_version_number == null
              ? ((await Ze(a, { cursor: null, query: i.file_name }).catch(Cn))?.items.find((e) => {
                  let { id: t } = e;
                  return t === i.id;
                }) ?? i)
              : i;
        r.signal.throwIfAborted();
        let c = await Ot(a, { ...s, gizmo_id: s.gizmo_id ?? i.gizmo_id }, r.signal),
          l = await we(u, n).createFileAttachment({ contents: c, label: o(s.file_name) });
        return (
          r.signal.aborted && (Ye(u, n, l.path), r.signal.throwIfAborted()),
          [
            ...t.filter((e) => e.fsPath !== i.file_name),
            {
              ...l,
              libraryFile: {
                currentVersion: s.current_version_number ?? void 0,
                fileId: s.file_id,
                libraryFileId: i.id,
              },
            },
          ]
        );
      }),
      (t[6] = i),
      (t[7] = u),
      (t[8] = C))
    : (C = t[8]);
  let w = l && h?.type !== `local` ? null : h,
    T;
  t[9] !== p || t[10] !== a
    ? ((T = (e, t) => {
        (a(), p(F(e), { state: t }));
      }),
      (t[9] = p),
      (t[10] = a),
      (t[11] = T))
    : (T = t[11]);
  let E;
  return (
    t[12] !== _ ||
    t[13] !== r ||
    t[14] !== s ||
    t[15] !== x ||
    t[16] !== S ||
    t[17] !== C ||
    t[18] !== w ||
    t[19] !== T
      ? ((E = (0, $.jsx)(Be, {
          aboveComposerContent: x,
          className: `mx-auto w-[min(48rem,calc(100vw-2rem))] max-w-full`,
          composerController: r,
          composerLayoutMode: `auto-single-line`,
          composerModeAvailability: it,
          hideRunLocationDropdownOverride: !0,
          placeholderText: S,
          prepareLocalConversationAttachments: C,
          selectedProject: w,
          submitDisabled: _,
          surfacePlacement: s,
          onLocalConversationCreated: T,
        })),
        (t[12] = _),
        (t[13] = r),
        (t[14] = s),
        (t[15] = x),
        (t[16] = S),
        (t[17] = C),
        (t[18] = w),
        (t[19] = T),
        (t[20] = E))
      : (E = t[20]),
    E
  );
}
function Cn() {
  return null;
}
function wn(e) {
  return {
    current_version_number: e.currentVersion,
    file_id: e.fileId,
    file_name: e.name,
    file_size_bytes: e.sizeBytes,
    gizmo_id: e.gizmoId,
    id: e.id,
    library_file_category: e.category,
    mime_type: e.mimeType,
    provider: e.provider,
    providerMimeType: e.mimeType,
  };
}
var Tn,
  En,
  $,
  Dn,
  On,
  kn = e(() => {
    ((Tn = U()),
      ye(),
      Te(),
      ee(),
      s(),
      (En = t(a(), 1)),
      ie(),
      v(),
      pe(),
      Yt(),
      ze(),
      G(),
      xt(),
      Ge(),
      He(),
      $e(),
      Xe(),
      We(),
      ve(),
      at(),
      c(),
      i(),
      L(),
      H(),
      be(),
      Pe(),
      w(),
      Me(),
      A(),
      le(),
      ce(),
      vt(),
      p(),
      g(),
      oe(),
      Et(),
      _n(),
      St(),
      Ue(),
      vn(),
      ($ = z()),
      (Dn = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==`),
      (On = j({ pathname: `/`, routeTemplate: `/` })));
  });
export { Yt as i, kn as n, Vt as r, yn as t };
//# sourceMappingURL=library-cloud-file-preview-e9b210a27555.js.map
