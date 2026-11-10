const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pdf-preview-diff-6ab2a73eb6ae.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./tiny-invariant-b34bc475860a.js",
      "./pdf-2cf994d8ae36.js",
      "./use-binary-preview-source-738ed48cc67a.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $O as t,
  $St as n,
  $st as r,
  Cit as i,
  F3 as a,
  FBt as o,
  I3 as s,
  JOt as c,
  LNt as l,
  MNt as u,
  NNt as d,
  NO as f,
  OFt as p,
  PBt as m,
  PO as h,
  Qst as g,
  SCt as _,
  XOt as v,
  ZSt as y,
  ek as b,
  iCt as x,
  kFt as S,
  nCt as ee,
  okt as C,
  sct as w,
  tkt as T,
  w_t as te,
  wit as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as E,
  CRn as D,
  Dor as O,
  E7t as re,
  Mnr as ie,
  _7t as ae,
  _p as oe,
  as as se,
  b7t as k,
  bRn as ce,
  c7t as le,
  eOr as ue,
  g7t as de,
  gp as fe,
  h7t as pe,
  jnr as me,
  kLr as he,
  l5t as ge,
  lDn as _e,
  nOr as ve,
  ns as ye,
  s7t as be,
  sDn as xe,
  u5t as Se,
  v7t as Ce,
  w7t as we,
  y7t as Te,
} from "./app-initial-ad16eaadf81f.js";
import {
  a as A,
  i as Ee,
  n as j,
  o as De,
  r as M,
  s as Oe,
  t as ke,
} from "./use-binary-preview-source-738ed48cc67a.js";
import { i as Ae, n as je, r as Me } from "./surface-c9a729ca89b3.js";
function Ne(e) {
  let t = (0, P.c)(15),
    { imagePreview: n, panelId: r, className: i, fallback: a, showMissingPreview: o } = e,
    s = C(),
    c = j(n?.before ?? null),
    l = j(n?.after ?? null),
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
    ? ((m = (0, F.jsx)(N, { preview: c, alt: f, panelId: r })),
      (t[2] = c),
      (t[3] = r),
      (t[4] = f),
      (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] !== l || t[7] !== r || t[8] !== f
    ? ((h = (0, F.jsx)(N, { preview: l, alt: f, panelId: r })),
      (t[6] = l),
      (t[7] = r),
      (t[8] = f),
      (t[9] = h))
    : (h = t[9]);
  let g;
  return (
    t[10] !== i || t[11] !== p || t[12] !== m || t[13] !== h
      ? ((g = (0, F.jsx)(De, { className: i, showAfterOnly: p, before: m, after: h })),
        (t[10] = i),
        (t[11] = p),
        (t[12] = m),
        (t[13] = h),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
function N(e) {
  let t = (0, P.c)(6),
    { preview: n, alt: r, panelId: i } = e,
    a = x(i === `right` && ve),
    o;
  if (t[0] !== r || t[1] !== a || t[2] !== n.dataUrl || t[3] !== n.isError || t[4] !== n.isLoading) {
    let e = n.dataUrl?.startsWith(`data:image/svg+xml;`);
    ((o = (0, F.jsx)(Ee, {
      children: n.isLoading
        ? (0, F.jsx)(M, { className: `text-xs` })
        : n.dataUrl != null && !n.isError
          ? (0, F.jsx)(`img`, {
              className: u(
                `max-h-full max-w-full object-contain shadow-sm`,
                !a && `rounded-sm`,
                e && `h-full w-full bg-white p-3`,
              ),
              src: n.dataUrl,
              alt: r,
            })
          : (0, F.jsx)(fe, {
              children: (0, F.jsx)(T, {
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
      (t[5] = o));
  } else o = t[5];
  return o;
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = m()), d(), y(), v(), ue(), oe(), Oe(), A(), ke(), (F = l()));
  }))();
}
function Pe(e) {
  let t = (0, L.c)(30),
    { path: n, className: r, fallback: i, hostId: a, environmentId: o, scrollable: s } = e,
    c = s !== void 0 && s,
    l = n != null && n.length > 0 && n !== `/dev/null`,
    d = a === te,
    f;
  t[0] !== o || t[1] !== n || t[2] !== l
    ? ((f = o == null || !l ? null : { environmentId: o, path: n }),
      (t[0] = o),
      (t[1] = n),
      (t[2] = l),
      (t[3] = f))
    : (f = t[3]);
  let p = ee(d ? pe : null, f),
    m = n ?? ``,
    h;
  t[4] !== a || t[5] !== m ? ((h = { path: m, hostId: a }), (t[4] = a), (t[5] = m), (t[6] = h)) : (h = t[6]);
  let g = l && !d,
    _;
  t[7] === g ? (_ = t[8]) : ((_ = { enabled: g }), (t[7] = g), (t[8] = _));
  let v;
  t[9] !== h || t[10] !== _
    ? ((v = { params: h, queryConfig: _ }), (t[9] = h), (t[10] = _), (t[11] = v))
    : (v = t[11]);
  let y = ne(`read-file`, v),
    { data: b, isLoading: x, isError: S } = p ?? y,
    C = b?.contents ?? null;
  if (!l) return i;
  if (x) {
    let e = c ? `overflow-auto` : `overflow-clip`,
      n;
    t[12] !== r || t[13] !== e
      ? ((n = u(`relative`, e, r)), (t[12] = r), (t[13] = e), (t[14] = n))
      : (n = t[14]);
    let i;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, R.jsx)(M, { className: `justify-center py-6 text-sm` })), (t[15] = i))
      : (i = t[15]);
    let a;
    return (
      t[16] === n
        ? (a = t[17])
        : ((a = (0, R.jsx)(`div`, { className: n, children: i })), (t[16] = n), (t[17] = a)),
      a
    );
  }
  if (C == null || C.length === 0 || S) return i;
  let w = c ? `normal` : `subtle`,
    T = c ? `auto` : `clip`,
    E;
  t[18] === C
    ? (E = t[19])
    : ((E = (0, R.jsx)(Me, { enableMetadataPreview: !0, markdown: C })), (t[18] = C), (t[19] = E));
  let D;
  t[20] !== o || t[21] !== a || t[22] !== n || t[23] !== E
    ? ((D = (0, R.jsx)(ye, { currentFilePath: n, hostId: a, environmentId: o, children: E })),
      (t[20] = o),
      (t[21] = a),
      (t[22] = n),
      (t[23] = E),
      (t[24] = D))
    : (D = t[24]);
  let O;
  return (
    t[25] !== r || t[26] !== D || t[27] !== w || t[28] !== T
      ? ((O = (0, R.jsx)(je, { background: w, className: r, overflow: T, children: D })),
        (t[25] = r),
        (t[26] = D),
        (t[27] = w),
        (t[28] = T),
        (t[29] = O))
      : (O = t[29]),
    O
  );
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = m()), d(), y(), w(), de(), se(), Ae(), i(), O(), A(), (R = l()));
  }))();
}
function Fe(e) {
  let t = (0, B.c)(11),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ loadingFallback: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = n ?? r.fallback,
    a;
  t[3] === r ? (a = t[4]) : ((a = (0, H.jsx)(U, { ...r })), (t[3] = r), (t[4] = a));
  let o;
  t[5] !== i || t[6] !== a
    ? ((o = (0, H.jsx)(V.Suspense, { fallback: i, children: a })), (t[5] = i), (t[6] = a), (t[7] = o))
    : (o = t[7]);
  let s;
  return (
    t[8] !== r.fallback || t[9] !== o
      ? ((s = (0, H.jsx)(xe, { name: `LazyPdfPreviewDiff`, fallback: r.fallback, children: o })),
        (t[8] = r.fallback),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
var B, V, H, U;
function W() {
  return (W = e(() => {
    ((B = m()),
      (V = o()),
      _e(),
      a(),
      (H = l()),
      S(),
      (U = s(
        async () =>
          (
            await p(
              async () => {
                let { PdfPreviewDiff: e } = await import(`./pdf-preview-diff-6ab2a73eb6ae.js`);
                return { PdfPreviewDiff: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url,
            )
          ).PdfPreviewDiff,
        { suspendToParent: !0, propagateLoadError: !0 },
      )));
  }))();
}
function G({ data: e, preferredTargetOverride: t }) {
  let n = t ?? e?.preferredTarget,
    r = e?.availableTargets ?? [],
    i =
      t == null
        ? (e?.targets ?? [])
        : (e?.targets ?? []).map((e) => ({ ...e, default: e.target === t || void 0 }));
  return {
    visibleTargets: Ce({ targets: i, availableTargets: r, includeHiddenTargets: !0, mode: e?.mode }),
    primaryTarget: Te({ preferredTarget: n ?? null, targets: i, availableTargets: r, mode: e?.mode }),
  };
}
async function K(e, t) {
  Se({ ...t, scope: e });
}
async function Ie(e, { cwd: t, hostId: n, openPath: r }) {
  return (t ?? r) ? e.query.fetch(le, { cwd: t, hostId: n, path: r }) : null;
}
async function Le(e, t) {
  let n = t.openPath ?? t.cwd;
  n &&
    (t.persistPreferred && e.set(q, { cwd: t.cwd, hostId: t.hostId, openPath: t.openPath }, t.target),
    await K(e, {
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
var q;
function J() {
  return (J = e(() => {
    (y(),
      be(),
      ge(),
      k(),
      r(),
      (q = _(g, (e) => void 0, void 0, {
        key: ({ cwd: e, hostId: t, openPath: n }) => `${t ?? ``}:${e ?? ``}:${n ?? ``}`,
      })));
  }))();
}
function Re(e) {
  let t = (0, Y.c)(16),
    {
      canOpenFile: r,
      githubFileLookup: i,
      loadOpenTargets: a,
      preferredTargetOverride: o,
      onRequestChanges: s,
      onCopyPath: l,
      onCopyRelativePath: u,
      onToggleWrap: d,
      getOpenInNewTab: p,
      handleOpenInTarget: m,
    } = e,
    h = n(g),
    _;
  t[0] !== r ||
  t[1] !== p ||
  t[2] !== i ||
  t[3] !== m ||
  t[4] !== a ||
  t[5] !== l ||
  t[6] !== u ||
  t[7] !== s ||
  t[8] !== d ||
  t[9] !== o ||
  t[10] !== h
    ? ((_ = async () => {
        let e = p?.(),
          [t, n, f] = await Promise.all([
            a?.() ?? null,
            i == null ? null : we({ ...i, operationSource: `diff_context_menu` }).catch(Be),
            e == null ? null : h.query.fetch(me).catch(ze),
          ]),
          { primaryTarget: g, visibleTargets: _ } = G({ data: t, preferredTargetOverride: o }),
          v = [
            {
              id: `request-changes`,
              message: c({
                id: `wham.diff.contextMenu.requestChanges`,
                defaultMessage: `Request changes`,
                description: `Context menu option for requesting changes on a diff file`,
              }),
              onSelect: s,
            },
          ];
        if (
          (g &&
            v.push({
              id: `open-primary`,
              message: c({
                id: `wham.diff.contextMenu.openInTarget`,
                defaultMessage: `Open in {target}`,
                description: `Context menu option to open a file in the primary target`,
              }),
              messageValues: { target: g.label },
              icon: g.icon,
              onSelect: () => m(g.target, !1, g.appPath),
            }),
          g != null || e != null)
        ) {
          let t = [];
          (e != null &&
            t.push({
              id: `open-in-new-tab`,
              message: c({
                id: `wham.diff.contextMenu.newTab`,
                defaultMessage: `New tab`,
                description: `Open the diff file in a new editor tab within the current app`,
              }),
              icon: f?.appIconMedium ?? void 0,
              onSelect: e,
            }),
            t.push(
              ..._.map((e) => ({
                id: e.id,
                message: c({
                  id: `wham.diff.contextMenu.openInTargetSubmenu`,
                  defaultMessage: `{target}`,
                  description: `Context menu option to open a file in the target app`,
                }),
                messageValues: { target: e.label },
                icon: e.icon,
                onSelect: () => m(e.target, ae(e), e.appPath),
              })),
            ),
            v.push({
              id: `open-with`,
              message: c({
                id: `wham.diff.contextMenu.openWith`,
                defaultMessage: `Open with`,
                description: `Context menu option to select an alternate open target`,
              }),
              submenu: t,
            }));
        }
        return (
          n != null &&
            v.push({
              id: `open-in-github`,
              message: c({
                id: `wham.diff.contextMenu.openInGitHub`,
                defaultMessage: `Open in GitHub`,
                description: `Context menu option to open a diff file on GitHub`,
              }),
              onSelect: () => {
                D({ href: n, initiator: `side_panel_menu`, originHostId: i?.hostConfig.id });
              },
            }),
          (g || e != null || n != null) && v.push({ id: `section-separator-1`, type: `separator` }),
          v.push(
            {
              id: `copy-selection`,
              message: c({
                id: `wham.diff.contextMenu.copySelection`,
                defaultMessage: `Copy selection`,
                description: `Context menu option to copy selected text`,
              }),
              enabled: !1,
            },
            {
              id: `copy-path`,
              message: c({
                id: `wham.diff.contextMenu.copyPath`,
                defaultMessage: `Copy path`,
                description: `Context menu option to copy the file path`,
              }),
              enabled: r,
              onSelect: l,
            },
          ),
          u != null &&
            v.push({
              id: `copy-relative-path`,
              message: c({
                id: `wham.diff.contextMenu.copyRelativePath`,
                defaultMessage: `Copy relative path`,
                description: `Context menu option to copy the relative file path`,
              }),
              onSelect: u,
            }),
          v.push({
            id: `toggle-wrap`,
            message: c({
              id: `wham.diff.contextMenu.toggleWrap`,
              defaultMessage: `Toggle line wrap`,
              description: `Context menu option to toggle line wrapping in the diff view`,
            }),
            onSelect: d,
          }),
          v
        );
      }),
      (t[0] = r),
      (t[1] = p),
      (t[2] = i),
      (t[3] = m),
      (t[4] = a),
      (t[5] = l),
      (t[6] = u),
      (t[7] = s),
      (t[8] = d),
      (t[9] = o),
      (t[10] = h),
      (t[11] = _))
    : (_ = t[11]);
  let v = _,
    y;
  t[12] === v
    ? (y = t[13])
    : ((y = async () => {
        let e = window.getSelection()?.toString()?.trim() ?? ``,
          t = !!e,
          n = () => {
            t && f(e);
          };
        return (await v()).map((e) => (e.id === `copy-selection` ? { ...e, enabled: t, onSelect: n } : e));
      }),
      (t[12] = v),
      (t[13] = y));
  let b = y,
    x;
  return (t[14] === b ? (x = t[15]) : ((x = { getItems: b }), (t[14] = b), (t[15] = x)), x);
}
function ze() {
  return null;
}
function Be() {
  return null;
}
function Ve(e) {
  let n = (0, Y.c)(14),
    r,
    i,
    a,
    o,
    s;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]), (o = n[4]), (s = n[5]))
    : (({ children: r, disableNative: i, getPriorityItems: o, getAdditionalItems: a, ...s } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o),
      (n[5] = s));
  let { getItems: c } = Re(s),
    l;
  n[6] !== a || n[7] !== c || n[8] !== o
    ? ((l = async () => {
        let e = o?.();
        if (e != null && e.length > 0) return e;
        let t = a?.(),
          n = await c();
        return t == null || t.length === 0
          ? n
          : [...t, { id: `language-separator`, type: `separator` }, ...n];
      }),
      (n[6] = a),
      (n[7] = c),
      (n[8] = o),
      (n[9] = l))
    : (l = n[9]);
  let u;
  return (
    n[10] !== r || n[11] !== i || n[12] !== l
      ? ((u = (0, X.jsx)(t, { getItems: l, disableNative: i, children: r })),
        (n[10] = r),
        (n[11] = i),
        (n[12] = l),
        (n[13] = u))
      : (u = n[13]),
    u
  );
}
var Y, X;
function Z() {
  return (Z = e(() => {
    ((Y = m()), y(), v(), b(), ce(), J(), re(), ie(), k(), r(), h(), (X = l()));
  }))();
}
var Q, $, He;
function Ue() {
  return (Ue = e(() => {
    (he(),
      (Q = E(`review-filter-generated-files`, !1)),
      ($ = E(`load-full-files`, !0)),
      (He = E(`skip-revert-confirmation`, !1)));
  }))();
}
export {
  Ne as _,
  Ve as a,
  Ie as c,
  K as d,
  Le as f,
  z as g,
  Pe as h,
  He as i,
  G as l,
  W as m,
  Q as n,
  Z as o,
  Fe as p,
  $ as r,
  q as s,
  Ue as t,
  J as u,
  I as v,
};
//# sourceMappingURL=review-preferences-model-ed5ca3d17e0f.js.map
