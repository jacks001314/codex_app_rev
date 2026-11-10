const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pdf-preview-diff-4a96d14dbf83.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./tiny-invariant-b34bc475860a.js",
      "./pdf-a08358d5d20c.js",
      "./use-binary-preview-source-90b1b8b2193d.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  SO as o,
  VDt as s,
  Vxt as c,
  _Mt as l,
  aSt as u,
  crt as d,
  fPt as f,
  gMt as p,
  iO as m,
  jDt as h,
  kDt as g,
  lgt as _,
  pPt as v,
  rO as y,
  rst as b,
  srt as x,
  vzt as S,
  wot as C,
  xMt as w,
  xO as T,
  yzt as E,
  z4 as D,
  zxt as ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  BCr as O,
  BTt as k,
  HCn as A,
  HTt as j,
  JPn as te,
  JTt as ne,
  KTt as re,
  LTt as ie,
  RCr as ae,
  RTt as oe,
  VTt as se,
  WCn as ce,
  ZPn as le,
  cVt as ue,
  d9n as de,
  es as fe,
  hp as pe,
  iNr as M,
  lVt as me,
  mp as he,
  oHt as ge,
  rNr as _e,
  rrr as ve,
  rs as ye,
  sHt as be,
  u9n as xe,
  zTt as Se,
} from "./app-initial-5851df3f6cb1.js";
import {
  a as N,
  i as Ce,
  n as P,
  o as we,
  r as F,
  s as Te,
  t as Ee,
} from "./use-binary-preview-source-90b1b8b2193d.js";
import { i as De, n as Oe, r as ke } from "./surface-3fad834862de.js";
function Ae(e) {
  let t = (0, L.c)(15),
    { imagePreview: n, panelId: r, className: i, fallback: a, showMissingPreview: o } = e,
    c = s(),
    l = P(n?.before ?? null),
    u = P(n?.after ?? null),
    d = l.dataUrl != null || u.dataUrl != null || l.isLoading || u.isLoading;
  if (!n || (!o && !d)) return a;
  let f;
  t[0] === c
    ? (f = t[1])
    : ((f = c.formatMessage({
        id: `codex.diffView.imagePreviewAlt`,
        defaultMessage: `Image preview`,
        description: `Alt text for image previews in the diff view`,
      })),
      (t[0] = c),
      (t[1] = f));
  let p = f,
    m = n.before == null && n.after != null,
    h;
  t[2] !== l || t[3] !== r || t[4] !== p
    ? ((h = (0, R.jsx)(I, { preview: l, alt: p, panelId: r })),
      (t[2] = l),
      (t[3] = r),
      (t[4] = p),
      (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] !== u || t[7] !== r || t[8] !== p
    ? ((g = (0, R.jsx)(I, { preview: u, alt: p, panelId: r })),
      (t[6] = u),
      (t[7] = r),
      (t[8] = p),
      (t[9] = g))
    : (g = t[9]);
  let _;
  return (
    t[10] !== i || t[11] !== m || t[12] !== h || t[13] !== g
      ? ((_ = (0, R.jsx)(we, { className: i, showAfterOnly: m, before: h, after: g })),
        (t[10] = i),
        (t[11] = m),
        (t[12] = h),
        (t[13] = g),
        (t[14] = _))
      : (_ = t[14]),
    _
  );
}
function I(e) {
  let t = (0, L.c)(6),
    { preview: n, alt: i, panelId: a } = e,
    o = c(a === `right` && O),
    s;
  if (t[0] !== i || t[1] !== o || t[2] !== n.dataUrl || t[3] !== n.isError || t[4] !== n.isLoading) {
    let e = n.dataUrl?.startsWith(`data:image/svg+xml;`);
    ((s = (0, R.jsx)(Ce, {
      children: n.isLoading
        ? (0, R.jsx)(F, { className: `text-xs` })
        : n.dataUrl != null && !n.isError
          ? (0, R.jsx)(`img`, {
              className: p(
                `max-h-full max-w-full object-contain shadow-sm`,
                !o && `rounded-sm`,
                e && `h-full w-full bg-white p-3`,
              ),
              src: n.dataUrl,
              alt: i,
            })
          : (0, R.jsx)(he, {
              children: (0, R.jsx)(r, {
                id: `codex.diffView.imagePreviewEmpty`,
                defaultMessage: `No image`,
                description: `Placeholder text when an image preview is unavailable`,
              }),
            }),
    })),
      (t[0] = i),
      (t[1] = o),
      (t[2] = n.dataUrl),
      (t[3] = n.isError),
      (t[4] = n.isLoading),
      (t[5] = s));
  } else s = t[5];
  return s;
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = S()), l(), a(), h(), ae(), pe(), Te(), N(), Ee(), (R = w()));
  }))();
}
function je(e) {
  let t = (0, B.c)(30),
    { path: n, className: r, fallback: i, hostId: a, environmentId: o, scrollable: s } = e,
    c = s !== void 0 && s,
    l = n != null && n.length > 0 && n !== `/dev/null`,
    u = a === _,
    f;
  t[0] !== o || t[1] !== n || t[2] !== l
    ? ((f = o == null || !l ? null : { environmentId: o, path: n }),
      (t[0] = o),
      (t[1] = n),
      (t[2] = l),
      (t[3] = f))
    : (f = t[3]);
  let m = ee(u ? ie : null, f),
    h = n ?? ``,
    g;
  t[4] !== a || t[5] !== h ? ((g = { path: h, hostId: a }), (t[4] = a), (t[5] = h), (t[6] = g)) : (g = t[6]);
  let v = l && !u,
    y;
  t[7] === v ? (y = t[8]) : ((y = { enabled: v }), (t[7] = v), (t[8] = y));
  let b;
  t[9] !== g || t[10] !== y
    ? ((b = { params: g, queryConfig: y }), (t[9] = g), (t[10] = y), (t[11] = b))
    : (b = t[11]);
  let x = d(`read-file`, b),
    { data: S, isLoading: C, isError: w } = m ?? x,
    T = S?.contents ?? null;
  if (!l) return i;
  if (C) {
    let e = c ? `overflow-auto` : `overflow-clip`,
      n;
    t[12] !== r || t[13] !== e
      ? ((n = p(`relative`, e, r)), (t[12] = r), (t[13] = e), (t[14] = n))
      : (n = t[14]);
    let i;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, V.jsx)(F, { className: `justify-center py-6 text-sm` })), (t[15] = i))
      : (i = t[15]);
    let a;
    return (
      t[16] === n
        ? (a = t[17])
        : ((a = (0, V.jsx)(`div`, { className: n, children: i })), (t[16] = n), (t[17] = a)),
      a
    );
  }
  if (T == null || T.length === 0 || w) return i;
  let E = c ? `normal` : `subtle`,
    D = c ? `auto` : `clip`,
    O;
  t[18] === T
    ? (O = t[19])
    : ((O = (0, V.jsx)(ke, { enableMetadataPreview: !0, markdown: T })), (t[18] = T), (t[19] = O));
  let k;
  t[20] !== o || t[21] !== a || t[22] !== n || t[23] !== O
    ? ((k = (0, V.jsx)(fe, { currentFilePath: n, hostId: a, environmentId: o, children: O })),
      (t[20] = o),
      (t[21] = a),
      (t[22] = n),
      (t[23] = O),
      (t[24] = k))
    : (k = t[24]);
  let A;
  return (
    t[25] !== r || t[26] !== k || t[27] !== E || t[28] !== D
      ? ((A = (0, V.jsx)(Oe, { background: E, className: r, overflow: D, children: k })),
        (t[25] = r),
        (t[26] = k),
        (t[27] = E),
        (t[28] = D),
        (t[29] = A))
      : (A = t[29]),
    A
  );
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = S()), l(), a(), b(), oe(), ye(), De(), x(), ve(), N(), (V = w()));
  }))();
}
function Me(e) {
  let t = (0, U.c)(11),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ loadingFallback: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = n ?? r.fallback,
    a;
  t[3] === r ? (a = t[4]) : ((a = (0, G.jsx)(K, { ...r })), (t[3] = r), (t[4] = a));
  let o;
  t[5] !== i || t[6] !== a
    ? ((o = (0, G.jsx)(W.Suspense, { fallback: i, children: a })), (t[5] = i), (t[6] = a), (t[7] = o))
    : (o = t[7]);
  let s;
  return (
    t[8] !== r.fallback || t[9] !== o
      ? ((s = (0, G.jsx)(A, { name: `LazyPdfPreviewDiff`, fallback: r.fallback, children: o })),
        (t[8] = r.fallback),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
var U, W, G, K;
function q() {
  return (q = e(() => {
    ((U = S()),
      (W = E()),
      ce(),
      D(),
      (G = w()),
      v(),
      (K = t(
        async () =>
          (
            await f(
              async () => {
                let { PdfPreviewDiff: e } = await import(`./pdf-preview-diff-4a96d14dbf83.js`);
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
function J({ data: e, preferredTargetOverride: t }) {
  let n = t ?? e?.preferredTarget,
    r = e?.availableTargets ?? [],
    i =
      t == null
        ? (e?.targets ?? [])
        : (e?.targets ?? []).map((e) => ({ ...e, default: e.target === t || void 0 }));
  return {
    visibleTargets: k({ targets: i, availableTargets: r, includeHiddenTargets: !0, mode: e?.mode }),
    primaryTarget: se({ preferredTarget: n ?? null, targets: i, availableTargets: r, mode: e?.mode }),
  };
}
async function Y(e, t) {
  me({ ...t, scope: e });
}
async function Ne(e, { cwd: t, hostId: n, openPath: r }) {
  return (t ?? r) ? e.query.fetch(be, { cwd: t, hostId: n, path: r }) : null;
}
async function Pe(e, t) {
  let n = t.openPath ?? t.cwd;
  n &&
    (t.persistPreferred && e.set(X, { cwd: t.cwd, hostId: t.hostId, openPath: t.openPath }, t.target),
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
var X;
function Z() {
  return (Z = e(() => {
    (a(),
      ge(),
      ue(),
      j(),
      C(),
      (X = u(n, (e) => void 0, void 0, {
        key: ({ cwd: e, hostId: t, openPath: n }) => `${t ?? ``}:${e ?? ``}:${n ?? ``}`,
      })));
  }))();
}
function Fe(e) {
  let t = (0, Q.c)(16),
    {
      canOpenFile: r,
      githubFileLookup: a,
      loadOpenTargets: o,
      preferredTargetOverride: s,
      onRequestChanges: c,
      onCopyPath: l,
      onCopyRelativePath: u,
      onToggleWrap: d,
      getOpenInNewTab: f,
      handleOpenInTarget: p,
    } = e,
    m = i(n),
    h;
  t[0] !== r ||
  t[1] !== f ||
  t[2] !== a ||
  t[3] !== p ||
  t[4] !== o ||
  t[5] !== l ||
  t[6] !== u ||
  t[7] !== c ||
  t[8] !== d ||
  t[9] !== s ||
  t[10] !== m
    ? ((h = async () => {
        let e = f?.(),
          [t, n, i] = await Promise.all([
            o?.() ?? null,
            a == null ? null : re({ ...a, operationSource: `diff_context_menu` }).catch(Le),
            e == null ? null : m.query.fetch(xe).catch(Ie),
          ]),
          { primaryTarget: h, visibleTargets: _ } = J({ data: t, preferredTargetOverride: s }),
          v = [
            {
              id: `request-changes`,
              message: g({
                id: `wham.diff.contextMenu.requestChanges`,
                defaultMessage: `Request changes`,
                description: `Context menu option for requesting changes on a diff file`,
              }),
              onSelect: c,
            },
          ];
        if (
          (h &&
            v.push({
              id: `open-primary`,
              message: g({
                id: `wham.diff.contextMenu.openInTarget`,
                defaultMessage: `Open in {target}`,
                description: `Context menu option to open a file in the primary target`,
              }),
              messageValues: { target: h.label },
              icon: h.icon,
              onSelect: () => p(h.target, !1, h.appPath),
            }),
          h != null || e != null)
        ) {
          let t = [];
          (e != null &&
            t.push({
              id: `open-in-new-tab`,
              message: g({
                id: `wham.diff.contextMenu.newTab`,
                defaultMessage: `New tab`,
                description: `Open the diff file in a new editor tab within the current app`,
              }),
              icon: i?.appIconMedium ?? void 0,
              onSelect: e,
            }),
            t.push(
              ..._.map((e) => ({
                id: e.id,
                message: g({
                  id: `wham.diff.contextMenu.openInTargetSubmenu`,
                  defaultMessage: `{target}`,
                  description: `Context menu option to open a file in the target app`,
                }),
                messageValues: { target: e.label },
                icon: e.icon,
                onSelect: () => p(e.target, Se(e), e.appPath),
              })),
            ),
            v.push({
              id: `open-with`,
              message: g({
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
              message: g({
                id: `wham.diff.contextMenu.openInGitHub`,
                defaultMessage: `Open in GitHub`,
                description: `Context menu option to open a diff file on GitHub`,
              }),
              onSelect: () => {
                le({ href: n, initiator: `side_panel_menu`, originHostId: a?.hostConfig.id });
              },
            }),
          (h || e != null || n != null) && v.push({ id: `section-separator-1`, type: `separator` }),
          v.push(
            {
              id: `copy-selection`,
              message: g({
                id: `wham.diff.contextMenu.copySelection`,
                defaultMessage: `Copy selection`,
                description: `Context menu option to copy selected text`,
              }),
              enabled: !1,
            },
            {
              id: `copy-path`,
              message: g({
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
              message: g({
                id: `wham.diff.contextMenu.copyRelativePath`,
                defaultMessage: `Copy relative path`,
                description: `Context menu option to copy the relative file path`,
              }),
              onSelect: u,
            }),
          v.push({
            id: `toggle-wrap`,
            message: g({
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
      (t[1] = f),
      (t[2] = a),
      (t[3] = p),
      (t[4] = o),
      (t[5] = l),
      (t[6] = u),
      (t[7] = c),
      (t[8] = d),
      (t[9] = s),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let _ = h,
    v;
  t[12] === _
    ? (v = t[13])
    : ((v = async () => {
        let e = window.getSelection()?.toString()?.trim() ?? ``,
          t = !!e,
          n = () => {
            t && y(e);
          };
        return (await _()).map((e) => (e.id === `copy-selection` ? { ...e, enabled: t, onSelect: n } : e));
      }),
      (t[12] = _),
      (t[13] = v));
  let b = v,
    x;
  return (t[14] === b ? (x = t[15]) : ((x = { getItems: b }), (t[14] = b), (t[15] = x)), x);
}
function Ie() {
  return null;
}
function Le() {
  return null;
}
function Re(e) {
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
  let { getItems: o } = Fe(a),
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
      ? ((c = (0, $.jsx)(T, { getItems: s, disableNative: r, children: n })),
        (t[8] = n),
        (t[9] = r),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
var Q, $;
function ze() {
  return (ze = e(() => {
    ((Q = S()), a(), h(), o(), te(), Z(), ne(), de(), j(), C(), m(), ($ = w()));
  }))();
}
var Be, Ve, He;
function Ue() {
  return (Ue = e(() => {
    (_e(),
      (Be = M(`review-filter-generated-files`, !1)),
      (Ve = M(`load-full-files`, !0)),
      (He = M(`skip-revert-confirmation`, !1)));
  }))();
}
export {
  Ae as _,
  Re as a,
  Ne as c,
  Y as d,
  Pe as f,
  H as g,
  je as h,
  He as i,
  J as l,
  q as m,
  Be as n,
  ze as o,
  Me as p,
  Ve as r,
  X as s,
  Ue as t,
  Z as u,
  z as v,
};
//# sourceMappingURL=review-preferences-model-4ff078b4c04e.js.map
