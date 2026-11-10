const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pdf-preview-diff-e9b07a72c7c5.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
      "./pdf-dc559eb66b2a.js",
      "./use-binary-preview-source-4f8b7bce953a.js",
      "./use-pdf-pager-4c5c1a42c12a.js",
      "./tiny-invariant-e6f85c6caa3f.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Z as n,
  A3t as r,
  Amn as i,
  B6t as a,
  Cpn as o,
  D1 as s,
  E$ as c,
  E1 as l,
  F3t as u,
  FDt as d,
  GG as f,
  HLt as p,
  IV as m,
  KL as h,
  M6t as g,
  N3t as _,
  O3t as v,
  OW as y,
  Opn as b,
  P6t as x,
  PDt as S,
  PV as ee,
  QZ as C,
  Rpn as w,
  Spn as T,
  T$ as E,
  VLt as D,
  WG as O,
  _1 as te,
  _Jt as ne,
  _mn as re,
  a3t as k,
  bpn as A,
  g1 as ie,
  gmn as ae,
  h1 as oe,
  hmn as j,
  kW as se,
  kmn as M,
  m1 as ce,
  nWt as le,
  o3t as N,
  p1 as ue,
  qL as de,
  s6t as fe,
  v1 as P,
  vJt as pe,
  zpn as F,
} from "./app-initial-f094ef01c64d.js";
import { r as me, t as he } from "./github-file-url-de7160c14b01.js";
import {
  a as I,
  i as ge,
  n as L,
  o as _e,
  r as R,
  s as ve,
  t as ye,
} from "./use-binary-preview-source-4f8b7bce953a.js";
import { i as be, n as xe, r as Se } from "./surface-572ba2609efa.js";
function Ce(e) {
  let t = (0, B.c)(15),
    { imagePreview: n, panelId: r, className: i, fallback: a, showMissingPreview: o } = e,
    s = b(),
    c = L(n?.before ?? null),
    l = L(n?.after ?? null),
    u = c.dataUrl != null || l.dataUrl != null || c.isLoading || l.isLoading;
  if (!n || (!o && !u)) return a;
  let d;
  t[0] === s
    ? (d = t[1])
    : ((d = s.formatMessage({
        id: `codex.diffView.imagePreviewAlt`,
        defaultMessage: `Image preview`,
        description: `Alt text for image previews in the diff view`,
      })),
      (t[0] = s),
      (t[1] = d));
  let f = d,
    p = n.before == null && n.after != null,
    m;
  t[2] !== c || t[3] !== r || t[4] !== f
    ? ((m = (0, V.jsx)(z, { preview: c, alt: f, panelId: r })),
      (t[2] = c),
      (t[3] = r),
      (t[4] = f),
      (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] !== l || t[7] !== r || t[8] !== f
    ? ((h = (0, V.jsx)(z, { preview: l, alt: f, panelId: r })),
      (t[6] = l),
      (t[7] = r),
      (t[8] = f),
      (t[9] = h))
    : (h = t[9]);
  let g;
  return (
    t[10] !== i || t[11] !== p || t[12] !== m || t[13] !== h
      ? ((g = (0, V.jsx)(_e, { className: i, showAfterOnly: p, before: m, after: h })),
        (t[10] = i),
        (t[11] = p),
        (t[12] = m),
        (t[13] = h),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
function z(e) {
  let t = (0, B.c)(6),
    { preview: n, alt: r, panelId: i } = e,
    a = u(i === `right` && p),
    s;
  if (
    t[0] !== r ||
    t[1] !== a ||
    t[2] !== n.dataUrl ||
    t[3] !== n.isError ||
    t[4] !== n.isLoading
  ) {
    let e = n.dataUrl?.startsWith(`data:image/svg+xml;`);
    ((s = (0, V.jsx)(ge, {
      children: n.isLoading
        ? (0, V.jsx)(R, { className: `text-xs` })
        : n.dataUrl != null && !n.isError
          ? (0, V.jsx)(`img`, {
              className: w(
                `max-h-full max-w-full object-contain shadow-sm`,
                !a && `rounded-sm`,
                e && `h-full w-full bg-white p-3`,
              ),
              src: n.dataUrl,
              alt: r,
            })
          : (0, V.jsx)(y, {
              children: (0, V.jsx)(o, {
                id: `codex.diffView.imagePreviewEmpty`,
                defaultMessage: `No image`,
                description: `Placeholder text when an image preview is unavailable`,
              }),
            }),
    })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = n.dataUrl),
      (t[3] = n.isError),
      (t[4] = n.isLoading),
      (t[5] = s));
  } else s = t[5];
  return s;
}
var B,
  V,
  we = e(() => {
    ((B = M()), F(), v(), T(), D(), se(), ve(), I(), ye(), (V = j()));
  });
function Te(e) {
  let t = (0, H.c)(30),
    { path: n, className: r, fallback: i, hostId: a, environmentId: o, scrollable: s } = e,
    c = s !== void 0 && s,
    l = n != null && n.length > 0 && n !== `/dev/null`,
    u;
  t[0] !== o || t[1] !== n || t[2] !== l
    ? ((u = o == null || !l ? null : { environmentId: o, path: n }),
      (t[0] = o),
      (t[1] = n),
      (t[2] = l),
      (t[3] = u))
    : (u = t[3]);
  let d = _(null, u),
    f = n ?? ``,
    p;
  t[4] !== a || t[5] !== f
    ? ((p = { path: f, hostId: a }), (t[4] = a), (t[5] = f), (t[6] = p))
    : (p = t[6]);
  let m = l && !0,
    h;
  t[7] === m ? (h = t[8]) : ((h = { enabled: m }), (t[7] = m), (t[8] = h));
  let g;
  t[9] !== p || t[10] !== h
    ? ((g = { params: p, queryConfig: h }), (t[9] = p), (t[10] = h), (t[11] = g))
    : (g = t[11]);
  let v = pe(`read-file`, g),
    { data: y, isLoading: b, isError: x } = d ?? v,
    S = y?.contents ?? null;
  if (!l) return i;
  if (b) {
    let e = c ? `overflow-auto` : `overflow-clip`,
      n;
    t[12] !== r || t[13] !== e
      ? ((n = w(`relative`, e, r)), (t[12] = r), (t[13] = e), (t[14] = n))
      : (n = t[14]);
    let i;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, U.jsx)(R, { className: `justify-center py-6 text-sm` })), (t[15] = i))
      : (i = t[15]);
    let a;
    return (
      t[16] === n
        ? (a = t[17])
        : ((a = (0, U.jsx)(`div`, { className: n, children: i })), (t[16] = n), (t[17] = a)),
      a
    );
  }
  if (S == null || S.length === 0 || x) return i;
  let C = c ? `normal` : `subtle`,
    T = c ? `auto` : `clip`,
    E;
  t[18] === S
    ? (E = t[19])
    : ((E = (0, U.jsx)(Se, { enableMetadataPreview: !0, markdown: S })), (t[18] = S), (t[19] = E));
  let D;
  t[20] !== o || t[21] !== a || t[22] !== n || t[23] !== E
    ? ((D = (0, U.jsx)(ee, { currentFilePath: n, hostId: a, environmentId: o, children: E })),
      (t[20] = o),
      (t[21] = a),
      (t[22] = n),
      (t[23] = E),
      (t[24] = D))
    : (D = t[24]);
  let O;
  return (
    t[25] !== r || t[26] !== D || t[27] !== C || t[28] !== T
      ? ((O = (0, U.jsx)(xe, { background: C, className: r, overflow: T, children: D })),
        (t[25] = r),
        (t[26] = D),
        (t[27] = C),
        (t[28] = T),
        (t[29] = O))
      : (O = t[29]),
    O
  );
}
var H,
  U,
  Ee = e(() => {
    ((H = M()), F(), v(), a(), m(), be(), ne(), le(), I(), (U = j()));
  });
function De(e) {
  let t = (0, W.c)(11),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ loadingFallback: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = n ?? r.fallback,
    a;
  t[3] === r ? (a = t[4]) : ((a = (0, K.jsx)(q, { ...r })), (t[3] = r), (t[4] = a));
  let o;
  t[5] !== i || t[6] !== a
    ? ((o = (0, K.jsx)(G.Suspense, { fallback: i, children: a })),
      (t[5] = i),
      (t[6] = a),
      (t[7] = o))
    : (o = t[7]);
  let s;
  return (
    t[8] !== r.fallback || t[9] !== o
      ? ((s = (0, K.jsx)(h, { name: `LazyPdfPreviewDiff`, fallback: r.fallback, children: o })),
        (t[8] = r.fallback),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
var W,
  G,
  K,
  q,
  Oe = e(() => {
    ((W = M()),
      (G = t(i(), 1)),
      de(),
      C(),
      (K = j()),
      re(),
      (q = n(
        async () =>
          (
            await ae(
              async () => {
                let { PdfPreviewDiff: e } = await import(`./pdf-preview-diff-e9b07a72c7c5.js`);
                return { PdfPreviewDiff: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
              import.meta.url,
            )
          ).PdfPreviewDiff,
        { suspendToParent: !0 },
      )));
  });
function J({ data: e, preferredTargetOverride: t }) {
  let n = t ?? e?.preferredTarget,
    r = e?.availableTargets ?? [],
    i =
      t == null
        ? (e?.targets ?? [])
        : (e?.targets ?? []).map((e) => ({ ...e, default: e.target === t || void 0 }));
  return {
    visibleTargets: ie({
      targets: i,
      availableTargets: r,
      includeHiddenTargets: !0,
      mode: e?.mode,
    }),
    primaryTarget: te({
      preferredTarget: n ?? null,
      targets: i,
      availableTargets: r,
      mode: e?.mode,
    }),
  };
}
async function Y(e, t) {
  c(t);
}
async function ke(e, { cwd: t, hostId: n, openPath: r }) {
  return (t ?? r) ? e.query.fetch(s, { cwd: t, hostId: n, path: r }) : null;
}
async function Ae(e, t) {
  let n = t.openPath ?? t.cwd;
  n &&
    (t.persistPreferred &&
      e.set(X, { cwd: t.cwd, hostId: t.hostId, openPath: t.openPath }, t.target),
    await Y(e, {
      column: t.column,
      cwd: t.cwd,
      hostId: t.hostId,
      line: t.line,
      path: n,
      appPath: t.appPath,
      persistPreferredTargetPath: t.persistPreferred && t.cwd != null ? t.cwd : void 0,
      target: t.target,
    }));
}
var X,
  Z = e(() => {
    (v(),
      l(),
      E(),
      P(),
      N(),
      (X = fe(k, (e) => void 0, void 0, {
        key: ({ cwd: e, hostId: t, openPath: n }) => `${t ?? ``}:${e ?? ``}:${n ?? ``}`,
      })));
  });
function je(e) {
  let t = (0, Q.c)(16),
    {
      canOpenFile: n,
      githubFileLookup: i,
      loadOpenTargets: a,
      preferredTargetOverride: o,
      onRequestChanges: s,
      onCopyPath: c,
      onCopyRelativePath: l,
      onToggleWrap: u,
      getOpenInNewTab: d,
      handleOpenInTarget: f,
    } = e,
    p = r(k),
    m;
  t[0] !== n ||
  t[1] !== d ||
  t[2] !== i ||
  t[3] !== f ||
  t[4] !== a ||
  t[5] !== c ||
  t[6] !== l ||
  t[7] !== s ||
  t[8] !== u ||
  t[9] !== o ||
  t[10] !== p
    ? ((m = async () => {
        let e = d?.(),
          [t, r, m] = await Promise.all([
            a?.() ?? null,
            i == null ? null : he({ ...i, operationSource: `diff_context_menu` }).catch(Ne),
            e == null ? null : p.query.fetch(S).catch(Me),
          ]),
          { primaryTarget: h, visibleTargets: g } = J({ data: t, preferredTargetOverride: o }),
          _ = [
            {
              id: `request-changes`,
              message: A({
                id: `wham.diff.contextMenu.requestChanges`,
                defaultMessage: `Request changes`,
                description: `Context menu option for requesting changes on a diff file`,
              }),
              onSelect: s,
            },
          ];
        if (
          (h &&
            _.push({
              id: `open-primary`,
              message: A({
                id: `wham.diff.contextMenu.openInTarget`,
                defaultMessage: `Open in {target}`,
                description: `Context menu option to open a file in the primary target`,
              }),
              messageValues: { target: h.label },
              icon: h.icon,
              onSelect: () => f(h.target, !1, h.appPath),
            }),
          h != null || e != null)
        ) {
          let t = [];
          (e != null &&
            t.push({
              id: `open-in-new-tab`,
              message: A({
                id: `wham.diff.contextMenu.newTab`,
                defaultMessage: `New tab`,
                description: `Open the diff file in a new editor tab within the current app`,
              }),
              icon: m?.appIconMedium ?? void 0,
              onSelect: e,
            }),
            t.push(
              ...g.map((e) => ({
                id: e.id,
                message: A({
                  id: `wham.diff.contextMenu.openInTargetSubmenu`,
                  defaultMessage: `{target}`,
                  description: `Context menu option to open a file in the target app`,
                }),
                messageValues: { target: e.label },
                icon: e.icon,
                onSelect: () => f(e.target, oe(e), e.appPath),
              })),
            ),
            _.push({
              id: `open-with`,
              message: A({
                id: `wham.diff.contextMenu.openWith`,
                defaultMessage: `Open with`,
                description: `Context menu option to select an alternate open target`,
              }),
              submenu: t,
            }));
        }
        return (
          r != null &&
            _.push({
              id: `open-in-github`,
              message: A({
                id: `wham.diff.contextMenu.openInGitHub`,
                defaultMessage: `Open in GitHub`,
                description: `Context menu option to open a diff file on GitHub`,
              }),
              onSelect: () => {
                x({ href: r, initiator: `side_panel_menu`, originHostId: i?.hostConfig.id });
              },
            }),
          (h || e != null || r != null) && _.push({ id: `section-separator-1`, type: `separator` }),
          _.push(
            {
              id: `copy-selection`,
              message: A({
                id: `wham.diff.contextMenu.copySelection`,
                defaultMessage: `Copy selection`,
                description: `Context menu option to copy selected text`,
              }),
              enabled: !1,
            },
            {
              id: `copy-path`,
              message: A({
                id: `wham.diff.contextMenu.copyPath`,
                defaultMessage: `Copy path`,
                description: `Context menu option to copy the file path`,
              }),
              enabled: n,
              onSelect: c,
            },
          ),
          l != null &&
            _.push({
              id: `copy-relative-path`,
              message: A({
                id: `wham.diff.contextMenu.copyRelativePath`,
                defaultMessage: `Copy relative path`,
                description: `Context menu option to copy the relative file path`,
              }),
              onSelect: l,
            }),
          _.push({
            id: `toggle-wrap`,
            message: A({
              id: `wham.diff.contextMenu.toggleWrap`,
              defaultMessage: `Toggle line wrap`,
              description: `Context menu option to toggle line wrapping in the diff view`,
            }),
            onSelect: u,
          }),
          _
        );
      }),
      (t[0] = n),
      (t[1] = d),
      (t[2] = i),
      (t[3] = f),
      (t[4] = a),
      (t[5] = c),
      (t[6] = l),
      (t[7] = s),
      (t[8] = u),
      (t[9] = o),
      (t[10] = p),
      (t[11] = m))
    : (m = t[11]);
  let h = m,
    g;
  t[12] === h
    ? (g = t[13])
    : ((g = async () => {
        let e = window.getSelection()?.toString()?.trim() ?? ``,
          t = !!e,
          n = () => {
            t && ue(e);
          };
        return (await h()).map((e) =>
          e.id === `copy-selection` ? { ...e, enabled: t, onSelect: n } : e,
        );
      }),
      (t[12] = h),
      (t[13] = g));
  let _ = g,
    v;
  return (t[14] === _ ? (v = t[15]) : ((v = { getItems: _ }), (t[14] = _), (t[15] = v)), v);
}
function Me() {
  return null;
}
function Ne() {
  return null;
}
function Pe(e) {
  let t = (0, Q.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, disableNative: r, getPriorityItems: i, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let { getItems: o } = je(a),
    s;
  t[5] !== o || t[6] !== i
    ? ((s = () => {
        let e = i?.();
        return e != null && e.length > 0 ? e : o();
      }),
      (t[5] = o),
      (t[6] = i),
      (t[7] = s))
    : (s = t[7]);
  let c;
  return (
    t[8] !== n || t[9] !== r || t[10] !== s
      ? ((c = (0, $.jsx)(O, { getItems: s, disableNative: r, children: n })),
        (t[8] = n),
        (t[9] = r),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
var Q,
  $,
  Fe = e(() => {
    ((Q = M()), v(), T(), f(), g(), Z(), me(), d(), P(), N(), ce(), ($ = j()));
  });
export {
  J as a,
  Ae as c,
  Te as d,
  Ee as f,
  ke as i,
  De as l,
  we as m,
  Fe as n,
  Z as o,
  Ce as p,
  X as r,
  Y as s,
  Pe as t,
  Oe as u,
};
//# sourceMappingURL=use-code-diff-context-menu-6d352d781f8f.js.map
